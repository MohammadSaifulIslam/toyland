import contactImage from '../../../assets/images/contact/contact.jpg';
const Contact = () => {
    const handleSendMessage = event =>{
        event.preventDefault();
        event.target.reset()
    }
    return (
        <div className='my-container mt-20'>
              <div className="section-title mb-10 md:mb-0 text-center lg:w-2/3 mx-auto">
                    <h3 className="text-3xl font-bold mb-5">Get Touch With Us</h3>
                    <p className="font-medium">This section is designed to make it easy for customers to make reservations, ask questions, or provide feedback about their dining experience.</p>
                </div>
            <div className=' grid md:grid-cols-2 gap-5 items-center'>
                {/* <Lottie className='h-[430px] ' animationData={contactAnimation} loop={true} /> */}
                <form onSubmit={handleSendMessage} className=''>
                    <input type="text" placeholder="Your name" className="input input-bordered border-2 rounded-3xl border-[#12aee0] bg-slate-50 w-full focus:outline-none" required />
                    <input type="email" placeholder="Your email" className="input input-bordered border-2 rounded-3xl border-[#12aee0] bg-slate-50 w-full focus:outline-none mt-5" required />
                    <input type="number" placeholder="Your phone number" className="input input-bordered border-2 rounded-3xl border-[#12aee0] bg-slate-50 w-full focus:outline-none mt-5" required />
                    <textarea className="textarea h-40 textarea-bordered border-2 rounded-3xl border-[#12aee0] bg-slate-50 w-full focus:outline-none mt-5" placeholder="Your message" required></textarea>
                    <button className='my-btn text-start mt-4'>Send Message</button>
                </form>
                <div className='w-full h-full'>
                    <img src={contactImage} className='w-full h-full object-contain' alt="Contact Image" />
                </div>
            </div>
        </div>
    );
};

export default Contact;