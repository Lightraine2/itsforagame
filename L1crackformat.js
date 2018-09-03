function(context, args) {
    var i=0;
    var target=args.target;
    var result="";
    var unlocked=false;
    var unlockers =["unlock", "release", "open"];
 
    for(i=0;i<unlockers.length; i++)
    {
        result=target.call({EZ_21:unlockers[i]});
        if(result.includes("UNLOCKED"))
        {
            unlocked=true;
            break;
        }
    }
    return{ok:unlocked, msg:result+". Key: "+unlockers[i]}
}
