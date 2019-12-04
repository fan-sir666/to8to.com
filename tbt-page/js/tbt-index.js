$(function() {
    // 搜索区域 选项卡
    $('.search-cen > li:nth-child(2)').mouseover(function() {
        $('.search-cen-x > li:nth-child(1)').show().siblings().hide();
        $('.search-cen > li:nth-child(2) a').css('color','#ffa929');
    });
    $('.search-cen > li:nth-child(3)').mouseover(function() {
        $('.search-cen-x > li:nth-child(2)').show().siblings().hide();
        $('.search-cen > li:nth-child(3) a').css('color','#ffa929');
    });
    $('.search-cen > li:nth-child(4)').mouseover(function() {
        $('.search-cen-x > li:nth-child(3)').show().siblings().hide();
        $('.search-cen > li:nth-child(4) a').css('color','#ffa929');
    });
    $('.search-cen > li:nth-child(5)').mouseover(function() {
        $('.search-cen-x > li').hide();
        $('.search-cen > li:nth-child(5) a').css('color','#ffa929');
    });
    $('.search-cen > li:nth-child(6)').mouseover(function() {
        $('.search-cen-x > li:nth-child(4)').show().siblings().hide();
        $('.search-cen > li:nth-child(6) a').css('color','#ffa929');
    });
    $('.search-cen > li:nth-child(7)').mouseover(function() {
        $('.search-cen-x > li:nth-child(5)').show().siblings().hide();
        $('.search-cen > li:nth-child(7) a').css('color','#ffa929');
    });
    $('.search-cen').mouseout(function() {
        $('.search-cen-x > li').hide();
        $('.search-cen > li a').css('color','#333')
    });
})