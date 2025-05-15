import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { toast } from "react-toastify"
import { getProduct } from "../Services/productService"
import { useCart } from "../Context"
import { IoAdd, IoTrash } from "react-icons/io5";
import { Rating } from "../components"
import { useTitle } from "../hooks/useTitle"


const ProductDetails = () => {

    const {cartList, addToCart, removeFromCart, clearCart} = useCart()
    const [inCart, setInCart] = useState(false)
    const [product, setProduct] = useState({})
    const {id} = useParams()
    useTitle(product.name)

    useEffect(() => {
        async function fetchProducts() {
            try {
                const data = await getProduct(id);
                setProduct(data);
            } catch (error) {
                toast.error(error.message, {closeButton: true, position: "button-center"})
            }
        }
        fetchProducts()
    }, [id])
    
    useEffect(() => {
        const productInCart = cartList.find(item => item.id === product.id)

        if(productInCart){
            setInCart(true)
        }else{
            setInCart(false)
        }
    }, [cartList, product.id])

  return (
    <main>
      <section>
        <h1 className="mt-10 mb-5 text-4xl text-center font-bold text-gray-900 dark:text-slate-200">{product.name}</h1>

        <p className="mb-5 text-lg text-center text-gray-900 dark:text-slate-200">{product.overview}</p>

        <div className="flex flex-wrap justify-around">
            <div className="max-w-xl my-3">
                <img src={product.poster} className="rounded" alt={product.name} />
            </div>

            <div className="max-w-xl my-3">
                <p className="text-3xl font-bold text-gray-900 dark:text-slate-200">
                    <span className="mr-1">$</span>
                    <span>{product.price}</span>
                </p>

                <p className="my-3">
                    <span>
                        <Rating rating={product.rating}/>
                    </span>
                </p>

                <p className="my-4 select-none">
                    {product.best_seller && 
                        <span className="text-semibold text-amber-500 border bg-amber-50 rounded-lg px-3 py-1 mr-2">
                            BEST SELLER
                        </span>
                        }
                    {
                        product.in_stock &&
                        <span className="text-semibold text-emerald-600 border bg-slate-100 rounded-lg px-3 py-1 mr-2">
                            INSTOCK
                        </span>
                    }
                    {
                        !product.in_stock && 
                        <span className="text-semibold text-rose-700 border bg-slate-100 rounded-lg px-3 py-1 mr-2">
                            OUT OF STOCK
                        </span>
                    }
                    <span className="text-semibold text-blue-600 border bg-slate-100 rounded-lg px-3 py-1 mr-2">
                        {product.size}
                    </span>
                </p>
                    
                <p className="my-3">
                    {
                        !inCart && 
                        <button
                            onClick={() => addToCart(product)}
                            className={`inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 ${product.in_stock ? "" : "border-not-allowed"}`}
                            disabled={product.in_stock ? "" : "disabled"}
                        >
                            Add To Cart
                            <i className="ml-1">
                            
                            <IoAdd />
                            </i>
                        </button>
                    }

                    {
                        inCart && 
                        <button
                            onClick={() => removeFromCart(product)}
                            className={`inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800 ${product.in_stock ? "" : "border-not-allowed"}`}
                            disabled={product.in_stock ? "" : "disabled"}
                        >
                            Remove Item
                            <i className="ml-1">
                            
                            <IoTrash />
                            </i>
                        </button>
                    }
                </p>
                    
                <p className="text-lg text-gray-900 dark:text-slate-200">
                    {product.long_description}
                </p>

            </div>
        </div>
      </section>
    </main>
  )
}

export default ProductDetails
