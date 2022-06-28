<?php

namespace VHUG\Contao\Privacy\Modules;

use Contao\BackendTemplate;
use Contao\Module;
use Patchwork\Utf8;

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
        if (TL_MODE == 'BE')
        {
            $objTemplate = new BackendTemplate('be_wildcard');
            $objTemplate->wildcard = '### ' . Utf8::strtoupper($GLOBALS['TL_LANG']['FMD']['privacyPopup'][0]) . ' ###';
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
        $GLOBALS['TL_JAVASCRIPT'][] = 'bundles/contaoprivacy/js/privacy.js';
        $GLOBALS['privacyShowMatomo'] = (bool)$this->privacyShowMatomo;
    }
}