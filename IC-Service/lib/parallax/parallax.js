/*
* parallax.js 视差滚动效果封装[未完成]
* Author : chen chen
* email : chende301@foxmail.com
* version : 0.1.2
* time : 2016.5.4
*
* 视差层的图片高度至少为 parallax.rate * windows.innerHeight ，即视差速度参数*窗口高度
*/



//构造函数
var parallax = function(classname,boxname,ietname,rate){
    this.eles = $(classname);
    this.rolele = this.eles.find($(boxname));
    this.rate = rate;
    this.addlist = new Array();
	
	this.initobj();
}
parallax.prototype = {
    win_X : window.innerWidth,
    win_Y : window.innerHeight,
    initobj : function(){
        this.addlist.length = 0;
        
        var self = this;
        var lins = [];

        this.eles.each(function(i,el,boxname){
            lins.push($(el).offset().top-self.win_Y);

        });
        this.addlist = lins;
    },
    roll : function(){
        var len = $(window).scrollTop();
        var self = this;
        
        this.rolele.each(function(i,el,ietname){
            offset_val = len>=self.addlist[i]?self.addlist[i]+self.win_Y-len+"px":"-100%",
            inner_offset = len>=self.addlist[i]?-(self.addlist[i]+self.win_Y-len)*self.rate+"px":"-100%";
            $(el).css({"transform":"translateY("+offset_val+")"});
            $(el).children().eq(0).css({"transform":"translateY("+inner_offset+")"});
        });
    },
}
