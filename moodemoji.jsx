import React from "react";
import { cn } from "@/lib/utils";

interface MoodEmojiProps {
  emoji: string;
  value: number;
  selected?: boolean;
  onClick: (value: number) => void;
}

const MoodEmoji = ({ emoji, value, selected = false, onClick }: MoodEmojiProps) => {
  return (
    <button
      onClick={() => onClick(value)}
      className={cn(
        "text-3xl sm:text-4xl p-3 rounded-full transition-all duration-200",
        "hover:bg-lavender-soft hover:scale-110",
        selected && "bg-lavender-soft scale-110 shadow-md"
      )}
      aria-label={`Mood level ${value}`}
    >
      {emoji}
    </button>
  );
};

export default MoodEmoji;