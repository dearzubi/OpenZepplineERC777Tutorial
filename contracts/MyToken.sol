// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC777/ERC777.sol";

contract MyToken is ERC777{

    constructor (uint _initSupply, address[] memory defaultOperators) ERC777("MYToken", "MYT", defaultOperators) {
    {
        _mint(msg.sender, _initSupply * (10 ** decimals()), "", "");
    }
}
}