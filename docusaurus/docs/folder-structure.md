---
id: folder-structure
title: Filstruktur
---

[![Edit documentation](https://img.shields.io/badge/GITHUB-edit%20doc-green.svg)](https://github.com/DanielJohnsson87/raket-factory/blob/master/docusaurus/docs/folder-structure.md)
[![View source](https://img.shields.io/badge/GITHUB-view%20source-green.svg)](https://github.com/DanielJohnsson87/raket-factory/tree/master/dionysos)


## SCSS - Filstruktur
I de fall det är möjligt försöker vi använda oss av en förenklad version av det så kallade [7-1 mönstret](https://sass-guidelin.es/) som SASS
förespråkar i sina guidelines. Vi har valt bort themes mappen, annars är allt det samma som i "The 7-1 Pattern".
  
  
```
sass/
|
|– abstracts/
|   |– _variables.scss    # Sass Variables
|   |– _functions.scss    # Sass Functions
|   |– _mixins.scss       # Sass Mixins
|   |– _placeholders.scss # Sass Placeholders
|
|– base/
|   |– _reset.scss        # Reset/normalize
|   |– _typography.scss   # Typography rules
|   …                     # Etc.
|
|– components/
|   |– _buttons.scss      # Buttons
|   |– _carousel.scss     # Carousel
|   |– _cover.scss        # Cover
|   |– _dropdown.scss     # Dropdown
|   …                     # Etc.
|
|– layout/
|   |– _navigation.scss   # Navigation
|   |– _grid.scss         # Grid system
|   |– _header.scss       # Header
|   |– _footer.scss       # Footer
|   |– _sidebar.scss      # Sidebar
|   |– _forms.scss        # Forms
|   …                     # Etc.
|
|– pages/
|   |– _home.scss         # Home specific styles
|   |– _contact.scss      # Contact specific styles
|   …                     # Etc.

|– vendors/
|   |– _bootstrap.scss    # Bootstrap
|   |– _jquery-ui.scss    # jQuery UI
|   …                     # Etc.
|
`– main.scss              # Main Sass file

```

## JavaScript - Filstruktur
Todo...