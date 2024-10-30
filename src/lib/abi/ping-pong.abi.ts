// export const pingPongAbi = [
//   {
//     type: "constructor",
//     inputs: [
//       {
//         name: "_router",
//         type: "address",
//         internalType: "address",
//       },
//     ],
//     stateMutability: "nonpayable",
//   },
//   {
//     type: "function",
//     name: "owner",
//     inputs: [],
//     outputs: [
//       {
//         name: "",
//         type: "address",
//         internalType: "address",
//       },
//     ],
//     stateMutability: "view",
//   },
//   {
//     type: "function",
//     name: "peers",
//     inputs: [
//       {
//         name: "",
//         type: "uint256",
//         internalType: "uint256",
//       },
//     ],
//     outputs: [
//       {
//         name: "lower",
//         type: "bytes32",
//         internalType: "bytes32",
//       },
//       {
//         name: "upper",
//         type: "bytes32",
//         internalType: "bytes32",
//       },
//     ],
//     stateMutability: "view",
//   },
//   {
//     type: "function",
//     name: "receiveMessage",
//     inputs: [
//       {
//         name: "message",
//         type: "tuple",
//         internalType: "struct EquitoMessage",
//         components: [
//           {
//             name: "blockNumber",
//             type: "uint256",
//             internalType: "uint256",
//           },
//           {
//             name: "sourceChainSelector",
//             type: "uint256",
//             internalType: "uint256",
//           },
//           {
//             name: "sender",
//             type: "tuple",
//             internalType: "struct bytes64",
//             components: [
//               {
//                 name: "lower",
//                 type: "bytes32",
//                 internalType: "bytes32",
//               },
//               {
//                 name: "upper",
//                 type: "bytes32",
//                 internalType: "bytes32",
//               },
//             ],
//           },
//           {
//             name: "destinationChainSelector",
//             type: "uint256",
//             internalType: "uint256",
//           },
//           {
//             name: "receiver",
//             type: "tuple",
//             internalType: "struct bytes64",
//             components: [
//               {
//                 name: "lower",
//                 type: "bytes32",
//                 internalType: "bytes32",
//               },
//               {
//                 name: "upper",
//                 type: "bytes32",
//                 internalType: "bytes32",
//               },
//             ],
//           },
//           {
//             name: "hashedData",
//             type: "bytes32",
//             internalType: "bytes32",
//           },
//         ],
//       },
//       {
//         name: "messageData",
//         type: "bytes",
//         internalType: "bytes",
//       },
//     ],
//     outputs: [],
//     stateMutability: "payable",
//   },
//   {
//     type: "function",
//     name: "renounceOwnership",
//     inputs: [],
//     outputs: [],
//     stateMutability: "nonpayable",
//   },
//   {
//     type: "function",
//     name: "sendPing",
//     inputs: [
//       {
//         name: "destinationChainSelector",
//         type: "uint256",
//         internalType: "uint256",
//       },
//       {
//         name: "message",
//         type: "string",
//         internalType: "string",
//       },
//     ],
//     outputs: [],
//     stateMutability: "payable",
//   },
//   {
//     type: "function",
//     name: "setPeers",
//     inputs: [
//       {
//         name: "chainIds",
//         type: "uint256[]",
//         internalType: "uint256[]",
//       },
//       {
//         name: "addresses",
//         type: "tuple[]",
//         internalType: "struct bytes64[]",
//         components: [
//           {
//             name: "lower",
//             type: "bytes32",
//             internalType: "bytes32",
//           },
//           {
//             name: "upper",
//             type: "bytes32",
//             internalType: "bytes32",
//           },
//         ],
//       },
//     ],
//     outputs: [],
//     stateMutability: "nonpayable",
//   },
//   {
//     type: "function",
//     name: "transferOwnership",
//     inputs: [
//       {
//         name: "newOwner",
//         type: "address",
//         internalType: "address",
//       },
//     ],
//     outputs: [],
//     stateMutability: "nonpayable",
//   },
//   {
//     type: "event",
//     name: "OwnershipTransferred",
//     inputs: [
//       {
//         name: "previousOwner",
//         type: "address",
//         indexed: true,
//         internalType: "address",
//       },
//       {
//         name: "newOwner",
//         type: "address",
//         indexed: true,
//         internalType: "address",
//       },
//     ],
//     anonymous: false,
//   },
//   {
//     type: "event",
//     name: "PingReceived",
//     inputs: [
//       {
//         name: "sourceChainSelector",
//         type: "uint256",
//         indexed: true,
//         internalType: "uint256",
//       },
//       {
//         name: "messageHash",
//         type: "bytes32",
//         indexed: false,
//         internalType: "bytes32",
//       },
//     ],
//     anonymous: false,
//   },
//   {
//     type: "event",
//     name: "PingSent",
//     inputs: [
//       {
//         name: "destinationChainSelector",
//         type: "uint256",
//         indexed: true,
//         internalType: "uint256",
//       },
//       {
//         name: "messageHash",
//         type: "bytes32",
//         indexed: false,
//         internalType: "bytes32",
//       },
//     ],
//     anonymous: false,
//   },
//   {
//     type: "event",
//     name: "PongReceived",
//     inputs: [
//       {
//         name: "sourceChainSelector",
//         type: "uint256",
//         indexed: true,
//         internalType: "uint256",
//       },
//       {
//         name: "messageHash",
//         type: "bytes32",
//         indexed: false,
//         internalType: "bytes32",
//       },
//     ],
//     anonymous: false,
//   },
//   {
//     type: "event",
//     name: "PongSent",
//     inputs: [
//       {
//         name: "destinationChainSelector",
//         type: "uint256",
//         indexed: true,
//         internalType: "uint256",
//       },
//       {
//         name: "messageHash",
//         type: "bytes32",
//         indexed: false,
//         internalType: "bytes32",
//       },
//     ],
//     anonymous: false,
//   },
//   {
//     type: "error",
//     name: "InvalidLength",
//     inputs: [],
//   },
//   {
//     type: "error",
//     name: "InvalidMessageSender",
//     inputs: [],
//   },
//   {
//     type: "error",
//     name: "InvalidMessageType",
//     inputs: [],
//   },
//   {
//     type: "error",
//     name: "InvalidRouter",
//     inputs: [
//       {
//         name: "router",
//         type: "address",
//         internalType: "address",
//       },
//     ],
//   },
//   {
//     type: "error",
//     name: "OwnableInvalidOwner",
//     inputs: [
//       {
//         name: "owner",
//         type: "address",
//         internalType: "address",
//       },
//     ],
//   },
//   {
//     type: "error",
//     name: "OwnableUnauthorizedAccount",
//     inputs: [
//       {
//         name: "account",
//         type: "address",
//         internalType: "address",
//       },
//     ],
//   },
//   {
//     type: "error",
//     name: "RouterAddressCannotBeZero",
//     inputs: [],
//   },
//   {
//     type: "error",
//     name: "RouterAlreadySet",
//     inputs: [],
//   },
// ] as const;

