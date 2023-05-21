import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import LoadingSpinner from "../../Others/LoadingSpinner/LoadingSpinner";
import { deleteShoppingCart, getFromDb, removeFromDb } from "../../utility/fakeDb";
import CartItem from "./CartItem/CartItem";

const MyCartPageHome = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [cartToysData, setCartToysData] = useState([]);

    // get added product from localstorage
    const addedToys = getFromDb();
    const ids = Object.keys(addedToys)

    // calculate total price
    let totalPrice = 0;
    cartToysData.map(toy => {
       totalPrice = totalPrice + parseFloat(toy.price);
    })

    const handleClearCart = () =>{
        setCartToysData([])
        deleteShoppingCart()
        toast.success('Successfully Clear Cart')
    }
    const handleRemoveItem = id =>{
        const remainig = cartToysData.filter(toy => toy._id !== id);
        setCartToysData(remainig)
        removeFromDb(id)
        toast.success('Toy removed from cart')
    }
    const handlePlaceOrder =() =>{
        if(cartToysData.length > 0){
            setCartToysData([])
            deleteShoppingCart()
            toast.success('Your order has been placed 🔥')
        }else{
            toast.success('Your cart is empty. Add a toy to cart first.')
        }
    }


    // toy data fetch from database by ids 
    useEffect(()=>{
        fetch(`http://localhost:5000/toysById`,{
            method: "POST",
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(ids)
        })
        .then(res => res.json())
        .then(data => {
            setCartToysData(data)
            console.log(data)
            setIsLoading(false)
        })
    },[])

    if(isLoading){
        return <LoadingSpinner/>
    }
    return (
        <section className="min-h-[calc(100vh-348px)] py-20 bg-[#e5f9ff]">
            <div className="my-container flex justify-center">
                <div className="md:w-1/2">
                    <h3 className='py-5 text-2xl font-semibold text-black'>{cartToysData.length > 0 ? 'Review cart items' : 'Cart is empty'}</h3>
                    <ul className='w-full divide-y divide-[#12aee0]'>
                        {cartToysData.map(toy =>
                            <CartItem
                                key={toy._id}
                                toy={toy}
                                handleRemoveItem={handleRemoveItem}
                            ></CartItem>)}
                    </ul>
                    <div className="divide-y-1 text-right">
                        <p className="text-xl font-medium">Total Amount: <span className='font-semibold text-[#12aee0]'>{(totalPrice).toFixed(2)}$</span></p>
                        <p className='text-small'>Not including taxes and shipping costs</p>
                    </div>
                    <div className='flex flex-col md:flex-row justify-end gap-5 mt-5'>
                        {cartToysData.length > 0 ?
                            <button onClick={handleClearCart} className='outline-btn'>Clear Cart</button>
                            : <Link to='/all-toy' className="ml-auto">
                                <button className='outline-btn'>Back To Shop</button>
                            </Link>
                        }
                        <button onClick={handlePlaceOrder} className='my-btn w-fit ml-auto md:ml-0'>Place Order</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyCartPageHome;