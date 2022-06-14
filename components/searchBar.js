import { Fragment} from 'react';
import {useRef } from 'react';
import styles from './searchBar.module.css';
import ShowList from './itemList';




function SearchBarf(props) {
    const titleInputRef = useRef();
    function submitHandler(event) {
        event.preventDefault();
    
        const enteredTitle = titleInputRef.current.value;
        // console.log(enteredTitle);
        props.parentCallback(enteredTitle);
        
        }
    return (<Fragment>
        <div className={styles.bar} >
            <form className={styles.form} onChange={submitHandler}>
                <input type='text' className={styles.searchBar} placeholder="Search" ref={titleInputRef}></input>
                
            </form>
            {/* <input type="text" className={classes.searchBar} ></input>
            <div className={classes.search}>&#128269;</div> */}
        </div>
        </Fragment>);
    
}

export default SearchBarf;