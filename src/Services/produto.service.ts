import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import 'rxjs/add/operator/map';
import { IProduto } from '../Models/produto.interface';


@Injectable()
export class ProdutoService {
    constructor(private http: HttpClient) { }

    //get
    getProdutos() {

        return this.http.get<IProduto[]>("https://localhost:5001/api/produtos");
    }

    //post
    addProduto(Produto: IProduto) {
        return this.http.post("https://localhost:5001/api/produtos", Produto);
    }
}