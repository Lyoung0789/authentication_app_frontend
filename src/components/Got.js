import React, {Component} from 'react'
import axios from 'axios'
import GotCard from './GotCard'


export default class Got extends Component {

    

    state={
        books:[]
    }

    handleClick = () => {
        // debugger
        axios.get("https://www.anapioficeandfire.com/api/books?pageSize=30")
        .then(response=>{
            this.setState({
                books: response.data
            })
        })
        .catch(error => console.log("The error from api is", error))
    }

    render(){
        return(
            <div>
                <button onClick={this.handleClick}>Fetch GOT books</button>
                {this.state.books.map((book, index) => <GotCard book={book} key={index}/>)}
            </div>
        )
    }
}