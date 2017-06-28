$(function(){
	var isGoOn = false;
	var tmpdataobj = {
		sso_username : {
			active : "4-16个字符，中英文均可",
			className : "reg_mtop",
			empty : "用户名不能为空",
			express : [{
				text : "用户名在4-16个字符内",
				func : function(){
					var text = $(this).val();
					var len = text.length + text.replace(/[^\u4e00-\u9fa5]+/g,"").length;
					return (len>=4 && len<=16);
				}
			},{
				text : "包含非法字符",
				func : function(){
					var text = $(this).val();
					var len = text.length + text.replace(/[^\u4e00-\u9fa5]+/g,"").length;
					return (/^[\_a-z0-9\u4e00-\u9fa5]+$/i.test(text) && (len>=4 && len<=16));
				}
			},{
				text : "不能全为数字",
				func : function(){
					var text = $(this).val();
					return !/^[\d]+$/.test(text);
				}
			}]
		},
		sso_oldPassword : {
			active : "请输入旧密码",
			empty : "旧密码不能为空",
			express : [{
				text : "密码在6-16个字符内",
				func : function(){
					var text = $(this).val();
					return (text.length>=6 && text.length<=16);
				}
			}]
		},
		sso_password : {
			active : "密码必须为8~16位数字和字符组成",
			empty : "密码不能为空",
			express : [{
				text : "密码在8-16个字符内",
				func : function(){
					var text = $(this).val();
					return /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/.test(text);
				}
			}]
		},
		sso_againPassword : {
			active : "请再次输入密码",
			empty : "两次密码输入不一致",
			express : [{
				text : "两次密码输入不一致",
				func : function(){
					var pwd1 = $(this).val();
					var pwd2 = $("#sso_password").val();
					return pwd2==pwd1;
				}
			}]
		},
		sso_email : {
			active : "请填写常用的Email地址",
			email : "请输入有效的Email地址"
		},
		sso_email_b : {
			active : "请填写常用的Email地址",
			empty : "email地址不能为空",
			email: "请输入有效的Email地址",
			yahooEmail: "您输入的电子邮箱域名不能注册成功，请更换其它邮箱"
		},
		sso_email_c : {
			active : "请填写常用的Email地址",
			empty : "email地址不能为空",
			email : "请输入有效的Email地址"
		}
	};
	$("#sso_password").change(function(){
		var apwd = document.getElementById("sso_againPassword");
		if(this.value!="" && this.value == apwd.value){
			$(apwd).change();
		}
	});
	var tmpArr = [];
	for(var n in tmpdataobj){
		var elt = $("#"+n);
		elt.length>0 && tmpArr.push(elt);
	}
	var input_s = $("input.zhfs_form_input");
	tmpArr.sort(function(a,b){
		return input_s.index(a) > input_s.index(b);
	});
	var dataobj = {};
	for(var i=0;i<tmpArr.length;i++){
		dataobj[tmpArr[i].attr("id")] = tmpdataobj[tmpArr[i].attr("id")];
	}
	for(var n in dataobj){
		$("#"+n).val("").ui("validate",dataobj[n]);
	}
	
});
