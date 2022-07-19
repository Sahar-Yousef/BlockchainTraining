// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.1;

contract account {

    uint public balanceReceived;
    address public owner;

    constructor() {
            owner = msg.sender;
    }
    
// function for receive Money
    function receiveMoney() public payable {
            balanceReceived += msg.value;
    }

// function to get wallet Balance
    function getBalance() public view returns(uint) {
            return address(this).balance;
    }

// function for withdraw money from same account
    function withdrawMoney() public {
            require(owner == msg.sender, "You cannot withdraw.");
            address payable to = payable(msg.sender);
            to.transfer(getBalance());
    }

// function for withdraw money from another account
    function withdrawMoneyTo(uint ammount, address payable _to) public {
            require(owner == msg.sender, "You cannot withdraw.");
            _to.transfer(ammount);
    }

// function to destroy the contract after finished
    function destroySmartContract(address payable _to) public {
            require(msg.sender == owner, "You are not the owner");
            selfdestruct(_to);
    }

}
