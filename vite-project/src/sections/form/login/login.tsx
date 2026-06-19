import Box from "../../../system/box/box"
import Button from "../../../system/button/button"
import Form from "../../../system/form/form"
import Input from "../../../system/input/input"
import Section from "../../../system/section/section"
import Text from "../../../system/text/text"
import './login.css'


const Login = () => {
    return (
        <Section className="Login" >
            <Box borderRadius="half" padding="half" backgroundColor="LiteWhite" >
                <Form classname="LoginCard">
                    <Text>Login to account</Text>
                    <Input placeholder="Email" type="email" />
                    <Input placeholder="Password" type="password" />
                    <Button type="submit" rounded="Half" backgroundColor="Brand">Login</Button>
                </Form>
            </Box>
        </Section>
    )
}

export default Login