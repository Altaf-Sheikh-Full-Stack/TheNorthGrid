import Box from "../../system/box/box"
import Button from "../../system/button/button"
import Section from "../../system/section/section"
import Text from "../../system/text/text"
import './footer.css'


const Footer = () => {
    return(
        <Section className="Footer">
            <Box>
                <Button>Privery policy</Button>
                <Button>Term & Condition</Button>
                <Button>Refund policy</Button>
            </Box>
            <Text size="small">All right reserve @TheNorthGrid - 2026 - 27</Text>
        </Section>
    )
}

export default Footer