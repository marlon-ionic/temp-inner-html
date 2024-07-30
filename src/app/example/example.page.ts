import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonBackButton, IonButton, IonItem, IonLabel } from '@ionic/angular/standalone';
import { DomSanitizer } from '@angular/platform-browser';
import { SafeHtmlPipe } from '../pipes/safe-html.pipe';

@Component({
  selector: 'app-example',
  templateUrl: './example.page.html',
  styleUrls: ['./example.page.scss'],
  standalone: true,
  imports: [IonBackButton, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, SafeHtmlPipe,  IonList, IonButton, IonItem, IonLabel]
})
export class ExamplePage {
  sanitizer = inject(DomSanitizer);

  removeAllHiddenAttributesPlainJs() {
    const elements = document.querySelectorAll('[hidden]');
    elements.forEach((element) => {
      element.removeAttribute('hidden');
    });
  }

}
