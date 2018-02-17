import {IProjectCard, IState} from "~/store/_interface";
import {Data, IProject} from "~/api/info";


const convertToProjectCard = (p: IProject): IProjectCard => ({
  title: p.title,
  website: p.website,
  image: p.cardSrc,
  description: p.subtitle,
  links: p.links,
});


export default {
  info: (state: Data) => {
    const {projects, ...data} = state;
    return data;
  },

  cards: (state: Data) => Object.keys(state.projects)
    .map(x=>state.projects[x])
    .map(convertToProjectCard)

};
