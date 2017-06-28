
;!(function() {
  layui.use(['layer', 'form','jquery'], function(){
    var form = layui.form(),
        layer=layui.layer,
        $= layui.jquery;
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

    // 字段验证规则
    form.verify({
      username: function(value, item){ //value：表单的值、item：表单的DOM对象
        if(!new RegExp("^[a-zA-Z0-9_\u4e00-\u9fa5\\s·]+$").test(value)){
        return '用户名不能有特殊字符';
      }
        if(/(^\_)|(\__)|(\_+$)/.test(value)){
        return '用户名首尾不能出现下划线\'_\'';
      }
        if(/^\d+\d+\d$/.test(value)){
        return '用户名不能全为数字';
      }
    }
    //数组的两个值分别代表：[正则匹配、匹配不符时的提示文字]
    ,pass: [
      /^[\S]{6,12}$/
      ,'密码必须6到12位，且不能出现空格'
    ]
  });
    form.on('submit(enterprise)',function (data){
      if(data.field.pwd !== data.field.repwd){
        layer.msg('两次输入密码不一致');
        return false
      }
      if(data.field.picfile ===""){
        layer.msg('请上传营业执照！');
        return false
      }
      if(data.field.type1 !== undefined){
        console.log(data.field.type1);
        if(data.field.edapic ===""){
          layer.msg('请上传eda证书！');
          return false
        }
      }
      if(data.field.agree !== 'on'){
        layer.msg('必须先同意平台协议才能注册');
        return false
      }
      layer.msg('注册成功');
      console.log(data.field);
    });
    form.on('checkbox(eda)', function(data){
      if(data.elem.checked){
        $('.edapic').show()
      }else{
        $('.edapic').hide()
      }
    })

    $('#login .send-code').click(function(){
  		var countdown=10;
  		var _this=$(this)
  		function send (el){
  			if (countdown == 0) {
  		        el.removeAttr("disabled").val("发送验证码")
  		        countdown = 10
  		        return;
  		    } else {
  		        el.attr('disabled','true').val("重新发送(" + countdown + "s)")
  		        countdown --
  		        setTimeout(function() {
  					 send(_this)
  			    },1000)
  		    }
  		}
  		send(_this)
  	})

  	$("#login input[type=file]").change(function(){
  		function getObjectURL(file) {
  			var url = null ;
  			if (window.createObjectURL!=undefined) { // basic
  				url = window.createObjectURL(file) ;
  			} else if (window.URL!=undefined) { // mozilla(firefox)
  				url = window.URL.createObjectURL(file) ;
  			} else if (window.webkitURL!=undefined) { // webkit or chrome
  				url = window.webkitURL.createObjectURL(file) ;
  			}
  			return url ;
  		}
  		if($(this).val() !==''){
  		var ojburl = getObjectURL(this.files[0])
  		var maxsize = 1024 * 1
  		var viewpic = " <div class='viewpic' style='width:150px;margin-top:20px;' ><img src='"+ ojburl + "' width='100%' > "
  		if((this.files[0].size/1024) < maxsize){
  			$(this).parents(".uploader").find(".viewpic").remove()
  			$(this).parents(".uploader").append(viewpic)
  			$(this).parents(".uploader").find(".filename").val($(this).val());
  		}else{
  			alert('文件超过限制！')
  		}
  		}
  	});

  })

}())
