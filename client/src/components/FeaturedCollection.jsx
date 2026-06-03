const watches = [
  {
    id: 1,
    name: "Imperial Gold",
    price: "$799",
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49",
  },
  {
    id: 2,
    name: "Royal Black",
    price: "$699",
    image:
      "https://images.unsplash.com/photo-1434056886845-dac89ffe9b56",
  },
  {
    id: 3,
    name: "Executive Silver",
    price: "$899",
    image:
      "https://images.unsplash.com/photo-1547996160-81dfa63595aa",
  },
];

export default function FeaturedCollection() {
  return (
    <section className="featured">
      <h2>Featured Collection</h2>

      <div className="watch-grid">
        {watches.map((watch) => (
          <div key={watch.id} className="watch-card">
            <img src={watch.image} alt={watch.name} />

            <div className="watch-info">
              <h3>{watch.name}</h3>
              <p>{watch.price}</p>

              <button>View Details</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}