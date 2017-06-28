requirejs.config({
    baseUrl: 'lib/',
    paths: {
			jquery: 'jquery/jquery-1.12.0.min',
			layer : 'layer/layer',
			countup : 'countup/countUp.min'
    		},
	shim: 	{
			layer:{deps:['jquery']}
			}

});
requirejs(['jquery','layer'],
function   ($,parallax) {
	//配置layer
	layer.config({
		path: 'lib/layer/'
	});	
	//左侧导航的缓动背景
	$('.help_nav_group').each(function(index, element) {
        var aNav = $(this).find('li');
		var bg = $(this).find('.bg');
		var focusOn = $(this).find('li.on').eq(0);
		
		if(focusOn.position()){
			bg.css({top:focusOn.position().top});
			aNav.hover(function(){
					bg.stop().animate({top:$(this).position().top},{ easing:'easeOutBack'});
				},function(){
					bg.stop().animate({top:focusOn.position().top},{ easing:'easeOutBack'});
				});
		}else{
			bg.hide();
		};//if end
    });





});