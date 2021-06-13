// Promise is a JavaScript object for asynchronous operation.
// State: pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the executer runs automatically.
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files)
  console.log("doing something...");
  setTimeout(() => {
    resolve("ellie");
    // reject(new Error("no network"));
  }, 2000);
});

// 2. Consumers; then, catch, finally
promise
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("finally");
  });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(num - 1);
      }, 1000);
    });
  })
  .then((num) => console.log(num));

// 4. Error handling
const getHen = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`Chicken`), 1000);
  });
};

// const getEgg = (hen) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(`${hen} -> Egg`), 1000);
//   });
// };

const getEgg = (hen) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`error! ${hen} -> Egg`)), 1000);
  });
};

const cook = (egg) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} -> SunnySide Cooked`), 1000);
  });
};

// getHen()
//   .then((hen) => getEgg(hen))
//   .then((egg) => cook(egg))
//   .then((meal) => console.log(meal));

// getHen() // 위와 같은 구문.
//   .then(getEgg)
//   .then(cook)
//   .then(console.log);

getHen() // error handling
  .then(getEgg) // 에러처리를 안해준다면, 'Error: error! Chicken -> Egg'
  .catch((error) => {
    // 에러처리 해줬을 경우 : 'Bread -> SunnySide Cooked'
    return "Bread";
  })
  .then(cook)
  .then(console.log)
  .catch(console.log);
