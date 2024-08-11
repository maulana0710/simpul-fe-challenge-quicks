import { ReactNode } from "react";

export interface Chat {
  id: string; // UUID
  userId: string;
  title: string;
  message: string;
  timestamp: Date;
  active: boolean;
}

export interface Task {
  id: string; // UUID
  title: string;
  image: string;
  imageActive: string;
  color: string;
  active: boolean;
}

export interface CardBoxProps {
  children?: ReactNode; // Ensure children is defined if you are passing it to the component
  userData?: any
}
