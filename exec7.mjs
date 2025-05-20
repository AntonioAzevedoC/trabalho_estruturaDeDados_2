"use strict";

/* 
    Exercício 7: Pilha com Histórico de Remoções (Stack)
    Desafio: Modifique a classe Stack para armazenar um histórico dos elementos que foram removidos (pop).
    Regras:
        1. Crie um array privado #historyData para armazenar os elementos removidos.
        2. Adicione um método history() para retornar os elementos que já foram
        retirados da pilha.
        3. Teste essa funcionalidade simulando uma pilha de navegação em um
        navegador (ex: páginas visitadas e removidas).
*/

// Teste da funcionalidade
import Stack from "./Stack.mjs";

const navegador = new Stack();

navegador.push("Youtube");
navegador.push("Github");
navegador.push("WhatsApp Web");
console.log(`Páginas abertas: ${navegador.print()}`);
console.log(`Páginas fechadas: ${navegador.history}`);

navegador.push("Instagram");
console.log(`Páginas abertas: ${navegador.print()}`);
console.log(`Páginas fechadas: ${navegador.history}`);

navegador.pop();
console.log(`Páginas abertas: ${navegador.print()}`);
console.log(`Páginas fechadas: ${navegador.history}`);

navegador.pop();
navegador.pop();
console.log(`Páginas abertas: ${navegador.print()}`);
console.log(`Páginas fechadas: ${navegador.history}`);
