import {
  AlertTriangle,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Check,
  ChevronLeft,
  ChevronRight,
  Copy,
  CreditCard,
  File,
  FileText,
  HelpCircle,
  Home,
  Image,
  Laptop,
  LayoutPanelLeft,
  LineChart,
  Loader2,
  LucideIcon,
  LucideProps,
  MessagesSquare,
  Moon,
  MoreVertical,
  Package,
  Plus,
  Search,
  Settings,
  SunMedium,
  Trash,
  Download,
  User,
  X,
} from "lucide-react";

export type Icon = LucideIcon;

export const Icons = {
  add: Plus,
  arrowRight: ArrowRight,
  arrowUpRight: ArrowUpRight,
  billing: CreditCard,
  bookOpen: BookOpen,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  check: Check,
  close: X,
  copy: Copy,
  dashboard: LayoutPanelLeft,
  ellipsis: MoreVertical,
  gitHub: ({ ...props }: LucideProps) => (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="github"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 496 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
      ></path>
    </svg>
  ),
  google: ({ ...props }: LucideProps) => (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="google"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 488 512"
      {...props}
    >
      <path
        d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
        fill="currentColor"
      />
    </svg>
  ),
  nextjs: ({ ...props }: LucideProps) => (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="nextjs"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 15 15"
      {...props}
    >
      <path
        fill="currentColor"
        d="m4.5 4.5l.405-.293A.5.5 0 0 0 4 4.5zm3 9.5A6.5 6.5 0 0 1 1 7.5H0A7.5 7.5 0 0 0 7.5 15zM14 7.5A6.5 6.5 0 0 1 7.5 14v1A7.5 7.5 0 0 0 15 7.5zM7.5 1A6.5 6.5 0 0 1 14 7.5h1A7.5 7.5 0 0 0 7.5 0zm0-1A7.5 7.5 0 0 0 0 7.5h1A6.5 6.5 0 0 1 7.5 1zM5 12V4.5H4V12zm-.905-7.207l6.5 9l.81-.586l-6.5-9zM10 4v6h1V4z"
      ></path>
    </svg>
  ),
  help: HelpCircle,
  home: Home,
  laptop: Laptop,
  lineChart: LineChart,
  logo: ({ ...props }: LucideProps) => (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs />
      <g id="SVGRepo_bgCarrier" strokeWidth={0} />
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        style={{
          fill: "rgb(84, 94, 238)",
        }}
        transform="matrix(0.078176, 0.000061, 0, 0.078176, -16.807842, -19.439854)"
        cx={522}
        cy={555.5}
        r={307}
      />
      <g
        id="g-1"
        strokeWidth={0}
        transform="matrix(1, 0, 0, 1, 26.402794, -3.000001)"
      />
      <g
        id="g-2"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="matrix(1, 0, 0, 1, 26.402794, -3.000001)"
      />
      <g id="SVGRepo_iconCarrier" transform="matrix(2, 0, 0, 2, -24, -30)">
        <path
          d="M28 20C25 20.1296 19 21.0889 19 23.8889C19 27.3889 29 26.6111 29 30.1111C29 32.9111 22.3333 33.8704 19 34"
          stroke="white"
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  ),
  media: Image,
  messages: MessagesSquare,
  moon: Moon,
  package: Package,
  page: File,
  post: FileText,
  search: Search,
  settings: Settings,
  spinner: Loader2,
  sun: SunMedium,
  trash: Trash,
  download: Download,
  twitter: ({ ...props }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="twitter"
      role="img"
      {...props}
    >
      <path
        d="M14.258 10.152L23.176 0h-2.113l-7.747 8.813L7.133 0H0l9.352 13.328L0 23.973h2.113l8.176-9.309 6.531 9.309h7.133zm-2.895 3.293l-.949-1.328L2.875 1.56h3.246l6.086 8.523.945 1.328 7.91 11.078h-3.246zm0 0"
        fill="currentColor"
      />
    </svg>
  ),
  user: User,
  warning: AlertTriangle,
  windows: ({ ...props }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
      {...props}
    >
      <path
        d="M224.8 389.3 95.6 370.8v-105h129.2zm0-142H95.6v-105l129.2-19.6zM416.4 417l-174.2-25.4V264.7h174.2zm0-169.7H243.3V120.4L416.4 95z"
        style={{
          fill: "#fff",
        }}
      />
    </svg>
  ),
  linux: ({ ...props }: LucideProps) => (
    <svg
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x={0}
      y={0}
      viewBox="0 0 512 512"
      xmlSpace="preserve"
      {...props}
    >
      <style>
        {"\n    .st3{fill-rule:evenodd;clip-rule:evenodd;fill:#fff}\n  "}
      </style>
      <g id="Linux">
        <path
          className="st3"
          d="M219.9 349.8c-20.1-1.4-36.2-7-43.3-11.7-4.3-3-10.3-1.8-13.3 2.5s-1.8 10.4 2.5 13.3c11.4 7.8 31.6 13.4 52.6 15 3.5.3 7.5.4 11.7.4 18.3 0 41.7-1.7 66.5-13.3 4.7-2.2 6.8-7.9 4.6-12.8-2.2-4.7-7.9-6.8-12.8-4.6-26.7 12.5-51.7 12.4-68.5 11.2"
        />
        <path
          className="st3"
          d="M383.9 318.7c.9-83.2 9.5-240.2-149.5-227.6-157 12.6-115.3 178.4-117.7 234-2.1 29.3-11.8 65.3-25.6 101.9h42.5c4.3-15.5 7.6-30.8 8.9-45.4 2.5 1.8 5.3 3.5 8.2 5.1 4.7 2.8 8.8 6.6 13.1 10.5 10.1 9.2 21.6 19.6 43.9 20.9 1.4.1 3 .1 4.5.1 22.6 0 38.1-9.9 50.6-17.9 5.9-3.8 11.2-7.1 15.9-8.7 13.8-4.3 25.8-11.3 34.8-20.1 1.4-1.4 2.8-2.8 3.9-4.2 5 18.4 11.8 39 19.5 59.7h90.7c-21.6-33.5-44.1-66.4-43.7-108.3m-212.1-90.3c17.6-1.1 33 20.1 34.6 47.2.1 1.4.1 2.9.1 4.3-5.5 1.4-10.5 3.4-15.1 5.8.1-.3.1-.4.1-.7-1.4-15.4-9.7-27.1-18.4-25.9-8.7 1.1-14.5 14.3-12.9 29.7.7 6.7 2.6 12.8 5.3 17.2-.7.5-2.5 2-4.7 3.5-1.7 1.2-3.7 2.6-6 4.5-6.6-8.5-11-20.9-11.8-34.8-1.7-27 11.3-49.8 28.8-50.8m112.3 151.1h-.1c-7.2 2.4-13.7 6.4-20.4 10.8-11.4 7.4-23.3 14.9-40.2 14.9-1.2 0-2.2 0-3.4-.1-15.6-.9-22.9-7.6-32.2-16-4.9-4.5-9.9-9.1-16.4-12.9l-.1-.1c-14.1-7.9-22.7-17.7-23.3-26.3-.3-4.2 1.6-8 5.7-11 8.8-6.6 14.6-10.9 18.5-13.7 4.3-3.2 5.7-4.1 6.6-5 .7-.7 1.4-1.3 2.2-2.1 8-7.8 21.4-20.9 42.1-20.9 12.6 0 26.6 4.9 41.4 14.5 7.1 4.6 13.1 6.7 20.9 9.5 5.3 1.8 11.3 3.9 19.3 7.4h.1c7.5 3 16.4 8.7 16 18-.7 14.1-19.4 27.5-36.7 33m32.4-66.9c-1.3-.7-2.9-1.3-4.5-2-7.2-3.2-13.1-5.3-17.9-7 2.6-5.3 4.3-11.7 4.5-18.8.4-17.2-8.3-31.2-19.3-31.3-11 0-20.4 13.9-20.8 31.2v1.7c-6.8-3.2-13.5-5.4-20.1-6.8 0-.7-.1-1.3-.1-2-.7-31.4 18.5-57.3 43-58 24.3-.7 44.7 24.2 45.2 55.6.3 14.2-3.5 27.3-10 37.4"
        />
      </g>
    </svg>
  ),
  apple: ({ ...props }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
      {...props}
    >
      <path
        d="M276.6 90.3c13.8-16.3 37.7-28.9 57.7-28.9 2.5 22.6-6.3 45.2-20.1 61.5s-36.4 28.9-57.7 27.6c-3.8-21.3 7.5-45.2 20.1-60.2m110.5 311.3c-16.3 23.8-32.6 47.7-59 47.7s-33.9-15.1-64-15.1-38.9 15.1-64 16.3c-25.1 1.3-45.2-25.1-61.5-49-33.9-47.7-59-136.8-25.1-195.8 17.6-30.1 47.7-47.7 80.3-49 25.1 0 49 17.6 64 17.6 15.1 0 43.9-21.3 74.1-17.6 12.6 0 47.7 5 71.5 38.9-1.3 1.3-42.7 25.1-41.4 74.1 0 59 51.5 77.8 52.7 79.1-1.3-1.2-8.8 26.4-27.6 52.8"
        style={{
          fill: "#fff",
        }}
      />
    </svg>
  ),
  discord: ({ ...props }: LucideProps) => (
    <svg
      width={800}
      height={800}
      viewBox="0 0.5 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#a)">
        <path
          d="M20.317 4.541a19.6 19.6 0 0 0-4.885-1.54.074.074 0 0 0-.079.038c-.21.381-.444.879-.608 1.27-1.845-.28-3.68-.28-5.487 0-.163-.4-.406-.889-.617-1.27a.08.08 0 0 0-.079-.038c-1.714.3-3.354.826-4.885 1.54a.07.07 0 0 0-.032.028C.533 9.293-.32 13.9.099 18.451a.08.08 0 0 0 .031.057 19.8 19.8 0 0 0 5.993 3.079.08.08 0 0 0 .084-.029c.462-.64.874-1.316 1.226-2.026a.08.08 0 0 0-.041-.107 13 13 0 0 1-1.872-.907.08.08 0 0 1-.008-.13q.19-.144.372-.296a.07.07 0 0 1 .078-.01c3.927 1.822 8.18 1.822 12.061 0a.07.07 0 0 1 .079.009q.18.151.372.297a.08.08 0 0 1-.006.13q-.895.531-1.873.906a.08.08 0 0 0-.041.108c.36.71.772 1.385 1.225 2.026a.075.075 0 0 0 .084.029 19.7 19.7 0 0 0 6.002-3.079.08.08 0 0 0 .032-.056c.5-5.26-.838-9.83-3.549-13.882a.06.06 0 0 0-.031-.029M8.02 15.681c-1.182 0-2.157-1.104-2.157-2.459s.956-2.458 2.157-2.458c1.21 0 2.176 1.113 2.157 2.458 0 1.355-.956 2.458-2.157 2.458m7.975 0c-1.183 0-2.157-1.104-2.157-2.459s.955-2.458 2.157-2.458c1.21 0 2.176 1.113 2.157 2.458 0 1.355-.946 2.458-2.157 2.458"
          fill="#fff"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  )
};
