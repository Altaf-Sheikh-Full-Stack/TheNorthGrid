import { useState } from "react"
import Text from "../../../system/text/text"


const Countdown = () => {

    const [timeLeft, setTimeleft] = useState()

    return(
        <Text>{timeLeft}</Text>
    )
}

export default Countdown