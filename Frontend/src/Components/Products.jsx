import React, { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";
const url = "https://jsonplaceholder.typicode.com/posts";

function Products() {
  const [data, setData] = useState([]);
  const [loading, setIsLoading] = useState(false);
  const [error, setIsError] = useState(null);
  async function fetchData() {
    try {
      setIsLoading(true);
      const res = await fetch(url, {
        method: "GET",
      });
      const data = await res.json();
      setData(data);
    } catch (err) {
      setIsError(err);
    } finally {
      setIsLoading(false);
    }
  }

  async function addData(){
    try{
        const res = await fetch(url, {
            method:"POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userId: 99,
                title: "NEW",
                body: "LATEST BRO"
            })
        });
        const data = await res.json();
        console.log(data);
    }catch(err){
        console.log("ADD DATA ERROR:", err)
    }
  }

  useEffect(() => {
    addData();
    fetchData();
  }, []);

  if (loading) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <h2>Error</h2>
      </div>
    );
  }


  return (
    <div>
      <h2>Products Page</h2>
      <h3>Add products</h3>
      <form action=""></form>
      {data.length > 0 &&
        data.map((el) => {
          return <SingleProduct item={el} key={el.id} />;
        })}
    </div>
  );
}

export default Products;
