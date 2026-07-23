import {
  Monitor,
  Smartphone,
  PenTool,
  Cloud,
  Brain,
  Briefcase,
} from "lucide-react";

export const servicesMenu = [
  {
    category: "Product Development",
    items: [
      {
        title: "Web Development",
        desc: "Modern websites & web apps",
        icon: Monitor,
        link: "/services#web-development",
      },

      {
        title: "Mobile Apps",
        desc: "Flutter & React Native",
        icon: Smartphone,
        link: "/services#mobile-app-development",
      },

      {
        title: "UI/UX Design",
        desc: "User-focused interfaces",
        icon: PenTool,
        link: "/services#ui-ux-design",
      },
    ],
  },

  {
    category: "Business Solutions",
    items: [
      {
        title: "AI Solutions",
        desc: "Automation & AI",
        icon: Brain,
        link: "/services#ai-solutions",
      },

      {
        title: "Cloud Solutions",
        desc: "AWS & Azure",
        icon: Cloud,
        link: "/services#cloud-solutions",
      },

      {
        title: "Digital Consulting",
        desc: "Technology Strategy",
        icon: Briefcase,
        link: "/services#digital-consulting",
      },
    ],
  },
];