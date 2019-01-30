---
id: grid
title: Grid
---
[Open in Codesandbox](https://codesandbox.io/s/github/DanielJohnsson87/raket-factory/tree/dionysos-grid-example/dionysos)

[Go to GitHub](https://github.com/DanielJohnsson87/raket-factory/tree/master/dionysos)

Dionysos använder SASS-biblioteket [Bourbon Neat](https://neat.bourbon.io/) för att generera gridsystem.
Vill du modifiera eller bygga vidare på gridet kan du läsa mer i deras [documentation](https://neat.bourbon.io/docs/latest/). 

För att hålla gridet så enkelt som möjligt och göra det enklare att anpassa efter olika ändamål har Dionysos enbart ett ganska avskalat grid. Det är uppdelat i 12 kolumner och följer syntaxen .col-{x} där x ersätts av hur många kolumner brett elementet ska vara. Exempelvis .col-3 för ett element som täcker 1/4 av ytan och .col-6 för ett som täcker 1/2 ytan. 

## Syntax
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


### Exempel - Halvor

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

### Exempel - Tredjedelar 

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

## Modifiera gridet

### Exempel - ändra avstånd (gutter) mellan kolumnerna
`base/_settings.scss`
```scss 
$gutter: $base; // Ändra för att justera gutter
```

### Exempel - ändra antal kolumner i gridet
`base/_layout.scss`
```scss 
$custom-grid: (
        columns: 12, // Ändra antal kolumner
        gutter: $gutter, // Ändra gutter
);

```


## Responsivitet
//TODO: Lägg till regler och dokumentation över breakpoints
