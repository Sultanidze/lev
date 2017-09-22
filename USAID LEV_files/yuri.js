$(document).ready(function(){
	
    //----------------------------------
    // edits Yuri 2017 
    //----------------------------------
    
    //реалізуємо акордеон для відображення пунктів підменю 
    $(".b-sideMenu__item").hover(function(){
        $(this).children(".b-sideSubmenu").stop().slideToggle(300);
    })
	
	// стилізація селектів в каталоці інституцій
    $('.js-select_catalog').selectric({
		arrowButtonMarkup: '<b class="button"><i class="icon-down-open"></i></b>'
	});
	
	// відправка форми з селектами
	$(".js-select_catalog").on("change", function(){
		$(this).parents("form").trigger("submit");
	});
	
   // edits Yuri 2017 end ---------------------------
});