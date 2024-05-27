import { TypeI, TypeRadioI, cardDataI, cardI } from "./types";

export const selectOptions = [
  {
    id: 1,
    title: "Select options",
    data: [
      {
        title: "Type",
        options: [
          {
            id: 1,
            name: "Color grading",
            total: 4352,
          },
          {
            id: 2,
            name: "Sound design & mixing",
            total: 243,
          },
          {
            id: 3,
            name: "Subtitles",
            total: 541,
          },
          {
            id: 4,
            name: "Motion graphics",
            total: 3421,
          },
          {
            id: 5,
            name: "Color grading 1",
            total: 4352,
          },
          {
            id: 6,
            name: "Sound design & mixing 2",
            total: 243,
          },
          {
            id: 7,
            name: "option 3",
            total: 541,
          },
          {
            id: 8,
            name: "option 4",
            total: 541,
          },
          {
            id: 9,
            name: "option 6",
            total: 541,
          },
          {
            id: 10,
            name: "option 7",
            total: 541,
          },
          {
            id: 11,
            name: "option 9",
            total: 541,
          },
          {
            id: 12,
            name: "option 10",
            total: 541,
          },
          {
            id: 13,
            name: "option 11",
            total: 541,
          },
          {
            id: 14,
            name: "option 12",
            total: 541,
          },
        ],
      },
      {
        title: "Service offerings",
        options: [
          {
            id: 1,
            name: "Offers subscriptions",
            total: 4352,
          },
          {
            id: 2,
            name: "Paid vide consultions",
            total: 243,
          },
        ],
      },
      {
        title: "Service offerings",
        options: [
          {
            id: 1,
            name: "Offers subscriptions 2",
            total: 4352,
          },
          {
            id: 2,
            name: "Paid vide consultions 2",
            total: 243,
          },
          {
            id: 3,
            name: "Offers subscriptions 3",
            total: 4352,
          },
          {
            id: 4,
            name: "Paid vide consultions 3",
            total: 243,
          },
          {
            id: 5,
            name: "Offers subscriptions 33",
            total: 4352,
          },
          {
            id: 6,
            name: "Paid vide consultions 34",
            total: 243,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Seller details",
    data: [
      {
        title: "Type",
        options: [
          {
            id: 1,
            name: "Color grading",
            total: 4352,
          },
          {
            id: 2,
            name: "Sound design & mixing",
            total: 243,
          },
          {
            id: 3,
            name: "Subtitles",
            total: 541,
          },
          {
            id: 4,
            name: "Motion graphics",
            total: 3421,
          },
          {
            id: 5,
            name: "Color grading",
            total: 4352,
          },
          {
            id: 6,
            name: "Sound design & mixing",
            total: 243,
          },
          {
            id: 7,
            name: "Subtitles",
            total: 541,
          },
        ],
      },
      {
        title: "Service offerings",
        options: [
          {
            id: 1,
            name: "Offers subscriptions",
            total: 4352,
          },
          {
            id: 2,
            name: "Paid vide consultions",
            total: 243,
          },
        ],
      },
      {
        title: "Service offerings",
        options: [
          {
            id: 1,
            name: "Offers subscriptions",
            total: 4352,
          },
          {
            id: 2,
            name: "Paid vide consultions",
            total: 243,
          },
          {
            id: 3,
            name: "Offers subscriptions",
            total: 4352,
          },
          {
            id: 4,
            name: "Paid vide consultions",
            total: 243,
          },
        ],
      },
    ],
  },
];

export const checkOptions = [
  {
    id: 3,
    title: "Budget",
    data: [
      {
        id: 1,
        name: "Value",
        text: "Under $35",
      },
      {
        id: 2,
        name: "Mid-range",
        text: "$35-$60",
      },
      {
        id: 3,
        name: "Hight-end",
        text: "$35 & Above",
      },
      {
        id: 4,
        name: "Custom",
        text: "",
        input: true,
      },
    ],
  },
  {
    id: 4,
    title: "Delivery time",
    data: [
      {
        id: 1,
        name: "Express 24H",
        value: "express",
      },
      {
        id: 2,
        name: "Up to 3 days",
        value: "3days",
      },
      {
        id: 3,
        name: "Up to 6 days",
        value: "6days",
      },
      {
        id: 4,
        name: "Anytime",
        value: "anytime",
      },
    ],
  },
];

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
];

export const TypeChecks: TypeI = {
  title: "Type",
  data: [
    {
      id: 1,
      name: "YouTube Videos",
      total: 435,
    },
    {
      id: 2,
      name: "Ads & Social",
      total: 243,
    },
    {
      id: 3,
      name: "Gaming Videos",
      total: 335,
    },
    {
      id: 4,
      name: "Tik tokes",
      total: 143,
    },
  ],
};

export const OfferingChecks: TypeI = {
  title: "Service offerings",
  data: [
    {
      id: 1,
      name: "Offers subscriptions",
      total: 4352,
    },
    {
      id: 2,
      name: "Paid vide consultions",
      total: 243,
    },
  ],
};

export const IncludeChecks: TypeI = {
  title: "Service includes",
  data: [
    {
      id: 1,
      name: "Color grading",
      total: 4352,
    },
    {
      id: 2,
      name: "Sound design & mixing",
      total: 243,
    },
    {
      id: 3,
      name: "Subtitles",
      total: 541,
    },
    {
      id: 4,
      name: "Motion graphics",
      total: 3421,
    },
  ],
};

export const CardSlider: cardI[] = [
  {
    like: true,
    videoLink: "./cardVideo-1.mp4",
    imgLink: null,
  },
  {
    like: false,
    videoLink: null,
    imgLink: "/cardImg-1.jpeg",
  },
  {
    like: true,
    videoLink: "./cardVideo-1.mp4",
    imgLink: null,
  },
  {
    like: false,
    videoLink: null,
    imgLink: "/cardImg-1.jpeg",
  },
];

export const CardsData: cardDataI[] = [
  {
    name: "Bilal Farooq",
    imgUrl: "/cardImg-1.jpeg",
    status: "one",
    text: "I will make animation using after effects",
    rating: "4.8",
    totalJob: "3",
    fromPrice: "25",
  },
  {
    name: "Mridul Khurana",
    imgUrl: "/cardImg-1.jpeg",
    status: "two",
    text: "I will do professional video editing for youtube and corporate",
    rating: "5",
    totalJob: "14",
    fromPrice: "25",
  },
  {
    name: "Prithviraj P",
    imgUrl: "/cardImg-1.jpeg",
    status: "pro",
    text: "I will make animation using after effects",
    rating: "3.8",
    totalJob: "248",
    fromPrice: "25",
  },
  {
    name: "Steve",
    imgUrl: "/cardImg-1.jpeg",
    status: "new",
    text: "I will do professional youtube video editing in adobe premiere pro",
    rating: "4",
    totalJob: "1k+",
    fromPrice: "25",
  },
  {
    name: "Hilol",
    imgUrl: "/cardImg-1.jpeg",
    status: "three",
    text: "I will make animation using after effects",
    rating: "4.8",
    totalJob: "321",
    fromPrice: "25",
  },
  {
    name: "Xoja Jack",
    imgUrl: "/cardImg-1.jpeg",
    status: "pro",
    text: "I will edit your gaming youtube video to perfection",
    rating: "4.8",
    totalJob: "48",
    fromPrice: "25",
  },
  {
    name: "Bilal Farooq",
    imgUrl: "/cardImg-1.jpeg",
    status: "one",
    text: "I will make animation using after effects",
    rating: "4.8",
    totalJob: "3",
    fromPrice: "25",
  },
  {
    name: "Mridul Khurana",
    imgUrl: "/cardImg-1.jpeg",
    status: "two",
    text: "I will do professional video editing for youtube and corporate",
    rating: "5",
    totalJob: "14",
    fromPrice: "25",
  },
  {
    name: "Prithviraj P",
    imgUrl: "/cardImg-1.jpeg",
    status: "pro",
    text: "I will make animation using after effects",
    rating: "3.8",
    totalJob: "248",
    fromPrice: "25",
  },
  {
    name: "Steve",
    imgUrl: "/cardImg-1.jpeg",
    status: "new",
    text: "I will do professional youtube video editing in adobe premiere pro",
    rating: "4",
    totalJob: "1k+",
    fromPrice: "25",
  },
  {
    name: "Hilol",
    imgUrl: "/cardImg-1.jpeg",
    status: "three",
    text: "I will make animation using after effects",
    rating: "4.8",
    totalJob: "321",
    fromPrice: "25",
  },
  {
    name: "Xoja Jack",
    imgUrl: "/cardImg-1.jpeg",
    status: "pro",
    text: "I will edit your gaming youtube video to perfection",
    rating: "4.8",
    totalJob: "48",
    fromPrice: "25",
  },
];
