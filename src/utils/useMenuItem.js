import { useEffect, useState } from "react";
import { Query } from "appwrite";
import db from "../appwrite/databases";

function useMenuItem(restaurantId) {
    const [dishes, setDishes] = useState([]);

    useEffect(() => {
        const fetchDishes = async () => {
            try {
                const response = await db.dishes.list([
                    Query.equal("restaurantId", restaurantId),
                ]);
                setDishes(response?.documents);
            } catch (error) {
                console.error("Failed to fetch dishes:", error);
            }
        };

        if (restaurantId) {
            fetchDishes();
        }
    }, [restaurantId]);

    return dishes;
}

export default useMenuItem;
