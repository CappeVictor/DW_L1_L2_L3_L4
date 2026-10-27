# Respostas: Lista de Exercícios, CSS Flexbox (parte 1)

Desenvolvimento Web I · Técnico Integrado em Informática para Internet · Prof. Hewerton Enes de Oliveira

## Parte A: Múltipla escolha

1. **(b)** A propriedade `display: flex` é aplicada no contêiner (pai), cujos filhos diretos se tornam itens flex.
2. **(c)** O valor padrão de `flex-direction` é `row`.
3. **(b)** Com `flex-direction: row`, o eixo principal é horizontal, da esquerda para a direita.
4. **(b)** Com `flex-direction: column`, o eixo principal passa a ser vertical, então `justify-content` distribui os itens na vertical.
5. **(c)** `align-items` alinha os itens ao longo do eixo cruzado.
6. **(c)** O valor padrão de `align-items` é `stretch`.
7. **(b)** `space-between` coloca o primeiro item no início, o último no fim, e distribui o espaço somente entre eles.
8. **(b)** `flex-wrap: wrap` permite que os itens quebrem para a linha seguinte quando não cabem.
9. **(b)** `align-content` só tem efeito visível com `flex-wrap: wrap` (ou `wrap-reverse`) e mais de uma linha.
10. **(b)** `gap` define o espaço entre os itens, sem criar espaço extra nas bordas externas do contêiner.
11. **(c)** Com `flex-direction: row-reverse`, a ordem visual é invertida no eixo horizontal, da direita para a esquerda. A ordem no HTML não muda.
12. **(a)** `justify-content: center` centraliza no eixo principal, e `align-items: center` centraliza no eixo cruzado.

## Parte B: Dissertativas e análise de código

### 13. Contêiner flex e item flex

O **contêiner** é o elemento que recebe `display: flex`. Os **itens** são os filhos diretos dele, e passam a ser organizados pelas regras do Flexbox. Netos e outros descendentes não viram itens automaticamente.

### 14. Disposição de A, B e C

Os elementos ficam um abaixo do outro, na ordem do HTML, porque `flex-direction: column` organiza os itens na vertical. Com `height: 300px` e `justify-content: center`, o conjunto fica centralizado verticalmente dentro do contêiner.

### 15. Removendo `flex-direction: column`

Sem essa propriedade, o valor padrão `row` faz os três filhos tentarem ficar lado a lado. Como `flex-wrap` tem o valor padrão `nowrap`, eles não quebram para outra linha. O navegador reduz a largura dos itens para tentar caber; se não conseguir, por causa do tamanho mínimo ou do conteúdo, ocorre transbordamento horizontal.

### 16. `justify-content` e `align-items`

**(a) Com `flex-direction: row`:** `justify-content` atua no eixo principal (horizontal), e `align-items` atua no eixo cruzado (vertical).

**(b) Com `flex-direction: column`:** os eixos trocam de orientação. `justify-content` passa a atuar na vertical, e `align-items` passa a atuar na horizontal.

### 17. Por que `align-content: center` não funciona com uma linha

Com `flex-wrap: nowrap` e uma única linha, `align-content` não tem várias linhas para organizar, então não produz efeito. Para funcionar, é preciso usar `flex-wrap: wrap` (ou `wrap-reverse`), formar mais de uma linha e ter espaço livre no eixo cruzado.

### 18. `gap` no contêiner ou `margin-right` nos itens

`gap: 16px` cria 16px apenas entre os itens. `margin-right: 16px` aplica margem a cada item, inclusive ao último, o que deixa um espaço extra no final. Um problema típico da margem é esse espaço sobrando na borda, além de o layout ficar mais difícil de manter quando os itens quebram de linha.

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

### 20. Galeria com quebra de linha

```css
.galeria {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
```

### 21. Card centralizado na tela

```css
.pagina {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
```

### 22. Layout em coluna

```css
.pagina {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
```

### 23. Barra de ferramentas

```css
.toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
```

### 24. Faixa de cards (desafio)

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

`flex-wrap: wrap` faz os cards quebrarem em telas estreitas. `gap: 1rem` mantém o espaçamento. `align-items: stretch` iguala a altura dos cards dentro de cada linha, e `align-content: flex-start` agrupa as linhas no topo do contêiner.
