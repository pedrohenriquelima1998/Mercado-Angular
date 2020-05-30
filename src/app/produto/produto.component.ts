import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProdutoService } from '../../Services/produto.service';
import { IProduto } from '../../Models/produto.interface';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'produto-app',
  templateUrl: './produto.component.html'
})
export class ProdutoComponent implements OnInit {
  produtos: IProduto[] = [];
  formLabel: string;
  isEditModel: false;
  formulario: FormGroup;
  produto: IProduto = <IProduto>{};

  constructor(private produtoService: ProdutoService, private formBuilder: FormBuilder) {
    this.formulario = formBuilder.group({
      "nome": ["",Validators.required],
      "preco": ["",Validators.required],
      "fornecedorId": ["",Validators.required]
    });
    this.formLabel = "Adicionar Produto";
  }



  private getProdutos() {
    this.produtoService.getProdutos().subscribe(
      data => this.produtos = data,
      error => console.log(error)
    );
  }



  ngOnInit(): void {
    this.getProdutos();
  }

  onSubmit(){
    this.produto.nome = this.formulario.controls["nome"].value;
    this.produto.preco = parseFloat(this.formulario.controls["preco"].value);
    this.produto.fornecedorId = Number(this.formulario.controls["fornecedorId"].value);

    this.produtoService.addProduto(this.produto).subscribe(res =>{
      this.getProdutos();
      this.formulario.reset();
    })
  };
  editProduto(IProduto){};
  cancelar(){};
}
