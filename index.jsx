
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import MoodEmoji from "@/components/MoodEmoji";
import Navigation from "@/components/Navigation";

const moods = [
  { emoji: "😔", value: 1 },
  { emoji: "😐", value: 2 },
  { emoji: "🙂", value: 3 },
  { emoji: "😊", value: 4 },
  { emoji: "😍", value: 5 },
];

const Index = () => {
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const [note, setNote] = useState("");
  const { toast } = useToast();

  const handleSubmit = () => {
    if (selectedMood === null) {
      toast({
        title: "Please select a mood",
        description: "Choose how you're feeling today",
        variant: "destructive",
      });
      return;
    }

    // In a real app, this would save to a database
    const newMoodEntry = {
      id: Date.now().toString(),
      date: new Date(),
      mood: selectedMood,
      emoji: moods.find(m => m.value === selectedMood)?.emoji || "",
      note,
    };

    // Save to localStorage for demo purposes
    const existingEntries = JSON.parse(localStorage.getItem("moodEntries") || "[]");
    localStorage.setItem("moodEntries", JSON.stringify([newMoodEntry, ...existingEntries]));

    toast({
      title: "Mood saved!",
      description: "Your mood has been recorded",
    });

    // Reset form
    setSelectedMood(null);
    setNote("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-lavender-light/20 to-white pt-8 pb-24 px-4">
      <div className="max-w-md mx-auto animate-fade-in">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-lavender-dark">MoodVerse</h1>
          <p className="text-muted-foreground mt-2">Track how you feel, one day at a time</p>
        </div>

        <Card className="shadow-md bg-white border-lavender-light/50">
          <CardHeader>
            <CardTitle className="text-center text-lavender-dark">How are you feeling today?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between mb-6">
              {moods.map((mood) => (
                <MoodEmoji
                  key={mood.value}
                  emoji={mood.emoji}
                  value={mood.value}
                  selected={selectedMood === mood.value}
                  onClick={setSelectedMood}
                />
              ))}
            </div>
            <Textarea
              placeholder="What's on your mind? (optional)"
              className="min-h-[100px] border-lavender-light/50 focus-visible:ring-lavender"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </CardContent>
          <CardFooter>
            <Button 
              onClick={handleSubmit} 
              className="w-full bg-lavender hover:bg-lavender-dark transition-all duration-300 group"
            >
              <span className="group-hover:scale-105 transition-transform duration-300">
                Save Mood
              </span>
            </Button>
          </CardFooter>
        </Card>

        <div className="mt-10 bg-white/70 backdrop-blur-sm p-5 rounded-xl border border-lavender-light/40 shadow-sm">
          <h3 className="text-lg font-medium text-center mb-4 text-lavender-dark">
            Developer Mode: Sample JSON
          </h3>
          <div className="bg-slate-800 text-slate-50 p-4 rounded-lg overflow-auto text-xs font-mono">
            <pre>
{`[
  {
    "id": "1681544400000",
    "date": "${new Date().toISOString()}",
    "mood": 4,
    "emoji": "😊",
    "note": "Had a productive day coding!"
  },
  {
    "id": "1681458000000",
    "date": "${new Date(Date.now() - 86400000).toISOString()}",
    "mood": 3,
    "emoji": "🙂",
    "note": "Average day, nothing special"
  }
]`}
            </pre>
          </div>
        </div>
      </div>
      <Navigation />
    </div>
  );
};

export default Index;