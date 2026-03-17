# ⛓️ Blockchain Lab #3 — Testnet Transaction Analysis

이 프로젝트는 블록체인의 3대 핵심 요소인 **Nonce, Gas, Signature**를 실제 네트워크에서 실습하고, `ethers.js v6` 라이브러리를 사용하여 온체인 데이터를 프로그래밍 방식으로 추출 및 분석하는 과정을 다룹니다.

## 🚀 실습 목표
- **Nonce**: 트랜잭션 일련번호를 통한 리플레이 공격(Replay Attack) 방지 원리 이해
- **Gas**: EVM 연산 비용 측정 및 네트워크 수수료 메커니즘 학습
- **Signature**: ECDSA(타원곡선 암호) 기반 디지털 서명을 통한 데이터 무결성 검증

## 📂 프로젝트 구조

### 1. 트랜잭션 전송 분석 (`task3_transfer.js`)
Sepolia 테스트넷에서 발생한 실제 전송 트랜잭션을 분석하는 Node.js 스크립트입니다.
- **주요 기능**: 특정 TX Hash를 입력받아 블록체인 노드로부터 다음 데이터를 직접 추출
  - `Nonce`: 해당 계정에서 보낸 트랜잭션의 순서 번호 확인
  - `Recipient Address (To)`: $ETH$를 수신한 대상의 지갑 주소 확인
  - `Amount Transferred`: 전송된 $ETH$ 수량 확인 ($Wei \rightarrow ETH$ 단위 변환 적용)

## 🛠️ 기술 스택
- **Language**: Node.js
- **Library**: `ethers.js v6`
- **Network**: Ethereum Sepolia (L1)
- **Tools**: MetaMask, [Etherscan](https://sepolia.etherscan.io)

## ⚙️ 설치 및 실행 방법

1. **저장소 클론**
   ```bash
   git clone [https://github.com/본인아이디/레포지토리이름.git](https://github.com/본인아이디/레포지토리이름.git)
   cd 레포지토리이름
