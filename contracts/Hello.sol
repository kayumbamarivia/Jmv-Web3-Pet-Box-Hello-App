
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Hello {
    address public owner;
    string public ownerName;
    string public greetingMessage;

    constructor() {
        owner = msg.sender;
        ownerName = "Kayumba Jean Marie Vianney";
        greetingMessage = "Hello, Kayumba Jean Marie Vianney!";
    }
    
    function getGreeting() public view returns (string memory) {
        return greetingMessage;
    }
    function setGreeting(string memory _newGreeting) public {
        require(msg.sender == owner, "Only the owner can set the greeting");
        greetingMessage = _newGreeting;
    }

    function setOwnerName(string memory _name) public {
        require(msg.sender == owner, "Only the owner can set the name");
        ownerName = _name;
        greetingMessage = string(abi.encodePacked("Hello, ", _name, "!"));
    }
}

