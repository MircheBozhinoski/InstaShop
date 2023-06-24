import { useContext } from "react";
import { Cartcontext } from "../../context/Context";
import "./Cart.css";
import { NavLink } from "react-router-dom";
import { Trash } from "phosphor-react";

const Cart = () => {
  const Globalstate = useContext(Cartcontext);
  const state = Globalstate.state;
  const dispatch = Globalstate.dispatch;

  const total = state.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  return (
    <>
      <div className="cart">
        {state.map((item, index) => {
          return (
            <div className="card" key={index}>
              <img src={item.image} alt="" />
              <h2>{item.name}</h2>
              <h3>{(item.quantity * item.price).toFixed(2)} €</h3>
              <div className="quantity">
                <button
                  onClick={() => dispatch({ type: "INCREASE", payload: item })}
                >
                  +
                </button>
                <p>{item.quantity}</p>
                <button
                  onClick={() => {
                    if (item.quantity > 1) {
                      dispatch({ type: "DECREASE", payload: item });
                    } else {
                      dispatch({ type: "REMOVE", payload: item });
                    }
                  }}
                >
                  -
                </button>
              </div>
              <Trash
                size={42}
                style={{ color: "red" }}
                onClick={() => dispatch({ type: "REMOVE", payload: item })}
              />
            </div>
          );
        })}

        {state.length > 0 ? (
          <div className="total">
            <br />
            <br />
            <h2 className="subtot">TOTAL: {total.toFixed(2)} €</h2>
            <br />
            <br />
            <div className="btns">
              <NavLink to="/">
                <button className="CartBttn">
                  <h3>CONTINUE SHOPPING</h3>
                </button>
              </NavLink>

              <NavLink to="/checkout">
                <button className="CartBttn">
                  <h3>CHECK OUT</h3>
                </button>
              </NavLink>
            </div>
          </div>
        ) : (
          <h1> Your Shopping Cart is Empty</h1>
        )}
      </div>
    </>
  );
};

export default Cart;
