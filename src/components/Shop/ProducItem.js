import Card from "../UI/Card";
import classes from "./ProductItem.module.css";

const ProductItem = () => {
  return (
    <Card>
      <header>
        <h3>Title</h3>
        <div>Price</div>
      </header>
      <p>Description</p>
      <div className={classes.actions}>
        <button>Add to Cart</button>
      </div>
    </Card>
  );
};

export default ProductItem;
