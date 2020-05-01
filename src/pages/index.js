import React, {useState, useEffect, useRef} from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import Img from "gatsby-image"


const BackgroundCover = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  display: flex;
  transition: opacity 2s ease;
  opacity: ${props => props.active ? '1' : '0'};
  pointer-events: ${props => props.active ? 'auto' : 'none'};
`

const TopImage = styled(props => <Img {...props} />)`
  width: 500px;
  height: 600px;

  @media (max-width: 768px) {
    width: 80vw;
    height: 60vh;
  }
`

const BottomImage = styled(props => <Img {...props} />)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  margin: 0;
`

const Card = styled(props => <Link {...props} />)`
  color: white;
  text-decoration: none;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);

  .gatsby-image-wrapper {
    transition: transform 0.5s ease;
    transform: scale(1);
  }

  &:hover .gatsby-image-wrapper {
    transform: scale(1.01);
  }

  span {
    width: 100%;
  }
`

export default function Index(props) {
  const data = props.data
  const [activeSlide, setActiveSlide] = useState(0)
  const requestRef = useRef()
  const frames = useRef(0);
  const animate = () => {
    if (frames.current === 480) {
      setActiveSlide(activeSlide => (activeSlide === slides.length - 1) ? 0 : activeSlide + 1);
      frames.current = 0
    }

    frames.current++;
    requestRef.current = requestAnimationFrame(animate);
  }
  const slides = [
    {
      url: "intimate-backyard-wedding",
      title: "Intimate Backyard Wedding",
      topImage: data.topImage4.childImageSharp.fixed,
      bottomImage: data.bottomImage4.childImageSharp.fluid
    },
    {
      url: "summerour-studio-wedding",
      title: "Summerour Studio Wedding",
      topImage: data.topImage1.childImageSharp.fixed,
      bottomImage: data.bottomImage1.childImageSharp.fluid
    },
    {
      url: "joshua-tree-elopement",
      title: "Joshua Tree Elopement",
      topImage: data.topImage2.childImageSharp.fixed,
      bottomImage: data.bottomImage2.childImageSharp.fluid
    },
    {
      url: "manzanita-oregon-couples-portraits",
      title: "Manzanita Oregon Couples Portraits",
      topImage: data.topImage3.childImageSharp.fixed,
      bottomImage: data.bottomImage3.childImageSharp.fluid
    }
  ];

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [])

  return (
    <Layout location={props.location} message="Photos Worth Keeping*">
      <SEO title="Home" />
      {slides.map((slide, index) => {
        return (
          <BackgroundCover active={index === activeSlide} key={slide.url}>
            <BottomImage 
              fluid={slide.bottomImage}
              alt="#"
              style={{
                position: "absolute"
              }}
            />
            <Card to={"/" + slide.url}>
              <TopImage 
                fixed={slide.topImage}
                objectFit="cover"
                objectPosition="50% 50%"
                alt="#"
              />
              <span>{slide.title}</span>
            </Card>
          </BackgroundCover>
        )}
      )}
    </Layout>
  )
}

export const pageQuery = graphql`
  {
    topImage1: file(absolutePath: {regex: "/front-1.jpg/"}) {
      childImageSharp {
        fixed(width: 1000) {
          srcSet
          src
        }
      }
    }
    bottomImage1: file(absolutePath: {regex: "/back-1.jpg/"}) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          src
          srcSet
        }
      }
    }
    topImage2: file(absolutePath: {regex: "/front-2.jpg/"}) {
      childImageSharp {
        fixed(width: 1000) {
          srcSet
          src
        }
      }
    }
    bottomImage2: file(absolutePath: {regex: "/back-2.jpg/"}) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          src
          srcSet
        }
      }
    }
    topImage3: file(absolutePath: {regex: "/front-3.jpg/"}) {
      childImageSharp {
        fixed(width: 1000) {
          srcSet
          src
        }
      }
    }
    bottomImage3: file(absolutePath: {regex: "/back-3.jpg/"}) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          src
          srcSet
        }
      }
    }
    topImage4: file(absolutePath: {regex: "/front-4.jpg/"}) {
      childImageSharp {
        fixed(width: 1000) {
          srcSet
          src
        }
      }
    }
    bottomImage4: file(absolutePath: {regex: "/back-4.jpg/"}) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          src
          srcSet
        }
      }
    }
  }
`

