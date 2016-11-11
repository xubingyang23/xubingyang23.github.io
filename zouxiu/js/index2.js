/**
 * Created by Administrator on 2016/10/28.
 */
    window.onload=function(){


        var mySwiper = new Swiper('.swiper-container', {
            //如果需要循环
            loop: true,
            // 如果需要分页器
            pagination: '.swiper-pagination',
            keyboardControl: true,
            autoplay: 1500,
            autoplayDisableOnInteraction: false,

        })

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
        
          $.ajax({
					type:"GET",
					url:"http://datainfo.duapp.com/shopdata/getGoods.php",
					async:"true",
					dataType:"jsonp",
				    success:function(data){
				    	console.log(data);
				    }
				})
        //加载数据：
        var
            oScoll= null,
            oPulldown =null,
            oScrollList=null,
            oPullUp= null,
            cont=0;
        setTimeout(function(){
            oPulldown=$("#pulldown");
            oPullUp = $("#pullup");
            oScrollList= $("#scroll-list");

            oScoll=new iScroll("scroll-container",{
                hScrollbar:false,
                vScrollbar:false,
                topOffset:oPulldown.height(),
                onScrollMove:function(){
                    if(this.y>5&&!oPulldown.hasClass("active")){
                        oPulldown.addClass("active").html("松手刷新页面");
                        this.minScrollY=0;
                    }else if(this.y<5&&oPulldown.hasClass("active")){
                        oPulldown.removeClass("active").html("下拉刷新");
                        this.minScrollY=-oPulldown.height();
                    }else if(this.y<this.maxScrollY&&!oPullUp.hasClass("pullup")){
                        oPullUp.addClass("pullup").html("松手加载页面");
                    }else if(this.y>=this.maxScrollY&&oPullUp.hasClass("pullup")){
                        console.log(this.y, this.maxScrollY);
                        oPullUp.removeClass("pullup").html("上拉加载");
                    }
                },
                onScrollEnd:function(){
                    if(oPulldown.hasClass("active")){
                        if(cont > 4){
                            oPulldown.removeClass("active").html("暂无更新内容");
                            setTimeout(function(){
                                oScoll.refresh();
                            },500)
                        }else{
                            pullDownData();
                            oPulldown.html("Loading...");
                        }

                    }else if(oPullUp.hasClass("pullup")){
                        if(cont >4){
                            oPullUp.removeClass("active").html("暂无更新内容");
                            setTimeout(function(){
                                oScoll.refresh();
                            },500)
                        }else{
                            pullUpData();
                            oPullUp.html("Loading...");
                        }

                    }
                },
                onRefresh:function(){
                    if(oPulldown.hasClass("active")){
                        oPulldown.removeClass("active").html("下拉刷新");
                    }else if(oPullUp.hasClass("pullup")){
                        oPullUp.removeClass("pullup").html("上拉加载");
                    }
                },
            });
            setTimeout(function(){
                $("#scroll-container").css({left:"0"});
            },300)
        },100);
        function pullDownData(){
            setTimeout(function(){
                $.ajax({
                    url:'https://s.m.taobao.com/search?event_submit_do_new_search_auction=1&_input_charset=utf-8&topSearch=1&atype=b&searchfrom=1&action=home%3Aredirect_app_action&from=1&sst=1&n=20&buying=buyitnow&m=api4h5&abtest=16&wlsort=16&style=list&closeModues=nav%2Cselecthot%2Conesearch&page='+ cont +" ' ",
                    async: true,
                    dataType: 'jsonp',
                    jsonp: 'callback',
                    success:function(data){
                        data.listItem.forEach(function(v,k){
                   oScrollList.prepend('<li><div class="datr"><img src="'+ v.pic_path +'"></div><div><p>'+ v.name +'</p><p>￥<i>'+ v.price+'</i></p><p>'+ v.area+'</p><a href="javascript:;"><img src="../img/souye-4.png"></a></div></li>');
                        });
                        oScoll.refresh();
                    }
                })
            },500);
            cont++;
        }

        function pullUpData(){
            setTimeout(function(){
                $.ajax({
                    url:'https://s.m.taobao.com/search?event_submit_do_new_search_auction=1&_input_charset=utf-8&topSearch=1&atype=b&searchfrom=1&action=home%3Aredirect_app_action&from=1&sst=1&n=20&buying=buyitnow&m=api4h5&abtest=16&wlsort=16&style=list&closeModues=nav%2Cselecthot%2Conesearch&page='+ cont +" ' ",
                    async: true,
                    dataType: 'jsonp',
                    jsonp: 'callback',
                    success:function(data){
                        data.listItem.forEach(function(v,k){
                            oScrollList.append('<li><div class="datr"><img src="'+ v.pic_path +'"></div><div><p>'+ v.name +'</p><p>￥<i>'+ v.price+'</i></p><p>'+ v.area+'</p><a href="javascript:;"><img src="../img/souye-4.png"></a></div></li>');

                        });
                        oScoll.refresh();
                    }
                })
            },500);
            cont++;
        }

        //储存购物车数据

        /*购物车*/
        var
            oList = $('.list3');
        oList.on('touchstart','A', function (ev) {
            var
                ev = ev || window.event,
                oTarget = ev.srcElement || ev.target;

             /*console.log(oTarget);*/
          /*  console.log(oTarget.parentNode.parentNode.parentNode.childNodes[0].childNodes[0].getAttribute("src"));
           console.log(oTarget.parentNode.parentNode.childNodes[0].innerHTML);
            console.log(oTarget.parentNode.parentNode.childNodes[1].childNodes[1].innerHTML);*/

            var oShop = localStorage.getItem('shop'),
                iDcar = localStorage.getItem("idcar");
                console.log(iDcar);
            var btn = true;
            if(iDcar==null){
                window.location.assign("denglu.html");
            }
            if(oShop == null){
                var sAttr = [];
            }else{
                sAttr = JSON.parse(oShop);
            }
            for(var i=0;i<sAttr.length;i++){
                if(oTarget.parentNode.parentNode.childNodes[0].innerHTML == sAttr[i].oName){
                    sAttr[i].num ++;
                    btn = false;
                }
            }
            if(btn){
                var oAttr = {
                    oName :oTarget.parentNode.parentNode.childNodes[0].innerHTML,
                    oPrice : oTarget.parentNode.parentNode.childNodes[1].childNodes[1].innerHTML,
                    oSrc : oTarget.parentNode.parentNode.parentNode.childNodes[0].childNodes[0].getAttribute("src"),
                    num : 1,
                }
                sAttr.push(oAttr);
            }
            localStorage.setItem('shop',JSON.stringify(sAttr));

            /*addauto(event);*/
        })

         //flyer
/*
        function addauto(event){
            console.log(122)
              var offset_L=$(".dp2").offset().left;
              var offset_T=$(".dp2").offset().top;
              var _this =$(event.target);

              var src=_this.parent().siblings("img").attr("src");

            var flyer =$('<img src="'+ src+'" width="50" height="50" style="border-radius:.05rem">')

             flyer.fly({
                 start:{
                     left:event.clientX,
                     top:event.clientY,
                 },
                 end:{
                     left:offset_L,
                     top:offset_T,
                 },
                 onEnd:function(){
                     flyer.fadeOut("slow",function(){
                         $(this).remove();
                     })
                 }
             })
        }*/

 }
