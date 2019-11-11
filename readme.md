---
description: how to use it and examples
---

# Getting Started

## Usage:

**lorem.js** works with Jquery so you should import it first,

{% hint style="info" %}
you can also use the **CDN**
{% endhint %}

{% tabs %}
{% tab title="IMPORT \[ LOCAL \]" %}
```markup
<script src="js/jquery.js"></script>
<script src="js/lorem.js"></script>
```
{% endtab %}

{% tab title="IMPORT \[ CDN \]" %}
```markup
<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
<script src="https://cdn.jsdelivr.net/gh/el3zahaby/lorem.JS/lorem.js"></script>
```
{% endtab %}
{% endtabs %}

Once you're Import the `js` you will be able to make it work with simple lines

```markup
<p class="lorem-1"></p>

<script>
    $('.lorem-1').Lorem({
        "length" : "" // defult :  {"length" : "rand"}
    });      
</script>
```

## Options :

You can find all options from the following link:

{% page-ref page="options-and-api.md" %}

