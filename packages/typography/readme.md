---
id: typography
title: Typography
---

[Open in Codesandbox](https://codesandbox.io/s/github/DanielJohnsson87/raket-factory/tree/master/packages/typography)

[Go to GitHub](https://github.com/DanielJohnsson87/raket-factory/tree/master/packages/typography)

Factory's default typography settings. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elit orci, efficitur ac ex eget, rutrum hendrerit sem. Mauris non arcu felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elit orci, efficitur ac ex eget, rutrum hendrerit sem. 


## Colors
```scss
$white: #FFFFFF;
$black: #000000;
$off-white: #EEEEEE;
$off-black: #333333;
$ghost-black: rgba($black, .1);
$ghost-white: rgba($white, .1);

$primary-color: #bd232d;
$secondary-color: #FF5D00;
```

## Font sizes
```scss
$tiny-size: 1.2rem;
$small-size: 1.6rem;
$medium-size: 2.6rem;
$large-size: 3.4rem;
$huge-size: 6.8rem;

$base-line-height: 1.5;
$heading-line-height: 1.25;
```

## Font stack
```scss
// Typography
$base-fonts: 'Helvetica Neue', Helvetica, Arial, sans-serif;
$heading-fonts: 'Helvetica Neue', Helvetica, Arial, sans-serif;
```

## Headings

Heading sizes are multiples of the `$font-base-size`. Fusce elit orci, efficitur ac ex eget, rutrum hendrerit sem. Mauris non arcu felis. 

```scss
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: $heading-fonts;
  line-height: $heading-line-height;
  margin: 0 0 $small-spacing*1.5;
  font-weight: bold;
}

h1 {
  font-size: $font-base-size * 3.125;
}

h2 {
  font-size: $font-base-size * 2.3125;
}

h3{
  font-size: $font-base-size * 1.75;
}

h4, h5, h6 {
  font-size: $font-base-size * 1.3125;
}

```

## Links
Links use the `$primary-color` as it's default color and darkens it 10% on `:hover` and `:active`.

```scss
a {
  font-weight: bold;
  text-decoration: none;
  transition: color .25s ease;
  color: $primary-color;

  &:hover,
  &:active {
    color: darken($primary-color, 10%);
  }
}
```
