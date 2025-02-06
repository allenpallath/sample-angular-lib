import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { BasicLibComponent, TestComponentComponent } from 'basic-lib';

@Component({
  selector: 'app-root',
  imports: [BasicLibComponent, TestComponentComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'test-app';
  formtype: number = 0;
}
