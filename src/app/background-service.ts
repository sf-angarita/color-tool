import { computed, Injectable, signal } from '@angular/core';

@Injectable({providedIn: 'root'})
export class BackgroundService {

  wholeColor = signal<string>('000000');
  rChannel = computed(() => this.wholeColor().slice(0, 2));
  gChannel = computed(() => this.wholeColor().slice(2, 4));
  bChannel = computed(() => this.wholeColor().slice(4, 6));
  grayscale = computed(() => {
    const hex = this.wholeColor();
    const average = Math.round(
      (parseInt(hex.slice(0, 2), 16) +
        parseInt(hex.slice(2, 4), 16) +
        parseInt(hex.slice(4, 6), 16)) / 3
    );
  
    return average.toString(16).padStart(2, '0').repeat(3);
  });

  create(entry: { color: string }): void {
    this.wholeColor.set(entry.color);
  }

  updateChannel(channel: String, value: string): void {
    const hex = value.trim().toUpperCase();
    if (!/^[0-9A-F]{2}$/.test(hex)) return;

    const offsets = { R: 0, G: 2, B: 4 };
    const start = channel ==="R" ? 0 : channel === "G" ? 2 : 4;
    const color = this.wholeColor();

    this.wholeColor.set(`${color.slice(0, start)}${hex}${color.slice(start + 2)}`);
  }
}
