import Image from 'next/image';
import type { StaticImageData } from 'next/image';
import styles from './carousel.module.css';

export interface Project {
  title: string;
  description: string;
  img: StaticImageData | string; // Use StaticImageData for local images
  techStack?: string[];
  url: string;
}

const projects: Project[] = [
  {
    title: 'Yuedu Reader',
    description:
      "A Chinese language learning app that highlights unknown words in articles. Learn Chinese by reading real content that's at your level, and track your progress!",
    img: "/yuedu.webp",
    techStack: ['React', 'Typescript', 'Next.js'],
    url: "https://reader.istangel.xyz",
  }
];

// TODO: Make this into an actual carousel

export default function Carousel() {
  return (
    <div className={styles.container}>
      {projects.map((project) => (
        <CarouselCard key={project.title} project={project} />
      ))}
    </div>
  );
}

function CarouselCard({ project }: { project: Project }) {
  return (
    <a href={project.url} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
      <div className={styles.card}>
        <div className={styles.imageWrapper}>
          <Image
            src={project.img}
            alt={project.title}
            className={styles.cardImage}
            quality={50}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>
        <div className={styles.wrapper}>
          <div className={styles.cardTitle}>
            <h2 className={styles.cardTitleText}>{project.title}</h2>
          </div>
          {project.techStack && project.techStack.length > 0 && (
            <div className={styles.techBadges}>
              {project.techStack.join(', ')}
            </div>
          )}
          <div className={styles.cardContent}>
            <p>{project.description}</p>
          </div>
        </div>
      </div>
    </a>
  );
};

