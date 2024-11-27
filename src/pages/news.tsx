import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { NewsDetailPage } from "../components/NewsDetails"

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <NewsDetailPage newsId="1" />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>