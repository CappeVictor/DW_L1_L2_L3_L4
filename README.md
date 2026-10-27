Lista de Exercícios, CSS Flexbox (parte 1)

**Disciplina:** Desenvolvimento Web I
**Curso:** Técnico Integrado em Informática para Internet
**Professor:** Hewerton Enes de Oliveira

---

## Parte A: Múltipla escolha

### 1. Onde `display: flex` é aplicada?
**Resposta: (b)** No contêiner (pai) cujos filhos diretos se tornarão itens flex.

`display: flex` transforma o elemento que a recebe em um contêiner flex. Os filhos diretos dele passam a ser itens flex. Aplicar em cada filho (a) não faz sentido, porque é o pai que organiza o espaço. O `<body>` (c) não é obrigatório, e o elemento inline (d) não é o ponto de partida.

### 2. Valor padrão de `flex-direction`
**Resposta: (c)** `row`.

Sem nenhuma declaração, os itens são dispostos em linha, da esquerda para a direita.

### 3. Eixo principal com `flex-direction: row`
**Resposta: (b)** Horizontal, da esquerda para a direita.

O eixo principal é o eixo em que os itens são dispostos. Com `row`, ele é horizontal e segue a direção de escrita, que em português é da esquerda para a direita.

### 4. `justify-content` com `flex-direction: column`
**Resposta: (b)** No eixo vertical (eixo principal).

Ao mudar para `column`, o eixo principal vira vertical. Como `justify-content` sempre atua no eixo principal, ele passa a distribuir os itens na vertical.

### 5. Eixo cruzado e propriedade correspondente
**Resposta: (c)** `align-items`.

`align-items` alinha os itens no eixo cruzado, que é perpendicular ao principal. `justify-content` (a) atua no principal. `flex-direction` (b) define o próprio eixo principal. `gap` (d) cria espaço entre itens, sem alinhar.

### 6. Valor padrão de `align-items`
**Resposta: (c)** `stretch`.

Com `stretch`, os itens se esticam no eixo cruzado para preencher a altura da linha, desde que não tenham altura definida.

### 7. Efeito de `justify-content: space-between`
**Resposta: (b)** Coloca o primeiro item no início, o último no fim, e distribui o espaço restante somente entre os itens.

Não há espaço nas bordas. Se a alternativa (a) fosse `space-around` ou `space-evenly`, aí sim haveria espaço nas extremidades.

### 8. Valor de `flex-wrap` que permite quebra de linha
**Resposta: (b)** `wrap`.

`nowrap` (a), o padrão, mantém tudo em uma linha. `row` (c) é um valor de `flex-direction`, e `stretch` (d) é um valor de alinhamento.

### 9. Quando `align-content` tem efeito
**Resposta: (b)** Quando o contêiner tem `flex-wrap: wrap` (ou `wrap-reverse`) e existe mais de uma linha.

`align-content` distribui as **linhas** no eixo cruzado. Com uma linha só, não há o que distribuir. Por isso ele não funciona em `nowrap`.

### 10. Diferença prática entre `gap` e margem
**Resposta: (b)** `gap` define o espaço entre os itens, sem criar espaço extra nas bordas externas do contêiner.

Se cada item tiver `margin-right`, o último item também carrega esse espaço, o que deixa uma folga no fim da linha.

### 11. Efeito de `flex-direction: row-reverse`
**Resposta: (c)** Os itens invertem a ordem visual no eixo horizontal, da direita para a esquerda.

A ordem no HTML não muda, então a leitura por teclado e por leitores de tela continua seguindo a ordem original. Isso é importante para acessibilidade.

### 12. Centralizar um item horizontal e verticalmente
**Resposta: (a)** `justify-content: center;` e `align-items: center;`.

Com `flex-direction: row`, `justify-content` centraliza no eixo horizontal e `align-items` centraliza no vertical. A alternativa (b) só muda a direção, e (c) e (d) não centralizam nada.

---

## Parte B: Dissertativas e análise de código

### 13. Contêiner flex e item flex

O **contêiner flex** é o elemento que recebe `display: flex`. Ele define como os filhos serão organizados: eixo principal, alinhamentos, quebra de linha e espaçamento.

Os **itens flex** são os filhos diretos desse contêiner. Eles passam a obedecer às regras do Flexbox. Netos e outros descendentes não viram itens do contêiner automaticamente; eles só são afetados pelo que o próprio filho faz com eles.

Exemplo: em `<nav><ul><li>...</li></ul></nav>`, se `nav` tiver `display: flex`, o `ul` é o item. Os `li` não são itens de `nav`.

### 14. Disposição de A, B e C no código dado

Os três elementos ficam **um abaixo do outro**, na ordem em que aparecem no HTML.

O motivo é o `flex-direction: column`, que transforma o eixo principal em vertical. Com `height: 300px` no contêiner, existe um espaço vertical definido. O `justify-content: center` então distribui o conjunto no centro desse eixo. O resultado é um bloco de três elementos centralizado verticalmente dentro de uma caixa de 300px.

### 15. Removendo `flex-direction: column`

Sem a declaração, o valor padrão `row` passa a valer. Os três filhos tentam ficar **lado a lado**, na horizontal.

Como `flex-wrap` tem o valor padrão `nowrap`, eles não quebram para uma segunda linha. Com `width: 300px` no contêiner e três itens largos, o navegador tenta reduzir a largura de cada um. Se o conteúdo não puder encolher abaixo de um tamanho mínimo, por exemplo por causa de uma palavra longa, o item estoura o contêiner e aparece uma barra de rolagem horizontal ou sobreposição.

