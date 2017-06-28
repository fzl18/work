(function($, d) {
    var ui = {
        site: "js/login/loginUI/",
        js: function(temp1, url, callback) {
            var var_key = url.substring(url.lastIndexOf("/") + 1);
            var_key = var_key.indexOf("?") > 0 ? var_key.substring(0, var_key.indexOf("?")) : var_key;
            var_key = var_key.replace(/[^a-z0-9]/gi, "");
            if (temp1 == false) {
                typeof callback == 'function' && callback();
                return;
            }
            if (!this.temp[var_key]) {
                this.temp[var_key] = this.temp[var_key] || [];
            }
            this.temp[var_key].push(callback);
            if (document.getElementById(var_key) == null) {
                var elt = d.createElement("script");
                elt.id = var_key;
                elt.anysc = true;
                elt.src = url;
                if (!d.all) {
                    elt.onload = function() {
                        var tmp = ui.temp[var_key];
                        for (var i = 0; i < tmp.length; i++) {
                            typeof tmp[i] == 'function' && tmp[i]();
                        }
                    }
                } else {
                    elt.onreadystatechange = function() {
                        if (this.readyState == 'complete' || this.readyState == 'loaded') {
                            var tmp = ui.temp[var_key];
                            for (var i = 0; i < tmp.length; i++) {
                                typeof tmp[i] == 'function' && tmp[i]();
                            }
                        }
                    }
                }
                d.getElementsByTagName("head")[0].appendChild(elt);
            }
        },
        cache: {

        },
        extend: {
            //扩展插件存储容器
        },
        temp: {
            //临时存放
        },
        get: {
            validate: function(opt) {
                var _this = this;
                ui.js(!ui.extend.validate, ui.site + "plugin/jquery.validate.js", function() {
                    ui.extend.validate.call(_this, opt);
                });
            },
            register: function(opt) {
                var elt = this;
                
                UI.js(!window.defaultCaptitalId, function() {
                    if (elt == UI) {
                        UI.js(!window.openLogin, "js/login/l_fc_login.js", function() {
                            openLogin(3);
                        });
                    } else {
                        UI.js(!window.openLogin, "js/login/l_fc_login.js");
                        $(elt).click(function() {
                            openLogin(3);
                        });
                    }
                });
            }
        },
        firstLoad: function() {
            $("head").append("<link rel='stylesheet' href='" + ui.site + "css/jquery.common.css'/>");
        }
    }
    $.fn.ui = function(type, opt) {
            if (typeof ui.get[type] == 'function') {
                opt = opt || {};
                this.each(function() {
                    ui.get[type].call(this, opt);
                });

            }
            return this;

        },
        window.UI = ui;
    $(function() {
        ui.firstLoad();
    });
})(jQuery, document);
