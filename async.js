// async & await
// clear style of using promise.

// 1. async
// function fetchUser() {
//   return new Promise((resolve, reject) => {
//     // do network request in 10 secs....
//     resolve("ellie");
//   });
// }

async function fetchUser() {
  // do network request in 10 secs....
  return "ellie";
}

const user = fetchUser();
console.log(user); // 어떤 함수 형식인지 log.
user.then(console.log);

// 2. await
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(1000);
  return "Apple";
}

//////////////////////////////////////////
async function getBanana() {
  await delay(1200);
  return "Banana";
}

// // async function getBanana() 와 같은 구문.
// function getBanana() {
//   return delay(1000).then(() => "Banana");
// }
//////////////////////////////////////////

// let str = getApple();
// console.log(str); //Promise { <pending> }
// str = getBanana();
// console.log(str); //Promise { <pending> }

// getApple() //사용 법.
//   .then(console.log) // Apple
//   .then(getBanana)
//   .then(console.log); // Banana

//////////////////////////////////////////
// function pickFruits() {
//   return getApple().then((apple) => {
//     return getBanana().then((banana) => `${apple} + ${banana}`);
//   });
// }

// // function pickFruits() 과 같은 구문.
// async function pickFruits() {
//   const apple = await getApple();
//   const banana = await getBanana();
//   return `${apple} + ${banana}`;
// }

// // 에러처리.
// async function pickFruits() {
//   try {
//     const apple = await getApple();
//     const banana = await getBanana();
//     return `${apple} + ${banana}`;
//   } catch (err) {
//     console.log(err);
//   }
// }

// pickFruits().then(console.log);
//////////////////////////////////////////

// 3. useful Promise APIs.
function pickAllFruits() {
  // 전부 다 끝날때까지 기다리기.
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join(" + ")
  );
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
  // 누가 먼저 완료 되는가?
  return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);
