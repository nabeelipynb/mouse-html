# 🖱 mouse-html

⚡ A simple and lightweight npm package for giving your elements click and hover functionality right in your html.


## 🌍 Installation

Paste this right in your html:
```html
<script src="https://unpkg.com/mouse-html@1.0.2" type="module" defer></script>
```

## 🚀 Features

### 🖱 Mouse Effects

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

### 🎉 Animations

Add an `animation` attribute to the element that is being reffered to in the attribute:

```html
<button mouse-hover=".box">Click me</button>
<div class="box" animation="fade">just a div with animation</div>
```

This adds an CSS animation effect to the element. The animation effects currently available are:<br>

1. fade

You can also create your own custom CSS animations such as:

```html
<button mouse-hover=".box">Click me</button>
<div class="box" animation="spring">just a div with animation</div>
```

```css
@keyframes spring {
    0% {
        transform: scale(1);
    }
    30% {
        transform: scale(1.2);
    }
    50% {
        transform: scale(0.9);
    }
    70% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
}

.spring {
  animation: spring 0.6s cubic-bezier(0.5, 1.5, 0.5, 1) forwards;
}
```
🚦 **Note:** The animation only applies to the element when it **appears** in the DOM. By default the animation-duratio is set to `0.25s`.

## 🔗 Links

📦 **NPM:** https://www.npmjs.com/package/mouse-html<br>
🐱‍👤 **GITHUB:** https://github.com/nabeelipynb/mouse-utils