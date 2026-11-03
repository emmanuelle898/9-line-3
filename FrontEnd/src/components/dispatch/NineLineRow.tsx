import type {NineLine} from "@/NineLineType";


export const NineLineRow = ({nineLine}) => {

    const nineLineRow: NineLine = nineLine;

    return (
        <tr>
            <td>{nineLineRow.location}</td>
            <td>{nineLineRow.callSign}</td>
        </tr>
    )
}