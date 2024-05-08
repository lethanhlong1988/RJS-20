import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Layout from "./components/Layout/Layout";
import Cart from "./components/Cart/Cart";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { uiActions } from "./store/ui-slice";

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);
  console.log(notification);
  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "Sending...",
          message: "Sending cart data!",
        }),
      );
      const response = await fetch(
        "https://rjs-20-1cc19-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        },
      );
      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }
    };
    sendCartData().catch((error) => {
      console.log("false send Cart Data!!!");
    });
  }, [cart]);

  return (
    <Fragment>
      <Notification />
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
