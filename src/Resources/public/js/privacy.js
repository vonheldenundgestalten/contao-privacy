
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
        setLeadLab(true);
        setGmap(true);
        setYouTube(true);
        setVimeo(true);
        setOpenStreetMap(true);
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
        $('.g-analytics .status-enabled').css('display', bln ? 'inline-block' : 'none');
        $('.g-analytics .status-disabled').css('display', bln ? 'none' : 'inline-block');
    }

    /**
     * @param bln boolean
     */
    function setLeadLab(bln) {
        localStorage.setItem('contaoPrivacy.enabledLeadlab', bln ? '1' : '');

        // Switch checkbox correspondingly
        var $inputLeadLab = $('input[name="privacy-leadlab"]');
        $inputLeadLab.prop("checked", bln);

        // Show right status message
        $('.leadlab .status-enabled').css('display', bln ? 'inline-block' : 'none');
        $('.leadlab .status-disabled').css('display', bln ? 'none' : 'inline-block');
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
        $('.g-maps .status-enabled').css('display', bln ? 'inline-block' : 'none');
        $('.g-maps .status-disabled').css('display', bln ? 'none' : 'inline-block');

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
        $('.youtube .status-enabled').css('display', bln ? 'inline-block' : 'none');
        $('.youtube .status-disabled').css('display', bln ? 'none' : 'inline-block');

        if (bln) {
            return showYouTube();
        }

        hideYouTube();
    }

    /**
     * @param bln boolean
     */
    function setVimeo(bln) {
        localStorage.setItem('contaoPrivacy.enabledVimeo', bln ? '1' : '');

        // Switch checkbox correspondingly
        var $inputVimeo = $('input[name="privacy-vimeo"]');
        $inputVimeo.prop("checked", bln);

        // Show right status message
        $('.vimeo .status-enabled').css('display', bln ? 'inline-block' : 'none');
        $('.vimeo .status-disabled').css('display', bln ? 'none' : 'inline-block');

        if (bln) {
            return showVimeo();
        }

        hideVimeo();
    }

    /**
     * @param bln boolean
     */
    function setOpenStreetMap(bln) {
        localStorage.setItem('contaoPrivacy.enabledOpenStreetMap', bln ? '1' : '');

        // Switch checkbox correspondingly
        var $inputOpenStreetMap = $('input[name="privacy-open-street-map"]');
        $inputOpenStreetMap.prop("checked", bln);

        // Show right status message
        $('.open-street-map .status-enabled').css('display', bln ? 'inline-block' : 'none');
        $('.open-street-map .status-disabled').css('display', bln ? 'none' : 'inline-block');

        if (bln) {
            return showOpenStreetMap();
        }

        hideOpenStreetMap();
    }

    function showVimeo() {
        $('.vimeo-video-block').css('display', 'block');
        $('.privacy-vimeo-question-block').css('display', 'none');
        $('.privacy-vimeo-question-block + .open-privacy-btn').css('display', 'block');
    }

    function hideVimeo() {
        $('.vimeo-video-block').css('display', 'none');
        $('.privacy-vimeo-question-block').css('display', 'block');
        $('.privacy-vimeo-question-block + .open-privacy-btn').css('display', 'none');
    }

    function showYouTube() {
        $('.youtube-video-block').css('display', 'block');
        $('.privacy-youtube-question-block').css('display', 'none');
        $('.privacy-youtube-question-block + .open-privacy-btn').css('display', 'block');
    }

    function hideYouTube() {
        $('.youtube-video-block').css('display', 'none');
        $('.privacy-youtube-question-block').css('display', 'block');
        $('.privacy-youtube-question-block + .open-privacy-btn').css('display', 'none');
    }

    function showOpenStreetMap() {
        $('.open-street-map-block').css('display', 'block');
        $('.privacy-open-street-map-question-block').css('display', 'none');
        $('.privacy-open-street-map-question-block + .open-privacy-btn').css('display', 'block');
    }

    function hideOpenStreetMap() {
        $('.open-street-map-block').css('display', 'none');
        $('.privacy-open-street-map-question-block').css('display', 'block');
        $('.privacy-open-street-map-question-block + .open-privacy-btn').css('display', 'none');
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
        setLeadLab: setLeadLab,
        setGmap: setGmap,
        setYouTube: setYouTube,
        setVimeo: setVimeo,
        setOpenStreetMap: setOpenStreetMap
    };
})();

// Run privacy logic but wait first for jQuery to be loaded
setTimeout(runContaoPrivacy, 250);

