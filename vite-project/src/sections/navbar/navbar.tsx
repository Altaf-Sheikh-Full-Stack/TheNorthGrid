import Section from "../../system/section/section"
import Text from "../../system/text/text"
import Button from "../../system/button/button"
import './navbar.css'

import Box from "../../system/box/box"



const Navbar = () => {
    return (


        <Section className='Navbar' backgroundColor="White" >
            <Box className='Navbar-Content' backgroundColor="White" >
                <Text font="playful"  >NorthGrid</Text>


            </Box>
            <Box backgroundColor="LiteWhite" borderRadius="full">
                <Button backgroundColor="LiteWhite" rounded="Full" bold="Normal" >Process</Button>
                <Button backgroundColor="LiteWhite" rounded="Full" bold="Normal" >Pricing</Button>
            </Box>
            <Box className='Navbar-Mobile-Content' backgroundColor="White" >
                <Button backgroundColor="LiteWhite" rounded="Half" size="large">Signup</Button>
                <Button backgroundColor="Brand" size="large" rounded="Half">Register</Button>
            </Box>
        </Section>

    )
}

export default Navbar
