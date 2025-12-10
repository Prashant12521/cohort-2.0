### D-61, promises, async await, settimeout and setinterval

promises 

→ ek kaam jaakr karo

3 state :-
- pending state
- resolved → resolved
- reject → nahi hoga

facebook → mara data laao

**__Pending Stage__**

pending → jane se leke data lane tak ko pending

**__Fulfilled Stage__**

resolve(with data) → data aa jaye to resolve

reject(with error) → error aa jaye to reject

```
const prm = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 3000);
});

prm
  .then(function () {
    console.log("resolve hua");
  })
  .catch(function () {
    console.log("reject hua");
  });
```

fetch se kisi bhi url par jaa sakte h

fetch ka data readable nahi hota

usey json banaake readable karte h

iske baad jo data milta h wo readable hota h

```
fetch("https://randomuser.me/api").then(function (data) {
  console.log(data);
});
// can't read the data

fetch("https://randomuser.me/api")
  .then(function (data) {
    return data.json();
  })
  .then(function (realdata) {});
```

```
fetch("https://randomuser.me/api")
  .then((raw) => raw.json())
  .then((data) => {
    console.log(data.results[0].name.first);
  });

// John
```

fetch me do baar then lagana padta h ek baar raw data k liye jsko json me convert karte h aur dusri baar wo data ko readable form me use karne k liye

```
fetch("https://randomuser.me/api/")
  .them((raw) => raw.json())
  .then((data) => {
    console.log(data.results[0].name.first);
  })
  .catch((err) => {
    console.log(err);
  });

// Flora
```

**Async-Await** → Promise me kaam karta h

```
async function abc() {
  let raw = await fetch('https://randomuser.me/api/');
  let data = await raw.json();
  console.log(data);
  
}

abc();
```

```
function getNum() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 10);
      if (num < 5) {
        resolve(true);
      } else reject(false);
    }, 3000);
  });
}

async function abc() {
  let v = await getNum();
  console.log(v);
}
```

```
async function abc(){
  await getInstagramData('username')
}
```

### settimeout and setinterval