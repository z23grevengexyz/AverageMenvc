
const serverUrl = "https://bzickdhawq4z.usemoralis.com:2053/server";
const appId = "qITe7GuLdt3ciuexNB8FW94lY3I08GlzPJeE8Hyk";
Moralis.start({ serverUrl, appId });


async function login() {
  let user = Moralis.User.current();
  if (!user) {
   try {
      user = await Moralis.authenticate({ signingMessage: "Hello World!" })
      console.log(user)
      console.log(user.get('ethAddress'))
   } catch(error) {
     console.log(error)
   }
  }
}

async function logOut() {
  await Moralis.User.logOut();
  console.log("logged out");
}

document.getElementById("btn-login").onclick = login;
document.getElementById("btn-logout").onclick = logOut;