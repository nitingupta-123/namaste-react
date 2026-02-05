import React from "react"


export class UserClass extends React.Component{


    constructor(props){
        super(props);

        console.log(props)

        this.state = {
            count:0,
            count2:1
        }
    }

    onClickHandler(){
        this.setState({
            count: this.state.count+1
        })
    }

    render(){
        return (
            <div className="user-card p-4 border border-gray-300 rounded-lg shadow-md bg-white my-4">
                <h1 className="text-2xl font-bold mb-2">Count = {this.state.count}</h1>
                <button 
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors cursor-pointer font-semibold mb-4"
                    onClick={()=>this.onClickHandler()}
                >
                    click
                </button>

                <h2 className="text-xl font-semibold mb-2">Name: {this.props.name}</h2>
                <h3 className="text-lg text-gray-700 mb-2">Location: Alwar</h3>
                <h4 className="text-base text-gray-600">Contact: mr_palindrome</h4>
            </div>
        )
    }

}