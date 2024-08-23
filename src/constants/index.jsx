// import SpeakerIcon from "../assets/icons/Speaker.svg";
// import EyeIcon from "../assets/icons/Eye.svg";
// import HeartIcon from "../assets/icons/Heart.svg";

export const Navlinks = [
  {
    label: "Accueuil",
    link: "#hero",
  },
  
  {
    label: "Déroulement",
    link: "#progress",
  },
  {
    label: "Bénéfices",
    link: "#benefits",
  },
  {
    label: "À Propos",
    link: "#about",
  },
];


import LargeSpeakerIcon from '../assets/icons/LargeSpeaker.svg'
import LargeHeartIcon from '../assets/icons/LargeHeart.svg'
import LargeEye from '../assets/icons/LargeEye.svg'


import SmallSpeakerIcon from '../assets/icons/SmallSpeaker.svg'
import SmallHeart from '../assets/icons/SmallHeart.svg'
import SmallEye from '../assets/icons/SmEye.svg'
export const Expertise_content = [
  {
    to: "#5DF71B",
    from: "#FFBF0F",
    css: "gradient-animation-1",
    iconSize: {
        md: {
          w: "72px",
          h: "72px",
        },
        sm: {
          w: "40px",
          h: "40px",
        },
      },
    iconMd: <LargeSpeakerIcon />,
    iconSm: <SmallSpeakerIcon />,
    desc: "Apprenez les bases du marketing pour attirer de nouvelles clientes.",
  },
  {
    css: "gradient-animation-2",
    to: "#30F2F2",
    from: "#0F3FD0",
    iconSize: {
      md: {
        w: "89px",
        h: "46px",
      },
      sm: {
        w: "40px",
        h: "21px",
      },
    },
    iconMd: <LargeEye />,
    iconSm: <SmallEye />,
    desc: "Acquérez la théorie et la pratique pour poser des cils à vos premières clientes.",
  },
  {
    css: "gradient-animation-3",
    iconSize: {
        md: {
          w: "72px",
          h: "72px",
        },
        sm: {
          w: "40px",
          h: "40px",
        },
      },
    to: "#EC30F2",
    from: "#873234",
    iconMd: <LargeHeartIcon />,
    iconSm: <SmallHeart />,
    desc: "Bénéficiez d'un suivi continu pendant un an après votre formation.",
  },
];

import BookIcon from "../assets/icons/Book.svg";
import PlainEye from "../assets/icons/PlainEye.svg";
import SchoolIcon from "../assets/icons/School.svg";

export const Training_steps = [
  {
    header: {
      icon: <BookIcon />,
      head_title: "théorie",
      bg_gradient: {
        color1: "#2787F1",
        color2: "#A881FF",
      },
    },
    desc: {
      border_gradient: {
        color1: "#F9A1FB",
        color2: "#6826E3",
        color3: "#7886FF",
      },
      bg_gradient: {
        color1: "#223D92",
        color2: "#43155B",
      },
      steps: [
        `Théorie approfondie`,
        `Préparation et application`,
        `Soin des cils`,
        `Théorie de l'adhésif`,
        `Pratique sur mannequin  <br/> <span class='font-[400]'>(Classique, Hybride)</span>`,
        `Pratique des bouquets de cils`,
      ],
    },
  },
  {
    header: {
      icon: <PlainEye />,
      head_title: "exercice",
      bg_gradient: {
        color1: "#E51F96",
        color2: "#851B8E",
      },
    },
    desc: {
      border_gradient: {
        color1: "#B3A4FF",
        color2: "#26E3E3",
        color3: "#EF78FF",
      },
      bg_gradient: {
        color1: "#7E1358",
        color2: "#4E1652",
      },
      steps: [
        `Pratique sur modèle réelle  <br/> <span class='font-[400]'>(application d'un set volume léger)</span>`,
        `Discussion des défis courants et 
                solutions pendant l'application`,
        `Évaluation et retour détaillé sur la performance`,
        `Conseils personnalisés`,
      ],
    },
  },
  {
    header: {
      icon: <SchoolIcon />,
      head_title: "Avancé",
      bg_gradient: {
        color1: "#00B662",
        color2: "#00665C",
      },
    },
    desc: {
      border_gradient: {
        color1: "#A2D9ED",
        color2: "#A2FFAF",
        color3: "#84AEED",
      },
      bg_gradient: {
        color1: "#02663B",
        color2: "#0A7666",
      },
      steps: [
        `Astuces pour attirer de nouveaux clients`,
        `Conseils pour démarrer ton entreprise`,
        `Pratique sur modèle (lash lift + tint)`,
        `Séances photos pro avec certificats`,
      ],
    },
  },
];

import LgBagEyeIcon from "../assets/icons/LargeBagEye.svg";
import LgDiscountIcon from "../assets/icons/LgDiscount.svg";
import LgCirtificate from "../assets/icons/LgCirtificate.svg";
import LgGirl from "../assets/icons/LgGirl.svg";
import SmBagEyeIcon from "../assets/icons/SmBagEye.svg";
import SmDiscountIcon from "../assets/icons/SmDiscount.svg";
import SmCirtificate from "../assets/icons/SmCirtificate.svg";
import SmGirl from "../assets/icons/SmGirl.svg";




export const Receive_Section_data = [
  {
    lgIcon: <LgBagEyeIcon />,
    smIcon: <SmBagEyeIcon />,
    title: "Kit complet de cils",
    desc: "Le  kit comprend une gamme complète d'outils pour l'application et l'amélioration des cils.",
  },
  {
    lgIcon: <LgCirtificate />,
    smIcon: <SmCirtificate />,
    title: "Deux certifications",
    desc: "Vous recevrez une certification pour les poses de cils et le rehaussement avec teinture.",
  },
  {
    lgIcon: <LgDiscountIcon />,
    smIcon: <SmDiscountIcon />,
    title: "Rabais Miss Muse",
    desc: "Vous aurez accès à des Rabais de 10% pour les produits de Miss Muse.",
  },
  {
    lgIcon: <LgGirl />,
    smIcon: <SmGirl />,
    title: "Soutiens et mentorat",
    desc: "Vous pourrez obtenir des conseils pour attirer et fidéliser la clientèle après vos certifications.",
  },
];
