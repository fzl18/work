/*
 * rollclass.js 滚屏添加对应classname
 * Author : chen chen
 * email : chende301@foxmail.com
 * version : 0.0.1
 * time : 2016.5.6
 * -------------------- *
 * target: 添加监视目标
 * addname: 设定添加的样式名
 * deviation: 监控的偏移量,Y方向
 *
*/
 
;define(['jquery'], function($){
	
	var rollclass = function(target,addname,deviation){
		this.tar = $(target);
		this.add = addname;
		this.down = deviation;
		this.datal = [];
		
		this.initdata();
		this.roll();
	}
	rollclass.prototype = {
		win_Y : window.innerHeight,
		initdata : function(){
			var list = [];
			var self = this;
			this.tar.each(function(i,e){
					list.push($(e).offset().top-self.win_Y-self.down);
				});	
			this.datal = list;
		},
		roll : function(){
			var len = $(window).scrollTop();
			var self = this;
			
			this.tar.each(function(i,e){
					if(self.datal[i]<len){$(e).addClass(self.add)};
				});
		}
	}
	/*var adcla = new rollclass('.adaclass','anim',80);*/
    return rollclass;
});
