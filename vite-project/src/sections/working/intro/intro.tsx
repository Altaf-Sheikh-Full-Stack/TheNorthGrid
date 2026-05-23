import Section from "../../../system/section/section"
import Text from "../../../system/text/text"
import './Intro.css'


const Intro = () => {
    return(
        <Section className="Intro">
            <Text font="playful"  size="large">The full end to end process of how we help you land a job <Text color="black"  font="playful" size="large" className="Intro-text-highlighted">in just three weeks</Text></Text>
        </Section>
    )
}

export default Intro