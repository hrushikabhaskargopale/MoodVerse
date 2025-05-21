import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import MoodCard from "@/components/MoodCard";
import MoodChart from "@/components/MoodChart";
import Navigation from "@/components/Navigation";
import { MoodEntry } from "@/types/mood";

const Dashboard = () => {
  const [moodEntries, setMoodEntries] = useState<MoodEntry[]>([]);

  useEffect(() => {
    // In a real app, this would fetch from an API
    const entries = JSON.parse(localStorage.getItem("moodEntries") || "[]");
    
    // Convert date strings to Date objects
    const formattedEntries = entries.map((entry: any) => ({
      ...entry,
      date: new Date(entry.date)
    }));
    
    setMoodEntries(formattedEntries);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-lavender-light/20 to-white pt-8 pb-24 px-4">
      <div className="max-w-lg mx-auto animate-fade-in">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-lavender-dark">Mood Overview</h1>
          <p className="text-muted-foreground mt-2">Your mood journey at a glance</p>
        </div>

        <div className="space-y-6">
          <MoodChart moodData={moodEntries} />

          <Card className="shadow-sm bg-white border-lavender-light/50">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl text-lavender-dark">Recent Entries</CardTitle>
            </CardHeader>
            <CardContent>
              {moodEntries.length > 0 ? (
                <div className="space-y-3">
                  {moodEntries.slice(0, 5).map((entry) => (
                    <div key={entry.id} className="animate-slide-up">
                      <MoodCard
                        date={entry.date}
                        emoji={entry.emoji}
                        note={entry.note}
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <p>No mood entries yet.</p>
                  <p className="mt-2">Start tracking your mood on the home page!</p>
                </div>
              )}
            </CardContent>
          </Card>

          <div className="bg-white/70 backdrop-blur-sm p-5 rounded-xl border border-lavender-light/40 shadow-sm">
            <h3 className="text-lg font-medium text-center mb-4 text-lavender-dark">
              Developer Mode: Data Structure
            </h3>
            <div className="bg-slate-800 text-slate-50 p-4 rounded-lg overflow-auto text-xs font-mono">
              <pre>
{`// MoodEntry Type
interface MoodEntry {
  id: string;      // Unique identifier
  date: Date;      // When the mood was recorded
  mood: number;    // 1-5 rating
  emoji: string;   // Corresponding emoji
  note: string;    // User's notes
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>
      <Navigation />
    </div>
  );
};

export default Dashboard;
