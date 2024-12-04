import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import LandingPage from "../components/LandingPage";
import { StaticImage } from "gatsby-plugin-image";

const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
    
      AAAAAAAA
      <StaticImage
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Walking_tiger_female.jpg"
                  alt="Phone mockup"
                  className="w-full"
                  placeholder="blurred"
                />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
