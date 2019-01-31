---
id: grid
title: Grid
---
[Open in Codesandbox](https://codesandbox.io/s/github/DanielJohnsson87/raket-factory/tree/dionysos-grid-example/dionysos)

[Go to GitHub](https://github.com/DanielJohnsson87/raket-factory/tree/master/dionysos)

Dionysos använder SASS-biblioteket [Bourbon Neat](https://neat.bourbon.io/) för att generera gridsystem.
Vill du modifiera eller bygga vidare på gridet kan du läsa mer i deras [dokumentation](https://neat.bourbon.io/docs/latest/).

För att hålla gridet så enkelt som möjligt och göra det enklare att anpassa efter olika ändamål har Dionysos enbart ett ganska avskalat grid. Det är uppdelat i 12 kolumner och följer syntaxen .col-{x} där x ersätts av hur många kolumner brett elementet ska vara. Exempelvis .col-3 för ett element som täcker 1/4 av ytan och .col-6 för ett som täcker 1/2 ytan.

---
## Syntax

### Exempel - Illustration
![Layout illustration](assets/grid-illustration.png)

### Exempel - Markup
Varje .col-{x} måste ha en förälder med css-klassen .row.

```html
<div class="row">
	<div class="col-{x}">
        ...
    </div>
	<div class="col-{x}">
        ...
    </div>
</div>
```


### Exempel - 1/2

```html
<div class="row">
    <div class="col-6">
        ...
    </div>
    <div class="col-6">
        ...
    </div>
</div>
```

### Exempel - 1/3

```html
<div class="row">
    <div class="col-4">
        ...
    </div>
    <div class="col-4">
        ...
    </div>
    <div class="col-4">
        ...
    </div>
</div>
```


---
## Responsivitet
Här kommer ett avsnitt om responsiviteten och hur gridet beter sig.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elit orci, efficitur ac ex eget, rutrum hendrerit sem. Mauris non arcu felis. Sed sit amet dolor ultrices, auctor urna eleifend, facilisis purus. Nam pulvinar commodo lobortis. Vestibulum quis porta tellus. Donec tristique tellus vel odio pretium scelerisque. Donec a faucibus est. Fusce finibus nulla ac tellus laoreet, vitae congue orci volutpat. Morbi posuere quis magna id vulputate.

Proin aliquam, ligula sit amet vulputate rhoncus, odio diam ornare nibh, id feugiat erat purus eu magna. Quisque mattis dolor sed est iaculis, id fermentum lacus consequat. Aliquam erat volutpat. Pellentesque faucibus quis libero nec tristique.

---
## Modifiera gridet


### Ändra antal kolumner eller gutter

`base/_layout.scss`
```scss
$custom-grid: (
        columns: 12, // Ändra antal kolumner
        ...
);

```

`base/_settings.scss`
```scss
/////////////////////////////////
// Layout
/////////////////////////////////
...
$gutter: $base; // Ändra gutter i gridet
...

```


### Ändra breakpoints för responsivitet
...


