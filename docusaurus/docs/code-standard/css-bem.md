---
id: css-bem
title: CSS BEM
---

[![Edit documentation](https://img.shields.io/badge/GITHUB-edit%20doc-green.svg)](https://github.com/DanielJohnsson87/raket-factory/blob/master/docusaurus/docs/code-standard/css-bem.md)
[![View source](https://img.shields.io/badge/GITHUB-view%20source-green.svg)](https://github.com/DanielJohnsson87/raket-factory/tree/master/dionysos)

1. Vi följer “Strict BEM”
    1. Endast ett “element” i varje selector. (.block__**element**—modifier)
    2. Endast en “modifier” i varje selector. (.block__element—**modifier**)
    3. Vi bryter mot BEM när det blir ett hinder.
2. Vi försöker hålla våra components små och läsbara. Växer en component allt för mycket går den kanske att bryta upp i flera små components?
3. Vi avgör själva när BEM inte passar för en modul.
4. Vi använder oss av namespaces enligt nedanstående tabell

## Namngivning

| Typ           | Prefix | Exempel         | Beskrivning  |
| ------------- |:------:|:---------------:| :-----------:|
| States        | is-    | is-visible   	 | Indikerar ett alternativt state på en modul. Exempelvis active eller selected.    |
| JS hooks      | js-    | js-toggle-menu  | Används för att visa att en css-class är bunden till en JavaScript hook.    |

## Exempel

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
[Exempel med prefix](https://www.notion.so/6b7fa01564d546369e2308214d81b045)

Airbnb’s CSS / SCSS guidelines verkar ganska bra. Kanske kan vara något?(CamelCase i selektorer kan vi strunta i, det är mer för React)

[https://github.com/airbnb/css](https://github.com/airbnb/css)

**Läs mer om BEM**

[https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/](https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/)

[https://www.smashingmagazine.com/2016/06/battling-bem-extended-edition-common-problems-and-how-to-avoid-them/](https://www.smashingmagazine.com/2016/06/battling-bem-extended-edition-common-problems-and-how-to-avoid-them/)


## Konfiguration av PHPStorm
Todo: Lägg till konfigurationsfil & guide för PHPStorm

## Konfiguration av Scss-lint
Todo: Lägg till guide för hur man får igång scss-lint