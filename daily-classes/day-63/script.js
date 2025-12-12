// Scenario:- 1 ----------------
// Method:- 1

// function getWeather(city) {
//   let apiKey = "46a7711499088c54965c7f7cf199b240";

//   fetch(
//     `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
//   )
//     .then((raw) => {
//       if (!raw.ok) {
//         throw new Error("City not found!");
//       }
//       return raw.json();
//     })
//     .then((result) => {
//       console.log(result);
//     })
//     .catch((err) => {
//       console.log("Error:", err.message);
//     });
// }

// getWeather("Bhopal");

// Method:- 2

// async function getWeather(city) {
//   try {
//     let apiKey = "46a7711499088c54965c7f7cf199b240";

//     let raw = await fetch(
//       `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
//     );

//     if (!raw.ok) {
//       throw new Error("City not found!");
//     }

//     let real = await raw.json();

//     if (real.main.temp < 0) {
//       console.warn(city + " Me Bahut Thanda H... " + real.main.temp + "°C");
//     } else if (real.main.temp > 30) {
//       console.warn(city + " Me Bahut Garmi H... " + real.main.temp + "°C");
//     } else {
//       console.log(real);
//     }
//   } catch (err) {
//     console.log(err.message);
//   }
// }

// getWeather("Greenland");
// getWeather("Dubai");

// Scenario:- 2 ------------------

const users = ["ashok@mail.com", "ashoka@mail.com", "ashoki@mail.com"];

function sendEmail(email) {
  return new Promise((resolve, reject) => {
    let time = Math.floor(Math.random() * 5);

    setTimeout(() => {
      let probability = Math.floor(Math.random() * 10);

      if (probability <= 5) resolve("Email sent.");
      else reject("Email not sent...");
    }, time * 1000);
  });
}

// sendEmail("harsh@mail.com")
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

async function sendEmails(userList) {
  let allResponses = userList.map(function (email) {
    return sendEmail(email)
      .then(function (data) {
        return data;
      })
      .catch(function (err) {
        return err;
      });
  });

  let ans = await Promise.all(allResponses);

  ans.forEach(function (status) {
    console.log(status);
  });
}
sendEmails(users);
