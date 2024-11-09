# 🖱 mouse-html

⚡ A simple and lightweight npm package for giving your elements click and hover functionality right in your html.


## 🌍 Installation

Paste this right in your html:
```html
<script src="https://unpkg.com/mouse-html@1.0.0/index.js" type="module" defer></script>
```

## 🚀 Features

Add a `mouse-click` or `mouse-hover` attribute to your html element:

```html
<button mouse-hover=".box">Show Div</button>
```

The value inside the attribute is the `document.queryselector()` property, and selects the DOM element that matches:

```html
<button mouse-hover=".box">Show Div</button>
<div class="box">just a div</div>
```

A hidden class (display: none) automatically gets added to the element specified in the attributes.

