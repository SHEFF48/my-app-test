"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import { Switch } from "./ui/switch";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();
  const [isDark, setDark] = React.useState(false);

  React.useEffect(() => {
    setDark(theme === "dark" ? true : false);
  }, [theme]);

  const switchHandler = () => {
    setTheme(isDark ? "light" : "dark");
    setDark((prev) => !prev);
  };

  return (
    <Switch
      className="w-[54px] h-[29px]"
      checked={isDark}
      onCheckedChange={() => switchHandler()}
      aria-label="Switch Theme Button"
    />
  );
}
