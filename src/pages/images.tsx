import React from "react"
import ImageGallery from "react-image-gallery"
import { graphql, useStaticQuery } from "gatsby"

import { Heading } from "../components"
import { MainLayout } from "../layouts"

interface Props {}

const Page: React.FC<Props> = () => {
  const data = useStaticQuery(graphql`
    query Gallery {
      gallery: allFile(filter: { relativeDirectory: { eq: "gallery" } }) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  console.log(data)
  return (
    <MainLayout title="Bilder">
      <Heading>Bilder</Heading>
      <ImageGallery
        items={[]}
        autoPlay
        renderLeftNav={(onClick, isDisabled) => (
          <button
            disabled={isDisabled}
            className="image-gallery-left-nav"
            onClick={onClick}
          >
            <i className="fas fa-chevron-left" />
          </button>
        )}
        renderRightNav={(onClick, isDisabled) => (
          <button
            disabled={isDisabled}
            className="image-gallery-right-nav"
            onClick={onClick}
          >
            <i className="fas fa-chevron-right" />
          </button>
        )}
        renderPlayPauseButton={(onClick, isPlaying) => (
          <button
            className={`image-gallery-play-button${isPlaying ? " active" : ""}`}
            onClick={onClick}
          >
            {isPlaying ? (
              <i className="fas fa-pause" />
            ) : (
              <i className="fas fa-play" />
            )}
          </button>
        )}
        renderFullscreenButton={(onClick, isFullscreen) => (
          <button
            className={`image-gallery-fullscreen-button${
              isFullscreen ? " active" : ""
            }`}
            onClick={onClick}
          >
            {isFullscreen ? (
              <i className="fas fa-compress" />
            ) : (
              <i className="fas fa-expand" />
            )}
          </button>
        )}
      />
    </MainLayout>
  )
}

export default Page
