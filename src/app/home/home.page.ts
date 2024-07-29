import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonLabel,
    IonItem,
    IonList,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,
  ],
})
export class HomePage {
  theHtml = '<h1>HTML</h1><p>This is some strange HTML</p>';
  theState = 0;

  constructor() {
    setTimeout(() => {
      this.theState = 1;
    }, 5000);
  }
}
