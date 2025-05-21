mport React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-lavender-light/20 to-white pt-8 pb-24 px-4">
      <div className="max-w-2xl mx-auto animate-fade-in">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-lavender-dark">About MoodVerse</h1>
          <p className="text-muted-foreground mt-2">Understanding your emotional journey</p>
        </div>

        <Card className="mb-8 bg-white/80 border-lavender-light/30">
          <CardContent className="p-6 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-lavender-dark mb-4">Our Purpose</h2>
              <p className="text-muted-foreground">
                MoodVerse is designed to help you track and understand your emotional well-being.
                By recording your daily moods and reflections, you can gain valuable insights into
                your emotional patterns and what influences them.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-lavender-dark mb-4">Mental Health Benefits</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Increased emotional awareness and understanding</li>
                <li>• Early recognition of mood patterns and triggers</li>
                <li>• Better communication about feelings and needs</li>
                <li>• Track the effectiveness of wellness practices</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-lavender-dark mb-4">How It Works</h2>
              <div className="grid gap-4 text-muted-foreground">
                <p>1. Record your daily mood using our simple emoji picker</p>
                <p>2. Add notes to provide context about your feelings</p>
                <p>3. View your mood trends in the dashboard</p>
                <p>4. Gain insights from your emotional patterns</p>
              </div>
            </section>
          </CardContent>
        </Card>
      </div>
      <Navigation />
    </div>
  );
};

export default About;
