import type {NineLine} from "@/NineLineType";

type NineLineProps = {
    nineLine: NineLine;

};

export const NineLineRow = ({nineLine}:NineLineProps) => {


    return (
        <tr>
            <td><input type={"checkbox"} aria-label={"toAssign"}/></td>
            <td>{nineLine.location}</td>
            <td>{nineLine.callSign}</td>
            <td>{nineLine.precedenceCounters.ROUTINE}</td>   {/*}<!-- this needs to be fixed because of the ENUM -->*/}
            <td>{nineLine.specialEquipment}</td>
            <td>{nineLine.security}</td>
            <td>{nineLine.markings}</td>
            <td><a href={`${nineLine.id}`}> View </a> </td> {/*fix this too*/}
        </tr>
    )
}