pragma solidity ^0.8.19;

import "./DiamondCut.sol";
import "./DiamondLoupe.sol";
import "./OwnershipFacet.sol";


contract Diamond {
    constructor(address _owner, DiamondCut.FacetCut[] memory _diamondCut) {
        DiamondCut.diamondCut(_diamondCut, address(0), new bytes(0));
        DiamondLoupe.diamondLoupe();
        OwnershipFacet.transferOwnership(_owner);
    }

    fallback() external payable {
        address facet = DiamondLoupe.facetAddress(bytes4(msg.sig));
        require(facet != address(0), "Function does not exist.");
        assembly {
            let ptr := mload(0x40)
            calldatacopy(ptr, 0, calldatasize())
            let result := delegatecall(gas(), facet, ptr, calldatasize(), 0, 0)
            let size := returndatasize()
            returndatacopy(ptr, 0, size)
            switch result
                case 0 {revert(ptr, size)}
                default {return (ptr, size)}
        }
    }
}