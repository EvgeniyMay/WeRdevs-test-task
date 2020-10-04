import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import {APP_BASE_HREF} from '@angular/common';
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./content/home/home.component";
import { AboutComponent } from "./content/about/about.component";

import { CalendarComponent } from "./content/home/calendar/calendar.component";

const appRoutes: Routes = [
    { path: "", component: HomeComponent },
    { path: "about", component: AboutComponent },
    { path: "**", redirectTo: "/" }
]

@NgModule({
    imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes) ],
    declarations: [ AppComponent, HeaderComponent, HomeComponent, AboutComponent, CalendarComponent ],
    providers:    [{provide: APP_BASE_HREF, useValue: '/'}],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }