
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
        jQuery('.privacy-bar').fadeIn();
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
        jQuery('.privacy-bar').fadeOut();
        jQuery('#footer').removeClass('addSpace');
    }

    /**
     * Set all enabled
     */
    function enableAll() {
        setAnalytics(true);
        setTagmanager(true);
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
        var $inputAnalytics = jQuery('input[name="privacy-g-analytics"]');
        $inputAnalytics.prop("checked", bln);

        // Show right status message
        jQuery('.g-analytics .status-enabled').css('display', bln ? 'inline-block' : 'none');
        jQuery('.g-analytics .status-disabled').css('display', bln ? 'none' : 'inline-block');
    }
	
	/**
     * @param bln boolean
     */
    function setTagmanager(bln) {
        localStorage.setItem('contaoPrivacy.enabledTagManager', bln ? '1' : '');

        // Switch checkbox correspondingly
        var $inputTagmanager = jQuery('input[name="privacy-g-tagmanager"]');
        $inputTagmanager.prop("checked", bln);

        // Show right status message
        jQuery('.g-tagmanager .status-enabled').css('display', bln ? 'inline-block' : 'none');
        jQuery('.g-tagmanager .status-disabled').css('display', bln ? 'none' : 'inline-block');
    }

    /**
     * @param bln boolean
     */
    function setLeadLab(bln) {
        localStorage.setItem('contaoPrivacy.enabledLeadlab', bln ? '1' : '');

        // Switch checkbox correspondingly
        var $inputLeadLab = jQuery('input[name="privacy-leadlab"]');
        $inputLeadLab.prop("checked", bln);

        // Show right status message
        jQuery('.leadlab .status-enabled').css('display', bln ? 'inline-block' : 'none');
        jQuery('.leadlab .status-disabled').css('display', bln ? 'none' : 'inline-block');
    }

    /**
     * @param bln boolean
     */
    function setGmap(bln) {
        localStorage.setItem('contaoPrivacy.enabledGmap', bln ? '1' : '');

        // Switch checkbox correspondingly
        var $inputGmaps = jQuery('input[name="privacy-g-maps"]');
        $inputGmaps.prop("checked", bln);

        // Show right status message
        jQuery('.g-maps .status-enabled').css('display', bln ? 'inline-block' : 'none');
        jQuery('.g-maps .status-disabled').css('display', bln ? 'none' : 'inline-block');

        if (bln) {
            return showGmap();
        }

        hideGmap();
    }

    /**
     * Show google map if present
     */
    function showGmap() {
        if (!jQuery('.map-container').length) {
            return;
        }

        jQuery('.map-container').addClass('active-gmap');
        jQuery('#privacy-settings').addClass('active-gmap');
        jQuery('.dlh_googlemap').removeClass('map-hidden');
        jQuery(".map-container .map-question-block").hide();
        jQuery(".map-container + .open-privacy-btn").show();
    }

    /**
     * Hide google map if present
     */
    function hideGmap() {
        if (!jQuery('.map-container').length) {
            return;
        }

        jQuery('.map-container').removeClass('active-gmap');
        jQuery('.dlh_googlemap').addClass('map-hidden');
        jQuery('#privacy-settings').removeClass('active-gmap');
        jQuery(".map-container .map-question-block").show();
        jQuery(".map-container + .open-privacy-btn").hide();
    }

    /**
     * @param bln boolean
     */
    function setMapbox(bln) {
        localStorage.setItem('contaoPrivacy.enabledMapbox', bln ? '1' : '');

        // Switch checkbox correspondingly
        var $inputMapbox = jQuery('input[name="privacy-mapbox"]');
        $inputMapbox.prop("checked", bln);

        // Show right status message
        jQuery('.mapbox .status-enabled').css('display', bln ? 'inline-block' : 'none');
        jQuery('.mapbox .status-disabled').css('display', bln ? 'none' : 'inline-block');

        if (bln) {
            return showMapbox();
        }

        hideMapbox();
    }

    /**
     * Show google map if present
     */
    function showMapbox() {
        if (!jQuery('.mapbox-container').length) {
            return;
        }

        jQuery('.mapbox-container').addClass('active-mapbox');
        jQuery('#privacy-settings').addClass('active-mapbox');
        jQuery(".mapbox-container .mapbox-question-block").hide();
        jQuery(".mapbox-container + .open-privacy-btn").show();
    }

    /**
     * Hide google map if present
     */
    function hideMapbox() {
        if (!jQuery('.mapbox-container').length) {
            return;
        }

        jQuery('.mapbox-container').removeClass('active-mapbox');
        jQuery('#privacy-settings').removeClass('active-mapbox');
        jQuery(".mapbox-container .mapbox-question-block").show();
        jQuery(".mapbox-container + .open-privacy-btn").hide();
    }

    /**
     * @param bln boolean
     */
    function setYouTube(bln) {
        localStorage.setItem('contaoPrivacy.enabledYouTube', bln ? '1' : '');

        // Switch checkbox correspondingly
        var $inputYouTube = jQuery('input[name="privacy-youtube"]');
        $inputYouTube.prop("checked", bln);

        // Show right status message
        jQuery('.youtube .status-enabled').css('display', bln ? 'inline-block' : 'none');
        jQuery('.youtube .status-disabled').css('display', bln ? 'none' : 'inline-block');

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
        var $inputVimeo = jQuery('input[name="privacy-vimeo"]');
        $inputVimeo.prop("checked", bln);

        // Show right status message
        jQuery('.vimeo .status-enabled').css('display', bln ? 'inline-block' : 'none');
        jQuery('.vimeo .status-disabled').css('display', bln ? 'none' : 'inline-block');

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
        var $inputOpenStreetMap = jQuery('input[name="privacy-open-street-map"]');
        $inputOpenStreetMap.prop("checked", bln);

        // Show right status message
        jQuery('.open-street-map .status-enabled').css('display', bln ? 'inline-block' : 'none');
        jQuery('.open-street-map .status-disabled').css('display', bln ? 'none' : 'inline-block');

        if (bln) {
            return showOpenStreetMap();
        }

        hideOpenStreetMap();
    }

    function showVimeo() {
        jQuery('.vimeo-video-block').css('display', 'block');
        jQuery('.privacy-vimeo-question-block').css('display', 'none');
        jQuery('.privacy-vimeo-question-block + .open-privacy-btn').css('display', 'block');
    }

    function hideVimeo() {
        jQuery('.vimeo-video-block').css('display', 'none');
        jQuery('.privacy-vimeo-question-block').css('display', 'block');
        jQuery('.privacy-vimeo-question-block + .open-privacy-btn').css('display', 'none');
    }

    function showYouTube() {
        jQuery('.youtube-video-block').css('display', 'block');
        jQuery('.privacy-youtube-question-block').css('display', 'none');
        jQuery('.privacy-youtube-question-block + .open-privacy-btn').css('display', 'block');
    }

    function hideYouTube() {
        jQuery('.youtube-video-block').css('display', 'none');
        jQuery('.privacy-youtube-question-block').css('display', 'block');
        jQuery('.privacy-youtube-question-block + .open-privacy-btn').css('display', 'none');
    }

    function showOpenStreetMap() {
        jQuery('.open-street-map-block').css('display', 'block');
        jQuery('.ce_openstreetmap .map-question-block').css('display', 'none');
        jQuery('.ce_openstreetmap .map-question-block + .open-privacy-btn').css('display', 'block');
    }

    function hideOpenStreetMap() {
        jQuery('.open-street-map-block').css('display', 'none');
        jQuery('.ce_openstreetmap .map-question-block').css('display', 'block');
        jQuery('.ce_openstreetmap .map-question-block + .open-privacy-btn').css('display', 'none');
    }

    /**
     * Show privacy popup
     */
    function showPopup() {
        jQuery('#privacy-settings ').show();
        jQuery('#footer').removeClass('addSpace');
    }

    /**
     * Close privacy popup
     */
    function closePopup() {
        jQuery('#privacy-settings').hide();
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
        setTagmanager: setTagmanager,
        setLeadLab: setLeadLab,
        setGmap: setGmap,
        setMapbox: setMapbox,
        setYouTube: setYouTube,
        setVimeo: setVimeo,
        setOpenStreetMap: setOpenStreetMap
    };
})();

