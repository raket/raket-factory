---
id: grid
title: Grid
---

Proin aliquam, ligula sit amet vulputate rhoncus, odio diam ornare nibh, id feugiat erat purus eu magna. Quisque mattis dolor sed est iaculis, id fermentum lacus consequat. Aliquam erat volutpat. Pellentesque faucibus quis libero nec tristique. 🤖

[Open in Codesandbox](https://codesandbox.io/s/github/DanielJohnsson87/raket-factory/tree/dionysos-grid-example/dionysos)

[Go to GitHub](https://github.com/DanielJohnsson87/raket-factory/tree/master/dionysos)


| Prop          | Desc                      | Required  |
| ------------- |:-------------:            | -----:|
| text          | Button text               | Yes    |
| type          | primary / secondary       | No     |
| onClick       | callback function         | No     |

### Grid - 2 Columns preview

![Alt text](https://github.com/DanielJohnsson87/raket-factory/blob/master/packages/grid/public/grid-2.png?raw=true "Optional Title")


### Grid - 3 Columns preview

![Alt text](https://github.com/DanielJohnsson87/raket-factory/blob/master/packages/grid/public/grid-3.png?raw=true "Optional Title")

### React `Grid` example

```jsx
import Grid from './Grid'
<Grid columns={'2'}>
    <div> Item 1 </div>
    <div> Item 2 </div>
    <div> Item 3 </div>
    <div> Item 4 </div>
</Grid>
```

### Raw Html `Grid` equivalent

```html
<div class="grid grid--2">
    <div> Item 1 </div>
    <div> Item 2 </div>
    <div> Item 3 </div>
    <div> Item 4 </div>
</div>
```
