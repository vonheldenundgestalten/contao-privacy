<?php

// Palettes
$GLOBALS['TL_DCA']['tl_module']['palettes']['privacyBar'] = '{title_legend},name,type;{privacy_legend},privacyDataProtectionPage;{template_legend:hide},customTpl;';
$GLOBALS['TL_DCA']['tl_module']['palettes']['privacyPopup'] = '{title_legend},name,type;{privacy_legend},privacyDataProtectionPage,privacyShowGoogleMaps,privacyShowYouTube,privacyShowVimeo,privacyShowOpenStreetMap,privacyShowLeadLab;{template_legend:hide},customTpl;';

// Fields
$GLOBALS['TL_DCA']['tl_module']['fields']['privacyDataProtectionPage'] = [
    'label'                   => $GLOBALS['TL_LANG']['tl_module']['privacyDataProtectionPage'],
    'exclude'                 => true,
    'inputType'               => 'pageTree',
    'foreignKey'              => 'tl_page.title',
    'eval'                    => array('mandatory'=>true, 'fieldType'=>'radio', 'tl_class'=>'clr'),
    'sql'                     => "int(10) unsigned NOT NULL default 0",
    'relation'                => array('type'=>'hasOne', 'load'=>'lazy')
];

$GLOBALS['TL_DCA']['tl_module']['fields']['privacyShowGoogleMaps'] = [
    'label'                   => $GLOBALS['TL_LANG']['tl_module']['privacyShowGoogleMaps'],
    'exclude'                 => true,
    'inputType'               => 'checkbox',
    'eval'                    => array('tl_class'=>'w50'),
    'sql'                     => "char(1) NOT NULL default ''"
];

$GLOBALS['TL_DCA']['tl_module']['fields']['privacyShowYouTube'] = [
    'label'                   => $GLOBALS['TL_LANG']['tl_module']['privacyShowYouTube'],
    'exclude'                 => true,
    'inputType'               => 'checkbox',
    'eval'                    => array('tl_class'=>'w50'),
    'sql'                     => "char(1) NOT NULL default ''"
];

$GLOBALS['TL_DCA']['tl_module']['fields']['privacyShowVimeo'] = [
    'label'                   => $GLOBALS['TL_LANG']['tl_module']['privacyShowVimeo'],
    'exclude'                 => true,
    'inputType'               => 'checkbox',
    'eval'                    => array('tl_class'=>'w50'),
    'sql'                     => "char(1) NOT NULL default ''"
];

$GLOBALS['TL_DCA']['tl_module']['fields']['privacyShowOpenStreetMap'] = [
    'label'                   => $GLOBALS['TL_LANG']['tl_module']['privacyShowOpenStreetMap'],
    'exclude'                 => true,
    'inputType'               => 'checkbox',
    'eval'                    => array('tl_class'=>'w50'),
    'sql'                     => "char(1) NOT NULL default ''"
];

$GLOBALS['TL_DCA']['tl_module']['fields']['privacyShowLeadLab'] = [
    'label'                   => $GLOBALS['TL_LANG']['tl_module']['privacyShowLeadLab'],
    'exclude'                 => true,
    'inputType'               => 'checkbox',
    'eval'                    => array('tl_class'=>'w50'),
    'sql'                     => "char(1) NOT NULL default ''"
];
