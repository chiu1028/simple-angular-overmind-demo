import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createOvermind } from 'overmind';
import { OvermindModule, OvermindService, OVERMIND_INSTANCE } from 'overmind-angular';

import { config, Store } from './overmind';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    OvermindModule,
  ],
  providers: [
    { provide: OVERMIND_INSTANCE, useValue: createOvermind(config, { devtools: 'localhost:3031' }) },
    { provide: Store, useExisting: OvermindService }
  ], 
  bootstrap: [AppComponent]
})
export class AppModule {
}
