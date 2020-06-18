
var functionContaoPrivacy = function($j) {

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
        $j('.privacy-bar').fadeIn();
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
        $j('.privacy-bar').fadeOut();
        $j('#footer').removeClass('addSpace');
    }

    /**
     * Set all enabled
     */
    function enableAll() {
        setAnalytics(true);
        setLeadLab(true);
        setGmap(true);
        setMapbox(true);
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
        var $inputAnalytics = $j('input[name="privacy-g-analytics"]');
        $inputAnalytics.prop("checked", bln);

        // Show right status message
        $j('.g-analytics .status-enabled').css('display', bln ? 'inline-block' : 'none');
        $j('.g-analytics .status-disabled').css('display', bln ? 'none' : 'inline-block');
    }

    /**
     * @param bln boolean
     */
    function setLeadLab(bln) {
        localStorage.setItem('contaoPrivacy.enabledLeadlab', bln ? '1' : '');

        // Switch checkbox correspondingly
        var $inputLeadLab = $j('input[name="privacy-leadlab"]');
        $inputLeadLab.prop("checked", bln);

        // Show right status message
        $j('.leadlab .status-enabled').css('display', bln ? 'inline-block' : 'none');
        $j('.leadlab .status-disabled').css('display', bln ? 'none' : 'inline-block');
    }

    /**
     * @param bln boolean
     */
    function setGmap(bln) {
        localStorage.setItem('contaoPrivacy.enabledGmap', bln ? '1' : '');

        // Switch checkbox correspondingly
        var $inputGmaps = $j('input[name="privacy-g-maps"]');
        $inputGmaps.prop("checked", bln);

        // Show right status message
        $j('.g-maps .status-enabled').css('display', bln ? 'inline-block' : 'none');
        $j('.g-maps .status-disabled').css('display', bln ? 'none' : 'inline-block');

        if (bln) {
            return showGmap();
        }

        hideGmap();
    }

    /**
     * Show google map if present
     */
    function showGmap() {
        if (!$j('.map-container').length) {
            return;
        }

        $j('.map-container').addClass('active-gmap');
        $j('#privacy-settings').addClass('active-gmap');
        $j('.dlh_googlemap').removeClass('map-hidden');
        $j(".map-container .map-question-block").hide();
        $j(".map-container + .open-privacy-btn").show();
    }

    /**
     * Hide google map if present
     */
    function hideGmap() {
        if (!$j('.map-container').length) {
            return;
        }

        $j('.map-container').removeClass('active-gmap');
        $j('.dlh_googlemap').addClass('map-hidden');
        $j('#privacy-settings').removeClass('active-gmap');
        $j(".map-container .map-question-block").show();
        $j(".map-container + .open-privacy-btn").hide();
    }

    /**
     * @param bln boolean
     */
    function setMapbox(bln) {
        localStorage.setItem('contaoPrivacy.enabledMapbox', bln ? '1' : '');

        // Switch checkbox correspondingly
        var $inputMapbox = $j('input[name="privacy-mapbox"]');
        $inputMapbox.prop("checked", bln);

        // Show right status message
        $j('.mapbox .status-enabled').css('display', bln ? 'inline-block' : 'none');
        $j('.mapbox .status-disabled').css('display', bln ? 'none' : 'inline-block');

        if (bln) {
            return showMapbox();
        }

        hideMapbox();
    }

    /**
     * Show google map if present
     */
    function showMapbox() {
        if (!$j('.mapbox-container').length) {
            return;
        }

        $j('.mapbox-container').addClass('active-mapbox');
        $j('#privacy-settings').addClass('active-mapbox');
        $j(".mapbox-container .mapbox-question-block").hide();
        $j(".mapbox-container + .open-privacy-btn").show();
    }

    /**
     * Hide google map if present
     */
    function hideMapbox() {
        if (!$j('.mapbox-container').length) {
            return;
        }

        $j('.mapbox-container').removeClass('active-mapbox');
        $j('#privacy-settings').removeClass('active-mapbox');
        $j(".mapbox-container .mapbox-question-block").show();
        $j(".mapbox-container + .open-privacy-btn").hide();
    }

    /**
     * @param bln boolean
     */
    function setYouTube(bln) {
        localStorage.setItem('contaoPrivacy.enabledYouTube', bln ? '1' : '');

        // Switch checkbox correspondingly
        var $inputYouTube = $j('input[name="privacy-youtube"]');
        $inputYouTube.prop("checked", bln);

        // Show right status message
        $j('.youtube .status-enabled').css('display', bln ? 'inline-block' : 'none');
        $j('.youtube .status-disabled').css('display', bln ? 'none' : 'inline-block');

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
        var $inputVimeo = $j('input[name="privacy-vimeo"]');
        $inputVimeo.prop("checked", bln);

        // Show right status message
        $j('.vimeo .status-enabled').css('display', bln ? 'inline-block' : 'none');
        $j('.vimeo .status-disabled').css('display', bln ? 'none' : 'inline-block');

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
        var $inputOpenStreetMap = $j('input[name="privacy-open-street-map"]');
        $inputOpenStreetMap.prop("checked", bln);

        // Show right status message
        $j('.open-street-map .status-enabled').css('display', bln ? 'inline-block' : 'none');
        $j('.open-street-map .status-disabled').css('display', bln ? 'none' : 'inline-block');

        if (bln) {
            return showOpenStreetMap();
        }

        hideOpenStreetMap();
    }

    function showVimeo() {
        $j('.vimeo-video-block').css('display', 'block');
        $j('.privacy-vimeo-question-block').css('display', 'none');
        $j('.privacy-vimeo-question-block + .open-privacy-btn').css('display', 'block');
    }

    function hideVimeo() {
        $j('.vimeo-video-block').css('display', 'none');
        $j('.privacy-vimeo-question-block').css('display', 'block');
        $j('.privacy-vimeo-question-block + .open-privacy-btn').css('display', 'none');
    }

    function showYouTube() {
        $j('.youtube-video-block').css('display', 'block');
        $j('.privacy-youtube-question-block').css('display', 'none');
        $j('.privacy-youtube-question-block + .open-privacy-btn').css('display', 'block');
    }

    function hideYouTube() {
        $j('.youtube-video-block').css('display', 'none');
        $j('.privacy-youtube-question-block').css('display', 'block');
        $j('.privacy-youtube-question-block + .open-privacy-btn').css('display', 'none');
    }

    function showOpenStreetMap() {
        $j('.open-street-map-block').css('display', 'block');
        $j('.ce_openstreetmap .map-question-block').css('display', 'none');
        $j('.ce_openstreetmap .map-question-block + .open-privacy-btn').css('display', 'block');
    }

    function hideOpenStreetMap() {
        $j('.open-street-map-block').css('display', 'none');
        $j('.ce_openstreetmap .map-question-block').css('display', 'block');
        $j('.ce_openstreetmap .map-question-block + .open-privacy-btn').css('display', 'none');
    }

    /**
     * Show privacy popup
     */
    function showPopup() {
        $j('#privacy-settings ').show();
        $j('#footer').removeClass('addSpace');
    }

    /**
     * Close privacy popup
     */
    function closePopup() {
        $j('#privacy-settings').hide();
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
        setMapbox: setMapbox,
        setYouTube: setYouTube,
        setVimeo: setVimeo,
        setOpenStreetMap: setOpenStreetMap
    };
};

