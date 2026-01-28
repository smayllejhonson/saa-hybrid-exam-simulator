# 🏗️ SAA Hybrid Exam Simulator

### 📜 The Manifesto
After five years of studying, practicing labs, and navigating life's hurdles, I am returning to the path to conquer the **AWS Solutions Architect Associate (SAA-C03)** exam. This project is my "re-entry" into the cloud, built on a fresh foundation.

### 🎯 The Mission
To master AWS architecture by building a full-stack **multiple-choice exam simulator**. This tool will mimic the SAA-C03 exam experience while running on a hybrid infrastructure—bridging the gap between my local "On-Prem" Linux lab and Cloud-Native AWS services.

### 🛠️ Technical Architecture (Tamriel)
* **Hardware:** Lenovo Laptop (Headless)
* **OS:** Ubuntu Server 24.04 LTS
* **Local Network:** 10.0.0.205 (Static IP)
* **Virtualization:** Docker Engine + Docker Compose
* **Security:** SSH-Key Only Access

📜 The "Hybrid Exam Simulator" Manifesto v2.0
Let's refine the vision to reflect these high-level goals. I recommend updating your README.md on Tamriel so it’s synced with your code.

1. The Mission
To build a high-fidelity, hybrid-cloud exam simulator for the SAA-C03 that moves beyond simple memorization and focuses on Domain Mastery and Exam Stamina.

2. Core Pillars
The Hybrid Bridge: A React frontend hosted locally (on Tamriel/Docker) communicating with AWS Cloud services (DynamoDB/Lambda).

Domain Intelligence: Questions are tagged by SAA-C03 Domains (Compute, Storage, Network, Database). The app provides a "Weakness Radar" at the end of each session.

Anti-Memorization Engine: Every session features a randomized question pool and shuffled answer options to ensure conceptual understanding over muscle memory.

Exam Stamina: Support for full-length "Exam Mode" (50+ questions) with state persistence (Pause/Resume).

3. The "Post-Game" Feedback Loop
No mid-exam interruptions.

Comprehensive "Results Dashboard" showing score by domain and detailed explanations for every question to bridge knowledge gaps.
