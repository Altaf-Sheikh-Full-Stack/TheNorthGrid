import Section from "../../system/section/section"
import Text from "../../system/text/text"
import './compare.css'


const Compare = () => {
    return (
        <Section className="Compare">
            <table className="Compare-Table">
                <tr>
                    <th><Text>Compare</Text></th>
                    <th><Text>Others</Text></th>
                    <th><Text>NorthGrid</Text></th>
                </tr>
                <tr>
                    <td><Text size="semiMedium">Get job in</Text> </td>
                    <td><Text size="semiMedium">In years </Text></td>
                    <td><Text size="semiMedium">In weeks </Text></td>
                </tr>
                <tr>
                    <td> <Text size="semiMedium">How many applications to get one interview? </Text></td>
                    <td><Text size="semiMedium">1000+</Text></td>
                    <td><Text size="semiMedium">1 to 3</Text></td>
                </tr>
                <tr>
                    <td><Text size="semiMedium">Interviews per month</Text></td>
                    <td><Text size="semiMedium">0</Text></td>
                    <td><Text size="semiMedium">3 To 10</Text></td>
                </tr>
                <tr>
                    <td><Text size="semiMedium">Job guarantee</Text></td>
                    <td><Text size="semiMedium">No</Text></td>
                    <td><Text size="semiMedium">Yes</Text></td>
                </tr>
                <tr>
                    <td><Text size="semiMedium">Refund after getting job</Text></td>
                    <td><Text size="semiMedium">No</Text></td>
                    <td><Text size="semiMedium">Yes</Text></td>
                </tr>
                <tr>
                    <td><Text size="semiMedium">Refund if not land in the interview</Text></td>
                    <td><Text size="semiMedium">No</Text></td>
                    <td><Text size="semiMedium">Yes</Text></td>
                </tr>
            </table>
        </Section>
    )
}

export default Compare