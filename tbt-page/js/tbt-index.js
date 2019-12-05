$(function() {
    // 搜索区域 选项卡
    $('.search-cen > li:nth-child(2)').mouseover(function() {
        $('.search-cen-x > li:nth-child(1)').fadeIn().siblings().fadeOut();
        $('.search-cen > li:nth-child(2) a').css('color', '#ffa929');
    });
    $('.search-cen > li:nth-child(3)').mouseover(function() {
        $('.search-cen-x > li:nth-child(2)').fadeIn().siblings().fadeOut();
        $('.search-cen > li:nth-child(3) a').css('color', '#ffa929');
    });
    $('.search-cen > li:nth-child(4)').mouseover(function() {
        $('.search-cen-x > li:nth-child(3)').fadeIn().siblings().fadeOut();
        $('.search-cen > li:nth-child(4) a').css('color', '#ffa929');
    });
    $('.search-cen > li:nth-child(5)').mouseover(function() {
        $('.search-cen-x > li').hide();
        $('.search-cen > li:nth-child(5) a').css('color', '#ffa929');
    });
    $('.search-cen > li:nth-child(6)').mouseover(function() {
        $('.search-cen-x > li:nth-child(4)').fadeIn().siblings().fadeOut();
        $('.search-cen > li:nth-child(6) a').css('color', '#ffa929');
    });
    $('.search-cen > li:nth-child(7)').mouseover(function() {
        $('.search-cen-x > li:nth-child(5)').fadeIn().siblings().fadeOut();
        $('.search-cen > li:nth-child(7) a').css('color', '#ffa929');
    });
    $('.search-cen').mouseout(function() {
        $('.search-cen-x > li').hide();
        $('.search-cen > li a').css('color', '#333')
    });
})

// 轮播图

var index = 0;
$('.arrow-right').click(function() {
    index++;
    if (index > $('.slider li').length - 1) {
        index = 0;
    }
    // console.log(index);
    $('.slider li').eq(index)
        .fadeIn(80)
        .siblings()
        .fadeOut(80);

    $('.control a').eq(index)
        .addClass('active')
        .siblings()
        .removeClass('active');
});

$('.arrow-left').click(function() {
    index--;
    if (index < 0) {
        index = $('.slider li').length - 1;
    }
    $('.slider li').eq(index)
        .fadeIn(80)
        .siblings()
        .fadeOut(80);
    $('.control a').eq(index)
        .addClass('active')
        .siblings()
        .removeClass('active');
});

var num; // 定时器的标识
function autoPlay() {
    num = setInterval(function() {
        $('.arrow-right').click();
    }, 800);
}
autoPlay(); // 启动自动轮播

$('.slider').mouseover(function() {
    clearInterval(num);
});

$('.slider').mouseout(function() {
    autoPlay();
});

$('.control a').click(function() {
    var index = $(this).index();
    $('.slider li').eq(index)
        .fadeIn(80)
        .siblings()
        .fadeOut(80);
    $(this)
        .addClass('active')
        .siblings()
        .removeClass('active');
});

// 装修公司 tab 切换

$('.finish .tab .tab-control li').click(function(){
	// 1.1 获取当前触发的li的索引
	var index = $(this).index();
	// 1.2 给当前的li添加类名active，其他兄弟li移除active类名
	$(this).addClass('active').siblings().removeClass('active');
	// 1.3 根据索引找到对应的div项，添加active类名，当前这个div的其他兄弟要移除active
	$('.finish .tab .tab-content .tab-content-item').eq(index)
	.addClass('active')
	.siblings()
	.removeClass('active');
}); 