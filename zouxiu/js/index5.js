/**
 * Created by Administrator on 2016/10/27.
 */
window.onload=function(){

        var atTrd=localStorage.getItem("idcar"),
            flag=localStorage.getItem("flag");
            console.log(flag);
         if(flag){
             $(".pt span").html(atTrd);
             $(".but1").val("注销登录").css({width:".8rem",fontSize:".15rem"});
             $(".but2").css({display:"none"});
             $(".but1").on("singleTap",function(){
                 localStorage.removeItem("idcar");
                 localStorage.removeItem("flag");
             })
         }
         if(flag==false){
             $(".pt span").html("未知");
             $(".but1").val("登录").css({width:".5rem"});
             $(".but2").css({display:"block"});
             $(".but1").on("singleTap",function(){
                 window.location.assign("denglu.html");
             })
         }





    //footer切换
    var oDp= $(".dp"),
        oDp1= $(".dp1"),
        oDp2= $(".dp2"),
        oDp3= $(".dp3"),
        oDp4= $(".dp4");
    oDp.on("singleTap",function(){
        window.location.assign("index2.html");
    });
    oDp1.on("singleTap",function(){
        window.location.assign("index3.html");
    });
    oDp2.on("singleTap",function(){
        window.location.assign("index4.html");
    });
    oDp3.on("singleTap",function(){
        window.location.assign("index5.html");
    });
    oDp4.on("singleTap",function(){
        window.location.assign("index7.html");
    });
    //登录 注册 跳转
    var
        oBut1= $(".but1"),
        oBut2= $(".but2"),
        oPst=$(".pst"),
        oPst1=$(".pst1"),
        oPst2=$(".pst2"),
        oPst3=$(".pst3");

    oBut1.on("singleTap",function(){
        window.location.assign("denglu.html");
        return false;
    });
    oBut2.on("singleTap",function(){
        window.location.assign("zhuce.html");
        return false;
    });
    oPst.on("singleTap",function(){
        if($(".pt span").html()=="未知"){
            window.location.assign("denglu.html")
        }else{
            window.location.assign("dingdan.html");
        }

    });
    oPst1.on("singleTap",function(){
        if($(".pt span").html()=="未知"){
            window.location.assign("denglu.html")
        }else{
            window.location.assign("youhuijuan.html");
        }
    });
    oPst2.on("singleTap",function(){
        if($(".pt span").html()=="未知"){
            window.location.assign("denglu.html")
        }else{
            window.location.assign("liulan.html");
        }

    });
    oPst3.on("singleTap",function(){
        if($(".pt span").html()=="未知"){
            window.location.assign("denglu.html")
        }else{
            window.location.assign("shoucang.html");
        }

    });



}



