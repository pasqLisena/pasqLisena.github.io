import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';
import {HttpModule} from '@angular/http';

import { MaterialModule } from '@angular/material';


import {routing} from './app.routes';
import {AppComponent} from './app.component';
import {Home} from './home';
import {About} from './about';
import {NavBarComponent} from './navbar.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        HttpModule,
        MaterialModule.forRoot()
    ],
    declarations: [
        AppComponent,
        Home, About, NavBarComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
