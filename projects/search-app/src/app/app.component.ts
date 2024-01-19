import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchModule } from './search/search.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SearchModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'search-app';
}
