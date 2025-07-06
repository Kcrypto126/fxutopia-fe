"use client";

import { toast as toaster, Toaster } from "sonner";
import { createContext, useContext } from "react";

interface NotificationContextValue {
  toast: (msg: string, type: "Success" | "Error" | "Info" | "Warning") => void;
}

export const NotificationContext =
  createContext<NotificationContextValue | null>(null);

const NotificationProvider = ({ children }: { children: React.ReactNode }) => {
  const toast = (
    msg: string,
    type: "Success" | "Error" | "Info" | "Warning"
  ) => {
    if (type == "Success" || type == "Info") {
      toaster.success(type, {
        description: msg,
        duration: 3000,
        position: "top-right",
      });
    } else {
      toaster.error(type, {
        description: msg,
        duration: 3000,
        position: "top-right",
      });
    }
  };

  return (
    <NotificationContext.Provider value={{ toast }}>
      {children}
      <Toaster visibleToasts={1} />
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context)
    throw new Error("useNotification must be used within AuthProvider");
  return context;
};
