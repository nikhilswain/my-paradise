import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Bot, Terminal } from "lucide-react";
import { siteConfig } from "@/config/data";
import { MemberSection } from "@/components/member-section";
import { CommandResponse } from "@/components/command-response";
import { AnimatedText } from "@/components/animated-text";
import {
  SlickParticles,
  MinimalGeometry,
  FloatingOrbs,
  SubtleWaves,
} from "@/components/svg-animations";

export default function Component() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  const { hero, members, commands, bots, footer } = siteConfig;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const typeCommand = () => {
      const currentCommand = commands.list[currentCommandIndex].command;
      let i = 0;
      setTypedText("");

      const typeInterval = setInterval(() => {
        if (i < currentCommand.length) {
          setTypedText(currentCommand.slice(0, i + 1));
          i++;
        } else {
          clearInterval(typeInterval);
          setTimeout(() => {
            setCurrentCommandIndex((prev) => (prev + 1) % commands.list.length);
          }, commands.changeInterval);
        }
      }, 100);

      return () => clearInterval(typeInterval);
    };

    const timeout = setTimeout(typeCommand, 500);
    return () => clearTimeout(timeout);
  }, [currentCommandIndex, commands]);

  const parallaxOffset = scrollY * 0.5;
  const mouseParallaxX = (mousePosition.x - window.innerWidth / 2) * 0.01;
  const mouseParallaxY = (mousePosition.y - window.innerHeight / 2) * 0.01;

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      {/* Custom CSS for animations */}
      <style>{`
        @keyframes holographic {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes scan-sweep {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-reverse-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }

        @keyframes pulse-glow {
          0%,
          100% {
            box-shadow: 0 0 10px rgba(99, 102, 241, 0.5),
              0 0 20px rgba(139, 92, 246, 0.3);
          }
          50% {
            box-shadow: 0 0 20px rgba(99, 102, 241, 0.8),
              0 0 40px rgba(139, 92, 246, 0.6);
          }
        }

        @keyframes energy-ring-1 {
          0% {
            transform: scale(1) rotate(0deg);
            opacity: 0.8;
          }
          100% {
            transform: scale(1.2) rotate(360deg);
            opacity: 0;
          }
        }
        @keyframes energy-ring-2 {
          0% {
            transform: scale(1) rotate(0deg);
            opacity: 0.8;
          }
          100% {
            transform: scale(1.2) rotate(-360deg);
            opacity: 0;
          }
        }

        @keyframes wizard-shimmer {
          0% {
            background-position: 0% 50%;
            text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
          }
          50% {
            background-position: 100% 50%;
            text-shadow: 0 0 15px rgba(255, 255, 255, 0.8);
          }
          100% {
            background-position: 0% 50%;
            text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
          }
        }

        @keyframes circle-rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>

      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            transform: `translate(${mouseParallaxX}px, ${mouseParallaxY}px)`,
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.1) 0%, transparent 50%)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            transform: `translateY(${parallaxOffset}px)`,
            backgroundImage: `
              linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-24 pb-12"
      >
        <div
          className="absolute inset-0 opacity-30"
          style={{
            transform: `translateY(${scrollY * 0.3}px) scale(${
              1 + scrollY * 0.0005
            })`,
            background: `conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(99, 102, 241, 0.1) 90deg, transparent 180deg, rgba(139, 92, 246, 0.1) 270deg, transparent 360deg)`,
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center">
          {/* Server Photo & Name - Integrated Futuristic Display */}
          <div
            className="relative flex flex-col items-center mb-16"
            style={{
              transform: `translate(${mouseParallaxX}px, ${mouseParallaxY}px)`,
              transition: "transform 0.2s ease-out",
            }}
          >
            {/* Server Photo */}
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-indigo-500/50 animate-pulse-glow">
              <img
                src={hero.channelPhoto || "/placeholder.svg"}
                alt={hero.serverName}
                className="w-full h-full object-cover saturate-150 contrast-125"
              />
              {/* Inner glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 animate-pulse" />

              {/* Energy rings */}
              <div className="absolute inset-0 rounded-full border-2 border-blue-400/50 animate-[energy-ring-1_2s_ease-out_infinite]" />
              <div className="absolute inset-0 rounded-full border-2 border-purple-400/50 animate-[energy-ring-2_2s_ease-out_infinite_0.5s]" />
            </div>

            {/* Server Name */}
            <h2
              className="text-5xl md:text-7xl font-black mt-8 bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent relative"
              style={{
                backgroundSize: "400% auto",
                animation: "wizard-shimmer 5s linear infinite",
              }}
            >
              {hero.serverName}
              {/* Subtle digital text shadow */}
              <span
                className="absolute inset-0 -z-10 opacity-30"
                style={{
                  textShadow: `
                    0 0 10px rgba(99, 102, 241, 0.8),
                    0 0 20px rgba(139, 92, 246, 0.6)
                  `,
                  animation: "pulse-glow 2s ease-in-out infinite",
                }}
              >
                {hero.serverName}
              </span>
            </h2>
          </div>

          <div className="text-center relative">
            {/* Main heading - no glitch */}
            <h1 className="text-4xl md:text-6xl font-black mb-8 bg-gradient-to-r from-white via-indigo-200 via-purple-200 via-pink-200 to-yellow-200 bg-clip-text text-transparent leading-tight">
              {hero.title}
            </h1>
            <p className="text-xl md:text-3xl text-slate-300 mb-4 max-w-3xl mx-auto font-medium">
              {hero.subtitle}
            </p>
          </div>

          <div
            className="flex flex-col sm:flex-row gap-8 justify-center items-center"
            style={{
              transform: `translateY(${scrollY * 0.1}px)`,
            }}
          >
            <Button
              size="lg"
              className="group relative px-16 py-8 text-2xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 via-pink-600 to-red-600 hover:from-indigo-500 hover:via-purple-500 hover:via-pink-500 hover:to-red-500 transform hover:scale-125 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/50 overflow-hidden border-2 border-purple-400/50"
              onClick={() => {
                // Add crazy click animation
                const button = document.activeElement as HTMLElement;
                button.style.transform = "scale(0.9) rotate(-5deg)";
                setTimeout(() => {
                  button.style.transform = "scale(1.25) rotate(5deg)";
                  setTimeout(() => {
                    button.style.transform = "scale(1.1) rotate(0deg)";
                  }, 100);
                }, 100);
              }}
            >
              <span className="relative z-10 flex items-center gap-4">
                Join {hero.serverName}
                <div className="w-8 h-8 bg-white/30 rounded-full flex items-center justify-center group-hover:rotate-360 transition-transform duration-700 text-2xl">
                  🚀
                </div>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 via-purple-400 via-blue-400 to-green-400 opacity-0 group-hover:opacity-40 transition-opacity duration-500 animate-pulse" />
              <div className="absolute -inset-2 bg-gradient-to-r from-indigo-600 via-purple-600 via-pink-600 to-red-600 rounded-lg blur-lg opacity-30 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />

              {/* Particle burst on hover */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-3 h-3 bg-yellow-400 rounded-full animate-ping"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      animationDelay: `${i * 0.1}s`,
                      animationDuration: "0.8s",
                    }}
                  />
                ))}
              </div>
            </Button>
          </div>
        </div>

        {/* Enhanced floating elements */}
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg) scale(${
                0.5 + Math.random() * 1
              })`,
              animation: `float ${3 + Math.random() * 6}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          >
            <div
              className={`w-8 h-8 border-2 transform rotate-45 ${
                i % 4 === 0
                  ? "border-purple-400"
                  : i % 4 === 1
                  ? "border-pink-400"
                  : i % 4 === 2
                  ? "border-blue-400"
                  : "border-green-400"
              }`}
            />
          </div>
        ))}
      </section>

      {/* Members Showcase */}
      <section className="relative py-16 px-4">
        <div
          className="absolute inset-0 opacity-15"
          style={{
            background: `radial-gradient(circle at ${
              50 + Math.sin(scrollY * 0.01) * 20
            }% ${
              50 + Math.cos(scrollY * 0.01) * 20
            }%, rgba(99, 102, 241, 0.2) 0%, transparent 70%)`,
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Meet Our Community
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto font-medium">
              Connect with our amazing team of moderators, admins, and fellow
              members
            </p>
          </div>

          <div className="relative">
            {/* Slick SVG animations positioned in empty spaces on desktop */}
            <div className="hidden lg:block">
              <SlickParticles className="top-0 right-0 opacity-60" />
              <MinimalGeometry className="top-32 right-10 opacity-50" />
              <FloatingOrbs className="top-64 right-20 opacity-40" />
              <SubtleWaves className="bottom-0 right-0 opacity-30" />
            </div>

            {/* Single MemberSection for all members */}
            <MemberSection members={members} />
          </div>
        </div>
      </section>

      {/* Bots & Commands Section */}
      <section className="relative py-24 px-4">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background: `linear-gradient(${
              scrollY * 0.1
            }deg, rgba(34, 197, 94, 0.1) 0%, rgba(59, 130, 246, 0.1) 50%, rgba(168, 85, 247, 0.1) 100%)`,
          }}
        />

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Powerful Bots & Commands
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-8 font-medium">
              Experience our feature-rich bot ecosystem designed to enhance your
              server experience
            </p>

            <div className="text-center mb-8">
              <p className="text-lg text-slate-400 mb-2">Featured Bots:</p>
              <div className="text-3xl font-black">
                <AnimatedText
                  texts={bots.map((bot) => bot.name)}
                  className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                  interval={1500}
                />
              </div>
            </div>
          </div>

          <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm mb-8">
            <div className="grid lg:grid-cols-2 divide-x divide-slate-700">
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                  </div>
                  <div className="flex items-center gap-2 ml-4">
                    <Terminal className="w-4 h-4 text-slate-400" />
                    <span className="text-sm text-slate-400">
                      Discord Terminal
                    </span>
                  </div>
                </div>

                <div className="bg-slate-950 rounded-lg p-4 font-mono text-sm">
                  <div className="text-green-400 mb-2">
                    $ discord-bot --interactive
                  </div>
                  <div className="text-slate-400 mb-4">
                    Connected to server... Ready for commands!
                  </div>

                  {commands.list.map((cmd, index) => (
                    <div
                      key={cmd.command}
                      className={`mb-2 ${
                        index === currentCommandIndex
                          ? "text-white"
                          : "text-slate-500"
                      }`}
                    >
                      <span className="text-indigo-400">{">"} </span>
                      {index === currentCommandIndex ? (
                        <span>
                          {typedText}
                          <span className="animate-pulse">|</span>
                        </span>
                      ) : (
                        cmd.command
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6">
                <CommandResponse
                  response={commands.list[currentCommandIndex].response}
                />
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {bots.map((bot, index) => (
              <Card
                key={bot.name}
                className="group bg-slate-900/50 border-slate-700 p-4 hover:bg-slate-800/50 transition-all duration-500 transform hover:scale-105 hover:rotate-1 hover:shadow-2xl hover:shadow-indigo-500/20 cursor-pointer"
                style={{
                  transform: `perspective(1000px) rotateX(${
                    index % 2 === 0 ? "1deg" : "-1deg"
                  }) rotateY(${index % 2 === 0 ? "-1deg" : "1deg"})`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "perspective(1000px) rotateX(-3deg) rotateY(3deg) scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = `perspective(1000px) rotateX(${
                    index % 2 === 0 ? "1deg" : "-1deg"
                  }) rotateY(${index % 2 === 0 ? "-1deg" : "1deg"}) scale(1)`;
                }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-slate-700 to-slate-600 rounded-full flex items-center justify-center group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-300">
                    <Bot className="w-4 h-4 text-slate-300 group-hover:text-white" />
                  </div>
                  <span
                    className={`font-bold ${bot.color} group-hover:text-white transition-colors duration-300`}
                  >
                    {bot.name}
                  </span>
                </div>
                <p className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                  {bot.description}
                </p>
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-4 border-t border-slate-800">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background: `linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, transparent 50%, rgba(139, 92, 246, 0.1) 100%)`,
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-indigo-500">
              <img
                src={footer.authorPhoto || "/placeholder.svg"}
                alt={footer.author}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-left">
              <h3 className="font-bold text-white">{footer.channelName}</h3>
              <p className="text-sm text-slate-400">by {footer.author}</p>
            </div>
          </div>

          <blockquote className="text-xl md:text-3xl font-bold text-slate-300 italic mb-4">
            "{footer.quote}"
          </blockquote>
          <p className="text-slate-500 text-lg">
            - {footer.author}, {footer.year}
          </p>

          <div className="hidden lg:block">
            <SubtleWaves className="bottom-0 left-1/2 transform -translate-x-1/2 opacity-20" />
          </div>
        </div>
      </footer>
    </div>
  );
}
