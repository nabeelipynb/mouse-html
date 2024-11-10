# 🖱 mouse-html

⚡ A simple and lightweight npm package for giving your elements click and hover functionality right in your html.


## 🌍 Installation

Paste this right in your html:
```html
<script src="https://unpkg.com/mouse-html@1.0.32" type="module" defer></script>
```

## 🚀 Features

### 🖱 Mouse Click and Hover

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

### ✨ Mouse Swap

Add a `mouse-swap` attribute to your html element:

```html
<button mouse-swap=".box">Show Div</button>
```

This attribute creates a swapping relationship between the element with the attribute and the element specified inside the attribute:

```html
<button mouse-swap="#box">Click me to hide me, and show the div</button>
<div id="box">Click Me to hide me, and show the button</div>
```

The element that has then `mouse-swap` attribute is initially visible, while the element specified in the attributes is initially hidden.

### 🎉 Animations

You can add a `mouse-animation` attribute to an element in the DOM:

```html
<div class="box" animation="fade">just a div with animation</div>
```

This adds an CSS animation effect to the element, which applies to the element only when it *appears* in the DOM. You can add this attribute to any element or combine with the other attributes. By default each animation has its own animation-timing ehich cannot be changed. The animation effects currently available are:<br>

1. fade

You can also create your own custom CSS animations:

```html
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

## 🔗 Links

📦 **NPM:** https://www.npmjs.com/package/mouse-html<br>
🐱‍👤 **GITHUB:** https://github.com/nabeelipynb/mouse-utils