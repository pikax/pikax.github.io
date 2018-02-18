//from https://github.com/fortrabbit/quotes
const quotes = require('./quotes.json');

const iplicit = require('./iplicit.md');
const sig = require('./sig.md');
const about = require('./about.md');


export interface IProject {
  title: string;
  website: string;

  cardSrc: string;

  subtitle: string;

  description: string;

  from?: string;
  to?: string;

  links: { src: string, icon: string, className?: string; }[];
}

export class Data {
  name = "Carlos Rodrigues";
  subtext = "Fullstack developer";
  image = "//s.gravatar.com/avatar/1a99b582c69b5b5c7eced1e0dc47b694?s=200";

  about = about;
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
      website: "iplicit",
      cardSrc: "/iplicit/card.svg",

      from: "Mar.2015",
      to: "Feb.2018",

      subtitle: "Cloud-based finance and business solution for organisations with up to 500 people.",
      description: iplicit,


      links: [
        {src: "//iplicit.com", icon: "fa-globe", className: "light-blue--text"},
        {src: "//www.facebook.com/iplicit/", icon: "fa-facebook", className: "blue--text text--darken-4"}

      ]
    },
    sig: {
      title: "Sistema Integrado de Gestão",

      website: "/sig",
      cardSrc: "/sig/card.jpg",

      from: "Jun.2012",
      to: "Feb.2015",

      subtitle: "Sistema Integrado de Gestão is a bespoke software for a logistic company (Prodística).",
      description: sig,


      links: [
        {src: "//datexis.pt", icon: "fa-globe", className: "light-blue--text"},
        {src: "//https://www.facebook.com/datexis.inf/", icon: "fa-facebook", className: "blue--text text--darken-4"}

      ]
    },
    swgoh: {
      title: "swgoh",
      website: "//github.com/pikax/swgoh",
      cardSrc: "/swgoh/card.svg",
      subtitle: "Unofficial node library for swgoh.gg for nodejs, you can get profile, characters, guild members, ships, units and mods.",

      description: "",


      links: [
        {src: "//github.com/pikax/swgoh", icon: "fa-github"},
        {src: "//www.npmjs.com/package/swgoh/", icon: "fa-globe", className: "red--text text--darken-4"}
      ]
    },
    ginDownloader: {
      title: "gin-downloader",
      website: "//github.com/pikax/gin-downloader",
      cardSrc: "/gin-downloader/card.svg",
      subtitle: "NodeJs library to download manga from public websites",
      description: "",


      links: [
        {src: "//github.com/pikax/gin-downloader", icon: "fa-github"},
        {src: "//www.npmjs.com/package/gin-downloader/", icon: "fa-globe", className: "red--text text--darken-4"}
      ]
    }
  };

  quotes = quotes;
  quote = null;
}


export default new Data();

