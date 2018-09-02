function(context, args) {
var d = "open,unlock,release".split(',');
var pri = "2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97".split(',').map(Number);
    var clr = "red purple blue cyan green lime yellow orange".split(' ');
    var r = "Required unlock*!LOCK_UNLOCKED! ez_21*!LOCK_UNLOCKED! ez_35*!LOCK_UNLOCKED! ez_40*!LOCK_UNLOCKED! c001*!LOCK_UNLOCKED!c002*!LOCK_UNLOCKED! c003*Connection terminated.*digit*ez_prime".split('*')
    var sl = {};
    var done21 = false;
    var done35 = false;
    var done40 = false;
    var done01 = false;
    var done02 = false;
    var done03 = false;
    function shuffleArray(array) {
     for (var i = array.length - 1; i > 0; i--) {
         var j = Math.floor(Math.random() * (i + 1));
         var temp = array[i];
         array[i] = array[j];
         array[j] = temp;
     }
     return array;
 }
 if (!args || !args.t) {
  return {
     ok: false,
     msg: "crack{t:#s.target.loc} )"
 }
}
var tsec = args.t;
var sec_level = #s.scripts.get_level({name:tsec.name});
var l = #s.scripts.lib();
if (sec_level < 4 && !args.override) {
  var sec_level_name = l.security_level_names[sec_level];
  return {
     ok: false,
     msg: "The script you have passed is " + sec_level_name + ". Are you sure you want to continue? If so, pass override:true"
 }
}
var rlt = args.t.call({});
function ez_21() {
    for (var i = 0; i < 3; i++) {
        sl.ez_21 = d[i];
        rlt = args.t.call(sl)
        if (rlt.includes(r[7]) || rlt.includes(r[1])) {
            return;
        }
    }
}
function ez_35() {
    for (var ex = 0; ex < 3; ex++) {
        sl.ez_35 = d[ex];
        rlt = args.t.call(sl);
 
        if (rlt.includes(r[7])) {
            break;
        }
    }
    for (var e = 0; e < 10; e++) {
        sl.digit = e;
        rlt = args.t.call(sl);
        if (rlt.includes(r[7]) || rlt.includes(r[2])) {
          return;
      }
  }
}
function ez_40() {
    for (var prime = 0; prime < 3; prime++) {
     sl.ez_40 = d[prime];
     rlt = args.t.call(sl);
     if (rlt.includes(r[9])) {
        break;
    }
}
for (var p = 0; p < 25; p++) {
    sl.ez_prime = pri[p];
    rlt = args.t.call(sl);
    if (rlt.includes(r[7]) || rlt.includes(r[3])) {
        return;
    }
}
}
function c001() {
    for (var c = 0; c < 8; c++) {
        sl.c001 = clr[c];
        sl.color_digit = clr[c].length;
        rlt = args.t.call(sl)
        if (rlt.includes(r[4])) {
            return;
        }
    }
}
function c002() {
    for (var h = 0; h < 8; h++) {
        sl.c002 = clr[h];
        sl.c002_complement = clr[(h + 4) % 8];
        rlt = args.t.call(sl)
        if (rlt.includes(r[7]) || rlt.includes(r[5])) {
          return;
      }
  }
}
function c003() {
    for (var a = 0; a < 8; a++) {
        sl.c003 = clr[a];
        sl.c003_triad_1 = clr[(a + 3) % 8];
        sl.c003_triad_2 = clr[(a + 5) % 8];
        rlt = args.t.call(sl)
        if (rlt.includes(r[6])) {
            return;
        }
    }
}
shuffleArray(d);
shuffleArray(pri);
while (rlt.includes("+LOCK_ERROR+")) {
    rlt = args.t.call(sl);
    if ((!done21) && rlt.includes("!EZ_21!")) {
     ez_21();
     done21 = true
 }
 if ((!done35) && rlt.includes("!EZ_35!")) {
     ez_35();
     done35 = true;
 }
 if ((!done40) && rlt.includes("!EZ_40!")) {
     ez_40();
     done40 = true
 }
 if ((!done01) && rlt.includes("!c001!")) {
     c001();
     done01 = true
 }
 if ((!done02) && rlt.includes("!c002!") ) {
     c002();
     done02 = true
 }
 if ( (!done03) && rlt.includes("!c003!")) {
     c003();
     done03 = true
 }
}
return {
    msg: rlt
}
}
 
}
