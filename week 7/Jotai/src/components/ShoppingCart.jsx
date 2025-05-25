import { useAtom, useAtomValue } from "jotai"
import { cartAtom, totalAtom } from "../shopping-cart-atoms"

export default function ShoppingCart() {
    const [cart, setCart] = useAtom(cartAtom)
    const total = useAtomValue(totalAtom)

    const addItem = (item) => {
        setCart((prevCart) => [...prevCart, item])
    }

    const removeItem = (indexToRemove) => {
        setCart((prevCart) => prevCart.filter((_, index) => index !== indexToRemove))
    }
    return (
        <>
            <h1>Shopping Cart</h1>
            <ul>
                {cart?.map((item, index) => {
                    return (
                        <li key={index}>
                            {item.itemName} - {item.price}
                            <button onClick={() =>
                                removeItem(index)}>Remove Item</button>
                        </li>
                    )
                })}
            </ul>

            <h2>Total: {total.toFixed(2)}</h2>

            <button onClick={() =>
                addItem({ itemName: "Apple", price: 0.99 })}>Add Apple</button>
            {" "}
            <button onClick={() =>
                addItem({ itemName: "Banana", price: 2.99 })}>Add Banana</button>
        </>
    )
}