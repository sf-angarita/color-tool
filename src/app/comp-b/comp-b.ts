import { Component, inject, input, output } from '@angular/core';
import { BackgroundService } from '../background-service';

@Component({
  imports: [],
  selector: 'app-comp-b',
  styleUrl: './comp-b.css',
  templateUrl: './comp-b.html',
})
export class CompB {

  readonly backgroundService = inject(BackgroundService);

  readonly channel = input<string>(''); // R, G, or B
  readonly valueChange = output<string>();

  updateChannel(value: string): void {
    const channel = this.channel();
    this.backgroundService.updateChannel(channel, value);
    this.valueChange.emit(value);
  }
}
