requirejs.config({
    
    baseUrl: 'lib',
    paths: {
			jquery: 'jquery/jquery-1.12.0.min',
			layer : 'layer/layer',
			slide : 'superslider/jquery.SuperSlide.2.1.1'
    		},
	shim: 	{
			layer:{
					deps:['jquery']
					},
			slide:{
					deps:['jquery']
					}
			}
});

requirejs(['jquery','layer','slide'],
function   ($,layer,slide) {
	//layer配置
	layer.config({
		path: 'lib/layer/',
	});	

	// 弹窗_修改密码
	// 
	// 配置：密码修改按钮上加 class="btn_change_pwd"
	// 		 把#change_pwd 对应的DOM复制到应用页
	// 
	// 
	$(".btn_change_pwd").on("click",function(){
		$('#change_pwd input[type=password]').val('')
        layer.open({
			  type: 1,
			  title: false,
			  closeBtn: 0,
			  shade:.4,
			  // shadeClose: true,
			  area:'500px',
			  content:$('#change_pwd')
		});
    });
	$("#change_pwd .OK").on("click",function(){
	    // dosomething	    
	    // layer.open({
	    // 	title:false,
	    // 	closeBtn:0,
	    // 	content:'密码修改成功了！'
	    // });
	    var pwd = $('#change_pwd input[type="password"]');
	    
	    if(pwd.eq(0).val()!= '123'){
	    	layer.msg('原密码有误');
	    	return false;
	    }
	    if(!pwd.eq(1).val()){
	    	layer.msg('新密码不能为空',{icon: 2});
	    	return false;
	    }
	    if(pwd.eq(1).val() != pwd.eq(2).val()){
	    	layer.msg('两次密码不一致!',{icon: 2});
	    	return false;
	    }
	    layer.msg('修改成功',{icon: 1});
	    layer.closeAll('page');

    });
	$("#change_pwd .close").on("click",function(){
	    layer.closeAll();
    });
    // 弹窗_修改密码 end
    // 

	// 打包进度
	// 
	// 
	$(".btn_install_pack").on("click",function(){
		layer.open({
			  type: 1,
			  title: '打包进度',
			  closeBtn: 1,
			  shade:.4,
			  // shadeClose: true,
			  area:'370px',
			  content:$('#install_pack')
		});
	})
	$("#install_pack .close").on("click",function(){
	    layer.closeAll();
    });

	// 身份认证信息
	// 
	// 
	$(".btn_change_info").on("click",function(){
		layer.open({
			type: 1,
			  title: '<h1>身份认证信息<span>(以下身份需要审核，请如实填写)</span></h1>',
			  closeBtn: 1,
			  shade:.4,
			  // shadeClose: true,
			  area:'500px',
			  content:$('#change_info')
		});
	})

	//发送验证码
	$("#change_info .OK").on("click",function(){

	});
	$("#change_info .OK").on("click",function(){
		layer.open({
			type: 0,
			  title: '<h1>身份认证信息</h1><span>(以下身份需要审核，请如实填写)</span>',
			  closeBtn: 1,
			  shade:.4,
			  // shadeClose: true,
			  area:['500px','250px'],
			  content:'<div style="text-align:center;line-height:100px;"><i class="blue f20">认证成功！</i></div>'
		});
		layer.closeAll('page');
	})
	
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

	//选择不同产品项目
    $('.add_porduct').each(function()
	{
        var tiTle = $(this).find('.tab_title');
		var tBody = $(this).find('.tab_body');
		tiTle.find('li:eq(0)').addClass('cur');
		tBody.find('.tab_child').eq(0).addClass('on');
		tiTle.find('label').click(function()
		{
				var name = $(this).attr('data-name');
				$(this).addClass('cur').siblings('').removeClass('cur');
				tBody.find('ul[data-name='+name+']').addClass('on').siblings('').removeClass('on');
		});
    });
	//导航nav
	/*$(function()
	{
		var aNav = $('#navlist li');
		var oNavCur = $('#navCur');
		var focusOn = $('#navlist .on a').width();
		var iL = $('#navlist .on a').position().left;
		
		oNavCur.animate({ left:iL,width:focusOn}, { easing:'easeOutBounce'});
		aNav.hover(function(){
			var aposition = $(this).find('a');
			oNavCur.stop().animate({ left:aposition.position().left,width:aposition.width()}, { easing:'easeOutBack'});
		}, function(){
			oNavCur.stop().animate({ left:iL,width:focusOn}, { easing:'easeOutBack'});
		});
	});*/
	//焦点图切换
	jQuery(".bannerslide").slide({mainCell:".bd ul",effect:"fold",autoPlay:true,interTime:5000});
	//上滚
	jQuery(".picMarquee-top").slide({mainCell:".bd ul",autoPlay:true,effect:"topMarquee",vis:5,interTime:50});
	//项目列表页筛选
	$(function()
	{
		$('.select_list').each(function()
		{
			$(this).delegate('dd a','click',
				function()
				{
					var keyWord = $(this).attr('data-key');
					$(this).addClass('on').siblings('a').removeClass('on');
					$(this).parents('dl').attr('data-key',keyWord);
				});
        });
	});
	//增减
	// $(function()
	// {
	// 	$('.countBox').each(function(index, element)
	// 		{
	// 			var add = $(this).find('.count_add'),
	// 				cut = $(this).find('.count_cut'),
	// 			 result = $(this).find('.count_result'),
	// 			 maxNum = parseInt($(this).attr('data-max')),
	// 			 minNum = parseInt($(this).attr('data-min')),
	// 				  i = minNum;
					  
	// 			result.text(minNum);
	// 			add.click(function(){i++;foo_res()});
	// 			cut.click(function(){i--;foo_res()});
				
	// 			function foo_res()
	// 				{
	// 					result.text(i<minNum?i=minNum:(i>maxNum?i=maxNum:i=i));
	// 					console.log('i ='+i);
	// 				};
				 
				 
	// 		});
	// });
	/*悬浮窗*/
	
	// $(function()
	// {
	// 	$('.fix_box').each(function(index, element)
	// 		{
				
	// 			var myself = $(this);
	// 			var marginTop = parseInt($(this).attr('data-top'));
	// 			myself.css({ top:(winScrTop()+marginTop)+'px'});
	// 			$(window).scroll(function()
	// 			{
	// 				myself.css({ top:(winScrTop()+marginTop)+'px'});
	// 			});
	// 		});	
	// 	function winScrTop()
	// 		{
	// 			var wSt = parseInt($(window).scrollTop());
	// 			return wSt;	
	// 		};
	// });


	// 表单提交
	
		
		$('#info').on('change',function(){
			if($('#info').val()==''){
				$('input[type=submit]').attr('disabled','disabled');
				$('input[type=submit]').css('cursor','text');		
			};
		});

		$('#chooseall').click(function(){
			var $file = $("input[name='file_choose']")
			$file.each(function () {					
                    $(this).prop("checked",true)
                    //$(this).prop("checked",!$(this).prop("checked")); //!$(this).prop("checked")判断复选框的状态：如果选中则取反
                });

		});


	//验证码发送
	//倒计时
	//一次性
	$(function(){			
		//倒计时时间--最大三位数
		var t = 60 ;		
		function abc(){
			t--;
			$('#gettime').find('b').text("重新发送("+t+"s)");
			if(t==0){
				$('#gettime').find('input').css("display","block");
				t = 10 ;//重置倒计时时间
				clearTimeout(abc);
				}else {
					$('#gettime').find('input').css("display","none");
					setTimeout(abc,1000);
				}
			};
		
		$('#gettime').find('input').click(function(){
			//判断手机号
			var numbers = /^1\d{10}$/;
			var val = $('input[name="tel"]').val().replace(/\s+/g,""); //获取输入手机号码
			if(!numbers.test(val) || val.length ==0){
			layer.msg('手机号码有误！',{icon:0})
			return false;
			};
			abc();
		});
		
	});
	//

		

});