import React from 'react'

const styles = {
    inputSearch :{
        width : 500,
        height: 30
    },
    contentSearch:{
        backgroundColor:"#DCDCDC",
        height:100,
        justifyContent:"center",
        alignItems:"center",
        display:"flex"
    }
    
}

const SearchBar = props =>{
    return (
        <div style={styles.contentSearch}>
          <input type="text" 
          placeholder="Search Anything.." 
          onChange={props.onChangeSearch}
          style={styles.inputSearch}/>
        </div>
    )
}

export default SearchBar;