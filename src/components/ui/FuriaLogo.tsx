
import { cn } from "@/lib/utils";

interface FuriaLogoProps {
  className?: string;
}

export default function FuriaLogo({ className }: FuriaLogoProps) {
  return (
    <svg 
      className={cn("h-6 w-6", className)} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M50 5C25.147 5 5 25.147 5 50C5 74.853 25.147 95 50 95C74.853 95 95 74.853 95 50C95 25.147 74.853 5 50 5Z"
        fill="#000000"
        stroke="#33C3F0"
        strokeWidth="5"
      />
      <path
        d="M25 35H75V40H65V70H55V40H45V70H35V40H25V35Z"
        fill="#33C3F0"
      />
    </svg>
  );
}
