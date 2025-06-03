"use client";

import DarkModeToggle from "@/components/DarkModeToggle";
import Topbar from "@/components/Topbar";
import { useIsMobile } from "@/hooks/use-mobile";

const DummyPostsDiv = () => {
  return (
    <div className="flex flex-col items-center gap-5 py-6">
      {Array.from({ length: 10 }, (_, i) => (
        <div key={i} className="w-full max-w-md p-4 border rounded-md bg-muted/20">
          <h2 className="text-lg font-semibold text-foreground">Post {i + 1}</h2>
          <p className="text-muted-foreground">This is the content of post {i + 1}.</p>
        </div>
      ))}
    </div>
  );
};

export default function Home() {
  const isMobile = useIsMobile();

  return (
    <div className="px-3 mx-auto">
      <Topbar />
      <div className="container mx-auto">
        <DummyPostsDiv />

        {isMobile && (
          <div className="fixed bottom-3 end-3">
            <DarkModeToggle />
          </div>
        )}
      </div>
    </div>
  );
}
