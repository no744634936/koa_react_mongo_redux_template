import React,{Fragment}from 'react'
import Layout from "../layout/Layout.js"
import Input from "../UI//Input.js"

function SignUp() {
    return (
        <Fragment>
            <Layout>
                <form>
                    <Input
                        label="first name" 
                        type="text"
                        placeholder="Enter first name"
                        value=""
                        onChange={()=>{}}
                    />
                    <Input
                        label="last name" 
                        type="text"
                        placeholder="Enter last name"
                        value=""
                        onChange={()=>{}}
                    />
                    <Input
                        label="email address" 
                        type="email"
                        placeholder="Enter email"
                        value=""
                        onChange={()=>{}}
                    />
                    <Input
                        label="Password" 
                        type="password"
                        placeholder="Enter password"
                        value=""
                        onChange={()=>{}}
                    />
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </Layout>
        </Fragment>
    )
}

export default SignUp
