import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import{HomeComponent} from'./app/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Helloworld';
}
