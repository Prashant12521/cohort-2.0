# Day-59

## Introduction to Asynchrony in JavaScript

JS- Single Threaded language h

ek kaam ek baar me ek time pe karegi → Synchronous approach

Asynchronous approach - jo kaam time le raha h usko side me karo aur sath me baki kaam karo

## Introduction to callbacks and Problems in callback

### callback

callback ek function h jo turant nahi chalega ye chalega jab aapka koi kaam complete hoga

```
setTimeout(function () {
  console.log('hey’);
}, 2000);

// after 2 
hey
```

function ko pass karna bhi callback fnc hota h

```
function abc(fn){
fn();
}

abc(function(){
console.log(‘hi’);
});
```

```
function abc(fn) {
  fn(function (fn3) {
    fn3(function(fn5){
      fn5();
    });
  });
}

abc(function (fn2) {
  fn2(function(fn4){
    fn4(function(){
      console.log('hi');
    });
  });
});
```

callbacks

situation → github se repository data lao

getUserDetails(username, cb)

getAllRepos(userid, cb)

getRepoDetail(repos[0], cb)

amitSeDetailsLaao(address, cb)

dukaanKoDhundho(details, cb)

samaanLelo(samaanList, cb)

gharAaaJaao(address, cb)

```
function amitSeDetailsLaao(address, cb){
console.log(‘fetching details’);
setTimeout(() => {
cb({lat: 23.45, lng: 76.4});
},3000);
}

amitSeDetailsLaao(‘indrapuri 231-H Block’, function(details){
console.log(details);
})
```

```
function amitSeDetailsLaao(address, cb){
  //logic
  cb(12);
}

amitSeDetailsLaao(‘Asdsf’, function(details){
  console.log(details);
});
```