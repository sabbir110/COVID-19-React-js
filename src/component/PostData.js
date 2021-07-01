import React, {Component} from 'react';
import '../asset/css/bootstrap.min.css'
import  '../asset/css/custom.css'
import axios from "axios";
import AppUrl from "../RestApi/AppUrl";

class PostData extends Component {
    constructor() {
        super();
        this.state={
            name:"",
            email:"",
            msg:""
        }
    }
    changeHandler=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }

    submitHandler=e=>{
        e.preventDefault()
        console.log(this.state)
        axios.post(AppUrl.ContactSend,this.state)
            .then(response=>{
                console.log(response)
            })
            .catch(error=>{
                console.log(error)
            })
    }
    render() {
        const {name,email,msg}= this.state
        return (
            <div className="text-center">
                <form onSubmit={this.submitHandler}>
                    <div>
                        <label>Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={this.changeHandler}
                            placeholder="Enter your name"
                        />
                    </div>

                    <div>
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={this.changeHandler}
                            placeholder="Enter your email"
                        />
                    </div>

                    <div>
                        <label>Message:</label>
                        <textarea
                            type="text"
                            name="msg"
                            value={msg}
                            onChange={this.changeHandler}
                            placeholder="Message"
                        ></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default PostData;