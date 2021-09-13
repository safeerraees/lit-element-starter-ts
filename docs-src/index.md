---
layout: page.11ty.cjs
title: <apimatic-widget> ⌲ Home
---

# &lt;apimatic-widget>

`<apimatic-widget>` is an awesome element. It's a great introduction to building web components with LitElement, with nice documentation site as well.

## As easy as HTML

<section class="columns">
  <div>

`<apimatic-widget>` is just an HTML element. You can it anywhere you can use HTML!

```html
<apimatic-widget></apimatic-widget>
```

  </div>
  <div>

<apimatic-widget></apimatic-widget>

  </div>
</section>

## Configure with attributes

<section class="columns">
  <div>

`<apimatic-widget>` can be configured with attributed in plain HTML.

```html
<apimatic-widget name="HTML"></apimatic-widget>
```

  </div>
  <div>

<apimatic-widget name="HTML"></apimatic-widget>

  </div>
</section>

## Declarative rendering

<section class="columns">
  <div>

`<apimatic-widget>` can be used with declarative rendering libraries like Angular, React, Vue, and lit-html

```js
import {html, render} from 'lit-html';

const name = 'lit-html';

render(
  html`
    <h2>This is a &lt;apimatic-widget&gt;</h2>
    <apimatic-widget .name=${name}></apimatic-widget>
  `,
  document.body
);
```

  </div>
  <div>

<h2>This is a &lt;apimatic-widget&gt;</h2>
<apimatic-widget name="lit-html"></apimatic-widget>

  </div>
</section>
