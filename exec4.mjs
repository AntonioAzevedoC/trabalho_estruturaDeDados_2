"use strict";

/*
    4.) O Professor Alexandre estava com febre e decidiu ir ao plantão médico. Quando ele chegou, havia 10 (dez) pessoas na sua frente: José, Sérgio, Joaquim, Maria, João, Samuel, Vicente, Terezinha, Firmino e Toninho
    
    Para que as pessoas sejam atendidas de forma correta e por ordem de chegada, como uma fila, o primeiro passo é importar a classe apropriada da pasta "lib" e depois criar o nosso "objeto" atendimento.
    a) Utilizando os conceitos e os arquivos de "FILA" feitos em sala, faça com que essa fila
    esteja na sequência a seguir
    para que o atendimento do plantão possa começar:
        1. José
        2. Sérgio
        3. Joaquim
        4. Maria
        5. João
        6. Samuel
        7. Vicente
        8. Terezinha
        9. Firmino
        10. Toninho
        11. Alexandre
    b) Imprima a fila na ordem correta (Utilize o comando correto).
    c) O médico pediu ao atendente que chamasse a pessoa que estava na frente da fila. Logo ela foi removido da fila.
    d) Mostre a pessoa que foi atendida e logo em seguida Imprima como ficou a fila depois do atendimento (Utilize o comando correto).
    e) Equanto todos aguardavam o atendimento, chegaram mais 3 (três) pessoas na seguinte sequência (Utilize o comando correto):
        - Rafael
        - Isabela
        - Cauã
    Adicione eles na ordem da fila
    f) Imprima a fila na ordem correta depois das alterações (Utilize o comando correto).
    g) O médico pediu ao atendente qual o nome da próxima pessoa a ser atendida: Mostre o comando a ser executado e qual o nome da próxima pessoa que será atendida.
    h) O médico pediu ao atendente que chamasse essa pessoa que estava na frente da fila. Logo ela foi removido da fila (Utilize o comando correto).
    i) Imprima a fila na ordem correta depois de todas as alterações (Utilize o comando correto).
*/

import Queue from "./Queue.mjs";

const filaPlantao = new Queue();

// Exercício A:
filaPlantao.enqueue("José");
filaPlantao.enqueue("Sérgio");
filaPlantao.enqueue("Joaquim");
filaPlantao.enqueue("Maria");
filaPlantao.enqueue("João");
filaPlantao.enqueue("Samuel");
filaPlantao.enqueue("Vicente");
filaPlantao.enqueue("Terezinha");
filaPlantao.enqueue("Firmino");
filaPlantao.enqueue("Toninho");
filaPlantao.enqueue("Alexandre");

// Exercício B:
console.log(filaPlantao.print());

// Exercício C e D:
console.log(filaPlantao.dequeue());
console.log(filaPlantao.print());

// Exercício E:
filaPlantao.enqueue("Rafael");
filaPlantao.enqueue("Isabela");
filaPlantao.enqueue("Cauã");

// Exercício F:
console.log(filaPlantao.print());

// Exercício G:
console.log(filaPlantao.peek());

// Exercício H:
filaPlantao.dequeue();

// Exercício I:
console.log(filaPlantao.print());
