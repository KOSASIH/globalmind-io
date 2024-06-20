// GlobalMindContract.sol
pragma solidity ^0.8.10;

contract GlobalMindContract {
    address public owner;
    mapping (address => uint256) public userInteractions;

    constructor() public {
        owner = msg.sender;
    }

    function interact(address user) public {
        userInteractions[user] += 1;
    }

    function getUserInteractions(address user) public view returns (uint256) {
        return userInteractions[user];
    }
}
