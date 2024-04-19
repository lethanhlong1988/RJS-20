import Card from "../UI/Card";
import classes from "./ProductItem.module.css";

const ProductItem = () => {
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>Title</h3>
          <div className={classes.price}>Price</div>
        </header>
        <p>Description</p>
        <div className={classes.actions}>
          <button>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
