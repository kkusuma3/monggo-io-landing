import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Opening your room to<br/>a world of possibilities</h1>
    <p>An app made for hotels<br/>So travelers can worry less and travel more.</p>
    <button>
      <Link to="/sign-up/">Sign Up</Link>
    </button>
    <button>
      <Link to="/learn-more/">Learn More</Link>
    </button>
    
    {/* do not need this
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
