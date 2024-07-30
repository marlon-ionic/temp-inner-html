import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'safeHtml',
  standalone: true
})
export class SafeHtmlPipe implements PipeTransform {

  constructor(private sanitized: DomSanitizer) {}

  transform(value?: string): SafeHtml | null | undefined {
    if(value === null || value === undefined) {
      return value;
    }
    return this.sanitized.bypassSecurityTrustHtml(value);
  }

}
