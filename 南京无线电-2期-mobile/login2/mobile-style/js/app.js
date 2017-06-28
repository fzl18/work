$(function () {
  'use strict';

  //产品多个标签页下的下拉加载
  $(document).on("pageInit", "#mproduct", function(e, id, page) {
    
    var data = {
      titles:[
      {tit:"全部产品",url:"#"},
      {tit:"通用数字信号处理器",url:"#"},
      {tit:"专网通信",url:"#"},
      {tit:"LTE产品系",url:"#"}
      ],
      plist:[
        {title:"开发套件",url:"product_detail.html",pic:"mobile-style/images/pic1.jpg",info:"基于SB3500芯片和Sandblaster ® IDE的系列开发板Sandblaster® LeaP可以使客户加快产品开发和上市。"},
        {title:"开发套件",url:"product_detail.html",pic:"mobile-style/images/pic1.jpg",info:"基于SB3500芯片和Sandblaster ® IDE的系列开发板Sandblaster® LeaP可以使客户加快产品开发和上市。"},
        {title:"开发套件",url:"product_detail.html",pic:"mobile-style/images/pic1.jpg",info:"基于SB3500芯片和Sandblaster ® IDE的系列开发板Sandblaster® LeaP可以使客户加快产品开发和上市。"},
        {title:"开发套件",url:"product_detail.html",pic:"mobile-style/images/pic1.jpg",info:"基于SB3500芯片和Sandblaster ® IDE的系列开发板Sandblaster® LeaP可以使客户加快产品开发和上市。"},
        {title:"开发套件",url:"product_detail.html",pic:"mobile-style/images/pic1.jpg",info:"基于SB3500芯片和Sandblaster ® IDE的系列开发板Sandblaster® LeaP可以使客户加快产品开发和上市。"},
      ]
    }
    var vm = new Vue({
      el: '#plist',
      data: data
    })

    $("#mproduct .swiper-container").swiper({
        slidesPerView:2,
        freeMode : true,
        loop : true,
        initialSlide :2
    });

    // var loading = false;
    // // 每次加载添加多少条目
    // var itemsPerLoad = 10;
    // // 最多可加载的条目
    // var maxItems = 30;
    // var lastIndex = $('.list-container .card')[0].length;
    // function addItems(number, lastIndex,tabIndex,key) {
    //   // 生成新条目的HTML
    //   var html = '',html2='',html3='';
    //   for (var i = lastIndex + 1; i <= lastIndex + number; i++) {
    //     html += '<div class="card progress">'+
    //                 '<a href="product_detail.html">'+
    //                 '<div class="card-content">'+
    //                   '<div class="card-content-inner">'+
    //                     '<div class="row no-gutter" style="margin-left:0!important">'+
    //                       '<div class="tit col-40">'+
    //                         '<img src="mobile-style/images/pic1.jpg" alt="">'+
    //                       '</div>'+
    //                       '<div class="col-60">'+
    //                         '<b>开发套件</b>'+
    //                         '<p>基于SB3500芯片和Sandblaster ® IDE的系列开发板Sandblaster® LeaP可以使客户加快产品开发和上市。</p>'+
    //                       '</div>'+
    //                     '</div> '+
    //                   '</div>'+
    //                 '</div>'+
    //                 '</a>'+
    //               '</div>';
    //     html2 += '<div class="card progress">'+
    //                 '<a href="product_detail.html">'+
    //                 '<div class="card-content">'+
    //                   '<div class="card-content-inner">'+
    //                     '<div class="row no-gutter" style="margin-left:0!important">'+
    //                       '<div class="tit col-40">'+
    //                         '<img src="mobile-style/images/pic1.jpg" alt="">'+
    //                       '</div>'+
    //                       '<div class="col-60">'+
    //                         '<b>开发套件</b>'+
    //                         '<p>基于SB3500芯片和Sandblaster ® IDE的系列开发板Sandblaster® LeaP可以使客户加快产品开发和上市。</p>'+
    //                       '</div>'+
    //                     '</div> '+
    //                   '</div>'+
    //                 '</div>'+
    //                 '</a>'+
    //               '</div>';
    //     html3 += '<div class="card progress">'+
    //                 '<a href="product_detail.html">'+
    //                 '<div class="card-content">'+
    //                   '<div class="card-content-inner">'+
    //                     '<div class="row no-gutter" style="margin-left:0!important">'+
    //                       '<div class="tit col-40">'+
    //                         '<img src="mobile-style/images/pic1.jpg" alt="">'+
    //                       '</div>'+
    //                       '<div class="col-60">'+
    //                         '<b>开发套件</b>'+
    //                         '<p>基于SB3500芯片和Sandblaster ® IDE的系列开发板Sandblaster® LeaP可以使客户加快产品开发和上市。</p>'+
    //                       '</div>'+
    //                     '</div> '+
    //                   '</div>'+
    //                 '</div>'+
    //                 '</a>'+
    //               '</div>';
    //    }
    //   // 添加新条目
    //   if(tabIndex == '0'){
    //     $('.infinite-scroll.active .list-container').append(html);
    //   }else if(tabIndex == '1'){
    //     $('.infinite-scroll.active .list-container').append(html2)    
    //   }else if(tabIndex == '2'){
    //     $('.infinite-scroll.active .list-container').append(html3)    
    //   }else{
    //     // $.toast("数据加载出错，请重试!");
    //   }
    // }
    // $(page).on('infinite', function() {
    //   // 如果正在加载，则退出
    //   if (loading) return;
    //   // 设置flag
    //   loading = true;
    //   var tabIndex = '';
    //   if($(this).find('.infinite-scroll.active').attr('id') == "tab1"){
    //     tabIndex = 0;
    //   }
    //   if($(this).find('.infinite-scroll.active').attr('id') == "tab2"){
    //     tabIndex = 1;
    //   }
    //   if($(this).find('.infinite-scroll.active').attr('id') == "tab3"){
    //     tabIndex = 2;
    //   }      
      
    //   lastIndex = $('.list-container').eq(tabIndex).find('.card').length;
     
    //   // 模拟0.5s的加载过程
    //   setTimeout(function() {
    //     // 重置加载flag
    //     loading = false;
    //     if (lastIndex >= maxItems) {
    //       // 加载完毕，则注销无限加载事件，以防不必要的加载
    //       //$.detachInfiniteScroll($('.infinite-scroll').eq(tabIndex));
    //       // 删除加载提示符          
    //       $('.infinite-scroll-preloader').eq(tabIndex).hide();          
    //       return;
    //     }
    //     addItems(itemsPerLoad,lastIndex,tabIndex);
    //     // 更新最后加载的序号
    //     lastIndex =  $('.list-container').eq(tabIndex).find('.card').length;
    //     $.refreshScroller();
    //   }, 500);
    // }); 



  });




  
  $(document).on("pageInit", "#courses", function(e, id, page) {
    //加载视频
    if($('.vedio.detail')!=""){
      $("#jquery_jplayer_1").jPlayer({
    ready: function () {
      $(this).jPlayer("setMedia", {
        title: "Big Buck Bunny",
        m4v: "http://res.cloud-alive.com/sdr/course/6ayl0.mp4",
        poster: "http://www.jplayer.org/video/poster/Big_Buck_Bunny_Trailer_480x270.png"
      });
    },
    swfPath: "../../dist/jplayer",
    supplied: "m4v",
    size: {
      width: "100%",
      height: "260px",
      cssClass: "jp-video-360p"
    },
    useStateClassSkin: true,
    autoBlur: false,
    smoothPlayBar: true,
    keyEnabled: true,
    remainingDuration: true,
    toggleDuration: true
  });

    }
    

    //课程多个标签页下的下拉加载
    var loading = false;
    // 每次加载添加多少条目
    var itemsPerLoad = 10;
    // 最多可加载的条目
    var maxItems = 20;
    var lastIndex = $('.list-container .vedio')[0].length;
    function addItems(number, lastIndex,tabIndex,key) {
      // 生成新条目的HTML
      var html = '',html2='';
      for (var i = lastIndex + 1; i <= lastIndex + number; i++) {
        html += '<div class="vedio">'+
                '<div class="play"><img src="mobile-style/images/btn-play.png" alt=""></div>'+
                '<div class="head">玩转SB3500视屏培训系列... <a class="pull-right" href="courses_detail.html"><span><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAOCAYAAABkbO8dAAABA0lEQVRIDd2WPQuEMAyG0yjopi46Cv7/3yQ46qJuDkqP97gu0vQq3J3h3kXMx0NK2zTGWmvppX3faRxHWteVtm17WvM8p7Isqa5rStPUhUZ97+QZt7B5nmkYBjqOw1t0kiTUti1VVeX1n413854LQxF9359r8/53Xfd2cRp4jOOCnYoVYpEjSQuPp2kSj5+veBxV3ENJWni8LItUo2hHc5Gkhceu+0mF+uyhnJDPx4ItlBPyhXgsOUN2Y0zIfdn3DR7jnbqqLMvEFC08xuN7VUVRiClaeIyJAo9vrBDbNI0YroXHGJMwUcQKsaHRSgvvv0cqt1vnoRXdCs0Ad+oTQ/AveQ/bPBATwIgEpAAAAABJRU5ErkJggg==" alt=""></span></a></div>'+
                '<div class="img"><img src="mobile-style/images/pic7.jpg" alt=""></div>'+
                '<div class="foot">本课程利用多媒体教学设备，采用板书与多媒体展示相结合的课堂教学方式。</div>'+
                '</div>';
        html2 += '<div class="vedio">'+
                '<div class="head">玩转SB3500视屏培训系列... <a class="pull-right" href="courses_detail.html"><span><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAOCAYAAABkbO8dAAABA0lEQVRIDd2WPQuEMAyG0yjopi46Cv7/3yQ46qJuDkqP97gu0vQq3J3h3kXMx0NK2zTGWmvppX3faRxHWteVtm17WvM8p7Isqa5rStPUhUZ97+QZt7B5nmkYBjqOw1t0kiTUti1VVeX1n413854LQxF9359r8/53Xfd2cRp4jOOCnYoVYpEjSQuPp2kSj5+veBxV3ENJWni8LItUo2hHc5Gkhceu+0mF+uyhnJDPx4ItlBPyhXgsOUN2Y0zIfdn3DR7jnbqqLMvEFC08xuN7VUVRiClaeIyJAo9vrBDbNI0YroXHGJMwUcQKsaHRSgvvv0cqt1vnoRXdCs0Ad+oTQ/AveQ/bPBATwIgEpAAAAABJRU5ErkJggg==" alt=""></span></a></div>'+
                '<div class="img"><a href="courses_detail.html"><img src="mobile-style/images/pic7.jpg" alt=""></a></div>'+
                '<div class="foot">本课程利用多媒体教学设备，采用板书与多媒体展示相结合的课堂教学方式。</div>'+
                '</div>';
       }
      // 添加新条目
      if(tabIndex == '0'){
        $('.infinite-scroll.active .list-container').append(html);
      }else if(tabIndex == '1'){
        $('.infinite-scroll.active .list-container').append(html2)    
      }else{
        $.toast("数据加载出错，请重试!");
      }
    }
    $(page).on('infinite', function() {
      // 如果正在加载，则退出
      if (loading) return;
      // 设置flag
      loading = true;
      var tabIndex = '';
      if($(this).find('.infinite-scroll.active').attr('id') == "tab1"){
        tabIndex = 0;
      }
      if($(this).find('.infinite-scroll.active').attr('id') == "tab2"){
        tabIndex = 1;
      }
      
      lastIndex = $('.list-container').eq(tabIndex).find('.vedio').length;
     
      // 模拟0.5s的加载过程
      setTimeout(function() {
        // 重置加载flag
        loading = false;
        if (lastIndex >= maxItems) {
          // 加载完毕，则注销无限加载事件，以防不必要的加载
          //$.detachInfiniteScroll($('.infinite-scroll').eq(tabIndex));
          // 删除加载提示符          
          $('.infinite-scroll-preloader').eq(tabIndex).hide();          
          return;
        }
        addItems(itemsPerLoad,lastIndex,tabIndex);
        // 更新最后加载的序号
        lastIndex =  $('.list-container').eq(tabIndex).find('li').length;
        $.refreshScroller();
      }, 500);
    });  
  });

  //在线资源多个标签页下的下拉加载
  $(document).on("pageInit", "#resources", function(e, id, page) {
    var loading = false;
    // 每次加载添加多少条目
    var itemsPerLoad = 10;
    // 最多可加载的条目
    var maxItems = 20;
    var lastIndex = $('.list-container .head')[0].length;
    function addItems(number, lastIndex,tabIndex,key) {
      // 生成新条目的HTML
      var html = '',html2='';
      for (var i = lastIndex + 1; i <= lastIndex + number; i++) {
        html += '<div class="head">'+
            '<div class="tit resou">EditPlus最新官方下载</div>'+
                '<div class="see">2016-11-29 10:15:28</div>'+
                '<div class="txt">支持代码折叠；支持代码自动完成(但其功能比较弱)，支持代码提示功能；配置功能强大，且比较容易，扩展也比较强。像PHP、Java程序等的开发环境，只要看一下资料，几分钟就可以搞定配置，很适合初学者学习使用。有不错的项目工程管理。</div>'+
                '<div class="download"><a href="javascript:;"><img src="mobile-style/images/icon-download.png" alt=""> 点击下载</a></div>'+
                '</div>';
        html2 += '<div class="head">'+
            '<div class="tit resou">EditPlus最新官方下载</div>'+
                '<div class="see">2016-11-29 10:15:28</div>'+
                '<div class="txt">支持代码折叠；支持代码自动完成(但其功能比较弱)，支持代码提示功能；配置功能强大，且比较容易，扩展也比较强。像PHP、Java程序等的开发环境，只要看一下资料，几分钟就可以搞定配置，很适合初学者学习使用。有不错的项目工程管理。</div>'+
                '<div class="download"><a href="javascript:;"><img src="mobile-style/images/icon-download.png" alt=""> 点击下载</a></div>'+
                '</div>';
       }
      // 添加新条目
      if(tabIndex == '0'){
        $('.infinite-scroll.active .list-container .list').append(html);
      }else if(tabIndex == '1'){
        $('.infinite-scroll.active .list-container .list').append(html2)    
      }else{
        $.toast("数据加载出错，请重试!");
      }
    }
    $(page).on('infinite', function() {
      // 如果正在加载，则退出
      if (loading) return;
      // 设置flag
      loading = true;
      var tabIndex = '';
      if($(this).find('.infinite-scroll.active').attr('id') == "tab1"){
        tabIndex = 0;
      }
      if($(this).find('.infinite-scroll.active').attr('id') == "tab2"){
        tabIndex = 1;
      }
      
      lastIndex = $('.list-container').eq(tabIndex).find('.head').length;
     
      // 模拟0.5s的加载过程
      setTimeout(function() {
        // 重置加载flag
        loading = false;
        if (lastIndex >= maxItems) {
          // 加载完毕，则注销无限加载事件，以防不必要的加载
          //$.detachInfiniteScroll($('.infinite-scroll').eq(tabIndex));
          // 删除加载提示符          
          $('.infinite-scroll-preloader').eq(tabIndex).hide();          
          return;
        }
        addItems(itemsPerLoad,lastIndex,tabIndex);
        // 更新最后加载的序号
        lastIndex =  $('.list-container').eq(tabIndex).find('.head').length;
        $.refreshScroller();
      }, 500);
    });  
  });

  //新闻多个标签页下的下拉加载
  $(document).on("pageInit", "#news", function(e, id, page) {
    var loading = false;
    // 每次加载添加多少条目
    var itemsPerLoad = 10;
    // 最多可加载的条目
    var maxItems = 20;
    var lastIndex = $('.list-container .newslist')[0].length;
    function addItems(number, lastIndex,tabIndex,key) {
      // 生成新条目的HTML
      var html = '',html2='';
      for (var i = lastIndex + 1; i <= lastIndex + number; i++) {
        html += '<div class="row newslist">'+
                  '<div class="col-20"><a href="news_detail.html"><img src="mobile-style/images/user.jpg" alt=""></a></div>'+
                  '<div class="col-80"><a href="news_detail.html">平台注册开发者达到10000人'+
                    '<p>昨天，南航在全国各地16个城市分公司同时开展了南航史上最大规模的一次众开放日活动。80余名广州市民和媒体记者走进全...</p>'+
                    '<time>2014/08/05</time></a>'+
                  '</div>'+
                '</div>';
        html2 += '<div class="row newslist">'+
                  '<div class="col-20"><a href="news_detail.html"><img src="mobile-style/images/user.jpg" alt=""></a></div>'+
                  '<div class="col-80"><a href="news_detail.html">平台注册开发者达到10000人'+
                    '<p>昨天，南航在全国各地16个城市分公司同时开展了南航史上最大规模的一次众开放日活动。80余名广州市民和媒体记者走进全...</p>'+
                    '<time>2014/08/05</time></a>'+
                  '</div>'+
                '</div>';
       }
      // 添加新条目
      if(tabIndex == '0'){
        $('.infinite-scroll.active .list-container .list').append(html);
      }else if(tabIndex == '1'){
        $('.infinite-scroll.active .list-container .list').append(html2)    
      }else{
        $.toast("数据加载出错，请重试!");
      }
    }
    $(page).on('infinite', function() {
      // 如果正在加载，则退出
      if (loading) return;
      // 设置flag
      loading = true;
      var tabIndex = '';
      if($(this).find('.infinite-scroll.active').attr('id') == "tab1"){
        tabIndex = 0;
      }
      if($(this).find('.infinite-scroll.active').attr('id') == "tab2"){
        tabIndex = 1;
      }
      
      lastIndex = $('.list-container').eq(tabIndex).find('.newslist').length;
     
      // 模拟0.5s的加载过程
      setTimeout(function() {
        // 重置加载flag
        loading = false;
        if (lastIndex >= maxItems) {
          // 加载完毕，则注销无限加载事件，以防不必要的加载
          //$.detachInfiniteScroll($('.infinite-scroll').eq(tabIndex));
          // 删除加载提示符          
          $('.infinite-scroll-preloader').eq(tabIndex).hide();          
          return;
        }
        addItems(itemsPerLoad,lastIndex,tabIndex);
        // 更新最后加载的序号
        lastIndex =  $('.list-container').eq(tabIndex).find('.newslist').length;
        $.refreshScroller();
      }, 500);
    });  
  });

  //对话框
  $(document).on("pageInit", "#page-modal", function(e, id, page) {
    var $content = $(page).find('.content');
    $content.on('click','.alert-text',function () {
      $.alert('提示消息');
    });
  });

  
  //加载提示符
  $(document).on("pageInit", "#page-preloader", function(e, id, page) {
    $(page).on('click','.open-preloader-title', function () {
      $.showPreloader('加载中...')
      setTimeout(function () {
        $.hidePreloader();
      }, 2000);
    });
    $(page).on('click','.open-indicator', function () {
      $.showIndicator();
      setTimeout(function () {
        $.hideIndicator();
      }, 2000);
    });
  });

  //加载非首页初始化
  $(document).on("beforePageSwitch", function(e, id, page) {
    $.closePanel();
    $(".content").scrollTop(0);    
  });
  
  // 首页加载完成事件
  $(document).on("pageInit", "#mindex", function(e, id, page) {

  });

  //无内容撑高页面
  $(document).on("pageInit", function(e, id, page) {
    $('.content').find('footer').siblings().wrapAll('<div class="content-body" />');
  });
  // 案例统计
  $(document).on("pageInit", "#case", function(e, id, page) {
    //602
    var time = $('.swiper-wrapper .swiper-slide').length;
    $('.count time').text(time)
     
  });
  // 切换滚动条重置
  $(document).on("pageInit", function(e,pageId, $page) {
      if( pageId = "courses" || "resources"){
        $('.buttons-tab a').on('click',function(){
        $(".content").scrollTop(0); 
      })
    }
      //解决input获取焦点弹出系统虚拟键盘时挡住input
      if( pageId = "login"){        
        
        var  h = $(".content-body").height();
        $('input').focus(function(){          
          var offset=$(this).offset().top;
          if(offset < 300){
            return;
          }
          $(".content-body").height(h + offset / 3)
          $(".content").scrollTop(10000);
        })
        $('input').blur(function(){
          $(".content-body").height(h)
        })
      }

        
  });

  //人才招聘滚动事件
  $(document).on("pageInit", "#about", function(e,Id, page) {
      if( $(".job-about") !=""){
      var loading = false;
      // 最多可加载的条目
      var maxItems = 30;
      // 每次加载添加多少条目
      var itemsPerLoad = 10;
      function addItems(number, lastIndex) {
              // 生成新条目的HTML
              var html = '';
              for (var i = lastIndex + 1; i <= lastIndex + number; i++) {
                  html += '<div class="head"><div class="tit">招聘岗位：软件开发经理<p><span>招聘人数：1人</span><span>地点：南京</span></p></div><a class="pull-right more" href="about_jobdetail.html"><span><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAOCAYAAABkbO8dAAABA0lEQVRIDd2WPQuEMAyG0yjopi46Cv7/3yQ46qJuDkqP97gu0vQq3J3h3kXMx0NK2zTGWmvppX3faRxHWteVtm17WvM8p7Isqa5rStPUhUZ97+QZt7B5nmkYBjqOw1t0kiTUti1VVeX1n413854LQxF9359r8/53Xfd2cRp4jOOCnYoVYpEjSQuPp2kSj5+veBxV3ENJWni8LItUo2hHc5Gkhceu+0mF+uyhnJDPx4ItlBPyhXgsOUN2Y0zIfdn3DR7jnbqqLMvEFC08xuN7VUVRiClaeIyJAo9vrBDbNI0YroXHGJMwUcQKsaHRSgvvv0cqt1vnoRXdCs0Ad+oTQ/AveQ/bPBATwIgEpAAAAABJRU5ErkJggg==" alt=""></span></a></div>';
              }
              // 添加新条目
              $('.infinite-scroll-bottom .list-container').append(html);

          }
          //预先加载20条
      addItems(itemsPerLoad, 0);
      // 上次加载的序号
      var lastIndex = 10;
      // 注册'infinite'事件处理函数
      $(page).on('infinite',function() {
          // 如果正在加载，则退出
          if (loading) return;
          // 设置flag
          loading = true;
          // 模拟1s的加载过程
          setTimeout(function() {
              // 重置加载flag
              loading = false;

              if (lastIndex >= maxItems) {
                  // 加载完毕，则注销无限加载事件，以防不必要的加载
                  $.detachInfiniteScroll($('.infinite-scroll'));
                  // 删除加载提示符
                  $('.infinite-scroll-preloader').remove();
                  return;
              }
              // 添加新条目
              addItems(itemsPerLoad, lastIndex);
              // 更新最后加载的序号
              lastIndex = $('.list-container .head').length;
              //容器发生改变,如果是js滚动，需要刷新滚动
              $.refreshScroller();
          }, 500);
      });
    }
        
  });

  //问答滚动事件
  $(document).on("pageInit", "#faq", function(e,Id, page) {
      
      var loading = false;
      // 最多可加载的条目
      var maxItems = 20;
      // 每次加载添加多少条目
      var itemsPerLoad = 10;
      function addItems(number, lastIndex) {
              // 生成新条目的HTML
              var html = '';
              for (var i = lastIndex + 1; i <= lastIndex + number; i++) {
                  html += '<div class="faqlist">'+
                    '<div class="que">Q：USRP X300 X310的最大带宽是多少?</div>'+
                    '<div class="ans">昨天，南航在全国各地16个城市分公司同时开展了南航史上最大规模的一次众开放日活动。80余名广州市民和媒体记者走进。</div>'+
                  '</div>';
              }
              // 添加新条目
              $('.infinite-scroll-bottom .list-container').append(html);

          }
          //预先加载20条
      addItems(itemsPerLoad, 0);
      // 上次加载的序号
      var lastIndex = 10;
      // 注册'infinite'事件处理函数
      $(page).on('infinite',function() {
          // 如果正在加载，则退出
          if (loading) return;
          // 设置flag
          loading = true;
          // 模拟1s的加载过程
          setTimeout(function() {
              // 重置加载flag
              loading = false;

              if (lastIndex >= maxItems) {
                  // 加载完毕，则注销无限加载事件，以防不必要的加载
                  $.detachInfiniteScroll($('.infinite-scroll'));
                  // 删除加载提示符
                  $('.infinite-scroll-preloader').remove();
                  return;
              }
              // 添加新条目
              addItems(itemsPerLoad, lastIndex);
              // 更新最后加载的序号
              lastIndex = $('.list-container .faqlist').length;
              //容器发生改变,如果是js滚动，需要刷新滚动
              $.refreshScroller();
          }, 500);
      });    
        
  });


  

//注册验证表单
  $(document).on("pageInit", "#login", function(e, id, page) {
  //注册
    $("#type").picker({
      toolbarTemplate: '<header class="bar bar-nav">\
      <button class="button button-link pull-left close-picker">关闭</button>\
      <button class="button button-link pull-right close-picker">确定</button>\
      <h1 class="title">注册类型</h1>\
      </header>',
      cols: [
        {
          textAlign: 'center',
          values: ['企业用户','个人用户']
        }
      ]
    });

  var type = $('#login .formlist');
  var name = $('#login input.name');
  var email = $('#login input.email');
  var password = $('#login input.pw');
  var password2 = $('#login input.pw2');
  var vcode = $('#login input.vcode');
  var c1, c2, c3, c4, c5;


   name.blur(function(){
      if($(this).val() != '' && $(this).val().length <= 16 && $(this).val().length >= 4){
        $(this).parent().prev().css('color','green');
        c1='ok';
      }else{
        $.toast("用户名在4-16位之间");
        c1='';
        $(this).parent().prev().css('color','red');
        return false;     
      };

    });
    email.blur(function(){
      var regex = /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g;
        if($(this).val() != '' && regex.test( $(this).val() )){
          $(this).parent().prev().css('color','green');
          c2='ok';
        }else{
          $.toast("邮箱输入有误，请重新输入");
          c2='';
          $(this).parent().prev().css('color','red');
          return false;     
        };

    });
    password.blur(function(){
        if($(this).val() != '' && $(this).val().length <= 20 && $(this).val().length >= 6){
          $(this).parent().prev().css('color','green');
          c3='ok';
        }else{
          $.toast("请输入6-20个字符长度的密码");
          c3='';
          $(this).parent().prev().css('color','red');
          return false;     
        };

    });
    password2.blur(function(){
        if($(this).val() != '' && $(this).val() == password.val()){
          $(this).parent().prev().css('color','green');
          c4='ok';
        }else{
          $.toast("两次密码输入不一致且不能为空");
          c4='';
          $(this).parent().prev().css('color','red');
          return false;     
        };

    });
    vcode.blur(function(){
        if($(this).val() == 'pehv'){
          $(this).parent().prev().css('color','green');
          c5='ok';
        }else{
          $.toast("验证码输入错误，请重新输入");
          c5='';
          $(this).parent().prev().css('color','red');
          return false;
        };

    });


    $('.regOK').on("click",function(){
      if( c1=='ok' && c2=='ok' &&c3=='ok' && c4=='ok' && c5=='ok'){
        $.toast("注册成功");
      }else{
        $.toast("输入内容有误，请修改");
      }
      
    })    
    
  });


  // 专家咨询详情页 打开留言
  $(document).on("pageInit", "#expert", function(e,Id, page) {
    $(".talkbar").click(function(){
      $.popup('.expert-popup');
    })
    $(".expert-popup .OK").click(function(){
      if($('.expert-popup textarea').val()!== '' ){
        $.toast("发表成功");
        setTimeout(function(){
          $('.expert-popup textarea').val('');
          $.closeModal('.expert-popup');
        },1200)
      }else{
        $.toast("请填写内容！");
      }
    })
    $(".message .tit a").click(function(){
      if($(this).hasClass('red')){
        $(this).removeClass('red')
      }else{
        $(this).addClass('red')
      }
    })
  });


  $.init();
});
