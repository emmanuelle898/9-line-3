
import {NineLineRow} from "./NineLineRow";
import type {NineLine} from "../../NineLineType";
import {useEffect, useState} from "react";
import {fetchAllNineLine} from "../../NineLineAPI";


const Dispatch_table = () => {
const [nineLines, setNineLines]=useState<NineLine[]>([])

    const refreshData = async () => {
        try {
            const data = await fetchAllNineLine();
            setNineLines(data);
        } catch (error) {
            console.error('Failed to fetch tasks:', error);
        }
    };



    useEffect(() => {
        refreshData();
    }, [refreshData]);

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
                nineLines.map((oneNineLine) =>

                        <NineLineRow key={oneNineLine.id} nineLine={oneNineLine}/>

                )
            }
            </tbody>
        </table>
    )
}

export default Dispatch_table;