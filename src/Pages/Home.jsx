import DisplayProducts from "../Components/displayProducts"
import Footer from "../Components/footer"
import Header from "../Components/Header"
import ProductList from "../Components/ProductList"

const Home = () => {
    return <div>
        <Header />
        <div className="flex justify-around pt-40">
            <div className="pt-10 bg">
                <h1 className="text-2xl"> <span className="text-socondryColor text-4xl ">E-suuq</span> Lorem ipsum dolor sit amet, <br /> consectetur adipisicing elit. Neque, aspernatur.</h1>
                <button className="bg-primaryColor px-16 py-3 text-textColor rounded-lg mt-8">Buy Now</button>
            </div>
            <div>
                <img className="w-[400px] rounded-2xl" src="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" />
            </div>
        </div>

        <div className="my-40">

            <h1 className="text-4xl text-primaryColor text-center font-bold pb-20 ">Products</h1>
            <ProductList />
        </div>

        <Footer />
    </div>
}

export default Home