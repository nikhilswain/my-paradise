import { Music, Hand, Trophy, Gift } from "lucide-react";

export const siteConfig = {
  hero: {
    title:
      "We made this server for people who want to reach out for help and look for friends",
    subtitle:
      "Join our community of gamers, developers, and friends. Find your tribe in our welcoming digital space.",
    channelName: "#my-paradise",
    channelPhoto: "/logo.gif",
    serverName: "My Paradise",
    inviteLink: "https://discord.gg/WnHeehkPZN",
  },

  members: [
    {
      name: "Rex Lapis | 天妖神 🐉",
      role: "Owner",
      avatar: "/rex.webp",
      color: "from-red-500 to-orange-500",
    },
    {
      name: "amaju",
      role: "Admin",
      avatar: "/amaju.webp",
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "steffi",
      role: "Admin",
      avatar: "/steffi.webp",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Aiwa Stella }} 97/100",
      role: "Admin",
      avatar: "/aiwa.png",
      color: "from-indigo-500 to-purple-500",
    },
    {
      name: "zero",
      role: "Admin",
      avatar: "/zero.jpg",
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "Mudit",
      role: "Admin",
      avatar: "/mudit.webp",
      color: "from-teal-500 to-cyan-500",
    },
    {
      name: "Yor Forger",
      role: "Apprentice Achiever",
      avatar: "/yor.webp",
      color: "from-pink-500 to-red-500",
    },
  ],

  commands: {
    changeInterval: 3000,
    list: [
      {
        command: "!play lofi hip hop",
        response: {
          type: "music",
          title: "Now Playing",
          content: "Lofi Hip Hop Radio 📻",
          icon: Music,
          color: "text-green-400",
          progress: 33,
          duration: "24:7:365",
          currentTime: "1:23",
          buttons: [
            { label: "Play", icon: "Play", color: "green" },
            { label: "Like", icon: "Heart", color: "red" },
          ],
        },
      },
      {
        command: "owo top",
        response: {
          type: "rank",
          title: "Top 5 Rank",
          content: `< Top 5 OwO Rankings for My Paradise >\n> Your Rank: 3\n>        you said owo 136 times!\n\n#1    @rexx_lapisss\n        said owo 709 times!\n#2    @amaju_03\n        said owo 156 times!\n#3    @2013_k_6\n        said owo 136 times!\n#4    @zero.02\n        said owo 34 times!\n#5    MEE6#4876\n        said owo 0 times!`,
          icon: Trophy,
          color: "text-yellow-400",
          details: {
            level: 5,
          },
          buttons: [
            { label: "Leaderboard", icon: "Trophy", color: "yellow" },
            { label: "Profile", icon: "Users", color: "blue" },
          ],
        },
      },
      {
        command: "z hug @rex",
        response: {
          type: "interaction",
          content: "",
          icon: Hand,
          title: "Z E R 0 gives a slap to Rex Lapis",
          color: "text-pink-400",
          image:
            "https://images-ext-1.discordapp.net/external/lmbt29GQwkogl-MKoexpiP3Zv8zNNIsAZDpSuAPlt2E/https/cdn.otakugifs.xyz/gifs/slap/7882244dc2ba254c.gif?width=537&height=500",
          details: {
            action: "slap",
            target: "@rex",
            message: "Sending virtual slap!",
          },
        },
      },
      {
        command: "/meme",
        response: {
          type: "interaction",
          title: "Random Meme",
          content: "Used /meme command",
          image: "/meme.png",
          icon: Gift,
          color: "text-emerald-400",
        },
      },
    ],
  },

  bots: [
    {
      name: "zero two",
      description: "Anime gifs and nekos",
      color: "text-pink-400",
    },
    {
      name: "MEE6",
      description: "Leveling & Moderation",
      color: "text-blue-400",
    },
    {
      name: "Arcane",
      description: "Leveling & Role Management",
      color: "text-green-400",
    },
    {
      name: "Dank Memer",
      description: "Memes & Economy",
      color: "text-yellow-400",
    },
    {
      name: "Dyno",
      description: "Server Management",
      color: "text-purple-400",
    },
    {
      name: "TicTacToe",
      description: "Play Tic Tac Toe",
      color: "text-cyan-400",
    },
    {
      name: "Truth or Dare",
      description: "Play Truth or Dare",
      color: "text-indigo-400",
    },
    {
      name: "Owo",
      description: "Hunt, battle, and gamble",
      color: "text-emerald-400",
    },
  ],

  footer: {
    quote:
      "Thou hast scrolled too far to turn back now. Join the cursed fellowship",
    author: "zero",
    channelName: "My Paradise",
    authorPhoto: "/logo.png",
  },
};
