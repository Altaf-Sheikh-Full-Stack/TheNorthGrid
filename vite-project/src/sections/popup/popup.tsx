import Box from "../../system/box/box"
import Button from "../../system/button/button"
import Section from "../../system/section/section"
import { createPortal } from "react-dom"
import './popup.css'
// import Text from "../../system/text/text"
import CountDown from "./countdown/countdown"

// Return of the hollow knight

const Popup = () => {


    return (
        <>
            {createPortal(
                <Section className="Popup">
                    <CountDown />
                    <Box>
                        <Button backgroundColor="Brand" rounded="Half">Get job now</Button>
                    </Box>
                </Section>,
                document.body
            )}
        </>
    )
}


export default Popup