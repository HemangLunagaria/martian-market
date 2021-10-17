const auctionJson = [
  {
    "contractName": "MartianAuction",
    "abi": [
      {
        "inputs": [
          {
            "internalType": "address payable",
            "name": "_beneficiary",
            "type": "address"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "winner",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "AuctionEnded",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "bidder",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "HighestBidIncreased",
        "type": "event"
      },
      {
        "inputs": [],
        "name": "auctionEndTime",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "beneficiary",
        "outputs": [
          {
            "internalType": "address payable",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "ended",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "highestBid",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "highestBidder",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address payable",
            "name": "bidder",
            "type": "address"
          }
        ],
        "name": "bid",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "withdraw",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "sender",
            "type": "address"
          }
        ],
        "name": "pendingReturn",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "auctionEnd",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
    "metadata": "{\"compiler\":{\"version\":\"0.6.12+commit.27d51765\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address payable\",\"name\":\"_beneficiary\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"winner\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"AuctionEnded\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"bidder\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"HighestBidIncreased\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"auctionEnd\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"auctionEndTime\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"beneficiary\",\"outputs\":[{\"internalType\":\"address payable\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address payable\",\"name\":\"bidder\",\"type\":\"address\"}],\"name\":\"bid\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"ended\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"highestBid\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"highestBidder\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"pendingReturn\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"withdraw\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{\"auctionEnd()\":{\"notice\":\"End the auction and send the highest bid to the beneficiary.\"},\"bid(address)\":{\"notice\":\"Bid on the auction with the value sent together with this transaction. The value will only be refunded if the auction is not won.\"},\"constructor\":\"Create a simple auction with `_biddingTime` seconds bidding time on behalf of the beneficiary address `_beneficiary`.\",\"withdraw()\":{\"notice\":\"Withdraw a bid that was overbid.\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project:/contracts/MartianAuction.sol\":\"MartianAuction\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"project:/contracts/MartianAuction.sol\":{\"keccak256\":\"0xd3fde70feda412629570f63e34f9223e43b841fb10ce25d3dde7ea2734d035b9\",\"urls\":[\"bzz-raw://4c516f31fdb891642979ae86e70d6927f1fd1f9847e8f151edfe9be07a17f23e\",\"dweb:/ipfs/Qmd25wts9cESdFCW3G8pVAFEDXMzqD9idigfgSzGtPEioy\"]}},\"version\":1}",
    "bytecode": "0x608060405234801561001057600080fd5b506040516108ff3803806108ff8339818101604052602081101561003357600080fd5b8101908080519060200190929190505050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505061086b806100946000396000f3fe6080604052600436106100865760003560e01c80634b449cba116100595780634b449cba1461013d57806391f90157146101685780639cf5453d146101a9578063c937f9fd146101ed578063d57bde791461025257610086565b806312fa6feb1461008b5780632a24f46c146100b857806338af3eed146100cf5780633ccfd60b14610110575b600080fd5b34801561009757600080fd5b506100a061027d565b60405180821515815260200191505060405180910390f35b3480156100c457600080fd5b506100cd610290565b005b3480156100db57600080fd5b506100e4610499565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561011c57600080fd5b506101256104bd565b60405180821515815260200191505060405180910390f35b34801561014957600080fd5b506101526105e1565b6040518082815260200191505060405180910390f35b34801561017457600080fd5b5061017d6105e7565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6101eb600480360360208110156101bf57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061060d565b005b3480156101f957600080fd5b5061023c6004803603602081101561021057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506107a0565b6040518082815260200191505060405180910390f35b34801561025e57600080fd5b506102676107e9565b6040518082815260200191505060405180910390f35b600560009054906101000a900460ff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610334576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001806108136023913960400191505060405180910390fd5b600560009054906101000a900460ff161561039a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001806107f06023913960400191505060405180910390fd5b6001600560006101000a81548160ff0219169083151502179055507fdaec4582d5d9595688c8c98545fdd1c696d41c6aeaeb636737e84ed2f5c00eda600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600354604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a160008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6003549081150290604051600060405180830381858888f19350505050158015610496573d6000803e3d6000fd5b50565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600080600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905060008111156105d8576000600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055503373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f193505050506105d75780600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060009150506105de565b5b60019150505b90565b60015481565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6003543411610684576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f546865726520616c7265616479206973206120686967686572206269642e000081525060200191505060405180910390fd5b6000600354146107005760035460046000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550346003819055507ff4757a49b326036464bec6fe419a4ae38c8a02ce3e68bf0809674f6aab8ad3008134604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a150565b6000600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6003548156fe61756374696f6e456e642068617320616c7265616479206265656e2063616c6c65642e596f7520617265206e6f74207468652061756374696f6e2062656e6566696369617279a26469706673582212206d3b304903090ad7cccc6ca2c104c6492cc0dba2bd77c8dea141db8ce2d774d264736f6c634300060c0033",
    "deployedBytecode": "0x6080604052600436106100865760003560e01c80634b449cba116100595780634b449cba1461013d57806391f90157146101685780639cf5453d146101a9578063c937f9fd146101ed578063d57bde791461025257610086565b806312fa6feb1461008b5780632a24f46c146100b857806338af3eed146100cf5780633ccfd60b14610110575b600080fd5b34801561009757600080fd5b506100a061027d565b60405180821515815260200191505060405180910390f35b3480156100c457600080fd5b506100cd610290565b005b3480156100db57600080fd5b506100e4610499565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561011c57600080fd5b506101256104bd565b60405180821515815260200191505060405180910390f35b34801561014957600080fd5b506101526105e1565b6040518082815260200191505060405180910390f35b34801561017457600080fd5b5061017d6105e7565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6101eb600480360360208110156101bf57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061060d565b005b3480156101f957600080fd5b5061023c6004803603602081101561021057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506107a0565b6040518082815260200191505060405180910390f35b34801561025e57600080fd5b506102676107e9565b6040518082815260200191505060405180910390f35b600560009054906101000a900460ff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610334576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001806108136023913960400191505060405180910390fd5b600560009054906101000a900460ff161561039a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001806107f06023913960400191505060405180910390fd5b6001600560006101000a81548160ff0219169083151502179055507fdaec4582d5d9595688c8c98545fdd1c696d41c6aeaeb636737e84ed2f5c00eda600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600354604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a160008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6003549081150290604051600060405180830381858888f19350505050158015610496573d6000803e3d6000fd5b50565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600080600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905060008111156105d8576000600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055503373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f193505050506105d75780600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060009150506105de565b5b60019150505b90565b60015481565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6003543411610684576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f546865726520616c7265616479206973206120686967686572206269642e000081525060200191505060405180910390fd5b6000600354146107005760035460046000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550346003819055507ff4757a49b326036464bec6fe419a4ae38c8a02ce3e68bf0809674f6aab8ad3008134604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a150565b6000600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6003548156fe61756374696f6e456e642068617320616c7265616479206265656e2063616c6c65642e596f7520617265206e6f74207468652061756374696f6e2062656e6566696369617279a26469706673582212206d3b304903090ad7cccc6ca2c104c6492cc0dba2bd77c8dea141db8ce2d774d264736f6c634300060c0033",
    "immutableReferences": {},
    "sourceMap": "25:4532:14:-:0;;;1061:182;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1177:12;1163:11;;:26;;;;;;;;;;;;;;;;;;1061:182;25:4532;;;;;;",
    "deployedSourceMap": "25:4532:14:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;558:17;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;3400:1155;;;;;;;;;;;;;:::i;:::-;;200:34;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;2593:602;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;240:26;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;310:28;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;1411:1135;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;3205:112;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;344:22;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;558:17;;;;;;;;;;;;;:::o;3400:1155::-;4171:11;;;;;;;;;;4157:25;;:10;:25;;;4149:73;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4335:5;;;;;;;;;;;4334:6;4326:54;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4421:4;4413:5;;:12;;;;;;;;;;;;;;;;;;4440:39;4453:13;;;;;;;;;;;4468:10;;4440:39;;;;;;;;;;;;;;;;;;;;;;;;;;4516:11;;;;;;;;;;:20;;:32;4537:10;;4516:32;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3400:1155::o;200:34::-;;;;;;;;;;;;:::o;2593:602::-;2629:4;2645:11;2659:14;:26;2674:10;2659:26;;;;;;;;;;;;;;;;2645:40;;2708:1;2699:6;:10;2695:473;;;2939:1;2910:14;:26;2925:10;2910:26;;;;;;;;;;;;;;;:30;;;;2960:10;:15;;:23;2976:6;2960:23;;;;;;;;;;;;;;;;;;;;;;;2955:203;;3107:6;3078:14;:26;3093:10;3078:26;;;;;;;;;;;;;;;:35;;;;3138:5;3131:12;;;;;2955:203;2695:473;3184:4;3177:11;;;2593:602;;:::o;240:26::-;;;;:::o;310:28::-;;;;;;;;;;;;;:::o;1411:1135::-;1971:10;;1959:9;:22;1938:99;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2066:1;2052:10;;:15;2048:375;;2402:10;;2369:14;:29;2384:13;;;;;;;;;;;2369:29;;;;;;;;;;;;;;;;:43;;;;;;;;;;;2048:375;2448:6;2432:13;;:22;;;;;;;;;;;;;;;;;;2477:9;2464:10;:22;;;;2501:38;2521:6;2529:9;2501:38;;;;;;;;;;;;;;;;;;;;;;;;;;1411:1135;:::o;3205:112::-;3265:4;3288:14;:22;3303:6;3288:22;;;;;;;;;;;;;;;;3281:29;;3205:112;;;:::o;344:22::-;;;;:::o",
    "source": "pragma solidity ^0.6.0;\n\ncontract MartianAuction {\n    // Parameters of the auction. Times are either\n    // absolute unix timestamps (seconds since 1970-01-01)\n    // or time periods in seconds.\n    address payable public beneficiary;\n    uint public auctionEndTime;\n\n    // Current state of the auction.\n    address public highestBidder;\n    uint public highestBid;\n\n    // Allowed withdrawals of previous bids\n    mapping(address => uint) pendingReturns;\n\n    // Set to true at the end, disallows any change.\n    // By default initialized to `false`.\n    bool public ended;\n\n    // Events that will be emitted on changes.\n    event HighestBidIncreased(address bidder, uint amount);\n    event AuctionEnded(address winner, uint amount);\n\n    // The following is a so-called natspec comment,\n    // recognizable by the three slashes.\n    // It will be shown when the user is asked to\n    // confirm a transaction.\n\n    /// Create a simple auction with `_biddingTime`\n    /// seconds bidding time on behalf of the\n    /// beneficiary address `_beneficiary`.\n    constructor(\n        //uint _biddingTime,\n        address payable _beneficiary\n    ) public {\n        beneficiary = _beneficiary;\n        //auctionEndTime = now + _biddingTime;\n    }\n\n    /// Bid on the auction with the value sent\n    /// together with this transaction.\n    /// The value will only be refunded if the\n    /// auction is not won.\n    function bid(address payable bidder) public payable {\n        // No arguments are necessary, all\n        // information is already part of\n        // the transaction. The keyword payable\n        // is required for the function to\n        // be able to receive Ether.\n\n        // Revert the call if the bidding\n        // period is over.\n        // require(\n        //     now <= auctionEndTime,\n        //     \"Auction already ended.\"\n        // );\n\n        // If the bid is not higher, send the\n        // money back.\n        require(\n            msg.value > highestBid,\n            \"There already is a higher bid.\"\n        );\n\n        if (highestBid != 0) {\n            // Sending back the money by simply using\n            // highestBidder.send(highestBid) is a security risk\n            // because it could execute an untrusted contract.\n            // It is always safer to let the recipients\n            // withdraw their money themselves.\n            pendingReturns[highestBidder] += highestBid;\n        }\n        highestBidder = bidder;\n        highestBid = msg.value;\n        emit HighestBidIncreased(bidder, msg.value);\n    }\n\n    /// Withdraw a bid that was overbid.\n    function withdraw() public returns (bool) {\n        uint amount = pendingReturns[msg.sender];\n        if (amount > 0) {\n            // It is important to set this to zero because the recipient\n            // can call this function again as part of the receiving call\n            // before `send` returns.\n            pendingReturns[msg.sender] = 0;\n\n            if (!msg.sender.send(amount)) {\n                // No need to call throw here, just reset the amount owing\n                pendingReturns[msg.sender] = amount;\n                return false;\n            }\n        }\n        return true;\n    }\n    \n    function pendingReturn(address sender) public view returns (uint) {\n        return pendingReturns[sender];\n    }\n\n    /// End the auction and send the highest bid\n    /// to the beneficiary.\n    function auctionEnd() public {\n        // It is a good guideline to structure functions that interact\n        // with other contracts (i.e. they call functions or send Ether)\n        // into three phases:\n        // 1. checking conditions\n        // 2. performing actions (potentially changing conditions)\n        // 3. interacting with other contracts\n        // If these phases are mixed up, the other contract could call\n        // back into the current contract and modify the state or cause\n        // effects (ether payout) to be performed multiple times.\n        // If functions called internally include interaction with external\n        // contracts, they also have to be considered interaction with\n        // external contracts.\n\n        require(msg.sender == beneficiary, \"You are not the auction beneficiary\");\n\n        // 1. Conditions\n        //require(now >= auctionEndTime, \"Auction not yet ended.\");\n        require(!ended, \"auctionEnd has already been called.\");\n\n        // 2. Effects\n        ended = true;\n        emit AuctionEnded(highestBidder, highestBid);\n\n        // 3. Interaction\n        beneficiary.transfer(highestBid);\n    }\n}",
    "sourcePath": "/Users/hemanglunagaria/Documents/Monash_FinTech_repos/martian-market/martian-market/contracts/MartianAuction.sol",
    "ast": {
      "absolutePath": "project:/contracts/MartianAuction.sol",
      "exportedSymbols": {
        "MartianAuction": [
          3299
        ]
      },
      "id": 3300,
      "license": null,
      "nodeType": "SourceUnit",
      "nodes": [
        {
          "id": 3129,
          "literals": [
            "solidity",
            "^",
            "0.6",
            ".0"
          ],
          "nodeType": "PragmaDirective",
          "src": "0:23:14"
        },
        {
          "abstract": false,
          "baseContracts": [],
          "contractDependencies": [],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "id": 3299,
          "linearizedBaseContracts": [
            3299
          ],
          "name": "MartianAuction",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "constant": false,
              "functionSelector": "38af3eed",
              "id": 3131,
              "mutability": "mutable",
              "name": "beneficiary",
              "nodeType": "VariableDeclaration",
              "overrides": null,
              "scope": 3299,
              "src": "200:34:14",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_address_payable",
                "typeString": "address payable"
              },
              "typeName": {
                "id": 3130,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "200:15:14",
                "stateMutability": "payable",
                "typeDescriptions": {
                  "typeIdentifier": "t_address_payable",
                  "typeString": "address payable"
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "constant": false,
              "functionSelector": "4b449cba",
              "id": 3133,
              "mutability": "mutable",
              "name": "auctionEndTime",
              "nodeType": "VariableDeclaration",
              "overrides": null,
              "scope": 3299,
              "src": "240:26:14",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 3132,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "240:4:14",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "constant": false,
              "functionSelector": "91f90157",
              "id": 3135,
              "mutability": "mutable",
              "name": "highestBidder",
              "nodeType": "VariableDeclaration",
              "overrides": null,
              "scope": 3299,
              "src": "310:28:14",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              },
              "typeName": {
                "id": 3134,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "310:7:14",
                "stateMutability": "nonpayable",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "constant": false,
              "functionSelector": "d57bde79",
              "id": 3137,
              "mutability": "mutable",
              "name": "highestBid",
              "nodeType": "VariableDeclaration",
              "overrides": null,
              "scope": 3299,
              "src": "344:22:14",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 3136,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "344:4:14",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "constant": false,
              "id": 3141,
              "mutability": "mutable",
              "name": "pendingReturns",
              "nodeType": "VariableDeclaration",
              "overrides": null,
              "scope": 3299,
              "src": "417:39:14",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "typeName": {
                "id": 3140,
                "keyType": {
                  "id": 3138,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "425:7:14",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "nodeType": "Mapping",
                "src": "417:24:14",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                  "typeString": "mapping(address => uint256)"
                },
                "valueType": {
                  "id": 3139,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "436:4:14",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                }
              },
              "value": null,
              "visibility": "internal"
            },
            {
              "constant": false,
              "functionSelector": "12fa6feb",
              "id": 3143,
              "mutability": "mutable",
              "name": "ended",
              "nodeType": "VariableDeclaration",
              "overrides": null,
              "scope": 3299,
              "src": "558:17:14",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_bool",
                "typeString": "bool"
              },
              "typeName": {
                "id": 3142,
                "name": "bool",
                "nodeType": "ElementaryTypeName",
                "src": "558:4:14",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "anonymous": false,
              "documentation": null,
              "id": 3149,
              "name": "HighestBidIncreased",
              "nodeType": "EventDefinition",
              "parameters": {
                "id": 3148,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 3145,
                    "indexed": false,
                    "mutability": "mutable",
                    "name": "bidder",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 3149,
                    "src": "655:14:14",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 3144,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "655:7:14",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 3147,
                    "indexed": false,
                    "mutability": "mutable",
                    "name": "amount",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 3149,
                    "src": "671:11:14",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 3146,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "671:4:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "654:29:14"
              },
              "src": "629:55:14"
            },
            {
              "anonymous": false,
              "documentation": null,
              "id": 3155,
              "name": "AuctionEnded",
              "nodeType": "EventDefinition",
              "parameters": {
                "id": 3154,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 3151,
                    "indexed": false,
                    "mutability": "mutable",
                    "name": "winner",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 3155,
                    "src": "708:14:14",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 3150,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "708:7:14",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 3153,
                    "indexed": false,
                    "mutability": "mutable",
                    "name": "amount",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 3155,
                    "src": "724:11:14",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 3152,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "724:4:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "707:29:14"
              },
              "src": "689:48:14"
            },
            {
              "body": {
                "id": 3165,
                "nodeType": "Block",
                "src": "1153:90:14",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 3163,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 3161,
                        "name": "beneficiary",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3131,
                        "src": "1163:11:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "id": 3162,
                        "name": "_beneficiary",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3158,
                        "src": "1177:12:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      "src": "1163:26:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "id": 3164,
                    "nodeType": "ExpressionStatement",
                    "src": "1163:26:14"
                  }
                ]
              },
              "documentation": {
                "id": 3156,
                "nodeType": "StructuredDocumentation",
                "src": "919:137:14",
                "text": "Create a simple auction with `_biddingTime`\n seconds bidding time on behalf of the\n beneficiary address `_beneficiary`."
              },
              "id": 3166,
              "implemented": true,
              "kind": "constructor",
              "modifiers": [],
              "name": "",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 3159,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 3158,
                    "mutability": "mutable",
                    "name": "_beneficiary",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 3166,
                    "src": "1111:28:14",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    },
                    "typeName": {
                      "id": 3157,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1111:15:14",
                      "stateMutability": "payable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "1072:73:14"
              },
              "returnParameters": {
                "id": 3160,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1153:0:14"
              },
              "scope": 3299,
              "src": "1061:182:14",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 3206,
                "nodeType": "Block",
                "src": "1463:1083:14",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 3176,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 3173,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "1959:3:14",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 3174,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "value",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "1959:9:14",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 3175,
                            "name": "highestBid",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3137,
                            "src": "1971:10:14",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "1959:22:14",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "546865726520616c7265616479206973206120686967686572206269642e",
                          "id": 3177,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1995:32:14",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_5dc34ddce75116985854950973e5007665ff9c5bf70776d43a373ddd14c06694",
                            "typeString": "literal_string \"There already is a higher bid.\""
                          },
                          "value": "There already is a higher bid."
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_5dc34ddce75116985854950973e5007665ff9c5bf70776d43a373ddd14c06694",
                            "typeString": "literal_string \"There already is a higher bid.\""
                          }
                        ],
                        "id": 3172,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          -18,
                          -18
                        ],
                        "referencedDeclaration": -18,
                        "src": "1938:7:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 3178,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1938:99:14",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 3179,
                    "nodeType": "ExpressionStatement",
                    "src": "1938:99:14"
                  },
                  {
                    "condition": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 3182,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "id": 3180,
                        "name": "highestBid",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3137,
                        "src": "2052:10:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "!=",
                      "rightExpression": {
                        "argumentTypes": null,
                        "hexValue": "30",
                        "id": 3181,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2066:1:14",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "2052:15:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseBody": null,
                    "id": 3190,
                    "nodeType": "IfStatement",
                    "src": "2048:375:14",
                    "trueBody": {
                      "id": 3189,
                      "nodeType": "Block",
                      "src": "2069:354:14",
                      "statements": [
                        {
                          "expression": {
                            "argumentTypes": null,
                            "id": 3187,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftHandSide": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 3183,
                                "name": "pendingReturns",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 3141,
                                "src": "2369:14:14",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                  "typeString": "mapping(address => uint256)"
                                }
                              },
                              "id": 3185,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 3184,
                                "name": "highestBidder",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 3135,
                                "src": "2384:13:14",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "nodeType": "IndexAccess",
                              "src": "2369:29:14",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "Assignment",
                            "operator": "+=",
                            "rightHandSide": {
                              "argumentTypes": null,
                              "id": 3186,
                              "name": "highestBid",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3137,
                              "src": "2402:10:14",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "2369:43:14",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 3188,
                          "nodeType": "ExpressionStatement",
                          "src": "2369:43:14"
                        }
                      ]
                    }
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 3193,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 3191,
                        "name": "highestBidder",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3135,
                        "src": "2432:13:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "id": 3192,
                        "name": "bidder",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3169,
                        "src": "2448:6:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      "src": "2432:22:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 3194,
                    "nodeType": "ExpressionStatement",
                    "src": "2432:22:14"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 3198,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 3195,
                        "name": "highestBid",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3137,
                        "src": "2464:10:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 3196,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "2477:3:14",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 3197,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "value",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2477:9:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "2464:22:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 3199,
                    "nodeType": "ExpressionStatement",
                    "src": "2464:22:14"
                  },
                  {
                    "eventCall": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 3201,
                          "name": "bidder",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3169,
                          "src": "2521:6:14",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 3202,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -15,
                            "src": "2529:3:14",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 3203,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "value",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "2529:9:14",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 3200,
                        "name": "HighestBidIncreased",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3149,
                        "src": "2501:19:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                          "typeString": "function (address,uint256)"
                        }
                      },
                      "id": 3204,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2501:38:14",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 3205,
                    "nodeType": "EmitStatement",
                    "src": "2496:43:14"
                  }
                ]
              },
              "documentation": {
                "id": 3167,
                "nodeType": "StructuredDocumentation",
                "src": "1249:157:14",
                "text": "Bid on the auction with the value sent\n together with this transaction.\n The value will only be refunded if the\n auction is not won."
              },
              "functionSelector": "9cf5453d",
              "id": 3207,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "bid",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 3170,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 3169,
                    "mutability": "mutable",
                    "name": "bidder",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 3207,
                    "src": "1424:22:14",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    },
                    "typeName": {
                      "id": 3168,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1424:15:14",
                      "stateMutability": "payable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "1423:24:14"
              },
              "returnParameters": {
                "id": 3171,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1463:0:14"
              },
              "scope": 3299,
              "src": "1411:1135:14",
              "stateMutability": "payable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 3251,
                "nodeType": "Block",
                "src": "2635:560:14",
                "statements": [
                  {
                    "assignments": [
                      3214
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 3214,
                        "mutability": "mutable",
                        "name": "amount",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 3251,
                        "src": "2645:11:14",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 3213,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "2645:4:14",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 3219,
                    "initialValue": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 3215,
                        "name": "pendingReturns",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3141,
                        "src": "2659:14:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 3218,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 3216,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "2674:3:14",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 3217,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2674:10:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "2659:26:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "2645:40:14"
                  },
                  {
                    "condition": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 3222,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "id": 3220,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3214,
                        "src": "2699:6:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">",
                      "rightExpression": {
                        "argumentTypes": null,
                        "hexValue": "30",
                        "id": 3221,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2708:1:14",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "2699:10:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseBody": null,
                    "id": 3248,
                    "nodeType": "IfStatement",
                    "src": "2695:473:14",
                    "trueBody": {
                      "id": 3247,
                      "nodeType": "Block",
                      "src": "2711:457:14",
                      "statements": [
                        {
                          "expression": {
                            "argumentTypes": null,
                            "id": 3228,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftHandSide": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 3223,
                                "name": "pendingReturns",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 3141,
                                "src": "2910:14:14",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                  "typeString": "mapping(address => uint256)"
                                }
                              },
                              "id": 3226,
                              "indexExpression": {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 3224,
                                  "name": "msg",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -15,
                                  "src": "2925:3:14",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_message",
                                    "typeString": "msg"
                                  }
                                },
                                "id": 3225,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "sender",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "2925:10:14",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address_payable",
                                  "typeString": "address payable"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "nodeType": "IndexAccess",
                              "src": "2910:26:14",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "Assignment",
                            "operator": "=",
                            "rightHandSide": {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 3227,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2939:1:14",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            },
                            "src": "2910:30:14",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 3229,
                          "nodeType": "ExpressionStatement",
                          "src": "2910:30:14"
                        },
                        {
                          "condition": {
                            "argumentTypes": null,
                            "id": 3235,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "UnaryOperation",
                            "operator": "!",
                            "prefix": true,
                            "src": "2959:24:14",
                            "subExpression": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 3233,
                                  "name": "amount",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 3214,
                                  "src": "2976:6:14",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": null,
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 3230,
                                    "name": "msg",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": -15,
                                    "src": "2960:3:14",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_message",
                                      "typeString": "msg"
                                    }
                                  },
                                  "id": 3231,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "sender",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "2960:10:14",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address_payable",
                                    "typeString": "address payable"
                                  }
                                },
                                "id": 3232,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "send",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "2960:15:14",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_send_nonpayable$_t_uint256_$returns$_t_bool_$",
                                  "typeString": "function (uint256) returns (bool)"
                                }
                              },
                              "id": 3234,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2960:23:14",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "falseBody": null,
                          "id": 3246,
                          "nodeType": "IfStatement",
                          "src": "2955:203:14",
                          "trueBody": {
                            "id": 3245,
                            "nodeType": "Block",
                            "src": "2985:173:14",
                            "statements": [
                              {
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 3241,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftHandSide": {
                                    "argumentTypes": null,
                                    "baseExpression": {
                                      "argumentTypes": null,
                                      "id": 3236,
                                      "name": "pendingReturns",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 3141,
                                      "src": "3078:14:14",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                        "typeString": "mapping(address => uint256)"
                                      }
                                    },
                                    "id": 3239,
                                    "indexExpression": {
                                      "argumentTypes": null,
                                      "expression": {
                                        "argumentTypes": null,
                                        "id": 3237,
                                        "name": "msg",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": -15,
                                        "src": "3093:3:14",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_magic_message",
                                          "typeString": "msg"
                                        }
                                      },
                                      "id": 3238,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberName": "sender",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": null,
                                      "src": "3093:10:14",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address_payable",
                                        "typeString": "address payable"
                                      }
                                    },
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": true,
                                    "nodeType": "IndexAccess",
                                    "src": "3078:26:14",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "nodeType": "Assignment",
                                  "operator": "=",
                                  "rightHandSide": {
                                    "argumentTypes": null,
                                    "id": 3240,
                                    "name": "amount",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 3214,
                                    "src": "3107:6:14",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "src": "3078:35:14",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "id": 3242,
                                "nodeType": "ExpressionStatement",
                                "src": "3078:35:14"
                              },
                              {
                                "expression": {
                                  "argumentTypes": null,
                                  "hexValue": "66616c7365",
                                  "id": 3243,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "bool",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "3138:5:14",
                                  "subdenomination": null,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  },
                                  "value": "false"
                                },
                                "functionReturnParameters": 3212,
                                "id": 3244,
                                "nodeType": "Return",
                                "src": "3131:12:14"
                              }
                            ]
                          }
                        }
                      ]
                    }
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "hexValue": "74727565",
                      "id": 3249,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3184:4:14",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "functionReturnParameters": 3212,
                    "id": 3250,
                    "nodeType": "Return",
                    "src": "3177:11:14"
                  }
                ]
              },
              "documentation": {
                "id": 3208,
                "nodeType": "StructuredDocumentation",
                "src": "2552:36:14",
                "text": "Withdraw a bid that was overbid."
              },
              "functionSelector": "3ccfd60b",
              "id": 3252,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "withdraw",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 3209,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "2610:2:14"
              },
              "returnParameters": {
                "id": 3212,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 3211,
                    "mutability": "mutable",
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 3252,
                    "src": "2629:4:14",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "typeName": {
                      "id": 3210,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "2629:4:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "2628:6:14"
              },
              "scope": 3299,
              "src": "2593:602:14",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 3263,
                "nodeType": "Block",
                "src": "3271:46:14",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 3259,
                        "name": "pendingReturns",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3141,
                        "src": "3288:14:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 3261,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 3260,
                        "name": "sender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3254,
                        "src": "3303:6:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "3288:22:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "functionReturnParameters": 3258,
                    "id": 3262,
                    "nodeType": "Return",
                    "src": "3281:29:14"
                  }
                ]
              },
              "documentation": null,
              "functionSelector": "c937f9fd",
              "id": 3264,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "pendingReturn",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 3255,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 3254,
                    "mutability": "mutable",
                    "name": "sender",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 3264,
                    "src": "3228:14:14",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 3253,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "3228:7:14",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "3227:16:14"
              },
              "returnParameters": {
                "id": 3258,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 3257,
                    "mutability": "mutable",
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 3264,
                    "src": "3265:4:14",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 3256,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "3265:4:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "3264:6:14"
              },
              "scope": 3299,
              "src": "3205:112:14",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 3297,
                "nodeType": "Block",
                "src": "3429:1126:14",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          },
                          "id": 3272,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 3269,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "4157:3:14",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 3270,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "4157:10:14",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 3271,
                            "name": "beneficiary",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3131,
                            "src": "4171:11:14",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          },
                          "src": "4157:25:14",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "596f7520617265206e6f74207468652061756374696f6e2062656e6566696369617279",
                          "id": 3273,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4184:37:14",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_8d176aed0c8a89320260eeed1d49ade474a88616b8e509955bee0923e6934e41",
                            "typeString": "literal_string \"You are not the auction beneficiary\""
                          },
                          "value": "You are not the auction beneficiary"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_8d176aed0c8a89320260eeed1d49ade474a88616b8e509955bee0923e6934e41",
                            "typeString": "literal_string \"You are not the auction beneficiary\""
                          }
                        ],
                        "id": 3268,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          -18,
                          -18
                        ],
                        "referencedDeclaration": -18,
                        "src": "4149:7:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 3274,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4149:73:14",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 3275,
                    "nodeType": "ExpressionStatement",
                    "src": "4149:73:14"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 3278,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "!",
                          "prefix": true,
                          "src": "4334:6:14",
                          "subExpression": {
                            "argumentTypes": null,
                            "id": 3277,
                            "name": "ended",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3143,
                            "src": "4335:5:14",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "61756374696f6e456e642068617320616c7265616479206265656e2063616c6c65642e",
                          "id": 3279,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4342:37:14",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_6a19bb5dd163e38092f35ddde099e91b049fa387964afa36a2bc7e4243f57e2b",
                            "typeString": "literal_string \"auctionEnd has already been called.\""
                          },
                          "value": "auctionEnd has already been called."
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_6a19bb5dd163e38092f35ddde099e91b049fa387964afa36a2bc7e4243f57e2b",
                            "typeString": "literal_string \"auctionEnd has already been called.\""
                          }
                        ],
                        "id": 3276,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          -18,
                          -18
                        ],
                        "referencedDeclaration": -18,
                        "src": "4326:7:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 3280,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4326:54:14",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 3281,
                    "nodeType": "ExpressionStatement",
                    "src": "4326:54:14"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 3284,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 3282,
                        "name": "ended",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3143,
                        "src": "4413:5:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "hexValue": "74727565",
                        "id": 3283,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4421:4:14",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "true"
                      },
                      "src": "4413:12:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 3285,
                    "nodeType": "ExpressionStatement",
                    "src": "4413:12:14"
                  },
                  {
                    "eventCall": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 3287,
                          "name": "highestBidder",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3135,
                          "src": "4453:13:14",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 3288,
                          "name": "highestBid",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3137,
                          "src": "4468:10:14",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 3286,
                        "name": "AuctionEnded",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3155,
                        "src": "4440:12:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                          "typeString": "function (address,uint256)"
                        }
                      },
                      "id": 3289,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4440:39:14",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 3290,
                    "nodeType": "EmitStatement",
                    "src": "4435:44:14"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 3294,
                          "name": "highestBid",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3137,
                          "src": "4537:10:14",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "id": 3291,
                          "name": "beneficiary",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3131,
                          "src": "4516:11:14",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "id": 3293,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "transfer",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "4516:20:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                          "typeString": "function (uint256)"
                        }
                      },
                      "id": 3295,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4516:32:14",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 3296,
                    "nodeType": "ExpressionStatement",
                    "src": "4516:32:14"
                  }
                ]
              },
              "documentation": {
                "id": 3265,
                "nodeType": "StructuredDocumentation",
                "src": "3323:72:14",
                "text": "End the auction and send the highest bid\n to the beneficiary."
              },
              "functionSelector": "2a24f46c",
              "id": 3298,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "auctionEnd",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 3266,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "3419:2:14"
              },
              "returnParameters": {
                "id": 3267,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "3429:0:14"
              },
              "scope": 3299,
              "src": "3400:1155:14",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            }
          ],
          "scope": 3300,
          "src": "25:4532:14"
        }
      ],
      "src": "0:4557:14"
    },
    "legacyAST": {
      "attributes": {
        "absolutePath": "project:/contracts/MartianAuction.sol",
        "exportedSymbols": {
          "MartianAuction": [
            3299
          ]
        },
        "license": null
      },
      "children": [
        {
          "attributes": {
            "literals": [
              "solidity",
              "^",
              "0.6",
              ".0"
            ]
          },
          "id": 3129,
          "name": "PragmaDirective",
          "src": "0:23:14"
        },
        {
          "attributes": {
            "abstract": false,
            "baseContracts": [
              null
            ],
            "contractDependencies": [
              null
            ],
            "contractKind": "contract",
            "documentation": null,
            "fullyImplemented": true,
            "linearizedBaseContracts": [
              3299
            ],
            "name": "MartianAuction",
            "scope": 3300
          },
          "children": [
            {
              "attributes": {
                "constant": false,
                "functionSelector": "38af3eed",
                "mutability": "mutable",
                "name": "beneficiary",
                "overrides": null,
                "scope": 3299,
                "stateVariable": true,
                "storageLocation": "default",
                "type": "address payable",
                "value": null,
                "visibility": "public"
              },
              "children": [
                {
                  "attributes": {
                    "name": "address",
                    "stateMutability": "payable",
                    "type": "address payable"
                  },
                  "id": 3130,
                  "name": "ElementaryTypeName",
                  "src": "200:15:14"
                }
              ],
              "id": 3131,
              "name": "VariableDeclaration",
              "src": "200:34:14"
            },
            {
              "attributes": {
                "constant": false,
                "functionSelector": "4b449cba",
                "mutability": "mutable",
                "name": "auctionEndTime",
                "overrides": null,
                "scope": 3299,
                "stateVariable": true,
                "storageLocation": "default",
                "type": "uint256",
                "value": null,
                "visibility": "public"
              },
              "children": [
                {
                  "attributes": {
                    "name": "uint",
                    "type": "uint256"
                  },
                  "id": 3132,
                  "name": "ElementaryTypeName",
                  "src": "240:4:14"
                }
              ],
              "id": 3133,
              "name": "VariableDeclaration",
              "src": "240:26:14"
            },
            {
              "attributes": {
                "constant": false,
                "functionSelector": "91f90157",
                "mutability": "mutable",
                "name": "highestBidder",
                "overrides": null,
                "scope": 3299,
                "stateVariable": true,
                "storageLocation": "default",
                "type": "address",
                "value": null,
                "visibility": "public"
              },
              "children": [
                {
                  "attributes": {
                    "name": "address",
                    "stateMutability": "nonpayable",
                    "type": "address"
                  },
                  "id": 3134,
                  "name": "ElementaryTypeName",
                  "src": "310:7:14"
                }
              ],
              "id": 3135,
              "name": "VariableDeclaration",
              "src": "310:28:14"
            },
            {
              "attributes": {
                "constant": false,
                "functionSelector": "d57bde79",
                "mutability": "mutable",
                "name": "highestBid",
                "overrides": null,
                "scope": 3299,
                "stateVariable": true,
                "storageLocation": "default",
                "type": "uint256",
                "value": null,
                "visibility": "public"
              },
              "children": [
                {
                  "attributes": {
                    "name": "uint",
                    "type": "uint256"
                  },
                  "id": 3136,
                  "name": "ElementaryTypeName",
                  "src": "344:4:14"
                }
              ],
              "id": 3137,
              "name": "VariableDeclaration",
              "src": "344:22:14"
            },
            {
              "attributes": {
                "constant": false,
                "mutability": "mutable",
                "name": "pendingReturns",
                "overrides": null,
                "scope": 3299,
                "stateVariable": true,
                "storageLocation": "default",
                "type": "mapping(address => uint256)",
                "value": null,
                "visibility": "internal"
              },
              "children": [
                {
                  "attributes": {
                    "type": "mapping(address => uint256)"
                  },
                  "children": [
                    {
                      "attributes": {
                        "name": "address",
                        "type": "address"
                      },
                      "id": 3138,
                      "name": "ElementaryTypeName",
                      "src": "425:7:14"
                    },
                    {
                      "attributes": {
                        "name": "uint",
                        "type": "uint256"
                      },
                      "id": 3139,
                      "name": "ElementaryTypeName",
                      "src": "436:4:14"
                    }
                  ],
                  "id": 3140,
                  "name": "Mapping",
                  "src": "417:24:14"
                }
              ],
              "id": 3141,
              "name": "VariableDeclaration",
              "src": "417:39:14"
            },
            {
              "attributes": {
                "constant": false,
                "functionSelector": "12fa6feb",
                "mutability": "mutable",
                "name": "ended",
                "overrides": null,
                "scope": 3299,
                "stateVariable": true,
                "storageLocation": "default",
                "type": "bool",
                "value": null,
                "visibility": "public"
              },
              "children": [
                {
                  "attributes": {
                    "name": "bool",
                    "type": "bool"
                  },
                  "id": 3142,
                  "name": "ElementaryTypeName",
                  "src": "558:4:14"
                }
              ],
              "id": 3143,
              "name": "VariableDeclaration",
              "src": "558:17:14"
            },
            {
              "attributes": {
                "anonymous": false,
                "documentation": null,
                "name": "HighestBidIncreased"
              },
              "children": [
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "indexed": false,
                        "mutability": "mutable",
                        "name": "bidder",
                        "overrides": null,
                        "scope": 3149,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "address",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "address",
                            "stateMutability": "nonpayable",
                            "type": "address"
                          },
                          "id": 3144,
                          "name": "ElementaryTypeName",
                          "src": "655:7:14"
                        }
                      ],
                      "id": 3145,
                      "name": "VariableDeclaration",
                      "src": "655:14:14"
                    },
                    {
                      "attributes": {
                        "constant": false,
                        "indexed": false,
                        "mutability": "mutable",
                        "name": "amount",
                        "overrides": null,
                        "scope": 3149,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "uint256",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "uint",
                            "type": "uint256"
                          },
                          "id": 3146,
                          "name": "ElementaryTypeName",
                          "src": "671:4:14"
                        }
                      ],
                      "id": 3147,
                      "name": "VariableDeclaration",
                      "src": "671:11:14"
                    }
                  ],
                  "id": 3148,
                  "name": "ParameterList",
                  "src": "654:29:14"
                }
              ],
              "id": 3149,
              "name": "EventDefinition",
              "src": "629:55:14"
            },
            {
              "attributes": {
                "anonymous": false,
                "documentation": null,
                "name": "AuctionEnded"
              },
              "children": [
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "indexed": false,
                        "mutability": "mutable",
                        "name": "winner",
                        "overrides": null,
                        "scope": 3155,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "address",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "address",
                            "stateMutability": "nonpayable",
                            "type": "address"
                          },
                          "id": 3150,
                          "name": "ElementaryTypeName",
                          "src": "708:7:14"
                        }
                      ],
                      "id": 3151,
                      "name": "VariableDeclaration",
                      "src": "708:14:14"
                    },
                    {
                      "attributes": {
                        "constant": false,
                        "indexed": false,
                        "mutability": "mutable",
                        "name": "amount",
                        "overrides": null,
                        "scope": 3155,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "uint256",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "uint",
                            "type": "uint256"
                          },
                          "id": 3152,
                          "name": "ElementaryTypeName",
                          "src": "724:4:14"
                        }
                      ],
                      "id": 3153,
                      "name": "VariableDeclaration",
                      "src": "724:11:14"
                    }
                  ],
                  "id": 3154,
                  "name": "ParameterList",
                  "src": "707:29:14"
                }
              ],
              "id": 3155,
              "name": "EventDefinition",
              "src": "689:48:14"
            },
            {
              "attributes": {
                "implemented": true,
                "isConstructor": true,
                "kind": "constructor",
                "modifiers": [
                  null
                ],
                "name": "",
                "overrides": null,
                "scope": 3299,
                "stateMutability": "nonpayable",
                "virtual": false,
                "visibility": "public"
              },
              "children": [
                {
                  "attributes": {
                    "text": "Create a simple auction with `_biddingTime`\n seconds bidding time on behalf of the\n beneficiary address `_beneficiary`."
                  },
                  "id": 3156,
                  "name": "StructuredDocumentation",
                  "src": "919:137:14"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "mutability": "mutable",
                        "name": "_beneficiary",
                        "overrides": null,
                        "scope": 3166,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "address payable",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "address",
                            "stateMutability": "payable",
                            "type": "address payable"
                          },
                          "id": 3157,
                          "name": "ElementaryTypeName",
                          "src": "1111:15:14"
                        }
                      ],
                      "id": 3158,
                      "name": "VariableDeclaration",
                      "src": "1111:28:14"
                    }
                  ],
                  "id": 3159,
                  "name": "ParameterList",
                  "src": "1072:73:14"
                },
                {
                  "attributes": {
                    "parameters": [
                      null
                    ]
                  },
                  "children": [],
                  "id": 3160,
                  "name": "ParameterList",
                  "src": "1153:0:14"
                },
                {
                  "children": [
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "operator": "=",
                            "type": "address payable"
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 3131,
                                "type": "address payable",
                                "value": "beneficiary"
                              },
                              "id": 3161,
                              "name": "Identifier",
                              "src": "1163:11:14"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 3158,
                                "type": "address payable",
                                "value": "_beneficiary"
                              },
                              "id": 3162,
                              "name": "Identifier",
                              "src": "1177:12:14"
                            }
                          ],
                          "id": 3163,
                          "name": "Assignment",
                          "src": "1163:26:14"
                        }
                      ],
                      "id": 3164,
                      "name": "ExpressionStatement",
                      "src": "1163:26:14"
                    }
                  ],
                  "id": 3165,
                  "name": "Block",
                  "src": "1153:90:14"
                }
              ],
              "id": 3166,
              "name": "FunctionDefinition",
              "src": "1061:182:14"
            },
            {
              "attributes": {
                "functionSelector": "9cf5453d",
                "implemented": true,
                "isConstructor": false,
                "kind": "function",
                "modifiers": [
                  null
                ],
                "name": "bid",
                "overrides": null,
                "scope": 3299,
                "stateMutability": "payable",
                "virtual": false,
                "visibility": "public"
              },
              "children": [
                {
                  "attributes": {
                    "text": "Bid on the auction with the value sent\n together with this transaction.\n The value will only be refunded if the\n auction is not won."
                  },
                  "id": 3167,
                  "name": "StructuredDocumentation",
                  "src": "1249:157:14"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "mutability": "mutable",
                        "name": "bidder",
                        "overrides": null,
                        "scope": 3207,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "address payable",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "address",
                            "stateMutability": "payable",
                            "type": "address payable"
                          },
                          "id": 3168,
                          "name": "ElementaryTypeName",
                          "src": "1424:15:14"
                        }
                      ],
                      "id": 3169,
                      "name": "VariableDeclaration",
                      "src": "1424:22:14"
                    }
                  ],
                  "id": 3170,
                  "name": "ParameterList",
                  "src": "1423:24:14"
                },
                {
                  "attributes": {
                    "parameters": [
                      null
                    ]
                  },
                  "children": [],
                  "id": 3171,
                  "name": "ParameterList",
                  "src": "1463:0:14"
                },
                {
                  "children": [
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "isStructConstructorCall": false,
                            "lValueRequested": false,
                            "names": [
                              null
                            ],
                            "tryCall": false,
                            "type": "tuple()",
                            "type_conversion": false
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  },
                                  {
                                    "typeIdentifier": "t_stringliteral_5dc34ddce75116985854950973e5007665ff9c5bf70776d43a373ddd14c06694",
                                    "typeString": "literal_string \"There already is a higher bid.\""
                                  }
                                ],
                                "overloadedDeclarations": [
                                  -18,
                                  -18
                                ],
                                "referencedDeclaration": -18,
                                "type": "function (bool,string memory) pure",
                                "value": "require"
                              },
                              "id": 3172,
                              "name": "Identifier",
                              "src": "1938:7:14"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "operator": ">",
                                "type": "bool"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "member_name": "value",
                                    "referencedDeclaration": null,
                                    "type": "uint256"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": -15,
                                        "type": "msg",
                                        "value": "msg"
                                      },
                                      "id": 3173,
                                      "name": "Identifier",
                                      "src": "1959:3:14"
                                    }
                                  ],
                                  "id": 3174,
                                  "name": "MemberAccess",
                                  "src": "1959:9:14"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 3137,
                                    "type": "uint256",
                                    "value": "highestBid"
                                  },
                                  "id": 3175,
                                  "name": "Identifier",
                                  "src": "1971:10:14"
                                }
                              ],
                              "id": 3176,
                              "name": "BinaryOperation",
                              "src": "1959:22:14"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "hexvalue": "546865726520616c7265616479206973206120686967686572206269642e",
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "subdenomination": null,
                                "token": "string",
                                "type": "literal_string \"There already is a higher bid.\"",
                                "value": "There already is a higher bid."
                              },
                              "id": 3177,
                              "name": "Literal",
                              "src": "1995:32:14"
                            }
                          ],
                          "id": 3178,
                          "name": "FunctionCall",
                          "src": "1938:99:14"
                        }
                      ],
                      "id": 3179,
                      "name": "ExpressionStatement",
                      "src": "1938:99:14"
                    },
                    {
                      "attributes": {
                        "falseBody": null
                      },
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "operator": "!=",
                            "type": "bool"
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 3137,
                                "type": "uint256",
                                "value": "highestBid"
                              },
                              "id": 3180,
                              "name": "Identifier",
                              "src": "2052:10:14"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "hexvalue": "30",
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "subdenomination": null,
                                "token": "number",
                                "type": "int_const 0",
                                "value": "0"
                              },
                              "id": 3181,
                              "name": "Literal",
                              "src": "2066:1:14"
                            }
                          ],
                          "id": 3182,
                          "name": "BinaryOperation",
                          "src": "2052:15:14"
                        },
                        {
                          "children": [
                            {
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "operator": "+=",
                                    "type": "uint256"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": true,
                                        "type": "uint256"
                                      },
                                      "children": [
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                              null
                                            ],
                                            "referencedDeclaration": 3141,
                                            "type": "mapping(address => uint256)",
                                            "value": "pendingReturns"
                                          },
                                          "id": 3183,
                                          "name": "Identifier",
                                          "src": "2369:14:14"
                                        },
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                              null
                                            ],
                                            "referencedDeclaration": 3135,
                                            "type": "address",
                                            "value": "highestBidder"
                                          },
                                          "id": 3184,
                                          "name": "Identifier",
                                          "src": "2384:13:14"
                                        }
                                      ],
                                      "id": 3185,
                                      "name": "IndexAccess",
                                      "src": "2369:29:14"
                                    },
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 3137,
                                        "type": "uint256",
                                        "value": "highestBid"
                                      },
                                      "id": 3186,
                                      "name": "Identifier",
                                      "src": "2402:10:14"
                                    }
                                  ],
                                  "id": 3187,
                                  "name": "Assignment",
                                  "src": "2369:43:14"
                                }
                              ],
                              "id": 3188,
                              "name": "ExpressionStatement",
                              "src": "2369:43:14"
                            }
                          ],
                          "id": 3189,
                          "name": "Block",
                          "src": "2069:354:14"
                        }
                      ],
                      "id": 3190,
                      "name": "IfStatement",
                      "src": "2048:375:14"
                    },
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "operator": "=",
                            "type": "address"
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 3135,
                                "type": "address",
                                "value": "highestBidder"
                              },
                              "id": 3191,
                              "name": "Identifier",
                              "src": "2432:13:14"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 3169,
                                "type": "address payable",
                                "value": "bidder"
                              },
                              "id": 3192,
                              "name": "Identifier",
                              "src": "2448:6:14"
                            }
                          ],
                          "id": 3193,
                          "name": "Assignment",
                          "src": "2432:22:14"
                        }
                      ],
                      "id": 3194,
                      "name": "ExpressionStatement",
                      "src": "2432:22:14"
                    },
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "operator": "=",
                            "type": "uint256"
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 3137,
                                "type": "uint256",
                                "value": "highestBid"
                              },
                              "id": 3195,
                              "name": "Identifier",
                              "src": "2464:10:14"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "member_name": "value",
                                "referencedDeclaration": null,
                                "type": "uint256"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": -15,
                                    "type": "msg",
                                    "value": "msg"
                                  },
                                  "id": 3196,
                                  "name": "Identifier",
                                  "src": "2477:3:14"
                                }
                              ],
                              "id": 3197,
                              "name": "MemberAccess",
                              "src": "2477:9:14"
                            }
                          ],
                          "id": 3198,
                          "name": "Assignment",
                          "src": "2464:22:14"
                        }
                      ],
                      "id": 3199,
                      "name": "ExpressionStatement",
                      "src": "2464:22:14"
                    },
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "isStructConstructorCall": false,
                            "lValueRequested": false,
                            "names": [
                              null
                            ],
                            "tryCall": false,
                            "type": "tuple()",
                            "type_conversion": false
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_address_payable",
                                    "typeString": "address payable"
                                  },
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                ],
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 3149,
                                "type": "function (address,uint256)",
                                "value": "HighestBidIncreased"
                              },
                              "id": 3200,
                              "name": "Identifier",
                              "src": "2501:19:14"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 3169,
                                "type": "address payable",
                                "value": "bidder"
                              },
                              "id": 3201,
                              "name": "Identifier",
                              "src": "2521:6:14"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "member_name": "value",
                                "referencedDeclaration": null,
                                "type": "uint256"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": -15,
                                    "type": "msg",
                                    "value": "msg"
                                  },
                                  "id": 3202,
                                  "name": "Identifier",
                                  "src": "2529:3:14"
                                }
                              ],
                              "id": 3203,
                              "name": "MemberAccess",
                              "src": "2529:9:14"
                            }
                          ],
                          "id": 3204,
                          "name": "FunctionCall",
                          "src": "2501:38:14"
                        }
                      ],
                      "id": 3205,
                      "name": "EmitStatement",
                      "src": "2496:43:14"
                    }
                  ],
                  "id": 3206,
                  "name": "Block",
                  "src": "1463:1083:14"
                }
              ],
              "id": 3207,
              "name": "FunctionDefinition",
              "src": "1411:1135:14"
            },
            {
              "attributes": {
                "functionSelector": "3ccfd60b",
                "implemented": true,
                "isConstructor": false,
                "kind": "function",
                "modifiers": [
                  null
                ],
                "name": "withdraw",
                "overrides": null,
                "scope": 3299,
                "stateMutability": "nonpayable",
                "virtual": false,
                "visibility": "public"
              },
              "children": [
                {
                  "attributes": {
                    "text": "Withdraw a bid that was overbid."
                  },
                  "id": 3208,
                  "name": "StructuredDocumentation",
                  "src": "2552:36:14"
                },
                {
                  "attributes": {
                    "parameters": [
                      null
                    ]
                  },
                  "children": [],
                  "id": 3209,
                  "name": "ParameterList",
                  "src": "2610:2:14"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "mutability": "mutable",
                        "name": "",
                        "overrides": null,
                        "scope": 3252,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "bool",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "bool",
                            "type": "bool"
                          },
                          "id": 3210,
                          "name": "ElementaryTypeName",
                          "src": "2629:4:14"
                        }
                      ],
                      "id": 3211,
                      "name": "VariableDeclaration",
                      "src": "2629:4:14"
                    }
                  ],
                  "id": 3212,
                  "name": "ParameterList",
                  "src": "2628:6:14"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "assignments": [
                          3214
                        ]
                      },
                      "children": [
                        {
                          "attributes": {
                            "constant": false,
                            "mutability": "mutable",
                            "name": "amount",
                            "overrides": null,
                            "scope": 3251,
                            "stateVariable": false,
                            "storageLocation": "default",
                            "type": "uint256",
                            "value": null,
                            "visibility": "internal"
                          },
                          "children": [
                            {
                              "attributes": {
                                "name": "uint",
                                "type": "uint256"
                              },
                              "id": 3213,
                              "name": "ElementaryTypeName",
                              "src": "2645:4:14"
                            }
                          ],
                          "id": 3214,
                          "name": "VariableDeclaration",
                          "src": "2645:11:14"
                        },
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "type": "uint256"
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 3141,
                                "type": "mapping(address => uint256)",
                                "value": "pendingReturns"
                              },
                              "id": 3215,
                              "name": "Identifier",
                              "src": "2659:14:14"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "member_name": "sender",
                                "referencedDeclaration": null,
                                "type": "address payable"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": -15,
                                    "type": "msg",
                                    "value": "msg"
                                  },
                                  "id": 3216,
                                  "name": "Identifier",
                                  "src": "2674:3:14"
                                }
                              ],
                              "id": 3217,
                              "name": "MemberAccess",
                              "src": "2674:10:14"
                            }
                          ],
                          "id": 3218,
                          "name": "IndexAccess",
                          "src": "2659:26:14"
                        }
                      ],
                      "id": 3219,
                      "name": "VariableDeclarationStatement",
                      "src": "2645:40:14"
                    },
                    {
                      "attributes": {
                        "falseBody": null
                      },
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "operator": ">",
                            "type": "bool"
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 3214,
                                "type": "uint256",
                                "value": "amount"
                              },
                              "id": 3220,
                              "name": "Identifier",
                              "src": "2699:6:14"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "hexvalue": "30",
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "subdenomination": null,
                                "token": "number",
                                "type": "int_const 0",
                                "value": "0"
                              },
                              "id": 3221,
                              "name": "Literal",
                              "src": "2708:1:14"
                            }
                          ],
                          "id": 3222,
                          "name": "BinaryOperation",
                          "src": "2699:10:14"
                        },
                        {
                          "children": [
                            {
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "operator": "=",
                                    "type": "uint256"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": true,
                                        "type": "uint256"
                                      },
                                      "children": [
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                              null
                                            ],
                                            "referencedDeclaration": 3141,
                                            "type": "mapping(address => uint256)",
                                            "value": "pendingReturns"
                                          },
                                          "id": 3223,
                                          "name": "Identifier",
                                          "src": "2910:14:14"
                                        },
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "member_name": "sender",
                                            "referencedDeclaration": null,
                                            "type": "address payable"
                                          },
                                          "children": [
                                            {
                                              "attributes": {
                                                "argumentTypes": null,
                                                "overloadedDeclarations": [
                                                  null
                                                ],
                                                "referencedDeclaration": -15,
                                                "type": "msg",
                                                "value": "msg"
                                              },
                                              "id": 3224,
                                              "name": "Identifier",
                                              "src": "2925:3:14"
                                            }
                                          ],
                                          "id": 3225,
                                          "name": "MemberAccess",
                                          "src": "2925:10:14"
                                        }
                                      ],
                                      "id": 3226,
                                      "name": "IndexAccess",
                                      "src": "2910:26:14"
                                    },
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "hexvalue": "30",
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "lValueRequested": false,
                                        "subdenomination": null,
                                        "token": "number",
                                        "type": "int_const 0",
                                        "value": "0"
                                      },
                                      "id": 3227,
                                      "name": "Literal",
                                      "src": "2939:1:14"
                                    }
                                  ],
                                  "id": 3228,
                                  "name": "Assignment",
                                  "src": "2910:30:14"
                                }
                              ],
                              "id": 3229,
                              "name": "ExpressionStatement",
                              "src": "2910:30:14"
                            },
                            {
                              "attributes": {
                                "falseBody": null
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "operator": "!",
                                    "prefix": true,
                                    "type": "bool"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "isStructConstructorCall": false,
                                        "lValueRequested": false,
                                        "names": [
                                          null
                                        ],
                                        "tryCall": false,
                                        "type": "bool",
                                        "type_conversion": false
                                      },
                                      "children": [
                                        {
                                          "attributes": {
                                            "argumentTypes": [
                                              {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                              }
                                            ],
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "member_name": "send",
                                            "referencedDeclaration": null,
                                            "type": "function (uint256) returns (bool)"
                                          },
                                          "children": [
                                            {
                                              "attributes": {
                                                "argumentTypes": null,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "member_name": "sender",
                                                "referencedDeclaration": null,
                                                "type": "address payable"
                                              },
                                              "children": [
                                                {
                                                  "attributes": {
                                                    "argumentTypes": null,
                                                    "overloadedDeclarations": [
                                                      null
                                                    ],
                                                    "referencedDeclaration": -15,
                                                    "type": "msg",
                                                    "value": "msg"
                                                  },
                                                  "id": 3230,
                                                  "name": "Identifier",
                                                  "src": "2960:3:14"
                                                }
                                              ],
                                              "id": 3231,
                                              "name": "MemberAccess",
                                              "src": "2960:10:14"
                                            }
                                          ],
                                          "id": 3232,
                                          "name": "MemberAccess",
                                          "src": "2960:15:14"
                                        },
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                              null
                                            ],
                                            "referencedDeclaration": 3214,
                                            "type": "uint256",
                                            "value": "amount"
                                          },
                                          "id": 3233,
                                          "name": "Identifier",
                                          "src": "2976:6:14"
                                        }
                                      ],
                                      "id": 3234,
                                      "name": "FunctionCall",
                                      "src": "2960:23:14"
                                    }
                                  ],
                                  "id": 3235,
                                  "name": "UnaryOperation",
                                  "src": "2959:24:14"
                                },
                                {
                                  "children": [
                                    {
                                      "children": [
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "operator": "=",
                                            "type": "uint256"
                                          },
                                          "children": [
                                            {
                                              "attributes": {
                                                "argumentTypes": null,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": true,
                                                "type": "uint256"
                                              },
                                              "children": [
                                                {
                                                  "attributes": {
                                                    "argumentTypes": null,
                                                    "overloadedDeclarations": [
                                                      null
                                                    ],
                                                    "referencedDeclaration": 3141,
                                                    "type": "mapping(address => uint256)",
                                                    "value": "pendingReturns"
                                                  },
                                                  "id": 3236,
                                                  "name": "Identifier",
                                                  "src": "3078:14:14"
                                                },
                                                {
                                                  "attributes": {
                                                    "argumentTypes": null,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "member_name": "sender",
                                                    "referencedDeclaration": null,
                                                    "type": "address payable"
                                                  },
                                                  "children": [
                                                    {
                                                      "attributes": {
                                                        "argumentTypes": null,
                                                        "overloadedDeclarations": [
                                                          null
                                                        ],
                                                        "referencedDeclaration": -15,
                                                        "type": "msg",
                                                        "value": "msg"
                                                      },
                                                      "id": 3237,
                                                      "name": "Identifier",
                                                      "src": "3093:3:14"
                                                    }
                                                  ],
                                                  "id": 3238,
                                                  "name": "MemberAccess",
                                                  "src": "3093:10:14"
                                                }
                                              ],
                                              "id": 3239,
                                              "name": "IndexAccess",
                                              "src": "3078:26:14"
                                            },
                                            {
                                              "attributes": {
                                                "argumentTypes": null,
                                                "overloadedDeclarations": [
                                                  null
                                                ],
                                                "referencedDeclaration": 3214,
                                                "type": "uint256",
                                                "value": "amount"
                                              },
                                              "id": 3240,
                                              "name": "Identifier",
                                              "src": "3107:6:14"
                                            }
                                          ],
                                          "id": 3241,
                                          "name": "Assignment",
                                          "src": "3078:35:14"
                                        }
                                      ],
                                      "id": 3242,
                                      "name": "ExpressionStatement",
                                      "src": "3078:35:14"
                                    },
                                    {
                                      "attributes": {
                                        "functionReturnParameters": 3212
                                      },
                                      "children": [
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "hexvalue": "66616c7365",
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "subdenomination": null,
                                            "token": "bool",
                                            "type": "bool",
                                            "value": "false"
                                          },
                                          "id": 3243,
                                          "name": "Literal",
                                          "src": "3138:5:14"
                                        }
                                      ],
                                      "id": 3244,
                                      "name": "Return",
                                      "src": "3131:12:14"
                                    }
                                  ],
                                  "id": 3245,
                                  "name": "Block",
                                  "src": "2985:173:14"
                                }
                              ],
                              "id": 3246,
                              "name": "IfStatement",
                              "src": "2955:203:14"
                            }
                          ],
                          "id": 3247,
                          "name": "Block",
                          "src": "2711:457:14"
                        }
                      ],
                      "id": 3248,
                      "name": "IfStatement",
                      "src": "2695:473:14"
                    },
                    {
                      "attributes": {
                        "functionReturnParameters": 3212
                      },
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "hexvalue": "74727565",
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "subdenomination": null,
                            "token": "bool",
                            "type": "bool",
                            "value": "true"
                          },
                          "id": 3249,
                          "name": "Literal",
                          "src": "3184:4:14"
                        }
                      ],
                      "id": 3250,
                      "name": "Return",
                      "src": "3177:11:14"
                    }
                  ],
                  "id": 3251,
                  "name": "Block",
                  "src": "2635:560:14"
                }
              ],
              "id": 3252,
              "name": "FunctionDefinition",
              "src": "2593:602:14"
            },
            {
              "attributes": {
                "documentation": null,
                "functionSelector": "c937f9fd",
                "implemented": true,
                "isConstructor": false,
                "kind": "function",
                "modifiers": [
                  null
                ],
                "name": "pendingReturn",
                "overrides": null,
                "scope": 3299,
                "stateMutability": "view",
                "virtual": false,
                "visibility": "public"
              },
              "children": [
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "mutability": "mutable",
                        "name": "sender",
                        "overrides": null,
                        "scope": 3264,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "address",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "address",
                            "stateMutability": "nonpayable",
                            "type": "address"
                          },
                          "id": 3253,
                          "name": "ElementaryTypeName",
                          "src": "3228:7:14"
                        }
                      ],
                      "id": 3254,
                      "name": "VariableDeclaration",
                      "src": "3228:14:14"
                    }
                  ],
                  "id": 3255,
                  "name": "ParameterList",
                  "src": "3227:16:14"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "mutability": "mutable",
                        "name": "",
                        "overrides": null,
                        "scope": 3264,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "uint256",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "uint",
                            "type": "uint256"
                          },
                          "id": 3256,
                          "name": "ElementaryTypeName",
                          "src": "3265:4:14"
                        }
                      ],
                      "id": 3257,
                      "name": "VariableDeclaration",
                      "src": "3265:4:14"
                    }
                  ],
                  "id": 3258,
                  "name": "ParameterList",
                  "src": "3264:6:14"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "functionReturnParameters": 3258
                      },
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "type": "uint256"
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 3141,
                                "type": "mapping(address => uint256)",
                                "value": "pendingReturns"
                              },
                              "id": 3259,
                              "name": "Identifier",
                              "src": "3288:14:14"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 3254,
                                "type": "address",
                                "value": "sender"
                              },
                              "id": 3260,
                              "name": "Identifier",
                              "src": "3303:6:14"
                            }
                          ],
                          "id": 3261,
                          "name": "IndexAccess",
                          "src": "3288:22:14"
                        }
                      ],
                      "id": 3262,
                      "name": "Return",
                      "src": "3281:29:14"
                    }
                  ],
                  "id": 3263,
                  "name": "Block",
                  "src": "3271:46:14"
                }
              ],
              "id": 3264,
              "name": "FunctionDefinition",
              "src": "3205:112:14"
            },
            {
              "attributes": {
                "functionSelector": "2a24f46c",
                "implemented": true,
                "isConstructor": false,
                "kind": "function",
                "modifiers": [
                  null
                ],
                "name": "auctionEnd",
                "overrides": null,
                "scope": 3299,
                "stateMutability": "nonpayable",
                "virtual": false,
                "visibility": "public"
              },
              "children": [
                {
                  "attributes": {
                    "text": "End the auction and send the highest bid\n to the beneficiary."
                  },
                  "id": 3265,
                  "name": "StructuredDocumentation",
                  "src": "3323:72:14"
                },
                {
                  "attributes": {
                    "parameters": [
                      null
                    ]
                  },
                  "children": [],
                  "id": 3266,
                  "name": "ParameterList",
                  "src": "3419:2:14"
                },
                {
                  "attributes": {
                    "parameters": [
                      null
                    ]
                  },
                  "children": [],
                  "id": 3267,
                  "name": "ParameterList",
                  "src": "3429:0:14"
                },
                {
                  "children": [
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "isStructConstructorCall": false,
                            "lValueRequested": false,
                            "names": [
                              null
                            ],
                            "tryCall": false,
                            "type": "tuple()",
                            "type_conversion": false
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  },
                                  {
                                    "typeIdentifier": "t_stringliteral_8d176aed0c8a89320260eeed1d49ade474a88616b8e509955bee0923e6934e41",
                                    "typeString": "literal_string \"You are not the auction beneficiary\""
                                  }
                                ],
                                "overloadedDeclarations": [
                                  -18,
                                  -18
                                ],
                                "referencedDeclaration": -18,
                                "type": "function (bool,string memory) pure",
                                "value": "require"
                              },
                              "id": 3268,
                              "name": "Identifier",
                              "src": "4149:7:14"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_address_payable",
                                  "typeString": "address payable"
                                },
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "operator": "==",
                                "type": "bool"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "member_name": "sender",
                                    "referencedDeclaration": null,
                                    "type": "address payable"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": -15,
                                        "type": "msg",
                                        "value": "msg"
                                      },
                                      "id": 3269,
                                      "name": "Identifier",
                                      "src": "4157:3:14"
                                    }
                                  ],
                                  "id": 3270,
                                  "name": "MemberAccess",
                                  "src": "4157:10:14"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 3131,
                                    "type": "address payable",
                                    "value": "beneficiary"
                                  },
                                  "id": 3271,
                                  "name": "Identifier",
                                  "src": "4171:11:14"
                                }
                              ],
                              "id": 3272,
                              "name": "BinaryOperation",
                              "src": "4157:25:14"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "hexvalue": "596f7520617265206e6f74207468652061756374696f6e2062656e6566696369617279",
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "subdenomination": null,
                                "token": "string",
                                "type": "literal_string \"You are not the auction beneficiary\"",
                                "value": "You are not the auction beneficiary"
                              },
                              "id": 3273,
                              "name": "Literal",
                              "src": "4184:37:14"
                            }
                          ],
                          "id": 3274,
                          "name": "FunctionCall",
                          "src": "4149:73:14"
                        }
                      ],
                      "id": 3275,
                      "name": "ExpressionStatement",
                      "src": "4149:73:14"
                    },
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "isStructConstructorCall": false,
                            "lValueRequested": false,
                            "names": [
                              null
                            ],
                            "tryCall": false,
                            "type": "tuple()",
                            "type_conversion": false
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  },
                                  {
                                    "typeIdentifier": "t_stringliteral_6a19bb5dd163e38092f35ddde099e91b049fa387964afa36a2bc7e4243f57e2b",
                                    "typeString": "literal_string \"auctionEnd has already been called.\""
                                  }
                                ],
                                "overloadedDeclarations": [
                                  -18,
                                  -18
                                ],
                                "referencedDeclaration": -18,
                                "type": "function (bool,string memory) pure",
                                "value": "require"
                              },
                              "id": 3276,
                              "name": "Identifier",
                              "src": "4326:7:14"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "operator": "!",
                                "prefix": true,
                                "type": "bool"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 3143,
                                    "type": "bool",
                                    "value": "ended"
                                  },
                                  "id": 3277,
                                  "name": "Identifier",
                                  "src": "4335:5:14"
                                }
                              ],
                              "id": 3278,
                              "name": "UnaryOperation",
                              "src": "4334:6:14"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "hexvalue": "61756374696f6e456e642068617320616c7265616479206265656e2063616c6c65642e",
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "subdenomination": null,
                                "token": "string",
                                "type": "literal_string \"auctionEnd has already been called.\"",
                                "value": "auctionEnd has already been called."
                              },
                              "id": 3279,
                              "name": "Literal",
                              "src": "4342:37:14"
                            }
                          ],
                          "id": 3280,
                          "name": "FunctionCall",
                          "src": "4326:54:14"
                        }
                      ],
                      "id": 3281,
                      "name": "ExpressionStatement",
                      "src": "4326:54:14"
                    },
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "operator": "=",
                            "type": "bool"
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 3143,
                                "type": "bool",
                                "value": "ended"
                              },
                              "id": 3282,
                              "name": "Identifier",
                              "src": "4413:5:14"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "hexvalue": "74727565",
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "subdenomination": null,
                                "token": "bool",
                                "type": "bool",
                                "value": "true"
                              },
                              "id": 3283,
                              "name": "Literal",
                              "src": "4421:4:14"
                            }
                          ],
                          "id": 3284,
                          "name": "Assignment",
                          "src": "4413:12:14"
                        }
                      ],
                      "id": 3285,
                      "name": "ExpressionStatement",
                      "src": "4413:12:14"
                    },
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "isStructConstructorCall": false,
                            "lValueRequested": false,
                            "names": [
                              null
                            ],
                            "tryCall": false,
                            "type": "tuple()",
                            "type_conversion": false
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  },
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                ],
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 3155,
                                "type": "function (address,uint256)",
                                "value": "AuctionEnded"
                              },
                              "id": 3286,
                              "name": "Identifier",
                              "src": "4440:12:14"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 3135,
                                "type": "address",
                                "value": "highestBidder"
                              },
                              "id": 3287,
                              "name": "Identifier",
                              "src": "4453:13:14"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 3137,
                                "type": "uint256",
                                "value": "highestBid"
                              },
                              "id": 3288,
                              "name": "Identifier",
                              "src": "4468:10:14"
                            }
                          ],
                          "id": 3289,
                          "name": "FunctionCall",
                          "src": "4440:39:14"
                        }
                      ],
                      "id": 3290,
                      "name": "EmitStatement",
                      "src": "4435:44:14"
                    },
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "isStructConstructorCall": false,
                            "lValueRequested": false,
                            "names": [
                              null
                            ],
                            "tryCall": false,
                            "type": "tuple()",
                            "type_conversion": false
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                ],
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "member_name": "transfer",
                                "referencedDeclaration": null,
                                "type": "function (uint256)"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 3131,
                                    "type": "address payable",
                                    "value": "beneficiary"
                                  },
                                  "id": 3291,
                                  "name": "Identifier",
                                  "src": "4516:11:14"
                                }
                              ],
                              "id": 3293,
                              "name": "MemberAccess",
                              "src": "4516:20:14"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 3137,
                                "type": "uint256",
                                "value": "highestBid"
                              },
                              "id": 3294,
                              "name": "Identifier",
                              "src": "4537:10:14"
                            }
                          ],
                          "id": 3295,
                          "name": "FunctionCall",
                          "src": "4516:32:14"
                        }
                      ],
                      "id": 3296,
                      "name": "ExpressionStatement",
                      "src": "4516:32:14"
                    }
                  ],
                  "id": 3297,
                  "name": "Block",
                  "src": "3429:1126:14"
                }
              ],
              "id": 3298,
              "name": "FunctionDefinition",
              "src": "3400:1155:14"
            }
          ],
          "id": 3299,
          "name": "ContractDefinition",
          "src": "25:4532:14"
        }
      ],
      "id": 3300,
      "name": "SourceUnit",
      "src": "0:4557:14"
    },
    "compiler": {
      "name": "solc",
      "version": "0.6.12+commit.27d51765.Emscripten.clang"
    },
    "networks": {},
    "schemaVersion": "3.4.3",
    "updatedAt": "2021-10-16T04:33:03.193Z",
    "devdoc": {
      "kind": "dev",
      "methods": {},
      "version": 1
    },
    "userdoc": {
      "kind": "user",
      "methods": {
        "auctionEnd()": {
          "notice": "End the auction and send the highest bid to the beneficiary."
        },
        "bid(address)": {
          "notice": "Bid on the auction with the value sent together with this transaction. The value will only be refunded if the auction is not won."
        },
        "constructor": "Create a simple auction with `_biddingTime` seconds bidding time on behalf of the beneficiary address `_beneficiary`.",
        "withdraw()": {
          "notice": "Withdraw a bid that was overbid."
        }
      },
      "version": 1
    }
  }
]

export default auctionJson
