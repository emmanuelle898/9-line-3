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
    }).then((response) => {
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