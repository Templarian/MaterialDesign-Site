import { Component, Input, SimpleChanges } from '@angular/core';
import { Icon } from './../../shared/models/icon.model';
import {
    mdiAndroid, mdiXamarin, mdiAccountCircle,
    mdiCommentAccount, mdiAccountMultiple, mdiHuman,
    mdiWindows, mdiWebpack, mdiCodeBraces, mdiClock,
    mdiAngular, mdiAngularjs, mdiBootstrap, mdiChevronDown,
    mdiChevronLeft, mdiChevronRight, mdiChevronUp, mdiCheck,
    mdiCheckboxMarked, mdiCheckboxBlankOutline, mdiCommentOutline,
    mdiDownload, mdiEmber, mdiEmailOutline, mdiEmoticonHappy, mdiEye, mdiEyeOff,
    mdiFileTree, mdiFilter, mdiFormatLetterCase, mdiGithubCircle,
    mdiGoogle, mdiHome, mdiHomeAssistant, mdiLanguageHtml5,
    mdiInformationOutline,
    mdiLightbulbOn,
    mdiMagnify,
    mdiMenuDown,
    mdiMenuUp,
    mdiWeb,
    mdiVuejs,
    mdiTextbox,
    mdiThumbUpOutline,
    mdiSvg,
    mdiScaleBalance,
    mdiReact,
    mdiPolymer,
    mdiPlusBox,
    mdiPlusBoxOutline,
    mdiLanguagePhp,
    mdiLanguageRubyOnRails,
    mdiNewspaper,
    mdiTagPlus,
    mdiStar,
    mdiDelete,
    mdiPlusCircle,
    mdiTooltipText,
    mdiAsterisk,
    mdiFileDocument,
    mdiNodejs,
    mdiCheckboxMarkedOutline,
    mdiArrowUpThick,
    mdiFormatListChecks,
    mdiVisualStudioCode
} from '@mdi/js'

@Component({
  selector: 'mdi-icon',
  templateUrl: './icon.component.html'
})
export class IconComponent  {
    @Input('name') iconName: string;

    icons: Icon[] = [
        new Icon('account-circle', mdiAccountCircle),
        new Icon('account-multiple', mdiAccountMultiple),
        new Icon('android', mdiAndroid),
        new Icon('angular', mdiAngular),
        new Icon('angularjs', mdiAngularjs),
        new Icon('arrow-up-thick', mdiArrowUpThick),
        new Icon('format-list-checks', mdiFormatListChecks),
        new Icon('asterisk', mdiAsterisk),
        new Icon('bootstrap', mdiBootstrap),
        new Icon('chevron-left', mdiChevronLeft),
        new Icon('chevron-right', mdiChevronRight),
        new Icon('chevron-down', mdiChevronDown),
        new Icon('chevron-up', mdiChevronUp),
        new Icon('check', mdiCheck),
        new Icon('checkbox-marked', mdiCheckboxMarked),
        new Icon('checkbox-marked-outline', mdiCheckboxMarkedOutline),
        new Icon('checkbox-blank-outline', mdiCheckboxBlankOutline),
        new Icon('clock', mdiClock),
        new Icon('code-braces', mdiCodeBraces),
        new Icon('comment-account', mdiCommentAccount),
        new Icon('comment-outline', mdiCommentOutline),
        new Icon('delete', mdiDelete),
        new Icon('download', mdiDownload),
        new Icon('ember', mdiEmber),
        new Icon('email-outline', mdiEmailOutline),
        new Icon('eye', mdiEye),
        new Icon('eye-off', mdiEyeOff),
        new Icon('file-tree', mdiFileTree),
        new Icon('file-document', mdiFileDocument),
        new Icon('filter', mdiFilter),
        new Icon('format-letter-case', mdiFormatLetterCase),
        new Icon('github', mdiGithubCircle),
        new Icon('google', mdiGoogle),
        new Icon('home', mdiHome),
        new Icon('home-assistant', mdiHomeAssistant),
        new Icon('html', mdiLanguageHtml5),
        new Icon('iconify', mdiEmoticonHappy),
        new Icon('information-outline', mdiInformationOutline),
        new Icon('lightbulb-on', mdiLightbulbOn),
        new Icon('magnify', mdiMagnify),
        new Icon('menu-down', mdiMenuDown),
        new Icon('menu-up', mdiMenuUp),
        new Icon('news', mdiNewspaper),
        new Icon('nodejs', mdiNodejs),
        new Icon('language-php', mdiLanguagePhp),
        new Icon('plus-box-outline', mdiPlusBoxOutline),
        new Icon('plus-box', mdiPlusBox),
        new Icon('plus-circle', mdiPlusCircle),
        new Icon('polymer', mdiPolymer),
        new Icon('react', mdiReact),
        new Icon('rollupjs', 'M19.46,8.64C19.46,11.11 18.11,13.26 16.12,14.4C16,14.5 15.93,14.66 16,14.81L19.41,21.55C19.5,21.76 19.36,22 19.13,22H6.1L6.17,21.96C6.66,21.68 10.06,14.97 13.38,11.79C16.7,8.61 17.12,9.67 15.29,6.21C15.29,6.21 16.7,8.96 15.5,9.17C14.56,9.34 12.4,7.25 13.2,5.37C14,3.53 17.15,3.88 18.6,5.38C19.15,6.34 19.46,7.45 19.46,8.64M7.16,13.13C5.84,15.56 5,17.33 4.54,18.57V2.31C4.54,2.14 4.68,2 4.85,2H12.92C15.26,2.04 17.31,3.28 18.46,5.15C17.62,4.1 16.3,3.5 15,3.5C12.53,3.5 11.91,4.4 7.16,13.13Z'),
        new Icon('ruby-on-rails', mdiLanguageRubyOnRails),
        new Icon('scale-balance', mdiScaleBalance),
        new Icon('star', mdiStar),
        new Icon('svg', mdiSvg),
        new Icon('tag-plus', mdiTagPlus),
        new Icon('thumb-up-outline', mdiThumbUpOutline),
        new Icon('tooltip-text', mdiTooltipText),
        new Icon('textbox', mdiTextbox),
        new Icon('vuejs', mdiVuejs),
        new Icon('web', mdiWeb),
        new Icon('webpack', mdiWebpack),
        new Icon('windows', mdiWindows),
        new Icon('human', mdiHuman),
        new Icon('xamarin', mdiXamarin),
        new Icon('visual-studio-code', mdiVisualStudioCode)
    ]

    setIcon (name: string) {
        var icon = this.icons.find((value, index, obj) => {
            return value.name == name;
        });
        if (icon == undefined) {
            console.error('Icon "' + name + '" not found. Defaulting to alert icon.');
        } else {
            this.data = icon.data;
            this.name = icon.name;
        }
    }

    data: string = 'M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z';
    name: string = 'error';

    ngOnChanges(changes: SimpleChanges){
        this.setIcon(changes.iconName.currentValue);
    }
}
