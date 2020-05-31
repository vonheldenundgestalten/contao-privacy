<?php

namespace Magmell\Zeag\Privacy\Modules;

use Contao\BackendTemplate;
use Contao\Module;
use Patchwork\Utf8;

/**
 * Front end module "privacyBar".
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
    }
}
