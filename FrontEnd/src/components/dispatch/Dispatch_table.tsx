import dispatch_sample_data from "../../assets/sample_data/dispatch_sample_data";

const Dispatch_table = () => {

    return (
        <>
            <table className="table-auto" aria-label = "Dispatch_table">
                <thead>
                <tr>
                    <th>Location </th>
                    <th>Artist</th>
                    <th>Year</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{dispatch_sample_data[0].location}</td>
                    <td>{dispatch_sample_data[0].id}</td>
                </tr>
                <tr>
                    <td>Witchy Woman</td>
                    <td>The Eagles</td>
                    <td>1972</td>
                </tr>
                <tr>
                    <td>Shining Star</td>
                    <td>Earth, Wind, and Fire</td>
                    <td>1975</td>
                </tr>
                </tbody>
            </table>
        </>
    )
}

export default Dispatch_table;