export interface IProject {
  title: string;
  website: string;

  cardSrc: string;
  image: string;

  subtitle: string;

  description: string;

  links: { src: string, icon: string, className: string; }[];
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
      src: "//github.com/pikax",
      title: "github"
    },
    {
      src: "//linkedin.com/in/carlosdcrodrigues",
      title: "linkedin"
    }
  ];

  projects: { [id: string]: IProject } = {
    iplicit: {
      title: "Iplicit",
      website: "//iplicit.com",
      cardSrc: "/iplicit/card.svg",
      image: "/iplicit/devices-v4-1024x624.png",
      subtitle: "Cloud-based finance and business solution for organisations with up to 500 people.",
      description: "",


      links: [
        {src: "//iplicit.com", icon: "fa-globe", className: "light-blue--text"},
        {src: "//www.facebook.com/iplicit/", icon: "fa-facebook", className:"blue--text text--darken-4"}

      ]
    }
  };
}


export default new Data();

