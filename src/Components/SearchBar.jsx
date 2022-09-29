import React from 'react';

const SearchBar = ({
   value,
   isLoading,
   handleSubimt,
   onChange,

}) => {
    return (
        <form onSubmit={handleSubimt}>
             <input
               value ={value}
               disabled={isLoading}
               onChange={onChange}
               placeholder="Scarch Recipes"
               className="form-control"
             />
             <input
               disabled={isLoading ||  !value}
                type="text" 
                className='btn'
                value="Search"
             />
        </form>
    );
};

export default SearchBar;