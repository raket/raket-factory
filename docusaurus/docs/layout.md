---
id: layout
title: Layout
---
[TODO: Open in Codesandbox](https://codesandbox.io/s/github/DanielJohnsson87/raket-factory/tree/dionysos-grid-example/dionysos)

[Go to GitHub](https://github.com/DanielJohnsson87/raket-factory/tree/master/dionysos)

I Dionysos finns en system för att hantera en hemsidas layout på ett konsekvent sätt.
Tanken med detta är att ....


---
## Syntax
Det finns tre typer av element i Dionysos layoutsystem.

### `.section`
Bör vara ett barn till body och är alltid 100% av tillgänglig bredd. `.section` hanterar det vertikala
avståndet mellan olika sektioner på hemsidan. `.section`-elementet är ett bra ställe att lägga till bakgrundfräger och bilder
som ska sträcka sig hela webbläsarens bredd. En `.section` kan innehålla flera `.container`-element.

### `.container`
Används för att hanterar midjan på sidan. `.container` har en max-bredd och är alltid horisontellt centrerad.
Maxbredden går att justera med den globala variablen `$max-width` i `base/_settings.scss`. En `.container` kan innehålla flera `.component`-element.

### `.component`
Är det minsta men också mest mångsidiga layoutelementet. I stort sett är allting som ryms i ett `.container`-element
en `.component`. Den enda regeln för ett `.component`-element är att det själv är ansvarigt för att hålla avståndet till tidigare elementet.
Dvs. en `.component` måste ha ett `margin-top`-värde.


### Exempel - Illustration
![Layout illustration](assets/layout-illustration.png)

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
    margin-top: $spacing-l;
}

```
