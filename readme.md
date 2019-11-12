# lorem.js 
made with ❤ by \[A. Elzahaby [egy.js](https://www.instagram.com/egy.js/)\]

description: how to use it and examples
---

# Getting Started

## Usage:

**lorem.js** works with Jquery so you should import it first,



you can also use the **CDN**

### IMPORT \[ LOCAL \]
```html
<script src="js/jquery.js"></script>
<script src="js/lorem.js"></script>
```

### IMPORT \[ CDN \]
```html
<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
<script src="https://cdn.jsdelivr.net/gh/el3zahaby/lorem.JS/lorem.js"></script>
```



Once you're Import the `js` you will be able to make it work with simple lines

```html
<p class="lorem-1"></p>

<script>
    $('.lorem-1').Lorem({
        "length" : "" // defult :  {"length" : "rand"}
    });      
</script>
```

## Options :

description: here you will find the options that you can use
---

# Options And API

| KEY | value type | Example |
| :--- | :--- | :--- |
| length | string or integer | you can use one of `[one,two,three,full,rand]` or you could or set a length number, Ex: `30` |

