import { TypeI, TypeRadioI, cardDataI, cardI } from "./types"

export const typesBtn = [
  {
    id: 1,
    name: "Ads & social",
  },
  {
    id: 2,
    name: "YouTube videos",
  },
  {
    id: 3,
    name: "Corporate videos",
  },
  {
    id: 4,
    name: "Gaming videos",
  },
  {
    id: 5,
    name: "Family & travel",
  },
  {
    id: 6,
    name: "Music videos",
  },
  {
    id: 7,
    name: "Weddings & events",
  },
  {
    id: 8,
    name: "Explainer videos",
  },
  {
    id: 9,
    name: "Showreels",
  },
]

export const TypeChecks: TypeI = {
  title: "Type",
  data: [
    {
      id: 1,
      name: "YouTube Videos",
      total: 435
    },
    {
      id: 2,
      name: "Ads & Social",
      total: 243
    },
    {
      id: 3,
      name: "Gaming Videos",
      total: 335
    },
    {
      id: 4,
      name: "Tik tokes",
      total: 143
    },
  ]
}

export const OfferingChecks: TypeI = {
  title: "Service offerings",
  data: [
    {
      id: 1,
      name: "Offers subscriptions",
      total: 4352
    },
    {
      id: 2,
      name: "Paid vide consultions",
      total: 243
    }
  ]
}

export const IncludeChecks: TypeI = {
  title: "Service includes",
  data: [
    {
      id: 1,
      name: "Color grading",
      total: 4352
    },
    {
      id: 2,
      name: "Sound design & mixing",
      total: 243
    },
    {
      id: 3,
      name: "Subtitles",
      total: 541
    },
    {
      id: 4,
      name: "Motion graphics",
      total: 3421
    }
  ]
}

export const BudgetRadios: TypeRadioI = {
  title: "budget",
  data: [
    {
      id: 1,
      name: "Value",
      subname: 'under US$35'
    },
    {
      id: 2,
      name: "Mid-range",
      subname: "US$35-US$60"
    },
    {
      id: 3,
      name: "Hight-end",
      subname: "US$35 & Above"
    },
    {
      id: 4,
      name: "Costum",
      subname: ""
    }
  ]
}

export const TimeRadios: TypeRadioI = {
  title: "time",
  data: [
    {
      id: 1,
      name: "Express 24H",
      subname: ''
    },
    {
      id: 2,
      name: "Up to 3 days",
      subname: ""
    },
    {
      id: 3,
      name: "Up to 6 days",
      subname: ""
    },
    {
      id: 4,
      name: "Anytime",
      subname: ""
    }
  ]
}

export const CardSlider: cardI[] = [
  {
    like: true,
    videoLink: "./cardVideo-1.mp4",
    imgLink: null
  },
  {
    like: false,
    videoLink: null,
    imgLink: "/cardImg-1.jpeg"
  },
  {
    like: true,
    videoLink: "./cardVideo-1.mp4",
    imgLink: null
  },
  {
    like: false,
    videoLink: null,
    imgLink: "/cardImg-1.jpeg"
  },
]

export const CardsData: cardDataI[] = [
  {
    name: "Bilal Farooq",
    imgUrl: "/cardImg-1.jpeg",
    status: 'one',
    text: "I will make animation using after effects",
    rating: "4.8",
    totalJob: "3",
    fromPrice: "25"
  },
  {
    name: "Mridul Khurana",
    imgUrl: "/cardImg-1.jpeg",
    status: 'two',
    text: "I will do professional video editing for youtube and corporate",
    rating: "5",
    totalJob: "14",
    fromPrice: "25"
  },
    {
    name: "Prithviraj P",
    imgUrl: "/cardImg-1.jpeg",
    status: 'pro',
    text: "I will make animation using after effects",
    rating: "3.8",
    totalJob: "248",
    fromPrice: "25"
  },
  {
    name: "Steve",
    imgUrl: "/cardImg-1.jpeg",
    status: 'new',
    text: "I will do professional youtube video editing in adobe premiere pro",
    rating: "4",
    totalJob: "1k+",
    fromPrice: "25"
  },
    {
    name: "Hilol",
    imgUrl: "/cardImg-1.jpeg",
    status: 'three',
    text: "I will make animation using after effects",
    rating: "4.8",
    totalJob: "321",
    fromPrice: "25"
  },
  {
    name: "Xoja Jack",
    imgUrl: "/cardImg-1.jpeg",
    status: 'pro',
    text: "I will edit your gaming youtube video to perfection",
    rating: "4.8",
    totalJob: "48",
    fromPrice: "25"
  },
]