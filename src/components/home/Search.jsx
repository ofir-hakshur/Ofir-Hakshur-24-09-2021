import React from 'react';

const Search = ({textBox, handleTextBoxOnChange, suggestedCities, handleCityOnClick}) => {
    return (
        <div className='home-textBox'>
            <input type="text" placeholder={'Search..'} value={textBox} onChange={e => handleTextBoxOnChange(e.currentTarget.value)}/>
            <div className="home-suggestedCities">
                {suggestedCities.length > 0 && 
                <div>
                    {suggestedCities.map(city =>
                    <div key={city.Key} className={'home-autocompleteItems'}>
                        <span onClick={() => handleCityOnClick(city.LocalizedName)}>{city.LocalizedName}</span>
                    </div>)}
                </div>}
            </div>
        </div>
    )
}

export default Search;