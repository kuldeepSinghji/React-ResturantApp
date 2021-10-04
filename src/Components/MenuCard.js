import React from 'react'
import "./menuCard.css"
export default function MenuCard(props) {
    return(
        <>
    {
        props.menudata.map((element) => {
            const {id,name,category,price,image,description} = element;
            return (
                <>
                    <div key={id} className="menucard" >
                        <div className="menucardId">
                            <span>{id}.</span>
                            <span>{category}</span>
                        </div>
                        <div className="menucardImg">
                            <img src={image} alt="img" />
                        </div>
                        <div className="menucardName">
                            <span>{name}</span>
                            <span>{price}</span>
                        </div>
                        <div className="menucardDesc">
                            <p>{description}</p>
                        </div>
                    </div>
                </>
            )
        })
    }
    </>
    )
}