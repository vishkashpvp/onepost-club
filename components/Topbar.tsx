"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import DarkModeToggle from "./DarkModeToggle";

export default function Topbar() {
  const isMobile = useIsMobile();

  return (
    <header className="w-full py-3 border-b border-border bg-background">
      <nav className="flex items-center justify-between max-w-screen-lg mx-auto">
        <Link href="/" className="text-xl font-bold text-foreground">
          onepost.club
        </Link>

        <div className="flex items-center gap-4">
          {!isMobile && <DarkModeToggle />}
          <Button asChild className="text-sm">
            <Link href="/one-onboarding">Come, Join the club</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}
