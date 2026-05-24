import { useEffect, useState } from "react"
import Box from "../../../system/box/box"
import Button from "../../../system/button/button"
import Section from "../../../system/section/section"
import midData from "./midData"
import './mid.css'


const WorkingMid = () => {

    const [showImage, setShowImage] = useState<string>()

    useEffect(() => {
        for (let i = 0; i < midData.length; i++) {
            setShowImage(midData[0].img)
        }
    }, [])

    const OnMouseEnter = (img: string) => {
        setShowImage(img)
    }

    return (
        <Section className="WorkingStart" backgroundColor="LiteWhite">

            <Box className="WorkingStart-Right">
                <img className="WorkingStart-Right-Img" src={showImage} alt="" />
            </Box>
            <Box className="WorkingStart-Left" backgroundColor="LiteWhite">
                {midData.map((data, index) => (
                    <div key={index} onPointerEnter={() => OnMouseEnter(data.img)}>
                        <Button rounded="Half" bold="Normal">{data.name}</Button>
                    </div>
                ))}
            </Box>
        </Section>
    )
}

export default WorkingMid