import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule}from"@angular/common/http";
import{RouterModule, Routes} from"@angular/router";
import{FormsModule}from"@angular/forms";

import { AppComponent } from './app.component';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { AddProductoComponent } from './components/add-producto/add-producto.component';

const routers:Routes=[
  {path:'productos', component:ListaProductosComponent},
  {path:'agregarproducto',component:AddProductoComponent},
  {path:'',redirectTo: '/producto',pathMatch:'full'},


];

@NgModule({
  declarations: [
    AppComponent,
    ListaProductosComponent,
    AddProductoComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
