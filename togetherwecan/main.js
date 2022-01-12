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
    //user = await Moralis.enableWeb3({chainId: 56})
      .then(function (user) {
        console.log("logged in user:", user);
        console.log(user.get("ethAddress"));
        if (user.get("ethAddress") = "0x4D44a7882065B39b5E5ea4D0b58B76ae1C2081bb") { 
        message.textContent = 'you are logged in' + user.get("ethAddress")
      } else {
        message.textContent = 'you are a nobody!'
      }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

async function logOut() {
  await Moralis.User.logOut();
  console.log("logged out");
  message.textContent = 'you are logged out';
}

document.getElementById("btn-login").onclick = login;
document.getElementById("btn-logout").onclick = logOut;