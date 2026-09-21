import { Component } from '@angular/core';
import { CompA } from './comp-a/comp-a';
import { CompB } from './comp-b/comp-b';
import { CompC } from './comp-c/comp-c';

@Component({
  selector: 'app-root',
  imports: [CompA,CompB,CompC],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
