import React from 'react';
import './Header.scss';

class Header extends React.Component {
    state = {
       
    };

    handleSearch = event => {
        this.props.filterHotels(event.target.value);
        
    }

    render() {
        
        return(
            <div className="header">
                <input type="text" className="search-field" placeholder="enter location" onChange={this.handleSearch}/>
            </div>
        )
    }
}

export default Header;