import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import React from 'react'

function RestaurantCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const restaurants = [
    {
      name: "Only Momo",
      rating: 4.1,
      deliveryTime: "25-30 mins",
      discount: "20% OFF ABOVE ₹350",
      imageUrl: "link_to_image_1",
      cuisine: "Momos, Chinese, Snacks, Fast Food",
      location: "Dighi - Basirhat",
    },
    {
      name: "Blue Heavens Restaurant",
      rating: 4,
      deliveryTime: "35-40 mins",
      discount: "",
      imageUrl: "link_to_image_2",
      cuisine: "Indian, Biryani, Chinese",
      location: "Dighi - Basirhat",
    },
    {
      name: "New Sree Krishna Biriyani House",
      rating: 4.2,
      deliveryTime: "25-30 mins",
      discount: "10% OFF ABOVE ₹149",
      imageUrl: "link_to_image_3",
      cuisine: "Biryani, Chinese",
      location: "Dighi - Basirhat",
    },
    {
      name: "New QFC",
      rating: 4.3,
      deliveryTime: "25-30 mins",
      discount: "",
      imageUrl: "link_to_image_4",
      cuisine: "American, Snacks",
      location: "Dighi - Basirhat",
    },
  ];
  return (
    <div className="restaurant-carousel">
      <h2>Top restaurant chains in Basirhat</h2>
      <Slider {...settings}>
        {restaurants.map((restaurant, index) => (
          <div key={index} className="restaurant-card">
            <img src={restaurant.imageUrl} alt={restaurant.name} />
            <h3>{restaurant.name}</h3>
            <p>{restaurant.cuisine}</p>
            <p>{restaurant.location}</p>
            <p>
              {restaurant.rating} ⭐ | {restaurant.deliveryTime}
            </p>
            {restaurant.discount && (
              <p className="discount">{restaurant.discount}</p>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default RestaurantCarousel;
