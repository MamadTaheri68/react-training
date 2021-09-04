import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

// Functions
import { shorten, isInCart, quantityCount } from '../../helpers/functions';

// Context
import { CartContext } from '../../context/CartContextProvider'

// Icons
import trashIcon from '../../assets/trash.svg'

// Style
import styles from './Product.module.css'

const Product = ({productData}) => {

   const {state, dispatch} = useContext(CartContext)

    return (
        <div className={styles.container}>
           <img className={styles.cardImage} src={productData.image} alt="item"/>
           <h3>{shorten(productData.title)}</h3> 
           <p>{productData.price}</p>
           <div className={styles.LinkContainer}>
              <Link to={`/products/${productData.id}`}>Details</Link>
              <div className={styles.buttonContainer}>
                 {quantityCount(state, productData.id) > 1 && <button className={styles.smallButton} onClick={() => dispatch({type:"DECREASE", payload: productData})}>-</button>}
                 {quantityCount(state, productData.id) === 1 && <button className={styles.smallButton} onClick={() => dispatch({type:"REMOVE_ITEM", payload: productData})}><img src={trashIcon} alt="trash" style={{width: "20px"}} /></button>}
                 {
                    isInCart(state, productData.id) ?
                    <button className={styles.smallButton} onClick={() => dispatch({type:"INCREASE", payload: productData})}>+</button>:
                    <button onClick={() => dispatch({type:"ADD_ITEM", payload: productData}) }>Add to Cart</button>
                 }
              </div>
           </div>
        </div>
    );
};

export default Product;