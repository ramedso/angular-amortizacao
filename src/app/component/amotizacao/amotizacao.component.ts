import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-amotizacao',
  templateUrl: './amotizacao.component.html',
  styleUrls: ['./amotizacao.component.css'],
})
export class AmotizacaoComponent implements OnInit {
  @Input() saldo: string;
  @Input() presenteValor: string;
  @Input() parcelas: string;
  @Input() taxa: string;
  @Input() meses: string;
  @Input() prestacao: string;

  data: Array<any>;

  constructor() {}

  getResult() {
    for (var i = 1; i <= Number(this.meses); i++) {
      this.data = [
        {
          mes: i,
          prestacao: this.prestacao,
          juros: this.taxa,
          amort: this.getAmortizacao(),
          saldo: this.saldo,
        },
      ];
    }
  }
  getAmortizacao() {
    return (
      (Number(this.presenteValor) *
        ((1 + Number(this.taxa)) ** Number(this.parcelas) *
          Number(this.taxa))) /
      ((1 + Number(this.taxa)) ** Number(this.parcelas) - 1)
    );
  }

  ngOnInit() {}
}
