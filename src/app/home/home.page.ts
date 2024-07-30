import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { IonButton, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonButton,
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
  private readonly router = inject(Router);
  endingHtml = '<h1>Done...</h1><p>And now my brain is fried. Oooops...</p>';
  startingHtml = '<h1>Thinking...</h1><p>This is taking my brain a while. Hang on...</p>';
  theHtml = '<h1>HTML</h1><p>This is some strange HTML</p>';
  theState = 0;

  constructor() {
    setTimeout(() => {
      this.theState = 1;
    }, 5000);
  }

  async goToExamples() {
    await this.router.navigate(['/example']);
  }
}
