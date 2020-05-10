import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    /*
        This builds a new array of Cards called cardComp.
        Everytime the map iterates and returns, that element
        of the array is set to the returned expression.
    */
    const cardArray = robots.map((user, i) => {
        return <Card
            key={i} // i can sometimes be overwritten if array changes, so make a unique key 
            id={robots[i].id} 
            name={robots[i].name} 
            email={robots[i].email} 
            />;
    })
    return(
        <div>
            {cardArray}
        </div>       
    );
}

export default CardList;