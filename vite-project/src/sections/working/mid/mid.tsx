import { useState } from "react"
import Box from "../../../system/box/box"
import Button from "../../../system/button/button"
import Section from "../../../system/section/section"
import startData from "./startData"
import './start.css'


const WorkingMid = () => {

    const [showImage, setShowImage] = useState<string>()

    const OnMouseEnter = (img: string) => {
        setShowImage(img)        
    }

    return (
        <Section className="WorkingStart" backgroundColor="LiteWhite">
            <Box className="WorkingStart-Left" backgroundColor="LiteWhite">
                {startData.map((data, index) => (
                    <div key={index} onPointerEnter={() => OnMouseEnter(data.img)}>
                        <Button  rounded="Half" bold="Normal">{data.name}</Button>
                    </div>
                ))}
            </Box>
            <Box className="WorkingStart-Right">
                <img className="WorkingStart-Right-Img" src={showImage} alt="" />
            </Box>
        </Section>
    )
}

export default WorkingMid