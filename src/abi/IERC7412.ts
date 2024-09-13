import { parseAbi } from "viem";

const IERC7412 = parseAbi([
    'error OracleDataRequired(address oracleContract, bytes oracleQuery)',
    'error FeeRequired(uint feeAmount)',
    'function oracleId() view returns (bytes32)',
    'function fulfillOracleQuery(bytes calldata signedOffchainData) payable'
])
export {IERC7412}