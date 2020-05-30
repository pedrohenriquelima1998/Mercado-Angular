import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutoComponent } from './produto/produto.component';
import { AddProdutoComponent } from './novo-produto/add-produto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProdutoService } from 'src/Services/produto.service';
import { FornecedorService } from 'src/Services/fornecedor.service';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProdutoComponent,
    AddProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProdutoComponent, pathMatch: 'full' },
      { path: 'produtos', component: ProdutoComponent },
      { path: 'add-produto', component: AddProdutoComponent },
    ])
  ],
  providers: [
    ProdutoService,
    FornecedorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
