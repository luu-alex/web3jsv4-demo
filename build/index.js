"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const web3_1 = __importStar(require("web3"));
// connect to rpc node
var mainnetInfura = "https://mainnet.infura.io/v3/f6baa5fdd86542a1a29adf80731ec2a0";
const web3 = new web3_1.default(mainnetInfura);
// showcase formatter
// The web3 utility formatter will automatically cast data to your desired type (e.g., BigInts, number strings, hexadecimal). 
// With the new formatters comes convenience and smoother data output. When interacting and receiving data from RPC calls, 
// developers will have the ability to specify their formatting preferences
// use any web3.eth method to showcase the formatter
const getBalance = (address) => __awaiter(void 0, void 0, void 0, function* () {
    const balance0 = yield web3.eth.getBalance(address, "latest"); // will return type bigInt by default 
    console.log(balance0); // 4420530415709450116998493367n
    const balance1 = yield web3.eth.getBalance(address, "latest", web3_1.DEFAULT_RETURN_FORMAT); // same thing, will return type bigInt by default 
    console.log(balance1); // 4420530415709450116998493367n
    // we specify that if the return is number like, it will be formatted into a string
    const balance2 = yield web3.eth.getBalance(address, "latest", { number: web3_1.FMT_NUMBER.STR, bytes: web3_1.FMT_BYTES.HEX });
    console.log(balance2); // "4119627389576718126890"
    // this time we specify it to be formatted into a hexstring
    const balance3 = yield web3.eth.getBalance(address, "latest", { number: web3_1.FMT_NUMBER.HEX, bytes: web3_1.FMT_BYTES.HEX });
    console.log(balance3); // "0xdf53509419420d0f2a"
});
getBalance("0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045");
// showcase dynamic contract types by typing  contract.methods.[method that will autocomplete] 
// create or use an address and contractABI
const daiAddress = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
const daiContractABI = [{ "inputs": [{ "internalType": "uint256", "name": "chainId_", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "src", "type": "address" }, { "indexed": true, "internalType": "address", "name": "guy", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "wad", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": true, "inputs": [{ "indexed": true, "internalType": "bytes4", "name": "sig", "type": "bytes4" }, { "indexed": true, "internalType": "address", "name": "usr", "type": "address" }, { "indexed": true, "internalType": "bytes32", "name": "arg1", "type": "bytes32" }, { "indexed": true, "internalType": "bytes32", "name": "arg2", "type": "bytes32" }, { "indexed": false, "internalType": "bytes", "name": "data", "type": "bytes" }], "name": "LogNote", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "src", "type": "address" }, { "indexed": true, "internalType": "address", "name": "dst", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "wad", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "constant": true, "inputs": [], "name": "DOMAIN_SEPARATOR", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "PERMIT_TYPEHASH", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "address", "name": "", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "usr", "type": "address" }, { "internalType": "uint256", "name": "wad", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "usr", "type": "address" }, { "internalType": "uint256", "name": "wad", "type": "uint256" }], "name": "burn", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "guy", "type": "address" }], "name": "deny", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "usr", "type": "address" }, { "internalType": "uint256", "name": "wad", "type": "uint256" }], "name": "mint", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "src", "type": "address" }, { "internalType": "address", "name": "dst", "type": "address" }, { "internalType": "uint256", "name": "wad", "type": "uint256" }], "name": "move", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "nonces", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "holder", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "nonce", "type": "uint256" }, { "internalType": "uint256", "name": "expiry", "type": "uint256" }, { "internalType": "bool", "name": "allowed", "type": "bool" }, { "internalType": "uint8", "name": "v", "type": "uint8" }, { "internalType": "bytes32", "name": "r", "type": "bytes32" }, { "internalType": "bytes32", "name": "s", "type": "bytes32" }], "name": "permit", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "usr", "type": "address" }, { "internalType": "uint256", "name": "wad", "type": "uint256" }], "name": "pull", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "usr", "type": "address" }, { "internalType": "uint256", "name": "wad", "type": "uint256" }], "name": "push", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "guy", "type": "address" }], "name": "rely", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "dst", "type": "address" }, { "internalType": "uint256", "name": "wad", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "src", "type": "address" }, { "internalType": "address", "name": "dst", "type": "address" }, { "internalType": "uint256", "name": "wad", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "version", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "wards", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }];
// create a contract object
const contract = new web3.eth.Contract(daiContractABI, daiAddress);
// returns token symbol
const getSymbol = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const symbol = yield contract.methods.symbol().call();
        console.log(symbol);
        return symbol;
    }
    catch (error) {
        console.error("Error while checking symbol");
    }
});
// Verify token supply 
// returns token supply
const getTokenSupply = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tokenSupply = yield contract.methods.totalSupply().call();
        console.log(tokenSupply);
        return tokenSupply;
    }
    catch (error) {
        console.error("Error while checking symbol");
    }
});
getSymbol(); // prints out DAI
getTokenSupply(); // returns 4416499345433133573878403577n
