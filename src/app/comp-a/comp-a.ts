import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BackgroundService } from '../background-service';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-comp-a',
  styleUrl: './comp-a.css',
  templateUrl: './comp-a.html',
})
export class CompA {

  colorForm = new FormGroup({
    color: new FormControl<string>('FF0000', { nonNullable: true })
  });

  private backgroundService = inject(BackgroundService);

  guardar(): void {
    if (this.colorForm.invalid) return;
    
    this.backgroundService.create(this.colorForm.getRawValue());
  }
  
}
