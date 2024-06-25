import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiLabelComponent } from '@app-workspace/ui';

@Component({
  standalone: true,
  imports: [UiLabelComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'app-one';
}
