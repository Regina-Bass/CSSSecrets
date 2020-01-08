# Chapter 2
## Transparent Border
<img src="wOBgClip.jpeg" alt="box without Background Clip" height="300">
Your first attempt to making a transparent border may look something like below, which produces the above image.

```
border: 10px solid hsla(0,0%,100%,.5);
background: white;
```

This is because backgrounds extend underneath the border area. To combat this you can use the `background-clip` property. It has an initial value of `border-box` which means that backgrounds are clipped at the edge of the element’s _border box_. If we want our background to not extend underneath the border, all we have to do is to give it the value `padding-box`, which tells the browser to clip the background at the padding edge.

<img src="wBgClip.jpeg" alt="box with Background Clip" height="300">
