import { useContext, useEffect, useState } from "react";
import React from "react";
import "./Homepage.css";
import axios from "axios";
import { Cartcontext } from "../../context/Context";

const Homepage = () => {
  const [data, setdata] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(
      "https://test.besnikselimi.com/api/products"
    );
    setdata(response.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const Globalstate = useContext(Cartcontext);
  const dispatch = Globalstate.dispatch;

  return (
    <div className="home">
      {data.map((item, index) => {
        item.quantity = 1;

        return (
          <div className="card" key={index}>
            <img src={item.image} alt="" />
            <br />
            <h3>{item.name}</h3>
            <br />
            <h3>{item.price} €</h3>
            <br />
            <button
              className="addToCartBttn"
              onClick={() => [dispatch({ type: "ADD", payload: item })]}
            >
              <h3> ADD TO CART </h3>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Homepage;
