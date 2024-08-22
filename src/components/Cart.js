import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const selectedItems = useSelector((store) => store.cart.items);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 md:p-10 max-w-4xl w-full">
        <h2 className="text-2xl md:text-4xl font-semibold mb-4 md:mb-8 text-center text-gray-800">
          Your Cart
        </h2>
        
        {selectedItems.length > 0 ? (
          <>
            <ItemList items={selectedItems} />
            <button
              onClick={handleClearCart}
              className="mt-4 md:mt-8 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg w-full"
            >
              Clear Cart
            </button>
          </>
        ) : (
          <p className="text-center text-gray-600">Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
