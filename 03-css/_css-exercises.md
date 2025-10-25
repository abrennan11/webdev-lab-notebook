# CSS Exercises

- [Exercise 01 - Selectors](#ex01)
- [Exercise 02 - Pseudo](#ex02)
- [Exercise 03 - Specificity](#ex03)
- [Exercise 04 - Layout](#ex04)
- [Exercise 05 - Position](#ex05)
- [Exercise 06 - Media Queries](#ex06)

## <a id="ex01"></a> Exercise 01 - Selectors

Recreate the snapshot below by using attribute, descendant, child, and sibling selectors.

<img src="../_assets/css-exercises/css-ex01-selectors.png" height=200 alt="screenshot of an exercise">

## <a id="ex02"></a> Exercise 02 - Pseudo

Recreate the snapshot below using pseudo elements.

<img src="../_assets/css-exercises/css-ex02-pseudo.png" height=200 alt="screenshot of an exercise">

## <a id="ex03"></a> Exercise 03 - Specificity

Calculate the specificity of the rules below.

```css
nav .list-item > a {
    this is the element a that is an immediate child of the nav item with the class name list item
}

#main::first-letter {
    this is the first letter of an element with the id element of "main"
}

input[type] {
    this is an input element of the given type
}

section .main::first-line {
    this is a section element, with class name main, and this applies only to the first line
}

nav ul.menu li#first a:not([class='visited']) {
    this is for an anchor element that is not in the visited class, which is a child of the li element, with id first, which is a child of the ul element with class menu, which is a child of a nav element.
}

div ol li ul li ol li ul li a {
    this is an anchor element, which is a child of a li element, which is a child of a ul element, which is a child of a li element, which is a child of an ol element, which is the child of an li, which is the child of a ul, which is the child of an li, which is the child of an ol, which is the child of a div.
}
```

## <a id="ex04"></a> Exercise 04 - Layout

Update the layout in the starter files to match the screenshots below.

<img src="../_assets/css-exercises/css-ex04-layout-01.png" height=200 alt="screenshot of a layout">
<img src="../_assets/css-exercises/css-ex04-layout-02.png" height=200 alt="screenshot of a layout">

## <a id="ex05"></a> Exercise 05 - Position

Update the layout in the starter files to match the screenshots below.

<img src="../_assets/css-exercises/css-ex05-position-01.png" height=300 alt="screenshot of a layout">
<img src="../_assets/css-exercises/css-ex05-position-02.png" height=300 alt="screenshot of a layout">

## <a id="ex06"></a> Exercise 06 - Media Queries

Update the layout in the starter files to match the screenshots below.

<img src="../_assets/css-exercises/css-ex06-media-queries-01.png" height=200 alt="screenshot of a layout">
<img src="../_assets/css-exercises/css-ex06-media-queries-02.png" height=200 alt="screenshot of a layout">
<img src="../_assets/css-exercises/css-ex06-media-queries-03.png" height=200 alt="screenshot of a layout">
