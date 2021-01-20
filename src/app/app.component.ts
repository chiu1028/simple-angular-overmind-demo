import { Component } from '@angular/core';
import { config, Store } from './overmind'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'overmind-test';
  state = this.store.select();
  action = this.store.actions;
  constructor(private store: Store) {
    console.log('state', this.state);
    console.log('action', this.action);
  }
}
