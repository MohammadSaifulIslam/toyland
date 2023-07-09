import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import LoadingSpinner from "../../Others/LoadingSpinner/LoadingSpinner";
import websiteTitle from "../../Others/WebsiteTitle/WebsiteTitle";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import MyToyTableRow from "./MyToyTableRow/MyToyTableRow";

const MyToyPageHome = () => {
    const [sortingText, setSortingText] = useState('')
    const [myToysData, setMyToysData] = useState([])
    const [toyId, setToyId] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const { user } = useContext(AuthContext);
    const { register, handleSubmit, reset } = useForm();


    websiteTitle('Toy Land | My Toys')

    // toy delete function
    const handleDeleteToy = (id) => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'my-btn',
                cancelButton: 'outline-btn'
            },
            buttonsStyling: false
        })
        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://toyland-server.vercel.app/delete-toy/${id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            swalWithBootstrapButtons.fire(
                                'Deleted!',
                                'Your toy has been deleted.',
                                'success'
                            )
                        }
                        const remaining = myToysData.filter(toy => toy._id !== id);
                        setMyToysData(remaining);
                    })

            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Your imaginary toy is safe :)',
                    'error'
                )
            }
        })
    }

    // toy details update function
    const onSubmit = data => {
        console.log({ data, toyId })
        fetch(`https://toyland-server.vercel.app/update-toy/${toyId}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Success',
                        text: 'Your Toy Details Successfully Updated'
                    })
                    reset()
                }
            })

    };

    // sorting by price

    useEffect(() => {
        fetch(`https://toyland-server.vercel.app/my-toy?email=${user?.email}&&text=${sortingText}`)
            .then(res => res.json())
            .then(data => {
                setMyToysData(data)
                setIsLoading(false)
            })
    }, [sortingText])

    if (isLoading) {
        return <LoadingSpinner />
    }
    return (
        <section className="bg-[#e5f9ff] py-20 min-h-[calc(100vh-348px)]">
            {
                myToysData.length > 0 ?
                    <div className="my-container ">
                        <div className="section-title mb-10 text-center lg:w-2/3 mx-auto">
                            <h3 className="text-3xl font-bold mb-5">My Toys Collection</h3>
                            <p className="font-medium">Enchanting Moments Captured in Play. Immerse yourself in a delightful gallery showcasing the magic of playtime.</p>
                        </div>
                        <div className="w-full text-end">
                            <select onChange={(e) => setSortingText(e.target.value)} placeholder="Sort by price" className="px-5 py-2 rounded-3xl border border-[#12aee0] font-semibold focus:outline-[#12aee0] mb-5 mr-auto">
                                <option >Default</option>
                                <option value='low'>Lowest Price</option>
                                <option value="high">Highest Price</option>
                            </select>
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
                                        <th>Name</th>
                                        <th>Quantity</th>
                                        <th>price</th>
                                        <th>Details</th>
                                        <th>Update</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        myToysData.map((toy, index) => <MyToyTableRow
                                            key={toy._id}
                                            toy={toy}
                                            setToyId={setToyId}
                                            index={index}
                                            handleDeleteToy={handleDeleteToy}
                                        ></MyToyTableRow>)
                                    }

                                </tbody>
                            </table>
                        </div>

                        {/* modal for update toy details */}
                        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                        <div className="modal">
                            <div className="modal-box relative">
                                <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                                <form className="border-2 border-[#12aee0] bg-white rounded-xl p-8" onSubmit={handleSubmit(onSubmit)}>
                                    {/* register your input into the hook by invoking the "register" function */}
                                    <h4 className="text-xl text-center font-bold">Update toy details</h4>
                                    <div className="grid grid-cols-2 gap-5 mt-8">
                                        <input {...register("availableQuantity", { required: true })} className='my-input' type="number" required placeholder="Available Quantity" />
                                        <input {...register("price", { required: true })} className='my-input' placeholder="Price" type="number" required />
                                    </div>
                                    <textarea {...register("description", { required: true })}
                                        className='mt-5 my-input' placeholder="Toy Description"></textarea>
                                    <button type="submit" className="my-btn w-full mt-4">Update</button>
                                </form>

                            </div>
                        </div>
                    </div >
                    :
                    <div className="text-center">
                        <p className="text-xl font-semibold">You haven't add any toy.</p>
                        <Link to={'/add-toy'}><button className="my-btn mt-5">Add a Toy</button></Link>
                    </div>
            }
        </section>
    );
};

export default MyToyPageHome;