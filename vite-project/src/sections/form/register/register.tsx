import Box from "../../../system/box/box"
import Button from "../../../system/button/button"
import Section from "../../../system/section/section"
import Text from "../../../system/text/text"


const Register = () => {



    return (
        <Section className="Pricing-Container" id="Pricing-Container">
            <Box>
                <Text size="large" font="playful">Register</Text>
                <Text>Register now and get job offer in weeks</Text>
            </Box>
            <Box className="Pricing" backgroundColor="White">
                <Box className="Pricing-card" borderRadius="half" backgroundColor="LiteWhite">
                    <Box className="Pricing-card-Top" borderRadius="half">
                        <Text>This is a small background check fee it will be refunded shortly after we confirm your info</Text>
                        <Text font="playful">₹99</Text>
                    </Box>
                    <a href="https://rzp.io/rzp/VYVSy5lZ"> <Button className="Pricing-card-Button" backgroundColor="Brand" bold="Bold" rounded="Half" size="large" type="button">Yes, i want a job</Button> </a>
                    <Box className="Pricing-card-Info" borderRadius="half">
                        <Text size="small">Get guarantee job* in weeks</Text>
                        <Text size="small">1 on 1 mock interview with us to test your skill</Text>
                        <Text size="small">we build your resume and profile</Text>
                        <Text size="small">Give referral to TOP MNC</Text>
                        <Text size="small">Promote profile to TOP MNC</Text>
                        <Text size="small">24/7 Support</Text>
                    </Box>
                    <Box backgroundColor="LiteWhite">
                        <Text>Note: We do not charge any fee for job opportunities. If anyone asks you for money on our behalf, please report it to us immediately. We will take strict action against such individuals.</Text>
                    </Box>
                </Box>
            </Box>
        </Section>
    )
}


export default Register