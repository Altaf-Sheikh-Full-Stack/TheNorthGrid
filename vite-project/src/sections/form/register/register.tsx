import Box from "../../../system/box/box"
import Button from "../../../system/button/button"

import Section from "../../../system/section/section"
import Text from "../../../system/text/text"


const Register = () => {



    return(
       <Section className="Pricing-Container" id="Pricing-Container">
            <Box>
                <Text size="large" font="playful">Register</Text>
                <Text>Register now and get job offer in weeks</Text>
            </Box>
            <Box className="Pricing" backgroundColor="White">
                <Box className="Pricing-card" borderRadius="half" backgroundColor="LiteWhite">
                    <Box className="Pricing-card-Top" borderRadius="half">
                        <Text>Get job in weeks</Text>
                        <Text font="playful">₹999</Text>
                    </Box>
                    <a href="https://rzp.io/rzp/82zvXlFo"> <Button className="Pricing-card-Button" backgroundColor="Brand"  bold="Bold" rounded="Half" size="large" type="button">Register now</Button> </a>
                    <Box className="Pricing-card-Info" borderRadius="half">
                        <Text size="small">First priority</Text>
                        <Text size="small">One on one mock interview</Text>
                        <Text size="small">Guaranteed job success</Text>
                        <Text size="small">Guaranteed refund after gatting job</Text>
                        <Text size="small">Guaranteed refund after now getting job</Text>
                        <Text size="small">Promote profile to TOP MNC</Text>
                        <Text size="small">24/7 Support</Text>
                    </Box>
                </Box>
                  <Box className="Pricing-card" borderRadius="half" backgroundColor="LiteWhite">
                    <Box className="Pricing-card-Top" borderRadius="half">
                        <Text>Get job in months</Text>
                        <Text font="playful">₹699</Text>
                    </Box>
                   <a href="https://rzp.io/rzp/TfufHqSL"><Button className="Pricing-card-Button" backgroundColor="Brand"   bold="Bold" rounded="Half" size="large" type="button">Register now</Button> </a>
                    <Box className="Pricing-card-Info" borderRadius="half">
                        <Text size="small">Second priority</Text>
                        <Text size="small">Gorup mock interview</Text>
                        <Text size="small">87% job success</Text>
                        <Text size="small">No Guaranteed refund after getting job</Text>
                        <Text size="small">Guaranteed refund before getting job</Text>
                        <Text size="small">Promote profile to MNC</Text>
                        <Text size="small">12/5 support</Text>
                    </Box>
                </Box>
                   <Box className="Pricing-card" borderRadius="half" backgroundColor="LiteWhite">
                    
                    <Box className="Pricing-card-Top" borderRadius="half">
                        <Text>Get job in years</Text>
                        <Text font="playful">₹299</Text>
                    </Box>
                    <a href="https://rzp.io/rzp/k976nyDc"><Button className="Pricing-card-Button" backgroundColor="Brand"   bold="Bold" rounded="Half" size="large" type="button">Register now</Button></a> 
                    <Box className="Pricing-card-Info" borderRadius="half">
                        <Text size="small">Third priority</Text>
                        <Text size="small">No mock interview</Text>
                        <Text size="small">50% job success</Text>
                        <Text size="small">No refund after job</Text>
                        <Text size="small">No refund before job</Text>
                        <Text size="small">help you Build resume</Text>
                        <Text size="small">Community support</Text>
                    </Box>
                </Box>
            </Box>
        </Section>
    )
}


export default Register