// Run privacy logic but wait first for jQuery to be loaded
setTimeout(runContaoPrivacy, 250);

function runContaoPrivacy() {
    if (!window.jQuery || !jQuery('.privacy-bar').length || !jQuery('#privacy-settings').length) {
        // jQuery still not loaded
        return setTimeout(runContaoPrivacy, 250);
    }

    var $buttonEnableAll =         jQuery('button#enable-all');
    var $buttonOpenPopup =         jQuery('button.open-privacy-settings');
    var $buttonClosePopup =        jQuery('.close-privacy');
    var $inputAnalytics =          jQuery('input[name="privacy-g-analytics"]');
    var $inputTagmanager =         jQuery('input[name="privacy-g-tagmanager"]');
    var $inputLeadLab =            jQuery('input[name="privacy-leadlab"]');
    var $inputGmaps =              jQuery('input[name="privacy-g-maps"]');
    var $inputMapbox =             jQuery('input[name="privacy-mapbox"]');
    var $inputYouTube =            jQuery('input[name="privacy-youtube"]');
    var $inputVimeo =              jQuery('input[name="privacy-vimeo"]');
    var $inputOpenStreetMap =      jQuery('input[name="privacy-open-street-map"]');
    var $buttonShowGmap =          jQuery('button#load-google-map');
    var $buttonShowMapbox =        jQuery('button#load-mapbox');
    var $buttonShowVimeo =         jQuery('button#load-vimeo');
    var $buttonShowYouTube =       jQuery('button#load-youtube');
    var $buttonShowOpenStreetMap = jQuery('button#load-open-street-map');

    // Show privacy bar if not already shown previously
    if (contaoPrivacy.toShowBar()) {
        contaoPrivacy.showBar();
    }

    // Privacy bar position relative when the page is scrolled to the bottom
    var scrolling = false;

    jQuery(window).on('scroll', function() {
        scrolling = true;
    });

    setInterval(function() {
        if (scrolling) {
            scrolling = false;
            if (jQuery(window).scrollTop() + jQuery(window).height() > jQuery(document).height() - 100) {
                jQuery(".privacy-bar").addClass('not-fixed');

            } else {
                jQuery(".privacy-bar").removeClass('not-fixed');
            }
        }
    }, 250);

    // Set analytics initially
    if ($inputAnalytics.length) {
        contaoPrivacy.setAnalytics(!!localStorage.getItem('contaoPrivacy.enabledAnalytics'));
    }
	
	// Set analytics initially
    if ($inputTagmanager.length) {
        contaoPrivacy.setAnalytics(!!localStorage.getItem('contaoPrivacy.enabledTagManager'));
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
        var innerbox = jQuery("#privacy-settings > .innerbox")
        var innerboxHeight = innerbox.height()
        var windowHeight = jQuery(window).height();

        if (innerboxHeight > windowHeight ) {
            innerbox.css({top: 0, left: 0, transform: 'translate(0)'});
        }

    });

    // Close privacy popup
    $buttonClosePopup.on('click', function () {
        contaoPrivacy.closePopup();
    });

    // Close privacy popup on click outside of it
    jQuery(document).on('click', function(e) {
        // Exclude click on buttons that are opening the popup
        if (jQuery(e.target).hasClass('open-privacy-settings')) {
            return;
        }

        if (jQuery(e.target).closest('.close-privacy').length) {
            return contaoPrivacy.closePopup();
        }

        if (!jQuery(e.target).closest('#privacy-settings .innerbox').length) {
            contaoPrivacy.closePopup();
        }
    });

    // Toggle analytics
    if ($inputAnalytics.length) {
        $inputAnalytics.on('change', function() {
            contaoPrivacy.setAnalytics(jQuery(this).prop('checked'));
        });
    }
	
	// Toggle TagManager
    if ($inputTagmanager.length) {
        $inputTagmanager.on('change', function() {
            contaoPrivacy.setTagmanager(jQuery(this).prop('checked'));
        });
    }

    // Toggle LeadLab
    if ($inputLeadLab.length) {
        $inputLeadLab.on('change', function() {
            contaoPrivacy.setLeadLab(jQuery(this).prop('checked'));
        });
    }

    // Toggle gmap
    if ($inputGmaps.length) {
        $inputGmaps.on('change', function() {
            contaoPrivacy.setGmap(jQuery(this).prop('checked'));
        });
    }

    // Toggle mapbox
    if ($inputMapbox.length) {
        $inputMapbox.on('change', function() {
            contaoPrivacy.setMapbox(jQuery(this).prop('checked'));
        });
    }

    // Toggle youtube
    if ($inputYouTube.length) {
        $inputYouTube.on('change', function() {
            contaoPrivacy.setYouTube(jQuery(this).prop('checked'));
        });
    }

    // Toggle vimeo
    if ($inputVimeo.length) {
        $inputVimeo.on('change', function() {
            contaoPrivacy.setVimeo(jQuery(this).prop('checked'));
        });
    }

    // Toggle open street map
    if ($inputOpenStreetMap.length) {
        $inputOpenStreetMap.on('change', function() {
            contaoPrivacy.setOpenStreetMap(jQuery(this).prop('checked'));
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