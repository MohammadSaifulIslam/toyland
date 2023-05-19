import { useEffect, useState } from "react";
import LoadingSpinner from "../../../Others/LoadingSpinner/LoadingSpinner";
import ToyCard from "./ToyCard/ToyCard";



const ShopByCategory = () => {
    const [currentTab, setCurrentTab] = useState('Stuffed Animals');
    const [toys, setToys] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    console.log(currentTab)
    useEffect(() => {
        setIsLoading(true)
        fetch(`https://toyland-server.vercel.app/toys-by-subCategory/${currentTab}`)
            .then(res => res.json())
            .then(data => {
                setToys(data)
                setIsLoading(false)
            })
    }, [currentTab])




    const subCategory = ['Stuffed Animals', 'Wildlife', 'Sea Creatures', 'Woodland Animals', 'Marsupials', 'Birds'];

    return (
        <section className="my-container py-20">
            <div className="section-title mb-10 text-center lg:w-2/3 mx-auto">
                <h3 className="text-3xl font-bold mb-5">Shop By Category</h3>
                <p className="font-medium">Discover our diverse range of toys categorized to suit every childs interests and preferences.</p>
            </div>
            <div className="shadow-lg bg-white mb-10 md:flex justify-between items-center">
                {
                    subCategory.map((sub, index) => <p
                        key={index}
                        onClick={(e) => setCurrentTab(e.target.innerHTML)}
                        className={`${sub == currentTab ? 'text-white bg-[#12aee0]' : ''} tab-outline`}>{sub}</p>)
                }
            </div>
            {
                isLoading ? <LoadingSpinner></LoadingSpinner>
                    : <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5">
                        {
                            toys.map(toy => <ToyCard
                                key={toy._id}
                                toy={toy}
                            ></ToyCard>)
                        }
                    </div>
            }
        </section>
    );
};

export default ShopByCategory;