import React, { useEffect, useState } from "react";

const Item = ({ item, handleCartItems }) => {
  const [count, setCount] = useState(0);
  const [intialRender, setInitialRender] = useState(true);

  useEffect(() => {
    if (!intialRender) {
      handleCartItems(item, count);
    } // eslint-disable-next-line
  }, [count]);

  const handleItemAddition = () => {
    setCount(count + 1);
    if (intialRender) {
      setInitialRender(false);
    }
  };

  const handleItemRemoval = () => {
    setCount(count - 1);
  };
  return (
    <div className="item">
      <div id="img">
        <img src={item.thumbnail} height="170" width="220" alt="item" />
      </div>
      <div className="item-centre">{item.name}</div>
      {count === 0 && (
        <button id="add-cart" onClick={handleItemAddition}>
          Add To Cart
        </button>
      )}
      {count !== 0 && (
        <div id="btns">
          <button className="add-btn" onClick={handleItemAddition}>
            Add
          </button>
          <button id="ctrl" onClick={handleItemRemoval}>
            Remove
          </button>
          <div id="count">{count}</div>
        </div>
      )}
    </div>
  );
};

export default Item;
