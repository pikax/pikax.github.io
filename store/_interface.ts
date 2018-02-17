
export interface IProject {
  title: string;
  website: string;

  cardSrc: string;
  image: string;

  subtitle: string;


  description: string;
};


export interface IProjectCard {
  title:string;
  website: string;

  image: string;

  description: string;

  links: any;
}



export interface IInfo {
  name: string;
  subtext: string;
  image: string;


  buttons: {src: string, title: string}[];
}



export interface IState {

  info: IInfo;

  projects: IProject[];

}
