import {useState} from "react";
import {saveNineLine} from "@/NineLineAPI";


export function RequesterPage(){

    const [formData, setFormData] = useState({location: ""});
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await saveNineLine(formData);
            console.log("API response:", response);

            alert(`Form submitted successfully ${formData.location}`);
        } catch (error) {
            console.error("Failed to save Nine Line:", error);
            alert("Failed to submit the form.");
        }
    };

    return(

        <form className="w-full max-w-lg"
        onSubmit={handleSubmit}>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                           htmlFor="Location">
                        Location
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="Location" type="text" name= "location" value={formData.location} placeholder="MGRS two 5 digit blocks" onChange={handleChange}/>
                    {/*<p className="text-red-500 text-xs italic">Please fill out this field.</p>*/}
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