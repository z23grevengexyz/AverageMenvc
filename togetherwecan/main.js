/* Moralis init code */
const serverUrl = "https://bzickdhawq4z.usemoralis.com:2053/server";
const appId = "qITe7GuLdt3ciuexNB8FW94lY3I08GlzPJeE8Hyk";

const message = document.querySelector('.message');
Moralis.start({ serverUrl, appId });

/* Authentication code */
async function login() {
  let user = Moralis.User.current();
  if (!user) {
    user = await Moralis.authenticate({ signingMessage: "Welcome to AverageMen" })
      .then(function (user) {
        console.log("logged in user:", user);
        console.log(user.get("ethAddress"));
        message.textContent = 'You need to enter a number, bro!';
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

async function logOut() {
  await Moralis.User.logOut();
  console.log("logged out");
}

document.getElementById("btn-login").onclick = login;
document.getElementById("btn-logout").onclick = logOut;