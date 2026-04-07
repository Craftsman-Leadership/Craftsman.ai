---
layout: guide
title: "The XR Developer's Guide to Military Training Contracts"
difficulty: advanced
tier: tactical
tags: ["xr", "vr", "ar", "training", "technology", "motar"]
date: 2026-04-07
author: "Dr. Jesse W. Johnson, DSL, MAOM"
---

 **The XR Developer's Guide to Military Training Contracts**
*Difficulty: Advanced | Strategic Tier: Tactical (Do) | Domain: Technology/Training*

Stop thinking like a startup. Start thinking like a logistics officer.

You’ve built a beautiful VR training module. The physics are tight, the lighting is cinematic, and your haptic feedback makes users feel the recoil. Now you want to sell it to the Department of Defense. 

Here’s the reality check: The Air Force doesn’t buy “immersive experiences.” It buys readiness outcomes delivered through verified, secured, and sustained technical capabilities. Your Oculus Quest demo means nothing if it can’t run on a disconnected network at a forward operating base with dirty power and zero IT support.

I’ve sat in those source selection rooms for 25 years. I’ve watched brilliant developers with bleeding-edge tech get shown the door because they treated military acquisition like a commercial app store launch. This guide will teach you how to survive the transition from garage innovator to trusted defense partner.

---

## Strategic Foundations (Think): Understanding the Battlespace

Before you write a line of contract-specific code, you must understand that military XR exists in a fundamentally different domain than commercial immersive tech.

**The Interoperability Imperative**
Commercial XR is siloed by design—proprietary stores, closed ecosystems, recurring revenue through forced obsolescence. Military XR must interoperate with systems built thirty years ago. Your beautiful training environment means nothing if it can’t exchange data with legacy Operational Flight Programs (OFPs) or feed learning management systems through SCORM or xAPI (Tin Can) standards.

The Synthetic Training Environment (STE) and architectures like MOTAR (Military Open Training Architecture Reference) aren’t suggestions—they’re survival requirements. If your solution creates another data island, you’re not a solution; you’re a problem wearing a headset.

**Security as Architecture, Not Afterthought**
In commercial development, security is a sprint at the end. In military XR, security *is* the architecture. You’re not just protecting credit card numbers; you’re protecting Tactics, Techniques, and Procedures (TTPs) that keep warfighters alive. 

Impact Level 4 (IL4) is table stakes for many training environments. IL6 (Secret) is where real warfighting training happens. If your team doesn’t understand cross-domain solutions, data-at-rest encryption, and the difference between SIPRNET and NIPRNET, you’re building for the wrong customer.

**The Partner, Not Product, Mindset**
The Defense Innovation Unit didn’t invest in your company because you have a cool product. They invested because you demonstrated the capacity to become a *capability partner*. This means you’re willing to co-develop, iterate based on operational feedback, and maintain capability over decades, not quarters. The Pentagon doesn’t buy apps. It sustains weapon systems. Start thinking in those terms.

---

## Operational Leadership (Lead): Building the Architecture for Success

Tactical excellence means nothing without operational scaffolding. Here’s how to structure your approach to defense XR contracting.

**Assemble a Hybrid Team**
Your Unity/Unreal developers must sit next to people who understand Military Operations Research (MOR). You need retired NCOs who can tell you that your “realistic” loading procedure physically breaks the 95th percentile female airman’s grip strength. You need acquisition professionals who understand the difference between Part 45 (Research and Development) and Part 12 (Commercial) acquisitions—and when to use Other Transaction Agreements (OTAs) to bypass the Federal Acquisition Regulation swamp.

Most importantly, you need a security engineer—not a consultant, but a full-time employee—who wakes up thinking about CMMC Level 3 compliance and sleeps worrying about supply chain vulnerabilities in your Chinese-manufactured haptic controllers.

**Customer Discovery That Matters**
Stop demoing to program offices. Demo to maintainers, crew chiefs, and pilots in operational squadrons. The 18-year-old maintainer at Dyess Air Force Base who’s been turning wrenches for two years knows more about the cognitive load of engine diagnostics than the Major managing the training budget.

When you discover pain points at the tactical edge, you build *pull* rather than *push*. When operators demand your solution, program offices find money. That’s strategic patience—understanding that the best contract vehicle is one that’s operationally validated before the RFP hits the street.

**Navigate the Valley of Death**
The transition from SBIR Phase II success to Program of Record funding is where XR companies die. You must build your Phase II deliverable with Program Executive Office (PEO) integration in mind. Design modularly. Architect for scalability. Document everything to Mil-Std-498 standards even if it’s not required yet. 

