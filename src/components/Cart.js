import React from "react";

const Cart = ({ cartItems }) => {
  const newItem = Object.values(cartItems);
  const totalSum = newItem.reduce(
    (result, curValue) => result + curValue.count * curValue.cost,
    0
  );

  return (
    <>
      {newItem.length === 0 ? (
        <div className="item-centre m-t-5">No items in Cart</div>
      ) : (
        <table className="cart-table">
          <thead>
            <tr className="cart-row">
              <th>Item</th>
              <th>Quantity</th>
              <th>Cost</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {newItem.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.count}</td>
                  <td>{item.cost}</td>
                  <td>{item.count * item.cost}</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="3">Total Cost</td>
              <td>{totalSum}</td>
            </tr>
          </tfoot>
        </table>
      )}
    </>
  );
};

export default Cart;
