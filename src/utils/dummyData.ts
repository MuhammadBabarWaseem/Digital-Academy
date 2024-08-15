import { CardData, Course } from '../types/interface';
import { Badges } from '../constant/Badges';

export const fundamentalCardData: CardData[] = [
  { id: 1, imageSrc: Badges[0], text: "Data Management" },
  { id: 2, imageSrc: Badges[1], text: "Cyber Security" },
  { id: 3, imageSrc: Badges[2], text: "Machine Learning" },
];

export const businessCardData: CardData[] = [
  { id: 1, imageSrc: Badges[0], text: "Planer Function" },
  { id: 2, imageSrc: Badges[1], text: "Inventory Management" },
  { id: 3, imageSrc: Badges[2], text: "Inventory Management" },
];

export const coursesData: Course[] = [
  { title: "Course 1 Title", videos: 6, time: "1hr 49min", progress: 78 },
  { title: "Course 2 Title", videos: 14, time: "4hr 16min", progress: 2 },
  { title: "Course 3 Title", videos: 21, time: "7hr 22min", progress: 0 },
];

export const dummyCourseData = [
  {
    id: 1,
    imgSrc: "https://shorturl.at/qkuCw",
    text: "Lorem ipsum dolor sit amet tetur. Pretium viverra.",
    time: "05:08",
  },
  {
    id: 2,
    imgSrc: "https://shorturl.at/qkuCw",
    text: "First Quiz of this chapter",
    time: "Quiz",
  },
  {
    id: 3,
    imgSrc: "https://shorturl.at/qkuCw",
    text: "Lorem ipsum dolor sit amet tetur. Pretium viverra.",
    time: "08:12",
  },
  {
    id: 4,
    imgSrc: "https://shorturl.at/qkuCw",
    text: "Lorem ipsum dolor sit amet tetur. Pretium viverra.",
    time: "25:04",
  },
];

export const courseCardData = [
  {
    imageUrl:
      "https://st4.depositphotos.com/4218696/38146/i/450/depositphotos_381466772-stock-photo-millennial-african-american-student-with.jpg",
    title: "Introduction to TypeScript",
    videoCount: 6,
    duration: "1 hr 49 min",
    progress: 50,
    isLocked: false,
  },
  {
    imageUrl:
      "https://st4.depositphotos.com/4218696/38146/i/450/depositphotos_381466772-stock-photo-millennial-african-american-student-with.jpg",
    title: "Advanced React",
    videoCount: 10,
    duration: "2 hrs 30 min",
    progress: 70,
    isLocked: false,
  },
  {
    imageUrl:
      "https://st4.depositphotos.com/4218696/38146/i/450/depositphotos_381466772-stock-photo-millennial-african-american-student-with.jpg",
    title: "Introduction to Node.js",
    videoCount: 8,
    duration: "1 hr 15 min",
    progress: 40,
    isLocked: true,
  },
  {
    imageUrl:
      "https://st4.depositphotos.com/4218696/38146/i/450/depositphotos_381466772-stock-photo-millennial-african-american-student-with.jpg",
    title: "JavaScript Basics",
    videoCount: 12,
    duration: "3 hrs 10 min",
    progress: 60,
    isLocked: false,
  },
  {
    imageUrl:
      "https://st4.depositphotos.com/4218696/38146/i/450/depositphotos_381466772-stock-photo-millennial-african-american-student-with.jpg",
    title: "Full Stack Development",
    videoCount: 15,
    duration: "4 hrs 5 min",
    progress: 85,
    isLocked: false,
  },
  {
    imageUrl:
      "https://st4.depositphotos.com/4218696/38146/i/450/depositphotos_381466772-stock-photo-millennial-african-american-student-with.jpg",
    title: "React Native Essentials",
    videoCount: 9,
    duration: "2 hrs 0 min",
    progress: 55,
    isLocked: true,
  },
  {
    imageUrl:
      "https://st4.depositphotos.com/4218696/38146/i/450/depositphotos_381466772-stock-photo-millennial-african-american-student-with.jpg",
    title: "Database Management",
    videoCount: 7,
    duration: "1 hr 30 min",
    progress: 45,
    isLocked: false,
  },
  {
    imageUrl:
      "https://st4.depositphotos.com/4218696/38146/i/450/depositphotos_381466772-stock-photo-millennial-african-american-student-with.jpg",
    title: "Cloud Computing Basics",
    videoCount: 11,
    duration: "2 hrs 50 min",
    progress: 75,
    isLocked: true,
  },
];
