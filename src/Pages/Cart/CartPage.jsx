import { useCart } from "../../Context";
import { useTitle } from "../../hooks/useTitle";
import CartEmpty from "./component/CartEmpty";
import CartList from "./component/CartList";


const CartPage = () => {
    const {cartList} = useCart()
    useTitle(`Cart (${cartList.length})`)
  return (
    <main>
      {cartList.length ? <CartList/> : <CartEmpty/>}
    </main>
  )
}

export default CartPage

