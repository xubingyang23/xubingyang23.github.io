/**
 * Created by Administrator on 2016/10/27.
 */
  window.onload=function(){
      //登录 注册 跳转
      var
          oBuy= $(".buy");
      oBuy.on("singleTap",function(){
          window.location.assign("zhuce.html");
          return false;
      });
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

        var
            oBtt= $(".btt"),
            oId= $(".Id"),
            btn=false,
            flag=false,
            oTad="",
            oPassed= "",
            oPass= $(".pass");
      oBtt.on("singleTap",function(){
            var aTtr=JSON.parse(localStorage.getItem("username"));
            console.log(aTtr);
              for(var i= 0;i<aTtr.length;i++){
                  oTad   =aTtr[i].name;
                  oPassed=aTtr[i].idcard;

                  if(oId.val()==aTtr[i].name){
                      oId.css({borderColor:"#ccc"});
                      if(oPass.val()==aTtr[i].idcard){
                          oPass.css({borderColor:"#ccc"});
                          btn=true;
                          flag=true;
                          localStorage.setItem("flag",flag);
                          localStorage.setItem("idcar",oId.val());
                          window.location.assign("index5.html");
                      }
                  }
                  console.log(aTtr[i].name,aTtr[i].idcard);
              }

            if(btn==false){
                if(oId.val()==oPassed){
                oId.css({borderColor:"#ccc"});
               }
                if(oPass.val()==oTad){
                    oPass.css({borderColor:"#ccc"});
                }
                oId.css({borderColor:"red"});
                oPass.css({borderColor:"red"});
            }
          return false;
      })

 };