import { useEffect, useState } from "react";
import TableRow from "./TableRow/TableRow";

const AllToyPageHome = () => {
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/all-toys`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])
    console.log(toys)

    return (
        <section className="my-container my-20">


            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Picture</th>
                            <th>Toy Name</th>
                            <th>Seller Name</th>
                            <th>Sub Category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                     {
                        toys.map((toy, index)=> <TableRow
                        key={toy._id}
                        toy={toy}
                        index={index}
                        ></TableRow>)
                     }
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default AllToyPageHome;