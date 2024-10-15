import React from "react";
import { useNavigate } from "react-router-dom";

export default function FoodCard({item}) {

  const navigate = useNavigate()
  return (
    <div className="transition-all rounded-lg shadow-xl card w-80 bg-base-100 hover:-translate-y-3">
      <figure>
        <img className="object-cover w-full h-52" src={item.image.url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <div className="flex items-center justify-between">
          <h2 className="card-title">{item.name}</h2>
          <div className="badge badge-success badge-sm">{item.category}</div>
        </div>
        <p>{item.description.slice(0, 80)}...</p>
        <div className="items-center justify-end mt-2 card-actions">
        </div>
        <button onClick={() => navigate(`/food-item/${item._id}`)} className="mt-3 btn btn-outline btn-info">See Details</button>
      </div>
    </div>
  );
}
