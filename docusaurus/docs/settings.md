---
id: settings
title: Settings
---
[![Edit documentation](https://img.shields.io/badge/GITHUB-edit%20doc-green.svg)](https://github.com/DanielJohnsson87/raket-factory/blob/master/docusaurus/docs/settings.md)
[![View source](https://img.shields.io/badge/GITHUB-view%20source-green.svg)](https://github.com/DanielJohnsson87/raket-factory/tree/master/dionysos)

Vi har samlat Dionysos grundläggande inställningar i filen `base/_settings.scss`.
Variablerna finns tillgängliga i samtliga .scss-filer och bör användas i så stor mån det är möjligt.

Grundtanken i Dionysos är att typografin är det viktigaste elementet på hemsidan och att designen på övriga element därför
bör utgå ifrån den.


## Basvärden
Basvärdena definerar vilka värden som används för att beräkna textstorlekar, line-height, avstånd och dyl.
Variablen `$base` används i merparten av alla beräkningar som ska vara knutna till typografin.
`$base` definerar exempelvis default-textstorleken på hemsidan men används också för att multiplicera fram rubrikstorlekar
och definera gutter/avstånd mellan element i gridet.

`$scale` används bland annat för att räkna fram hur typografin ska skala, dvs hur stora stegen är mellan en textstorlek och en annan.
Med `$scale: 1.4` och `$base: 16px` skulle exempelvis stegen mellan textstorlekarna vara `16px`, `22.4px`, `31.36px`, `43.904px`.
(Textstorlek = $base * $scale^n. Där `n` är antal steg)

```scss
/////////////////////////////////
// Base values
/////////////////////////////////
$base: 16px;
$scale: 1.4;
```

## Typografi
Variablerna `$font-primary` & `$font-secondary` används för att definera typsnitt för rubriker och brödtext.
Det finns även variabler för att justera line-height för de olika typsnitten. Dionysos använder sig av [ex-enheten](https://www.w3schools.com/cssref/css_units.asp)
för de webbläsare som har stöd för den. Poängen med ex-enheten är att typsnittens x-höjd skiljer sig mellan typsnitt och detta påverkar typografin.
Med ex-enheten får vi mer kontroll över detta.

Textstorlekarna beräknas utifrån basvärdena ovan. Varje steg beräknas enligt följande formler:

`Större textstorlek = $base * $scale^n`

`Mindre textstorlek = $base / $scale^n`

För att kunna göra dessa beräkningar i Sass används ett mixin i `mixins/_math.scss` för att räkna fram `$scale`-variabelns potens (Dvs. 1.5 uphöjt till 2 osv.)


```scss
/////////////////////////////////
// Typography
/////////////////////////////////
$font-primary: sans-serif;
$font-secondary: serif;

$line-height-base: 1.5;
$line-height-heading: 1;

$font-size-xxl: $base * pow($scale, 4);
$font-size-xl: $base * pow($scale, 3);
$font-size-l: $base * pow($scale, 2);
$font-size-base: $base;
$font-size-s: $base / pow($scale, 2);
$font-size-xs: $base / pow($scale, 3);
```

## Avstånd
Avståndsvariablerna beräknas på samma sätt som fontstorlekarna.

```scss
/////////////////////////////////
// Spacing
/////////////////////////////////
$spacing-xxl: $base * pow($scale, 4);
$spacing-xl: $base * pow($scale, 3);
$spacing-l: $base * pow($scale, 2);
$spacing-base: $base;
$spacing-s: $base / pow($scale, 1);
$spacing-xs: $base / pow($scale, 2);
```

## Layout
`$paragraph-width` definerar maxbredden på ett \<p\>-element. Variabeln bör används på alla ställen där löpande text visas.

`$max-width` definerar sidans maxbredd.

`$gutter` definerar avståndet mellan varje element i gridet.

```scss
/////////////////////////////////
// Layout
/////////////////////////////////
$paragraph-width: $base * 30; //480
$max-width: $paragraph-width * 3; //1440
$gutter: $base;
```

## Breakpoints
Följande brytpunkter används i Dionysos. De påverkar bland annat grid och marginaler.

```scss
/////////////////////////////////
// Breakpoints
/////////////////////////////////
$mq-desktop-large-up: min-width 1440px;
$mq-tablet-landscape-down: max-width 1024px;
$mq-tablet-landscape-below: max-width 1023px;
$mq-tablet-portrait-down: max-width 768px;
$mq-tablet-portrait-below: max-width 767px;
$mq-mobile-down: max-width 480px;
```

## Färger
`$color-negative` används exempelvis när en negativ textfärg behövs.

`$color-primary` Projektets primära färg, används bland annat som länkfärg och till primära knappar.

`$color-secondary` Projektets sekundära färg, används som accentfärg.


```scss
/////////////////////////////////
// Colors
/////////////////////////////////
$color-base: #102650;
$color-negative: #fff;
$color-primary: #8186F7;
$color-secondary: #BFE9AA;

$color-border: #d6d6d6;
$color-input-bg: #efefef;
$color-invalid: #cc0000;
$color-success: #58cc5e;
```

## Övrigt
`$border-radius-base` definerar ett defaultvärdet för border radius för hela projektet.

```scss
/////////////////////////////////
// Misc
/////////////////////////////////
$border-radius-base: 3px;
```
