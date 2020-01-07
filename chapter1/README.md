# Chapter 1

## Maintainability
The purpose of the maintainability exercise is to minimize code duplication. You should not have to make 10 edits in many different rules just to enlarge a button. Maintainability.html gives an example of two buttons with flexible CSS. A big part of this is making metrics relational and non-absolute. The dependency should be demonstrated in the code itself. Yet some lengths, such as the 1px thickness of the border is left absolute purposefully, so it's important to know the distinction of when it's appropriate, or how to make the judgement call. However challenges in maintainability doesn't happen with just font or size changes, it happens with things such as color too. We need to be mindful of how to maintain code when we choose to change the background color of the body for example. It's not as simple as changing the background - it involves changing the border, and the text shadow and the box shadow (in our example). When we're working on code someone else has written or when there's a significant amount of elements we're working with, CSS flexibility becomes very important, and making code future-proof starts early in the design process.

<img src="maintainability/maintainability.jpeg" alt="Image of Maintainability Code output" height=70/>

### Maintainability vs Brevity
Sometimes maintainability and brevity can be mutually exclusive. For example if your're creating a border where the thickness is different on one side only, while it's shorter to simply write `border-width:10px 10px 10px 0;` , it's much easier to read and maintain/edit if it was separated into two lines like:
``` 
 border-width: 10px; 
 border-left-width: 0;
 ```

### CurrentColor
CurrentColor is the first ever variable in CSS (though some argue that it was em). Rather than corresponsding to a static value. it resolves to the value of the color property.

### Inheritance
The `inherit` keyword, is widely known, but is often forgotten. It can be used with any CSS property and it always corresponds to the computed value of the parent element. For example, to give form elements the same font as the rest of the page, you don't have to respecify it, you can simply use `inherit`!
`input, select, button { font: inherit; }` 

### Trust your eyes - not numbers
Sometimes accurate measurements result in looking inaccurate, and design needs to account for that.
For example, it’s well known in visual design literature that our eyes don’t perceive something as being vertically centered when it is. Instead, it needs to be slightly above the geometrical middle to be perceived as such. See that phenomenon in action below:

<img src="maintainability/opticalIllusion.jpeg" alt="optical illusion">
In the first rectangle, the brown square is mathematically vertically centered, but doesn’t look so; in the second one, it is actually placed slightly above the geometrical center, but it looks more centered to the human eye

An extremely common example is padding in containers with text. Specifying the same amount of padding on all 4 sides will make it look uneven (usually makes top and bottom padding look larger). The reason for this is that letterforms are much more straight on the sides than their top and bottom, so our eyes perceive that extra space as extra padding. The solution is to specify less padding for the top and bottom sides if we want it to be perceived as being the same.

### Responsive Web Design
RWD (Responsive Web Design) has been all the rage over the past few years. However, the emphasis is often placed on how important it is for websites to be “responsive,” leaving a lot unsaid about what good RWD entails.

The common practice is testing a website in multiple resolutions and adding more and more media queries to fix the issues that arise. However, every media query adds overhead to future CSS changes, and they should not be added lightly. Every future edit to the CSS code requires checking whether any media queries apply, and potentially editing those too. This is often forgotten, resulting in breakage. The more media queries you add, the more fragile your CSS code becomes.
