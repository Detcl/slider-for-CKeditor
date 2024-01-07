# slider-for-CKeditor
простой плагин слайдера для CKEditor
Слайдер с использованием библиотек magnific-popup, slick, slick-theme, jquery-3.6.0, slick-carouse


Добавить в <Head> страницы где будет слайдер(или же вообще на все) линки к 
<link href="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.min.css" rel="stylesheet" type="text/css" />
<link href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css" rel="stylesheet" type="text/css" />
<link href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css" rel="stylesheet" type="text/css" />
Если JS библиотеки не вставляются  в боди нужно поместить

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js"></script>
 который должен быть определен после слайдера!

Код для тулбара(там где вызывается CKeditor)
<script>
	(function(){
		var config = {
			extraPlugins: 'uploadimage,ofmeslider', // Добавьте сюда ofmeslider
			allowedContent: true,
			toolbar:  [
				// ... остальные элементы тулбара ...
				'/',
				{ name: 'insert', items: [ 'Image', 'Table', 'HorizontalRule', 'Smiley', 'SpecialChar', 'PageBreak', 'Iframe', 'OfmeSlider' ] }, // Добавьте 'OfmeSlider' в нужную группу
				// ... остальные элементы тулбара ...
			],
		};
		// остальная часть скрипта остается без изменений
	})();
</script>

