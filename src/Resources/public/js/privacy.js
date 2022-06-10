
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
        // $('.privacy-bar').fadeIn(); Add fade in effect in css
        document.querySelector('.privacy-bar').style.display = "block";
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
        // $('.privacy-bar').fadeOut();
        // $('#footer').removeClass('addSpace');

        document.querySelector('.privacy-bar').style.display = "none";
        document.querySelector('#footer').classList.remove('addSpace');
    }

    /**
     * Set all enabled
     */
    function enableAll() {
        setAnalytics(true, true);
        setAnalyticsMatomo(true, true);
        setTagmanager(true, true);
        setLeadLab(true, true);
        setGmap(true, true);
        setMapbox(true, true);
        setYouTube(true, true);
        setVimeo(true, true);
        setOpenStreetMap(true, true);

        addToHistory('all', true);
    }

    /**
     * @param bln {boolean}
     * @param skipHistory {boolean}
     */
    function setAnalytics(bln, skipHistory) {
        localStorage.setItem('contaoPrivacy.enabledAnalytics', bln ? '1' : '');

        if (!skipHistory) {
            addToHistory('analytics', bln);
        }

        // Switch checkbox correspondingly
        var inputAnalytics = document.querySelector('input[name="privacy-g-analytics"]');
        inputAnalytics.checked = bln;

        // Show right status message
        document.querySelector('.g-analytics .status-enabled').style.display = bln ? 'inline-block' : 'none';
        document.querySelector('.g-analytics .status-disabled').style.display = bln ? 'none' : 'inline-block';
    }

    /**
     * @param bln {boolean}
     * @param skipHistory {boolean}
     */
    function setAnalyticsMatomo(bln, skipHistory) {
        localStorage.setItem('contaoPrivacy.enabledAnalyticsMatomo', bln ? '1' : '');

        if (!skipHistory) {
            addToHistory('analyticsMatomo', bln);
        }

        // Switch checkbox correspondingly
        var inputAnalyticsMatomo = document.querySelector('input[name="privacy-matomo-analytics"]');
        inputAnalyticsMatomo.checked = bln;

        // Show right status message
        document.querySelector('.matomo-analytics .status-enabled').style.display = bln ? 'inline-block' : 'none';
        document.querySelector('.matomo-analytics .status-disabled').style.display = bln ? 'none' : 'inline-block';
    }

    /**
     * @param bln {boolean}
     * @param skipHistory {boolean}
     */
    function setTagmanager(bln, skipHistory) {
        localStorage.setItem('contaoPrivacy.enabledTagManager', bln ? '1' : '');

        if (!skipHistory) {
            addToHistory('tagManager', bln);
        }

        // Switch checkbox correspondingly
        var inputTagmanager = document.querySelectorAll('input[name="privacy-g-tagmanager"]');
        inputTagmanager.checked = bln;

        // Show right status message
        document.querySelector('.g-tagmanager .status-enabled').style.display = bln ? 'inline-block' : 'none';
        document.querySelector('.g-tagmanager .status-disabled').style.display = bln ? 'none' : 'inline-block';
    }

    /**
     * @param bln {boolean}
     * @param skipHistory {boolean}
     */
    function setLeadLab(bln, skipHistory) {
        localStorage.setItem('contaoPrivacy.enabledLeadlab', bln ? '1' : '');

        if (!skipHistory) {
            addToHistory('leadlab', bln);
        }

        // Switch checkbox correspondingly
        var inputLeadLab = document.querySelector('input[name="privacy-leadlab"]');
        inputLeadLab.checked = bln;

        // Show right status message
        document.querySelector('.leadlab .status-enabled').style.display = bln ? 'inline-block' : 'none';
        document.querySelector('.leadlab .status-disabled').style.display = bln ? 'none' : 'inline-block';
    }

    /**
     * @param bln {boolean}
     * @param skipHistory {boolean}
     */
    function setGmap(bln, skipHistory) {
        localStorage.setItem('contaoPrivacy.enabledGmap', bln ? '1' : '');

        if (!skipHistory) {
            addToHistory('gmap', bln);
        }

        // Switch checkbox correspondingly
        inputGmaps = document.querySelector('input[name="privacy-g-maps"]');
        inputGmaps.checked = bln;

        // Show right status message
        document.querySelector('.g-maps .status-enabled').style.display = bln ? 'inline-block' : 'none';
        document.querySelector('.g-maps .status-disabled').style.display = bln ? 'none' : 'inline-block';

        if (bln) {
            return showGmap();
        }

        hideGmap();
    }

    /**
     * Show google map if present
     */
    function showGmap() {
        var gMapContainer = document.querySelector('.map-container');

        if (!gMapContainer) {
            return;
        }

        gMapContainer.classList.add('active-gmap');
        document.querySelector('#privacy-settings').classList.add('active-gmap');
        document.querySelector('.dlh_googlemap').classList.remove('map-hidden');
        document.querySelector(".map-container .map-question-block").style.display = 'none';
        document.querySelector(".map-container .open-privacy-btn").style.display = 'block';
    }

    /**
     * Hide google map if present
     */
    function hideGmap() {
        var gMapContainer = document.querySelector('.map-container');

        if (!gMapContainer) {
            return;
        }

        gMapContainer.classList.remove('active-gmap');
        document.querySelector('#privacy-settings').classList.remove('active-gmap');
        document.querySelector('.dlh_googlemap').classList.add('map-hidden');
        document.querySelector(".map-container .map-question-block").style.display = 'block';
        document.querySelector(".map-container .open-privacy-btn").style.display = 'none';
    }

    /**
     * @param bln {boolean}
     * @param skipHistory {boolean}
     */
    function setMapbox(bln, skipHistory) {
        localStorage.setItem('contaoPrivacy.enabledMapbox', bln ? '1' : '');

        if (!skipHistory) {
            addToHistory('mapbox', bln);
        }

        // Switch checkbox correspondingly
        var inputMapbox = document.querySelector('input[name="privacy-mapbox"]');
        inputMapbox.checked = bln;

        // Show right status message
        document.querySelector('.mapbox .status-enabled').style.display = bln ? 'inline-block' : 'none';
        document.querySelector('.mapbox .status-disabled').style.display = bln ? 'none' : 'inline-block';

        if (bln) {
            return showMapbox();
        }

        hideMapbox();
    }

    /**
     * Show mapbox if present
     */
    function showMapbox() {
        var mapboxContainer = document.querySelector('.mapbox-container');

        if (!mapboxContainer) {
            return;
        }

        mapboxContainer.classList.add('active-mapbox');
        document.querySelector('#privacy-settings').classList.add('active-mapbox');
        document.querySelector('.embeded-map').classList.remove('map-hidden');
        document.querySelector(".mapbox-container .mapbox-question-block").style.display = 'none';
        document.querySelector(".mapbox-container + .open-privacy-btn").style.display = 'block';
    }

    /**
     * Hide mapbox if present
     */
    function hideMapbox() {
        var mapboxContainer = document.querySelector('.mapbox-container');

        if (!mapboxContainer) {
            return;
        }

        mapboxContainer.classList.remove('active-mapbox');
        document.querySelector('#privacy-settings').classList.remove('active-mapbox');
        document.querySelector('.embeded-map').classList.add('map-hidden');
        document.querySelector(".mapbox-container .mapbox-question-block").style.display = 'block';
        document.querySelector(".mapbox-container + .open-privacy-btn").style.display = 'none';
    }


    /**
     * @param bln {boolean}
     * @param skipHistory {boolean}
     */
    function setOpenStreetMap(bln, skipHistory) {
        localStorage.setItem('contaoPrivacy.enabledOpenStreetMap', bln ? '1' : '');

        if (!skipHistory) {
            addToHistory('openStreetMap', bln);
        }

        // Switch checkbox correspondingly
        var inputOpenStreetMap = document.querySelector('input[name="privacy-open-street-map"]');
        inputOpenStreetMap.checked = bln;

        // Show right status message
        document.querySelector('.open-street-map .status-enabled').style.display = bln ? 'inline-block' : 'none';
        document.querySelector('.open-street-map .status-disabled').style.display = bln ? 'none' : 'inline-block';

        if (bln) {
            return showOpenStreetMap();
        }

        hideOpenStreetMap();
    }

    function showOpenStreetMap() {
        var openStreetMapContainer = document.querySelector('.open-street-map-block');

        if (!openStreetMapContainer) {
            return;
        }

        openStreetMapContainer.style.display = 'block';
        document.querySelector('.ce_openstreetmap .map-question-block').style.display = 'none';
        document.querySelector('.openstreetmap-container .open-privacy-btn').style.display = 'block';
    }

    function hideOpenStreetMap() {
        var openStreetMapContainer = document.querySelector('.open-street-map-block');

        if (!openStreetMapContainer) {
            return;
        }

        openStreetMapContainer.style.display = 'none';
        document.querySelector('.ce_openstreetmap .map-question-block').style.display = 'block';
        document.querySelector('.openstreetmap-container .open-privacy-btn').style.display = 'none';
    }


    /**
     * @param bln {boolean}
     * @param skipHistory {boolean}
     */
    function setYouTube(bln, skipHistory) {
        localStorage.setItem('contaoPrivacy.enabledYouTube', bln ? '1' : '');

        if (!skipHistory) {
            addToHistory('youTube', bln);
        }

        // Switch checkbox correspondingly
        var inputYouTube = document.querySelector('input[name="privacy-youtube"]');
        inputYouTube.checked = bln;

        // Show right status message
        document.querySelector('.youtube .status-enabled').style.display = bln ? 'inline-block' : 'none';
        document.querySelector('.youtube .status-disabled').style.display = bln ? 'none' : 'inline-block';

        if (bln) {
            return showYouTube();
        }

        hideYouTube();
    }

    function showYouTube() {
        var youTubeElement = document.querySelectorAll('.youtube-video-block');
        var ytQuestionBlock = document.querySelectorAll('.privacy-youtube-question-block');
        var ytOpenPrivacy = document.querySelectorAll('.privacy-youtube-question-block + .open-privacy-btn');

        for (var i=0; i < youTubeElement.length; i+=1) {
            youTubeElement[i].style.display = 'block';
        }
        for (var i=0; i < ytQuestionBlock.length; i+=1) {
            ytQuestionBlock[i].style.display = 'none';
        }
        for (var i=0; i < ytOpenPrivacy.length; i+=1) {
            ytOpenPrivacy[i].style.display = 'block';
        }
        
        // show preview images (replace data-src with src) //DISCUSS
        var $previewImages = $('.youtube-preview img');
        if ($previewImages.length) {
            $previewImages.each(function () {
                $(this).attr('src', $(this).attr('data-src'));
            });
        }
    }

    function hideYouTube() {
        var youTubeElement = document.querySelectorAll('.youtube-video-block');
        var ytQuestionBlock = document.querySelectorAll('.privacy-youtube-question-block');
        var ytOpenPrivacy = document.querySelectorAll('.privacy-youtube-question-block + .open-privacy-btn');

        for (var i=0; i < youTubeElement.length; i+=1) {
            youTubeElement[i].style.display = 'none';
        }
        for (var i=0; i < ytQuestionBlock.length; i+=1) {
            ytQuestionBlock[i].style.display = 'block';
        }
        for (var i=0; i < ytOpenPrivacy.length; i+=1) {
            ytOpenPrivacy[i].style.display = 'none';
        }
    }


    /**
     * @param bln {boolean}
     * @param skipHistory {boolean}
     */
    function setVimeo(bln, skipHistory) {
        localStorage.setItem('contaoPrivacy.enabledVimeo', bln ? '1' : '');

        if (!skipHistory) {
            addToHistory('vimeo', bln);
        }

        // Switch checkbox correspondingly
        var inputVimeo = document.querySelector('input[name="privacy-vimeo"]');
        inputVimeo.checked = bln;

        // Show right status message
        document.querySelector('.vimeo .status-enabled').style.display = bln ? 'inline-block' : 'none';
        document.querySelector('.vimeo .status-disabled').style.display = bln ? 'none' : 'inline-block';

        if (bln) {
            return showVimeo();
        }

        hideVimeo();
    }

    function showVimeo() {
        var vimeoElement = document.querySelectorAll('.vimeo-video-block');
        var vimeoQuestionBlock = document.querySelectorAll('.privacy-vimeo-question-block');
        var vimeoOpenPrivacy = document.querySelectorAll('.privacy-vimeo-question-block + .open-privacy-btn');

        for (var i=0; i < vimeoElement.length; i+=1) {
            vimeoElement[i].style.display = 'block';
        }
        for (var i=0; i < vimeoQuestionBlock.length; i+=1) {
            vimeoQuestionBlock[i].style.display = 'none';
        }
        for (var i=0; i < vimeoOpenPrivacy.length; i+=1) {
            vimeoOpenPrivacy[i].style.display = 'block';
        }
    }

    function hideVimeo() {
        var vimeoElement = document.querySelectorAll('.vimeo-video-block');
        var vimeoQuestionBlock = document.querySelectorAll('.privacy-vimeo-question-block');
        var vimeoOpenPrivacy = document.querySelectorAll('.privacy-vimeo-question-block + .open-privacy-btn');

        for (var i=0; i < vimeoElement.length; i+=1) {
            vimeoElement[i].style.display = 'none';
        }
        for (var i=0; i < vimeoQuestionBlock.length; i+=1) {
            vimeoQuestionBlock[i].style.display = 'block';
        }
        for (var i=0; i < vimeoOpenPrivacy.length; i+=1) {
            vimeoOpenPrivacy[i].style.display = 'none';
        }
    }


    /**
     * Show privacy popup
     */
    function showPopup() {
        document.querySelector('#privacy-settings ').style.display = 'block';
        document.querySelector('#footer').classList.remove('addSpace');
    }

    /**
     * Close privacy popup
     */
    function closePopup() {
        document.querySelector('#privacy-settings ').style.display = 'none';
    }

    /**
     * @return {object}
     */
    function getHistory() {
        return JSON.parse(localStorage.getItem('contaoPrivacy.history'));
    }

    /**
     *
     * @param type {string}
     * @param value {boolean}
     */
    function addToHistory(type, value) {
        var history = getHistory();

        history.push({
            type: type,
            value: value,
            time: Date.now()
        });

        localStorage.setItem('contaoPrivacy.history', JSON.stringify(history));

        updateHistory();
    }
    
    function historyShow() {
        $('.privacy-settings-main').hide();
        $('.privacy-settings-history').show();
    }

    function historyBackToMain() {
        $('.privacy-settings-main').show();
        $('.privacy-settings-history').hide();
    }

    function updateHistory() {
        var history = getHistory();
        var table = $('#privacy-history-table');

        table.empty();

        history.forEach(function (element) {
            var date = new Date(element.time);

            var dateTimeFormatted = ('0' + date.getDate()).slice(-2) + '.' + ('0' + (date.getMonth() + 1)).slice(-2) + '.' + date.getFullYear()
                + ', ' + ('0' + date.getHours()).slice(-2) + ':' + ('0' + date.getMinutes()).slice(-2) + ':' + ('0' + date.getSeconds()).slice(-2);
            
            var label = $('#privacy-history-labels #' + element.type + (element.value ? 1 : 0)).text();
            
            var row =
                "<tr>" +
                    "<td>" + dateTimeFormatted + " Uhr</td>" +
                    "<td>" + label + "</td>" +
                "</tr>";

            table.append(row);
        });

        if (!history.length) {
            $('#privacy-popup-history-show').hide();

        } else {
            $('#privacy-popup-history-show').show();
        }
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
        setAnalyticsMatomo: setAnalyticsMatomo,
        setTagmanager: setTagmanager,
        setLeadLab: setLeadLab,
        setGmap: setGmap,
        setMapbox: setMapbox,
        setYouTube: setYouTube,
        setVimeo: setVimeo,
        setOpenStreetMap: setOpenStreetMap,
        historyShow: historyShow,
        historyBackToMain: historyBackToMain,
        updateHistory: updateHistory
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
    var $buttonClosePopup =        $('.close-settings');
    var $inputAnalytics =          $('input[name="privacy-g-analytics"]');
    var $inputAnalyticsMatomo =    $('input[name="privacy-matomo-analytics"]');
    var $inputTagmanager =         $('input[name="privacy-g-tagmanager"]');
    var $inputLeadLab =            $('input[name="privacy-leadlab"]');
    var $inputGmaps =              $('input[name="privacy-g-maps"]');
    var $inputMapbox =             $('input[name="privacy-mapbox"]');
    var $inputYouTube =            $('input[name="privacy-youtube"]');
    var $inputVimeo =              $('input[name="privacy-vimeo"]');
    var $inputOpenStreetMap =      $('input[name="privacy-open-street-map"]');
    var $buttonShowGmap =          $('button#load-google-map');
    var $buttonShowMapbox =        $('button#load-mapbox');
    var $buttonShowVimeo =         $('button#load-vimeo');
    var $buttonShowYouTube =       $('button#load-youtube');
    var $buttonShowOpenStreetMap = $('button#load-open-street-map');

    // Show privacy bar if not already shown previously
    if (contaoPrivacy.toShowBar()) {
        contaoPrivacy.showBar();
    }

    // Set history empty array if not in localStorage already
    if (!localStorage.getItem('contaoPrivacy.history')) {
        localStorage.setItem('contaoPrivacy.history', JSON.stringify([]))
    }

    contaoPrivacy.updateHistory();

    // Privacy bar position relative when the page is scrolled to the bottom
    var scrolling = false;

    $(window).on('scroll', function() {
        scrolling = true;
    });
    var privacyBar = $(".privacy-bar"),
        privacyBarHeight = privacyBar.height() + 30;

    setInterval(function() {
       
        if (scrolling) {
            scrolling = false;
            if($(window).scrollTop() + $(window).height() > $(document).height() - privacyBarHeight) {
                privacyBar.addClass('not-fixed');

            } else {
                privacyBar.removeClass('not-fixed');
            }
        }
    }, 450);

    // Set analytics initially
    if ($inputAnalytics.length) {
        contaoPrivacy.setAnalytics(!!localStorage.getItem('contaoPrivacy.enabledAnalytics'), true);
    }

    // Set matomo analytics initially
    if ($inputAnalyticsMatomo.length) {
        contaoPrivacy.setAnalyticsMatomo(!!localStorage.getItem('contaoPrivacy.enabledAnalyticsMatomo'), true);
    }

	// Set tagmanager initially
    if ($inputTagmanager.length) {
        contaoPrivacy.setTagmanager(!!localStorage.getItem('contaoPrivacy.enabledTagManager'), true);
    }

    // Set leadlab initially
    if ($inputLeadLab.length) {
        contaoPrivacy.setLeadLab(!!localStorage.getItem('contaoPrivacy.enabledLeadlab'), true);
    }

    // Set gmap initially
    if ($inputGmaps.length) {
        contaoPrivacy.setGmap(!!localStorage.getItem('contaoPrivacy.enabledGmap'), true);
    }

    // Set mapbox initially
    if ($inputMapbox.length) {
        contaoPrivacy.setMapbox(!!localStorage.getItem('contaoPrivacy.enabledMapbox'), true);
    }

    // Set youtube initially
    if ($inputYouTube.length) {
        contaoPrivacy.setYouTube(!!localStorage.getItem('contaoPrivacy.enabledYouTube'), true);
    }

    // Set vimeo initially
    if ($inputVimeo.length) {
        contaoPrivacy.setVimeo(!!localStorage.getItem('contaoPrivacy.enabledVimeo'), true);
    }

    // Set open street map initially
    if ($inputOpenStreetMap.length) {
        contaoPrivacy.setOpenStreetMap(!!localStorage.getItem('contaoPrivacy.enabledOpenStreetMap'), true);
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
        var windowHeight = $(window).height();

        if (innerboxHeight > windowHeight ) {
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

    // Toggle analytics matomo
    if ($inputAnalyticsMatomo.length) {
        $inputAnalyticsMatomo.on('change', function() {
            contaoPrivacy.setAnalyticsMatomo($(this).prop('checked'));
        });
    }
	
	// Toggle tagmanager
    if ($inputTagmanager.length) {
        $inputTagmanager.on('change', function() {
            contaoPrivacy.setTagmanager($(this).prop('checked'));
        });
    }

    // Toggle Leadlab
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

    // Toggle mapbox
    if ($inputMapbox.length) {
        $inputMapbox.on('change', function() {
            contaoPrivacy.setMapbox($(this).prop('checked'));
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

    // Show open street map
    $buttonShowOpenStreetMap.on('click', function () {
        contaoPrivacy.setOpenStreetMap(true);
    });

    // Show history
    //$('#privacy-popup-history-show').on('click', contaoPrivacy.historyShow);
    document.querySelector('#privacy-popup-history-show').addEventListener('click', contaoPrivacy.historyShow);

    // Back to main (from history)
    //$('#privacy-popup-history-back-to-main').on('click', contaoPrivacy.historyBackToMain);
    document.querySelector('#privacy-popup-history-back-to-main').addEventListener('click', contaoPrivacy.historyBackToMain);

    // Accordion js logic
    var timing = 300;
    var accTrigger = $('.accordion-item .acc-toggler');
    var accContent = $('.accordion-content');
    // add class-name 'closedFAQ' to 'faq-a' DIVs

    accTrigger.click(function(e) {

      
        let $this = $(this);
      
        if ($this.parent().next().hasClass('show')) {
            $this.parent().next().removeClass('show');
            $this.parent().next().slideUp(350);
            $this.parent().removeClass('active');
        } else {
            $('.accordion-content').removeClass('show');
            accTrigger.parent().removeClass('active');

            $this.parent().toggleClass('active');
            $('.accordion-content').slideUp(timing);
            $this.parent().next().toggleClass('show');
            $this.parent().next().slideToggle(timing);
        }
    });



}