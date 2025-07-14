import { Music, Heart, Trophy, Gift } from "lucide-react";

export const siteConfig = {
  hero: {
    title:
      "We made this server for people who want to reach out for help and look for friends",
    subtitle:
      "Join our community of gamers, developers, and friends. Find your tribe in our welcoming digital space.",
    channelName: "#my-paradise",
    channelPhoto: "/logo.gif",
    serverName: "My Paradise",
  },

  members: [
    // Owner (1)
    {
      name: "Rex Lapis | 天妖神 🐉",
      role: "Owner",
      avatar: "/rex.webp",
      color: "from-red-500 to-orange-500",
    },
    // Admins (3)
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
  ],

  commands: {
    changeInterval: 1500,
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
        command: "!rank @username",
        response: {
          type: "rank",
          title: "User Rank",
          content: "Level 42 • Rank #15",
          icon: Trophy,
          color: "text-yellow-400",
          details: {
            level: 42,
            xp: "15,420 XP",
            nextLevel: "2,580 XP to next level",
            rank: "#15",
          },
          buttons: [
            { label: "Leaderboard", icon: "Trophy", color: "yellow" },
            { label: "Profile", icon: "Users", color: "blue" },
          ],
        },
      },
      {
        command: "!hug @ZeroTwo",
        response: {
          type: "interaction",
          title: "Hug Sent!",
          content: "You hugged ZeroTwo! 🤗",
          icon: Heart,
          color: "text-pink-400",
          image: "/placeholder.svg?height=200&width=300",
          details: {
            action: "Hug",
            target: "@ZeroTwo",
            message: "Sending virtual hugs!",
          },
          buttons: [
            { label: "Hug Back", icon: "Heart", color: "pink" },
            { label: "Pat", icon: "Users", color: "purple" },
          ],
        },
      },
      {
        command: "!daily reward",
        response: {
          type: "reward",
          title: "Daily Reward",
          content: "You earned 500 coins! 💰",
          icon: Gift,
          color: "text-emerald-400",
          details: {
            coins: "+500",
            streak: "7 day streak!",
            bonus: "Streak bonus: +100",
            total: "Total: 12,450 coins",
          },
          buttons: [
            { label: "Inventory", icon: "Gift", color: "emerald" },
            { label: "Shop", icon: "Zap", color: "blue" },
          ],
        },
      },
    ],
  },

  bots: [
    {
      name: "MEE6",
      description: "Leveling & Moderation",
      color: "text-blue-400",
    },
    { name: "ZeroTwo", description: "Anime & Fun", color: "text-pink-400" },
    {
      name: "Carl-bot",
      description: "Automod & Utilities",
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
    { name: "Groovy", description: "Music Player", color: "text-red-400" },
    { name: "Mudae", description: "Waifu Game", color: "text-pink-300" },
    {
      name: "Pokétwo",
      description: "Pokémon Catching",
      color: "text-blue-300",
    },
    {
      name: "Ticket Tool",
      description: "Support System",
      color: "text-orange-400",
    },
    { name: "YAGPDB", description: "Custom Commands", color: "text-cyan-400" },
    { name: "Rythm", description: "Music Bot", color: "text-indigo-400" },
    {
      name: "Tatsu",
      description: "Social Features",
      color: "text-emerald-400",
    },
  ],

  footer: {
    quote:
      "I joined this server thinking it was about gaming, but apparently it's group therapy with extra steps and Discord Nitro.",
    author: "Zero",
    year: "2024",
    channelName: "My Paradise",
    authorPhoto: "/logo.png",
  },
};
