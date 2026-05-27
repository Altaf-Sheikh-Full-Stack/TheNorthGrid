import Section from "../../system/section/section"
import Text from "../../system/text/text"
import Button from "../../system/button/button"
import './hero.css'
import Box from "../../system/box/box"
import { userData1, userData2 } from "./userdata"

const Hero = () => {



    return (
        <Section className="Hero" backgroundColor="LiteWhite" >
            <Box className="Hero-info" backgroundColor="Brand">
                <Box className="Hero-info-text" backgroundColor="Brand">

                    <Text color="black" type="heading" font="playful" size="large" >Land in multiple interviews in  weeks or<Text color="black" type="heading" font="playful" size="large" className="Hero-info-text-highlighted">Get 100% refund</Text></Text>
                    <Text color="black" size="medium">No results? 100% refund. No questions asked. , We NorthGrid give every candidate a chance to prove themself</Text>
                    <Box className="Hero-info-text-Hint" backgroundColor="Brand">
                        <Box backgroundColor="Brand" className="Hero-info-text-Hint-Image">
                            {userData1.slice(0, 4).map((data) => (
                                <img src={data.img} alt="" />
                            ))}
                        </Box>

                        <Text size="small" color="black">200+ people already get <br /> hired this week</Text>
                    </Box>
                </Box>

                <Box className="Hero-info-buttons" backgroundColor="Brand">
                    <Button backgroundColor="Black" rounded="Half" size="large" color="light">Land in interviews now</Button>
                    <Text size="semiMedium">Get a chnace to work with top MNC, <br /> Offer ends today</Text>
                </Box>

            </Box>
            <Box className="Hero-Content">
                <Box className="Hero-Content-Section" >
                    <Box className="Hero-Content-Section-Scroll1">
                        {userData1.map((data, index) => (
                            <Box className="Hero-Content-Section-Card" key={index}>
                                <img src={data.img} alt="" />
                                <Box className="Hero-Content-Section-Card-Info" >
                                    <Text size="semiMedium">{data.position}</Text>
                                    <Box >
                                        {/* <Text size="small">{data.name}</Text> */}
                                        <Text size="small">{data.salary}</Text>
                                    </Box>
                                    {/* <Text>{data.company}</Text> */}
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>
                <Box className="Hero-Content-Section" >
                    <Box className="Hero-Content-Section-Scroll2">
                        {userData2.map((data, index) => (
                            <Box className="Hero-Content-Section-Card" key={index}>
                                <img src={data.img} alt="" />
                                <Box className="Hero-Content-Section-Card-Info" >
                                    <Text size="semiMedium">{data.position}</Text>
                                    <Box >
                                        {/* <Text size="small">{data.name}</Text> */}
                                        <Text size="small">{data.salary}</Text>
                                    </Box>
                                    {/* <Text>{data.company}</Text> */}
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>

            </Box>
        </Section>
    )
}

export default Hero