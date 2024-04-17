import classes from "./CartItem.module.css";

const CartItem = () => {
  return (
    <li className={classes.item}>
      <header>
        <h3>Title</h3>
        <div className={classes.price}>
          Total <span className={classes.itemprice}>Price</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>quantity</span>
        </div>
        <div className={classes.actions}>
          <button>-</button>
          <button>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
