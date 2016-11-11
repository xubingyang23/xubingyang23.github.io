/**
 * Created by Administrator on 2016/10/29.
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
        $(".ma").css({display:"none"});
    }else{
        attr=JSON.parse(aShop);
        $(".ma").css({display:"block"});
        $(".shopcar").css({display:"none"});
        for(var i=0;i<attr.length;i++){
            oHtml += '<li><div><img src="'+ attr[i].oSrc+'"></div><div><p><strong>'+ attr[i].oName+'</strong><em>L</em></p><p>单价：<span>'+ attr[i].oPrice+'</span></p><p>数量：<span>'+attr[i].num +'</span></p><a href="javascript:;">取消订单</a></div></li>';
        }
        $('.ma ul').html(oHtml);
    }

    $(".ma ul").on('singleTap',"a", function (ev) {
        var
            ev = ev || window.event,
            oTarget = ev.srcElement || ev.target;
        oTarget.parentNode.parentNode.remove();

        attr.forEach(function (v,k) {
            console.log(typeof v.oName);
            if(v.oName == oTarget.parentNode.parentNode.childNodes[1].childNodes[0].childNodes[0].innerHTML){
                console.log(1)
                attr.splice(k,1);
            }
        })
        if(attr.length==0){
             $(".shopcar").css({display:"block"});
             $(".ma").css({display:"none"});
        }
        localStorage.setItem('shop',JSON.stringify(attr));
    });

      $(".butnp").on("singleTap",function(){
          window.location.assign("index2.html");
      })

}
