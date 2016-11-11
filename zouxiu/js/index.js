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
  }

