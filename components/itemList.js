import { Fragment } from 'react';
import styles from './itemList.module.css'
import tr from '../product_dummy_data.json';

function ShowList(props){
    let itemKey="yes";
    itemKey = props.itemKey;
    itemKey=itemKey.toLowerCase();

    console.log(itemKey); 
    // {
    //     tr.map(record =>{
    //         console.log(record.brand);
    //     })
    // }
    // return<Fragment><h1>yes</h1>{
    //          tr.map(record =>{
    //              <h1>{record.brand}</h1>
    //          })
    //      }
    // </Fragment>
    return (
        
        tr.map(record=>{
            let c= record.title;
            c=c.toLowerCase();
            
            if (c.indexOf(itemKey) != -1){
                const c=record.images[0];
               //return( <h1>{record.title},{record.title.search(itemKey)},{itemKey.toLowerCase}</h1>)
               return(
                <div className={styles.box1}>
                     
                   <div className={styles.image2}> <img className={styles.image1} src={record.images[0]}  ></img></div>
                     
                    
                    <h1 className={styles.h1}> <b>{record.title}</b></h1>
                    <h1  className={styles.h1}>Brand: {record.brand}</h1>
                    <h1 className={styles.h1}>Category: {record.category}</h1>
                    <h1 className={styles.h1}>Price: {record.price}</h1>
                    <h1 className={styles.h1}>Stock: {record.stock}</h1>
                    <h1 className={styles.h1}>Rating: {record.rating}</h1>
                    <button className={styles.button}>Buy Now</button>
                </div>
               )
            }
        })
    
    )
}

export default ShowList;