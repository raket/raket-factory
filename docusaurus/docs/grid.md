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
Gridet kommer automatiskt att ändra antal kolumner allt eftersom att skärmstorleken ändras. I filen `base/_grid.scss` finns variablerna `$custom-grid--tablet-portrait-down` och `$custom-grid--mobile-down` som definerar hur gridet ska ändras vid olika brytpunkter. Dessa variabler används längre ner och räknar med hjälp av [Neat](https://neat.bourbon.io/) ut nya regler för gridet vid en viss brytpunkt. 

Om man exempelvis ändrar ett grid från 12 till 6 kolumner på en mindre skärm så kommer klasserna .col-1 till .col-6 att vara en till sex kolumner breda. Klasserna .col-7 till .col-12 kommer alla vara sex kolumner breda. 

### Exempel - 6 kolumner iPad och ner
```scss
$custom-grid--tablet-portrait-down: (
        columns: 6,
        gutter: $gutter,
        media: "(max-width: 768px)",
);
```
---
## Modifiera gridet


### Ändra antal kolumner eller gutter

`base/_grid.scss`
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


