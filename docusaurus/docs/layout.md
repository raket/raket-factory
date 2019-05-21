---
id: layout
title: Layout
---
[![Edit @raketwebbyra/dionysos-typography-demo](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/DanielJohnsson87/raket-factory/tree/dionysos-layout-example/dionysos)
[![Edit documentation](https://img.shields.io/badge/GITHUB-edit%20doc-green.svg)](https://github.com/raket/raket-factory/blob/master/docusaurus/docs/layout.md)
[![View source](https://img.shields.io/badge/GITHUB-view%20source-green.svg)](https://github.com/raket/raket-factory/tree/master/dionysos)

I Dionysos finns en system för att hantera en hemsidas layout på ett konsekvent sätt.

---
## Syntax
Det finns tre typer av element i Dionysos layoutsystem.

### `.section`
Bör vara ett barn till body och är alltid 100% av tillgänglig bredd. `.section` hanterar det vertikala
avståndet mellan olika sektioner på hemsidan. `.section`-elementet är ett bra ställe att lägga till bakgrundfräger och bilder
som ska sträcka sig hela webbläsarens bredd. En `.section` kan innehålla flera `.container`-element.

### `.container`
Används för att hanterar midjan på sidan. `.container` har en max-bredd och är alltid horisontellt centrerad.
Maxbredden går att justera med den globala variablen `$max-width` i `utilities/_settings.scss`. En `.container` kan innehålla flera `.component`-element.

### `.component`
Är det minsta men också mest mångsidiga layoutelementet. I stort sett är allting som ryms i ett `.container`-element
en `.component`. Den enda regeln för ett `.component`-element är att det själv är ansvarigt för att hålla avståndet till tidigare elementet.
Dvs. en `.component` måste ha ett `margin-bottom` eller `margin-top`-värde. En komponent behöver nödvändigtvis inte använda `.component`-classen,
så länge elementet håller avstånd till andra komponenter med `margin-top / margin-bottom`.  


### Exempel - Illustration
![Layout illustration](https://raw.githubusercontent.com/DanielJohnsson87/raket-factory/master/docusaurus/docs/assets/layout-illustration.PNG)

### Exempel - Markup
```html
<body>
    <header>
    ...
    </header>

    <section class="section">
        <div class="container">
            <div class="component">
                ...
            </div>
        </div>
    </section>

    <section class="section">
        <div class="container">
            <div class="component">
                    ...
            </div>
        </div>
    </section>

    <footer>
    ...
    </footer>
</body>
```

### Exempel - Scss
```scss
.section {
    padding: $spacing-xxl 0;

    // The first section needs som extra spacing
    &:first-of-type {
        margin-top: $spacing-xxl;
    }
    ...
}

.container {
    width: 100%;
    max-width: $max-width;
    margin: 0 auto;
    padding: 0 $gutter;
    ...
}


.component {
    margin-bottom: $spacing-l;
}

```
