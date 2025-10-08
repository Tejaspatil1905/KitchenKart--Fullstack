import React, { useEffect, useState } from "react";
import "./List.css";
import axios from "axios";
import { toast } from "react-toastify";

const List = () => {
  const url = import.meta.env.VITE_API_URL || "http://localhost:4000";
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);
      console.log(response.data);

      if (response.data.success) {
        setList(response.data.data);
      } else {
        toast.error("Error fetching food list");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error connecting to server");
    }
  };
  useEffect(() => {
    fetchList();
  }, []);
  const removefood = async (foodId) => {
    try {
      const response = await axios.post(`${url}/api/food/remove`, {
        id: foodId,
      });
      console.log(response.data);

      if (response.data.success) {
        toast.success("Food item removed successfully");
        // Refresh the list after successful removal
        fetchList();
      } else {
        toast.error("Error removing food item");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error removing food item");
    }
  };
  return (
    <div className="list add flex-col">
      <p>All Food List</p>
      <div className="list-table">
        <div className="list-table-header">
          <p>Image</p>
          <p>Name</p>
          <p>Category</p>
          <p>Price</p>
          <p>Action</p>
        </div>
        {list.length === 0 ? (
          <p style={{ textAlign: "center", padding: "20px", color: "#666" }}>
            No food items found. Add some items first.
          </p>
        ) : (
          list.map((item, index) => {
            return (
              <div key={index} className="list-table-row">
                <img src={`${url}/images/${item.image}`} alt={item.name} />
                <p>{item.name}</p>
                <p>{item.category}</p>
                <p> ₹{item.price}</p>
                <p
                  onClick={() => removefood(item._id)}
                  className="remove-btn"
                  style={{ cursor: "pointer" }}
                >
                  ×
                </p>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default List;
