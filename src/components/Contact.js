import React from "react"
import { form } from "react-bootstrap"

function Contact(){
    return (
        <>
        <h1 className="Page-header">Contact Us About... Whatever!</h1>   
        <form>
            <div className="input">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
            </div>
            <div className="input">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
            </div>
            <div className="input">
            <div class="form-group">
                <label for="comment">Comment</label>
                <textarea class="form-control" rows="5" id="comment"></textarea>
            </div>
            <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
            <label className="form-check-label" for="exampleCheck1">Check it!</label><br/>
            <small id="emailHelp" className="form-text text-muted">Keep me in the loop with your super awesome newsletter!</small><br/>
            </div>
            <button type="submit" className="btn">Submit</button>
        </form>
        </>
    )
}

//create onclick event to save user info and add to newsletter


export default Contact;