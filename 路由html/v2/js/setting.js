// +----------------------------------------------------------------------
// | 和路由 [ 和路由web管理界面 ]
// +----------------------------------------------------------------------
// | Author: Richie
// +----------------------------------------------------------------------

;!function(){
  var form = layui.form(),layer = layui.layer,$=layui.jquery,laypage = layui.laypage
  $('#ready .box').click(function(){
  	$(this).addClass('cur').find('i').remove()
  	$(this).find('.tit').prepend('<i class="layui-icon f30">&#x1005;</i>').parent().siblings().removeClass('cur').find('i').remove()
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

  //监听提交按钮
  form.on('submit', function(data){
  	//console.log(data.field)// 打印出所有提交的表单值
  	if(data.field.wlan == 20){
  		layer.open({
  		anim:1,
  		skin: 'setting-class',
  		area: '400px',
  	  title: '无线已更改',
  	  content: '无线名称：' + data.field.title3 + '   (建议记录)<br /> 无线密码：'+ data.field.title4 +'  (建议记录)',
  	  yes:function(index,layero){
  	  	// 弹窗确定后执行
  	  	layer.close(index)
  	  	window.location.href="设置成功.html"
  	  },
  	  cancel: function(){
    		//右上角关闭回调

    		//return false 开启该代码可禁止点击该按钮关闭
  		}
  		});
    }else if(data.field.wan){
    	layer.open({
  		anim:1,
  		skin: 'setting-class',
  		area: '400px',
  	  title: 'WDS模式已更改，建议记录',
  	  content: '无线名称：' + data.field.wan + '<br /> 无线密码：'+ data.field.title2 ,
  	  yes:function(index,layero){
  	  	// 弹窗确定后执行
  	  	layer.close(index)
  	  	window.location.href="设置成功.html"
  	  },
  	  cancel: function(){
    		//右上角关闭回调

    		//return false 开启该代码可禁止点击该按钮关闭
  		}
  		});
    }else{
    	window.location.href="设置成功.html"
    }
    return false
  });

  if($('#page').length>0){
    laypage({
        cont: 'page'
        ,pages: 20
        ,skin: '#178CEB'
    });    
  }
  
  var   _i=$(".mask ul li").length,
        _w=$(".mask ul li").width(),
        _alw = _i*_w
  $(".mask ul").css("width",_alw)
  $(".arrow.left a").on("click",function(){
      _left = parseInt($(".mask ul").css("left")) 
      if(_left<0){
          $(".mask ul").stop(false,true).animate({"left": "+=156px"},"fast")
      }
  })
  $(".arrow.right a").on("click",function(){
      _left = parseInt($(".mask ul").css("left")) 
      if(_left >= -(_alw-618)){
        $(".mask ul").stop(false,true).animate({"left": "-=156px"},"fast")
      }
  })


}();
