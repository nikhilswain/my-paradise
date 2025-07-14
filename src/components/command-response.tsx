import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, Heart, Trophy, Users, Gift, Zap } from "lucide-react";

const iconMap = {
  Play,
  Heart,
  Trophy,
  Users,
  Gift,
  Zap,
};

interface CommandResponse {
  type: string;
  title: string;
  content: string;
  icon: any;
  color: string;
  progress?: number;
  duration?: string;
  currentTime?: string;
  image?: string;
  details?: any;
  buttons: Array<{
    label: string;
    icon: string;
    color: string;
  }>;
}

interface CommandResponseProps {
  response: CommandResponse;
}

export function CommandResponse({ response }: CommandResponseProps) {
  const IconComponent = response.icon;

  const getButtonColor = (color: string) => {
    const colors = {
      green: "border-green-400 hover:border-green-300",
      red: "border-red-400 hover:border-red-300",
      yellow: "border-yellow-400 hover:border-yellow-300",
      blue: "border-blue-400 hover:border-blue-300",
      pink: "border-pink-400 hover:border-pink-300",
      purple: "border-purple-400 hover:border-purple-300",
      emerald: "border-emerald-400 hover:border-emerald-300",
    };
    return (
      colors[color as keyof typeof colors] ||
      "border-slate-600 hover:border-slate-400"
    );
  };

  return (
    <Card className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 border-slate-700 backdrop-blur-sm p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
          <IconComponent className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="font-semibold text-white">{response.title}</h3>
          <p className="text-sm text-slate-400">Bot response preview</p>
        </div>
      </div>

      <div className="bg-slate-950/50 rounded-lg p-4 mb-4">
        <div className="flex items-center gap-2 mb-2">
          <IconComponent className={`w-4 h-4 ${response.color}`} />
          <span className={response.color}>{response.title}</span>
        </div>
        <p className="text-white font-medium mb-2">{response.content}</p>

        {/* Music Player */}
        {response.type === "music" && response.progress && (
          <div className="flex items-center gap-2 mt-2">
            <div className="flex-1 bg-slate-700 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-green-400 to-blue-400 h-2 rounded-full transition-all duration-300"
                style={{ width: `${response.progress}%` }}
              />
            </div>
            <span className="text-xs text-slate-400">
              {response.currentTime} / {response.duration}
            </span>
          </div>
        )}

        {/* Rank Display */}
        {response.type === "rank" && response.details && (
          <div className="space-y-2 mt-2">
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">XP:</span>
              <span className="text-white">{response.details.xp}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">Next Level:</span>
              <span className="text-slate-300">
                {response.details.nextLevel}
              </span>
            </div>
          </div>
        )}

        {/* Interaction Image */}
        {response.type === "interaction" && response.image && (
          <div className="mt-3">
            <img
              src={response.image || "/placeholder.svg"}
              alt="Interaction"
              className="w-full h-32 object-cover rounded-lg"
            />
          </div>
        )}

        {/* Reward Details */}
        {response.type === "reward" && response.details && (
          <div className="space-y-1 mt-2 text-sm">
            <div className="text-emerald-400 font-semibold">
              {response.details.coins}
            </div>
            <div className="text-yellow-400">{response.details.streak}</div>
            <div className="text-slate-300">{response.details.total}</div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 gap-3">
        {response.buttons.map((button, index) => {
          const ButtonIcon = iconMap[button.icon as keyof typeof iconMap];
          return (
            <Button
              key={index}
              variant="outline"
              size="sm"
              className={`${getButtonColor(button.color)} bg-transparent`}
            >
              {ButtonIcon && <ButtonIcon className="w-4 h-4 mr-2" />}
              {button.label}
            </Button>
          );
        })}
      </div>
    </Card>
  );
}
