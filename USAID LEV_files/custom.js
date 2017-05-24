
jQuery(document).ready(function ($) {
    //
    //вопросы про объекты
    //
	//alert('ready');
    $('#join').submit(function(e) {
                e.preventDefault();
                //alert($(this).serialize());
                $.ajax({
                        type: 'GET',  
                        data: $( this ).serialize(),
                        url: "/anketa/add",  
                        cache: false,  
                        success: function(ans){  
                            if (ans == 1) {
                                //Добавлен вопрос
                                alert('Анкета прийнята');
                                //showModal.open('#ok_request');
                            };
                            if (ans == 0) {
                                // Не добавлен вопрос
                                alert('Анкета не принята');
                                //showModal.open('#not_ok_request');
                            };
                            
                        }  
                    });

      });
      $('#propose').submit(function(e) {
                e.preventDefault();
                //alert($(this).serialize());
                $.ajax({
                        type: 'GET',  
                        data: $( this ).serialize(),
                        url: "/anketa/addpropose",  
                        cache: false,  
                        success: function(ans){  
                            if (ans == 1) {
                                //Добавлен вопрос
                                alert('Пропозиція прийнята');
                                //showModal.open('#ok_request');
                            };
                            if (ans == 0) {
                                // Не добавлен вопрос
                                alert('Анкета не принята');
                                //showModal.open('#not_ok_request');
                            };
                            
                        }  
                    });

      });
      $('#rating_sfera').change(function(e){
		   e.preventDefault();
           window.location = '/organs.html?sfera=' + $('#rating_sfera').val();
           
		  });    
	$('.organ_li').click(function(e){
		   e.preventDefault();
           $('.organ_li').removeClass('current');
           $(this).addClass('current');
           //data = $(this).dataset;
           //alert($(this));
           org_id  = document.querySelector('.organ_li.current').dataset.id;
           $('#rating_organ').val(org_id);
			   //oo = '#oo-'+org_id;
			   //alert($(oo).val());
			   //$(oo).setAttribute('selected','selected');
			   loadorgan();
           });
      $('#rating_organ').change(function(e){
		   e.preventDefault();
           //window.location = '/organs.html?sfera=' + $('#rating_sfera').val();
           $('.organ_li').removeClass('current');
           li_id = "#li_" + $('#rating_organ').val();
           $(li_id).addClass('current');
           loadorgan();
		  });  
	 function loadorgan(){
			organ_id = $('#rating_organ').val();
			sfera_id = $('#rating_sfera').val();
			home_url = $('#h_home_url').val();
			$.ajax({
                        type: 'GET',  
                        data: 'organ='+organ_id+'&sfera='+sfera_id,
                        url: home_url+"problem/getorgan",  
                        cache: false,  
                        success: function(ans){  
                            $('#organ_info').html(ans);
                            initTabs();
                        }  
                    });
		 }
	if($('#rating_organ').val()){
		li_id = "#li_" + $('#rating_organ').val();
           $(li_id).addClass('current');
           loadorgan();
		}
	//
    // Вкладки
    //---------------------------------------------------------------------------------------
    function initTabs() {
        var $tabs = $('.js-tabs'),
            method = {};

        method.init = function () {
            $tabs.each(function () {
                $(this).find('.b-tabs__content').not(':first').hide();
                var current = $(this).find('.b-tabs__item.current');
                if (!current.length) {
                    $(this).find('.b-tabs__item').filter(':first').addClass('current');
                }
                current = $(this).find('.b-tabs__item.current a').attr('href');
                $(current).show();
            });
        };

        method.show = function (el) {
            var $buttons = el.parents('ul').find('li'),
                tab_next = el.attr('href'),
                tab_current = $buttons.filter('.current').find('a').attr('href');
            $(tab_current).hide();
            $buttons.removeClass('current');
            el.parent().addClass('current');
            $(tab_next).fadeIn();
            history.pushState(null, null, window.location.search + el.attr('href'));
            return false;
        }


        method.init();//запустили вкладки


        $tabs.on('click', '.b-tabs__link[href^="#"]', function (e) {//переключение по клику
            e.preventDefault();
            var $el = $(this);
            if ($el.parent().hasClass('current')) {
                return false;
            } else {
                method.show($el);
            }
        });

        (function () {//парсим линк и открываем нужную вкладку при загрузке
            var hash = window.location.hash;
            if (hash) {
                var selectedTab = $('.b-tabs__item a[href="' + hash + '"]');
                selectedTab.trigger('click', true);
            }
        })();
    };
    if ($('.js-tabs').length) { initTabs();}

    //----------------------------------
    // edits march 2017 
    //----------------------------------
    // 
    // cat-1.psd catalogues.psd
    $('#feedback').submit(function(e) {
        e.preventDefault();
        //alert($(this).serialize());
        $.ajax({
                type: 'GET',  
                data: $( this ).serialize(),
                //url: "/anketa/add",  
                url: "",  //введіть актуальний url
                cache: false,  
                success: function(ans){  
                    if (ans == 1) {
                        //Добавлен вопрос
                        alert('Анкета прийнята');
                        //showModal.open('#ok_request');
                    };
                    if (ans == 0) {
                        // Не добавлен вопрос
                        alert('Анкета не принята');
                        //showModal.open('#not_ok_request');
                    };
                    
                }  
            });

    });
    
    //реалізуємо акордеон для відображення пунктів підменю 
    $(".b-sideMenu__item").hover(function(){
        $(this).children(".b-sideSubmenu").stop().slideToggle(300);
    })
   // edits march 2017 end ---------------------------
   
});
