import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { format } from "date-fns";

interface MoodCardProps {
  date: Date;
  emoji: string;
  note: string;
}

const MoodCard = ({ date, emoji, note }: MoodCardProps) => {
  return (
    <Card className="w-full bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
      <CardContent className="p-4 flex items-start gap-3">
        <div className="text-3xl">{emoji}</div>
        <div className="flex-1">
          <div className="text-sm text-muted-foreground">
            {format(date, "MMMM d, yyyy • h:mm a")}
          </div>
          <p className="mt-1 text-foreground">{note}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default MoodCard;
