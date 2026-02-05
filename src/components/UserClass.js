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
            <div className="user-card">
                <h1>Count = {this.state.count}</h1>
                <button onClick={()=>this.onClickHandler()}>click</button>

                <h2>Name: {this.props.name}</h2>
                <h3>Location: Alwar</h3>
                <h4>Contact: mr_palindrome</h4>
            </div>
        )
    }

}