"use client";

import Link from "next/link";
import { Search, Menu } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold tracking-tight">StreamIt</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link
            href="/"
            className="transition-colors hover:text-foreground/80 text-foreground"
          >
            Home
          </Link>
          <Link
            href="/browse"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Browse
          </Link>
          <Link
            href="/trending"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Trending
          </Link>
          <Link
            href="/seasonal"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Seasonal
          </Link>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center space-x-2">
          {/* Search */}
          <div className="relative hidden md:block">
            <div
              className={cn(
                "transition-all duration-300 ease-in-out",
                isSearchOpen ? "w-64" : "w-0"
              )}
            >
              {isSearchOpen && (
                <Input
                  type="search"
                  placeholder="Search anime..."
                  className="w-full"
                  autoFocus
                  onBlur={() => setIsSearchOpen(false)}
                />
              )}
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="md:flex hidden"
          >
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>

          {/* Mobile Search */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Mobile Menu */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Search Bar */}
      {isSearchOpen && (
        <div className="md:hidden border-t border-border/40 p-4">
          <Input
            type="search"
            placeholder="Search anime..."
            className="w-full"
            autoFocus
            onBlur={() => setIsSearchOpen(false)}
          />
        </div>
      )}
    </header>
  );
}
