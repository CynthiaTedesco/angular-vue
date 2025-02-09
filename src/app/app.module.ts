// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component'; // Import the standalone AppComponent
import { HeaderComponent } from './header/header.component'; // Import other standalone components
import { FooterComponent } from './footer/footer.component'; // Import FooterComponent

import { bootstrapApplication } from '@angular/platform-browser'; // Import the new bootstrapApplication function

@NgModule({
  imports: [BrowserModule, AppComponent, HeaderComponent, FooterComponent],
  providers: [],
})
export class AppModule {}

bootstrapApplication(AppComponent); // Use bootstrapApplication to bootstrap the standalone component
