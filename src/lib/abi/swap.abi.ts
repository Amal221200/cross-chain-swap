export const swapABI = [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_router",
          "type": "address"
        }
      ],
      "stateMutability": "payable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "InsufficientValueSent",
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
      "name": "RouterAddressCannotBeZero",
      "type": "error"
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
          "internalType": "bytes32",
          "name": "messageHash",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "destinationChainSelector",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "sourceToken",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "sourceAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "bytes",
          "name": "destinationToken",
          "type": "bytes"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "destinationAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "bytes",
          "name": "recipient",
          "type": "bytes"
        }
      ],
      "name": "SwapRequested",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "bytes",
          "name": "sourceToken",
          "type": "bytes"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "destinationChainSelector",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "destinationToken",
          "type": "bytes"
        }
      ],
      "name": "calculateDestinationTokenAmount",
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
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
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
          "name": "swapAddresses",
          "type": "tuple[]"
        }
      ],
      "name": "setSwapAddress",
      "outputs": [],
      "stateMutability": "nonpayable",
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
          "internalType": "bytes[]",
          "name": "destinationTokens",
          "type": "bytes[]"
        },
        {
          "internalType": "uint256[]",
          "name": "prices",
          "type": "uint256[]"
        }
      ],
      "name": "setTokenPrice",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "destinationChainSelector",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "destinationToken",
          "type": "bytes"
        },
        {
          "internalType": "bytes",
          "name": "recipient",
          "type": "bytes"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "swap",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "destinationChainSelector",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "destinationToken",
          "type": "bytes"
        },
        {
          "internalType": "bytes",
          "name": "recipient",
          "type": "bytes"
        },
        {
          "internalType": "address",
          "name": "sourceToken",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "swap",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        }
      ],
      "name": "tokenPrice",
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
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ] as const;

