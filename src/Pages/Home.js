import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card";
import Navbar from "../Navbar";

const Home = () => {
  const [search, setSearch] = useState("");
  const [ filteredProduct, setFilteredProduct ] = useState([])

  const itemStore = useSelector((store) => store.itemStore);
  const items = itemStore.items;

  useEffect(()=>filterproduct(),[search])

  const filterproduct = () => {
    setFilteredProduct(items.filter(item=>item.item_name.toLowerCase().match(search.toLowerCase())))
  }
  
  
  return (
    <div>
      <Navbar />
      <div className="text-center">
        <input
          type="text"
          className="py-2 px-1 bg-success-subtle w-75 my-2"
          placeholder="enter name"
          onChange={(e)=>setSearch(e.target.value)}
        ></input>
      </div>

      <div className="containre-fluid">
        <div className="row row-cols-1 row-cols-lg-5 g-4">
          {filteredProduct &&
            filteredProduct.map((item, i) => {
              return <Card item={item} key={i} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Home;
