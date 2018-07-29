import { Component, Input } from '@angular/core';
import {
  mdiAccount, mdiAccountOutline,
  mdiAccountBox, mdiAccountBoxOutline,
  mdiAccountMultiple, mdiAccountMultipleOutline,
  mdiAccountMultiplePlus, mdiAccountMultiplePlusOutline,
  mdiAccountPlus, mdiAccountPlusOutline,
  mdiAccountSearch, mdiAccountSearchOutline,
  mdiAlert, mdiAlertOutline,
  mdiAlertCircle, mdiAlertCircleOutline,
  mdiArrowDownBoldBox, mdiArrowDownBoldBoxOutline,
  mdiArrowUpBoldBox, mdiArrowUpBoldBoxOutline,
  mdiArrowLeftBoldBox, mdiArrowLeftBoldBoxOutline,
  mdiArrowRightBoldBox, mdiArrowRightBoldBoxOutline,
  mdiArrowDownBold, mdiArrowDownBoldOutline,
  mdiArrowUpBold, mdiArrowUpBoldOutline,
  mdiArrowLeftBold, mdiArrowLeftBoldOutline,
  mdiArrowRightBold, mdiArrowRightBoldOutline,
  mdiBookmark, mdiBookmarkOutline,
  mdiBookmarkOff, mdiBookmarkOffOutline,
  mdiBriefcase, mdiBriefcaseOutline,
  mdiCards, mdiCardsOutline,
  mdiCart, mdiCartOutline,
  mdiCheckCircle, mdiCheckCircleOutline,
} from '@mdi/js'

@Component({
  selector: 'mdi-home-page',
  templateUrl: './homePage.component.html',
  styleUrls: ['./homePage.component.scss']
})
export class HomePageComponent {
  title: string = 'Home';
  icons: regularOutline[] = [
    { regular: mdiAccount, outline: mdiAccountOutline },
    { regular: mdiAccountBox, outline: mdiAccountBoxOutline },
    { regular: mdiAccountMultiple, outline: mdiAccountMultipleOutline },
    { regular: mdiAccountMultiplePlus, outline: mdiAccountMultiplePlusOutline },
    { regular: mdiAccountPlus, outline: mdiAccountPlusOutline },
    { regular: mdiAccountSearch, outline: mdiAccountSearchOutline },
    { regular: mdiAlertCircle, outline: mdiAlertCircleOutline },
    { regular: mdiAlert, outline: mdiAlertOutline },
    { regular: mdiArrowDownBoldBox, outline: mdiArrowDownBoldBoxOutline },
    { regular: mdiArrowUpBoldBox, outline: mdiArrowUpBoldBoxOutline },
    { regular: mdiArrowLeftBoldBox, outline: mdiArrowLeftBoldBoxOutline },
    { regular: mdiArrowRightBoldBox, outline: mdiArrowRightBoldBoxOutline },
    { regular: mdiArrowDownBold, outline: mdiArrowDownBoldOutline },
    { regular: mdiArrowUpBold, outline: mdiArrowUpBoldOutline },
    { regular: mdiArrowLeftBold, outline: mdiArrowLeftBoldOutline },
    { regular: mdiArrowRightBold, outline: mdiArrowRightBoldOutline },
    { regular: mdiBookmark, outline: mdiBookmarkOutline },
    { regular: mdiBookmarkOff, outline: mdiBookmarkOffOutline },
    { regular: mdiBriefcase, outline: mdiBriefcaseOutline },
    { regular: mdiCards, outline: mdiCardsOutline },
    { regular: mdiCart, outline: mdiCartOutline },
    { regular: mdiCheckCircle, outline: mdiCheckCircleOutline }
  ]
}

interface regularOutline {
  regular: string;
  outline: string;
}
