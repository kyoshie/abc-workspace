import { ethers } from "hardhat";

async function main() {
  const gojocoin = await ethers.getContractFactory("GojoCoin");
  const contract = await gojocoin.deploy(1000000);
  await contract.waitForDeployment();
  console.log(
    `deployed to ${contract.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
