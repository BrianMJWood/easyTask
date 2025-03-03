import { Component, input, InputSignal, output } from '@angular/core';

@Component({
  selector: 'app-header',
  styleUrl: './header.component.css',
  templateUrl: './header.component.html',
  standalone: true,
})
export class HeaderComponent {
  title: InputSignal<string> = input.required<string>();
  testOutputText = output<string>();
}
