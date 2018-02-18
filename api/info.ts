export interface IProject {
  title: string;
  website: string;

  cardSrc: string;
  image: string;

  subtitle: string;

  description: string;

  from?: string;
  to?: string;

  links: { src: string, icon: string, className?: string; }[];
};

export class Data {
  name = "Carlos Rodrigues";
  subtext = "Fullstack developer";
  image = "//s.gravatar.com/avatar/1a99b582c69b5b5c7eced1e0dc47b694?s=200";
  buttons = [
    {
      src: "/",
      title: "home"
    },
    {
      src: "/about",
      title: "about"
    },
    {
      src: "//linkedin.com/in/carlosdcrodrigues",
      title: "linkedin"
    },
    {
      src: "//github.com/pikax",
      title: "github"
    },
    {
      src: "//www.npmjs.com/~pikax",
      title: "npm"
    }
  ];

  projects: { [id: string]: IProject } = {
    iplicit: {
      title: "Iplicit",
      website: "//iplicit.com",
      cardSrc: "/iplicit/card.svg",
      image: "/iplicit/devices-v4-1024x624.png",

      from: "Mar.2015",
      to: "Feb.2018",

      subtitle: "Cloud-based finance and business solution for organisations with up to 500 people.",
      description: "",


      links: [
        {src: "//iplicit.com", icon: "fa-globe", className: "light-blue--text"},
        {src: "//www.facebook.com/iplicit/", icon: "fa-facebook", className: "blue--text text--darken-4"}

      ]
    },
    swgoh: {
      title: "Swgoh",
      website: "//github.com/pikax/swgoh",
      cardSrc: "/swgoh/card.svg",
      image: "/swgoh/devices-v4-1024x624.png",
      subtitle: "Unofficial node library for swgoh.gg for nodejs, you can get profile, characters, guild members, ships, units and mods.",

      description: "",


      links: [
        {src: "//github.com/pikax/swgoh", icon: "fa-github"},
        {src: "//www.npmjs.com/package/swgoh/", icon: "fa-globe", className: "red--text text--darken-4"}
      ]
    },
    ginDownloader: {
      title: "Gin-downloader",
      website: "//github.com/pikax/gin-downloader",
      cardSrc: "/gin-downloader/card.svg",
      image: "/gin-downloader/devices-v4-1024x624.png",
      subtitle: "NodeJs library to download manga from public websites",
      description: "",


      links: [
        {src: "//github.com/pikax/gin-downloader", icon: "fa-github"},
        {src: "//www.npmjs.com/package/gin-downloader/", icon: "fa-globe", className: "red--text text--darken-4"}
      ]
    }
  };
}


export default new Data();

