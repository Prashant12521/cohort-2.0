D-45

### setTimeout, setInterval

setTimeout - delay

setTimeout(callback, delay);

```
setTimeout(function(){
  console.log('hi’);
}, 1000);
console.log(‘hello’);

//hello
//hi
```

setInterval -  controlled loop

setInterval(callback, interval);

	•	callback → function to execute
	•	interval → gap between each run

```
setInterval(function(){
  console.log("Repeats every 1 second");
}, 1000);
```

⚔️ setTimeout vs setInterval — Difference in One Line
•	setTimeout: run once after delay
•	setInterval: run repeatedly every interval