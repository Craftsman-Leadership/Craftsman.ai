---
layout: guide
title: "ATO Process: Authority to Operate for Software Products"
difficulty: advanced
tier: tactical
tags: ["ato", "cybersecurity", "compliance", "software", "authorization"]
date: 2026-03-08
author: "Dr. Jesse W. Johnson, DSL, MAOM"
---

 **The ATO Reality: You're Not Securing Software, You're Managing Risk in a Warfighting Environment**

Listen closely. I've spent twenty-five years in Air Force acquisition watching brilliant software solutions die in the authorization phase—not because they were insecure, but because contractors treated the Authority to Operate (ATO) process as a paperwork drill rather than a strategic risk management discipline.

If you're reading this at the tactical level, you're likely nose-deep in eMASS entries, STIG compliance reports, and POA&M spreadsheets. Step back. Before you execute, you need to understand what game you're actually playing.

## Strategic Foundations (Think): The Authorization Ecosystem

The ATO isn't a gate. It's a promise. When the Authorizing Official (AO) signs that document, they're accepting operational risk on behalf of the warfighter. In the Air Force acquisition world, that signature means: "This system can fail, and I'm willing to stand before a board of inquiry and explain why I let it touch the network."

Most software vendors view cybersecurity compliance as a procurement hurdle. That's fatal thinking. The Department of Defense doesn't buy products; we build partnerships for operational resilience. Your software isn't a SKU—it's a node in a kill chain. When you approach ATO as a partnership in warfighting readiness rather than a compliance burden, everything changes.

Here's the strategic reality: The Risk Management Framework (RMF) codified in NIST SP 800-37 isn't bureaucratic obstruction. It's the distillation of decades of operational failures translated into control requirements. Every check-box represents a hard-learned lesson from systems that got penetrated, data that got exfiltrated, and missions that got compromised.

**Strategic Principle: Innovation Within Constraints**
The constraint isn't the framework—it's your understanding of it. Advanced practitioners know that RMF flexibility allows for cloud-native architectures, zero-trust implementations, and DevSecOps automation. But you cannot innovate your way around risk acceptance. You can only architect your way through it.

## Buyer Perspective: What the Air Force Actually Needs

From the acquisition seat, I've seen too many software companies show up with a "FedRAMP authorized" stamp thinking the battle is won. It's not. DoD systems operate under different threat profiles than civilian agencies. The DoD Cloud Computing Security Requirements Guide (CC SRG) isn't optional reading—it's your bible.

When an Air Force Program Manager evaluates your authorization package, they're asking three questions:

1. **Can this survive in a contested cyber environment?** Not "is it secure," but "will it fail gracefully under attack?"
2. **Can we patch it faster than adversaries can exploit it?** Your continuous monitoring strategy matters more than your initial security controls.
3. **Do they understand the mission?** If your SSP (System Security Plan) reads like generic compliance filler, you don't understand the operational context.

**Buyer's Hard Truth:** We don't have time for security theater. The old "waterfall ATO"—spend six months documenting, six months testing, get three years of authorization—is dying. Modern Air Force operations demand Continuous ATO (cATO) capabilities. If your software architecture can't support automated compliance checking and real-time risk monitoring, you're bringing a typewriter to a digital fight.

## Tactical Execution (Do): The Advanced ATO Playbook

You want tactical? Here's the unvarnished workflow for getting software authorized in today's environment.

### Phase 1: Categorization and Control Selection (The Multiplier Effect)

Don't start with NIST 800-53 rev 5 and try to implement every control. Start with **inheritance**. 

If you're deploying on Platform One, Iron Bank containers, or an existing authorized cloud environment, you're not building a control stack from scratch—you're standing on the shoulders of existing security baselines. This is where "Partners not Products" becomes tactical reality.

**Advanced Tactic:** Map your Software Bill of Materials (SBOM) against the Common Controls Hub before you write your SSP. If 70% of your risk posture inherits from the platform, highlight that in your Security Assessment Report (SAR). Don't hide behind vague statements—provide the inheritance traceability matrix that allows the assessor to verify your risk calculations in minutes, not days.

### Phase 2: Implementation With Evidence

Here's where most software companies crash: They implement controls but don't produce **artifacts** that prove it.

