<?php

namespace Magmell\Contao\Privacy\ContaoManager;

use Contao\CoreBundle\ContaoCoreBundle;
use Contao\ManagerPlugin\Bundle\BundlePluginInterface;
use Contao\ManagerPlugin\Bundle\Config\BundleConfig;
use Contao\ManagerPlugin\Bundle\Parser\ParserInterface;
use delahaye\googlemaps\DlhGoogleMapsBundle;
use Magmell\Contao\Privacy\ContaoPrivacyBundle;
use Magmell\DHBWVS\Basic\DhbwvsBasicBundle;

class Plugin implements BundlePluginInterface
{
    public function getBundles(ParserInterface $parser)
    {
        return [
            BundleConfig::create(ContaoPrivacyBundle::class)
                ->setLoadAfter([
                    ContaoCoreBundle::class,
                    DlhGoogleMapsBundle::class,
                    DhbwvsBasicBundle::class
                ])
        ];
    }
}
