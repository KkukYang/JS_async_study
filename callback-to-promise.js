// Callback hell example
class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === "ellie" && password === "dream") ||
          (id === "yang" && password === "1234")
        ) {
          resolve(id);
        } else {
          reject(new Error("not found"));
        }
      }, 2000);
    });
  }

  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === "yang") {
          resolve({ name: "yang", role: "admin" });
        } else {
          reject(new Error("no access"));
        }
      }, 1000);
    });
  }
}

const userStorage = new UserStorage();
const id = "yang"; //"asdf";
const password = "1234";

userStorage //변경 후.
  .loginUser(id, password)
  .then(userStorage.getRoles)
  .then((user) =>
    console.log(`hello ${user.name}, you have a ${user.role} role.`)
  )
  .catch(console.log);
