// window.condMaster = localStorage.getItem('condMaster');
window.condGmap = localStorage.getItem('condGmap');
window.condAnalytics = localStorage.getItem('condAnalytics');
window.condYoutube = localStorage.getItem('condYoutube');

window.condAcceptAll = localStorage.getItem('condAcceptAll');
window.condPrivacyBarShow = localStorage.getItem('condPrivacyBarShow');
// if (window.condMaster === null) {
//     window.condMaster = false;
// } else {
//     window.condMaster = JSON.parse(window.condMaster)
// }

if (window.condGmap === null) {
    // console.log('was null setting to false');
    window.condGmap = false;
} else {
    condGmap = JSON.parse(window.condGmap)
}

if (window.condAnalytics === null) {
    window.condAnalytics = false;
} else {
    condAnalytics = JSON.parse(window.condAnalytics)
}

if (window.condYoutube === null) {
    window.condYoutube = false;
} else {
    condYoutube = JSON.parse(window.condYoutube)
}

if (window.condAcceptAll === null) {
    window.condAcceptAll = false;
} else {
    condAcceptAll = JSON.parse(window.condAcceptAll)
}

if (window.condPrivacyBarShow === null) {
    window.condPrivacyBarShow = false;
} else {
    condPrivacyBarShow = JSON.parse(window.condPrivacyBarShow)
}

setTimeout(checkJQueryForPrivacy, 250);

    function checkJQueryForPrivacy(){
        if (!window.jQuery) {
            return setTimeout(checkJQueryForPrivacy, 250);
        }

        // button clicks
        if (window.condPrivacyBarShow != true) {
            $('.privacy-bar').fadeIn();

        }

        $('#enable-all').on('click', function () {

            window.condAnalytics = true;
            localStorage.setItem("condAnalytics", window.condAnalytics);

            window.condGmap = true;
            localStorage.setItem("condGmap", window.condGmap);

            window.condAcceptAll = true;
            localStorage.setItem("condAcceptAll", window.condAcceptAll);

            window.condPrivacyBarShow = true;
            localStorage.setItem("condPrivacyBarShow", window.condPrivacyBarShow);

            $('.privacy-bar').fadeOut();
            $('#footer').removeClass('addSpace');

        });

        $('.open-privacy-settings').click(function () {
            $('#privacy-settings ').show();
            $('.privacy-bar').fadeOut();

            window.condPrivacyBarShow = true;
            localStorage.setItem("condPrivacyBarShow", window.condPrivacyBarShow);

            $('#footer').removeClass('addSpace');
        });
        $('.close-privacy').click(function () {
            $('#privacy-settings ').hide();
        });


        // activate gmap
        $('.gmap-inactive-status .btn-on, #load-google-map').on('click', function () {
            window.condGmap = true;
            localStorage.setItem("condGmap", window.condGmap);

            activateGmap();
        });

        // deactivate gmap
        $('.gmap-active-status .btn-off').on('click', function () {
            window.condGmap = false;
            localStorage.setItem("condGmap", window.condGmap);

            deactivateGmap();
        });


        // activate youtube
        $('.youtube-inactive-status .btn-on, #load-youtube').on('click', function () {
            window.condYoutube = true;
            localStorage.setItem("condYoutube", window.condYoutube);

            $('.ce_youtube_fullscreen').addClass('youtube-active');
            
            checkJQueryForColorbox();
        });

        // deactivate youtube
        $('.youtube-active-status .btn-off').on('click', function () {
            window.condGmap = false;
            localStorage.setItem("condGmap", window.condGmap);
        });

        // activate / deactivate ganalytics
        $('#g-analytics-control').on('change', function () {
            
            if($(this).is(':checked')) {

                window.condAnalytics = true;
                localStorage.setItem("condAnalytics", window.condAnalytics);
                $('#privacy-settings').addClass('active-analytics');

            } else {

                window.condAnalytics = false;
                localStorage.setItem("condAnalytics", window.condAnalytics);
                $('#privacy-settings').removeClass('active-analytics');
            }
           
        });


        if ($('.privacy-bar').css('display') == 'block') {
            $(window).scroll(function () {
                if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
                    $(window).unbind('scroll');
                    $('#footer').addClass('addSpace');
                }
            })
        }



}

function activateGmap() {
    $('.map-container').addClass('active-gmap');
    $('#privacy-settings').addClass('active-gmap');
    $('.dlh_googlemap').removeClass('map-hidden');
    $(".map-question-block").hide();
    $(".map-container + .open-privacy-btn").show();
    console.log('sdsds');
}

function deactivateGmap() {
    $('.map-container').removeClass('active-gmap');
    $('.dlh_googlemap').addClass('map-hidden');
    $('#privacy-settings').removeClass('active-gmap');
    $(".map-question-block").show();
    $(".map-container + .open-privacy-btn").hide();
}

function activateYoutube() {
    // checkJQueryForColorbox();
}

function deactivateYoutube() {
   
}

// Activate Youtube
function checkJQueryForColorbox(){
    if(window.jQuery && window.jQuery.colorbox) {
        // colorbox logic for Youtube Videos based on the ce_youtube_fullscreen template
        if( $(".youtube-preview").length ){
            $(".youtube-preview").colorbox(cboxOptions);
            $('#colorbox').addClass('video-colorbox');
        }

        // moved from j_colorbox for async JS loading
        if($('a[data-lightbox]').length > 0) {
            $('a[data-lightbox]').map(function() {
                $(this).colorbox({
                    // Put custom options here
                    loop: false,
                    rel: $(this).attr('data-lightbox'),
                    maxWidth: '95%',
                    maxHeight: '95%',
                    onComplete: function() {
                          $("#colorbox").prepend("<b>Appended text</b>")
                      },
                });
            });
        }   
    } else {
        setTimeout(checkJQueryForColorbox, 250);        
    }   
}
