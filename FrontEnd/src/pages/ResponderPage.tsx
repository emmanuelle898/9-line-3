import {NineLineRow} from "../components/dispatch/NineLineRow";
import {useEffect, useState} from "react";
import type {NineLine} from "../NineLineType";
import {fetchAllNineLine} from "../NineLineAPI";


export function ResponderPage(){
const [nineLines, setNineLines] = useState<NineLine[]>([])

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

    return(
        <>
            <h1>ResponderPage</h1>

            <button>
                Assign
            </button>
            <table className="table-auto" aria-label="Responder_table">
                <thead>
                <tr>
                    <th>Location</th>
                    <th>Call Sign</th>
                    <th>Precedence</th>
                    <th>Special Equipment</th>
                    <th>Security</th>
                    <th>Markings</th>
                    <th>Details</th>
                </tr>
                </thead>
                <tbody>
                {
                    nineLines.map((oneNineLine) =>
                    <NineLineRow key={oneNineLine.id} nineLine={oneNineLine}/>)
                }
                </tbody>
            </table>


        </>
    );
}