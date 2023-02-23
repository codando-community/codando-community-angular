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
      text: "Foi dado a largada! E você não vai querer ficar pra trás, né?",
      button_text: "Saiba mais",
      button_link: "https://discord.com/channels/720760691677462588/727146609724489728/1078275066732744805"
    }
  ]

  toggle () {
    this.mostrar = !this.mostrar;
  }
}
