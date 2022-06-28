<?php

namespace VHUG\Contao\Privacy\Elements;

use Contao\ContentHtml;

class ContentPrivacyPopupOpener extends ContentHtml
{
    /**
     * Template
     * @var string
     */
    protected $strTemplate = 'ce_privacyPopupOpener';

    protected function compile()
    {
        $this->html = str_replace('%s', '<button class="open-privacy-settings">' . $GLOBALS['TL_LANG']['PRIVACY']['open'] . '</button>', $GLOBALS['TL_LANG']['PRIVACY']['page_notice']);
        parent::compile();
    }
}

