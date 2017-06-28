$(function () {
  'use strict';

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
    // 每次加载添加多少条目
    var itemsPerLoad = 3;
    // 最多可加载的条目
    var maxItems = 30;
    var lastIndex = $('.list-container li')[0].length;
    function addItems(number, lastIndex,tabIndex,key) {
      // 生成新条目的HTML
      var html = '',html2='',htmlnews='',htmlteacher='',htmlclass='',htmlstudents='',htmla1='',htmla2='',htmlb1='',htmlb2='',htmlcase='',htmlhall='',htmltask='',htmltaskdetail='',htmlclassify='',htmlinfo='',htmlrecruit='',htmlmyjob1='',htmlmyjob2='',htmlmyjob3='',htmlmypackage1='',htmlmypackage2='',htmlmypackage3='',htmlmessage='',htmlporder='';
      for (var i = lastIndex + 1; i <= lastIndex + number; i++) {
        html += '<li class="col-50"><a href="mproduct_detail.html"><img src="images/pic8.jpg" alt=""><div class="info">思南物联SNIOT506<p>¥ 299 <a href="#" class="buy pull-right">点击购买</a></p></div></a></li>';
        html2 += '<li>'+
                      '<img src="images/pic7.jpg" alt="">'+
                      '<div class="pull-left media-body">'+
                        '<div class="tit">小e智能硬件开发平台：首款微信语音控制开源平台</div>'+
                        '<div class="price">¥ 299</div>'+
                        '<div class="buy pull-left"><a href="#">购买</a></div>'+
                        '<div class="customized pull-left"><a href="#">定制</a></div>'+
                      '</div>'+
                    '</li>';
        htmlnews +='<a href="mnews_detail.html">' +
                          '<li>' +
                            '<img src="images/pic.jpg" alt="">' +
                            '<div class="pull-left media-body">' +
                                '<div class="tit">平台注册开发者达到10000人</div>' +
                                '<div class="info">昨天，南航在全国各地16个城市分公司同时开展了南航史上最大规模的一次众开放日活动。80余名广州市民和媒体记者走进全...</div>' +
                            '</div>' +
                          '</li>' +
                          '</a>';
        htmlteacher +='<a href="mtrain_teacherdetail.html">' +
                        '<li>' +
                          '<img src="images/pic10.jpg" alt="">' +
                          '<div class="pull-left media-body">' +
                            '<div class="name">郁苏阳</div>' +
                            '<div class="tag"><span class="green">设计验证经理</span><span class="orange">金牌讲师</span></div>' +
                            '<div class="info row no-gutter">' +
                              '<div class="col-15">职务：</div>' +
                              '<div class="col-85">上海芯片设计服务公司 芯片设计验证主管 诺丁汉大学芯片设计学院 芯片设计验证资深讲师</div>' +
                            '</div>' +
                          '</div>' +
                        '</li>' +
                      '</a>';
        htmlclass +='<li class="col-50">' +
                        '<a href="mtrain_classdetail.html">' +
                          '<img src="images/pic9.jpg" alt="">' +
                          '<div class="info">' +
                            '<div class="name">SoC芯片项目实训设计班</div>' +
                            '<p class=" pull-left"><span class="icon icon-friends"></span>200 <span class="icon icon-message"></span>30</p>' +
                            '<p class=" pull-right price">￥120</p>' +
                          '</div>' +
                        '</a>' +
                      '</li>';
        htmlstudents +='<li class="col-50">' +
                        '<a href="mtrain_casedetail.html">' +
                          '<img src="images/pic10.jpg" alt="">' +
                          '<div class="info">韩强' +
                            '<p>ASIC设计后端工程师</p>' +
                          '</div>' +
                        '</a>' +
                      '</li>';
        htmla1 += '<a href="./mvc_detail.html">' +
                    '<li>' +
                      '<div class="tag"></div>' +
                      '<img src="images/pic24.jpg" alt="">' +
                      '<div class="pull-left media-body">' +
                        '<div class="tit">代达罗斯计划</div>' +
                '<div class="team">团队：创始人与合伙人均为海归，合伙人...</div>' +
                        '<i class="fa fa-bookmark-o"> 游戏</i>' +
                        '<i class="fa fa-bar-chart"> 天使轮</i>' +
                        '<i class="fa fa-map-marker"> 上海</i>' +
                      '</div>' +
                      '<div class="info">垂直二次元的手机端游戏</div>' +
                    '</li>' +
                    '</a>';
        htmla2 += '<a href="./mvc_person.html">' +
                      '<li class="vc"> '+
                        '<img src="images/pic25.png" alt="">' +
                        '<div class="pull-left media-body">' +
                          '<div class="tit">我主要关注VR/AR，消费升级，企业服务等。基于多年的市场战略和行业研究经验，希望可以帮你分析下项目的前景……</div>' +
                  '<div class="name">杨光 <span>厚朴投资 ·高级投资经理</span></div>' +
                        '</div>' +
                        '<div class="pzx">' +
                          '<div class="row">' +
                            '<div class="col-50"><span>1</span>人咨询过</div>' +
                            '<div class="col-50"><span>415</span>人想见</div>' +
                          '</div>' +
                        '</div>' +
                      '</li>' +
                    '</a>';
        htmlb1 += '';
        htmlb2 += '';
        htmlcase +='<li class="mpackage_caselist">' +
                        '<div class="mpackage_list_tit">嵌入式物联网软硬件开发平台 OpenFPGA duino</div>' +
                        '<div class="mpackage_list_money"><b>¥</b> 1200 <span>开发者：wyn</span></div>' +
                        '<div class="mpackage_list_intro">不仅提供了基于nodejs网络交互能力特别是用于开发的网络IDE以及类似树莓派的linux软件开发系统方便安装各种linux通用软件，而且通过FPGA提供了可编程的兼容arduino外围接口用于与丰富的物联网传感器进行连接。似树莓派的linux软件开发系统方便安装各种linux通用软件，而且通过FPGA提供了可编程的兼容arduino外围接口用于与丰富的物联网传感器进行连接。</div>' +
                        '<div class="mpackage_list_case">' +
                          '<img src="images/mpackage_list_case1.jpg">' +
                        '</div>' +
                      '</li>';
       htmlhall +='<a href="#">' +
                          '<li>' +
                            '<div class="mpackage_list_tit">51单片机STM32 MCU 驱动软件</div>' +
                            '<div class="mpackage_list_time">报名截止时间：<b>2016-09-20</b><span>（还剩 20 天）</span></div>' +
                            '<div class="mpackage_list_money"><b>¥</b> 23000 <span>已有<b> 9 </b>人申请 <button>申请</button></span></div>' +
                            '<div class="mpackage_list_intro">发包方：IC+互联网平台 &nbsp;&nbsp;发布时间：2016-08-20</div>' +
                          '</li>' +
                         '</a>';
        htmltask +='<a href="mpackage_taskdetail.html">' +
                          '<li>' +
                            '<img src="images/pic20.jpg">' +
                            '<div class="mpackage_list_tit">智慧门人机对话系统研发</div>' +
                            '<div class="mpackage_list_price">任务金额：<span>¥ <b>100000</b></span></div>' +
                          '</li>' +
                         '</a>';
        htmltaskdetail +='<li>' +
                          '<div class="item-content">' +
                            '<div class="item-inner">' +
                              '<div class="item-title label">PHP工程师</div>' +
                              '<div class="item_list">' +
                                '<div class="mpackage_list_num">总需要人数<span><b>5</b>人</span></div>' +
                                '<div class="mpackage_list_num">已申请人数<span><b>1</b>人</span></div>' +
                                '<div class="mpackage_list_money">酬劳 元/人<span>¥ <b>3500.00</b></span></div>' +
                                '<div class="taskdetail_btn"><a href="#">申请加入</a></div>' +
                               '</div>' +
                            '</div>' +
                          '</div>' +
                         '</li>';
        htmlclassify +='<a href="mjob_classifydetail.html">' +
                                  '<li>' +
                                    '<div class="job_list_pic"><img src="images/talent_list_pic1.jpg"></div>' +
                                    '<div class="job_list_intro">' +
                                      '<div class="job_list_tit">柳成杰</div>' +
                                      '<div class="job_list_name">求职意向：技术专员/助理</div>' +
                                      '<div class="job_list_info">经验1年以上 ｜ 全职 ｜ 大专以上</div>' +
                                    '</div>' +
                                    '<div class="job_list_money">8k-10k/月</div>' +
                                  '</li>' +
                                '</a>';
        htmlinfo +='<a href="mjob_infodetail.html">' +
                                  '<li>' +
                                    '<div class="recommend_tit">面试技巧：面试问什么、怎么答？<span class="recommend_tit_time">2016－8-11</span></div>' +
                                    '<div class="recommend_info">很多同学在面试时不知道问HR什么问题，往往会被HR带着走，或是被HR问到一些问题，却不知道如何回答!</div>' +
                                  '</li>' +
                                '</a>';
        htmlrecruit +='<a href="mjob_recruitdetail.html">' +
                                  '<li>' +
                                    '<div class="job_list_pic"><img src="images/job_list_pic1.jpg"></div>' +
                                    '<div class="job_list_intro">' +
                                      '<div class="job_list_tit">高级JAVA开发工程师</div>' +
                                      '<div class="job_list_name">无锡雅索软件技术服务有限公司</div>' +
                                      '<div class="job_list_info">上海 ｜ 2年 ｜ 本科 </div>' +
                                    '</div>' +
                                    '<div class="job_list_money">8k-10k/月</div>' +
                                  '</li>' +
                                '</a>';
        htmlmyjob1 +='<li>' +
                                  '<a href="#">' +
                                    '<div class="item-content">' +
                                      '<div class="job_list_pic"><img src="images/job_list_pic3.jpg"></div>' +
                                      '<div class="job_list_intro">' +
                                        '<div class="job_list_tit">高级JAVA开发工程师<span>全职</span></div>' +
                                        '<div class="job_list_name">兴业证券股份有限公司</div>' +
                                        '<div class="job_list_info"><span>8k-15k 元/月</span> ｜ 上海 ｜ 2年 ｜ 本科 </div>' +
                                      '</div>' +
                                    '</div>' +
                                  '</a>' +
                                  '<div class="job_list_choose"><div class="del-order confirm-ok-cancel" href="#">忽略</div></div>' +
                                '</li>';
        htmlmyjob2 +='<li class="nr">' +
                                    '<div class="job_list_pic"><img src="images/job_list_pic1.jpg"></div>' +
                                    '<div class="pull-left media-body job_list_intro">' +
                                       '<div class="job_list_tit">高级JAVA开发工程师<span>全职</span></div>' +
                                       '<div class="job_list_name">兴业证券股份有限公司</div>' +
                                       '<div class="job_list_info"><span>8k-15k 元/月</span> ｜ 上海 ｜ 2年 ｜ 本科 </div>' +
                                    '</div>' +
                                    '<a href="javascript:void(0)" class="delete">删除</a>' +
                                '</li>';
        htmlmyjob3 +='<a href="#">' +
                                  '<li>' +
                                    '<div class="job_list_pic"><img src="images/job_list_pic1.jpg"></div>' +
                                    '<div class="job_list_intro">' +
                                      '<div class="job_list_hint">木子李(HR)邀请您投递</div>' +
                                      '<div class="job_list_tit">高级JAVA开发工程师</div>' +
                                      '<div class="job_list_name">兴业证券股份有限公司</div>' +
                                    '</div>' +
                                    '<div class="job_list_choose">></div>' +
                                  '</li>' +
                                '</a>';
        htmlmypackage1 +='<a href="#">' +
                                       '<li>' +
                                         '<div class="job_list_pic"><img src="images/mypackage.jpg"></div>' +
                                         '<div class="job_list_intro">' +
                                           '<div class="job_list_tit">光学检测信号放大器开发</div>' +
                                           '<div class="job_list_info">我公司需要开发设计光学检测信号放大器,在设计的生化分析仪中，需运用光学试剂检测</div>' +
                                           '<div class="mpackage_list_price">' +
                                             '<div class="mypackage_money">报价：<span>¥ <b>111,111</b></span></div>' +
                                             '<div class="mypackage_time">2016/09/23</div>' +
                                           '</div>' +
                                         '</div>' +
                                       '</li>' +
                                     '</a>';
        htmlmypackage2 +='<a href="#">' +
                                       '<li>' +
                                         '<div class="job_list_pic"><img src="images/mypackage.jpg"></div>' +
                                         '<div class="job_list_intro">' +
                                           '<div class="job_list_tit">光学检测信号放大器开发</div>' +
                                           '<div class="job_list_info">我公司需要开发设计光学检测信号放大器,在设计的生化分析仪中，需运用光学试剂检测</div>' +
                                           '<div class="mpackage_list_price">' +
                                             '<div class="mypackage_money">任务金额：<span>¥ <b>111,111</b></span></div>' +
                                             '<div class="mypackage_time">2016/09/23</div>' +
                                           '</div>' +
                                         '</div>' +
                                       '</li>' +
                                     '</a>';
        htmlmypackage3 +='<a href="#">' +
                                       '<li>' +
                                         '<div class="job_list_pic"><img src="images/mypackage.jpg"></div>' +
                                         '<div class="job_list_intro">' +
                                           '<div class="job_list_tit">光学检测信号放大器开发</div>' +
                                           '<div class="job_list_info">我公司需要开发设计光学检测信号放大器,在设计的生化分析仪中，需运用光学试剂检测</div>' +
                                           '<div class="mpackage_list_price">' +
                                             '<div class="mypackage_money"><span>¥ <b>111,111</b></span></div>' +
                                             '<div class="mypackage_time">2016/09/23</div>' +
                                           '</div>' +
                                         '</div>' +
                                         '<div class="job_list_choose">申请职位<br><span>PHP工程师</span></div>' +
                                       '</li>' +
                                     '</a>';
        htmlmessage +='<a href="#">' +
                                       '<li>' +
                                         '<div class="job_list_pic"><img src="images/mymessage.jpg"></div>' +
                                         '<div class="job_list_intro">' +
                                           '<div class="job_list_tit">Pretty baby1<span class="recommend_tit_time">9月23日</span></div>' +
                                           '<div class="job_list_info">HSA协会与中国半导体行业协会共同举办首届...</div>' +
                                         '</div>' +
                                       '</li>' +
                                     '</a>';
        htmlporder +='<li>' +
                                       '<a href="#">' +
                                          '<div class="item-content">' +
                                             '<div class="item-media"><img src="images/pic4.jpg"></div>' +
                                             '<div class="item-inner">' +
                                               '<div class="item-title">XNUCLEO-F030R8 STM32</div>' +
                                               '<div class="item-title-row">' +
                                                 '<div class="item-time">数量：2</div>' +
                                                 '<div class="item-after">¥400</div>' +
                                               '</div>' +
                                             '</div>' +
                                          '</div>' +
                                       '</a>' +
                                       '<div class="foot">' +
                                           '<data>2016/9/23</data>' +
                                           '<time>14:00</time>' +
                                           '<a class="order_choose_btn2" href="#">查看物流</a>' +
                                           '<a class="del-order confirm-ok-neglect" href="#">删除订单</a>' +
                                       '</div>' +
                                   '</li>';
       }
      // 添加新条目
      if(tabIndex == '0'&&key == 'p'){
        $('.infinite-scroll.active .list-container').append(html);
      }else if(tabIndex == '1' && key == 'p'){
        $('.infinite-scroll.active .list-container').append(html2)    
      }else if(tabIndex == 'news'){
        $('.infinite-scroll.active .list-container').append(htmlnews)    
      }else if(tabIndex == 'teacher'){
        $('.infinite-scroll.active .list-container').append(htmlteacher)    
      }else if(tabIndex == 'class'){
        $('.infinite-scroll.active .list-container').append(htmlclass)    
      }else if(tabIndex == 'student'){
        $('.infinite-scroll.active .list-container').append(htmlstudents)    
      }else if(tabIndex == '1' && key == 'a'){
        $('.infinite-scroll.active .list-container').append(htmla1)    
      }else if(tabIndex == '2' && key == 'a'){
        $('.infinite-scroll.active .list-container').append(htmla2)    
      }else if(tabIndex == 'case'){
        $('.infinite-scroll.active .list-container').append(htmlcase)    
      }else if(tabIndex == 'hall'){
        $('.infinite-scroll.active .list-container').append(htmlhall)    
      }else if(tabIndex == 'task'){
        $('.infinite-scroll.active .list-container').append(htmltask)    
      }else if(tabIndex == 'taskdetail'){
        $('.infinite-scroll.active .list-container').append(htmltaskdetail)    
      }else if(tabIndex == 'classify'){
        $('.infinite-scroll.active .list-container').append(htmlclassify)    
      }else if(tabIndex == 'info'){
        $('.infinite-scroll.active .list-container').append(htmlinfo)    
      }else if(tabIndex == 'recruit'){
        $('.infinite-scroll.active .list-container').append(htmlrecruit)    
      }else if(tabIndex == '1' && key == 'myjob'){
        $('.infinite-scroll.active .list-container').append(htmlmyjob1)    
      }else if(tabIndex == '2' && key == 'myjob'){
        $('.infinite-scroll.active .list-container').append(htmlmyjob2)    
      }else if(tabIndex == '3' && key == 'myjob'){
        $('.infinite-scroll.active .list-container').append(htmlmyjob3)    
      }else if(tabIndex == '1' && key == 'mypackage'){
        $('.infinite-scroll.active .list-container').append(htmlmypackage1)    
      }else if(tabIndex == '2' && key == 'mypackage'){
        $('.infinite-scroll.active .list-container').append(htmlmypackage2)    
      }else if(tabIndex == '3' && key == 'mypackage'){
        $('.infinite-scroll.active .list-container').append(htmlmypackage3)    
      }else if(tabIndex == 'message'){
        $('.infinite-scroll.active .list-container').append(htmlmessage)    
      }else if(tabIndex == 'porder'){
        $('.infinite-scroll.active .list-container').append(htmlporder)    
      }else{
        $.toast("数据加载出错，请重试!");
      }
    }
    $(page).on('infinite', function() {
      // 如果正在加载，则退出
      if (loading) return;
      // 设置flag
      loading = true;
      var tabIndex = '', key = '';
      if($(this).find('.infinite-scroll.active').attr('id') == "tab1"){
        tabIndex = 0;
        key = 'p';
      }
      if($(this).find('.infinite-scroll.active').attr('id') == "tab2"){
        tabIndex = 1;
        key = 'p';
      }
      if($(this).find('.infinite-scroll.active').attr('id') == "news"){
        tabIndex = 'news';
      }
      if($(this).find('.infinite-scroll.active').attr('id') == "teacher"){
        tabIndex = 'teacher';
      }
      if($(this).find('.infinite-scroll.active').attr('id') == "class"){
        tabIndex = 'class';
      }
      if($(this).find('.infinite-scroll.active').attr('id') == "student"){
        tabIndex = 'student';
      }
      if($(this).find('.infinite-scroll.active').attr('id') == "a1"){
        tabIndex = 1;
        key = 'a';
      }
      if($(this).find('.infinite-scroll.active').attr('id') == "a2"){
        tabIndex = 2;
        key = 'a';
      }
      if($(this).find('.infinite-scroll.active').attr('id') == "b1"){
        tabIndex = 1;
        key = 'b';
      }
      if($(this).find('.infinite-scroll.active').attr('id') == "b2"){
        tabIndex = 2;
        key = 'b';
      }
      if($(this).find('.infinite-scroll.active').attr('id') == "case"){
        tabIndex = 'case';
      }
      if($(this).find('.infinite-scroll.active').attr('id') == "hall"){
        tabIndex = 'hall';
      }
      if($(this).find('.infinite-scroll.active').attr('id') == "task"){
        tabIndex = 'task';
      }
      if($(this).find('.infinite-scroll.active').attr('id') == "taskdetail"){
        tabIndex = 'taskdetail';
      }
      if($(this).find('.infinite-scroll.active').attr('id') == "classify"){
        tabIndex = 'classify';
      }
      if($(this).find('.infinite-scroll.active').attr('id') == "info"){
        tabIndex = 'info';
      }
      if($(this).find('.infinite-scroll.active').attr('id') == "recruit"){
        tabIndex = 'recruit';
      }
      if($(this).find('.infinite-scroll.active').attr('id') == "myjob1"){
        tabIndex = 1;
        key = 'myjob';
      }
      if($(this).find('.infinite-scroll.active').attr('id') == "myjob2"){
        tabIndex = 2;
        key = 'myjob';
      }
      if($(this).find('.infinite-scroll.active').attr('id') == "myjob3"){
        tabIndex = 3;
        key = 'myjob';
      }
      if($(this).find('.infinite-scroll.active').attr('id') == "mypackage1"){
        tabIndex = 1;
        key = 'mypackage';
      }
      if($(this).find('.infinite-scroll.active').attr('id') == "mypackage2"){
        tabIndex = 2;
        key = 'mypackage';
      }
      if($(this).find('.infinite-scroll.active').attr('id') == "mypackage3"){
        tabIndex = 3;
        key = 'mypackage';
      }
      if($(this).find('.infinite-scroll.active').attr('id') == "message"){
        tabIndex = 'message';
      }
      if($(this).find('.infinite-scroll.active').attr('id') == "porder"){
        tabIndex = 'porder';
      }
      if(typeof tabIndex == 'number'){
        lastIndex = $('.list-container').eq(tabIndex).find('li').length;
      }else{
        lastIndex = $('.list-container').find('li').length;
      }
      
      // 模拟0.5s的加载过程
      setTimeout(function() {
        // 重置加载flag
        loading = false;
        if (lastIndex >= maxItems) {
          // 加载完毕，则注销无限加载事件，以防不必要的加载
          //$.detachInfiniteScroll($('.infinite-scroll').eq(tabIndex));
          // 删除加载提示符
          if(typeof tabIndex == 'number'){
          $('.infinite-scroll-preloader').eq(tabIndex).hide();
          }else{
            $('.infinite-scroll-preloader').hide();
          }
          return;
        }
        addItems(itemsPerLoad,lastIndex,tabIndex,key);
        // 更新最后加载的序号
        lastIndex =  $('.list-container').eq(tabIndex).find('li').length;
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

  $(document).on("beforePageSwitch", function(e, id, page) {
    $.closePanel();
    $(".content").scrollTop(0);
  });
  //产品选择
  $(document).on("pageInit", "#mproduct", function(e, id, page){
    $(".select").on("click","a",function(){
      $(this).addClass("on").siblings().removeClass("on");
    });
    //课程列表选择 
    $(".buttons-tab").on("click","a",function(){
      $(this).addClass("active").siblings().removeClass("active");
      if($(this).hasClass('all')){
        $(".nodata").remove();       
        $("#class").show();
      }else{
        $(".nodata").remove();
        $("#class").hide().parent().append("<div class='nodata' style='text-align:center;'>暂无数据！<div>");
      }
      

    });
  });
  // 众筹项目详情
  $(document).on("pageInit", function(e, id, page) {
    $(page).scrollTop(0);
    $(".card-content-inner").on("click",".ding",function(){
      var price = $(this).find(".price").attr("data-price")
      $(this).find("i").addClass("active");
      $(this).parent().siblings().find("i").removeClass("active");
      $(".bottom-bar").find(".button-fill").text("支持：￥" + price);
    });
    $(".card-content-inner .qmore").on("click","a",function(){
      $(this).parent().next(".info").toggle(); 
      if($(this).find('i').hasClass('fa-angle-up')){
          $(this).html("展开 <i class='fa fa-angle-down'></i>");       
        }else{
          $(this).html("收起 <i class='fa fa-angle-up'></i>");
        }
    });
    $(".bottom-bar").on("click",".like",function(){
      $(this).find(".fa").toggleClass("fa-heart-o");
    }); // 关注
    $(".icon-share").on("click",function(){
      $(".jiathis_style_m").toggle(); //分享
    })

  });
   
  // 模拟在线对话
  $(document).on("pageInit", function(e, id, page) {

    $(".talk-bar").on("click",".fa-send",function(){
      var text = "",text2 = "";
      var speak = $(".talk-bar").find("input").val();
      if(speak){
        text += '<div class="block t1 content-padded">' + 
              '<img src="images/pic25.png" alt="">' +
              '<div class="pop">'+
              speak +
              '</div>' +              
              '</div>';
        text2 += '<div class="block t2 content-padded">' +               
              '<div class="pop">'+
              '外出，请留言！' +
              '</div>' + 
              '<img src="images/pic25.png" alt="">' +             
              '</div>';
        $("#vc").find(".talkcontent").append(text);
        $(".talk-bar").find("input").val("");
        $("#vc").scrollTop(10000000);

        setTimeout(function(){
            $("#vc").find(".talkcontent").append(text2);
            $("#vc").scrollTop(100000000);
        },1000)
      }
    });
  });
  
  $(document).on('click','.create-actions', function () {
      var buttons1 = [
        {
          text: '设置备注',
          onClick: function() {
            $.alert("你选择了设置备注");
          }
        },
        {
          text: '取消关注',
          onClick: function() {
            $.alert("你选择了取消关注");
          }
        }
      ];
      var buttons2 = [
        {
          text: '取消',
          bg: 'danger'
        }
      ];
      var groups = [buttons1, buttons2];
      $.actions(groups);
  });

  // 弹出确认框
  $(document).on('click', '.confirm-ok-cancel',function () {
      var this_order = $(this).parent().parent();
      $.confirm('确定要删除吗？',
        function () {
          this_order.remove();
        },
        function () {
          // $.alert('你选择了取消');
        }
      );
  });
  //个人中心人力忽略
  $(document).on('click', '.confirm-ok-neglect',function () {
      var this_order = $(this).parent().parent();
      $.confirm('确定要忽略吗？',
        function () {
          this_order.remove();
        },
        function () {
          // $.alert('你选择了取消');
        }
      );
  });



  $(document).on("pageInit", function(e, id, page) {

  // 所在地区
  $("#adr").picker({
          toolbarTemplate: '<header class="bar bar-nav">\
          <button class="button button-link pull-left close-picker">取消</button>\
          <button class="button button-link pull-right close-picker">确定</button>\
          <h1 class="title">标题</h1>\
          </header>',
          cols: [
            {
              textAlign: 'center',
              values: ['江苏省无锡市新区', '其它地区']
            }
          ]
        });
  // 街道
  $("#street").picker({
          toolbarTemplate: '<header class="bar bar-nav">\
          <button class="button button-link pull-left close-picker">取消</button>\
          <button class="button button-link pull-right close-picker">确定</button>\
          <h1 class="title">标题</h1>\
          </header>',
          cols: [
            {
              textAlign: 'center',
              values: ['江溪', '暂无选择']
            }
          ]
        });


    // 左滑删除
    util.toucher(document.getElementById('share'))
    .on('swipeLeft','.nr',function(){
      $(this).addClass('xs');
      return false;
    })
    .on('swipeRight','.nr',function(){
      $(this).removeClass('xs');
      return false;
    })
    .on('singleTap','.delete',function(){
      $(this).parent().remove();
    });

  });
    //地址管理
    $(document).on("pageInit", function(e, id, page) {
      $(".address .item-media").on("click",".delete",function(){
        var del_address=$(this).parent().parent().parent().parent();

        $.confirm('确定要删除吗？',
        function () {
          del_address.remove();
        },
        function () {
          // $.alert('你选择了取消');
        }
      );
      });
    })

  $.init();

});
