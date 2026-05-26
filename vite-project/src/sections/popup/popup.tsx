import Box from "../../system/box/box"
import Button from "../../system/button/button"
import Section from "../../system/section/section"
import { createPortal } from "react-dom"
import './popup.css'
import Text from "../../system/text/text"




const Popup = () => {


    return (
        <>
            {createPortal(
                <Section className="Popup">
                    <Box>
                        <Text size="semiMedium">The website is still me dev mode do not pay (if you have any qustion please ask us by chatbot)</Text>
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