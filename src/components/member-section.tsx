"use client"; // This component needs to be client-side to use window.innerWidth

import { Badge } from "@/components/ui/badge";
import { useState, useEffect, useRef, useCallback } from "react";

interface Member {
  name: string;
  role: string;
  avatar: string;
  color: string;
}

interface MemberAvatarProps {
  member: Member;
  index: number;
  totalMembers: number;
  currentRadius: number;
  isActive: boolean; // Renamed from isClicked
  isAnyOtherActive: boolean; // Renamed from isAnyOtherClicked
  onAvatarClick: (name: string) => void; // New prop for click handler
}

function MemberAvatar({
  member,
  index,
  totalMembers,
  currentRadius,
  isActive,
  isAnyOtherActive,
  onAvatarClick,
}: MemberAvatarProps) {
  const [isLocalHovered, setIsLocalHovered] = useState(false); // Local state for hover scaling

  const angle = (index / totalMembers) * 2 * Math.PI; // Radians for circular positioning
  const x = currentRadius * Math.cos(angle);
  const y = currentRadius * Math.sin(angle);

  return (
    <div
      className={`absolute transition-all duration-300 ease-out`}
      onMouseEnter={() => setIsLocalHovered(true)}
      onMouseLeave={() => setIsLocalHovered(false)}
      onClick={() => onAvatarClick(member.name)} // Toggle click state
      style={{
        // Position the avatar in the circle or at the center if clicked
        left: isActive ? "50%" : `calc(50% + ${x}px)`,
        top: isActive ? "50%" : `calc(50% + ${y}px)`,
        // Center the element on its calculated point, then scale based on hover/click
        transform: isActive
          ? "translate(-50%, -50%) scale(2.0)" // Clicked: move to center, large scale
          : isLocalHovered
          ? "translate(-50%, -50%) scale(1.2)" // Hovered: scale in place
          : "translate(-50%, -50%)", // Default: no scale
        zIndex: isActive ? 10 : isLocalHovered ? 5 : 1, // Bring hovered/clicked avatar to front
        opacity: isAnyOtherActive ? 0.3 : 1, // Fade others if one is clicked
      }}
    >
      <div className="group relative flex flex-col items-center">
        <div className="relative mb-2">
          <div
            className={`absolute inset-0 bg-gradient-to-r ${member.color} rounded-full blur-md opacity-60 group-hover:opacity-100 transition-opacity duration-300 animate-pulse`}
          />
          <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-slate-600 group-hover:border-transparent transition-all duration-300 transform">
            <img
              src={member.avatar || "/placeholder.svg"}
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div
          className={`text-center transition-opacity duration-300 ${
            isActive || isLocalHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <h3 className="font-semibold text-white text-xs">{member.name}</h3>
          <Badge
            variant="secondary"
            className="mt-1 bg-slate-800 text-slate-300 text-xs px-2 py-0"
          >
            {member.role}
          </Badge>
        </div>
      </div>
    </div>
  );
}

interface MemberSectionProps {
  members: Member[];
}

export function MemberSection({ members }: MemberSectionProps) {
  const [currentRadius, setCurrentRadius] = useState(160); // Default for larger screens
  const [containerSize, setContainerSize] = useState(360); // Default container size (radius * 2 + avatar size)
  const [activeMemberName, setActiveMemberName] = useState<string | null>(null); // The name of the member currently highlighted (auto or manual)
  const [isCircleHovered, setIsCircleHovered] = useState(false); // True if mouse is hovering over the entire circle container
  const autoCycleIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const currentAutoCycleIndexRef = useRef(0); // To keep track of the next auto-cycled index

  const totalMembers = members.length;

  // Function to start the automatic cycling
  const startAutoCycle = useCallback(
    (startRandom = false) => {
      if (autoCycleIntervalRef.current) {
        clearInterval(autoCycleIntervalRef.current);
      }

      if (startRandom) {
        currentAutoCycleIndexRef.current = Math.floor(
          Math.random() * totalMembers
        );
      }

      autoCycleIntervalRef.current = setInterval(() => {
        setActiveMemberName(members[currentAutoCycleIndexRef.current].name);
        currentAutoCycleIndexRef.current =
          (currentAutoCycleIndexRef.current + 1) % totalMembers;
      }, 4000); // Cycle every 4 seconds
    },
    [members, totalMembers]
  );

  // Function to stop the automatic cycling
  const stopAutoCycle = useCallback(() => {
    if (autoCycleIntervalRef.current) {
      clearInterval(autoCycleIntervalRef.current);
      autoCycleIntervalRef.current = null;
    }
    setActiveMemberName(null); // Clear active member when auto-cycle stops
  }, []);

  // Effect to manage the automatic cycling on mount and unmount
  useEffect(() => {
    startAutoCycle(true); // Start randomly initially

    return () => {
      stopAutoCycle(); // Clean up on unmount
    };
  }, [startAutoCycle, stopAutoCycle]);

  // Handlers for the main circle container
  const handleCircleMouseEnter = () => {
    setIsCircleHovered(true);
    stopAutoCycle(); // Stop auto-cycle when hovering over the circle
  };

  const handleCircleMouseLeave = () => {
    setIsCircleHovered(false);
    startAutoCycle(true); // Restart auto-cycle from random when leaving the circle
  };

  // Manual click handler for individual avatars
  const handleAvatarClick = useCallback(
    (memberName: string) => {
      if (activeMemberName === memberName) {
        // If clicking the currently active avatar, deactivate it and restart auto-cycle
        setActiveMemberName(null);
        startAutoCycle(true); // Restart from random
      } else {
        // If clicking a different avatar, activate it and stop auto-cycle
        setActiveMemberName(memberName);
        stopAutoCycle();
      }
    },
    [activeMemberName, startAutoCycle, stopAutoCycle]
  );

  // Effect to handle window resize for responsive radius
  useEffect(() => {
    const handleResize = () => {
      const newRadius = window.innerWidth >= 768 ? 160 : 120;
      setCurrentRadius(newRadius);
      setContainerSize(newRadius * 2 + 40); // Avatar size (14px) + some padding
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial value
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isAnyAvatarActive = activeMemberName !== null; // Check if any avatar is currently active (manual or auto)

  return (
    <div className="relative w-full flex items-center justify-center py-8">
      <div
        className={`relative flex items-center justify-center ${
          !isAnyAvatarActive && !isCircleHovered ? "animate-circle-rotate" : ""
        }`} // Apply circular rotation conditionally
        onMouseEnter={handleCircleMouseEnter}
        onMouseLeave={handleCircleMouseLeave}
        style={{
          width: `${containerSize}px`,
          height: `${containerSize}px`,
        }}
      >
        {members.map((member, index) => {
          const isActive = activeMemberName === member.name;
          const isAnyOtherActive = isAnyAvatarActive && !isActive; // True if *another* avatar is active

          return (
            <MemberAvatar
              key={member.name}
              member={member}
              index={index}
              totalMembers={totalMembers}
              currentRadius={currentRadius}
              isActive={isActive}
              isAnyOtherActive={isAnyOtherActive}
              onAvatarClick={handleAvatarClick}
            />
          );
        })}
      </div>
    </div>
  );
}
