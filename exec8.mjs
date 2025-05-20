"use strict";

/*
    Exercício 8: Pilha com Capacidade Máxima
    Desafio: Modifique a classe Stack para ter um limite máximo de elementos.
    Regras:
        1. O tamanho máximo da pilha deve ser definido no construtor.
        2. Se a pilha atingir o limite, o método push() deve exibir uma mensagem de
        erro e impedir a inserção.
        3. Teste essa funcionalidade simulando uma pilha de desfazer ações em um
        editor de texto.
*/

import Stack from "./Stack.mjs";

const acoes = new Stack(5);

acoes.push("Mudar cor fundo");
acoes.push("Adicionar linha");
acoes.push("Adicionar linha");
acoes.push("Mudar cor fundo");
acoes.push("Adicionar texto");
acoes.push("Mudar cor fundo"); // Sexta ação causa erro
