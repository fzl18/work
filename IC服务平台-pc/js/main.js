requirejs.config({

    baseUrl: 'lib',
    paths: {
			jquery: 'jquery/jquery-1.12.0.min',
			// jquery: 'jquery/jquery-2.1.1.min',
			layer : 'layer/layer',
			slide : 'superslider/jquery.SuperSlide.2.1.1',
			scrollTo: 'scrollTo.min',
			rotate:'jquery.rotate.min',
      		ECalendar:'ecalendar.jquery.min'
    		},
	shim: 	{
			layer:{
					deps:['jquery']
					},
			slide:{
					deps:['jquery']
					},
			scrollTo:{
					deps:['jquery']
					},
			rotate:{
					deps:['jquery']
					},
			ECalendar:{
					deps:['jquery']
					}
			}
});

requirejs(['jquery','layer','slide','scrollTo','rotate','ECalendar'],
function   ($,layer,slide,scrollTo,rotate,ECalendar) {
	//layer配置
	layer.config({
		path: 'lib/layer/',
	});
	/*
		选项卡结构
	   div.tab_group
	       div.tab_title
	        	ul
	            	li[data-number]
	       div.tab_body
	        	div.tab_child[data-number]
	*/
	$('.tab_group').each(function()
	{
        var tiTle = $(this).find('.tab_title');
		var tBody = $(this).find('.tab_body');
		tiTle.find('li:eq(0)').addClass('cur');
		tBody.find('.tab_child').eq(0).addClass('on');
		tiTle.find('li').click(function()
		{
				var num = $(this).attr('data-number');
				$(this).addClass('cur').siblings('').removeClass('cur');
				tBody.find('div[data-number='+num+']').addClass('on').siblings('').removeClass('on');
		});
    });


	//导航nav
	$(function(){
		var aNav = $('.nav li');
		var oNavCur = $('.nav hr');
		var focusOn = $('.nav .cur').width();
		var iL = $('.nav .cur').position().left;

		oNavCur.animate({ left:iL,width:focusOn}, { easing:'easeOutBounce'});
		aNav.eq(0).hover(function(){
			if($(this).find('span').length>0){
				$('.head .subnav').stop().fadeIn('slow');
			};
			$('.head .subnav').on('mouseenter',function(){
				$(this).stop().fadeIn('slow')
			});
			$(this).on('mouseleave',function(){
				$('.head .subnav').stop().fadeOut('slow');
			})
		});
		$('.head .subnav').on('mouseleave',function(){
				$(this).stop().fadeOut('slow')
			});
		aNav.hover(function(){
			var aposition = $(this).find('a');
			oNavCur.stop().animate({ left:aposition.position().left,width:aposition.width()}, { easing:'easeOutBack'});
		}, function(){
			var iL2 = $('.nav .cur').position().left;
			oNavCur.stop().animate({ left:iL2,width:focusOn}, { easing:'easeOutBack'});
		});

		$('#index .nav li').find('a').click(function(){
			$goto = $(this).attr('href');
			$.scrollTo($goto, 500);
			oNavCur.stop().animate({ left:$(this).position().left,width:$(this).width()}, { easing:'easeOutBack'});
			$(this).addClass('cur').parent('li').siblings('').find('a').removeClass('cur');

		});

		$(window).scroll(NavMonitor);


		function navfloat(num){
			var _this = $('#index .nav a');
			if(_this.length){
				_this.eq(num).addClass('cur').parent('li').siblings('').find('a').removeClass('cur');
				$('#index .nav hr').stop().animate({ left:_this.eq(num).position().left,width:_this.eq(num).width()}, { easing:'easeOutBack'});
			};
		}

		function NavMonitor(){
			var scrolls = $(window).scrollTop();
			layer.closeAll('tips')
			if(scrolls>0){
				$('.gotop').stop().css("display","block").animate({opacity:1},500);
				$('.top').stop().css("display","block")
			}else{
				$('.gotop').stop().animate({opacity:0},500,function(){
					$(this).css("display","none");
				});
				$('.top').stop().css("display","none")
			};

			if (scrolls <1070){//450
			  navfloat(0);
			} else if (scrolls < 1600){//845
			  navfloat(1);
			} else if (scrolls < 1800){//2445
			  navfloat(2);
			} else{
				  navfloat(3);
			}
		};
	});


	//新闻焦点图切换
	$('#index_news .body').slide({ mainCell:".bd ul",effect:"top",autoPlay:true,triggerTime:0 });
 	//首页btn图放大
 	$('#index_service a').mouseenter(function () {
            $(this).find('img').stop().animate({opacity:"0.5"},300,function(){
            $(this).stop().animate({opacity:'1'},300);
        });
    });

	 // 返回顶部
	 $('.gotop').on('click',function(){
	 	$.scrollTo('0', 500);
	 });
	 $('.tool .top').on('click',function(){
	 	$.scrollTo('0', 500);
	 });

	// 首页图片旋转
	//
	var angle = 0;
	function rotateimg(){
		angle +=0.3;
	    $("#index_cyl img").rotate(angle);
	}
	var timer= setInterval(rotateimg,10);
	$("map").on('mouseenter',function(){
	     clearInterval(timer);
	}).on('mouseleave',function(){
		timer= setInterval(rotateimg,10)
	});

	//众包首页最新交易无缝滚动
	$(".picMarquee-top").slide({mainCell:".bd ul",autoPlay:true,effect:"topMarquee",vis:5,interTime:50,trigger:"click"});

	//众包
	$(function() {
        //滚动栏插件
        $.fn.planeinit = function(option) {
                var scrtime;
                var $ul = option.ul ? $(this).find("ul") : $(this);
                var li = option.li || 'li';
                var shift_height = option.height || 0;
                var liFirstHeight = $ul.find(li + ":first").height();
            }
            //单选
        $(document).on("click", ".dl_danxuan dd.quanbu b", function(event) {
            $(this).addClass("this").parent().siblings().find("b").removeClass("this");
        });
        $(document).on("click", ".dl_danxuan dd.option b", function(event) {
            if ($(this).is(".this")) {
                $(this).removeClass("this");
                $(this).parent().siblings("dd.quanbu").find("b").addClass("this");
            } else {
                $(this).addClass("this").parent().siblings().find("b").removeClass("this");
            }
        });
    });

	//人才资讯详情页 排行榜
	$('#jobnewsarticle .sidebar li').hover(function(){
		$(this).find('.txtinfo').css('display','block');
	},function(){
		$(this).find('.txtinfo').css('display','none');
	})
	// 人才服务-职位列表-筛选
	// $(function(){
	// 	var sbtn = $('#jobzwlb .search-conditions dd a');
	// 	sbtn.click(function(){
	// 		$(this).addClass('active').siblings('').removeClass('active');
	// 		if($('#jobzwlb .selected-condition dl').length == 0){
	// 			$('#jobzwlb .selected-condition').append('<dl class="clearfix"><dt>已筛选条件：</dt><dd><span>'+$(this).text()+'<a href="javascript:;">×</a></span></dd></dt></dl>')
	// 		}else{
	// 			$('#jobzwlb .selected-condition dd').append('<span>'+$(this).text()+'<a href="javascript:;">×</a></span>')}
	// 		});
	// 	$('#jobzwlb .selected-condition').on('click','a',function(){
	// 		$(this).parent().remove();
	// 		if($('#jobzwlb .selected-condition dd').find('span').length<1){
	// 			$('#jobzwlb .selected-condition dd').parent().remove();
	// 			};
	// 		})
	// 	})
	$(function(){
		var dlNum  =$(".search-conditions").find("dl");
	    for (i = 0; i < dlNum.length; i++) {
	        $(".hasBeenSelected .clearList").append("<div class=\"selectedInfor selectedShow\" style=\"display:none\"><span></span><label></label><em></em></div>");
	    }

	    var refresh = "true";

	    $(".listIndex a ").on("click",function(){
	        var text =$(this).text();
	        var selectedShow = $(".selectedShow");
	        var textTypeIndex =$(this).parents("dl").index();
	        var textType =$(this).parent("dd").siblings("dt").text();
	        index = textTypeIndex -(2);
	        $(".clearDd").show();
	        $(".selectedShow").eq(index).show();
	        $(this).addClass("selected").siblings().removeClass("selected");
	        selectedShow.eq(index).find("span").text(textType);
	        selectedShow.eq(index).find("label").text(text);
	        var show = $(".selectedShow").length - $(".selectedShow:hidden").length;
	        if (show > 1) {
	            $(".eliminateCriteria").show();
	        }

	    });
	    $(".selectedShow em").on("click",function(){
	        $(this).parents(".selectedShow").hide();
	        var textTypeIndex =$(this).parents(".selectedShow").index();
	        index = textTypeIndex;
	        $(".listIndex").eq(index).find("a").removeClass("selected");

	        if($(".listIndex .selected").length < 2){
	            $(".eliminateCriteria").hide();
	        }
	    });

	    $(".eliminateCriteria").on("click",function(){
	        $(".selectedShow").hide();
	        $(this).hide();
	        $(".listIndex a ").removeClass("selected");
	    });

	})
	// 个人中心-查看物流
	$(".express").parent().find("a").on("click",function(){
		$(this).parent().next("p").stop().fadeToggle();
		$(this).find("i").toggleClass("fa-caret-up")
	})

  $(".slideTxtBox").slide({mainCell:".bd ul",effect:"left",autoPlay:true});

  $("#mpw .reg .time input").ECalendar({
						 type:"date",
						 skin:"#33a",
						 offset:[0,2]
				});
	$(".tool .kf").on("click",function(){
		layer.tips('客户电话：110', '.tool .kf', {
			tips: [4, '#000'],
			time:4000
		});
	})
	$(".tool .wx").on("click",function(){
		layer.tips('<img src="./images/pic2.jpg" width="190" height="138">', '.tool .wx', {
			tips: [4, '#000'],
			time:4000
		});
	})
	$(".tool .link").on("click",function(){
		layer.open({
			type: 1,
			title: false,
			closeBtn: 0,
			shadeClose: true,
			shade:0.1,
			content: $('.bdsharebuttonbox')
		});
	})
	$(".tool .reg").on("click",function(){
		var reg=layer.open({
			type: 2,
			area: ['900px', '600px'],
			title:'注册',
			maxmin: true,
			content: './login/reg-enterprise.html'
		});
		layer.full(reg);
	})
	  // placeholder 兼容ie方法
  var JPlaceHolder = {
      //检测
      _check : function(){
          return 'placeholder' in document.createElement('input');
      },
      //初始化
      init : function(){
          if(!this._check()){
              this.fix();
          }
      },
      //修复
      fix : function(){
          $(':input[placeholder]').each(function(index, element) {
              var self = $(this), txt = self.attr('placeholder');
              if(!(self.hasClass('layui-unselect')))
              self.wrap($('<div></div>').css({position:'relative', zoom:'1', border:'none', background:'none', padding:'none', margin:'none'}));
              var pos = self.position(), h = self.outerHeight(true), paddingleft = self.css('padding-left');
              var holder = $('<span class="fix"></span>').text(txt).css({position:'absolute', left:pos.left , top:(pos.top+ 9) + 'px', height:h, lienHeight:h, paddingLeft:paddingleft, color:'#aaa'}).appendTo(self.parent());
              
              self.focusin(function(e) {
                  holder.hide();
              }).focusout(function(e) {
                  if(!self.val()){
                      holder.show();
                  }
                  if(self.hasClass('layui-unselect')){
                    holder.hide();
                  }
              });              
              holder.click(function(e) {                
                  holder.hide();
                  self.focus();
              });
          });
      }
  };


  JPlaceHolder.init(); 
})

