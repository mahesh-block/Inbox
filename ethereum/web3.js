import Web3 from "web3";

let web3;

if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
  // we are in the browser and metamask is running
  web3 = new Web3(window.web3.currentProvider);
} else {
  // we are  on the server or not using metamask
  const provider = new Web3.providers.HttpProvider(
    "https://rinkeby.infura.io/v3/e43be7a55e794c17a1e6d1ade1f17c45"
  );
  web3 = new Web3(provider);
}

export default web3;
