import {useState} from "react";
import {saveNineLine} from "../NineLineAPI";
import * as React from "react";


export function RequesterPage() {

    const [formData, setFormData] = useState({
        location: "",
        callSign: "",
        precedenceCounters: {
            "PRIORITY": "0",
            "URGENT": "0",
            "URGENT_SURGICAL": "0",
            "ROUTINE": "0",
            "CONVENIENCE": "0"
        },
        specialEquipment: [],
        litterPatient: "0",
        ambulatoryPatient: "0",
        security: "NO THREAT",
        markings: [],
        patientStatus: "US MILITARY",
        contamination: "NUCLEAR"
    });

    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value === "" ? 0: Number(value) }));
    };

    const handlePrecedenceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prev) => ({
            ...prev,
            precedenceCounters: {
                ...prev.precedenceCounters,
                [name]: value === "" ? 0 : Number(value)             }
        }));
    };
    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, checked } = event.target;
        setFormData((prev) => {
            const currentArray = prev[name as keyof typeof prev] as string[];
            const updatedArray = checked
                ? [...currentArray, value]
                : currentArray.filter((item) => item !== value);

            return { ...prev, [name]: updatedArray };
        });
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Sending to backend:", formData);


        try {
            const response = await saveNineLine(formData);
            console.log("API response:", response);
            alert(`Form submitted successfully:\n${JSON.stringify(response)}`);
        } catch (error) {
            console.error("Failed to save Nine Line:", error);
            alert("Failed to submit the form.");
        }
    };

    const priorities = ["URGENT",
        "URGENT_SURGICAL",
        "PRIORITY",
        "ROUTINE",
        "CONVENIENCE"]

    const specialEquipment = ["NONE",
        "HOIST",
        "EXTRACTION_EQUIPMENT",
        "VENTILATOR"]

    const markings = [
        "PANEL",
        "PYROTECHNIC_SIGNAL",
        "SMOKE_SIGNAL",
        "NONE",
        "OTHER"
    ]

    return (

        <form className="w-full max-w-lg"
              onSubmit={handleSubmit}>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                           htmlFor="location">
                        Location
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="location" type="text" name="location" value={formData.location}
                        placeholder="MGRS two 5 digit blocks" onChange={handleTextChange}/>
                    {/*<p className="text-red-500 text-xs italic">Please fill out this field.</p>*/}
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2"
                           htmlFor="callSign">
                        Radio Frequency/Call Sign
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="callSign" type="text" name="callSign" value={formData.callSign}
                        placeholder="Call sign and Radio Frequency" onChange={handleTextChange}/>
                </div>
            </div>
            <div className="flex flex-row gap-4 w-full pb-2">
                {priorities.map((priority, index) => {
                    return (
                        <div key={priority} className="flex-1 min-w-[120px]">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                   htmlFor={priority}>
                                {priority}
                            </label>
                            <div className="relative">
                                <input
                                    type="number"
                                    id={priority}
                                    name={priority}
                                    min="0"
                                    max="10"
                                    placeholder="0"
                                    className="block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    onChange={handlePrecedenceChange}
                                />
                            </div>
                        </div>
                    )
                })}
            </div>
            <fieldset className="space-y-3">
                <legend className="text-base font-semibold text-gray-900 mb-2">
                    Select Special Equipment
                </legend>
                {specialEquipment.map((specialEquipment) => {
                    return (<div>
                            <label className="flex items-center space-x-3 cursor-pointer select-none">
                                <input
                                    type="checkbox"
                                    name="specialEquipment"
                                    className="w-5 h-5 text-blue-600 bg-white border-2 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 focus:ring-offset-2 accent-blue-600 cursor-pointer"
                                    value={specialEquipment}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="text-sm font-medium text-gray-700">{specialEquipment}</span>
                            </label>
                        </div>)
                })}
            </fieldset>

            <div className="flex flex-row gap-4 w-full pb-2">
                {['litterPatient', 'ambulatoryPatient'].map((status) => {
                    return (
                        <div key={status} className="flex-1 min-w-[120px]">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor={status}>
                                {/* Visual labels can still look clean */}
                                {status === 'litterPatient' ? 'LITTER' : 'AMBULATORY'}
                            </label>
                            <input
                                type="number"
                                id={status}
                                name={status}
                                min="0"
                                max="10"
                                placeholder="0"
                                value={formData[status as 'litterPatient' | 'ambulatoryPatient']}
                                onChange={handleNumberChange}
                                className="..."
                            />
                        </div>
                    )
                })}
            </div>

            <div className="flex flex-wrap -mx-3">
                <div key={'security'} className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                           htmlFor={'security'}>
                        {'security'}
                    </label>
                    <div className="relative">
                        <select
                            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id={'security'}
                            name="security"
                            onChange={handleTextChange}
                        >
                            <option value={'NO_THREAT'}>NO THREAT</option>
                            <option value={'POSSIBLE_THREAT'}>POSSIBLE THREAT</option>
                            <option value={'THREATS_IN_AREA'}>THREATS IN AREA</option>
                            <option value={'ESCORT_REQUIRED'}>ESCORT REQUIRED</option>
                        </select>
                        <div
                            className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <fieldset className="space-y-3">
                <legend className="text-base font-semibold text-gray-900 mb-2">
                    Select Markings
                </legend>

                {markings.map((marking) => {
                    return (
                        <div key={marking}>
                            <label className="flex items-center space-x-3 cursor-pointer select-none">
                                <input
                                    type="checkbox"
                                    name="markings"
                                    className="w-5 h-5 text-blue-600 bg-white border-2 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 focus:ring-offset-2 accent-blue-600 cursor-pointer"
                                    value={marking}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="text-sm font-medium text-gray-700">{marking}</span>
                            </label>
                        </div>
                    )
                })}
            </fieldset>


            <div className="flex flex-wrap -mx-3">
                <div key={'patient status'} className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                           htmlFor={'patient status'}>
                        {'patient status'}
                    </label>
                    <div className="relative">
                        <select
                            name="patientStatus"
                            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id={'patient status'}
                            onChange={handleTextChange}
                        >
                            <option value={'US_MILITARY'}>US MILITARY</option>
                            <option value={'US_CIVILIAN'}>US CIVILIAN</option>
                            <option value={'NON_US_MILITARY'}>NON-US MILIARY</option>
                            <option value={'NON_US_CIVILIAN'}>NON-US CIVILIAN</option>
                            <option value={'POW'}>POW</option>
                        </select>
                        <div
                            className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap -mx-3">
                <div key={'contamination'} className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                           htmlFor={'contamination'}>
                        {'Contamination'}
                    </label>
                    <div className="relative">
                        <select
                            name={"contamination"}
                            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id={'contamination'}
                            onChange={handleTextChange}
                        >
                            <option value={'NUCLEAR'}>NUCLEAR</option>
                            <option value={'BIOLOGICAL'}>BIOLOGICAL</option>
                            <option value={'CHEMICAL'}>CHEMICAL</option>
                            <option value={'NONE'}>NONE</option>
                        </select>
                        <div
                            className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>



            <div className="md:flex md:items-center">
                <div className="md:w-1/3"></div>
                <div className="md:w-2/3">
                    <button
                        className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                        type="submit">
                        Submit
                    </button>
                </div>
            </div>
        </form>

    );
}