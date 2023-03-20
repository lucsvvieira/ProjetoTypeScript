import { Negociacao } from "./models/negociacao.js";

const negociacao  = new  Negociacao(new Date(), 7, 170);
console.log(negociacao.volume);