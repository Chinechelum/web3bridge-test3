// contract address: 0x861e5fee4af44b3e8c4df7584d4d6e3194bf9080
//open sea: https://testnets.opensea.io/assets/rinkeby/0x861e5fee4af44b3e8c4df7584d4d6e3194bf9080/0

require("dotenv").config({ path: ".env" });
// import { BytesLike } from "ethers";
import { ethers } from "hardhat";
// import * as dotenv from "dotenv";


async function main() {

    // const aContract = await ethers.getContractFactory("Paapii");
    // const TheContract = await aContract.deploy();

    // await TheContract.deployed();

    // console.log(
    //         "factory contract deployed to this address",
    //         TheContract.address
    //     );

  
  const CONTRACTADDRESS = "0x861e5fee4af44b3e8c4df7584d4d6e3194bf9080";
  const ACONTRACT = await ethers.getContractAt("IPaapii", CONTRACTADDRESS);
  
  await ACONTRACT.safeMint("0x94dd7AB066bABB362453855aE4e702baa066127F", "ipfs://QmaZFc5DWGoZnQ1smNmPAD9muQMkY5qmGDwEJbtR6vHkth");

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});