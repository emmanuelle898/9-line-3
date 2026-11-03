
import {NineLineRow} from "./NineLineRow";

const Dispatch_table = ({nineLineData}) => {

    return (
        <table className="table-auto" aria-label="Dispatch_table">
            <thead>
            <tr>
                <th>Location</th>
                <th>Call Sign</th>
            </tr>
            </thead>
            <tbody>
            {
                nineLineData.map((oneNineLine) => {
                    return (
                        <NineLineRow key={oneNineLine.id} nineLine={oneNineLine}/>
                    )
                })
            }
            </tbody>
        </table>
    )
}

export default Dispatch_table;