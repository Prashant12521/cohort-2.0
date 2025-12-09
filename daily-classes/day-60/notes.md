# D-60

**Callback- **ek fnc hota h jo turant nahi chalta wo chalta h jab kaam ho jaye

```
function instagramParJaaoDataLaao(username, cb) {
  //logic
  setTimeout(() => {
    cb({ id: 1, username: "harsh", age: 28 });
  }, 2000);
}

instagramParJaaoDataLaao("harsh", function (data) {
  console.log(data);
});
```

### Exercise 1 (Very Easy - warming up)

Ek function banao afterDelay

Requirements:

Ye function 2 cheezein lega:

time (milliseconds)

callback function

Given time ke baad callback call kare

Callback ke andar ‘Callback executed’ print hona chahiye

Use case socho:

‘2 second baad ek kaam karna h’

Goal:

Samjhna ki callback delay ke baad kaise execute hota h

Ye setTimeout + callback connection h

```
function afterDelay(time, cb) {
  setTimeout(() => {
    cb();
  }, time);
}

afterDelay(3000, function () {
  console.log("callback executed");
});
```

### Exercise 2 (Intermediate - data flow)

ek function banao getUser

Requirements:

Username lega

1 second k baad callback ko ek object de:

id

username

Then:

Callback k andar ek aur fnc call karo getUserPosts

getUserPosts:

userId lega

1 second k baad callback ko posts ka array de

Final Output:

User ka username print ho

Fir uske posts print ho

Goal:

Samajhna ki ek async ka result next async ko kaise milta h

```
function getUser(username, cb) {
  console.log('getting user data...');
  
  setTimeout(() => {
    cb({
      id: 121,
      username: "harsh",
    });
  }, 1000);
}

function getUserPost(username, cb) {
  console.log('getting user post...');
  
  setTimeout(() => {
    cb(["img1", "img2"]);
  }, 2000);
}

getUser("harsh", function (data) {
  console.log(data.username);
  
  getUserPost(data.username, function (post) {
    console.log(post);
  });
});
```

```
function instagramSeDataLaao(username, cb) {
  setTimeout(() => {
    cb({ id: 1224, username: "harsh" });
  }, 3000);
}

function metaPeJaaoDataLaao(uniquenum, cb) {
  setTimeout(() => {
    cb(["img1", "img2"]);
  }, 4000);
}

instagramSeDataLaao("harsh", function (data) {
  // console.log(data);
  metaPeJaaoDataLaao(data.uniquenum, function (image) {
    console.log(image);
  });
});
```

### Exercise 3 (Intermediate - callback dependency, thoda painful)

Teen function banao:

loginUser

1 second baad callback ko user object de

fetchPermissions

userId lega

1 second baad callback ko permissions array de

loadDashboard

permission lega

1 second baad callback ko ‘Deshboard loaded’ bole

Flow:

Pehle loginUser

Uske andar fetchPermissions

Uske andar loadDashboard

Final output console me print ho

Goal:

Callback nesting ko feel karna

Yehi structure baad me callback hell banta h

```
function loginUser(username, cb) {
  console.log('logging in user...');
  
  setTimeout(() => {
    cb({ id: 123, username: "harsh" });
  }, 1000);
}

function fetchPermissions(id, cb) {
  console.log('fetching permissions...');
  
  setTimeout(() => {
    cb(["read", "write", "delete"]);
  }, 2000);
}

function loadDashboard(permissions, cb) {
  console.log('loading dashboard...');
  
  setTimeout(() => {
    cb();
  }, 2000);
}

loginUser("harsh", function (userdata) {
  fetchPermissions(userdata.id, function (permissions) {
    loadDashboard(permissions, function () {
      console.log("dashboard loaded");
    });
  });
});
```

Calling a function then calling another function then calling another function…. → **Callback hell **or** Christmas Tree Problem**