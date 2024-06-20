pragma solidity ^0.6.0;

contract IdentityContract {
    mapping (address => string) public identities;

    function setIdentity(string memory _identity) public {
        identities[msg.sender] = _identity;
    }

    function getIdentity(address _address) public view returns (string memory) {
        return identities[_address];
    }
}
