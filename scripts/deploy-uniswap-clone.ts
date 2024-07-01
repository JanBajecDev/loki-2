import { ethers } from "hardhat";
import { keccak256 } from '@ethersproject/solidity'

// BEFORE DEPLOYING ON MAINNET CHECK OUT THE INIT_CODE_HASH
const FEE_TO_SETTER = '0xf380fefDA6BC9588F0ea7cE62F9efc3A9968D3c8';

async function main() {

  //Deploy Factory
  const uniSwapFactory = await (await ethers.getContractFactory("UniswapV2Factory")).deploy(FEE_TO_SETTER);
  await uniSwapFactory.waitForDeployment();
  console.log("uniSwapFactory deployed to:", uniSwapFactory.target);
  const bytecode = await uniSwapFactory.getDeployedCode();
  const INIT_CODE_HASH = keccak256(['bytes'], [bytecode]);
  console.log('INIT_CODE_HASH: ', INIT_CODE_HASH)
  if (INIT_CODE_HASH !== '0x20126b3d7259509e14302eab23bcd583f661e43c0e63873578564e5b7b3c3072') {
    return console.log('INIT_CODE_HASH NOT THE SAME AS BEFORE!');
  }

  // Deploy WETH

  const weth = await (await ethers.getContractFactory("WETH9")).deploy();
  await weth.waitForDeployment();
  console.log("weth deployed to:", weth.target);

  console.log(uniSwapFactory.target, weth.target);

  const uniswapA ='0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f'
  const wethA ='0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'

  // Deploy V2 Router
  const uniSwapV2Router = await (await ethers.getContractFactory("UniswapV2Router02Flattened")).deploy(uniswapA, wethA);
  await uniSwapV2Router.waitForDeployment();
  console.log("uniSwapV2Router deployed to:", uniSwapV2Router.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
