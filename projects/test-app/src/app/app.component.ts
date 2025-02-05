import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BasicLibComponent, TestComponentComponent } from 'basic-lib';

@Component({
  selector: 'app-root',
  imports: [BasicLibComponent,TestComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test-app';
}
