import React from "react"
import ImageGallery from "react-image-gallery"
import { graphql, useStaticQuery } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChevronLeft,
  faChevronRight,
  faCompress,
  faExpand,
  faPause,
  faPlay
} from "@fortawesome/free-solid-svg-icons"

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
              thumb: fluid(quality: 80, maxWidth: 200) {
                base64
                src
              }
              full: fluid(quality: 100, maxWidth: 800) {
                base64
                src
              }
            }
          }
        }
      }
    }
  `)

  const items = data.gallery.edges.map((img: any) => {
    return {
      original: img.node.childImageSharp.full.src,
      thumbnail: img.node.childImageSharp.thumb.src
    }
  })
  console.log(items)
  return (
    <MainLayout title="Bilder">
      <Heading>Bilder</Heading>
      <ImageGallery
        items={items}
        autoPlay
        renderLeftNav={(onClick, isDisabled) => (
          <button
            disabled={isDisabled}
            className="image-gallery-left-nav"
            onClick={onClick}
          >
            <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
          </button>
        )}
        renderRightNav={(onClick, isDisabled) => (
          <button
            disabled={isDisabled}
            className="image-gallery-right-nav"
            onClick={onClick}
          >
            <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
          </button>
        )}
        renderPlayPauseButton={(onClick, isPlaying) => (
          <button
            className={`image-gallery-play-button${isPlaying ? " active" : ""}`}
            onClick={onClick}
          >
            {isPlaying ? (
              <FontAwesomeIcon icon={faPause}></FontAwesomeIcon>
            ) : (
              <FontAwesomeIcon icon={faPlay}></FontAwesomeIcon>
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
              <FontAwesomeIcon icon={faCompress}></FontAwesomeIcon>
            ) : (
              <FontAwesomeIcon icon={faExpand}></FontAwesomeIcon>
            )}
          </button>
        )}
      />
    </MainLayout>
  )
}

export default Page
