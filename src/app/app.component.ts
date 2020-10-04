import { Component } from "@angular/core";

@Component({
    selector: "app",
    template: ` <app-header></app-header>
                <router-outlet></router-outlet>`,
})
export class AppComponent{

}