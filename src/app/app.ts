import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputOtpModule } from 'primeng/inputotp';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [ InputOtpModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('applibertad');
  value: string = '';
} 
