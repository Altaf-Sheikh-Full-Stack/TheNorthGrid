import { useEffect, useState } from "react"
import Box from "../../../system/box/box"
import Button from "../../../system/button/button"
import Section from "../../../system/section/section"
import endData from "./endData"
import './end.css'


const WorkingEnd = () => {

    const [showImage, setShowImage] = useState<string>()

    useEffect(() => {
        for (let i = 0; i < endData.length; i++) {
            setShowImage(endData[0].img)
        }
    }, [])

    const OnMouseEnter = (img: string) => {
        setShowImage(img)
    }

    return (
        <Section className="WorkingStart" backgroundColor="LiteWhite">
            <Box className="WorkingStart-Left" backgroundColor="LiteWhite">
                {endData.map((data, index) => (
                    <div key={index} onPointerEnter={() => OnMouseEnter(data.img)}>
                        <Button rounded="Half" bold="Normal">{data.name}</Button>
                    </div>
                ))}
            </Box>
            <Box className="WorkingStart-Right">
                <img className="WorkingStart-Right-Img" src={showImage} alt="" />
            </Box>

        </Section>
    )
}

export default WorkingEnd