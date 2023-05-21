import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import LoadingSpinner from "../../Others/LoadingSpinner/LoadingSpinner";
import websiteTitle from "../../Others/WebsiteTitle/WebsiteTitle";
import TableRow from "./TableRow/TableRow";

const AllToyPageHome = () => {
    const [toys, setToys] = useState([]);
    const [seacrhText, setSeacrhText] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    // pagination state 
    const [currentPage, setCurrentPage] = useState(1);
    // pagiation data load
    const { totalToys } = useLoaderData();

    websiteTitle('Toy Land | All Toys')

    // pagination
    const itemsPerPage = 20;
    const totalPage = Math.ceil(totalToys / itemsPerPage);

    const pageNumbers = [...Array(totalPage).keys()]
    console.log({ pageNumbers })



    useEffect(() => {
        fetch(`https://toyland-server.vercel.app/all-toys`)
            .then(res => res.json())
            .then(data => {
                setIsLoading(false)
                setToys(data)
            })
    }, [])


    const handleSearchByToyName = () => {
        setIsLoading(true)
        console.log(seacrhText)
        fetch(`https://toyland-server.vercel.app/toysByName/${seacrhText}`)
            .then(res => res.json())
            .then(data => {
                setToys(data)
                setIsLoading(false)
            })
    }
    // pagination: load data by using current page and itemsPerPage 
    useEffect(() => {
        setIsLoading(true)
        fetch(`https://toyland-server.vercel.app/all-toys-pagination?page=${currentPage}`)
            .then(res => res.json())
            .then(data => {
                setToys(data);
                setIsLoading(false)

            })
    }, [currentPage]);


    if (isLoading) {
        return <LoadingSpinner />
    }

    return (
        <section className="bg-[#e5f9ff] py-20">
            <div className="my-container">
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
                {
                    toys.length > 0 ?
                        <>
                            <div className="overflow-x-auto w-full">
                                <table className="table w-full">

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
                            {/* pagination */}
                            <div className="text-center text-lg font-medium mt-10 space-x-5">
                                {
                                    toys.length === 20 &&
                                    pageNumbers.map(number => <button
                                        key={number}
                                        onClick={() => setCurrentPage(number + 1)}
                                        className={`border border-[#12aee0] h-8 w-8 rounded-full duration-300 ${currentPage === number + 1 && 'bg-[#12aee0] h-8 w-8 rounded-full text-white'}`}>
                                        {number + 1}
                                    </button>)
                                }
                            </div>
                        </>
                        : <div className="text-center">
                            <p className="text-xl font-semibold">Not Found any toy. Try another search</p>
                        </div>
                }

            </div>
        </section>
    );
};

export default AllToyPageHome;