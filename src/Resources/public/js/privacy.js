
var contaoPrivacy = (function() {

    /**
     * Whether we show privacy bar or not
     * @return boolean
     */
    function toShowBar() {
        return !localStorage.getItem('contaoPrivacy.barUsed');
    }

    /**
     * Show privacy bar
     */
    function showBar() {
        $('.privacy-bar').fadeIn();
    }

    /**
     * Set privacy bar used
     */
    function setBarUsed() {
        localStorage.setItem('contaoPrivacy.barUsed', '1');
    }

    /**
     * Close privacy bar
     */
    function closeBar() {
        $('.privacy-bar').fadeOut();
        $('#footer').removeClass('addSpace');
    }

    /**
     * Set all enabled
     */
    function enableAll() {
        setAnalytics(true);
        setGmap(true);
        setYouTube(true);
    }

    /**
     * @param bln boolean
     */
    function setAnalytics(bln) {
        localStorage.setItem('contaoPrivacy.enabledAnalytics', bln ? '1' : '');

        // Switch checkbox correspondingly
        var $inputAnalytics = $('input[name="privacy-g-analytics"]');
        $inputAnalytics.prop("checked", bln);

        // Show right status message
        $('.g-analytics .status-enabled').css('display', bln ? 'block' : 'none');
        $('.g-analytics .status-disabled').css('display', bln ? 'none' : 'block');
    }

    /**
     * @param bln boolean
     */
    function setGmap(bln) {
        localStorage.setItem('contaoPrivacy.enabledGmap', bln ? '1' : '');

        // Switch checkbox correspondingly
        var $inputGmaps = $('input[name="privacy-g-maps"]');
        $inputGmaps.prop("checked", bln);

        // Show right status message
        $('.g-maps .status-enabled').css('display', bln ? 'block' : 'none');
        $('.g-maps .status-disabled').css('display', bln ? 'none' : 'block');

        if (bln) {
            return showGmap();
        }

        hideGmap();
    }

    /**
     * Show google map if present
     */
    function showGmap() {
        if (!$('.map-container').length) {
            return;
        }

        $('.map-container').addClass('active-gmap');
        $('#privacy-settings').addClass('active-gmap');
        $('.dlh_googlemap').removeClass('map-hidden');
        $(".map-question-block").hide();
        $(".map-container + .open-privacy-btn").show();
    }

    /**
     * Hide google map if present
     */
    function hideGmap() {
        if (!$('.map-container').length) {
            return;
        }

        $('.map-container').removeClass('active-gmap');
        $('.dlh_googlemap').addClass('map-hidden');
        $('#privacy-settings').removeClass('active-gmap');
        $(".map-question-block").show();
        $(".map-container + .open-privacy-btn").hide();
    }

    /**
     * @param bln boolean
     */
    function setYouTube(bln) {
        localStorage.setItem('contaoPrivacy.enabledYouTube', bln ? '1' : '');

        // Switch checkbox correspondingly
        var $inputYouTube = $('input[name="privacy-youtube"]');
        $inputYouTube.prop("checked", bln);

        // Show right status message
        $('.youtube .status-enabled').css('display', bln ? 'block' : 'none');
        $('.youtube .status-disabled').css('display', bln ? 'none' : 'block');

        // if (bln) {
        //     return showYouTube();
        // }

        // hideYouTube();
    }

    /**
     * Show privacy popup
     */
    function showPopup() {
        $('#privacy-settings ').show();
        $('#footer').removeClass('addSpace');
    }

    /**
     * Close privacy popup
     */
    function closePopup() {
        $('#privacy-settings').hide();
    }

    return {
        toShowBar: toShowBar,
        showBar: showBar,
        setBarUsed: setBarUsed,
        enableAll: enableAll,
        closeBar: closeBar,
        showPopup: showPopup,
        closePopup: closePopup,
        setAnalytics: setAnalytics,
        setGmap: setGmap,
        setYouTube: setYouTube,
    };
})();

// Run privacy logic but wait first for jQuery to be loaded
setTimeout(runContaoPrivacy, 250);

