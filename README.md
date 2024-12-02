<a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=1000&size=55&pause=1000&center=true&vCenter=true&width=1000&lines=PredictX;  Predict+Bet+Earn+Rewards" alt="Typing SVG" /></a>

# PredictX

### PredictX is a decentralized prediction platform where users can engage in predictive activities for **cryptocurrency prices** and **sports statistics**, allowing them to earn rewards based on the accuracy of their predictions.

---

## Key Features

### PredictX empowers users with the following features:

- **Predict Cryptocurrency Prices:** Make predictions on the price movements of popular cryptocurrencies within specific time frames.
- **Predict Sports Statistics:** Place predictions on the performance stats of various sporting events.
- **Bet Rewards:** Earn rewards based on the accuracy of your predictions.
- **Fair and Transparent Rewards:** All reward distributions are calculated on-chain for complete transparency.
- **Seamless Interaction:** Utilize the Base chain's fast and efficient infrastructure for a smooth prediction experience.

---

## Challenges and Solutions

### Addressing Common Issues with PredictX:

1. **Lack of Transparency in Traditional Prediction Markets:**
   - **Solution:** PredictX leverages blockchain technology on the Base chain to ensure transparency in all transactions and results.

2. **Limited User Engagement:**
   - **Solution:** Users are incentivized with dynamic reward structures to keep them engaged.

3. **Barriers to Entry for New Users:**
   - **Solution:** A user-friendly interface and step-by-step onboarding ensure accessibility for newcomers.

4. **Reward Inequity:**
   - **Solution:** Proportional reward calculations based on prediction accuracy foster fair reward distribution.

---

## Tech Stack

- **Base Chain**: Decentralized infrastructure for high-speed, low-cost transactions.
- **Next.js**: For building a fast and scalable frontend.
- **TypeScript**: Ensuring type safety and better developer experience.
- **Tailwind CSS**: For building a clean, responsive, and modern UI.
- **Solidity**: To develop secure smart contracts for managing bets and rewards.

---

## Contract Overview

| **Function**                | **Visibility** | **Parameters**                                                                 | **Explanation**                                                                                                                                                                                                                                    |
|-----------------------------|----------------|-------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `constructor(address _token)`| `external`     | `_token`: address of the ERC20 token to be used for betting                    | Initializes the contract by setting the token address and the owner to the message sender.                                                                                                                                                        |
| `createPool()`               | `external`     | None                                                                          | Allows the owner to create a new prediction pool.                                                                                                                                                                                                 |
| `placeBet(uint256 _amount, uint256 _target, uint256 _pool_id)`| `external` | `_amount`: tokens to bet, `_target`: predicted value, `_pool_id`: ID of the pool| Users can place bets on a specific pool by providing the bet amount and target. Tokens are transferred to the contract.                                                                                                                            |
| `setResult(uint256 _pool_id, uint256 _finalResult)` | `external`    | `_pool_id`: ID of the pool, `_finalResult`: final result                       | Owner sets the final result of the pool. This triggers reward calculation based on prediction accuracy.                                                                                                    |
| `_calculationReward(uint256 _pool_id)` | `private`      | `_pool_id`: ID of the pool                                                   | Calculates rewards for participants based on their prediction accuracy compared to the final result.                                                                                                       |
| `claimBet(uint _pool_id)`    | `external`     | `_pool_id`: ID of the pool                                                    | Allows users to claim rewards once the pool has ended. Tokens are transferred to the user upon successful claim.                                                                                          |
| `withdraw(uint256 amount, address _receiver)` | `external`    | `amount`: tokens to withdraw, `_receiver`: recipient address                  | Owner can withdraw unclaimed tokens from the contract to a designated address.                                                                                                                             |

---

## Key Concepts

- **Prediction Pools**: Users can join pools dedicated to cryptocurrency or sports predictions.
- **Accurate Reward Distribution**: Rewards are allocated based on a weighted accuracy formula.
- **Transparency with Blockchain**: All operations and reward calculations are securely logged on the Base chain.

---

## Events

- **BetPlaced**: Emitted when a user places a bet.
- **BetClaimed**: Emitted when a user claims their reward.

---

### Platform UI 
![Platform UI Image]()

---

### Blockscout Explorer Link

- **Base Explorer:**  
  [Explore the Contract on Base](https://sepolia.basescan.org/address/0xadD4E93d058090bCeFa96EB34D723E2d48533e97)
- **Deployed Token on Base**
  [See deployed token On Base sepolia](https://sepolia.basescan.org/address/0xFa21f835BfA6fAAba79444cfed540ee4F1F3f8d0)
---

## Notion Docs

[PredictX Notion Documentation]()
