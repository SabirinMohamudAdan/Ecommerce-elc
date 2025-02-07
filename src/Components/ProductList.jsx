import Data from "./Data"
import DisplayProducts from "./displayProducts"

function ProductList(){
    return <div className="grid grid-cols-3 gap-8">
        {
            Data.map((item) => {
                return <DisplayProducts products={item} />
            })
        }
    </div>
}

export default ProductList