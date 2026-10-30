import type {NineLine} from "@/NineLineType";



type nineLinePromise = (nineLine: NineLine) =>Promise<NineLine>

export const saveNineLine: nineLinePromise = (nineLine: NineLine) => {
    return fetch('http://localhost:8080/api/nineline', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(nineLine)
    }).then((response) => {
        return response.json();
    })
};