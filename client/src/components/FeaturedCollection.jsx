import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";

export default function FeaturedCollection() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const data = await getProducts();

      setProducts(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="featured">
      <h2>Featured Collection</h2>

      <div className="watch-grid">
        {products.map((product) => (
          <div
            key={product.id}
            className="watch-card"
          >
            <div className="watch-info">

              <h3>{product.name}</h3>

              <p>${product.price}</p>

              <button>
                View Details
              </button>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}