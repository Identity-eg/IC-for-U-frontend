import GoldenKeyIcon from "@/assets/svgs/GoldenKeyIcon";
import PlatinumKeyIcon from "@/assets/svgs/PlatinumKeyIcon";
import SilverKeyIcon from "@/assets/svgs/SilverKeyIcon ";

export const keys = [
  {
    id: 1,
    title: "Silver Life key",
    compare: [
      {
        compareTitle: "transportation",
        list: [
          { id: 2, listName: "Economy airlines bookings and visa assistance" },
          {
            id: 3,
            listName:
              "Private air-conditioned transportation from and to the airport, one tour, one relaxation spot",
          },
        ],
      },
      {
        compareTitle: "accommodation",
        list: [
          { id: 4, listName: "Half-board accommodation" },
          {
            id: 5,
            listName:
              "Scheduled visit to health care provider & medication delivery",
          },
          {
            id: 6,
            listName: "One relaxation spot stay",
          },
        ],
      },
      {
        compareTitle: "follow up",
        list: [
          { id: 7, listName: "Regular monthly follow-up until full recovery" },
        ],
      },
    ],
    Icon: SilverKeyIcon,
  },
  {
    id: 8,
    title: "Platinum Life key",
    premium: true,
    compare: [
      {
        compareTitle: "transportation",
        list: [
          {
            id: 9,
            listName:
              "First class / business airlines bookings with full passport and visa assistance",
          },
          {
            id: 10,
            listName:
              "Private air-conditioned transportation throughout the visit",
          },
        ],
      },
      {
        compareTitle: "accommodation",
        list: [
          { id: 11, listName: "All-inclusive accommodation" },
          {
            id: 12,
            listName:
              "Free initial consultation with the surgeon/ physician, scheduled home visit, and medication delivery",
          },
          {
            id: 13,
            listName:
              "24-hour personal medical assistance at your destination (upon request)",
          },
        ],
      },
      {
        compareTitle: "followUp",
        list: [
          { id: 14, listName: "Regular weekly follow-up until full recovery" },
        ],
      },
    ],
    Icon: PlatinumKeyIcon,
  },
  {
    id: 15,
    title: "Golden Life key",
    compare: [
      {
        compareTitle: "transportation",
        list: [
          {
            id: 16,
            listName:
              "Business airlines bookings with full passport and visa assistance",
          },
          {
            id: 17,
            listName:
              "Private air-conditioned transportation (from and to the airport, two tours, one relaxation spot)",
          },
        ],
      },
      {
        compareTitle: "accommodation",
        list: [
          { id: 18, listName: "Full-board accommodation" },
          {
            id: 19,
            listName:
              "Scheduled visit to health care provider & medication delivery",
          },
          {
            id: 20,
            listName:
              "12-hour personal medical assistance at your destination (upon request)",
          },
        ],
      },
      {
        compareTitle: "followUp",
        list: [
          {
            id: 21,
            listName: "Regular bi-weekly follow-up until full recovery",
          },
        ],
      },
    ],
    Icon: GoldenKeyIcon,
  },
];
