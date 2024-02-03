import React from "react";
import Card from "./Card";


const CardList = ({robots}) => {
    // if (true) {
    //     throw new Error('Nooooooooo!') //Error testing to check if ErrorBoundary will work as planed.
    // }
    return (
        <div>
            {
                robots.map((user, i) => {
                    return  (
                        <Card 
                            key={i} 
                            id={robots[i].id} 
                            name={robots[i].name} 
                            email={robots[i].email}
                            />
                    );
                })
            }            
        </div>
    )
    
}

export default CardList;