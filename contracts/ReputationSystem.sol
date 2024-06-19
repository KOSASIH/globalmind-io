// globalmind-io/contracts/ReputationSystem.sol
pragma solidity ^0.6.0;

contract ReputationSystem {
    address[] public users;
    mapping (address => uint256) public reputation;

    function addUser(address user) public {
        users.push(user);
    }

    function updateReputation(address user, uint256 value) public {
        reputation[user] += value;
    }

    function getReputation(address user) public view returns (uint256) {
        return reputation[user];
    }
}
