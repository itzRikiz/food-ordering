import "./MainContent.css";

function MainContent() {
  const dishes = [
    {
      img: "momo1.jpg",
      title: "Chicken Steamed Momos [6 Pieces]",
      price: "₹120",
      description:
        "Chicken momos or steamed chicken dumplings is a popular Tibetan savoury dish.",
    },
    {
      img: "momo2.jpg",
      title: "Chicken Pan Fried Momos [6 Pieces]",
      price: "₹128",
      description:
        "Hot & Crispy Fried Chicken Momo, Tossed in Spicy Schezwan Sauce and Garnished.",
    },
    {
      img: "momo3.jpg",
      title: "Chicken Fried Momos [6 Pieces]",
      price: "₹110",
      description:
        "Filled with juicy chicken and mixed with the flavors of Indian masala.",
    },
  ];

  return (
    <main>
      <div className="order-info">
        <h2>Order Online</h2>
        <p>Live track your order | 37 min</p>
        <div className="search-box">
          <input type="text" placeholder="Search within menu" />
        </div>
      </div>
      <div className="dishes">
        {dishes.map((dish, index) => (
          <div className="dish" key={index}>
            <img src={dish.img} alt={dish.title} />
            <div className="dish-info">
              <h3>{dish.title}</h3>
              <p>{dish.price}</p>
              <p>{dish.description}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default MainContent;
