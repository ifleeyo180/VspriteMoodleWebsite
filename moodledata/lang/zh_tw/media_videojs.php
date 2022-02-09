<?php
// This file is part of Moodle - https://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <https://www.gnu.org/licenses/>.

/**
 * Strings for component 'media_videojs', language 'zh_tw', version '3.11'.
 *
 * @package     media_videojs
 * @category    string
 * @copyright   1999 Martin Dougiamas and contributors
 * @license     https://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

defined('MOODLE_INTERNAL') || die();

$string['audiocssclass'] = '聲音檔的CSS樣式';
$string['audioextensions'] = '聲音檔的副檔名';
$string['configaudiocssclass'] = '一個CSS樣式將會添加到<聲音> 元件。舉例來說，這CSS樣式 "vjs-big-play-centered"將會把撥放按鈕放在中央。詳細情形，包括如何設定一個自訂的外殼，請參見docs.vediojs.com';
$string['configaudioextensions'] = '一個所支援的聲音檔副檔名的清單，副檔名之間要以逗點隔開。JavaScript影片播放器先會試著用瀏覽器原有的影片播放器來播放，若不行，將會以Flash播放器最為後備，播放其他格式檔案(若這瀏覽器支援Flash且啟用Flash作為後備)。';
$string['configlimitsize'] = '若啟用，且沒有指定寬度與高度，那播放器將以預設的寬與高來撥放。否則它會使用螢幕最大的寬度。';
$string['configuseflash'] = '若瀏覽器原本就不支援這影片格式，則改用Flash播放器。若啟用，JavaScript影片播放器將會播放上述清單上任何副檔名的檔案，而不必經過瀏覽器檢查。
請注意，Flash無法在行動裝置的瀏覽器上使用，且在許多桌上型電腦上也沒安裝。';
$string['configvideocssclass'] = '一個CSS樣式將會添加到<影片> 元件。舉例來說，這CSS樣式 "vjs-big-play-centered"將會把撥放按鈕放在中央。詳細情形，包括如何設定一個自訂的外殼，請參見docs.vediojs.com';
$string['configvideoextensions'] = '一個所支援的影片檔副檔名的清單，副檔名之間要以逗點隔開。JavaScript影片播放器先會試著用瀏覽器原有的影片播放器來播放，若不行，將會以Flash播放器最為後備，播放其他格式檔案(若這瀏覽器支援Flash且啟用Flash作為後備)。';
$string['configyoutube'] = '使用 JavaScript 影片播放器來播放YouTube影片。注意，它還不能支援 YouTube的播放清單';
$string['limitsize'] = '大小限制';
$string['pluginname'] = 'JavaScript影片播放器';
$string['pluginname_help'] = '一個可以包裹影片檔案的 JavaScript ，可讓瀏覽器的原有的影片播放器來播放，並伴隨一個 Flash 播放器做為後備(支援格式隨瀏覽器種類而定)';
$string['useflash'] = '使用 Flash 做為後備播放器';
$string['videocssclass'] = '影片的CSS樣式';
$string['videoextensions'] = '影片檔的副檔名';
$string['youtube'] = 'You Tube 影片檔';
