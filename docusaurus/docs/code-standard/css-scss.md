---
id: css-scss
title: CSS & SCSS
---

[![Edit documentation](https://img.shields.io/badge/GITHUB-edit%20doc-green.svg)](https://github.com/raket/raket-factory/blob/master/docusaurus/docs/code-standard/css-bem.md)
[![View source](https://img.shields.io/badge/GITHUB-view%20source-green.svg)](https://github.com/raket/raket-factory/tree/master/dionysos)


## Namngivning

### Variabler & Utilityklasser
För att göra det tydligare vad en variabel css-klass fyller för funktion samt att göra det lättare att söka efter variabler
följer vi dessa regler så gott det går. 
- Det första ordet / orden beskriver vilket css attribut som påverkas. Exempelvis **font-size** i `$font-size-large`
- Nästkommande ord beskriver hur css attributet ändras. Exempelvis **primary** `$color-primary` 


### States & Hooks

| Typ           | Prefix | Exempel         | Beskrivning  |
| ------------- |:------:|:---------------:| :-----------:|
| States        | is-    | `is-visible` eller `block__element--is-visible`  	 | Indikerar ett alternativt state på en modul. Exempelvis active eller selected.    |
| JS hooks      | js-    | `js-toggle-menu`  | Används för att visa att en css-class är bunden till en JavaScript hook.    |



## BEM

1. Vi följer “Strict BEM”
    1. Endast ett “element” i varje selector. (.block__**element**—modifier)
    2. Endast en “modifier” i varje selector. (.block__element—**modifier**)
    3. Vi bryter mot BEM när det blir ett hinder.
2. Vi försöker hålla våra components små och läsbara. Växer en component allt för mycket går den kanske att bryta upp i flera små components?
3. Vi avgör själva när BEM inte passar för en modul.
4. Vi använder oss av namespaces enligt nedanstående tabell

### BEM - Exempel

```
<div class="card">
	<p class="card__preheader">Preheader</p>
 	<h3 class="card__header">Title</h3>
 	<div class="card__content">
		Content
 		<button class="card__button js-open-read-more">Read more</button>
 		<button class="card__button card__button--is-red">Read more</button>
 	</div>
</div>
```

```
.card {
	$this: &;
	&__header {
		font-size:2rem;
	}
	&__button {
		color:black;
		&--is-red {
			color:red;
		}
	}
}
```

### Läs mer om BEM

[https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/](https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/)

[https://www.smashingmagazine.com/2016/06/battling-bem-extended-edition-common-problems-and-how-to-avoid-them/](https://www.smashingmagazine.com/2016/06/battling-bem-extended-edition-common-problems-and-how-to-avoid-them/)


## Konfiguration av PHPStorm
Todo: Lägg till konfigurationsfil & guide för PHPStorm

## Konfiguration av Scss-lint
Todo: Lägg till guide för hur man får igång scss-lint
