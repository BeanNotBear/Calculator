import { NgModule } from '@angular/core';
import {CommonModule, CurrencyPipe} from '@angular/common';
import {HeaderComponent} from "./header/header.component";
import {InvestmentResultsComponent} from "./investment-results/investment-results.component";
import {UserInputComponent} from "./user-input/user-input.component";
import {FormsModule} from "@angular/forms";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";



@NgModule({
  declarations: [AppComponent, HeaderComponent, InvestmentResultsComponent, UserInputComponent],
  imports: [
    BrowserModule, CommonModule, FormsModule, CurrencyPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
