import type {NineLine} from "@/NineLineType";

const apiBaseURL = "http://localhost:8080/";

type nineLinePromise = (nineLine: NineLine) =>Promise<NineLine>
type nineLineList = () => Promise<NineLine[]>

export const saveNineLine: nineLinePromise = (nineLine: NineLine) => {
    return fetch(apiBaseURL + "api/nineline", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(nineLine)
    }).then(async (response) => {
        if (!response.ok) {
            const errorMessage = await response.text();
            console.error("Backend error:", errorMessage);
            throw new Error(`Failed to save: ${response.status}`);
        }

        return response.json();
    })
};

export const fetchAllNineLine: nineLineList = async () => {
    return fetch(apiBaseURL + "api/nineline", {
            method: 'GET'
    }).then((response)=> {
        return response.json();
    })

}