(function(){
    function textShadow(){
        $("body").css({
            "transtion": '.4s linear',
            "text-shadow": '2px 2px gray',
        })
        setTimeout(function(){
            $("body").css({
                "transtion": "none",
                "text-shadow": "none",
            })
        }, 400)
    }

    function textLean(direction){
        if(direction == "left"){
            $("body").css({
                "transtion": '.4s linear',
                "transform": 'rotate3d(0,0,1,-1deg)',
            })
        }else {
            $("body").css({
                "transtion": '.4s linear',
                "transform": 'rotate3d(0,0,1,1deg)',
            })
        }
        

        setTimeout(function(){
            $("body").css({
            "transtion": 'none',
            "transform": 'none',
        })
        }, 400)
    }

    function ghostShadowFade(){
        // generate random position
        var left = $("body").width() * Math.random();
        var top = $("body").height() * Math.random();
        $(".ghost-shadow").css({
            "position": "fixed",
            "left": left,
            "top": top,
            "width": "100px",
            "height": "200px",
            "box-shadow": "0 0 30px 30px rgba(0,0,0,1)",
            "background-color": "rgba(0,0,0,1)",
            "border-radius": "50px",
        })
    }



    function randomEvents(){

    }

    // let ghosts out, ha ha ha
    //textShadow();
    //textLean("left");
    ghostShadowFade();
})();