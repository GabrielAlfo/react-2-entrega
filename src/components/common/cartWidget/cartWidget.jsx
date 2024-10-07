import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
// import ProductCard from "../productCard/ProductCard";
const CartWidget = ({ id }) => {
  return (
    <div>
      <Badge badgeContent={0} color="primary" max={30} showZero={true}>
        <ShoppingCartIcon />
      </Badge>
    </div>
  );
};

export default CartWidget;
