import Box from "../../system/box/box"
import Button from "../../system/button/button"
import Section from "../../system/section/section"
import Text from "../../system/text/text"
import useModalStore from "../../context/modal"

import './footer.css'

const Footer = () => {

    const openModal = useModalStore(
        (state) => state.openModal
    )

    return (
        <Section className="Footer">

            <Box>

                <Button
                    onClick={() =>
                        openModal({
                           
                            text: `PRIVACY POLICY

Effective Date:
This Privacy Policy applies to all users of NorthGrid services and website.

1. Information We Collect
We may collect the following information from users:

- Full name
- Email address
- Phone number
- Resume/CV details
- Educational and professional background
- Interview performance data
- Payment and transaction details
- Device, browser, and usage information

2. How We Use Your Information
We use collected information to:

- Create and improve candidate profiles
- Schedule interviews and mock interviews
- Match candidates with hiring companies
- Process payments and refunds
- Provide customer support
- Improve platform performance and services
- Communicate updates, offers, and service notifications

3. Resume and Profile Sharing
By using NorthGrid, users agree that their resume and professional profile may be shared with recruiters, hiring partners, and companies for job opportunities.

We do not sell personal data to third parties.

4. Payment Information
Payments are securely processed through third-party payment providers. NorthGrid does not store complete card or banking details on its servers.

5. Cookies and Tracking
We may use cookies and analytics tools to:

- Improve user experience
- Understand traffic and behavior
- Optimize platform functionality

Users may disable cookies through browser settings.

6. Data Security
We implement reasonable technical and organizational measures to protect user data from unauthorized access, misuse, or disclosure.

However, no online platform can guarantee complete security.

7. User Rights
Users may request to:

- Access their stored information
- Correct inaccurate data
- Delete their account and personal information

Requests can be submitted through official support channels.

8. Third-Party Services
NorthGrid may use third-party services including:

- Payment gateways
- Video interview platforms
- Analytics providers
- Recruitment partners

These services may have separate privacy policies.

9. Policy Updates
NorthGrid may update this Privacy Policy at any time. Continued use of the platform after updates constitutes acceptance of revised policies.`
                        })
                    }
                >
                    Privacy policy
                </Button>

                <Button
                    onClick={() =>
                        openModal({
                           
                            text: `TERMS AND CONDITIONS

1. Acceptance of Terms
By accessing or using NorthGrid services, users agree to comply with these Terms and Conditions.

If users do not agree, they should discontinue use of the platform.

2. Services Provided
NorthGrid provides:

- Resume support
- Mock interviews
- Interview preparation
- Candidate profile promotion
- Job opportunity assistance

NorthGrid does not guarantee employment unless explicitly stated under a specific paid plan.

3. User Responsibilities
Users agree to:

- Provide accurate information
- Maintain professional conduct
- Attend scheduled interviews on time
- Avoid fraudulent or misleading activity

NorthGrid reserves the right to suspend accounts violating these terms.

4. Payments
All pricing displayed on the website is subject to change without prior notice.

Payments must be completed before accessing paid services.

5. Job Guarantee Disclaimer
Interview opportunities and hiring outcomes depend on:

- Candidate skills
- Communication ability
- Experience
- Recruiter requirements
- Market conditions

NorthGrid cannot guarantee selection by any employer unless specifically included in a written guarantee program.

6. Refund Eligibility
Refunds are governed by the official Refund Policy.

7. Intellectual Property
All website content, branding, logos, designs, text, and materials belong to NorthGrid and may not be copied or reused without written permission.

8. Limitation of Liability
NorthGrid is not responsible for:

- Hiring decisions made by companies
- Loss of employment opportunities
- Technical interruptions
- Third-party platform failures

9. Account Termination
NorthGrid reserves the right to suspend or terminate accounts involved in:

- Abuse
- Fraud
- Misrepresentation
- Violation of platform policies

10. Governing Law
These Terms shall be governed under applicable laws and jurisdiction of the company’s operating region.`
                        })
                    }
                >
                    Term & Condition
                </Button>

                <Button
                    onClick={() =>
                        openModal({
                          
                            text: `REFUND POLICY

1. Refund Eligibility
Refunds may be applicable under specific plans that include refund guarantees.

Eligibility depends on compliance with all platform requirements.

2. Conditions for Refund
Users may qualify for refunds if:

- They complete all required mock interviews
- They attend scheduled sessions
- They follow provided guidance and processes
- NorthGrid fails to provide the promised interview opportunities under the selected plan

3. Non-Refundable Situations
Refunds will not be issued if:

- The user misses interviews or sessions
- False information is provided
- The user violates platform policies
- The user voluntarily withdraws from the process
- Dissatisfaction is based on personal expectations not included in the plan

4. Processing Time
Approved refunds are processed within 7–14 business days to the original payment method.

5. Cancellation
Users may request cancellation of services before onboarding begins. Partial deductions may apply for already delivered services.

6. Modification of Policy
NorthGrid reserves the right to modify refund terms at any time without prior notice.`
                        })
                    }
                >
                    Refund policy
                </Button>

            </Box>

            <Text size="small">
                All right reserve @TheNorthGrid - 2026 - 27
            </Text>

        </Section>
    )
}

export default Footer