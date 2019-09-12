import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SignUp = () => (
  <Layout>
    <SEO title="Sign Up" />
    <div className="sign-up-page">
        <h1>Drop your email below</h1>
        <p>Greatness takes time. We will notify you about the release date and other updates</p>
        <div className="input-box">
            <input type="email" id="signup-email"/><button>Sign Up</button>
        </div>
        <div className="home-button">
            <button>
                <Link to="/">Go back to the homepage</Link>
            </button>
        </div>
    </div>
  </Layout>
)

export default SignUp
