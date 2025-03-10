import breakfast from "@/assets/images/breakfast.png";
import coffee from "@/assets/images/coffee.png";
import deals from "@/assets/images/deals.png";
import restaurandrewards from "@/assets/images/restaurandrewards.png";
import bestoverall from "@/assets/images/bestoverall.png";
import shipped from "@/assets/images/shipped.png";
import mexican from "@/assets/images/mexican.png";
import fastfood from "@/assets/images/fastfood.png";
import healty from "@/assets/images/healty.png";
import pizza from "@/assets/images/pizza.png";
import asian from "@/assets/images/asian.png";
import bakery from "@/assets/images/bakery.png";
import sandwich from "@/assets/images/sandwich.png";
import sushi from "@/assets/images/sushi.png";
import korean from "@/assets/images/korean.png";
import vietnamese from "@/assets/images/vietnamese.png";
import vegan from "@/assets/images/vegan.png";
import bubbletea from "@/assets/images/bubbletea.png";
import smoothies from "@/assets/images/smoothies.png";
import burgers from "@/assets/images/burgers.png";

export const CATEGORIES = [
  {
    id: 1,
    name: "Breakfast and Brunch",
    searched: 123,
    img: breakfast,
    filterId: 3,
  },
  { id: 2, name: "Coffee and Tea", searched: 109, img: coffee, filterId: 4 },
  { id: 3, name: "Latest Deals", searched: 147, img: deals, filterId: 5 },
  {
    id: 4,
    name: "Restaurant Rewards",
    searched: 138,
    img: restaurandrewards,
    filterId: 2,
  },
  { id: 5, name: "Best Overall", searched: 101, img: bestoverall, filterId: 4 },
  {
    id: 6,
    name: "Nationwide Shipping",
    searched: 142,
    img: shipped,
    filterId: 3,
  },
  { id: 7, name: "Mexican", searched: 114, img: mexican, filterId: 5 },
  { id: 8, name: "Fast Food", searched: 128, img: fastfood, filterId: 2 },
  { id: 9, name: "Healthy", searched: 135, img: healty, filterId: 3 },
  { id: 10, name: "Pizza", searched: 119, img: pizza, filterId: 4 },
  { id: 11, name: "Sandwich", searched: 132, img: sandwich, filterId: 5 },
  { id: 12, name: "Sushi", searched: 144, img: sushi, filterId: 2 },
  { id: 13, name: "Korean", searched: 111, img: korean, filterId: 3 },
  { id: 14, name: "Vietnamese", searched: 140, img: vietnamese, filterId: 4 },
  { id: 15, name: "Vegan", searched: 117, img: vegan, filterId: 5 },
  { id: 16, name: "Bubble Tea", searched: 150, img: bubbletea, filterId: 2 },
  {
    id: 17,
    name: "Juice & Smoothies",
    searched: 125,
    img: smoothies,
    filterId: 3,
  },
  { id: 18, name: "Burgers", searched: 137, img: burgers, filterId: 4 },
  { id: 19, name: "Asian", searched: 105, img: asian, filterId: 2 },
  { id: 20, name: "Bakery", searched: 130, img: bakery, filterId: 5 },
];
