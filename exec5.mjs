"use strict";

/*
    5.) No aeroporto, os passageiros embarcam no avião seguindo a ordem de check-in. A sequência inicial de passageiros é:
        * Passageiro A
        * Passageiro B
        * Passageiro C
        * Passageiro D
        * Passageiro E

    a) Crie um objeto filaAeroporto e insira os passageiros na fila corretamente.
    b) Imprima a fila antes do início do embarque.
    c) O primeiro passageiro foi chamado para o embarque. Remova esse passageiro e mostre o nome dele.
    d) Imprima a fila após a remoção.
    e) Três novos passageiros fizeram check-in:
        * Passageiro F
        * Passageiro G
        * Passageiro H
    Adicione-os à fila.
    f) Imprima a fila após as alterações.
    g) Quem é o próximo passageiro a embarcar? Mostre o comando e o nome do passageiro.
    h) O próximo passageiro foi chamado. Remova essa pessoa e imprima a fila atualizada.
*/

import Queue from "./Queue.mjs";

// Exercício A:
const filaAeroporto = new Queue();

filaAeroporto.enqueue("Passageiro A");
filaAeroporto.enqueue("Passageiro B");
filaAeroporto.enqueue("Passageiro C");
filaAeroporto.enqueue("Passageiro D");
filaAeroporto.enqueue("Passageiro E");

// Exercício B:
console.log(filaAeroporto.print());

// Exercício C:
console.log(filaAeroporto.dequeue());

// Exercício D:
console.log(filaAeroporto.print());

// Exercício E:
filaAeroporto.enqueue("Passageiro F");
filaAeroporto.enqueue("Passageiro G");
filaAeroporto.enqueue("Passageiro H");

// Exercício F:
console.log(filaAeroporto.print());

// Exercício G:
console.log(filaAeroporto.peek());

// Exercício H:
filaAeroporto.dequeue();
console.log(filaAeroporto.print());
