---
layout: guide
title: "CMMC Compliance: Cybersecurity for Defense Contractors"
difficulty: intermediate
tier: tactical
tags: ["cmmc", "cybersecurity", "compliance", "defense", "security"]
date: 2026-03-14
author: "Dr. Jesse W. Johnson, DSL, MAOM"
---

 **CMMC Compliance: Cybersecurity for Defense Contractors**

**Strategic Context: This Isn't New—It's Just Now Mandatory**

Let me be blunt: If you're surprised that the Department of Defense finally decided to verify that you're actually protecting sensitive information, you haven't been paying attention for the last decade. Cybersecurity Maturity Model Certification—CMMC 2.0—isn't a revolutionary concept. It's the evolutionary enforcement of what DFARS 252.204-7012 has required since 2017. The government simply got tired of trusting you to self-attest to security controls when billions in Controlled Unclassified Information (CUI) were walking out the back door of contractor networks.

From where I sat in Air Force acquisition, unsecure contractors aren't business partners—they're attack vectors. When you're sitting in a Program Management Office during a source selection and you see a proposal with robust cybersecurity architecture against one with empty promises, guess which one wins? Not because we're technically astute (though we are), but because we understand supply chain risk. Your inability to protect FCI (Federal Contract Information) or CUI translates directly to mission failure.

CMMC represents the DoD maturing its relationship with industry from "trust but verify" to "prove it, then prove it again." This is strategic patience in action—the Pentagon took twenty years to get here, and they're not rushing the implementation. You shouldn't either.

**Operational Leadership: Culture Eats Compliance for Breakfast**

Before we dive into the tactical execution, let's get one thing straight: CMMC is not an IT project. If your CTO is leading this effort alone, you've already failed. This is a business resilience initiative that requires operational leadership across your entire organization.

I've watched too many contractors treat cybersecurity compliance like a tax they begrudgingly pay. They buy expensive tools they don't understand, hire consultants who disappear after the assessment, and treat the certification like a trophy they stick on the shelf. Stop it. The adversary—whether it's nation-state actors or criminal syndicates—doesn't care about your certificate. They care about your data.

**Strategic Patience applies here.** You're looking at a minimum 12-18 month journey from gap analysis to certification, longer if you're aiming for Level 3. This isn't about checking boxes; it's about building organizational muscle memory. The contractors who thrive under CMMC are those who view security not as compliance overhead but as competitive advantage. When your competitors are getting hacked and you're still delivering, that Level 2 certification becomes a moat.

**Innovation within constraints** means small businesses don't need Fortune 500 budgets to comply. I've seen $10M revenue contractors implement more robust security than $500M enterprises because they understood their environment and didn't try to gold-plate solutions. Know your boundary. Protect what matters. Document everything.

**Tactical Execution: The Do Tier**

Since this is a tactical guide, let's get into the mechanics of execution. I'm going to assume you understand the basics of CMMC 2.0—three levels replacing the old five, alignment with NIST SP 800-171 for Level 2, etc. If you don't, close this guide and go read the CMMC Assessment Guides first. There's no shortcut around foundational knowledge.

**Understand Your Level and Scope**

Level 1 (Foundational): Protect FCI only. Annual self-assessment. If you're only handling FCI (not CUI), this is you. Don't over-engineer this. Implement the 17 basic safeguards from FAR 52.204-21. Document them. Move on.

Level 2 (Advanced): The standard for most defense contractors handling CUI. Triennial third-party assessment (C3PAO) for most, though some may self-assess depending on specific solicitations. This maps to NIST SP 800-171 Rev 2 (all 110 controls).

Level 3 (Expert): For those handling critical CUI/high-value assets. DoD-led assessments every three years. Requires full NIST SP 800-172 implementation.

**Critical tactical point:** Scoping is everything. The CMMC Assessment Scope defines what gets assessed and what doesn't. Too many contractors put their entire enterprise in scope when only a manufacturing cell or specific enclave handles CUI. Use network segmentation. Create CMMC enclaves. Isolate the crown jewels. This isn't cutting corners—this is smart architecture.

**The Gap Analysis: Brutal Honesty Required**

Download the NIST SP 800-171A assessment guide. Not the controls—the assessment procedures. Go through every objective and ask: "Can I prove this is implemented?"

Not "Do we have a policy saying we do this?" Can you prove it?

