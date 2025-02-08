import Footer from "../Components/Footer";
import Header from "../Components/Header";
import ProductList from "../Components/ProductList";

const Products = () => {
    return (
        <div>
            <Header />
            {/* Main Content */}
            <div className="pt-20 flex gap-8 px-1">
                {/* Left Sidebar with Box Shadow and Menus */}
                <div className="w-[250px] h-[100vh]
                 bg-white p-6 rounded-lg
                 shadow-lg pt-20">
                    <h2 className="text-xl font-semibold mb-4">Menu</h2>
                    <ul className="space-y-3">
                        <li className="hover:bg-gray-100 p-2 rounded-md cursor-pointer">Dashboard</li>
                        <li className="hover:bg-gray-100 p-2 rounded-md cursor-pointer">Products</li>
                        <li className="hover:bg-gray-100 p-2 rounded-md cursor-pointer">Orders</li>
                        <li className="hover:bg-gray-100 p-2 rounded-md cursor-pointer">Settings</li>
                    </ul>
                </div>

                {/* Right Content Boxes */}
                <div className="w-3/4 space-y-6 pt-20 pb-20">
                  

                    {/* Box 2 */}
                    <div className="bg-white p-6 ">
                        {/* <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
                        <ul className="space-y-3">
                            <li className="text-gray-600">Order #1234 shipped</li>
                            <li className="text-gray-600">New user registered</li>
                            <li className="text-gray-600">Product "XYZ" added to inventory</li>
                        </ul> */}
                     {/* <ProductList/> */}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Products;