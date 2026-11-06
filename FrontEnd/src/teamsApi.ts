import type {ResponderTeamType} from "../src/ResponderTeamType";

const apiBaseURL = "http://localhost:8080/";

type teamPromise = (team: ResponderTeamType) =>Promise<ResponderTeamType>
type teamList = () => Promise<ResponderTeamType[]>

export const saveTeam: teamPromise = (team: ResponderTeamType) => {
    return fetch(apiBaseURL + "api/teams", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(team)
    }).then((response) => {
        return response.json();
    })
};

export const getAllTeams: teamList = async() => {
    return fetch(apiBaseURL + "api/teams", {
        method: 'GET'
    }).then((response)=> {
        return response.json();
    })

}