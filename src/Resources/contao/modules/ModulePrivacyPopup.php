<?php

namespace VHUG\Contao\Privacy\Modules;

use Contao\BackendTemplate;
use Contao\Module;
use Contao\PageModel;
use Patchwork\Utf8;
use Contao\System;
use Symfony\Component\HttpFoundation\Request;

/**
 * Front end module "privacyPopup".
 *
 * @property bool $privacyDataProtectionPage
 * @property bool $privacyShowGoogleMaps
 * @property bool $privacyShowYouTube
 * @property bool $privacyShowVimeo
 * @property bool $privacyShowOpenStreetMap
 * @property bool $privacyShowLeadLab
 * @property bool $privacyShowMapbox
 * @property bool $privacyShowMatomo
 */
class ModulePrivacyPopup extends Module
{
    /**
     * Template
     * @var string
     */
    protected $strTemplate = 'mod_privacy_popup';

    /**
     * @return string
     */
    public function generate()
    {
        if (System::getContainer()->get('contao.routing.scope_matcher')->isBackendRequest(System::getContainer()->get('request_stack')->getCurrentRequest() ?? Request::create('')))
        {
            $objTemplate = new BackendTemplate('be_wildcard');
            $objTemplate->wildcard = '### ' . strtoupper($GLOBALS['TL_LANG']['FMD']['privacyPopup'][0]) . ' ###';
            $objTemplate->title = $this->headline;
            $objTemplate->id = $this->id;
            $objTemplate->link = $this->name;
            $objTemplate->href = 'contao/main.php?do=themes&amp;table=tl_module&amp;act=edit&amp;id=' . $this->id;

            return $objTemplate->parse();
        }

        return parent::generate();
    }

    protected function compile()
    {
        global $objPage;
        
        // if the fallback language and the current page language are the same -> use the selected page
        if(isset($objPage->languageMain) && $objPage->rootFallbackLanguage != $GLOBALS['TL_LANGUAGE']) {       
            $objPagesPrivacy = PageModel::findBy(array('languageMain=?'), array($this->privacyDataProtectionPage));
            
            foreach($objPagesPrivacy as $objPagePrivacy){
                if($objPagePrivacy->rootLanguage == $GLOBALS['TL_LANGUAGE']){
                    $this->Template->privacyDataProtectionPage = $objPagePrivacy->id;
                }
            }
        }
        
        $GLOBALS['TL_JAVASCRIPT'][] = 'bundles/contaoprivacy/js/privacy.js';
        $GLOBALS['privacyShowMatomo'] = (bool)$this->privacyShowMatomo;
    }
}
