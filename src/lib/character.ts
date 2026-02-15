import type { CharacterMood } from "./types";

export const CHARACTER = {
  default: {
    image: "/char-default.png",
    etherColors: ["#ffd6e0", "#ff9aa2", "#cdb4db"],
    text: "So… be honest. Why are you here?",
  },

  tease: {
    image: "/char-tease.png",
    etherColors: ["#ffb7c5", "#ffd6e0", "#e7c6ff"],
    text: "uhmm Hmmm? Really.... 😏😏",
  },

  annoyed: {
    image: "/char-annoyed.png",
    etherColors: ["#f28482", "#ff9aa2", "#cdb4db"],
    text: "Really?...I hate you then.. 😤",
  },

  soft: {
    image: "/char-soft.png",
    etherColors: ["#ffd6e0", "#ffe5ec", "#cdb4db"],
    text: "Okay… you’re kind of sweet 💗🥰",
  },

  love: {
    image: "/char-soft.png",
    etherColors: ["#ffafcc", "#ffc8dd", "#cdb4db"],
    text: "Come with me. I want to show you something 💞",
  },

  valentine: {
  image: "/char-soft.png",
  etherColors: ["#ff477e", "#ff85a1", "#ffd6e0"],
  text: "You made it… I knew you would 💘🤗💘",
},
} as const;