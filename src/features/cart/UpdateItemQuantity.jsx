import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

function UpdateItemQuantity({ id, quantity }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-2 sm:gap-3">
      <Button type="round" onClick={() => dispatch(decreaseItemQuantity(id))}>
        -
      </Button>
      <span className="text-sm font-medium">{quantity}</span>
      <Button type="round" onClick={() => dispatch(increaseItemQuantity(id))}>
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
