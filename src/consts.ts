import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "K.R Mahaadevan",
  EMAIL: "sportdev.ksj8g@simplelogin.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 0,
  NUM_PROJECTS_ON_HOMEPAGE: 0,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Homepage containing brief info about me",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of work on topics I am passionate about.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  
  { 
    NAME: "github",
    HREF: "https://github.com/krmh04"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/krmh04",
  },
  { 
    NAME: "twitter-x",
    HREF: "https://twitter.com/kmh_dev",
  }
];
