import {
  useEffect,
  useState,
} from "react";

import {
  getOrders,
} from "../services/orderService";

export default function Orders() {

  const [orders, setOrders] =
    useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders =
    async () => {

      try {

        const token =
          localStorage.getItem(
            "token"
          );

        const data =
          await getOrders(
            token
          );

        setOrders(data);

      } catch (error) {
        console.error(error);
      }

    };

  return (
    <div
      style={{
        padding:
          "120px 8%",
      }}
    >
      <h1>
        My Orders
      </h1>

      {orders.length === 0 ? (

        <p>
          No orders found
        </p>

      ) : (

        orders.map(order => (

          <div
            key={order.id}
            style={{
              border:
                "1px solid #333",
              padding:
                "20px",
              marginBottom:
                "20px",
            }}
          >
            <h3>
              Order #
              {order.id}
            </h3>

            <p>
              Status:
              {" "}
              {order.status}
            </p>

            <p>
              Total:
              $
              {order.total_amount}
            </p>

            <p>
              Date:
              {" "}
              {new Date(
                order.created_at
              ).toLocaleDateString()}
            </p>

          </div>

        ))

      )}
    </div>
  );
}