If your Phase II ends with a “pilot,” you’ve already lost. It must end with a pathway to production that includes funding line advocacy and a plan for fielding support—because the government doesn’t have the organic capability to sustain your code indefinitely.

---

## Tactical Execution (Do): The Technical and Contracting Playbook

This is where values-based decisions meet contract clauses.

**Technical Standards Compliance**
*MOTAR Integration*: If you’re not developing against the Military Open Training Architecture Reference framework, start over. Your content must be discoverable, composable, and interoperable. Use open standards: 
- **CDB (Common Database)** for geospatial terrain
- **Open Geospatial Consortium (OGC)** standards for 3D Tile streaming
- **xAPI** for learning record stores, not proprietary analytics

*Content Pipeline Discipline*: Military XR requires Level of Development (LOD) 400+ modeling for mission-critical systems. That means every bolt, every wire, every hydraulic line modeled to sustainment level detail. Your commercial Poly-count optimization techniques won’t cut it when a maintainer needs to identify a specific AN fitting in virtual darkness with night vision device simulation active.

*Hardware Reality*: Design for the worst-case scenario. If your solution requires an RTX 4090 and fiber internet, you’ve built a lab demo, not a field solution. Target edge computing architectures that operate on tactical servers with limited bandwidth. Plan for degraded operations—what happens when the network drops but training must continue?

**Security Implementation**
*DevSecOps for Defense*: Implement a Continuous Integration/Continuous Deployment (CI/CD) pipeline that includes static analysis, Software Composition Analysis (SCA), and verified builds. At IL6, every library, every dependency, every compiler version is scrutinized. Your “move fast and break things” culture dies here—and good riddance.

*Data Rights Management*: Understand DFARS 252.227-7013 (Rights in Technical Data) and 7014 (Rights in Computer Software). The government likely wants Unlimited Rights in your training content if they paid for development. Negotiate Limited Rights early, document your assertions, and understand that “commercial off-the-shelf” (COTS) claims require actual prior commercial sales—not Kickstarter campaigns.

**Contracting Vehicle Strategy**
*Phase Strategically*: Use SBIR Phase I for concept validation, Phase II for prototype development, but plan the Direct to Phase II (D2P2) pathway or Rapid Phase II options if you’re mature. Don’t wait for perfect; deliver minimum viable capability that meets security requirements.

*OTA Utilization*: Other Transaction Agreements allow you to prototype without FAR compliance, but read the fine print. Section 804 OTA authority requires cost-sharing and specifically prohibits follow-on production contracts without competition. Use OTA to prove capability, then transition to Federal Acquisition Regulation (FAR)-based vehicles for sustainment.

*Teaming Architecture*: Prime/sub relationships matter. If you’re a small XR developer, partner with a traditional defense contractor not as a supplier, but as a co-developer. Bring your agility; they bring their compliance infrastructure. But retain your intellectual property. Sign teaming agreements that specify data rights, revenue splits, and transition strategies before the proposal, not after the win.

**Fielding and Sustainment**
*Deployability*: Design your XR solution for CONUS/OCONUS deployment via standard military logistics channels. That means palletizing considerations, ruggedized cases, and Technical Orders (TOs) that mirror aircraft manual standards. If it can’t survive a C-17 flight and a forklift mishap, it’s not field-ready.

*Training the Trainers*: Build a “train the trainer” module into your base deliverable. Military units experience personnel turnover every 2-3 years. Your technology transfer must include comprehensive documentation, not just code comments.

*Feedback Loops*: Implement biometric monitoring (heart rate, eye tracking, cognitive load measures) with appropriate privacy safeguards. Military training effectiveness is measured by performance deltas, not user satisfaction surveys. Build the telemetry architecture to prove readiness improvement—or prepare to be defunded.

---

## Strategic Takeaways: The Craftsman’s Commitment

You are not entering the “VR market.” You are entering the defense industrial base—a realm where strategic patience means 18-month contract cycles and innovation within constraints means delivering magic inside a SCIF (Sensitive Compartmented Information Facility).

**Remember the Framework:**
- **Think**: Interoperability isn’t a feature; it’s the foundation. Security isn’t a product; it’s the architecture.
- **Lead**: Build teams that speak both Unreal Engine and military culture. Navigate the transition from prototype to program with relentless operational focus.
- **Do**: Execute with technical excellence that respects the constraints of classified networks, limited bandwidth, and austere environments.

The military doesn’t need another disrupter selling headsets. It needs craftsmen who understand that extended reality is just another tool in the commander’s kitbag—a tool that only matters if it produces measurable increases in lethality, survivability, and mission success.

Build for that reality. The warfighter is waiting.

*Dr. Jesse W. Johnson*  
*Founder, Craftsman Leadership*  
*25 Years Air Force Acquisition & Strategic Innovation*