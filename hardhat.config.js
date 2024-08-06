require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: ["0x6192031d530203eb5147608943ad5b0149a22332b655e3626537c53539123d21"], //Your private key starting with "0x"
    },
  },
};
