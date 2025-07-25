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
  content?: string;
  icon?: any;
  color: string;
  progress?: number;
  duration?: string;
  currentTime?: string;
  image?: string;
  details?: any;
  buttons?: Array<{
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
      green: "border-green-400 hover:border-green-300 text-white",
      red: "border-red-400 hover:border-red-300 text-white",
      yellow: "border-yellow-400 hover:border-yellow-300 text-white",
      blue: "border-blue-400 hover:border-blue-300 text-white",
      pink: "border-pink-400 hover:border-pink-300 text-white",
      purple: "border-purple-400 hover:border-purple-300 text-white",
      emerald: "border-emerald-400 hover:border-emerald-300 text-white",
    };
    return (
      colors[color as keyof typeof colors] ||
      "border-slate-600 hover:border-slate-400"
    );
  };

  return (
    <Card className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 border-slate-700 backdrop-blur-sm p-6 min-h-[400px] max-h-[500px]">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
          <IconComponent className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="font-semibold text-white">{response.title}</h3>
          <p className="text-sm text-slate-400">Bot response preview</p>
        </div>
      </div>

      <div className="bg-slate-950/50 rounded-lg p-4 mb-4 overflow-auto">
        <div className="flex items-center gap-2 mb-2">
          <IconComponent className={`w-4 h-4 ${response.color}`} />
          <span className={response.color}>{response.title}</span>
        </div>
        <p className="text-white font-medium mb-2 whitespace-pre-line">
          {response.content}
        </p>

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
          <div className="space-y-2 mt-2 overflow-auto">
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">Level:</span>
              <span className="text-slate-300">{response.details.level}</span>
            </div>
          </div>
        )}

        {/* Interaction Image */}
        {response.type === "interaction" && response.image && (
          <div className="mt-3">
            <img
              src={response.image || ""}
              alt="Interaction"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 gap-3">
        {response?.buttons?.map((button, index) => {
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
