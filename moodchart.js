import React from "react";
import { Card } from "@/components/ui/card";
import { format, subDays } from "date-fns";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from "recharts";
import { MoodEntry } from "@/types/mood";

interface MoodChartProps {
  moodData: MoodEntry[];
}

const MoodChart = ({ moodData }: MoodChartProps) => {
  const last7Days = Array.from({ length: 7 }, (_, i) => {
    const date = subDays(new Date(), 6 - i);
    const matchingMood = moodData.find(
      (mood) => format(new Date(mood.date), "yyyy-MM-dd") === format(date, "yyyy-MM-dd")
    );

    return {
      date: format(date, "MMM d"),
      mood: matchingMood?.mood || 0,
      emoji: matchingMood?.emoji || "",
    };
  });

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const mood = payload[0].payload;
      return (
        <div className="bg-white p-3 rounded-lg shadow-md border border-lavender-light">
          <p className="font-medium text-lavender-dark">{label}</p>
          <p className="text-xl">{mood.emoji || "No entry"}</p>
          <p className="text-sm text-muted-foreground">Mood level: {mood.mood || "N/A"}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="w-full p-4 shadow-sm bg-white">
      <h3 className="text-lg font-medium mb-4 text-center">Past 7 Days Mood Trend</h3>
      <div className="w-full h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={last7Days}
            margin={{ top: 20, right: 20, left: 0, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f0e6ff" />
            <XAxis 
              dataKey="date"
              tick={{ fill: "#6e59a5" }}
            />
            <YAxis 
              domain={[0, 5]} 
              ticks={[1, 2, 3, 4, 5]} 
              tick={{ fill: "#6e59a5" }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="mood"
              stroke="#9b87f5"
              strokeWidth={2}
              activeDot={{ r: 8, fill: "#9b87f5" }}
              dot={{ r: 4, fill: "#9b87f5" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default MoodChart;
