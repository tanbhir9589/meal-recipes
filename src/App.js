import logo from './logo.svg';
import './App.css';
import SearchBar from './Components/SearchBar';
import RecipeCard from './Components/RecipeCard';
import { useState, useEffect } from 'react';
import React, { Component }  from 'react';

const apiUrl ="https://www.themealdb.com/api/json/v1/1/search.php?s="
function App() {
  const [isLoading,setLoading]=useState(false);
  const [query,setQuery]=useState("");
  const [recipes,setRecipes]=useState([]);

  // funcation to search for the resipes

  const searchRecipes = async () =>{
    setLoading(true);
    const url = apiUrl + query;
    const res = await fetch(url);
    const data= await res.json();
    console.log(data);
    setRecipes(data.meals);
    setLoading(true);
  };

  useEffect(()=>{
       searchRecipes()
  },[]);

  const handleSubmit = event =>{
    event.preentDefault()
    searchRecipes();
  };
  return (
    <div className="container">
       <h2> Meal Recipe App</h2>
       <SearchBar>
           handleSubmit={handleSubmit}
           value={query}
           onChange={event => setQuery(event.target.value)}
           isLoading={isLoading}

       </SearchBar>
        <div className="recipes">
           {
            recipes ? recipes.map(recipe =>(
              <RecipeCard
                key={recipe.idMeal}
                recipe={recipe}
              />
            )):"No Recipes!" }
        </div>
    </div>
  );
}

export default App;
