$('.list li a').click(function() {
	var f = this;
	$('.list li a').each(function() {
		this.className = this == f ? 'active' : 'none'
	});
});

$('.animation .tabmenu li').click(function() {
	var $this = $(this);
	var f = this;
	index = $this.index();
	$(".tabcontent > div").eq(index).addClass("selector").siblings().removeClass("selector");
	$('.animation .tabmenu li').each(function() {
		this.className = this == f ? 'active2' : 'none2'
	});
});

$(".whole .main .open a").click(function(){
  $(".sidebar").css('display','inline-block')
});
$(".sidebar .shut").click(function(){
  $(".sidebar").css('display','none')
});
