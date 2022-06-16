var buttonEnableAll =           document.querySelector('button#enable-all');
var buttonOpenPopup =           document.querySelectorAll('button.open-privacy-settings');
var buttonClosePopup =          document.querySelectorAll('.close-settings');
var inputAnalytics =            document.querySelector('input[name="privacy-g-analytics"]');
var inputAnalyticsMatomo =      document.querySelector('input[name="privacy-matomo-analytics"]');
var inputTagmanager =           document.querySelector('input[name="privacy-g-tagmanager"]');
var inputLeadLab =              document.querySelector('input[name="privacy-leadlab"]');
var inputGmaps =                document.querySelector('input[name="privacy-g-maps"]');
var inputMapbox =               document.querySelector('input[name="privacy-mapbox"]');
var inputYouTube =              document.querySelector('input[name="privacy-youtube"]');
var inputVimeo =                document.querySelector('input[name="privacy-vimeo"]');
var inputOpenStreetMap =        document.querySelector('input[name="privacy-open-street-map"]');
var buttonShowGmap =            document.querySelectorAll('button#load-google-map');
var buttonShowMapbox =          document.querySelectorAll('button#load-mapbox');
var buttonShowOpenStreetMap =   document.querySelectorAll('button#load-open-street-map');
var buttonShowVimeo =           document.querySelectorAll('button#load-vimeo');
var buttonShowYouTube =         document.querySelectorAll('button#load-youtube');


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
        document.querySelector('.privacy-bar').style.display = "block";
        document.querySelector('.privacy-bar').style.transform = "translateY(0)";
        document.querySelector('.privacy-bar').style.opacity = '1';
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
        document.querySelector('.privacy-bar').style.opacity = '0';
        document.querySelector('.privacy-bar').style.transform = "translateY(100%)";
        document.querySelector('#footer').classList.remove('addSpace');
        setTimeout(function() {
            document.querySelector('.privacy-bar').style.display = "none";
        }, 1000);
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
        setOpenStreetMap(true, true);
        setYouTube(true, true);
        setVimeo(true, true);

        addToHistory('all', true);
    }

    /**
     * @param bln {boolean}
     * @param skipHistory {boolean}
     */
    function setAnalytics(bln, skipHistory) {
        if(inputAnalytics) {
            localStorage.setItem('contaoPrivacy.enabledAnalytics', bln ? '1' : '');

            if (!skipHistory) {
                addToHistory('analytics', bln);
            }

            // Switch checkbox correspondingly
            inputAnalytics.checked = bln;

            // Show right status message
            document.querySelector('.g-analytics .status-enabled').style.display = bln ? 'inline-block' : 'none';
            document.querySelector('.g-analytics .status-disabled').style.display = bln ? 'none' : 'inline-block';
        }
    }

    /**
     * @param bln {boolean}
     * @param skipHistory {boolean}
     */
    function setAnalyticsMatomo(bln, skipHistory) {
        if(inputAnalyticsMatomo) {
            localStorage.setItem('contaoPrivacy.enabledAnalyticsMatomo', bln ? '1' : '');

            if (!skipHistory) {
                addToHistory('analyticsMatomo', bln);
            }

            // Switch checkbox correspondingly
            inputAnalyticsMatomo.checked = bln;

            // Show right status message
            document.querySelector('.matomo-analytics .status-enabled').style.display = bln ? 'inline-block' : 'none';
            document.querySelector('.matomo-analytics .status-disabled').style.display = bln ? 'none' : 'inline-block';
        }
    }

    /**
     * @param bln {boolean}
     * @param skipHistory {boolean}
     */
    function setTagmanager(bln, skipHistory) {
        if(inputTagmanager) {
            localStorage.setItem('contaoPrivacy.enabledTagManager', bln ? '1' : '');

            if (!skipHistory) {
                addToHistory('tagManager', bln);
            }

            // Switch checkbox correspondingly
            inputTagmanager.checked = bln;

            // Show right status message
            document.querySelector('.g-tagmanager .status-enabled').style.display = bln ? 'inline-block' : 'none';
            document.querySelector('.g-tagmanager .status-disabled').style.display = bln ? 'none' : 'inline-block';
        }
    }

    /**
     * @param bln {boolean}
     * @param skipHistory {boolean}
     */
    function setLeadLab(bln, skipHistory) {
        if(inputLeadLab) {
            localStorage.setItem('contaoPrivacy.enabledLeadlab', bln ? '1' : '');

            if (!skipHistory) {
                addToHistory('leadlab', bln);
            }

            // Switch checkbox correspondingly
            inputLeadLab.checked = bln;

            // Show right status message
            document.querySelector('.leadlab .status-enabled').style.display = bln ? 'inline-block' : 'none';
            document.querySelector('.leadlab .status-disabled').style.display = bln ? 'none' : 'inline-block';
        }
    }

    /**
     * @param bln {boolean}
     * @param skipHistory {boolean}
     */
    function setGmap(bln, skipHistory) {
        if(inputGmaps) {
            localStorage.setItem('contaoPrivacy.enabledGmap', bln ? '1' : '');

            if (!skipHistory) {
                addToHistory('gmap', bln);
            }

            // Switch checkbox correspondingly
            inputGmaps.checked = bln;

            // Show right status message
            document.querySelector('.g-maps .status-enabled').style.display = bln ? 'inline-block' : 'none';
            document.querySelector('.g-maps .status-disabled').style.display = bln ? 'none' : 'inline-block';

            if (bln) {
                return showGmap();
            }

            hideGmap();
        }
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
        if(inputMapbox) {
            localStorage.setItem('contaoPrivacy.enabledMapbox', bln ? '1' : '');

            if (!skipHistory) {
                addToHistory('mapbox', bln);
            }

            // Switch checkbox correspondingly
            inputMapbox.checked = bln;

            // Show right status message
            document.querySelector('.mapbox .status-enabled').style.display = bln ? 'inline-block' : 'none';
            document.querySelector('.mapbox .status-disabled').style.display = bln ? 'none' : 'inline-block';

            if (bln) {
                return showMapbox();
            }

            hideMapbox();
        }
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
        if(inputOpenStreetMap) {
            localStorage.setItem('contaoPrivacy.enabledOpenStreetMap', bln ? '1' : '');

            if (!skipHistory) {
                addToHistory('openStreetMap', bln);
            }

            // Switch checkbox correspondingly
            inputOpenStreetMap.checked = bln;

            // Show right status message
            document.querySelector('.open-street-map .status-enabled').style.display = bln ? 'inline-block' : 'none';
            document.querySelector('.open-street-map .status-disabled').style.display = bln ? 'none' : 'inline-block';

            if (bln) {
                return showOpenStreetMap();
            }

            hideOpenStreetMap();
        }
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
        if(inputYouTube) {
            localStorage.setItem('contaoPrivacy.enabledYouTube', bln ? '1' : '');

            if (!skipHistory) {
                addToHistory('youTube', bln);
            }

            // Switch checkbox correspondingly
            inputYouTube.checked = bln;

            // Show right status message
            document.querySelector('.youtube .status-enabled').style.display = bln ? 'inline-block' : 'none';
            document.querySelector('.youtube .status-disabled').style.display = bln ? 'none' : 'inline-block';

            if (bln) {
                return showYouTube();
            }

            hideYouTube();
        }  
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
        if(inputVimeo) {
            localStorage.setItem('contaoPrivacy.enabledVimeo', bln ? '1' : '');

            if (!skipHistory) {
                addToHistory('vimeo', bln);
            }

            // Switch checkbox correspondingly
            inputVimeo.checked = bln;

            // Show right status message
            document.querySelector('.vimeo .status-enabled').style.display = bln ? 'inline-block' : 'none';
            document.querySelector('.vimeo .status-disabled').style.display = bln ? 'none' : 'inline-block';

            if (bln) {
                return showVimeo();
            }

            hideVimeo();
        }
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
        document.querySelector('#privacy-settings').style.display = 'block';
        document.querySelector('#footer').classList.remove('addSpace');
        setTimeout(function() {
            document.querySelector('#privacy-settings').style.opacity = '1';
        }, 200);
    }

    /**
     * Close privacy popup
     */
    function closePopup() {
        document.querySelector('#privacy-settings').style.opacity = '0';
        setTimeout(function() {
            document.querySelector('#privacy-settings').style.display = 'none';
        }, 1000);
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
        document.querySelector('.privacy-settings-main').style.display = 'none';
        document.querySelector('.privacy-settings-history').style.display = 'flex';
    }

    function historyBackToMain() {
        document.querySelector('.privacy-settings-main').style.display = 'flex';
        document.querySelector('.privacy-settings-history').style.display = 'none';
    }

    function updateHistory() {
        var history = getHistory();
        var table = document.querySelector('#privacy-history-table'); 

        //table.empty();
        table.innerHTML = "";

        history.forEach(function (element) {
            var date = new Date(element.time);

            var dateTimeFormatted = ('0' + date.getDate()).slice(-2) + '.' + ('0' + (date.getMonth() + 1)).slice(-2) + '.' + date.getFullYear()
                + ', ' + ('0' + date.getHours()).slice(-2) + ':' + ('0' + date.getMinutes()).slice(-2) + ':' + ('0' + date.getSeconds()).slice(-2);
            

            var label = document.querySelector('#privacy-history-labels #' + element.type + (element.value ? 1 : 0)).textContent;
            
            var row =
                "<tr>" +
                    "<td>" + dateTimeFormatted + " Uhr</td>" +
                    "<td>" + label + "</td>" +
                "</tr>";

            table.innerHTML += row;
        });


        if (!history.length) {
            document.querySelector('#privacy-popup-history-show').style.display = 'none';
        } else {
            document.querySelector('#privacy-popup-history-show').style.display = 'block';
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
    // if (!window.jQuery || !$('.privacy-bar').length || !$('#privacy-settings').length) {  //Disable when all done
    //     // jQuery still not loaded
    //     return setTimeout(runContaoPrivacy, 250);
    // }

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

    document.addEventListener('scroll', function() {
        scrolling = true;
    });

    var privacyBar = document.querySelector(".privacy-bar");
    var privacyBarHeight = privacyBar.clientHeight + 30;

    setInterval(function() {
        if (scrolling) {
            scrolling = false;
            if(window.scrollY + window.innerHeight + privacyBarHeight > document.body.scrollHeight) {
                privacyBar.classList.add('not-fixed');
            } else {
                privacyBar.classList.remove('not-fixed');
            }
        }
    }, 450);


    // Set analytics initially
    if (inputAnalytics) {
        contaoPrivacy.setAnalytics(!!localStorage.getItem('contaoPrivacy.enabledAnalytics'), true);
    }

    // Set matomo analytics initially
    if (inputAnalyticsMatomo) {
        contaoPrivacy.setAnalyticsMatomo(!!localStorage.getItem('contaoPrivacy.enabledAnalyticsMatomo'), true);
    }

	// Set tagmanager initially
    if (inputTagmanager) {
        contaoPrivacy.setTagmanager(!!localStorage.getItem('contaoPrivacy.enabledTagManager'), true);
    }

    // Set leadlab initially
    if (inputLeadLab) {
        contaoPrivacy.setLeadLab(!!localStorage.getItem('contaoPrivacy.enabledLeadlab'), true);
    }

    // Set gmap initially
    if (inputGmaps) {
        contaoPrivacy.setGmap(!!localStorage.getItem('contaoPrivacy.enabledGmap'), true);
    }

    // Set mapbox initially
    if (inputMapbox) {
        contaoPrivacy.setMapbox(!!localStorage.getItem('contaoPrivacy.enabledMapbox'), true);
    }

    // Set youtube initially
    if (inputYouTube) {
        contaoPrivacy.setYouTube(!!localStorage.getItem('contaoPrivacy.enabledYouTube'), true);
    }

    // Set vimeo initially
    if (inputVimeo) {
        contaoPrivacy.setVimeo(!!localStorage.getItem('contaoPrivacy.enabledVimeo'), true);
    }

    // Set open street map initially
    if (inputOpenStreetMap) {
        contaoPrivacy.setOpenStreetMap(!!localStorage.getItem('contaoPrivacy.enabledOpenStreetMap'), true);
    }

    // Enable all
    buttonEnableAll.addEventListener('click', function() {
        contaoPrivacy.enableAll();
        contaoPrivacy.setBarUsed();
        contaoPrivacy.closeBar();
    });

    // Open privacy popup
    for (var i = 0 ; i < buttonOpenPopup.length; i++) {
        buttonOpenPopup[i].addEventListener('click', function() {
            contaoPrivacy.showPopup();
            contaoPrivacy.setBarUsed();
            contaoPrivacy.closeBar();
            var innerbox = document.querySelector("#privacy-settings > .innerbox")
            var innerboxHeight = innerbox.clientHeight;
            var windowHeight = window.innerHeight;

            if (innerboxHeight > windowHeight ) { //Not in use currently bcs box is set to 85% height in css
                innerbox.style.cssText = 'top: 0; left: 0; transform: translate(0);'; 
            }
        });
    }

    // Close privacy popup
    for (var i = 0 ; i < buttonClosePopup.length; i++) {
        buttonClosePopup[i].addEventListener('click', function () {
            contaoPrivacy.closePopup();
        });
    }

    // Close privacy popup on click outside of it
    document.addEventListener('click', function(e) {
        // Exclude click on buttons that are opening the popup
        if (e.target.classList.contains('open-privacy-settings')) {
            return;
        }

        if (e.target.closest('.close-privacy')) {
            return contaoPrivacy.closePopup();
        }

        if (!e.target.closest('#privacy-settings .innerbox')) {
            contaoPrivacy.closePopup();
        }
    });

    // Toggle analytics
    if (inputAnalytics) {
        inputAnalytics.addEventListener('change', function() {
            contaoPrivacy.setAnalytics(inputAnalytics.checked);
        });
    }

    // Toggle analytics matomo
    if (inputAnalyticsMatomo) {
        inputAnalyticsMatomo.addEventListener('change', function() {
            contaoPrivacy.setAnalyticsMatomo(inputAnalyticsMatomo.checked);
        });
    }
	
	// Toggle tagmanager
    if (inputTagmanager) {
        inputTagmanager.addEventListener('change', function() {
            contaoPrivacy.setTagmanager(inputTagmanager.checked);
        });
    }

    // Toggle Leadlab
    if (inputLeadLab) {
        inputLeadLab.addEventListener('change', function() {
            contaoPrivacy.setLeadLab(inputLeadLab.checked);
        });
    }

    // Toggle gmap
    if (inputGmaps) {
        inputGmaps.addEventListener('change', function() {
            contaoPrivacy.setGmap(inputGmaps.checked);
        });
    }

    // Toggle mapbox
    if (inputMapbox) {
        inputMapbox.addEventListener('change', function() {
            contaoPrivacy.setMapbox(inputMapbox.checked);
        });
    }

    // Toggle open street map
    if (inputOpenStreetMap) {
        inputOpenStreetMap.addEventListener('change', function() {
            contaoPrivacy.setOpenStreetMap(inputOpenStreetMap.checked);
        });
    }

    // Toggle youtube
    if (inputYouTube) {
        inputYouTube.addEventListener('change', function() {
            contaoPrivacy.setYouTube(inputYouTube.checked);
        });
    }

    // Toggle vimeo
    if (inputVimeo) {
        inputVimeo.addEventListener('change', function() {
            contaoPrivacy.setVimeo(inputVimeo.checked);
        });
    }


    // Show gmap
    for (var i = 0 ; i < buttonShowGmap.length; i++) {
        buttonShowGmap[i].addEventListener('click', function () {
            contaoPrivacy.setGmap(true);
        });
    }

    // Show mapbox
    for (var i = 0 ; i < buttonShowMapbox.length; i++) {
        buttonShowMapbox[i].addEventListener('click', function () {
            contaoPrivacy.setMapbox(true);
        });
    }
    
    // Show open street map
    for (var i = 0 ; i < buttonShowMapbox.length; i++) {
        buttonShowOpenStreetMap[i].addEventListener('click', function () {
            contaoPrivacy.setOpenStreetMap(true);
        });
    }

    // Show youtube
    for (var i = 0 ; i < buttonShowYouTube.length; i++) {
        buttonShowYouTube[i].addEventListener('click', function () {
            contaoPrivacy.setYouTube(true);
        });
    }

    // Show vimeo
    for (var i = 0 ; i < buttonShowVimeo.length; i++) {
        buttonShowVimeo[i].addEventListener('click', function () {
            contaoPrivacy.setVimeo(true);
        });
    }

    // Show history
    document.querySelector('#privacy-popup-history-show').addEventListener('click', contaoPrivacy.historyShow);

    // Back to main (from history)
    document.querySelector('#privacy-popup-history-back-to-main').addEventListener('click', contaoPrivacy.historyBackToMain);


    // Accordion js logic
    function initAccordions(elem, option) {
        document.addEventListener('click', function (e) {
            if (!e.target.matches(elem +' .acc-toggler')) return;
            else {
                if(!e.target.parentElement.classList.contains('active')) {
                    //calcAccHeight();
                    if(option == true) {
                        var elementList = document.querySelectorAll(elem + ' .accordion-heading');

                        Array.prototype.forEach.call(elementList, function (e) {
                            e.classList.remove('active');
                            e.nextElementSibling.style.maxHeight = null;
                        });
                    }            
                    e.target.parentElement.classList.add('active');
                    e.target.parentElement.nextElementSibling.style.maxHeight = e.target.parentElement.nextElementSibling.querySelector('.accordion-inner').clientHeight + 'px';
                } else {
                    e.target.parentElement.classList.remove('active');
                    e.target.parentElement.nextElementSibling.style.maxHeight = null;
                }
            }
        });
    }

    initAccordions('.privacy-settings-main .right-col', true);

}


// Goodbye jQuery, my old friend :( AH