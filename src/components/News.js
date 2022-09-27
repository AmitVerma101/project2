import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
export default class News extends Component {
  
  constructor(){
    super();
    this.state={
      articles: [],
      page:1,
      loading: false,
      totalResults:0
    }
  }
 async componentDidMount(){
    console.log("Did Mount is running")
    let url=`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=e825205c456f4766b3c8fd6b7049a056&pageSize=${this.props.pageSize}&page=${this.state.page}`
        let data=await fetch(url)
    let parsedData=await data.json()
    
    this.setState({
      articles: parsedData.articles,totalResults:parsedData.totalResults
    }) 
   
    
  }
  fetchData=async()=>{
    console.log("fetch is running")
    this.setState({page: this.state.page+1})
    let url=`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=e825205c456f4766b3c8fd6b7049a056&pageSize=${this.props.pageSize}&page=${this.state.page}`
    let data=await fetch(url)
    let parsedData=await data.json()

     this.setState({
     articles: this.state.articles.concat(parsedData.articles)
}) 
  }
  render() {
    return (
      <div className='container text-center ' >
            <h2 className='my-3'>NewsMonkey-Top Headlines</h2>
            {/* {this.state.loading&&<Spinner/>} */}
            <InfiniteScroll
  dataLength={this.state.articles.length}
  next={this.fetchData}
  hasMore={this.state.articles.length<this.state.totalResults}
  loader={<Spinner/>}>
         <div className='row'>
         { this.state.articles.map((element)=> {
             return  <div className='col-md-4' key={element.url}>
                <NewsItem title={element.title?element.title.slice(0,45):'default title'} description={element.description?element.description.slice(0,88):'Default Description'} imageUrl={element.urlToImage?element.urlToImage:"https://image.cnbcfm.com/api/v1/image/107114797-NYSE-Trading-Floor-Photo-220907-CC-PRESS-2.jpg?v=1664231895&w=1920&h=1080"} newsUrl={element.url}/></div>
          })}
        </div>
        </InfiniteScroll>
      </div>
    )
  }
}
