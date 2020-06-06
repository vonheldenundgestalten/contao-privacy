<?php

$GLOBALS['TL_DCA']['tl_content']['palettes']['privacyPopupOpener'] = '{type_legend},type;{template_legend:hide},customTpl;{protected_legend:hide},protected;{expert_legend:hide},guests;{invisible_legend:hide},invisible,start,stop';

// privacy fix - domain is always no-cookie, hardwired in ce_youtube.html5
$GLOBALS['TL_DCA']['tl_content']['fields']['youtubeOptions']['options'] = array_diff($GLOBALS['TL_DCA']['tl_content']['fields']['youtubeOptions']['options'], ['youtube_nocookie']);

