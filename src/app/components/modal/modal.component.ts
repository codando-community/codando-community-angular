import { Component } from '@angular/core';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  public mostrar: boolean = true;
  public data = [
    {
      text: "Fique por dentro de todos os nossos eventos",
      button_text: "Saiba mais",
      button_link: "https://www.sympla.com.br/produtor/codandocommunity"
    }
  ]

  toggle () {
    this.mostrar = !this.mostrar;
  }
}
