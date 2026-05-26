import Box from "../../system/box/box"
import Button from "../../system/button/button"
import Section from "../../system/section/section"
import { createPortal } from "react-dom"
import './popup.css'


const Popup = () => {
    return (
        <>
            {createPortal(
                <Section className="Popup">
                    <Box>
                        Offer ends in - 
                    </Box>
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