const { ethers } = require("hardhat");

async function main() {

  const whitelistContract = await ethers.getContractFactory("Whitelist");

  const deployedWhitelistContract = await whitelistContract.deploy(5);

  await deployedWhitelistContract.deployed();

  // print the address of the contract adrr
  console.log ("Whitelist COntract Address", deployedWhitelistContract.address);

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })