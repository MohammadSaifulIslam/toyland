import { useEffect, useState } from "react";
import LoadingSpinner from "../../Others/LoadingSpinner/LoadingSpinner";
import websiteTitle from "../../Others/WebsiteTitle/WebsiteTitle";
import TableRow from "./TableRow/TableRow";

const AllToyPageHome = () => {
    const [toys, setToys] = useState([]);
    const [seacrhText, setSeacrhText] = useState('');
    const [isLoading, setIsLoading] =useState(true);

    websiteTitle('Toy Land | All Toys')

    useEffect(() => {
        fetch(`https://toyland-server.vercel.app/all-toys`)
            .then(res => res.json())
            .then(data =>{
                setIsLoading(false)
                setToys(data)
            })
    }, [])

    const handleSearchByToyName = () => {
        console.log(seacrhText);
        fetch(`https://toyland-server.vercel.app/toysByName/${seacrhText}`)
            .then(res => res.json())
            .then(data => {
                setToys(data)
                setIsLoading(false)
            })
            
    }

    if(isLoading){
        return <LoadingSpinner/>
    }

    return (
        <section className="my-container my-20">
            <div className="section-title mb-10 text-center lg:w-2/3 mx-auto">
                <h3 className="text-3xl font-bold mb-5">Discover A Diverse of Toys</h3>
                <p className="font-medium">Welcome to our 'All Toys' section, where imagination knows no bounds. Delve into a captivating world filled with a vast assortment of toys to suit every child's dreams and desires.</p>
            </div>

            {/* seacrh toy by toy name */}
            <div className="form-control md:w-1/2 mx-auto mb-10">
                <div className="input-group">
                    <input onChange={(e) => setSeacrhText(e.target.value)} type="text" placeholder="Search by toy name " className="my-input" />
                    <button onClick={handleSearchByToyName} className="btn-square bg-[#12aee0] duration-300 flex justify-center items-center text-white active:scale-110 active:bg-[#0aa0d1]">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </div>
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
                            toys.map((toy, index) => <TableRow
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