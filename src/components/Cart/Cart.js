import Card from "../UI/Card";
import CartItem from "./CartItem";

import classes from "./Cart.module.css";

const Cart = (props) => {
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        <CartItem />
      </ul>
    </Card>
  );
};

export default Cart;
