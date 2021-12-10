require("@nomiclabs/hardhat-waffle");
// const fs = require("fs")
// const privateKey = fs.readFileSync(".secret").toString()
require('dotenv').config()
const privateKey = process.env.PRIVATE_KEY
const projectId = "260af5d9ec744d40971efa332b9dc65f"

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      //url: 'https://polygon-mumbai.infura.io/v3/${projectId}',  
      url: "https://rpc-mumbai.maticvigil.com/",
      accounts: [privateKey]
    },
    mainnet: {
      // url: 'https://polygon-mainnet.infura.io/v3/${projectId}',
      url: "https://rpc-mainnet.maticvigil.com",
      accounts: [privateKey]
    }
  },
  solidity: "0.8.4",
};