Evidence includes:
- Configuration baselines with timestamps
- Log files showing access controls working
- Training records with test results
- Incident response plan execution records
- Physical access logs
- System security plans (SSPs) that actually reflect reality

When I say "partners not products," I mean this: Don't buy a "CMMC compliance solution" in a box. Buy partnership with assessors who understand your business. Work with MSPs (Managed Security Providers) who have cleared personnel and understand defense contracting, not just general IT support. Your C3PAO (Certified Third-Party Assessment Organization) needs to be a partner in your success, not an adversary looking for failures.

**SSP and POAM: Your Living Documents**

The System Security Plan isn't a one-time document you write to get the contract. It's a living artifact that changes as your environment changes. Update it quarterly minimum.

The Plan of Action and Milestones (POAM) is where many contractors stumble. Under CMMC 2.0, you can have POAMs for certain controls, but not for high-value assets or critical security requirements. You cannot POAM your way out of multi-factor authentication or encryption. If you don't have those implemented, stop bidding on contracts until you do.

**Values-Based Implementation**

Here's where I get preachy, and I don't apologize for it. If you're implementing cybersecurity controls just to pass the audit, you're missing the point—and you're dangerous. The values underlying CMMC are about protecting the warfighter, safeguarding taxpayer investment, and preserving national security.

If you "fudge" a control to save money, if you tell your assessor that something is implemented when it's only partially deployed, if you treat the CUI markings as suggestions rather than legal requirements—you're not just non-compliant. You're ethically compromised. I've seen contractors lose their clearance and their business not because they were hacked, but because they lied about their security posture. The false claims act applies here. Prison time applies here.

**The Assessment Process: What Actually Happens**

For Level 2 (where most of you live), here's the tactical flow:

1. **Pre-assessment:** You hire a C3PAO. They conduct a readiness assessment (optional but recommended). This isn't the real thing—it's reconnaissance.

2. **Documentation Review:** The assessors will spend days reviewing your SSP, policies, procedures, and evidence repositories. If your documentation doesn't match your implementation, this is where the pain begins.

3. **Testing:** They will actually try to access things they shouldn't. They will review your configurations. They will interview your system administrators. They will check if your MFA actually requires the second factor or if there's a backdoor.

4. **Evidence Collection:** Screenshots, configuration exports, policy attestations—everything gets packaged.

5. **Deficiency identification:** If you fail controls, you get a corrective action period (usually 90 days for minor deficiencies).

6. **Certification:** Pass, and you get your certificate good for three years. But remember—CMMC requires annual affirmation. If you get breached or change your architecture significantly, you must report it.

**Continuous Monitoring: The Real Work**

Getting the certificate is day one. Maintaining compliance is years one through three. You need continuous monitoring programs that actually function:

- Monthly vulnerability scans
- Quarterly access reviews
- Annual penetration testing (for Level 2)
- Real-time log correlation and monitoring
- Change management that includes security impact analysis

**Strategic Takeaways: The Craftsman Framework Applied**

**Think:** CMMC represents the end of the "security through obscurity" era in defense contracting. The threat landscape has made it clear that small contractors are the soft underbelly of the defense industrial base. Strategic thinking means recognizing that cybersecurity compliance is now a core business function, not overhead.

**Lead:** Operational leadership requires cross-functional integration. Your security team, your contracts team, your engineering team, and your executive leadership must speak the same language. When a program manager promises a deliverable, they must understand the security implications of that promise.

**Do:** Tactical execution demands honesty, documentation, and discipline. Scoping correctly saves money. POAMing honestly saves integrity. Partnering with the right assessors saves time.

**Final Word**

CMMC isn't going away. It's not getting softer. The DoD has invested too much political and organizational capital to back down, and frankly, they shouldn't. As someone who spent a quarter-century watching adversaries probe our networks, I can tell you: the threat is real, the damage is measurable, and the solution requires grown-up security practices.

Don't treat this like a graduation ceremony where you get the paper and move on. Treat it like flight certification—you maintain proficiency or you lose your wings. Your customers—the men and women in uniform—deserve partners who take protection of sensitive information seriously.

Build it right. Document it honestly. Maintain it religiously. That's not just compliance. That's craftsmanship.

---

*Dr. Jesse W. Johnson is the founder of Craftsman Leadership and spent over 25 years in Air Force acquisition, innovation, and strategic leadership. He holds a Doctorate in Strategic Leadership from Regent University.*