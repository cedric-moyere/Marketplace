import React from 'react';  
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart, updateCart } from "../../lib/state/actions";

const Row = ({ _id, name, price, imageUrl, quantity}) => { 
    const dispatch = useDispatch()
    const addToCartAction = (e) => {
        e.preventDefault()
		dispatch(addToCart({ _id, name, price }))
    }
    const removeFromCartAction = (e) => { 
        e.preventDefault()
        dispatch(removeFromCart(_id))
    }
    const updateQuantity = (e) => dispatch(updateCart(_id, e.target.value))
    
    return (
        <tr>
            <td>
                <figure className="itemside">
                    <div className="aside"><img src={ imageUrl } className="img-sm" /></div>
                    <figcaption className="info">
                        <a href="#" className="title text-dark">{ name }</a>
                    </figcaption>
                </figure>
            </td>
            <td> 
                <select className="form-control" value={quantity} onChange={updateQuantity}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select> 
            </td>
            <td>    
                <div className="price-wrap"> 
                    <var className="price">${ price * quantity }</var> 
                </div>
            </td>
            <td className="text-right"> 
                <a data-original-title="Save to Wishlist" title="" href="" className="btn btn-light" data-toggle="tooltip" onClick={addToCartAction}> <i className="fa fa-heart"></i></a> 
                <a href="" className="btn btn-light btn-round" onClick={removeFromCartAction}> Remove</a>
            </td>
    </tr>)
}
export default Row