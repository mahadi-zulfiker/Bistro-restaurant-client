import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-16">
            <SectionTitle
            subHeading={"Check it out"} heading={"Featured Items"}></SectionTitle>
            <div className="md:flex justify-center items-center md:pb-20 md:pt-12 md:px-36 bg-slate-400 bg-opacity-40">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10 space-y-2">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Where can I get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis tempora repellat molestiae expedita amet vel distinctio sint iure! Dolor et ratione, eligendi quasi, ab eveniet autem distinctio aut id saepe blanditiis quaerat aliquam provident earum.</p>
                    <button className="btn btn-outline border-0 border-b-4 text-black">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;