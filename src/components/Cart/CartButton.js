import classes from "./CartButton.module.css";

const CartButton = (props) => {
  return (
    <button className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}></span>
    </button>
  );
};

export default CartButton;