export const pingPongAbi = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "approve",
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
				"components": [
					{
						"internalType": "bytes32",
						"name": "lower",
						"type": "bytes32"
					},
					{
						"internalType": "bytes32",
						"name": "upper",
						"type": "bytes32"
					}
				],
				"internalType": "struct bytes64",
				"name": "receiver",
				"type": "tuple"
			},
			{
				"internalType": "uint256",
				"name": "destinationChainSelector",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "crossChainTransfer",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_router",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "symbol",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "supply",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "allowance",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "needed",
				"type": "uint256"
			}
		],
		"name": "ERC20InsufficientAllowance",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "balance",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "needed",
				"type": "uint256"
			}
		],
		"name": "ERC20InsufficientBalance",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "approver",
				"type": "address"
			}
		],
		"name": "ERC20InvalidApprover",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "receiver",
				"type": "address"
			}
		],
		"name": "ERC20InvalidReceiver",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			}
		],
		"name": "ERC20InvalidSender",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "ERC20InvalidSpender",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "InvalidLength",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "InvalidMessageSender",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "InvalidMessageType",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "chainSelector",
				"type": "uint256"
			}
		],
		"name": "InvalidPeer",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "router",
				"type": "address"
			}
		],
		"name": "InvalidRouter",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "OwnableInvalidOwner",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "OwnableUnauthorizedAccount",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "RouterAddressCannotBeZero",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "sourceChainSelector",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "bytes32",
				"name": "messageHash",
				"type": "bytes32"
			}
		],
		"name": "PingReceived",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "destinationChainSelector",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "bytes32",
				"name": "messageHash",
				"type": "bytes32"
			}
		],
		"name": "PingSent",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "sourceChainSelector",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "bytes32",
				"name": "messageHash",
				"type": "bytes32"
			}
		],
		"name": "PongReceived",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "destinationChainSelector",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "bytes32",
				"name": "messageHash",
				"type": "bytes32"
			}
		],
		"name": "PongSent",
		"type": "event"
	},
	{
		"inputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "blockNumber",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "sourceChainSelector",
						"type": "uint256"
					},
					{
						"components": [
							{
								"internalType": "bytes32",
								"name": "lower",
								"type": "bytes32"
							},
							{
								"internalType": "bytes32",
								"name": "upper",
								"type": "bytes32"
							}
						],
						"internalType": "struct bytes64",
						"name": "sender",
						"type": "tuple"
					},
					{
						"internalType": "uint256",
						"name": "destinationChainSelector",
						"type": "uint256"
					},
					{
						"components": [
							{
								"internalType": "bytes32",
								"name": "lower",
								"type": "bytes32"
							},
							{
								"internalType": "bytes32",
								"name": "upper",
								"type": "bytes32"
							}
						],
						"internalType": "struct bytes64",
						"name": "receiver",
						"type": "tuple"
					},
					{
						"internalType": "bytes32",
						"name": "hashedData",
						"type": "bytes32"
					}
				],
				"internalType": "struct EquitoMessage",
				"name": "message",
				"type": "tuple"
			},
			{
				"internalType": "bytes",
				"name": "messageData",
				"type": "bytes"
			}
		],
		"name": "receiveMessage",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256[]",
				"name": "chainSelectors",
				"type": "uint256[]"
			},
			{
				"components": [
					{
						"internalType": "bytes32",
						"name": "lower",
						"type": "bytes32"
					},
					{
						"internalType": "bytes32",
						"name": "upper",
						"type": "bytes32"
					}
				],
				"internalType": "struct bytes64[]",
				"name": "addresses",
				"type": "tuple[]"
			}
		],
		"name": "setPeers",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "transfer",
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
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
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
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
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
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
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
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "chainSelector",
				"type": "uint256"
			}
		],
		"name": "getPeer",
		"outputs": [
			{
				"components": [
					{
						"internalType": "bytes32",
						"name": "lower",
						"type": "bytes32"
					},
					{
						"internalType": "bytes32",
						"name": "upper",
						"type": "bytes32"
					}
				],
				"internalType": "struct bytes64",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
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
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "peers",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "lower",
				"type": "bytes32"
			},
			{
				"internalType": "bytes32",
				"name": "upper",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
] as const;
