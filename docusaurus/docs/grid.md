---
id: grid
title: Grid
---
[Open in Codesandbox](https://codesandbox.io/s/github/DanielJohnsson87/raket-factory/tree/dionysos-grid-example/dionysos)

[Go to GitHub](https://github.com/DanielJohnsson87/raket-factory/tree/master/dionysos)

Dionysos använder SASS-biblioteket [Bourbon Neat](https://neat.bourbon.io/) för att generera gridsystem.
Vill du modifiera eller bygga vidare på gridet kan du läsa mer i deras [dokumentation](https://neat.bourbon.io/docs/latest/).

För att hålla gridet så enkelt som möjligt och göra det enklare att anpassa efter olika ändamål har Dionysos enbart ett ganska avskalat grid. 
Det är uppdelat i 12 kolumner och följer syntaxen `.col-{x}` där x ersätts av hur många kolumner brett elementet ska vara. 
Exempelvis `.col-3` för ett element som täcker 1/4 av ytan och `.col-6`för ett som täcker 1/2 ytan.

---
## Syntax

### Exempel - Illustration
![Layout illustration](https://raw.githubusercontent.com/DanielJohnsson87/raket-factory/master/docusaurus/docs/assets/grid-illustration.PNG)

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



## Responsivitet
Vill man modifiera gridet så går det att göra i filen `layout/_grid.scss`. 
Variablerna `$custom-grid`, `$custom-grid-md` och `$custom-grid-sm` används för att styra breakpoints, gutters och dyl.
Dessa variabler används längre ner i filen och räknar med hjälp av [Neat](https://neat.bourbon.io/) ut nya regler för gridet vid en viss brytpunkt.

### Grid - Default `.col-{x}`
Gridet används på större skärmar (1025px och uppåt).  

```html
<div class="row">
    <div class="col-4"></div>
    <div class="col-4"></div>
    <div class="col-4"></div>
</div>
```

### Grid - Medium `.col-md-{x}`
Gridet används på mellanstora skärmar (1024px och ner). 

```html
<div class="row">
    <div class="col-md-4"></div>
    <div class="col-md-4"></div>
    <div class="col-md-4"></div>
</div>
```

### Grid - Small `.col-sm-{x}`
Gridet används på mindre skärmar (480px och ner).

```html
<div class="row">
    <div class="col-sm-4"></div>
    <div class="col-sm-4"></div>
    <div class="col-sm-4"></div>
</div>
``` 

---
## Modifiera gridet


### Ändra antal kolumner eller gutter
Det går att ändra gutter, kolumner och dyl genom att andra `$custom-grid`-variablerna i `layout/_grid.scss`

`base/_grid.scss`
```scss
$custom-grid: (
  columns: 12, 
  gutter: $gutter //(Eller ändra i `base/_settings.scss` om det är en global ändring för hela projektet)
);

```
