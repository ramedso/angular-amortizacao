import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-amotizacao',
  templateUrl: './amotizacao.component.html',
  styleUrls: ['./amotizacao.component.css'],
})
export class AmotizacaoComponent implements OnInit {
  @Input() presenteValor: string;
  @Input() parcelas: string;
  @Input() taxa: string;

  data: Array<any>;

  constructor() {
    this.data = [{ h1: 1 }];
  }

  getAmortizacao() {
    return (
      Number(this.presenteValor) * (((1 + Number(this.taxa)) ** Number(this.parcelas)) * Number(this.taxa)) / (((1 + Number(this.taxa)) ** Number(this.parcelas)) - 1)
    );
  }

  ngOnInit() {}
}
