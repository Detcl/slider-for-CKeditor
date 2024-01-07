CKEDITOR.plugins.add('ofmeslider', {
    icons: 'ofmeslider',
    init: function(editor) {
        editor.addCommand('insertOfmeSlider', {
            exec: function(editor) {
                var sliderHtml = '<link href="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.min.css" rel="stylesheet" type="text/css" />' +
                                 '<link href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css" rel="stylesheet" type="text/css" />' +
                                 '<link href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css" rel="stylesheet" type="text/css" />' +
                                 '<div class="slider">' +
                                 '    <div><img alt="фото стул кресло Самба Samba производитель ОФМЕ OFME каркас хром подлокотники дерево обивка чёрный " src="/upload/editor/files/stul_samba_chrome_derevo_black_ofme_ru_740_005_w.png" /></div>' +
                                 '    <div><img alt="фото стул кресло Самба Samba производитель ОФМЕ OFME каркас хром подлокотники дерево обивка чёрный " src="/upload/editor/files/stul_samba_chrome_derevo_black_ofme_ru_740_004_w.png" /></div>' +
                                 '    <div><img alt="фото стул кресло Самба Samba производитель ОФМЕ OFME каркас хром подлокотники дерево обивка чёрный " src="/upload/editor/files/stul_samba_chrome_derevo_black_ofme_ru_740_002_w.png" /></div>' +
                                 '    <div><img alt="фото стул кресло Самба Samba производитель ОФМЕ OFME каркас хром подлокотники дерево обивка чёрный " src="/upload/editor/files/stul_samba_chrome_derevo_black_ofme_ru_740_003_w.png" /></div>' +
                                 '    <div><img alt="фото стул кресло Самба Samba производитель ОФМЕ OFME каркас хром подлокотники дерево обивка чёрный " src="/upload/editor/files/stul_samba_chrome_derevo_black_ofme_ru_740_001_w.png" /></div>' +
                                 '</div>' +
                                 '<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>' +
                                 '<script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"></script>' +
                                 '<script src="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js"></script>' +
                                 '<script>' +
                                 '$(document).ready(function() {' +
                                 '  $(".slider").slick({' +
                                 '    dots: true,' +
                                 '    prevArrow: \'<button type="button" class="slick-prev1"></button>\',' +
                                 '    nextArrow: \'<button type="button" class="slick-next1"></button>\',' +
                                 '    responsive: [' +
                                 '      {' +
                                 '        breakpoint: 768,' +
                                 '        settings: {' +
                                 '          arrows: false,' +
                                 '        }' +
                                 '      }' +
                                 '    ]' +
                                 '  });' +
                                 
                                 '  $(".slider").magnificPopup({' +
                                 '    delegate: "img",' +
                                 '    type: "image",' +
                                 '    gallery: {' +
                                 '      enabled: true' +
                                 '    },' +
                                 '    mainClass: "mfp-with-zoom",' +
                                 '    zoom: {' +
                                 '      enabled: true,' +
                                 '      duration: 300,' +
                                 '      easing: "ease-in-out",' +
                                 '      opener: function(openerElement) {' +
                                 '        return openerElement.is("img") ? openerElement : openerElement.find("img");' +
                                 '      }' +
                                 '    },' +
                                 '    image: {' +
                                 '      titleSrc: function(item) {' +
                                 '        return item.el.attr("alt");' +
                                 '      },' +
                                 '      tError: \'<a href="%url%">The image</a> could not be loaded.\'' +
                                 '    },' +
                                 '    callbacks: {' +
                                 '      elementParse: function(item) {' +
                                 '        item.src = item.el.attr("src");' +
                                 '      }' +
                                 '    }' +
                                 '  });' +
                                 '});' +
                                 '</script>';

                editor.insertHtml(sliderHtml);
            }
        });

        editor.ui.addButton('OfmeSlider', {
            label: 'Вставить слайдер',
            command: 'insertOfmeSlider',
            toolbar: 'insert',
            icon: this.path + 'images/icon.png'
        });
    }
});

