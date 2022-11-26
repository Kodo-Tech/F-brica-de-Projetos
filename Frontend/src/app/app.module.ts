import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuTopoComponent } from './menu-topo/menu-topo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { HomeComponent } from './home/home.component';
import { PerfilComponent } from './perfil/perfil.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { DoacoesComponent } from './doacoes/doacoes.component';
import { DoacaoModalComponent } from './doacoes/doacao-modal/doacao-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuTopoComponent,
    PageNotFoundComponent,
    SobreNosComponent,
    HomeComponent,
    PerfilComponent,
    LoginComponent,
    CadastroComponent,
    DoacoesComponent,
    DoacaoModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
