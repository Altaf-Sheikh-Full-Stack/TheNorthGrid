import Box from "../../system/box/box"
import Section from "../../system/section/section"
import Text from "../../system/text/text"
import './numbers.css'


const Numbers = () => {
    return (
        <Section className="Numbers" backgroundColor="White">
            <Box className="Numbers-Card" >
                <Text font="playful">97%</Text>
                <Text size="small">Success rate</Text>
            </Box>
            <Box className="Numbers-Card">
                <Text font="playful">100%</Text>
                <Text size="small">Refund guarantee</Text>
            </Box>
            <Box className="Numbers-Card">
                <Text font="playful">2 to 6</Text>
                <Text size="small">Interviews in weeks</Text>
            </Box>
            <Box className="Numbers-Card">
                <Text font="playful">500k+</Text>
                <Text size="small">Candidate already land in job</Text>
            </Box>
        </Section>
    )
}

export default Numbers