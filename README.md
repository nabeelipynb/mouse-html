# 🖱 mouse-html
### v1.0.1

⚡ A simple and lightweight npm package for giving your elements click and hover functionality right in your html.


## 🌍 Installation

Paste this right in your html:
```html
<script src="https://unpkg.com/mouse-html@1.0.1" type="module" defer></script>
```

## 🚀 Features

Add a `mouse-click` or `mouse-hover` attribute to your html element:

```html
<button mouse-hover=".box">Show Div</button>
```

The value inside the attribute is the `document.querySelector()` property, and selects the DOM element that matches:

```html
<button mouse-click=".box">Show Div</button>
<div class="box">just a div with a class</div>
```

```html
<button mouse-click="#box">Show Div</button>
<div id="box">just a div with an id</div>
```

```html
<button mouse-click="div">Show Div</button>
<div>just a div</div>
```

A hidden class `.hidden { display: none }` automatically gets added to the element specified in the attributes.

## 🔗 Links

📦 **NPM:** https://www.npmjs.com/package/mouse-html<br>
🐱‍👤 **GITHUB:** https://github.com/nabeelipynb/mouse-utils