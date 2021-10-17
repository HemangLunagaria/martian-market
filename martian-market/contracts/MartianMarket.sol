pragma solidity ^0.6.0;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/access/Ownable.sol';
import "./MartianAuction.sol";

contract MartianMarket is ERC721, Ownable {

    constructor() ERC721("MartianMarket", "MARS") public {}

    address payable foundation_address = address(uint160(owner()));

    mapping(uint => MartianAuction) public auctions;

    modifier landRegistered(uint token_id) {
        require(_exists(token_id), "Land not registered!");
        _;
    }
    
    function getAuction(uint token_id) public view returns(MartianAuction){
        return auctions[token_id];
    }

    function createAuction(uint token_id) public onlyOwner {
        auctions[token_id] = new MartianAuction(msg.sender);
    }

    function registerLand(string memory uri) public payable onlyOwner {
        uint _id = totalSupply();
        _mint(msg.sender, _id);
        _setTokenURI(_id, uri);
        createAuction(_id);
    }

    function endAuction(uint token_id) public onlyOwner landRegistered(token_id) {
        MartianAuction auction = auctions[token_id];
        auction.auctionEnd();
        safeTransferFrom(owner(), auction.highestBidder(), token_id);
    }

    function getOwner() public view returns (address) {
        return owner();
    }

    function auctionEnded(uint token_id) public view returns(bool) {
        //MartianAuction auction = auctions[token_id];
        return getAuction(token_id).ended();
    }

    function highestBid(uint token_id) public view landRegistered(token_id) returns(uint) {
        //MartianAuction auction = auctions[token_id];
        return getAuction(token_id).highestBid();
    }

    function pendingReturn(uint token_id, address sender) public view landRegistered(token_id) returns(uint) {
        //MartianAuction auction = auctions[token_id];
        return getAuction(token_id).pendingReturn(sender);
    }

    function bid(uint token_id) public payable landRegistered(token_id) {
        //MartianAuction auction = auctions[token_id];
        getAuction(token_id).bid.value(msg.value)(msg.sender);
    }

}