For each high-impact control, you need:
- Configuration baselines (Infrastructure as Code templates)
- Automated evidence collection (SCAP scan results, not manual checklists)
- Container security scans (Twistlock, Trivy, or Clair reports)
- API security testing results (OWASP ZAP or Burp Suite findings)

**Tactical Reality Check:** If your development team treats security testing as a phase, you've already lost. Shift-left isn't jargon—it's survival. Integrate STIG compliance into your CI/CD pipeline. When the assessor asks for evidence CCW-01 (Continuous Monitoring Strategy) is implemented, you hand them a dashboard, not a document.

### Phase 3: Assessment and the POA&M Strategy

You will have findings. Accept it. The Plan of Action and Milestones (POA&M) is where sophisticated operators separate from amateurs.

Don't POA&M your way around architectural flaws. If you've got critical vulnerabilities in your application stack, don't promise to "mitigate via operational controls"—fix the code. Authorizing Officials can smell evasion.

**Advanced POA&M Technique:** Categorize your findings by exploitability and mission impact, not just CVSS scores. Show the AO that you understand operational risk by mapping vulnerabilities to specific mission threads. A SQL injection in a non-critical reporting module gets different treatment than a buffer overflow in the authentication service.

### Phase 4: The Authority to Operate Decision

This is where **values-based decision making** meets tactical execution. When you present your authorization package, include a risk statement that acknowledges what could go wrong and how you're monitoring for it.

Template: "System X accepts risk Y under condition Z, mitigated via controls A, B, C, with detection capability D providing alert within E minutes."

If you can't fill in those variables, you're not ready for authorization.

## Operational Leadership (Lead): Managing the Process

Getting an ATO requires leading without authority. You're orchestrating the Authorizing Official, the Information System Security Manager (ISSM), the Security Control Assessor (SCA), and your own development team—each with competing priorities and varying risk appetites.

**Lead Principle: Strategic Patience**
The RMF process works slowly because it's designed to resist false urgency. When your customer demands deployment by quarter-end, your leadership challenge isn't to shortcut controls—it's to educate stakeholders on why the authorization boundary includes the entire stack, not just your application layer.

Build coalitions with the cyber team early. Invite them to sprint reviews. Show them the SBOM evolution. When the ISSM understands your architecture, they become advocates, not obstacles.

**Leadership in Constraint:** If you're limited to IL4 (Impact Level 4) environments, don't waste energy wishing for IL6. Instead, architect data segregation strategies that keep CUI (Controlled Unclassified Information) within bounds while maximizing functionality. Innovation within constraints forces architectural elegance.

**Managing Continuous Monitoring:**
The ATO isn't the finish line—it's mile marker one. Operate under the assumption that your authorization can be revoked if your continuous monitoring data dries up. Automate your POA&M updates. When your vulnerability scans show new findings, proactively update the risk register before the SCA discovers it.

## Strategic Takeaways

1. **The ATO is a Leadership Document, Not a Compliance Certificate.** It represents a human being accepting risk on behalf of warfighters. Treat it with the gravity of operational readiness.

2. **Inheritance is Force Multiplication.** Stop reinventing security controls. Leverage existing authorized platforms, hardened containers, and inherited common controls. This isn't cheating—it's strategic resource allocation.

3. ** automate or Perish.** Manual evidence collection is a technical debt that compounds monthly. If your ATO strategy requires manual STIG checks or quarterly security scans, you're operating on borrowed time.

4. **Continuous Authorization Requires Continuous Trust.** The cATO concept only works when the AO trusts your team's ability to self-assess and self-report. Build that trust through transparency, not perfection.

5. **Security is a Partnership, Not a Product.** You cannot buy your way to an ATO. You must build a collaborative relationship with the authorization ecosystem, treating cybersecurity professionals as mission partners rather than gatekeepers.

**Final Word:** In my twenty-five years of acquisition, I've watched the ATO process evolve from a bureaucratic checkbox to a strategic differentiator. Software that navigates authorization efficiently demonstrates organizational maturity, operational understanding, and risk management sophistication. 

Master this process, and you're not just selling software. You're delivering warfighting capability with resilience engineered in from the start. That's the Craftsman standard. Execute accordingly.