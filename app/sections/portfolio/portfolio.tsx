'use client'

import { PROJECTS } from "../../const";
import {useState} from "react";
import React from "react";
import Image from "next/image";
import classnames from "classnames";
import css from "./portfolio.module.scss";

type ImageGalleryProps = {
  activeProject: string;
  activeId: number;
  setActiveId: (id: number) => void;
  closeGallery: VoidFunction;
};

function ImageGallery ({activeProject, setActiveId, closeGallery, activeId = 0}: ImageGalleryProps) {
  const images = PROJECTS.find(project => project.id === activeProject)?.images || [];

  const showPreviousImage = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    setActiveId(activeId === 0 ? images.length - 1 : activeId - 1)
  }

  const showNextImage = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    setActiveId(activeId === images.length - 1 ? 0 : activeId + 1)
  }

  return (
    <div className={css.overlay} onClick={closeGallery}>
      <div className={css.overlayContent}>
        <Image className={css.fullImage} src={images[activeId].path} alt={images[activeId].text} width={960} height={520} />
        <p className={css.imageText}>{images[activeId].text}</p>
      </div>
      <div className={css.buttons}>
        <div className={classnames(css.galleryButton, css.left)} onClick={showPreviousImage} />
        <div className={css.galleryButton} onClick={showNextImage} />
      </div>
    </div>
  )
}

export default function PortfolioSection() {
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const [activeImageId, setActiveImageId] = useState<number>(0);

  const handleImageClick = (projectId: string, imageId: number) => {
    setActiveProject(projectId);
    setActiveImageId(imageId);
  }

  const handleOverlayClick = () => {
    setActiveProject(null);
  }

  return (
    <>
      <section className={css.portfolio} id="portfolio">
        <div className={css.heading}>Portfolio</div>
        <h2 className={css.h1}>Vybrané projekty</h2>
        <div className={css.projects}>
          {PROJECTS.map((project) => (
            <div key={project.id} className={css.projectCard}>
              <div className={css.projectGallery}>
                <div className={classnames(css.galleryImage, css.mainImage)} onClick={() => handleImageClick(project.id, 0)} style={{backgroundImage: `url(${project.images[0].path})`}}>
                  <div className={css.hoverOverlay}>
                    <Image className={css.magnifier} src="img/magnifier.svg" alt="Magnifying Glass" width={54} height={54} />
                  </div>
                </div>
                {project.images.length > 1 && (
                  <div className={css.previews}>
                    {project.images.slice(1, 4).map((image, index) => (
                      <div key={index} onClick={() => handleImageClick(project.id, index + 1)} className={classnames(css.galleryImage, css.previewImage)} style={{backgroundImage: `url(${image.path})`}}>
                        <div className={css.hoverOverlay}>
                          <Image className={css.magnifier} src="img/magnifier.svg" alt="Magnifying Glass" width={54} height={54} />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className={css.projectCardDivider} />
              <div className={css.projectDescription}>
                <h3 className={css.h2}>{project.name}</h3>
                <div className={css.h3}>
                  {project.tags.join(' / ')}
                </div>
                <p className={css.paragraph}>{project.description}</p>
                <ul>
                  {project.bulletPoints.map((point, index) => (
                    <li key={index} className={css.paragraph}>
                      {point}
                    </li>
                  ))}
                </ul>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  Zobrazit web
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
      {activeProject && (
        <ImageGallery activeProject={activeProject} activeId={activeImageId} setActiveId={setActiveImageId} closeGallery={handleOverlayClick}/>
      )}
    </>
  )
}