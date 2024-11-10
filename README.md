
# 🖱 mouse-html

⚡ A simple, lightweight npm package for adding click and hover functionality to your HTML elements. This package allows you to create basic dropdowns or sidebars directly in your HTML without needing to write a single line of JavaScript.

## 🌍 Installation

Add this script to your HTML:

```html
<script src="https://unpkg.com/mouse-html@1.1.3" type="module" defer></script>
```

## 🚀 Features

### 🖱 Mouse Click and Hover

Add a `mouse-click` or `mouse-hover` attribute to an HTML element:

```html
<button mouse-hover=".box">Show Div</button>
```

The attribute's value is a `document.querySelector()` selector that targets the corresponding DOM element:

```html
<button mouse-click=".box">Show Div</button>
<div class="box">Just a div with a class</div>
```

```html
<button mouse-click="#box">Show Div</button>
<div id="box">Just a div with an ID</div>
```

```html
<button mouse-click="div">Show Div</button>
<div>Just a div</div>
```

A `.hidden { display: none; }` class is automatically added to the element specified in the attribute, making it initially hidden.

### ✨ Mouse Swap

Add a `mouse-swap` attribute to an HTML element:

```html
<button mouse-swap=".box">Show Div</button>
```

This attribute creates a *click-to-swap* relationship between the element with the attribute and the specified target element:

```html
<button mouse-swap="#box">Click me to hide me and show the div</button>
<div id="box">Click me to hide me and show the button</div>
```

The element with the `mouse-swap` attribute is initially visible, while the target element starts off hidden.

### 🎉 Animations

Add a `mouse-animation` attribute to any element in the DOM:

```html
<div class="box" mouse-animation="fade">Just a div with animation</div>
```

This adds a CSS animation effect that triggers when the element *appears* in the DOM. You can apply this attribute to any element or combine it with other attributes. Each animation has its own default timing, which cannot be changed. Available animations include:

1. **fade**
2. **X**
3. **Y**

The X and Y animations also accept an optional `mouse-animation-length` attribute, where you can set the number of pixels the element travels. This pixel value can be *positive* or *negative*:

```html
<button mouse-swap="div">Click me to see the div and hide me</button>
<div mouse-animation="fade">Click me to hide me and see the button again</div>
```

```html
<button mouse-click=".box">Click me to see the div and hide me</button>
<div class="box" mouse-animation="X" mouse-animation-length="-500">I translate X by -500 pixels</div>
```

You can also create custom CSS animations:

```html
<div class="box" mouse-animation="spring">Just a div with animation</div>
```

```css
@keyframes spring {
    0% { transform: scale(1); }
    30% { transform: scale(1.2); }
    50% { transform: scale(0.9); }
    70% { transform: scale(1.1); }
    100% { transform: scale(1); }
}

.spring {
  animation: spring 0.6s cubic-bezier(0.5, 1.5, 0.5, 1) forwards;
}
```

## 🔗 Links

📦 **NPM:** https://www.npmjs.com/package/mouse-html<br>
🐱‍👤 **GitHub:** https://github.com/nabeelipynb/mouse-html
