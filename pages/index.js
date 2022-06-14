import  SearchBarf from "../components/searchBar";
import ShowList from "../components/itemList";
import { Fragment } from "react";
import { useState } from "react";
import styles from './index.module.css'

function asj(){
    const [cel,callB]=useState('');
    
    return (<Fragment><SearchBarf parentCallback={callB}/>
    <div className={styles.coverBox}><ShowList itemKey={cel}/></div>
    
    </Fragment>
    )
}

export default asj;

// import { Fragment } from 'react';
// import classes from '../components/searchBar.module.css';


// function searchBarf() {
//     return (<Fragment>
//         <div className={classes.bar}>
//             <input type="text" className={classes.searchBar} ></input>
//             <button type='submit'></button>
//         </div></Fragment>)
    
// }

// export default searchBarf;