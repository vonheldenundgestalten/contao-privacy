<?php

namespace Magmell\Zeag\Privacy\Modules;

use Contao\BackendTemplate;
use Contao\Module;
use Contao\PageModel;
use Patchwork\Utf8;

/**
 * Front end module "privacyBar".
 *
 * @property int $privacyDataProtectionPage
 * @property bool $loadConflictFreeJs
 */
class ModulePrivacyBar extends Module
{
    /**
     * Template
     * @var string
     */
    protected $strTemplate = 'mod_privacy_bar';

    /**
     * @return string
     */
    public function generate()
    {
        if (TL_MODE == 'BE')
        {
            $objTemplate = new BackendTemplate('be_wildcard');
            $objTemplate->wildcard = '### ' . Utf8::strtoupper($GLOBALS['TL_LANG']['FMD']['privacyBar'][0]) . ' ###';
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

		$objPagePrivacy = PageModel::findById($this->privacyDataProtectionPage);
		$strLink = '<a href="'.$objPagePrivacy->getFrontendUrl().'">'.$GLOBALS['TL_LANG']['PRIVACY']['BAR']['dataProtection'].'</a>';
		
		$this->Template->content = sprintf($GLOBALS['TL_LANG']['PRIVACY']['BAR']['info'], $strLink);
    }
}
