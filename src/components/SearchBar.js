import React, { Component } from "react";
import "../UserDirectory.css";

/*props.handleInputChange*/

/*ssistance = ({ handleSearch }) => {
    handleSearch = { handleSearch }
}*/

function SearchBar(props, { handleSearch }) {
    return (
        <div>


            <form className="search">
                <div className="form-group">

                    <input
                        value={props.search}
                        onChange={props.handleInputChange} /*{event => handleSearch(event)}*/
                        name="search"
                        list="users"
                        type="text"
                        className="form-control"
                        placeholder="Search for A user"
                        id="search"
                    >
                    </input>

                    {/*<button className="btn btn-dark">
                    Search
    </button>*/}

                </div>
            </form>
        </div >
    );
}

export default SearchBar;