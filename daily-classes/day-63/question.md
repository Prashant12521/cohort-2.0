# D-63

## Scenario 1: Weather Dashboard with Error Handling

### Build a small weather dashboard that fetches current weather data from any public weather API (such as OpenWeatherMap).

### You must make the API request asynchronously using fetch with async/await.

### If the API request fails (for example, dur to an invalid city name), you must handle the error using try/catch.

### Additionally, create and throw custom errors based on weather conditions.

### For Example: If the temperature is extremely high or extremely low, throw a custom error and handle it properly in your code.







## Scenario 2: Bulk Email Sending Simulation with Parallel Promises and Error Handling

### Think of a scenario where you must simulate bulk emails to 5 users.

### Treat each email-sending operation as a Promise (you may simulate it using setTimeout).

### All emails must be sent in parallel using Promise.all

### If any email fails (for example, due to a random failure condition), you must catch the error and clearly show which specific email failed

### In addition, use a finally block to display a message indicating that the ‘Email process is complete’