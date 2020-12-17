import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default function BlogPost({ data }) {
  const post = data.allWpPost.nodes[0]
  console.log(post)
  return (
    <Layout fullMenu>
    <article id="main">
      <header>
        <h2>Aktualności</h2>
        <p>Aliquam ut ex ut interdum donec amet imperdiet eleifend</p>
      </header>
      <section className="wrapper style5">
        <div class="inner">
          <header>
            <h4>{post.title}</h4>
            <p>{post.date}</p>
          </header>
          <p className="inner" dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </section>
    </article>
  </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    allWpPost(filter: { slug: { eq: $slug } }) {
      nodes {
        title
        content
        date
      }
    }
  }
`