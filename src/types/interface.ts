import { ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
}

export interface CourseCardProps {
  imageUrl: string;
  title: string;
  videoCount: number;
  duration: string;
  progress: number;
  isLocked: boolean;
  isVideo?: boolean;
}

export interface Course {
  title: string;
  videos: number;
  time: string;
  progress: number;
}

export interface CircularProgressProps {
  value: number;
  size?: number;
}

export interface CardData {
  id: number;
  imageSrc: string;
  text: string;
}

export interface UserProfileProps {
  isDetails?: boolean;
}
