import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';

bootstrapApplication(AppComponent,{
    providers:[
      importProvidersFrom(BrowserModule),
      importProvidersFrom(BrowserAnimationsModule),
    ]
  }); 