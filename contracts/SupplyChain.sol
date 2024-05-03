// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

error ALREADY_AT_DESTINATION();
contract SupplyChain {

    event Transfer(address indexed from, address indexed to, bytes32 data);

    mapping(address=>address) public sourceToDestination;
    mapping(address => address) public sourceToIntermediate;
    mapping(address=>bytes32) public nodeToData;

    uint256 private random;

    constructor(){
        random = 10;
    }

    function initiate(address source, address destination, bytes32 data) public {
        sourceToDestination[source]=destination;
        nodeToData[source] = data;
    }

    function transfer(address source, address to) public {
        sourceToIntermediate[source] = to;
        nodeToData[to] = nodeToData[source];

        emit Transfer(source, to, nodeToData[source]);
    }

    function getData(address node) public view returns (bytes32){
        return nodeToData[node];
    }

    function getDestination(address source) public view returns(address){
        return sourceToDestination[source];
    }

    function getRandom() public view returns (uint256){
        return random;
    }
}