function runContaoPrivacy() {
    if (!window.jQuery) {
        // jQuery still not loaded
        return setTimeout(runContaoPrivacy, 250);
    }

    var $buttonEnableAll =     $('button#enable-all');
    var $buttonOpenPopup =     $('button.open-privacy-settings');
    var $buttonClosePopup =    $('.close-privacy');
    var $inputAnalytics =      $('input[name="privacy-g-analytics"]');
    var $inputGmaps =          $('input[name="privacy-g-maps"]');
    var $inputYouTube =        $('input[name="privacy-youtube"]');
    var $buttonActivateGmap =  $('button#load-google-map');

    // Show privacy bar if not already shown previously
    if (contaoPrivacy.toShowBar()) {
        contaoPrivacy.showBar();
    }

    // Make additional space for privacy bar so it does not overlap with content at the end of the page
    if ($('.privacy-bar').css('display') === 'block') {
        $(window).scroll(function () {
            if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
                $(window).unbind('scroll');
                $('#footer').addClass('addSpace');
            }
        });
    }

    // Set analytics initially
    if ($inputAnalytics.length) {
        contaoPrivacy.setAnalytics(!!localStorage.getItem('contaoPrivacy.enabledAnalytics'));
    }

    // Set gmap initially
    if ($inputGmaps.length) {
        contaoPrivacy.setGmap(!!localStorage.getItem('contaoPrivacy.enabledGmap'));
    }

    // Set youtube initially
    if ($inputYouTube.length) {
        contaoPrivacy.setYouTube(!!localStorage.getItem('contaoPrivacy.enabledYouTube'));
    }

    // Enable all
    $buttonEnableAll.on('click', function() {
        contaoPrivacy.enableAll();
        contaoPrivacy.setBarUsed();
        contaoPrivacy.closeBar();
    });

    // Open privacy popup
    $buttonOpenPopup.on('click', function() {
        contaoPrivacy.showPopup();
        contaoPrivacy.setBarUsed();
        contaoPrivacy.closeBar();
    });

    // Close privacy popup
    $buttonClosePopup.on('click', function () {
        contaoPrivacy.closePopup();
    });

    // Close privacy popup on click outside of it
    $(document).on('click', function(e) {
        // Exclude click on buttons that are opening the popup
        if ($(e.target).hasClass('open-privacy-settings')) {
            return;
        }

        if (!$(e.target).closest('.privacy-settings.innerbox').length) {
            contaoPrivacy.closePopup();
        }
    });
    
    // Toggle analytics
    if ($inputAnalytics.length) {
        $inputAnalytics.on('change', function() {
            contaoPrivacy.setAnalytics($(this).prop('checked'));
        });
    }

    // Toggle gmap
    if ($inputGmaps.length) {
        $inputGmaps.on('change', function() {
            contaoPrivacy.setGmap($(this).prop('checked'));
        });
    }

    // Toggle youtube
    if ($inputYouTube.length) {
        console.log('h');
        $inputYouTube.on('change', function() {
            contaoPrivacy.setYouTube($(this).prop('checked'));
        });
    }

    // Activate gmap
    $buttonActivateGmap.on('click', function () {
        contaoPrivacy.setGmap(true);
    });
}

// // activate youtube
// $('.youtube-inactive-status .btn-on, #load-youtube').on('click', function () {
//     window.condYoutube = true;
//     localStorage.setItem("condYoutube", window.condYoutube);
//
//     $('.ce_youtube_fullscreen').addClass('youtube-active');
//
//     checkJQueryForColorbox();
// });
//
// // deactivate youtube
// $('.youtube-active-status .btn-off').on('click', function () {
//     window.condGmap = false;
//     localStorage.setItem("condGmap", window.condGmap);
// });
//
// // Activate Youtube
// function checkJQueryForColorbox() {
//     if (window.jQuery && window.jQuery.colorbox) {
//         // colorbox logic for Youtube Videos based on the ce_youtube_fullscreen template
//         if ($(".youtube-preview").length) {
//             $(".youtube-preview").colorbox(cboxOptions);
//             $('#colorbox').addClass('video-colorbox');
//         }
//
//         // moved from j_colorbox for async JS loading
//         if ($('a[data-lightbox]').length > 0) {
//             $('a[data-lightbox]').map(function () {
//                 $(this).colorbox({
//                     // Put custom options here
//                     loop: false,
//                     rel: $(this).attr('data-lightbox'),
//                     maxWidth: '95%',
//                     maxHeight: '95%',
//                     onComplete: function () {
//                         $("#colorbox").prepend("<b>Appended text</b>")
//                     },
//                 });
//             });
//         }
//     } else {
//         setTimeout(checkJQueryForColorbox, 250);
//     }
// }
