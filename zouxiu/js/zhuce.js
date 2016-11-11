/**
 * Created by Administrator on 2016/10/27.
 */
window.onload=function(){
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
        oBuy= $(".buy");

    oBuy.on("singleTap",function(){
        window.location.assign("denglu.html");
        return false;
    });


      //点击注册
       var    oBtt= $(".btt"),
              oId= $(".Id"),
              oPass= $(".pas"),
              opat = $(".pat");
      oBtt.on("singleTap",function(){
           if(oId.val()==""||(!(/^1[3458]\d{9}$/).test(oId.val()))){
               oId.css({borderColor:"red"});
               oPass.css({borderColor:"red"});
               opat.css({borderColor:"red"});
               if(oPass.val()!=""||((/^[a-zA-Z0-9]{6,20}$/i).test(oPass.val())==true)){
                  oPass.css({borderColor:"#ccc"});
               }
               if(oPass.val()===opat.val()){
                   opat.css({borderColor:"#ccc"});
               }

           }else if(oPass.val()==""||((/^[a-zA-Z0-9]{6,20}$/i).test(oPass.val())==false)){
               oPass.css({borderColor:"red"});
               opat.css({borderColor:"red"});
           }else if(oPass.val()!==opat.val()){
               opat.css({borderColor:"red"});
           }else{
               oId.css({borderColor:"#ccc"});
               oPass.css({borderColor:"#ccc"});
               opat.css({borderColor:"#ccc"});
          var btnp=true;
          var pah= localStorage.getItem("username");
          if(pah==undefined){
              var taxt= []
          }else{
              var taxt = JSON.parse(pah);
          }
          for(var i=0;i<taxt.length;i++){
              if(taxt[i].name==oId.val()){
                alert("该用户已经被注册，请重新注册")
                  btnp=false;
              }
          }
          if(btnp){
              var kucun={
                  name : oId.val(),
                  idcard : oPass.val(),
              };
              taxt.push(kucun);
              localStorage.setItem("username",JSON.stringify(taxt));
              window.location.assign("denglu.html");
          }

       }


          return false;
      });


}
