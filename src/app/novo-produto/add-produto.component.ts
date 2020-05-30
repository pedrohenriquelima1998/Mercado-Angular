import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProdutoService } from '../../Services/produto.service';
import { IProduto } from '../../Models/produto.interface';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IFornecedor } from 'src/Models/fornecedor.interface';
import { FornecedorService } from 'src/Services/fornecedor.service';


@Component({
  selector: 'add-produto-app',
  templateUrl: './add-produto.component.html'
})
export class AddProdutoComponent implements OnInit {
  produtos: IProduto[] = [];
  fornecedores: IFornecedor[] = [];
  formLabel: string;
  isEditModel: false;
  formulario: FormGroup;
  produto: IProduto = <IProduto>{};

  constructor(private produtoService: ProdutoService, private fornecedorService: FornecedorService, private formBuilder: FormBuilder, private router: Router) {
    this.formulario = formBuilder.group({
      "nome": ["", Validators.required],
      "preco": ["", Validators.required],
      "fornecedorId": ["", Validators.required]
    });
    this.formLabel = "Adicionar Produto";
  }



  private getProdutos() {
    this.produtoService.getProdutos().subscribe(
      data => this.produtos = data,
      error => console.log(error)
    );
  }

  private getFornecedores() {
    this.fornecedorService.getFornecedores().subscribe(
      data => this.fornecedores = data,
      error => console.log(error)
    );
  }



  ngOnInit(): void {
    this.getProdutos();
    this.getFornecedores();
  }

  onSubmit() {
    this.produto.nome = this.formulario.controls["nome"].value;
    this.produto.preco = parseFloat(this.formulario.controls["preco"].value);
    this.produto.fornecedorId = Number(this.formulario.controls["fornecedorId"].value);

    this.produtoService.addProduto(this.produto).subscribe(res => {
      //this.getProdutos();
      //this.formulario.reset();
      this.router.navigate(["/produtos"]);
    })
  };
  editProduto() { };
  cancelar() {
    console.log("reset");
    this.formulario.reset();
  };
}
