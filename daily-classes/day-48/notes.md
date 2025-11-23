## D-48 

## Different types of event listeners in DOM

1. click
2. mouseenter
3. mouseleave
4. mousemove
5. wheel
6. keypress — old (don’t use)
7. keyup
8. keydown
9. scroll
10. dblclick

```
var aud = new Audio(‘./sound.mp3);
document.body.addEventListener(‘click’, ()=>{
  aud.play();
});
```