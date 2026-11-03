import Dispatch_table from "../components/dispatch/Dispatch_table";
import {useEffect, useState} from "react";
import {fetchAllNineLine} from "../NineLineAPI";
import type {NineLine} from "../NineLineType";

export function DispacherPage(){

    const [nineLineData, setNineLineData] = useState<NineLine[]>([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetchAllNineLine();
                console.log("Fetch all data:", response);
                setNineLineData(response)

            } catch (error) {
                console.error("Failed to fetch Nine Lines", error);
            }
        }
        fetchData().then(()=> {console.log("Happy")})
            .catch(()=>{console.error("Sad")})

    }, [])

    return(
        <Dispatch_table nineLineData={nineLineData}/>
    );
}