O `height: 300px` continua válido, mas agora `justify-content: center` atua na horizontal.

### 16. Comparação entre `justify-content` e `align-items`

**(a) Com `flex-direction: row`:**
- `justify-content` atua no eixo principal, que é horizontal.
- `align-items` atua no eixo cruzado, que é vertical.

**(b) Com `flex-direction: column`:**
- Os eixos trocam de orientação.
- `justify-content` passa a atuar na vertical.
- `align-items` passa a atuar na horizontal.

Regra de memória: `justify-content` sempre segue `flex-direction`, e `align-items` sempre é perpendicular a ela.

### 17. Por que `align-content: center` não centraliza com uma linha

Com `flex-wrap: nowrap` e uma única linha, o contêiner tem somente uma faixa no eixo cruzado. `align-content` distribui **linhas** dentro desse espaço, e não há várias linhas para distribuir.

Para que `align-content` tenha efeito, são necessárias três condições:
1. `flex-wrap: wrap` (ou `wrap-reverse`), para que os itens possam formar mais de uma linha.
2. Itens que realmente gerem mais de uma linha, por causa do espaço disponível.
3. Espaço livre no eixo cruzado, geralmente com uma altura definida no contêiner.

Para centralizar um item em uma única linha no eixo cruzado, use `align-items: center` no contêiner, e não `align-content`.

### 18. `gap` no contêiner ou `margin-right` nos itens

`gap: 16px` cria exatamente 16px entre cada par de itens. O espaço não aparece nas bordas externas.

`margin-right: 16px` aplicado em cada item cria 16px depois de cada um, inclusive do último. Isso causa dois problemas típicos:
- **Espaço sobrando no fim:** o último item fica deslocado, e a linha não fica alinhada com o restante da página.
- **Layout frágil:** quando os itens quebram de linha, a margem do último item de uma linha continua ali, e o alinhamento visual se desfaz.

O `gap` resolve os dois casos e é mais simples de manter.

---

## Parte C: Prática

### 19. Menu horizontal

```css
.menu {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 0;
  padding: 0;
  list-style: none;
}
```

**Explicação:**
- `display: flex` coloca os `li` lado a lado.
- `gap: 12px` cria 12px entre os itens.
- `align-items: center` alinha os itens verticalmente ao centro.
- `margin: 0`, `padding: 0` e `list-style: none` removem o recuo e os marcadores padrão da lista.

### 20. Galeria com quebra de linha

```css
.galeria {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
```

**Explicação:**
- `flex-wrap: wrap` permite que os cards passem para a linha de baixo quando não couberem.
- `gap: 16px` define 16px tanto entre as colunas quanto entre as linhas.

### 21. Card centralizado na tela

```css
.pagina {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
```

**Explicação:**
- `min-height: 100vh` faz a página ocupar pelo menos a altura da janela.
- `justify-content: center` centraliza o card horizontalmente.
- `align-items: center` centraliza verticalmente.

### 22. Layout em coluna

```css
.pagina {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
```

**Explicação:**
- `flex-direction: column` empilha `header`, `main` e `footer` de cima para baixo.
- `gap: 8px` cria 8px entre cada seção, sem espaço nas bordas.

### 23. Barra de ferramentas

```css
.toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
```

**Explicação:**
- `space-between` coloca o primeiro grupo no início, o último no fim e distribui o espaço entre os três.
- `align-items: center` mantém os grupos alinhados verticalmente.

### 24. Faixa de cards responsiva (desafio)

**HTML:**

```html
<section class="galeria">
  <article class="card">
    <h2>Card 1</h2>
    <p>Primeiro card da galeria.</p>
  </article>
  <article class="card">
    <h2>Card 2</h2>
    <p>Segundo card da galeria.</p>
  </article>
  <article class="card">
    <h2>Card 3</h2>
    <p>Terceiro card da galeria.</p>
  </article>
  <article class="card">
    <h2>Card 4</h2>
    <p>Quarto card da galeria.</p>
  </article>
</section>
```

**CSS:**

```css
.galeria {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  align-content: flex-start;
  gap: 1rem;
}

.card {
  width: 14rem;
  max-width: 100%;
  padding: 1rem;
  border: 1px solid #d8deea;
  border-radius: 0.5rem;
  box-sizing: border-box;
}
```

**Explicação:**
- `flex-wrap: wrap` faz os cards quebrarem para a linha de baixo em telas estreitas.
- `gap: 1rem` mantém o espaçamento entre cards, na horizontal e na vertical.
- `align-items: stretch` faz os cards de uma mesma linha terem a mesma altura visual.
- `align-content: flex-start` agrupa as linhas no topo do contêiner quando há duas ou mais.
- `max-width: 100%` impede que um card seja maior que a tela em um celular.
- `box-sizing: border-box` faz o padding e a borda entrarem na largura de 14rem, o que facilita o cálculo.

---

## Resumo rápido

| Propriedade | Atua em | Função |
|---|---|---|
| `display: flex` | Contêiner | Ativa o Flexbox |
| `flex-direction` | Contêiner | Define o eixo principal |
| `justify-content` | Contêiner | Distribui no eixo principal |
| `align-items` | Contêiner | Alinha no eixo cruzado |
| `align-content` | Contêiner | Distribui as linhas no eixo cruzado |
| `flex-wrap` | Contêiner | Permite quebra de linha |
| `gap` | Contêiner | Espaço entre itens |
