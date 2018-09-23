import React from 'react';

const styles = {
    pStyle :{
        borderBottom:"2px solid black"
    }
}

const BlogList = props =>{
    return (
        <div style={styles.pStyle}>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <p>{props.author} - {props.date}</p>
        </div>
    )
}
export default BlogList