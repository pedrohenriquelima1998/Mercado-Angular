import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import 'rxjs/add/operator/map';
import { IFornecedor } from '../Models/fornecedor.interface';


@Injectable()
export class FornecedorService {
    constructor(private http: HttpClient) { }

    //get
    getFornecedores(){
        return this.http.get<IFornecedor[]>("https://localhost:5001/api/fornecedores");
    }

    /*post
    addProduto(Produto: IProduto){
        return this.http.post("api/produtos",Produto);
    }*/
}