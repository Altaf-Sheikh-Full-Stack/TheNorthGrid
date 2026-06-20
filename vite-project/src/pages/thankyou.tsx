import Box from "../system/box/box"
import Button from "../system/button/button"
import Section from "../system/section/section"
import Text from "../system/text/text"



const ThankYou = () => {
    return (
        <Section >
            <Box padding="full">
                <Text type="heading" >Thank you</Text> <br /> <br />
                <Text size="semiMedium">We got your info</Text> <br />
                <Text size="small">We will get back to you as soon as possible after processing your registration.</Text>
                <Text size="small">If you do not hear from us within 12 hours, please contact our support team for further assistance.</Text> <br /> <br />
                 <Button backgroundColor="Brand" rounded="Half">Home page</Button>
            </Box>
        </Section>
    )
}

export default ThankYou