"use strict";

/*
    2.) Veja, na imagem "Torre-De-Hanoi-4-Discos.png" (em anexo na tarefa), como funciona o
    jogo das Torres de Hanoi com 4 discos. Cada uma das torres do jogo se comporta como uma pilha.

    Em hipótese alguma, um disco maior pode ficar sobre um disco menor. Importe a classe apropriada "PILHA" da pasta "lib" e crie três pilhas, representando as três torres. Comece o jogo com os 4 discos na TorreB conforme a imagem "Torre-De-Hanoi-4-Discos.png", nesta ordem [1,2,3,4].

    Implemente o método correto que move um disco de uma torre para outra. Finalize o jogo com os 4 discos na TorreA. Use o método print() para exibir as três pilhas ANTES e DEPOIS, conforme a imagem "Torre-Impressao.png". DEPOIS das movimentações, a TorreA deve estar com os discos na ordem [1,2,3,4] e as outras duas torres (TorreB e TorreC) devem estar vazias, conforme imagem

    Torre-Impressao.png (em anexo na tarefa).
*/

import Stack from "./Stack.mjs";

const pilhaA = new Stack();
const pilhaB = new Stack();
const pilhaC = new Stack();

// Valores início
pilhaB.push(1);
pilhaB.push(2);
pilhaB.push(3);
pilhaB.push(4);
console.log(pilhaB.print());

// Movimentações
pilhaC.push(pilhaB.pop());
pilhaA.push(pilhaB.pop());
pilhaA.push(pilhaC.pop());
pilhaC.push(pilhaB.pop());
pilhaB.push(pilhaA.pop());
pilhaC.push(pilhaA.pop());
pilhaC.push(pilhaB.pop());
pilhaA.push(pilhaB.pop());
pilhaA.push(pilhaC.pop());
pilhaB.push(pilhaC.pop());
pilhaB.push(pilhaA.pop());
pilhaA.push(pilhaC.pop());
pilhaC.push(pilhaB.pop());
pilhaA.push(pilhaB.pop());
pilhaA.push(pilhaC.pop());

// Resultado final
console.log("Pilha A: ", pilhaA.print());
console.log("Pilha B: ", pilhaB.print());
console.log("Pilha C: ", pilhaC.print());
