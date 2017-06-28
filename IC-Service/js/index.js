requirejs.config({
    baseUrl: 'lib/',
    paths: {
			jquery: 'jquery/jquery-1.12.0.min',
			layer : 'layer/layer',
			parallax : 'parallax/parallax_req',
			slide : 'superslider/jquery.SuperSlide.2.1.1',
			// rollclass : 'rollclass/rollclass',
			countup : 'countup/countUp.min'
    		},
	shim: 	{
			layer:{deps:['jquery']},
			slide:{deps:['jquery']},
			countup:{deps:['jquery']}
			}

});
requirejs(['jquery','parallax','layer','slide','countup'],
function ($,parallax) {
	//配置layer
	layer.config({
		path: 'lib/layer/'
	});	
	
	//实例化
	var index_top = new parallax('.addParallax','.parallaxBox','.parallax-item',0.7);//true false
	
	//调用方法
	$(window).scroll(function(){index_top.roll();});
	$(window).resize(function(){index_top.initobj();});
	//热点新闻
	jQuery(".txtScroll-top").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"fade",interTime:5000,autoPlay:true});
	
	
	
//通过require引入时发生不明报错，暂且直接写在行内了
//rollclass.js
	var rollclass = function(target,addname,deviation){
		this.tar = $(target);
		this.add = addname;
		this.down = deviation;
		this.data = [];
		
		this.initdata();
		this.roll();
	;};
	rollclass.prototype = {
		win_Y : window.innerHeight,
		initdata : function(){
			var list = [];
			var self = this;
			this.tar.each(function(i,e){
					list.push($(e).offset().top-self.win_Y+self.down);
				});	
			this.data = list;
		},
		roll : function(){
			var len = $(window).scrollTop();
			var self = this;
			
			this.tar.each(function(i,e){
					if(self.data[i]<len){$(e).addClass(self.add)};
				});
		}
	};
	//实例化rollclass
	var adcla = new rollclass('.adaclass','anim',200);
	$(window).scroll(function(){adcla.roll();});
	
//rollclass end

	//选项卡
	$(function(){
		var tab = $('.tabbox').each(function(index, element) {
            var tl = $(this).find('.tab_top'),
				bt = $(this).find('.tab_bottom');
				bt.find('.tab_item').eq(0).addClass('on');
				tl.find('li').click(function(){
						$(this).addClass('cur').siblings().removeClass('cur');
						var i = $(this).attr('data-item');
						bt.find('div').removeClass('on');
						bt.find("div[data-item="+ i +"]").addClass('on');
					});
        });
	});

	//倒计时
	//一次性
	$(function(){
			var t = 60 ;//倒计时时间--最大三位数
		
			function abc(){
				t--;
				$('#gettime').find('b').text("重新发送("+t+"s)");
				if(t==0){
					$('#gettime').find('input').css("display","block");
					t = 10 ;//重置倒计时时间
					clearInterval(abc);
					//alert("meile");
					}else {
						$('#gettime').find('input').css("display","none");
						setTimeout(abc,1000);
					}
				};
			
			$('#gettime').find('input').click(abc);
		
	});
	//

});