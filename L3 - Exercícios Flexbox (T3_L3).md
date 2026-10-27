# Lista 01: CSS Flexbox (Parte 1)

**Disciplina:** Desenvolvimento Web I
**Professor:** Hewerton Enes de Oliveira

## Parte A: Múltipla escolha

### 1. Alternativa (b)

A propriedade `display: flex` vai no contêiner, ou seja, no elemento pai. A partir disso, os filhos diretos passam a ser itens flex e podem ser organizados com as propriedades do Flexbox.

### 2. Alternativa (c)

O valor padrão de `flex-direction` é `row`. Com ele, os itens ficam organizados em uma linha, na horizontal.

### 3. Alternativa (b)

Quando usamos `flex-direction: row`, o eixo principal é horizontal e segue da esquerda para a direita na direção de escrita padrão.

### 4. Alternativa (b)

Com `flex-direction: column`, os itens ficam em coluna e o eixo principal passa a ser vertical. Por isso, `justify-content` distribui os itens verticalmente.

### 5. Alternativa (c)

A propriedade `align-items` alinha os itens no eixo cruzado. Quando a direção é `row`, esse eixo é vertical.

### 6. Alternativa (c)

O valor padrão de `align-items` é `stretch`. Isso faz com que os itens se estiquem no eixo cruzado para ocupar o espaço disponível, desde que suas dimensões não impeçam esse comportamento.

### 7. Alternativa (b)

`justify-content: space-between` deixa o primeiro item no início do contêiner e o último no final. O espaço que sobra é distribuído entre os itens, sem ser colocado nas extremidades.

### 8. Alternativa (b)

`flex-wrap: wrap` permite que os itens passem para a linha seguinte quando não houver espaço suficiente para mantê-los na mesma linha.

### 9. Alternativa (b)

`align-content` organiza as linhas do Flexbox no eixo cruzado. Para ter efeito, é preciso permitir a quebra dos itens e formar mais de uma linha; também deve existir espaço livre para distribuir.

### 10. Alternativa (b)

`gap` define o espaço entre os itens sem acrescentar, por si só, espaço nas bordas do contêiner. Com margens em cada item, pode acabar sobrando espaço depois do último elemento.

### 11. Alternativa (c)

Com `flex-direction: row-reverse`, a direção visual dos itens é invertida no eixo horizontal: eles aparecem da direita para a esquerda. Isso não altera a ordem dos elementos no HTML.

### 12. Alternativa (a)

`justify-content: center` centraliza os itens no eixo principal, enquanto `align-items: center` os centraliza no eixo cruzado. Com `flex-direction: row`, a combinação centraliza o conteúdo horizontal e verticalmente.

## Parte B: Dissertativas e análise de código

### 13. Diferença entre contêiner flex e item flex

O contêiner flex é o elemento que recebe `display: flex`. Os filhos diretos desse elemento se tornam itens flex e passam a ser organizados de acordo com as regras do Flexbox. Elementos que estão dentro desses filhos não viram itens do contêiner principal automaticamente.

### 14. Como A, B e C ficam dispostos?

Os elementos A, B e C ficam um abaixo do outro, seguindo a ordem em que aparecem no HTML. Isso acontece porque `flex-direction: column` organiza os itens verticalmente. Como o contêiner tem 300 px de altura e `justify-content: center`, o conjunto fica centralizado na vertical.

### 15. O que muda quando `flex-direction: column` é removido?

Sem essa propriedade, o valor padrão é `row`, então os três filhos tentam ficar lado a lado. Como o valor padrão de `flex-wrap` é `nowrap`, eles não passam para outra linha. O navegador tenta reduzir a largura dos itens para fazê-los caber; se isso não for possível por causa do tamanho mínimo ou do conteúdo, pode ocorrer transbordamento horizontal.

### 16. Diferença entre `justify-content` e `align-items`

**(a) Com `flex-direction: row`:** `justify-content` atua no eixo principal horizontal, distribuindo os itens na horizontal. `align-items` atua no eixo cruzado vertical, alinhando os itens na vertical.

**(b) Com `flex-direction: column`:** os eixos mudam de orientação. `justify-content` passa a atuar na vertical, enquanto `align-items` atua na horizontal.

### 17. Por que `align-content: center` não funciona com uma única linha?

Com `flex-wrap: nowrap`, os itens ficam em uma única linha. Nesse caso, `align-content` não tem várias linhas para organizar e, por isso, não produz o efeito esperado. Para funcionar, é necessário permitir a quebra com `flex-wrap: wrap` ou `wrap-reverse`, formar mais de uma linha e ter espaço livre no eixo cruzado.

### 18. Diferença entre `gap: 16px` e `margin-right: 16px`

`gap: 16px` cria um espaço de 16 px entre os itens. Já `margin-right: 16px` coloca uma margem à direita de cada item, inclusive do último, o que pode deixar um espaço extra no final. O `gap` também facilita a manutenção do layout quando os itens mudam de posição ou quebram para outra linha.

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

`display: flex` deixa os itens lado a lado, `gap` cria 12 px entre eles e `align-items: center` os alinha verticalmente. As demais regras removem o recuo e os marcadores padrão da lista.

### 20. Galeria com quebra de linha e espaçamento

```css
.galeria {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
```

`flex-wrap: wrap` permite que os cards passem para outra linha quando faltar espaço. O `gap` define 16 px tanto entre as colunas quanto entre as linhas.

### 21. Centralizar um `.card` no meio da tela

```css
.pagina {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
```

A página ocupa pelo menos a altura da tela. `justify-content` e `align-items` centralizam o card nos dois eixos.

### 22. Layout em coluna com 8 px entre as seções

```css
.pagina {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
```

`flex-direction: column` empilha o `header`, o `main` e o `footer` de cima para baixo. O `gap` cria 8 px entre cada seção.

### 23. Barra de ferramentas com três grupos

```css
.toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
```

Considerando os três grupos como filhos diretos de `.toolbar`, `space-between` mantém o primeiro no início e o último no final, distribuindo o espaço restante entre os grupos.

### 24. Faixa responsiva com quatro cards

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

`flex-wrap: wrap` permite que os cards mudem para a linha seguinte em telas estreitas. `gap: 1rem` mantém o espaçamento entre eles. `align-items: stretch` deixa os cards com a mesma altura dentro de cada linha, e `align-content: flex-start` mantém as linhas agrupadas no topo do contêiner.
