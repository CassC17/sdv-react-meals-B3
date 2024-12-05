
const useGetMealById = (id) => {
    const [meal, setMeal] = useState(null);
  
    useEffect(() => {
      fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setMeal(data.meals[0]);
        });
    }, []);
  
    return { meal };
  };
  
  export default useGetMealById;