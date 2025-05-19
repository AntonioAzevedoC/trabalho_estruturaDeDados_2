"use strict";

/* 
    Exercício 6: Fila com Contador de Operações (Queue)
    Desafio: Modifique a classe Queue para contar quantas operações foram feitas na fila.
    Regras:
        1. Crie uma variável privada #operationCount para contar quantas operações
        foram realizadas (enqueue e dequeue).
        2. Adicione um método getOperationCount() que retorna o total de operações  
        feitas.
        3. Teste essa funcionalidade simulando uma fila de atendimento ao cliente.
*/

import Queue from "./Queue.mjs";

// Simulação
const fila = new Queue();

fila.enqueue("José");
fila.enqueue("Sérgio");
fila.enqueue("Joaquim");
console.log(fila.getOperationCount);

fila.enqueue("Maria");
fila.enqueue("João");
fila.dequeue();

console.log(fila.getOperationCount);

fila.enqueue("Samuel");
fila.dequeue();
console.log(fila.getOperationCount);
