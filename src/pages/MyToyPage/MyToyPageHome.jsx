import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import MyToyTableRow from "./MyToyTableRow/MyToyTableRow";

const MyToyPageHome = () => {
    const [myToysData, setMyToysData] = useState([])
    const {user} = useContext(AuthContext);

    useEffect(()=>{
        fetch(`http://localhost:5000/my-toy?email=${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setMyToysData(data)
            console.log(data)
        })
    },[user])
    console.log(user?.email)
    return (
        <section className="my-container my-20">
            <div className="section-title mb-10 text-center lg:w-2/3 mx-auto">
                <h3 className="text-3xl font-bold mb-5">My Toys Collection</h3>
                <p className="font-medium">Enchanting Moments Captured in Play. Immerse yourself in a delightful gallery showcasing the magic of playtime.</p>
            </div>
            <p>My toy: {myToysData.length}</p>
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
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        myToysData.map((toy, index)=> <MyToyTableRow
                        key={toy._id}
                        toy={toy}
                        index={index}
                        ></MyToyTableRow>)
                       }
                       
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default MyToyPageHome;