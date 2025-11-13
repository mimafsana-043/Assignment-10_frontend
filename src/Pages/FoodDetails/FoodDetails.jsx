import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import SingleFoodDetails from "../SingleFoodDetails/SingleFoodDetails";

const FoodDetails = () => {
    const data = useLoaderData();
    const {_id}  = useParams();
    const [foods, setFoods] = useState({});

    useEffect(()=>{
        const foodDetails = data.find((food)=>food._id==_id);
        setFoods(foodDetails);
    },[data, _id,foods]);

    
    return (
        <div className="mb-24">
           <SingleFoodDetails foods={foods}></SingleFoodDetails>
        </div>
    );
};

export default FoodDetails;