import { Component } from '@angular/core';

@Component({
  selector: 'app-meu-componente',
  templateUrl: './meu-componente.component.html',
  styleUrls: ['./meu-componente.component.css'],
})
export class MeuComponenteComponent {
  nome: any = 'Curso de Frontend';
  descricao: any = '10';
  salvar(){
    console.log("Olá, estou salvando!")
  }
}
