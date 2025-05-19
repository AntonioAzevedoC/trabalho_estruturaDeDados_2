"use strict";

/*
    1.) Utilizando o arquivo "PILHA" da pasta "lib". Descreva todo o código abaixo a partir do estado da pilha (inicialmente vazia) e após cada uma das operações a seguir:
*/

import Stack from "./Stack.mjs";

const pilha = new Stack();

pilha.push(5);
pilha.push(9);
pilha.pop();
pilha.push(3);
pilha.push(8);
pilha.pop();
pilha.pop();
pilha.push(6);
pilha.push(2);
pilha.pop();
pilha.push(10);
pilha.push(1);
pilha.pop();
pilha.pop();
pilha.push(15);
pilha.pop();
pilha.pop();
console.log(pilha.print());
