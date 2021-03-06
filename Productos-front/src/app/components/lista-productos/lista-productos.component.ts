import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  productos:Producto[]=[];

  constructor(private _productosServicio:ProductoService) { }

  ngOnInit(): void {

    this._productosServicio.getProducto().subscribe(
      data=>this.productos=data
    )
  }

}
