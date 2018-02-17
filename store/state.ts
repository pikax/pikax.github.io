import {IInfo, IProject, IState} from "~/store/_interface";

import json from '~/api/info'

// const json = require("~/api/info.json");


const buttons = [
  {src: "/", title: "home"},
  {src: "/about", title: "about"},
  {src: "//github.com/pikax", title: "github"},
  {src: "//linkedin.com/in/carlosdcrodrigues", title: "linkedin"},
];


const info: IInfo = {
  name: "Carlos Rodrigues",
  subtext: "Fullstack developer",
  image: 'https://s.gravatar.com/avatar/1a99b582c69b5b5c7eced1e0dc47b694?s=200',


  buttons,
};


const iplicit: IProject = {
  title: "Iplicit",

  website: "//iplicit.com",

  cardSrc: "/iplicit/card.svg",
  image: "/iplicit/devices-v4-1024x624.png",

  subtitle: "Cloud-based finance and business solution for organisations with up to 500 people.",

  description: "",
};


const projects: IProject[] = [

  json.projects.iplicit,
];

//
// const state: IState = {
//   ...json,
//
//   projects,
// };


export default json;
