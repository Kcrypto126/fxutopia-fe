"use client";

import React from "react";
import dynamic from "next/dynamic";

const NotificationProvider = dynamic(
  () => import("@/providers/notificationProvider")
);

const ThemeClient = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return <NotificationProvider>{children}</NotificationProvider>;
};

export default ThemeClient;
