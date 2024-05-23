import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateSevice } from './translate.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  text: string;
  translatedText: string;

  title = 'translateApp.Angular';

  constructor(private translateService: TranslateService) {}

  submit() {
    this.translateService.translate(this.text).subscribe((result) => {
      this.translatedText = result;
    });
  }
}
