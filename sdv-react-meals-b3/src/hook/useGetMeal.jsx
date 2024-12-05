import { useEffect, useState } from "react";

const  useGetMeal = () => {
    const [meals, setMeals] = useState();

    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setMeals(data.meals);
            });
    }, []);

    return {meals}
}

export default useGetMeal   