import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { PropertyComponent } from './property/property.component';
import { ChatComponent } from './chat/chat.component';
import { ContractComponent } from './contract/contract.component';
import { SearchComponent } from './search/search.component';
import { GroupComponent } from './group/group.component';
import { FooterComponent } from './footer/footer.component';
import { ProposalComponent } from './proposal/proposal.component';

registerLocaleData(ptBr);

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', redirectTo: '/', pathMatch: 'full' },
  { path: 'resultado-de-busca', component: SearchResultComponent },
  { path: 'imovel/:id', component: PropertyComponent },
  { path: 'group/:id', component: GroupComponent },
  { path: 'group/:id/chat', component: ChatComponent },
  { path: 'proposal/:id', component: ProposalComponent },
  { path: 'contrato', component: ContractComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NotFoundComponent,
    SearchResultComponent,
    PropertyComponent,
    ChatComponent,
    ContractComponent,
    SearchComponent,
    GroupComponent,
    FooterComponent,
    ProposalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
