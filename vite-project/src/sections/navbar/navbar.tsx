import Section from "../../system/section/section"
import Text from "../../system/text/text"
import Button from "../../system/button/button"
import './navbar.css'
import NavData from "./nav-data"
import Box from "../../system/box/box"
import { useEffect, useRef, useState } from "react"


const Navbar = () => {

    const [active, setActive] = useState<boolean>(false)
    const dorpdown = useRef<HTMLDivElement | null>(null)

    const Show = () => {
        setActive(true)
    }

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            const target = event.target;

            if (
                dorpdown.current &&
                target instanceof Node &&
                !dorpdown.current.contains(target)
            ) {
                setActive(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);



    return (


        <Section className='Navbar' backgroundColor="White" >
            <Box className='Navbar-Content' backgroundColor="White" >
                <Text font="playful"  >NorthGrid</Text>
                <Button backgroundColor="White" rounded="Full" bold="Normal" size="medium">How it't works</Button>
                <Button backgroundColor="White" rounded="Full" bold="Normal" size="medium">Solutions</Button>
                <Button backgroundColor="White" rounded="Full" bold="Normal" size="medium">CaseStudy</Button>
                <Button backgroundColor="White" rounded="Full" bold="Normal" size="medium">Pricing</Button>
            </Box>
            <Box className='Navbar-Mobile-Content' backgroundColor="White" >
                <Button backgroundColor="LiteWhite" rounded="Half" size="large">Signup</Button>
                <Button backgroundColor="Black" size="large" color="light" rounded="Half">Register</Button>
            </Box>
        </Section>

    )
}

export default Navbar
