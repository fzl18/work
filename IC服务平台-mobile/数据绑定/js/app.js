$(function () {
  'use strict';


  // 页面加载事件:
  // 会按顺序触发以下事件：

  // 事件              说明
  // pageLoadStart     发送Ajax之前触发
  // pageLoadCancel    取消了正在发送的ajax请求
  // pageLoadError     Ajax 请求失败
  // pageLoadComplete  Ajax 请求结束，无论是成功还是失败
  // pageAnimationStart  新页面的DOM插入当前页面之后，动画执行之前
  // pageAnimationEnd  新页面动画执行完毕
  // beforePageRemove  加载新的页面，动画切换完成后，移除旧的 document 前发送，事件回调函数参数是event, $pageContainer，其中$pageContainer 是 .page-group（注：在 window 上触发，且内联 page 的切换不会触发此事件）
  // pageRemoved 加载新的页面，动画切换完成后，移除旧的 document 后发送（注：在 window 上触发，且内联 page 的切换不会触发此事件）
  // beforePageSwitch  page 切换前触发，该事件在 pageAnimationStart 前，beforePageSwitch 之后会做一些额外的处理才触发 pageAnimationStart
  // pageInit  新页面中的组件初始化完毕
  // 其中 pageLoad* 事件是在 window 上触发，其他都是在 .page 元素上触发。为了性能考虑，最好通过 document 代理监听。如果是内联页面，则没有前面的四个 pageLoad* 事件。

  // 你可以这样监听事件：

  // $(document).on("pageInit", "#page-index", function(e, pageId, $page) {});
  // <!--或者-->
  // $(document).on("pageInit", function(e, pageId, $page) {
  //   if(pageId == "pageIndex") {}
  // });




  //下拉刷新页面
  $(document).on("pageInit", "#mproduct", function(e, id, page) {
    var $content = $(page).find(".content").on('refresh', function(e) {
      // 测试加载过程
      setTimeout(function() {
        var cardHTML = '写刷新页面代码';

        $content.find('.pull-to-refresh-layer').append(cardHTML);
        // $(window).scrollTop(0);
        // 加载完毕需要重置
        $.pullToRefreshDone($content);
      }, 2000);
    });
  });

  //无限滚动
  $(document).on("pageInit", "#page-infinite-scroll-bottom", function(e, id, page) {
    var loading = false;
    // 每次加载添加多少条目
    var itemsPerLoad = 20;
    // 最多可加载的条目
    var maxItems = 100;
    var lastIndex = $('.list-container li').length;
    function addItems(number, lastIndex) {
      // 生成新条目的HTML
      var html = '';
      for (var i = lastIndex + 1; i <= lastIndex + number; i++) {
        html += '<li class="item-content"><div class="item-inner"><div class="item-title">新条目</div></div></li>';
      }
      // 添加新条目
      $('.infinite-scroll .list-container').append(html);
    }
    $(page).on('infinite', function() {
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
        addItems(itemsPerLoad,lastIndex);
        // 更新最后加载的序号
        lastIndex = $('.list-container li').length;
        $.refreshScroller();
      }, 1000);
    });
  });

  

  //多个标签页下的下拉加载
  $(document).on("pageInit", "#mproduct", function(e, id, page) {
    var loading = false;
    // 最多可加载的条目
    var maxItems = 30;
    var lastIndex = $('.list-container li')[0].length;
    function addItems(lastIndex,tabIndex) {
      // 添加新条目
      // ajax 加载更新数据 自动渲染页面
      if(tabIndex == '0'){        
        data.productlist.push({'name':'思南物联SNIOT506','id':'24','price':'299','pic':'images/pic8.jpg'},
            {'name':'思南物联SNIOT506','id':'25','price':'299','pic':'images/pic8.jpg'})
      }else if(tabIndex == '1'){
        data.project.push({'name':'小e智能硬件开发平台：首款微信语音控制开源平台','id':'28','price':'299','pic':'images/pic7.jpg'},
            {'name':'小e智能硬件开发平台：首款微信语音控制开源平台','id':'29','price':'299','pic':'images/pic7.jpg'})
      }else if(tabIndex == '1'){
        data.project.push({'name':'小e智能硬件开发平台：首款微信语音控制开源平台','id':'28','price':'299','pic':'images/pic7.jpg'},
            {'name':'小e智能硬件开发平台：首款微信语音控制开源平台','id':'29','price':'299','pic':'images/pic7.jpg'})
      }else if(tabIndex == 'news'){
        data.newslist.push({ "title":"平台注册开发者达到10000人",
            "info":"昨天，南航在全国各地16个城市分公司同时开展了南航史上最大规模的一次众开放日活动。80余名广州市民和媒体记者走进全...",
            "pic":"images/pic.jpg"
          },
          { "title":"IC投融资孵化服务平台内测",
            "info":"看啥都震撼 小米Max定义大屏手机新标杆小米Max的设计初衷源自手机重度用户对于大屏的刚性需求，所以“看什么都震撼”的大屏手机应运...",
            "pic":"images/pic2.jpg"
          })
      }else if(tabIndex == 'class'){
        data.classlist.push({"title":"SoC芯片项目实训设计班","price":"120","people":"200","talk":"30","pic":"images/pic9.jpg"},
            {"title":"SoC芯片项目实训设计班","price":"120","people":"200","talk":"30","pic":"images/pic9.jpg"})
      }else if(tabIndex == 'teacher'){
        data.teacherlist.push({"name":"郁苏阳","tag1":"设计验证经理","tag2":"金牌讲师","post":"上海芯片设计服务公司 芯片设计验证主管 诺丁汉大学芯片设计学院 芯片设计验证资深讲师","pic":"images/pic10.jpg"},
            {"name":"郁苏阳","tag1":"设计验证经理","tag2":"金牌讲师","post":"上海芯片设计服务公司 芯片设计验证主管 诺丁汉大学芯片设计学院 芯片设计验证资深讲师","pic":"images/pic10.jpg"})
      }else if(tabIndex == 'student'){
        data.studentlist.push({"name":"韩强","post":"ASIC设计后端工程师","pic":"images/pic10.jpg"},
          {"name":"韩强","post":"ASIC设计后端工程师","pic":"images/pic10.jpg"})
      }else{
        $.alert("数据加载错误!");
      }
    }
    $(page).on('infinite', function() {
      // 如果正在加载，则退出
      if (loading) return;
      // 设置flag
      loading = true;
      var tabIndex = 0;
      if($(this).find('.infinite-scroll.active').attr('id') == "tab1"){
        tabIndex = 0;
      }
      if($(this).find('.infinite-scroll.active').attr('id') == "tab2"){
        tabIndex = 1;
      }
      if($(this).find('.infinite-scroll.active').attr('id') == "news"){
        tabIndex = "news";
      }
      if($(this).find('.infinite-scroll.active').attr('id') == "class"){
        tabIndex = "class";
      }
      if($(this).find('.infinite-scroll.active').attr('id') == "teacher"){
        tabIndex = "teacher";
      }
      if($(this).find('.infinite-scroll.active').attr('id') == "student"){
        tabIndex = "student";
      }
      if(typeof tabIndex == "number"){
        lastIndex = $('.list-container').eq(tabIndex).find('li').length;
          }else{
            lastIndex = $('.list-container').find('li').length;
        }
      // 模拟1s的加载过程
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
        addItems(lastIndex,tabIndex);
        // 更新最后加载的序号
        lastIndex =  $('.list-container').eq(tabIndex).find('li').length;
        $.refreshScroller();
      }, 1000);
    });
  });

  

  //对话框
  $(document).on("pageInit", "#page-modal", function(e, id, page) {
    var $content = $(page).find('.content');
    $content.on('click','.alert-text',function () {
      $.alert('这是一段提示消息');
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


  $(document).on("pageInit", function(e, pageId, $page) {


    var product = new Vue({
        el: '#mproduct',
        data: data,
        methods:{}
        })

});

  $.init();

  
});
