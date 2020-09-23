<?php

namespace Magmell\Zeag\Privacy\Modules;

use Contao\BackendTemplate;
use Contao\Module;
use Patchwork\Utf8;

/**
 * Front end module "privacyPopup".
 *
 * @property bool $loadConflictFreeJs
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
        $privacyJs = $this->loadConflictFreeJs ? 'privacy_conflict_free.js' : 'privacy.js';
        $GLOBALS['TL_JAVASCRIPT'][] = 'bundles/contaoprivacy/js/' . $privacyJs;
        $GLOBALS['privacyShowMatomo'] = (bool)$this->privacyShowMatomo;
    }
}
