import Section from "../../system/section/section"
import Text from "../../system/text/text"
import Button from "../../system/button/button"
import './navbar.css'
import { NavLink } from "react-router"

import Box from "../../system/box/box"



const Navbar = () => {
    return (


        <Section className='Navbar' backgroundColor="White" >
            <Box className='Navbar-Content' backgroundColor="White" >
                <NavLink to={'/'}>
                    <Text font="playful"  >NorthGrid</Text>
                </NavLink>

            </Box>
            <Box className="Navbar-Menu" backgroundColor="LiteWhite" borderRadius="full">
                <a href="#Process"> <Button backgroundColor="LiteWhite" rounded="Full" bold="Normal" >Process </Button></a>
                <a href="#Compare"><Button backgroundColor="LiteWhite" rounded="Full" bold="Normal" >Compare</Button></a>
                <a href="#Pricing-Container"> <Button backgroundColor="LiteWhite" rounded="Full" bold="Normal" >Pricing</Button> </a>
            </Box>
            <Box className='Navbar-Button' backgroundColor="White" >
                <NavLink to={'/login'}>
                    <Button backgroundColor="LiteWhite" rounded="Half" size="large">Login</Button>
                </NavLink>
                <NavLink to={'/register'}>
                    <Button backgroundColor="Brand" size="large" rounded="Half">Register</Button>
                </NavLink>
            </Box>
            <Box className='Navbar-Button-Small' backgroundColor="White" >
                <NavLink to={'/login'}>
                    <Button backgroundColor="LiteWhite" rounded="Half" size="medium">Signup</Button>
                </NavLink>
                <NavLink to={'/register'}>
                    <Button backgroundColor="Brand" size="medium" rounded="Half">Register</Button>
                </NavLink>
            </Box>
        </Section >

    )
}

export default Navbar
