import { Component, inject } from '@angular/core';
import { BackgroundService } from '../background-service';

@Component({
  imports: [],
  selector: 'app-comp-c',
  styleUrl: './comp-c.css',
  templateUrl: './comp-c.html',
})
export class CompC {

  readonly backgroundService = inject(BackgroundService);
}
