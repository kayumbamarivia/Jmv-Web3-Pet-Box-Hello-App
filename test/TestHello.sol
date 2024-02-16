// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Hello.sol";

contract TestHello {
    Hello hello = Hello(DeployedAddresses.Hello());
    string expectedGreeting = "Hello, Kayumba!";

    function testGetGreeting() public {
        string memory greeting = hello.getGreeting();
        Assert.equal(greeting, expectedGreeting, "Greeting should be initialized as 'Hello, User!'");
    }

    function testSetGreeting() public {
        string memory newGreeting = "Hi there!";
        hello.setGreeting(newGreeting);
        string memory updatedGreeting = hello.getGreeting();
        Assert.equal(updatedGreeting, newGreeting, "Greeting should be updated to 'Hi there!'");
    }

    function testSetOwnerName() public {
        string memory newName = "JMV";
        hello.setOwnerName(newName);
        string memory updatedGreeting = hello.getGreeting();
        Assert.equal(updatedGreeting, string(abi.encodePacked("Hello, ", newName, "!")), "Greeting should include the new owner name");
    }
}
