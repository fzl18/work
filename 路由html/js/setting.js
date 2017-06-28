// +----------------------------------------------------------------------
// | 和路由 [ 和路由web管理界面 ]
// +----------------------------------------------------------------------
// | Author: Richie
// +----------------------------------------------------------------------


// input 字段验证方法：

//    添加属性  lay-verify: 值     例如：lay-verify="验证A|验证B"  如：lay-verify="required|phone|number"

//    可选值: required（必填项）
// 						phone（手机号）
// 						email（邮箱）
// 						url（网址）
// 						number（数字）
// 						date（日期）
// 						identity（身份证）
// 						自定义值

;!function(){
  var form = layui.form(),layer = layui.layer,$=layui.jquery
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


  var network = false, wlan = false
  form.on('radio', function(data){
   if(data.value =='11'){
     network = true
     $('#account').hide()
   }else if(data.value =='10'){
   	 network = false
   	 $('#account').show()
   	 if(wlan){
   	 	 required($('#account input[type="text"]'))
   	 }else{
   	 	 required()
   	 }

   }else if(data.value =='21'){
   	 wlan = true
   	 $('#wlan').hide()
   }else if(data.value =='20'){
   	 wlan = false
     $('#wlan').show()
     if(network){
     	 required($('#wlan input[type="text"]'))
     }else{
     	 required()
     }

   }else{
   	// console.log('出错了')
   }
   // alert('network:'+ network + ',wlan: '+wlan)
  });


  form.on('radio(network)',function(){
  	if(wlan == true){
      $('button.layui-btn').removeClass('layui-btn-disabled').removeAttr('disabled').text("确定")
  	}else{
  		required($('#wlan input[type="text"]'))
  	}
  })

  form.on('radio(wlan)',function(){
  	if(network == true){
      $('button.layui-btn').removeClass('layui-btn-disabled').removeAttr('disabled').text("确定")
  	}else{
			required($('#account input[type="text"]'))
  	}
  })

  // 兼容IE8 数组的包含判断
  if(!Array.prototype._indexOf){
      Array.prototype._indexOf=function(n){                                                                                                                                         
          if("indexOf" in this){ 
              return this["indexOf"](n); 
          }   
          for(var i=0;i<this.length;i++){ 
              if(n===this[i]){ 
                  return i; 
              } 
          } 
          return -1; 
      }; 
  };
  // 判断input是否有空值，以此显示提交按钮
  function required(elem) {
    var el = elem || $('input[type="text"]'),t = []    
    	el.each(function(i){
        	t[i]=$(this).val()
        })
        if(t._indexOf('') == -1){
            $('button.layui-btn').removeClass('layui-btn-disabled').removeAttr('disabled').text("确定")
        }else{
            $('button.layui-btn').addClass('layui-btn-disabled').attr('disabled','disabled').text("设置未完成，无法生效")
        }

      el.bind('propertychange input keyup',function(){
        el.each(function(i){
        	t[i]=$(this).val()
        })
        if(t._indexOf('') == -1){
            $('button.layui-btn').removeClass('layui-btn-disabled').removeAttr('disabled').text("确定")
        }else{
            $('button.layui-btn').addClass('layui-btn-disabled').attr('disabled','disabled').text("设置未完成，无法生效")
        }
      })

  }


  required()

  var wds_name = '', //存无线名称值
  		mod2 = false
  form.on('select',function(data){
  	wds_name = data.value
  	if(mod2){
  		required()
  	}else{
  		required($('#account input[type="text"]'))
  	}
  })
  form.on('radio(mod1)',function(){
  	mod2=false
  	$('#wds').hide()
  	if( wds_name != '')
  	required($('#account input[type="text"]'))
  })
  form.on('radio(mod2)',function(){
  	mod2=true
  	$('#wds').show()
  	required()
  })

}();
