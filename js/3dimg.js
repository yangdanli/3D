$(function(){
    var bigsence=$("<div>");
    bigsence.css({
        width:800,height:400,border:"1px solid red",position:"fixed",top:0,left:0,right:0,bottom:0,margin:"auto"
    }).appendTo("body");
    var num=10;
    var arr=[];

    for(var i=0;i<num;i++){
        //var aa="400-40(i+1)";
        var sence=$("<div>");
        sence.css({
            width:"100%",height:100/num+"%",
            perspective:"3000px",
            //transformOrigin:"center"+aa+"px"
        }).appendTo(bigsence);
        var box=$("<div>");
        arr.push(box);
        box.css({
            width:"100%",height:"100%",position:"relative" ,transformStyle:"preserve-3d",transition:"transform 1s ease "+0.1*i+"s",
            transformOrigin:"center center 200px"
        }).appendTo(sence);

        for(var j=0;j<6;j++){
            var panel=$("<div>");
            panel.css({
                position:"absolute",top:0,left:0
            }).appendTo(box);

            if(j==0){
                panel.css({
                    width:"100%",height:"400px",transform:"rotateX(90deg)",transformOrigin:"top"
                });
            }else if(j==1){
                panel.css({
                    width:"400px",height:"100%",transform:"rotateY(-90deg)",transformOrigin:"left",
                    background:"url(images/444.jpg) no-repeat 0 "+(-i)*40+"px"

                })
            }else if(j==2){
                panel.css({
                    width:"100%",height:"100%",transform:"rotateY(180deg)",
                    background:"url(images/111.jpg) no-repeat 0 "+(-i)*40+"px"
                })
            }else if(j==3){
                panel.css({
                    width:"400px",height:"100%",transform:"rotateY(90deg)",
                    transformOrigin:"right",left:400,
                    background:"url(images/333.jpg) no-repeat 0 "+(-i)*40+"px"
                })
            }else if(j==4){
                panel.css({
                    width:"400px",height:"400px",transform:"rotateX(-90deg)",bottom:0,
                    transformOrigin:"bottom"
                })
            }else if(j==5){
                panel.css({
                    width:"100%",height:"100%",transform:"translateZ(400px)",
                    background:"url(images/222.jpg) no-repeat 0 "+(-i)*40+"px"
                })
            }
        }
    }
    var a=0;
    window.onblur=function(){
        clearInterval(tt);
    };
    window.onfocus=function(){
        tt=setInterval(move,4000)
    };
    var tt=setInterval(move,4000);
    function move(){
        a+=90;
        for(var i=0;i<arr.length;i++){
            arr[i].css({
                transform:"rotateY("+a+"deg)"
            })
        }
    }

});
