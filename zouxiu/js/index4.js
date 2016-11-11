/**
 * Created by Administrator on 2016/10/28.
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


      /*存入购物车*/

      var aShop = localStorage.getItem('shop');
      var oHtml = '';

        if(aShop=="[]"){
            var attr=[];
            $(".shopcar").css({display:"block"});
            $(".d2").css({display:"none"});
            $(".npt").css({display:"none"});
            $(".nat .buy2").css({display:"none"});
        }else{
            attr=JSON.parse(aShop);
            $(".d2").css({display:"block"});
            $(".npt").css({display:"block"});
            $(".shopcar").css({display:"none"});
            $(".nat .buy2").css({display:"block"});

            for(var i=0;i<attr.length;i++){
                oHtml += '<li><div><img src="'+ attr[i].oSrc+'"></div><div><p class="p1"><strong>'+ attr[i].oName+'</strong><em>L</em><i><img src="../img/souye-5.png" ></i></p><p></p><p>单价：<span class="pice">'+ attr[i].oPrice+'</span></p><p class="p4"><b>数量：</b><span class="minst">-</span><input class="nuber" type="text" value="'+attr[i].num +'"><span class="plus">+</span></p></div></li>';
            }
            $('.d2 ul').html(oHtml);
            var ozPrice=null,
                oNum  =null;
            attr.forEach(function(v,k){
             ozPrice+=parseInt(v.oPrice)*(v.num);
             oNum   +=parseInt(v.num);
            })
            $('.npt .money').html(ozPrice);
            $('.npt .number').html(oNum);
        }


      //点击删除
      $(".d2 ul").on('singleTap',"i", function (ev) {
          var aShop = localStorage.getItem('shop'),
              attr=JSON.parse(aShop);
          var
              ev = ev || window.event,
              oTarget = ev.srcElement || ev.target;
          oTarget.parentNode.parentNode.parentNode.parentNode.remove();

          attr.forEach(function (v,k) {
              if(v.oName == oTarget.parentNode.parentNode.childNodes[0].innerHTML){
                  attr.splice(k,1);
              }
          })
          if(attr.length==0){
              console.log(23)
              $(".shopcar").css({display:"block"});
              $(".d2").css({display:"none"});
              $(".npt").css({display:"none"})
              $(".nat .buy2").css({display:"none"});
          }
          localStorage.setItem('shop',JSON.stringify(attr));
          /*更新 数量  总价*/
          var ozPrice=null,
              oNum  =null;
          attr.forEach(function(v,k){
              ozPrice+=parseInt(v.oPrice)*(v.num);
              oNum   +=parseInt(v.num);
          })
          $('.npt .money').html(ozPrice);
          $('.npt .number').html(oNum);
      });

       //点击更换数量 价格
      var nub =null,
          price=null,
          flag=1;
         $(".minst").on("singleTap",function(){
             var aShop = localStorage.getItem('shop');
                 attr=JSON.parse(aShop);
             var iIdenx=$(".minst").index($(this));
             nub=attr[iIdenx].num;
             console.log(attr[iIdenx].num)
             price=attr[iIdenx].oPrice;
             if(nub>1){
                 oNum--;
                 nub--;
                 flag+=0;
                 ozPrice-=parseInt(flag*price);
                 if(nub<1){
                     nub=1;
                 }
             }
             $(".nuber").eq(iIdenx).val(nub);
             $('.npt .number').html(oNum);
             $('.npt .money').html(ozPrice);
             attr[iIdenx].num=nub;
             localStorage.setItem("shop",JSON.stringify(attr));
             var ozPrice=null,
                 oNum  =null;
             attr.forEach(function(v,k){
                 ozPrice+=parseInt(v.oPrice)*(v.num);
                 oNum   +=parseInt(v.num);
             })
             $('.npt .money').html(ozPrice);
             $('.npt .number').html(oNum);
         });

      $(".plus").on("singleTap",function(){
          var aShop = localStorage.getItem('shop');
               attr=JSON.parse(aShop);
          var iIdenx= $(".plus").index($(this));
          console.log(iIdenx);
          nub=attr[iIdenx].num;
          price=attr[iIdenx].oPrice;
          oNum++;
          nub++;
          flag+=0;
          ozPrice+=parseInt(flag*price);
          console.log(flag*price);
          $(".nuber").eq(iIdenx).val(nub);
          $('.npt .number').html(oNum);
          $('.npt .money').html(ozPrice);
          attr[iIdenx].num=nub;
          localStorage.setItem("shop",JSON.stringify(attr));
          var ozPrice=null,
              oNum  =null;
          attr.forEach(function(v,k){
              ozPrice+=parseInt(v.oPrice)*(v.num);
              oNum   +=parseInt(v.num);
          })
          $('.npt .money').html(ozPrice);
          $('.npt .number').html(oNum);
      })

     $("li div:nth-of-type(1) img").on("singleTap",function(){
          window.location.assign("sangpin.html");
      })
      $(".butnp").on("singleTap",function(){
          window.location.assign("index2.html");
      })

};