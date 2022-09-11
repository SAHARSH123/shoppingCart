import React, { useEffect, useState } from "react";
import Cart from "./components/Cart";
import Item from "./components/Item";
import "./App.css";

const App = () => {
  const [items, setItems] = useState([]);
  const [itemsAdded, setItemsAdded] = useState({});

  useEffect(() => {
    const fetchItems = async () => {
      const data = await fetch(`https://dummyjson.com/products?limit=15`);
      const parsedData = await data.json();
      const newItems = parsedData.products.map((item) => {
        return {
          id: item.id,
          name: item.title,
          cost: item.price,
          thumbnail: item.thumbnail,
        };
      });
      setItems(newItems);
    };
    fetchItems();
  }, []);

  const handleCartItems = (newItem, itemCount) => {
    const newItemsAdded = itemsAdded;
    const item = {};
    item[newItem.id] = {
      name: newItem.name,
      count: itemCount,
      cost: newItem.cost,
      id: newItem.id,
    };
    if (itemCount === 0) {
      delete newItemsAdded[newItem.id];
      setItemsAdded((itemsAdded) => ({
        ...newItemsAdded,
      }));
    } else {
      setItemsAdded((itemsAdded) => ({
        ...itemsAdded,
        ...item,
      }));
    }
  };

  return (
    <div className="flex-parent">
      <div className="items">
        {items.map((item) => (
          <Item key={item.id} item={item} handleCartItems={handleCartItems} />
        ))}
      </div>
      <div className="cart">
        <Cart cartItems={itemsAdded} />
      </div>
    </div>
  );
};

export default App;
