import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './component/header/header.component';
import { AmotizacaoComponent } from './component/amotizacao/amotizacao.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    HeaderComponent,
    AmotizacaoComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
