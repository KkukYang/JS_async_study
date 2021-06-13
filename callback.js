// // // Synchronous callback
// // function printImmediately(print) {
// //   print();
// // }

// // // Asynchronous callback
// // function printWithDelay(print, timeout) {
// //   setTimeout(print, timeout);
// // }

// // // JavaScript is synchronous.
// // // Execute the code block by orger after hoisting.
// // // hoisting: var, function declation
// // console.log("1");
// // setTimeout(() => console.log("2"), 1000);
// // console.log("3");
// // printImmediately(() => console.log("hello"));
// // printWithDelay(() => console.log("async callback"), 2000);

// // Callback hell example
// class UserStorage {
//   loginUser(id, password, onSuccess, onError) {
//     setTimeout(() => {
//       if (
//         (id === "ellie" && password === "dream") ||
//         (id === "yang" && password === "1234")
//       ) {
//         onSuccess(id);
//       } else {
//         onError(new Error("not found"));
//       }
//     }, 2000);
//   }

//   getRoles(user, onSuccess, onError) {
//     setTimeout(() => {
//       if (user === "yang") {
//         onSuccess({ name: "yang", role: "admin" });
//       } else {
//         onError(new Error("no access"));
//       }
//     }, 1000);
//   }
// }

// const userStorage = new UserStorage();
// const id = "yang";
// const password = "1234";
// userStorage.loginUser(
//   id,
//   password,
//   (user) => {
//     userStorage.getRoles(
//       user,
//       (userWithRole) => {
//         console.log(
//           `hello ${userWithRole.name}, you have a ${userWithRole.role} role.`
//         );
//       },
//       (error) => {
//         console.log(error);
//       }
//     );
//   },
//   (error) => {
//     console.log(error);
//   }
// );
