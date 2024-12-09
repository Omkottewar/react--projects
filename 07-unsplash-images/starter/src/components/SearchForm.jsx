import React from "react";
import { useGlobalContext } from "../Context/Context";

const SearchForm = () => {
    const {setSearchTerm} = useGlobalContext()
    const handleSubmit = (e)=>{
        e.preventDefault();
        let searchValue = e.target.elements.search.value;
        if(!searchValue)return;
        console.log(searchValue)
        setSearchTerm(searchValue);
        searchValue=""
        
    }
  return (
    <section>
      <h1 className="title">Unsplash images</h1>
      <form action=""  onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          className="form-input search-input"
          name="search"
          placeholder="cat"
        />
        <button className="btn" type="submit">Search</button>
      </form>
    </section>
  );
};

export default SearchForm;
