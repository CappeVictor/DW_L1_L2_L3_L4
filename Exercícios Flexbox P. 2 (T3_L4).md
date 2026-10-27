# Estudo Dirigido: CSS Flexbox (parte 2)

Desenvolvimento Web I · Técnico Integrado em Informática para Internet · Prof. Hewerton Enes de Oliveira

## 1. Revisão da parte 1

1. O **contêiner** é o elemento pai, que recebe o `display: flex`. Os **itens** são os filhos diretos. O `display: flex` é escrito no **contêiner**.
2. Sem `flex-direction`, o valor padrão é `row`. O eixo principal é horizontal e vai da esquerda para a direita.

## 2. Crescer: flex-grow

3. A **sobra** é o espaço livre na faixa depois que os itens ocupam seu tamanho de partida. Se todos têm `flex-grow: 0`, ninguém cresce, e a sobra não é distribuída.
4. O valor padrão de `flex-grow` é **0**, o que significa que o item **não cresce**.
5. Na analogia da pizza: a **mesa** é a faixa (contêiner), o **prato** é cada item, a **sobra** é o espaço livre na mesa, e o **peso do flex-grow** é a fatia que cada item recebe da sobra, proporcional ao seu peso.
6. Use `flex-grow: 1` no **item marca**, não no contêiner da barra. Os links mantêm `flex-grow: 0`, então ficam do tamanho do texto.
7. Base 0, faixa de 600px, pesos 2, 3 e 1:
   - Soma dos pesos: 2 + 3 + 1 = 6
   - Valor de uma parte: 600 ÷ 6 = 100px
   - Resultado: item 1 = 200px; item 2 = 300px; item 3 = 100px
8. Três itens com `flex-basis: 100px` somam 300px, sobrando 300px na faixa de 600px.
   - Soma dos pesos: 0 + 1 + 2 = 3
   - Valor de uma parte: 300 ÷ 3 = 100px
   - Larguras finais: 100px, 200px e 300px
   - Conferência: 100 + 200 + 300 = 600px

## 3. Encolher: flex-shrink

9. O `flex-shrink` entra em ação quando **falta** espaço. O valor padrão é **1**.
10. Os itens somam 800px e a faixa tem 600px, faltando **200px**. Cada um encolhe 100px, ficando com **300px**.
11. Com `flex-shrink: 0` no primeiro item, ele mantém 400px, e o segundo fica com 200px. **Sim, o conjunto cabe na faixa** (400 + 200 = 600px).
12. Exemplo: o **logotipo** de um cabeçalho. Se encolher, fica distorcido. Outros exemplos são a **foto de avatar** e o **ícone de botão**, que precisam manter a proporção.

## 4. Tamanho de partida e atalho flex

13. O `flex-basis` é o **tamanho de partida** do item, antes de crescer ou encolher, e tem prioridade sobre `width`. Como 10rem = 160px, vale **160px**, não os 200px do `width`.
14. Com `flex-basis: 0`, nenhum espaço é reservado antes da distribuição, então **toda** a faixa vira sobra. Com `auto`, o conteúdo de cada item reserva espaço antes, e a sobra é menor.
15. Tabela de equivalência:

| Atalho | grow | shrink | basis |
|---|---|---|---|
| flex: initial | 0 | 1 | auto |
| flex: 1 | 1 | 1 | 0 |
| flex: auto | 1 | 1 | auto |
| flex: none | 0 | 0 | auto |

16. Itens de 100px e 300px, faixa de 600px:
    - **flex: 1** (basis 0): sobra de 600px, cada item recebe 300px. Resultado: **300px e 300px**.
    - **flex: auto** (basis = conteúdo): partidas somam 400px, sobram 200px, divididos igualmente. Resultado: **200px e 400px**.

    Os resultados diferem porque o `flex-basis` muda a base da qual a sobra é calculada.

17. **Falso, em geral.** Com conteúdos idênticos, sem padding e sem palavras longas, os dois dão o mesmo resultado. Com conteúdos diferentes (como na questão 16), o resultado muda.

## 5. O mínimo que trava o encolhimento

18. A propriedade é o `min-width: auto`, padrão dos itens flex. Ela impede que o item encolha abaixo do tamanho mínimo do conteúdo. Para soltar, use `min-width: 0`.
19. Esperaria ver o problema no `main` ao lado de um `aside`, quando o texto tem uma URL longa, código ou uma palavra sem espaços. O texto estoura a coluna.

## 6. order e align-self

20. (a) Ordem na tela: **C, A, B**.
    (b) Ordem de foco com Tab: **A, B, C**, pois o Tab segue o HTML.
    (c) Leitores de tela leem na ordem do HTML. Se a ordem visual for diferente, a leitura fica confusa.
21. O valor padrão de `order` é **0**. Entre `-1` e `2`, aparece **primeiro o de -1**.
22. Com `align-self: flex-end`, o item vai para a **parte de baixo** da linha. Com `align-self: auto`, ele herda o `align-items: stretch` do pai e **estica** até a altura da linha.
23. Use `align-items` no contêiner para alinhar **todos** os itens. Use `align-self` em um item específico.

## 7. A página com miolo

24. Itens de `.pagina`: **header**, **.miolo** e **footer**. Itens de `.miolo`: **aside** e **main**.
25. O `.miolo` é item de `.pagina` e, ao mesmo tempo, contêiner de `aside` e `main`, por isso precisa de `display: flex`.
26.
    - `.pagina`: empilha header, miolo e footer na vertical, com altura mínima de tela inteira.
    - `.miolo`: coloca menu e texto lado a lado e cresce para ocupar o espaço vertical que sobra.
    - `aside { flex: 0 0 10rem; }`: o menu não cresce nem encolhe, mantendo 10rem de largura.
    - `main { flex: 1; min-width: 0; }`: o texto ocupa o espaço restante e pode encolher abaixo do tamanho do conteúdo.

## 8. Erros comuns e síntese

27. O erro é aplicar `flex-grow` no **contêiner**. A correção é aplicá-lo nos **itens** que devem crescer.
28. Duas formas de resolver um item que estoura a faixa:
    - `min-width: 0` no item com conteúdo flexível (como o `main`), quando o conteúdo deve encolher.
    - `flex-shrink: 0` no item que não deve encolher (como um logotipo), quando outro item deve absorver a falta.
29. Resumo:
    - **flex-basis:** tamanho de partida do item.
    - **flex-grow:** fatia da sobra que o item recebe.
    - **flex-shrink:** parte da falta que o item absorve.
    - **order:** ordem visual dos itens, sem mudar o HTML.
    - **align-self:** alinhamento de um item específico no eixo transversal.
