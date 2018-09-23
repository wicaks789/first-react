import React from 'react'
import SearchBar from '../components/SearchBar'
import BlogList from '../components/BlogListing'

//api address
const link =
  "https://cdn.rawgit.com/kevinhermawan/ca5e0083648ba5ffb2421808d972dd9c/raw/c29c7ee02849b58024fb6a058acae33bde38cbd3/react-blog-example.json";


class App extends React.Component {
    constructor(){
        super()

        this.state = {
            loading: true,
            blogs:[], // state untuk tampung data api
            blogsFiltered:[]
        }
    }

    componentDidMount(){
        this.handleGetBlog()
    }

    handleTypeSearch = event =>{

        const blogFiltered = this.state.blogs.filter((blog)=>{
              return blog.title.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1
        })

        this.setState({
            blogsFiltered : blogFiltered
        })
       console.log(event.target.value)
       console.log(this.state.blogsFiltered)
    }

    //function to fetch api
    handleGetBlog=()=>{
        fetch(link)
            .then(res => res.json())
            .then(res => this.setState({blogs: res, blogsFiltered: res, loading: false}))
    }

    render(){
        if (this.state.loading === true){
            return (
                <h1>Loading</h1>
            )
        } 
        return(
            <div>
                    <SearchBar 
                    search={this.state.search}
                     onChangeSearch={this.handleTypeSearch} />     

                    {this.state.blogsFiltered.map((blogs, index) => (
                         <BlogList 
                         key={index}
                         title={blogs.title}
                          content={blogs.content}
                          author={blogs.author}
                          date={blogs.created_at}/>
                
                    ))}
                    
            </div>
            
           //<h1>Loading : {JSON.stringify(this.state.loading)} </h1>
        )
    }
}

export default App