// Run privacy logic but wait first for jQuery to be loaded
setTimeout(runContaoPrivacy, 250);

function runContaoPrivacy() {
    if (!window.jQuery) {
        return setTimeout(runContaoPrivacy, 250);
    }

    // not to conflict with other loaded lib/fws (f.e. MooTools)
    var $j = jQuery.noConflict();

    if (!window.jQuery || !$j('.privacy-bar').length || !$j('#privacy-settings').length) {
        // jQuery still not loaded
        return setTimeout(runContaoPrivacy, 250);
    }

    var contaoPrivacy = functionContaoPrivacy($j);

    var $buttonEnableAll =         $j('button#enable-all');
    var $buttonOpenPopup =         $j('button.open-privacy-settings');
    var $buttonClosePopup =        $j('.close-privacy');
    var $inputAnalytics =          $j('input[name="privacy-g-analytics"]');
    var $inputLeadLab =            $j('input[name="privacy-leadlab"]');
    var $inputGmaps =              $j('input[name="privacy-g-maps"]');
    var $inputMapbox =             $j('input[name="privacy-mapbox"]');
    var $inputYouTube =            $j('input[name="privacy-youtube"]');
    var $inputVimeo =              $j('input[name="privacy-vimeo"]');
    var $inputOpenStreetMap =      $j('input[name="privacy-open-street-map"]');
    var $buttonShowGmap =          $j('button#load-google-map');
    var $buttonShowMapbox =        $j('button#load-mapbox');
    var $buttonShowVimeo =         $j('button#load-vimeo');
    var $buttonShowYouTube =       $j('button#load-youtube');
    var $buttonShowOpenStreetMap = $j('button#load-open-street-map');

    // Show privacy bar if not already shown previously
    if (contaoPrivacy.toShowBar()) {
        contaoPrivacy.showBar();
    }

    // Privacy bar position relative when the page is scrolled to the bottom
    var scrolling = false;

    $j(window).on('scroll', function() {
        scrolling = true;
    });

    setInterval(function() {
        if (scrolling) {
            scrolling = false;
            if($j(window).scrollTop() + $j(window).height() > $j(document).height() - 100) {
                $j(".privacy-bar").addClass('not-fixed');

            } else {
                $j(".privacy-bar").removeClass('not-fixed');
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

    // Set mapbox initially
    if ($inputMapbox.length) {
        contaoPrivacy.setMapbox(!!localStorage.getItem('contaoPrivacy.enabledMapbox'));
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
        var innerbox = $j("#privacy-settings > .innerbox")
        var innerboxHeight = innerbox.height()
        var windowHeight = $j(window).height();

        if (innerboxHeight > windowHeight ) {
            innerbox.css({top: 0, left: 0, transform: 'translate(0)'});
        }

    });

    // Close privacy popup
    $buttonClosePopup.on('click', function () {
        contaoPrivacy.closePopup();
    });

    // Close privacy popup on click outside of it
    $j(document).on('click', function(e) {
        // Exclude click on buttons that are opening the popup
        if ($j(e.target).hasClass('open-privacy-settings')) {
            return;
        }

        if ($j(e.target).closest('.close-privacy').length) {
            return contaoPrivacy.closePopup();
        }

        if (!$j(e.target).closest('#privacy-settings .innerbox').length) {
            contaoPrivacy.closePopup();
        }
    });

    // Toggle analytics
    if ($inputAnalytics.length) {
        $inputAnalytics.on('change', function() {
            contaoPrivacy.setAnalytics($j(this).prop('checked'));
        });
    }

    // Toggle analytics
    if ($inputLeadLab.length) {
        $inputLeadLab.on('change', function() {
            contaoPrivacy.setLeadLab($j(this).prop('checked'));
        });
    }

    // Toggle gmap
    if ($inputGmaps.length) {
        $inputGmaps.on('change', function() {
            contaoPrivacy.setGmap($j(this).prop('checked'));
        });
    }

    // Toggle mapbox
    if ($inputMapbox.length) {
        $inputMapbox.on('change', function() {
            contaoPrivacy.setMapbox($j(this).prop('checked'));
        });
    }

    // Toggle youtube
    if ($inputYouTube.length) {
        $inputYouTube.on('change', function() {
            contaoPrivacy.setYouTube($j(this).prop('checked'));
        });
    }

    // Toggle vimeo
    if ($inputVimeo.length) {
        $inputVimeo.on('change', function() {
            contaoPrivacy.setVimeo($j(this).prop('checked'));
        });
    }

    // Toggle open street map
    if ($inputOpenStreetMap.length) {
        $inputOpenStreetMap.on('change', function() {
            contaoPrivacy.setOpenStreetMap($j(this).prop('checked'));
        });
    }

    // Show gmap
    $buttonShowGmap.on('click', function () {
        contaoPrivacy.setGmap(true);
    });

    // Show mapbox
    $buttonShowMapbox.on('click', function () {
        contaoPrivacy.setMapbox(true);
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
