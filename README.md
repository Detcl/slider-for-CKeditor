# slider-for-CKeditor

Это простой плагин слайдера для CKEditor, который интегрирует функциональность слайдера с использованием популярных библиотек, таких как magnific-popup, slick, slick-theme и jquery.

## Особенности
- Интеграция с CKEditor
- Использование magnific-popup, slick, slick-theme, jquery-3.6.0, slick-carousel

## Настройка
Чтобы использовать слайдер, необходимо добавить следующие ссылки в секцию `<head>` вашей веб-страницы:<br>

<link href="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.min.css" rel="stylesheet" type="text/css" /><br>
<link href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css" rel="stylesheet" type="text/css" /><br>
<link href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css" rel="stylesheet" type="text/css" /><br>

## Установка
1. Скопируйте плагин в директорию `CKEditor/plugins`.



## JavaScript Библиотеки
Если JavaScript библиотеки не вставляются в `<body>`, поместите следующие скрипты:

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script><br>
<script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"></script><br>
<script src="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js"></script><br>

**Важно:** Эти скрипты должны быть определены после блока слайдера!

## Интеграция с CKEditor
Добавьте следующий код в ваш CKEditor toolbar конфигурационный скрипт:

<script><br>
	(function(){<br>
		var config = {<br>
			extraPlugins: 'uploadimage,ofmeslider', // Добавьте сюда ofmeslider<br>
			allowedContent: true,<br>
			toolbar:  [<br>
				// ... остальные элементы тулбара ...<br>
				'/',<br>
				{ name: 'insert', items: [ 'Image', 'Table', 'HorizontalRule', 'Smiley', 'SpecialChar', 'PageBreak', 'Iframe', 'OfmeSlider' ] }, // Добавьте 'OfmeSlider' в нужную группу<br>
				// ... остальные элементы тулбара ...v<br>
			],<br>
		};<br>
		// остальная часть скрипта остается без изменений<br>
	})();<br>
</script><br>