function runContaoPrivacy() {
    if (!window.jQuery || !$('.privacy-bar').length || !$('#privacy-settings').length) {
        // jQuery still not loaded
        return setTimeout(runContaoPrivacy, 250);
    }

    var $buttonEnableAll =         $('button#enable-all');
    var $buttonOpenPopup =         $('button.open-privacy-settings');
    var $buttonClosePopup =        $('.close-privacy');
    var $inputAnalytics =          $('input[name="privacy-g-analytics"]');
    var $inputLeadLab =            $('input[name="privacy-leadlab"]');
    var $inputGmaps =              $('input[name="privacy-g-maps"]');
    var $inputYouTube =            $('input[name="privacy-youtube"]');
    var $inputVimeo =              $('input[name="privacy-vimeo"]');
    var $inputOpenStreetMap =      $('input[name="privacy-open-street-map"]');
    var $buttonShowGmap =          $('button#load-google-map');
    var $buttonShowVimeo =         $('button#load-vimeo');
    var $buttonShowYouTube =       $('button#load-youtube');
    var $buttonShowOpenStreetMap = $('button#load-open-street-map');

    // Show privacy bar if not already shown previously
    if (contaoPrivacy.toShowBar()) {
        contaoPrivacy.showBar();
    }

    // Privacy bar position relative when the page is scrolled to the bottom
    var scrolling = false;

    $(window).on('scroll', function() {
        scrolling = true;
    });

    setInterval(function() {
        if (scrolling) {
            scrolling = false;
            if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
                $(".privacy-bar").addClass('not-fixed');

            } else {
                $(".privacy-bar").removeClass('not-fixed');
            }
        }
    }, 250);

    // Set analytics initially
    if ($inputAnalytics.length) {
        contaoPrivacy.setAnalytics(!!localStorage.getItem('contaoPrivacy.enabledAnalytics'));
    }

    // Set leadlab initially
    if ($inputLeadLab.length) {
        contaoPrivacy.setLeadLab(!!localStorage.getItem('contaoPrivacy.enabledLeadlab'));
    }

    // Set gmap initially
    if ($inputGmaps.length) {
        contaoPrivacy.setGmap(!!localStorage.getItem('contaoPrivacy.enabledGmap'));
    }

    // Set youtube initially
    if ($inputYouTube.length) {
        contaoPrivacy.setYouTube(!!localStorage.getItem('contaoPrivacy.enabledYouTube'));
    }

    // Set vimeo initially
    if ($inputVimeo.length) {
        contaoPrivacy.setVimeo(!!localStorage.getItem('contaoPrivacy.enabledVimeo'));
    }

    // Set open street map initially
    if ($inputOpenStreetMap.length) {
        contaoPrivacy.setOpenStreetMap(!!localStorage.getItem('contaoPrivacy.enabledOpenStreetMap'));
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
        var innerbox = $("#privacy-settings > .innerbox")
        var innerboxHeight = innerbox.height()
        var screensize = $(window).height();
        
        if (innerboxHeight > screensize ) {
            innerbox.css({top: 0, left: 0, transform: 'translate(0)'});
        }

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
        
        if ($(e.target).closest('.close-privacy').length) {
            return contaoPrivacy.closePopup();
        }

        if (!$(e.target).closest('#privacy-settings .innerbox').length) {
            contaoPrivacy.closePopup();
        }
    });
    
    // Toggle analytics
    if ($inputAnalytics.length) {
        $inputAnalytics.on('change', function() {
            contaoPrivacy.setAnalytics($(this).prop('checked'));
        });
    }

    // Toggle analytics
    if ($inputLeadLab.length) {
        $inputLeadLab.on('change', function() {
            contaoPrivacy.setLeadLab($(this).prop('checked'));
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
        $inputYouTube.on('change', function() {
            contaoPrivacy.setYouTube($(this).prop('checked'));
        });
    }

    // Toggle vimeo
    if ($inputVimeo.length) {
        $inputVimeo.on('change', function() {
            contaoPrivacy.setVimeo($(this).prop('checked'));
        });
    }

    // Toggle open street map
    if ($inputOpenStreetMap.length) {
        $inputOpenStreetMap.on('change', function() {
            contaoPrivacy.setOpenStreetMap($(this).prop('checked'));
        });
    }

    // Show gmap
    $buttonShowGmap.on('click', function () {
        contaoPrivacy.setGmap(true);
    });

    // Show vimeo
    $buttonShowVimeo.on('click', function () {
        contaoPrivacy.setVimeo(true);
    });

    // Show youtube
    $buttonShowYouTube.on('click', function () {
        contaoPrivacy.setYouTube(true);
    });

    // Show youtube
    $buttonShowOpenStreetMap.on('click', function () {
        contaoPrivacy.setOpenStreetMap(true);
    });
}
