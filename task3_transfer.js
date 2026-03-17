const { ethers } = require("ethers");

// TODO: 복사한 전송 트랜잭션 해시로 변경하세요.
const TX_HASH = "0x_YOUR_TRANSFER_TX_HASH_HERE";

// Sepolia RPC 프로바이더 연결
const provider = new ethers.JsonRpcProvider("https://ethereum-sepolia-rpc.publicnode.com");

async function fetchTransferInfo() {
    try {
        const tx = await provider.getTransaction(TX_HASH);
        if (!tx) {
            console.log("트랜잭션을 찾을 수 없습니다.");
            return;
        }

        console.log("=== Task 3: Transfer Transaction Info ===");
        console.log("Transaction Hash:", tx.hash);
        console.log("Nonce:", tx.nonce);
        console.log("Friend's Address (To):", tx.to);
        
        // Value는 Wei 단위이므로 ETH 단위로 변환합니다.
        console.log("Amount Transferred:", ethers.formatEther(tx.value), "ETH");
    } catch (error) {
        console.error("오류 발생:", error);
    }
}

fetchTransferInfo();