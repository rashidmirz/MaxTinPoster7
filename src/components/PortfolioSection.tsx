import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Sparkles } from "lucide-react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import { AnimatedSection } from "./AnimatedSection";
import { Button } from "./ui/button";

const projects = [
  {
    id: 1,
    title: "Corporate Signage Installation",
    category: "Signage",
    client: "Tech Corporation",
    description: "Large-scale outdoor signage with LED illumination for corporate headquarters.",
    services: ["ACP Signage", "LED Installation"],
    image: "https://i.pinimg.com/1200x/6f/a8/2e/6fa82eca5b62d80fb7b0e4eda38cb083.jpg",
  },
    {
    id: 1,
    title: "Corporate Signage Installation",
    category: "Signage",
    client: "Tech Corporation",
    description: "Large-scale outdoor signage with LED illumination for corporate headquarters.",
    services: ["ACP Signage", "LED Installation"],
    image: "https://i.pinimg.com/1200x/c3/4a/eb/c34aeb5061182e1c11a7ba9072b940ae.jpg",
  },
    {
    id: 1,
    title: "Corporate Signage Installation",
    category: "Signage",
    client: "Tech Corporation",
    description: "Large-scale outdoor signage with LED illumination for corporate headquarters.",
    services: ["ACP Signage", "LED Installation"],
    image: "https://i.pinimg.com/736x/68/ca/c9/68cac9bd624da82cf9659c8fff5b1043.jpg",
  },
    {
    id: 1,
    title: "Corporate Signage Installation",
    category: "Signage",
    client: "Tech Corporation",
    description: "Large-scale outdoor signage with LED illumination for corporate headquarters.",
    services: ["ACP Signage", "LED Installation"],
    image: "https://i.pinimg.com/1200x/57/7b/05/577b0523b8fbc2cb1fbd1b808ef514cb.jpg",
  },
    {
    id: 1,
    title: "Corporate Signage Installation",
    category: "Signage",
    client: "Tech Corporation",
    description: "Large-scale outdoor signage with LED illumination for corporate headquarters.",
    services: ["ACP Signage", "LED Installation"],
    image: "https://i.pinimg.com/1200x/1f/ad/2a/1fad2a4a8e34b3662a1dcd537bcb55dd.jpg",
  },
    {
    id: 1,
    title: "Corporate Signage Installation",
    category: "Signage",
    client: "Tech Corporation",
    description: "Large-scale outdoor signage with LED illumination for corporate headquarters.",
    services: ["ACP Signage", "LED Installation"],
    image: "https://i.pinimg.com/1200x/85/94/da/8594da2e014a39cc556342c006716119.jpg",
  },
    {
    id: 1,
    title: "Corporate Signage Installation",
    category: "Signage",
    client: "Tech Corporation",
    description: "Large-scale outdoor signage with LED illumination for corporate headquarters.",
    services: ["ACP Signage", "LED Installation"],
    image: "https://i.pinimg.com/1200x/b8/59/f5/b859f50b42629b616562f8e2650141a1.jpg",
  },
    {
    id: 1,
    title: "Corporate Signage Installation",
    category: "Signage",
    client: "Tech Corporation",
    description: "Large-scale outdoor signage with LED illumination for corporate headquarters.",
    services: ["ACP Signage", "LED Installation"],
    image: "https://i.pinimg.com/1200x/75/ca/bb/75cabb0b7c14aab12a03cc779c0c6ee7.jpg",
  },
    {
    id: 1,
    title: "Corporate Signage Installation",
    category: "Signage",
    client: "Tech Corporation",
    description: "Large-scale outdoor signage with LED illumination for corporate headquarters.",
    services: ["ACP Signage", "LED Installation"],
    image: "https://i.pinimg.com/736x/c9/7a/06/c97a067692d881da53f1896ef2e455d9.jpg",
  },
    {
    id: 1,
    title: "Corporate Signage Installation",
    category: "Signage",
    client: "Tech Corporation",
    description: "Large-scale outdoor signage with LED illumination for corporate headquarters.",
    services: ["ACP Signage", "LED Installation"],
    image: "https://i.pinimg.com/736x/4e/27/47/4e2747a33e0f17f3268329c47984c50e.jpg",
  },
    {
    id: 1,
    title: "Corporate Signage Installation",
    category: "Signage",
    client: "Tech Corporation",
    description: "Large-scale outdoor signage with LED illumination for corporate headquarters.",
    services: ["ACP Signage", "LED Installation"],
    image: "https://i.pinimg.com/736x/ea/a0/a1/eaa0a155edd452be3c77d33871450001.jpg",
  },
  {
    id: 1,
    title: "Corporate Signage Installation",
    category: "Signage",
    client: "Tech Corporation",
    description: "Large-scale outdoor signage with LED illumination for corporate headquarters.",
    services: ["ACP Signage", "LED Installation"],
    image: "https://i.pinimg.com/736x/81/40/e2/8140e21f97ca7f66148cac0f10a68038.jpg",
  },
    {
    id: 1,
    title: "Corporate Signage Installation",
    category: "Signage",
    client: "Tech Corporation",
    description: "Large-scale outdoor signage with LED illumination for corporate headquarters.",
    services: ["ACP Signage", "LED Installation"],
    image: "https://i.pinimg.com/736x/a1/f7/b7/a1f7b76223c5607832d3038156231596.jpg",
  },
  {
    id: 1,
    title: "Corporate Signage Installation",
    category: "Signage",
    client: "Tech Corporation",
    description: "Large-scale outdoor signage with LED illumination for corporate headquarters.",
    services: ["ACP Signage", "LED Installation"],
    image: "https://images.pexels.com/photos/2460434/pexels-photo-2460434.jpeg",
  },
    {
    id: 1,
    title: "Corporate Signage Installation",
    category: "Signage",
    client: "Tech Corporation",
    description: "Large-scale outdoor signage with LED illumination for corporate headquarters.",
    services: ["ACP Signage", "LED Installation"],
    image: "https://images.pexels.com/photos/29140704/pexels-photo-29140704.jpeg",
  },
    {
    id: 1,
    title: "Corporate Signage Installation",
    category: "Signage",
    client: "Tech Corporation",
    description: "Large-scale outdoor signage with LED illumination for corporate headquarters.",
    services: ["ACP Signage", "LED Installation"],
    image: "https://images.pexels.com/photos/14319764/pexels-photo-14319764.jpeg",
  },
    {
    id: 1,
    title: "Corporate Signage Installation",
    category: "Signage",
    client: "Tech Corporation",
    description: "Large-scale outdoor signage with LED illumination for corporate headquarters.",
    services: ["ACP Signage", "LED Installation"],
    image: "https://i.pinimg.com/1200x/58/6e/e7/586ee7e0f86c034b1fb14c5c42ff3ab5.jpg",
  },
    {
    id: 1,
    title: "Corporate Signage Installation",
    category: "Signage",
    client: "Tech Corporation",
    description: "Large-scale outdoor signage with LED illumination for corporate headquarters.",
    services: ["ACP Signage", "LED Installation"],
    image: "https://i.pinimg.com/1200x/15/d8/db/15d8db4c86884489a12695e92b52941c.jpg",
  },
    {
    id: 1,
    title: "Corporate Signage Installation",
    category: "Signage",
    client: "Tech Corporation",
    description: "Large-scale outdoor signage with LED illumination for corporate headquarters.",
    services: ["ACP Signage", "LED Installation"],
    image: "https://i.pinimg.com/736x/fc/ed/6b/fced6b0a886ab0bbd2c9f5c3a5eee02a.jpg",
  },
    {
    id: 1,
    title: "Corporate Signage Installation",
    category: "Signage",
    client: "Tech Corporation",
    description: "Large-scale outdoor signage with LED illumination for corporate headquarters.",
    services: ["ACP Signage", "LED Installation"],
    image: "https://i.pinimg.com/736x/bd/5a/87/bd5a879d4de385a94ac3f12fba75aadb.jpg",
  },
    {
    id: 1,
    title: "Corporate Signage Installation",
    category: "Signage",
    client: "Tech Corporation",
    description: "Large-scale outdoor signage with LED illumination for corporate headquarters.",
    services: ["ACP Signage", "LED Installation"],
    image: "https://i.pinimg.com/736x/fd/2b/64/fd2b645551b7136b0eca39961784b18e.jpg",
  },
    {
    id: 1,
    title: "Corporate Signage Installation",
    category: "Signage",
    client: "Tech Corporation",
    description: "Large-scale outdoor signage with LED illumination for corporate headquarters.",
    services: ["ACP Signage", "LED Installation"],
    image: "https://i.pinimg.com/736x/a0/1c/67/a01c6710febc033cd2c3ef82443d9210.jpg",
  },
  {
    id: 2,
    title: "Retail Channel Letters",
    category: "Channel Letters",
    client: "Fashion Outlet",
    description: "3D acrylic channel letters with front-lit LED modules.",
    services: ["Channel Letters", "LED Lighting"],
    image: "https://i.pinimg.com/736x/cc/f8/83/ccf8837ae3990e0bea87801e96980c0c.jpg",
  },
  {
    id: 3,
    title: "Highway Hoarding Campaign",
    category: "Hoardings",
    client: "Beverage Brand",
    description: "Large format flex banner printing for highway visibility.",
    services: ["Flex Printing", "Installation"],
    image: "https://i.pinimg.com/1200x/6f/95/21/6f9521b07e7bc56379de3734c6cb845e.jpg",
  },
  {
    id: 4,
    title: "Office Wall Mural",
    category: "Wall Murals",
    client: "Startup Hub",
    description: "Custom designed wall mural for creative workspace.",
    services: ["Wall Painting", "Design"],
    image: "https://i.pinimg.com/736x/92/29/32/9229322e274193cb2cf50389d9ed4eda.jpg",
  },
  {
    id: 5,
    title: "Digital Signage Display",
    category: "Digital Signage",
    client: "Local Business",
    description: "Interactive digital signage for retail environment.",
    services: ["Digital Displays", "Installation"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrV4GBfrG7Ayeu2z_RYhqdIGN83C6Pshy27g&s",
  },
  {
    id: 6,
    title: "Shopping Mall Wayfinding",
    category: "Signage",
    client: "Mall Management",
    description: "Complete wayfinding signage system with illuminated directories.",
    services: ["Signage", "Installation"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVfokl64ZiprNScjwKPWShcN1qeuCEQ4Sjww&s",
  },
  {
    id: 7,
    title: "Bank Branch Letters",
    category: "Channel Letters",
    client: "National Bank",
    description: "Premium stainless steel channel letters with halo lighting.",
    services: ["Metal Fabrication", "LED"],
    image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUTExIWFRUXFhcYGBgXFhoaHRcWGBcYFxYXFxgYHikgGRolGxcVITEiJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGxAQGy8lICUtLS0tLS8tLS8tLy0tLS0tLS0tLS0tLS0tLS0tLy0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKMBNAMBEQACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAAIDBQYBBwj/xABKEAACAQIEAgcEBgUICgMBAAABAgMAEQQSITEFQQYTIlFhcYEykaGxByNCUsHRFGJygvAVJDODkqKy0kNEVHOTwsPT4fEWU7Nj/8QAGwEAAgMBAQEAAAAAAAAAAAAAAAIBAwQFBgf/xAA4EQACAQIEAQkHBAICAwAAAAAAAQIDEQQSITFBBRMiUWFxgZGhFDJSscHR8BVC4fEjM2KiBiSy/9oADAMBAAIRAxEAPwD3GgCKeBX3HkQbEeRGo9KAAcPjCk3USm7FS0T6DrFHtKQNA63F7aEG+moABZ0AKgBooAdQA0b0AOoAGxUNxcbj5UAV3W/qt7qAGSTtcZQba3uhNt7bb3IAt/4oAlwryM1ithr9kjUMbb8rWoAtwKAO0ANZAdxQAzKw2N/A/nQB1JQdNj3GgCSgBUAKgBUAKgBUAKgBUAKgBUAKgBUAKgBUAKgBUAcJoAGxXEoYwWkmjQAhSWdVAY6hSSdDblUqLeyAbDxXDtJ1SzxtJr2A6ltApPZBvoHQ/vDvoyu17AAcL6QCfFTQxhWjiRD1ge5Ll5EZMttADGwvfcEUzhaKbAu6QBp0oAQNAGY6VSH9KwKr/SdcTpyj0D+9b+40Aai9AHCaAOgUAdoAaaAHUAcoAjMK91AHP0cUAPjjtQA+gBUAKgBUAMkjB/OgCJJSDZvfQARQAqAFQAqAFQAqAFQAqAFQAqAFQAqAFQAqAOE0AZT6U9eFYv8A3d/cymrsP/tj3gYDp9w8YTFROmGVoGjBUlWYGY5uuZyAc0zgRdptSFO+tFSk8Rh5U1Nxlwadu7w3HpUozqRzzyxV29N9NEd4VgXiwcsqZcLiI8a0mHEugMbQRRSADmmUsLDQZbcqaMssYRqPN0UpPrfX5hK2Z22Nx0JwcaYnEGE5oVw+DiR73zFBOzk8y31iknvY+NJOeaK67v6CGyqoBo1oArYcdFHA8xkvGpbU8rG1h3knbvuO+gCl6M4eSeR+ISrYsCsCH7Ka2PrtfxY8xUgB/SJOyYBwrlWV4yMrnMAWVSGYW++NPGtnJ6TxEVJXWvyM2LbVJtHlo4tiMhYYiYEBQbSuLWIF9Duez59qu/7PSzWcV5fn5Y5HPTcb3f5+fMiXj2MG2LxH/Hk/zU3stH4F5Ce0VfifmSr0nxw/1yf/AIrn5ml9jofAhvaqvxMO4f0p4gzhBiZmJvoCWOgvcC3cDVVTB4eMbuKLKeJrSdsxbYvinF4VdnxTDJKkZHYb20MiuDlsVyjfxFUwo4ObSjHdN8eDtbcsnVxME25bOwCenPEAdMU3qkR/5KuXJ2He8fVmeWOrLZ/InTp7xH/aL/1cX+Sj9Lw/U/Mj9SrrivIJTp/jwNZVPnGn4ClfJNDt8w/VK/Z5EyfSFj/vResf5NR+kUOt/ngR+r1upEy/SHjv/wCB/q2/CSo/R6PW/Qj9Zq/CiZfpExnNYD/Vv/3KV8jU/iZK5bqcYLzJR9I2J5xwn0cf81L+iw+N+Q365L4PX+B4+kqcb4eM+TMPwpXyKvj9P5HXLf8Aw9f4Oj6T5f8AZEP9cR/06V8i/wDP0H/WV8Hqcl+k5iNcGvpOf+1SvkWXCa8hlyxB7xY3DfSso0bCt6Sg2/uCk/R6nxIu/U6fUwwfSnFzw0noyH52qHyPV60QuVaXUxw+lbDc8PP6dWf+el/Sa3Wh/wBSpdo9fpWwfOHED92P/uVH6VX7PMZco0e0kX6UsDzSceaL+D0j5MxHUvMZY+j1ky/Sbw8/alH9WfwqP03EdXqT7dR6yVfpI4d/9rj+pk/BaX9OxHw/In26h8RKv0h8NP8Ap2H9TN/kqP0/EfCHt1D4iVenfDj/AKwPWOQfNaV4LEL9jGWMoP8AciVemnDz/rUfrcfMUvslb4WN7TR+JEg6XYD/AGuH1cD51Hs1b4X5E+0UviQ9elOAP+uYf/jJ+dLzFT4X5Dc9T+JEy9IMGdsXAfKZPzpean1PyJVSD4omXi2HO08R8pF/OoyS6ic0esf+lRnaRP7Q/OoyvqJzLrAOMwCWJkzKQbXDAMpAYGzLfUG21GqC6MynRZ7JmlZrEkHnqbgltSbcu6gkPg6Kp1SxkEqCbA3NrkGwvsNBQBe8L4WsNwgsDbbnYWqALKgDg5/xyFAGC4/gYkxAgLMYnaOZ4wSLAuUuDzG49R4ESBaca4mJAseGKlo3BCge00MigxrysPaPgBbe4gDOcfgMnDcQwvlVYzc7m0ikX8cgjv8As1rwLtiId5nxSvRl3HmtxGtioYtuDewGoA0I1vf+LGvS2zu5xPcVuJYcF6PzYs/U4d7c3zAIPVxqb8r3qqtiYUfeku7j6fYsp0HV2X2J+C9EJsTG8sbKqRkq3WWU5gL5QATzsNbb86WtjYUpKMlq+r8RNPCyqJtPbrLroXgVDYHExgFlmxET2J7bGF5ItDsbEj3d1ZsZUbVSnLaya7NUmaMNTSyTW+qZbdPHZMJNGwF1xMYRtL9U6PIim22TM6DwUVRgUpVotcYu/fs/PcfFu1KS7UearXeOIyaMUCEuapQj1JVqStki1IjJFoFZ2pIGNUDIjagdDDUDAWJXXzpWaIPQ6huN6CHucaglDDUDDbUEj1WghslWOpK8xPHFU2K5TJVgNAua4ZgeDzTEiKNnIFzlG3meVVVK1OmrzdiynSqVHaCuRjCHa1qsuVMM4bwhpXCLa5va5tsCbeelVV60aMHN8B6FKVaoqa3ZrF+jViobr1BIBsYzpp35vwrl/rMb+56/wdb9Glb3/T+TK8b6Pth5OrkCMSoYFdQVN7HUeBrpYavCvDPFHLxNKph55JPt0KmXCL91fcKvyrqKlVl1gzYNfuj3CocI9Raq0utjDFbbTypHSh1ItVafWxCeQbSOPJ2HyNK6FP4V5Fqrz+JnpH0MSyOuIZ3d/rFUZmLWCqx0uf1xXnuUElNJLrO5gm3Fts9Nrnm04Of8cqAMzxPChuIRuT2WjETeDpIJkUnYFsu3cPEUAVnFuCPBjI2w+omctkOySJ281+Sm5B8Cw5gVIFt0jwSxcMnjW9kw7m43JVcxPgdPSrcN/uj3r5ldb/XLuZ4E7Em/8eA8q9elZHm27u5s+g/HZ1hxGHBuixSTRix1ljtJ1ZI3R1RwV5jN3mubjaEHONTi2k+56X8Os34SrLK4cNzUcVjbEST4d4ElR8OkuGSE5WyiTLGZGJAGUylu62bfasFJqnGNSMmmm1K/drbyNc1ncoNX0urFN0BmTDxYgYp1jEGIRrMbsJQrxyKqjUkrpceNascnUnHm1fMvTRoz4VqEJZ3azC+J8FmliigUoIXMJRmD9c0MXYDsLZAyxzDskgkJew1ArpV4U5Sm75teq13w691v2jVaMpxUeGnfZenEoOlHRtcLGoGrpNJFI+vbuiSwkLc5ewxGnMGtuFxTrTfU0ml1atP1MWJw6pQVuDs/mjPKe4V0DnslQ0yK2SipELOLg2IaHr1iYxa3cWNrGxJAN7Cx5VQ8TSVTm3LpdRZ7NVdPnFHonE4dMQhETkPfJZCc1tTlsNbWNPz9NNpyWm+uxXzFSyeV67dpF1L5c2Rstr5sptYGxN7WtfSnzxva6uV83O2azsQtUgiJqB0RmoGBcVypWXUyGE61CLJbEhFSKhjVAyOKtBLYRElSVSYXDH4VNiiUg+DDXobKtXqaLh3RSWSIyrlsORazEd/cPUiudV5QpU55H/COnQ5Pq1KfOJaer7jddGcNCIx1OdLXDKwKkm+jMDu2lsw0NjuLW87Xqzqzcp7npKFKFKCjDb83MzxvhueeRwoF2Ps7HU6+ZFr+N67WDruFFKX4jgY+EZVm4fj4kWHwZhV5MoJVGy3NhfQanyJHrSY6vmp2XWieTaSVa76mbrFY0rB1lrNkBtvYm2l+dia4h6M886TRM7qzCzlBm97Fdv1Svur0PJU7UbPrZ5jldL2jTeyv6mbmw1dVO5yrWApY6YmMgeRKguTBZFpS6LN39FeLaLCOy2u0zb92RB8xXlsa71fA9Hg9IeJtP/kEv3U9x/OsljXcvWwYP2n8s7fMG/xpRjk2GBjyBVA7soK731FAD4oVXUC7Wtm1Jt3XOoHhQAJ0ghz4TEL96CVfejCnpu00+1CzV4tHzeDXsjzBuPo34lCgnSXNm0ljyxs5JCSRsLKDbsyW/erl8pU5PLJbbO7S4p8e46OBktY8d1ZXJlxU2Iww/Roxhci9VJIHPXTyQYbN1TkWIUpGbXvqnLWlywpVP8jzX1S4JN7+Y+aVSHQ04drsti6w/AMJh8PIDCHH6Os7yOM7uhV88SWH1ZUiI5hycE6i9ZpYirVqLpW1sktEtrN9fEtVGnCDVuFzP9COJumHmjAuwmwzX+4jOscp8sqovkfCteNpRdSMuyXmldGbC1Hla7V9jV9IXwc8LpPKYVjlZcxIZzJAzKQF5kpKLWB0Ou1YsMq1KonBXbXhZ/yjRXdKpBqbsk/HQ8rawJsbi5sSLEi+htyNejV7anAla+g+OpK5Eq1JWz0Xo0v8zifP7KYwdVfWW4GgF7G1r+tcLFv/ANiStu4a9X9ndwn+iLvsp6df9BmBlyxYAD/Rvh7+AxMci/MiqqivOt25v+rTHpytCl2Zf+yYNJH1eGkh+5g5D/axDf5asjLPWjU65r0ihHFQoyp9UH/9M5wSEPw+BNz+lI3p16I3/wClTip5MXN/8Wv+rf0IwsVLCQX/ACX/ANW+odHDE3EZ5HRWTqoFAKgi8zIqmx5/nWeUprCQinreT8kaFGDxMpNaWivNlV0dwMAhjjlw0cpkxckDMy9pQFJuGtcWy/OtOKq1HUcozatBStwKcNShGmoyineTRXsMEuEld8GrmCURZusIL62DkgaHwqZOu60IqpbMr7bdgQ5lUpPJ7rt39p55HuK7BznsTVJWMNQMhKaAYbhzTIzz0LbCRVL0Mcndmr4Xw8OhYWAzDkeyVubBjdgCOYN73FudcbE4nJVUH1PxvptorrqfedfC4dVKTqLg14W1eurs9LNcdLGx4NLIEYEKwBspsB2TsG119wrjVopVNXvr+fQ71Cs5UrxV7afn1D8Ngwq2tbwGg7thpSyndk06Ly9J77nWwK8qFWYssHHgBYzAhmRLe0bn9lLN8TlHrUSq30Go4bLJyDuKxkwuoFyRoKrNZjeNYewW+/Vr8Lr+Fdnk+fQt2nm+VY2rX60jM4qOuxCRxpK5XTxVoTuU3sAzrQzRBgGIGhPgaSWxopvVI2fQUWwMfi0h/vlfwrymK/2vwPUYb3EX2as5eegUhYKgDi/n86AI8REGVh3gj3i1AHzMgUrexBAFxv6gnUC/nXsk2eaaV2W/DeHvKoiiR3ZpDcLa2irkLNbRRmc3NtzXmOX885042urPzPe/+G1aGHp1602k1l1e9tduu5v8IMNhpmjLlxHHA0rL2ryIRDKxuRp1eJUNzAXYnSno06nMRj3pX816xdjh4yvCriqlVKybvZfnU9RvHOka4MNECgmhRE0OZnLwKbkH7IkiQMo+yQd9Doo4V1mpO9nd+T+z07THVrqndcV9vuefy8ZKzyS4UHDiRMrILEAMFMircaLmBI7tNq7EaF4KNXpW/F6HLlVtJyp6XAGcsSxJJJuSTcknUkk7mtCSSsjNJ33JFpitkq1JWyVaBWajgfSGOJYFZWPVtOSVtqJY8osCRsa5+Iwc6kpyi1ql6M3UMZCnGEWnpf1RZS9Ko2jaMCyouGMXY7RaJkLBiL6aG1UR5PmpKXF5r66ap2LpcoQcXHZLLbTXS1yXi3HMPJLimRxkbCdWlwRmfNmygEXvcmloYWrTp01Jaqd33WGrYulOdRxejhZd9x/RTicSQRhnW6riTlLAEEGKRDa990Nu+1LjqE51ZNJ/t+qY2ArQjSim1+76NBz4iCPPLKzZWbAqOrKk5416xb30y3tfyqjJUlaEOGd69T0/o1OVON5y45Fp1rUJhmeBxGpssnEZFcWGqSR57eG4OndVUoxqxzPhTVu9OxanKm8q4zd+5q5hcQgXA49R7K4tFHkGsK6Lk5Ymk38P0MUYKNCol8RkIBreumjnyY8ipFuMNQMJDQDD8KutMjNNl5hEqJOyMNV6m16IMUk12YWIHvGlcLlOMZQzcUdzkWpKNXLfR/PgbDG4pEU5iBoSL87chrv4XrzVfE06fRm7O1z1tOlKb6KMnD00VcR1IBkuuYLHmdl7je2osNbd/gapp4vW+8WbZ4J5ddGuvT+vEvui3GVxcPXopEbMwRiQS4VmUm1tFuDa/j67YNvdGGpFLRO55x9JXGpf5UhiikdOqEd8jspuxztex1GXLpWevu31I7XJ1GLpJSV8z9F+MCXpZiwz/wA4ktc7kEad1Y3WqKSWY7L5LwkoN5Pn9y54BxR8TAzuczK7J+7YMP8AEa9JyVN5Wpfmh8z/APJKMaddZFpZ+jFiIu+u9CR5mWxUYkAVsg2ZW1crpqdl1NFZj9Eb9k/Kq6vuPuNdDWaNr0XXLg4B+oT/AGmLfjXk8Q71ZHq6KtTQzGdKMLGxRpdRvlUsAe66i16iOHqSV0glXhF2bPXazmkVAHFoA7QB4L0g6FYvCnOyq6FiBka+mu4IFtK9FS5SouKi7rTqONUwNRSclYoOv6slXW6mwZTcar7JBGzAHx3Nwb1b7RQqbTsyvmasN43QjxI7RHq1KGPKGvdWN2DHmSbX22A0AFXQjTa3T1uVzlNbJrgQyNc3JJPf3+N6vSsihu7EtMKyVKCtkimpEZKtSIyZRUiMezWFSKldigk76hMicSdjTFaGkVBJEaBzsmOkWxEjgg5lsxFmtbMO4251W6cOpdWxohOd92BPj5croZGKu2Zxe+ZhrmN9zfnVfNQzKVtVojSqk8rjfR7jFWwq0obuyGSWx8qhssjG6EGB2oC1iSMUCyLHCimRmmy8wKg2pKjsYZK8jR4bMsbMjZXCkg/dtudfC9cDlabWHm11M7vIMIvHUlJXTktCgxPFpXb+lZ7DMcx7I5DOzMAAbbHQ9xrw8Kc6iblr32+p9alQoU5KMY6vZK9/TU6/CUxCjEKgV7lXySKcwGtsyFsot9nyt3UVJ1KMUtEuy1r93WUZKcajjPMm1xTT7nfddvmbP6McCkEU0MTMYVlBUM2bIzLd1Bte3snXmx766uBxEq0M0jg43DRoSST3Rh+FOmI4lPiWF80s/VsRfKkShVcA6ZiCgB5ZD306d5+Z2qdC2Hv8KirdstXf7do7otw+XF4nq2Z2iuWmzEkZNdNdmJ0BGo1I2qqnFzlqdjlSrRwuFzJJSatG2jv4cEt+HB7hvQrAdRPj8LmzdXIpB5le1YnxylL+NdbBNwm4vsPmfLdq1OFVcb/Qs8YnhXeps8lNFJiUrdBmWSKzECrhqbKbix+rb0+JFU13amzoYZf5EeicE4C0uGiPWoqph4sytfcrck20t4MGX9U15h1Kacsyd7vVM9Jzda6cJK1lo19TK4zorE7sQtrEgiOaKAXBI1jlU2O2qWU6EKhuq6Xz8NErre9rlMauGqXbdns1e2p7teuUdQVACWgCs410hw2FF5pAGtog1c+Sjl4mw8atp0Z1PdRXOrGG7PJOnPTafFDq4h1MQ5g9s8tWHs+S6+Jro0cHGPvasxVMVJ+7ojzWTDd3Ik3O9zvVzw0WVrEMjMcg2c1U8KixYliiWe9l7R8F/wAtRzU4bSa8RlUjPRxv4BCnFD/QufIN+N6hYmtHap6ol4aEt6fozn8rOpsyEEbgj/1VyxuIW9mUSwdB9aJ048vNfgR8r1auU5r3oepTLk2L92foFR8dj/gj8bVdHlSnxi0US5LqcJINi4pEftfAn5VdHlDDv91vBmeXJ2IXC/iidsXG20i+pt86vWIoy2kvMo9mrQ3g/IdGb7EHy1q1NPYqkrbhqLYWpzO3dnDUEkUhtQPFXAZnub0jZpjGw2JLm9CGk7KxI1SKgQxhtaS1y7M46DI2A0oQzTYRG1SVNB0D0yM80WuBmINEldGWaszQSyscNPbfqZbac8jW0rhcqxisPO/UdbkNy9vpZfiKPpRhmSWOIakoGyqL5nYkEgDUmwC/u+deLSSgkj7dyVOMqU6suuzb4JdvVrfxNJw/ga4PBSNiezNickaJftKCwtax9oXzHl2QO+/Rw2B52ElJcG+6y+Z5jlzluM60FSfRi9P+Tb18LAX0W8ZYcKx+MbRusdh3XXDxBAPXKKmEVTg0uBzlevWinxf1+xnPo/xC5ZAyu5jvlVcoLLIBoCb6goTsSc+m1WYajTqVFGc1HvN2O5Qr4ajOVKnn6Sbtw0etuK228dDTYbpc8UbQ4TCpBuWYkuR3u7MAAR3toLV34clYegs1SenkeQxHLeMx1SyjeT067dy2RUdBeKhuI4kgkq8QFz9ox9UmbXXWzHXXWuZCaq4mUktHf6W9DRjqUsPgIQk9YtX8U7+psMfMDfSuvSi0eVqVLmexjjuro00zJKSZVTWrSRHfQouOt9WfMfO/4VnxHuHTwn+w9Oi6Q4aCJ4HVw9lBYKCtlRWA3v8Aa7tya8RVrqMrM95h+T6tWlzkbW+wDioFZiQNDqPI6ivU0p3gn2HhK0LVJLtZ6navNnryl410pwuGuHkzOPsJ2m9RsvqRV1PD1KmyKqleEN2YHjf0gYiW6wjqU7wbuf3vs+mvjW+ngoR1lqYp4uUvd0MhJISSTqTqSbkk95J1JrWlbQzXBcULiniQwFcAW7Xsre2Y8z3KPtH5aXIpK+Jp0VeT8OJowmCrYqVqa73wRIsEa7LfxfX+7sPW/nXGrcpVJe7ovU9RhuQaMFep0n5INw/DJ5hZI5HHgpy+/wBkVk/yVHrdm9vD4dW6MfL+yzi6DyBc+IeOBBvcgny+6PeauhhZS3MFblalH3E36L7lJ0qjw4MccJZsgYM77m5Fl8LWOltM3feuzhcPkhZnmsZiueqZrJPsM+2GFaHSRlVRkTYId1I6ERlWZE3Dx3VW8KmOsQ0IYRxs5Gl/aNUzwyWiLo4i+4Rh8Q67IjeLi594IpVhZLVMZ4iL0aC04yw3iI/ZlYfA6U69ojtNlThhp7wXkTpx5eZlX0Rh796dYvFR438Ct4LCS4W8WNfjyE2Eq2/WRl+O1OuU6y96KF/SqX7ZP0JIMaHNlMZ8pB8iKsjypH90WK+TJLaXoWGZgPYa3hY/I1fHlOg97rwM0uTayfB+JDNKLHceYI/CrljKEtpIr9krResQRZATowv4EVapxlsyXCUd0PaDxprCqZKpA0qRXdk0T1JVJFrg5akyTjqXkmMtBKL2+rYad5UgfEiuPyvT/wDWn+cTochz/wDfpd7+TLHpB1hzmPrs5YW6mQKQtmVmNyMwZl9m41XS1zfyXJtedCo+gpRfXuu497yjhY1qSjzji11Xs+9baLxMTjswDNeW7K6maS3ZFiJFUBmu9g66t2TcWzWI6uK5SqTp5KdOy47HLwfJVGNXPVq36tH+fQsMDOsHR6VY2zCfGsqnvChW/wCjb1rnNtw6SszsYWEI4luDuknZ+n1DeBjBxwzkMhAIVSucZ8qD+lZ2VCcxYgqwGu40AprKEpKL/O824Z1owzxXHXb00fjdEaYCNuz18jRP21LTI1h1pjCLD7THKpIa9jppa9RVSutfzuNWFrySlJRWbZrLbhe7l37ry1A+D4dMPxCJFYXkjlv2s2uZsoJ017H3VPeL108E7VI3/NDyHL/+ShVa7H6rv+bNZipSK9NCKZ89lNopcTLW2EbFcdWVU8lObIRKniIz5E+9Io99x+NZMZK1M6OCj/k/Os3vFcXh0kZplZ7RuAnZCHNcFm7WZrcgF3G9eRjSpSeec0uzW/yPdrGYqOG9noUXrrn0tbz07b69gXwaVWw0BN79THfzCgH412cLn5mPceMx/NrETXayp410vxc5KmTq01GWPs6eLe0ffbwop4anDW1+83VMROWl7dxnbVoKBKpJsASTsBqT5AUNgFR8NkL9XoHvbKWF79zAar+9a1I6iSvwHUG3YFxPD5Rm+rfs3v2SbAbm45eO1PGcesVxfUR43GFiDFJEqhVAjkjjulhqMzoQwLXN73ObUVTLDQk7zjd9ZspY6pTjkpzcV1CwvHMVH7MkCeIhw/8AyR3qFhaa2iNLGVJe9NvxuEydLcafaxbHwjijH94oCPcasWHj1GeVcqMVxCRzmLMW+87l39Gb2f3QtXRpxRRKrJgBSrCs4VqSBhWjQBR2N7g+HK/jVbcpPo6Lr+w/Ritd+oZIthTRpxgtAdRzd2Rx2qbA7kxiFGVCZgfEINqRxRbCT3BDhh3UjpIuVRhWH4OzWCxs5N7BVJJtvaw1tSOlFbkc9J7DVwLAFlDBQbFluADvYkaX8KR4eL0GVeW45MROugmf1Ob/ABXqt4VFixDHniMw9rI/7SD8LVW8LYZYi4v5TN7GBPEqxX86FCrH3ZMlzpS1aHR8Tjvqkq+RDf4qZV8TH9wro4eS2C04hF/9pH7UZ+a1asfiFukyp4Kg9mwyDGj7MkTeGbL871bHlRr3oFE+Soy2l6FxheJ29uIsvPKVa48iReoxGOo16Uqck1dFNDk2vh68K0Gnld7dfWvFEXSTibyMZVkkA26pRIrEG+cAqMqg3P2r615enhKiT27Nf6Pa1cdQdrJ246b9nyM5jeLYqVmVnZY5D2lYKdCTvmGg7R0FhqTar406kVrr+dhinOnUn0LJd/3Nf0t4cuE4dgcOj51zTysSVuGYqQDlJGgciqqitbtOhyflvUs9rL5lVhTbAX72J8+1b8Kwzd61juUdKF/zcE4dL9WaKsFmRdhZrmmRdGW/n8XLtn/Ca6+EXTh3o8Ryw/8ADV7mekY2W9eqpxsfOpNMocW1bVsTTSKqd6g2RQLB2sRh175k+DLWDHytTfczp4GP+TyLji/GZhPMqubDRRYG1t7XG2/hXi4xnUnaN3qz6CpUaNDNOy6K87FVhOnvVxogh6wqNXLZbkknQAba16ChVlCCieJxWDhWqym+P2ApIZgz9VJnylSbMCBnDEjuJBUg2/CmpVpOKctDTXoQjNqGqF+mzqcrKGNyNO8NlsO/lbvvVjrxjrLT+SuOGnPSCvZN+CJ4uO5dDmTMBex0IO19rirLxZVaSLHD9ImDBhO2YbZyTy7nuOdRzcGrWRGeSYf/APImKkWDAqVvm7QuRfLplANrWKnfel5hXG51g8XFY7BZFdkvd1Y581r5SGZuza97BdbWNxpTunLdCqcdmVeIxKaZI1uNM7KoJ/cUZBvzDHbWrVF8X+d+4jkuCAwKcURFBA0rUgLq9r6A6+lUSr65YK79F3stVHTNN2Xr4IgMXM6/KrVFvWX8FTa/adNWCGiToViTCsr5Ilax7ZtlTcvISMqi1tCbm+1Z3iYXyrUvjRla7NeksntlGWFEZQTAyvO4AvIyxR5oYxY20F71jaW3Hv2+5pKzBYeJs2IngiDnPlUyrLnJUWd0mlVQo5AEMfADWxzkujFv5fJCZV7zRkUilxriOKCFAHuXSIR2DaAyG5sLAmw8d60NqmrybEV5aI1WK4DAkQBGbD4cgkIydbPI1gzkk9iPYd51tyNURqNu/F+SHlFW7EH4zi8MTQ2lQRYYsckeQmV3QqqRRqbhVDsC7aeZuaiNOUk9NX6EuaT7jE8X4m+I0VBHClysaDsrfdmP2mP3jWqFNQ33M8puXcUUS9qnsQ3oPeHteVGUXPoSNhdb28anIJzo58GL3tUOmiFWdideGFtFUnyF/gKV04rciNWTdkIcAdmyiMlrXtbW3lVMo00rtl0J1G7JO4dD0DnubgRkAHc31Nvs6eeumlZJzpcNTbCFZ7uxX4nh2Ihcp1j3H6xI8CL00aMJq6FlXqQllZGJ8SN2DftKPwtUPCoFjOsIw8E72/msb3va3ZvbzNUSiou2Y0wm5rNlJJldVyvhplUckbMo9AbCqnSjJ30fgjRHE1YKylJeLt8wWPGwgWDug7mS/wAgaSeEi3dx+f3L6fKteCsp6dqX2JeGyRxzLKk0bEX0Y5b3BH41ZSiqclJJ6fnUY8VJ4mnKDfvK35qaH+WXb/Rg/syA/MCuvDlOC96LPOvkGS92d+9f2Dy44ndHHoD8jWmPKVB8WvAX9IrR6mBzYgHkR5qR+FWrF0ZbSRPsdaO8Sbo7GXxsGUEhSWYjXKADYnu1ArFyjUi6ejN+AhJT1Qf0o4bFh1d5mUCRiTGly0nhYm5HmbC9cdVZZcnA6jpRzZ+J51iZ1ZiUQIvJRr7ydzVsbJblb3PdsT9Frokpw+JDSM0bIJECr2OsBDlL5riTfLplGndX7SpNZloWqjZOz3Mxj+hPEoI45WQySLJJcwgSlVyxCNgpFzqj7AkaelvOUajs+zfr1FiqtJXT3un3aFLioEw8UIxMLIzxNlvGVZl6ySMgZh2SFswvtmXTWrouUpPLsUyioxWbfuK7EYeIZywb+hjZLDUs0MbKSdgNWJt4VDVR1ItPTW68SxOiqMlJdLSz7LE+J4DIM7Iw5lUW5O/snYDs3I3vlqyNbZGaVLcFeKUGXL2hHmJvuEVwmY+pHvoWKXOKnxauO8FLmXWXup27SJ8UVZlIvlJBt4G160qpdXMjp2diX9JANjcGmU4shwa4HHxK8rsdrDv8Tyoc7bagoX30GywFiLkhcq3UfeyjMCw3Ga9vC1Ioyl77t2IZyjH3PNklvhp6DaroxUVZIqk3J3Y/DRqWAY2GvdyBIAJ0BJsLnTWibaXR3JgouSUtuJb4SHD/AGpGi/qM397P+NcmpRxc3rPy0PQUsXyfRj0aN31yaf3D3gw0yFFlkEcZDSTSlQEUX7EUa3Lu3IXPpV+HpVKHvNtvh+bGDGYmlifdhGKXFfmvkW+OwGDVFm/m6L1dog6hiEIA6yWP2p5zyX2V1JN95jKbeXW/H++CM7UEr6A0+EwEEYhHVK3ZleR1R5BENlXOLGZiLZALAMSRzMqVWbvr1dn9dpLUIqwH0x4lGMqwx4doZoxlYKpIFrG6ADI99ibnutbR6FNt3k3dCVZ2XR4neiON/RYjN1iszPkSAzrGATo00gJ2GgGnjyuGrxzyy28beglKWVXv4XL7hvF8KrDNKjNArPmGXKcw1jw7yyZ3cm13IOgIGQGqJU59W/5rZFqqQv3fmhUdLZV6po8PiIW6xmmnyyAs7E9mNQuhVRbzsD33sop5ukn1LQWq1l0aMMMMQda2pGNzDRDcA+hp0jPKoExwm1+6psVZnfQ1adGCyKVC9q1wWym9gW3vpc1yI4rW0uH52efoduWEVrx42v8Amvlw6y34dwx4BdkRrnbQEAbHOBfTUbnSqataMp6vQvpUpQholcml4O0zCQqq2GmUk2328dd1qc1O1lqGWpe70C5+vK2DKPHLr8bj4VCUOIN1OBmZ+AeG1XxqJLolEqbk7yAf5H7eVUztf2bXF+WbuFV1cRZWjuPRwt3eW3zNNgOHPh4u3lZjdmO1vDTu9KwNnSSM9jMY7duwCgkKOd7aem16so03UlbgV16saUbvfgZPE4EkknUk3J7ydzXXUVscTM73ApeHDuqebTDnWgZuGDcC3lUPDpjRxTGSGSMFhK4A/WPusaoqYeKV2aaeIlJ2Rd8N6UwWAkSTzsp9+oPwrHzMuBuzxNHguk8XZhwyszOSxYjLlAXuO7aeQ8dqhUsvSnsuAsp30huZ7juLEJ1BllsAB2mygbZ2Nz6XufDekcs8r7DKOVWM9ADLmd9Wv3baDQDkKipKz0Gpq61PreqC0VAEGLwccq5ZY0kX7rqGHuIqU2tiGk9yh450GwWJILRtGwQIGicpZFFlXKOyQBoLjbSrYV5w2ElSjIzXSj6MGlYthsUYkIX6pgSt0QJcMDfUDmDqTV1LFKG8fErq0HPZmG49wCdDKUDtG3aJVwBoov1kZIvYgm+tt9DV1KtT0b0a/NyqpCpZxWwE/EkjjKSRsx7SG3ZVlLHMC973BFtBypqKc9UxazUNGmCQql3Lxu4ykWUC2cxgKWa+gUnNoCSfWllCcpxlGVkr6eJohVpwpTpyjdytr1aJjIcOJ1SJLCQBe02gyhCbdkE9+9Wp5JNvYxvpRSQzFcNeIXLEgxhwQLDNmXMniQp+NWxqt7dZXKkkRrFL2Ta4LhL8g52Unv8AyqKWMhUvl4FuIwFWiouembYgXGDmK084uJjyMlEg8v8AzqKdTT2Yjg1uh4Ipri2HAUXAEDX3/j/xRcax21AoYh0ue6gB2FfMT8PKghjsKdTfnUpFUpBKx5m9KZIolJhOGgubd/zqble4SkwjvazEWuCCeYsCB+dcXlDlHJ/jpay4vgv5PQ8lck85/lraR4db/gtF6TTgWyqv7pU38LkXrgy52W+j7ND0SwtNO8U34XJMXxfFyRFlY3tlGdSvna2/vpM84u827d31J5intFK/f9Csi4/j8PEWRWdmPa9kqLc1QHPc9w+FaKFVZmlL0KMRRsl0T03DYUot5HDWF2YqFH6zb6V0Ixy6tnObzaJGI6RdLS7GHAoZDs0gUnXuT/MfTvqipVb0j5m+hhEtanl9wPh3G8Xh1y5Q7bsWjPZ9VtfzNY3VlFNnR9hpy7CXHdLi6ZJEGu+UkeW/yqaeIlNXaKK+BjS2l6CxTXCi2UAbb6nU38fyr0GEp5aab46nlcbWzVWlstCtlirXYx5gR4asiiiciF4atSKsxleN4oM+VT2V+Lcz6be+ufXnmlZbI7WFpOELvdgK1WjQzS9HWkSQMhykowDW5GwOUnnra/K9UYh9Aakulct+qVSeZ5k8vE95rFd8DQwP9CVizWPaN9z3AcvKlmncmOx6W30qNC+TE4TkCGhkVgyEkBlB0INjz303rVHDRmrwkVzrTpycakbM0nAOn+AxbrEkpSVto5FKknewPsk+AN6pnQnDVoshVjPY1NUlgqAFQB5pxCO6Ov6rD4EU4p5xJL2TtoWbVioN+1qVIOoa242HjWZOManSbs+o3KU+a6CTfarlfxLichGdo0UqpCZAylj9mxDXYA63vb4V0XWjSh0WctUp1Z9JFsuFRFltdXRwEYDNYXKgWO+gHzp5Vems2q0Epxai8uj1XgAq8j52klLh0Yi9wM1zGGItlFsrDTlarpVqcbJLZlUaU5Jt7ND5HkIiTM5VZAwUx5RmuMzZlFmNh7RJ25VMYU4KTjbZjVKtWq4523a3oGCXBqlmyqSojcKt32szjSwNwPeed7zHnJaizVOOl1+fYq2wyM6jMovHH2nNlAAyljz5DTU61XiJVsn+Ja5tTTgo4Z1Hz+2XTtY2bh4LypAS4EiiMnslkyyNs1tSFGm+laIzaSctNPsYZwTbS6/uMfATIYw9l6xio1BtZgrEgdxPfyqxVtHbWxXzKur6XKlJmtfKbDc1PtCTUXuWLCylFyinZcQx5wACRYHQeNrX+Yq1VY7GbmpbkzTjINe6nzJleVnIZLG4qUxWg5QD2h6+Bp0USuWGBI1vvvUvRXZS9XZILgszgroh1Li99/sf5tu7vHCxvKMmnCj5/Y9DyfyUo2qVlrwXDxG4hUVQidjVwypZnJzc7uCbi1wLm4N+Vc+hBVVrLK+073tUcK78259TVtPAWFgwg1l/Sz4LCifFnNaVgEt5rzKp8vzl7tJ+Ov2OcV6TYdI/0fAwfWOy2OYu5a+hupIva4yqTvrltqlXD0nDLuZvbK9Seefl/RpeExJgIxieIODOw7ES2OS3JR9p+9zoNr0lOhTpa2JdSrX6MduPUUWN6STcRlMf9HAAWEYJs9thIy6sedvCw11qZOU9EaKUadHpSvZbtK7t2IOwyxKmRcRApOhL5gAOYUBLD0pngMQv2l8OW8Bwei4JfewTgeD4BSGmxwkNxZIVa5PdcAn3AUsOT6t9V9Ca/wD5JStanb5+iKbHRQYriB6hMsShSwve7LuSb7nsg67333pqdFOqorVcTnVsVPmHOeje3iXOKi8K7sWeZmmV8wqwrbApBTxM8mVfGZCqWU2LMq37sxsSPG16oxNfm1lW7+RswGG52WZ7L5maidtAlxfQKpPoNNz8TXlp1ZTd2z6HSw9OnG1l3ltxvgfVYeORzaUk5l09k2ttuwuLn9bwFdPCSnbLI8/jXTc3KmrL81LLBRlUQLbMc5vzCXRAR5sklZ1JyzSfF/IvxMVDJTX7Y6971YUcEANf4P51KMzJsPB2arm3mJTSRlpp2DnW4BOh7sxNvK+td5UYRXRVjmzxFScum2+80X0fYWXE8ShkC26txIx5LGmpue8kqo/aNYMRJRTiaqMbtSPogMDXPNh2gBUAee8QXtuP1mHxIpiDybE4rqlNlDaLcG9vYQ8t9tj31VOLUl2minJSg+xlNjcZFZrJlcg2tYgEg6G1uZvcgnyAFTZS3QrlKD0Zp+JcVyNImS4IjYsDsSC9trf+6adVpkUsPni3frKjFxS2DxyBVEbBwVzZlMkraC1r6943qyrK8mZaatFDsZxKSA5SuaM+y17X2Ld4PaPKq3Jt6jLTQkg4hh3v1qsLaG6bbWu6a925q2niZx2YsqUJ6tFrHDFLYwuugC6BXFhewIJvpc63Bq2niWr31FlRT20OHAvAM4K53dQoW6C+Vxa97i4LDfnuOVzrRqNLVL+UJGk6d3ZP+n9yJuIYiV1QQhY2KHsqWACtmz5tr8yedqvahGLd9dShOcpJW0KrhjmFy4iWRkLBczaLqwzGMC7EG9gSBt4VRVw0alRVG+CN9LHTp0XQS0bff3BGC4akyxo5KdqW1tTcNFdbW1OUnbuvrV86mWT7bfUxU6blDba/0C5OjgBhsCbPEs4Yg2ZyhAy22s1r7aijnbp37beAuSzVvEzmC4fI7IiEl3NkAF7m9tTfTn5WJquvjFRqKGptw3J7xFCVa6SXWdjnljUtf2XCEb62Yn/DWxVpXsc2eHg0GYTjuRgWS48DY92+vyqK8nVpuG1xMPRjRqqpvbgE8Y4zna8TzK1hdSwUWtdfZAuNfjXMjgZJ6NP0OvLHxa1i0RvxzEFQvtWy2LMTqux0A8fMEg3GlI8PVhug9opVNnr3huD4ZjMSt0hhhb7wUqCOe9xe/Ma6D9bNCoqpsiZVnS3lb86izi4hFw8WjIxGMtlbEMoyQ96QLbU97Hfx2FaSh7ppjCdVKVR6ev8AABw6WSZ3llHWFt5JDcqNSerB0DXtqQQALAVXOoo95pjScrJaItzxvDKMgh12zL9rxaxW7b3NtRba2tds2siy0oO0GcKwl2PWkqcxUvZrHUqoEkXs3sLl101OU9mp9rnDowkxfYqdTp1aab7l9H9ADjSKqnJiFK5dQgUZma9kyo2uxLE6AW3JANiq1ZrpybKJ08PD/XBRZYdHMP1UQP2nsT5fZH4+tdjA0LU8z3fyPMcp4tyq5FtH58fsWD4mt2Q5fPAcs1NlI51sBxU4UFjyquvWjQg5y/t9Rbh8PPEVFCP9LrMlNM8kBY3zPiNPCyCwHlXNlJyqXfUd+EFCmoxORY6aPtRlYidL9UpuTr2XKtod7fOqo0KcXojTPE1Jq0mQYjHSSG8kplc2W+wVcwNlFgLkgchtzvpfCFjPOV1Y13AVLM7ttZAvgO1YeGw9bnnWSrFRioou5x1Jub4ljixpVcSWS4X2RST3Kmyh4d0E4jimJTDMqknty/VrvvZu0R5A11ZYmEd2Z44eTex7b0F6JrgISCQ80gTrHA0uiBQq88oOY682NcyrUzu5vhDKjRtEPLyqsc5dh40AdEooA8843iFE8q31Dt8Tf8aYg8vxmM6oy2FycoA8BdDpz2pKzvlRdhklmfcZVcKS1uZYjXlrtS5rEqF2aV50E7GUMwUxaKAcxEKCxJI7N999KeEFOWrSHdaVKk4xi3e+wHDjcohsARZ11uQCpTKbX/WOp2uTRNrczLRWsOxeF66NSzFPrH0A7JJ1JtrZibgHbteNLrcVtIhwmEVXXDyDtE3DHU5st1A5EAd/f4U2XWwmbigLimCYFolN8hLrtcqbq1/1gwX+0fClsoseKujuB4jMMTFEZXKCWJSCxIJGVW9rUa5tqsiyWjd4eCQGPRVZQRca38LDTlVmaF2V2noZvEwDrmWSxHXG5YC+Uxq9gdwAb7HSreecU2thVSzGpw3Bo5IVETmOzNldCTqT2r63a5A58hSwxDzZpK4So9HKnYFwXRiVcSkjTCQK2Yk5sxtrsbjfxrRPFQcHFKxRHDyU02yvfBS4fOuaaPVu2itlKk8nQ3Fxa4Pwqz/HValpf1BSqUk46237AHhsSrGWcK8ZxFrkAKwMUgB7Q0AYjXcW01oqtqVlvb6oaklJau3f3BeOfCdUYusjXMS+aNQ2VtMqHKNudwNgRvRFTvewjcdiulwX1gBW7GGEga6/VoOWu1zS16k4UnKC1v8AUvwdGlVxCjVdo2vvYIxfB1jlw6Z1YyFesRGDCMl7ZCwJ1ykEi+hPlU4epUdJyno0JjKVGNa1LWL6wGJ8QhsnWC/IZhcG45bg2PuNas11q/MxZLPRDercOUdLMoLENcaKpc3HkPjWeVCi1e3kzXHFV09ZX70Fy8bLLlHYHhWZ8nQvdS80a48rT4x8n9BuElTctrVNXB1v2pPuf3saaPKVD97a719rkuLxumlZVhpw96LRpqY+E1aEkyXgvDc7Z39gH+14eVbsLhnWf/Fb/Y4ePxyoRsveey+pqnnHpXdUbbHl3O+4LJJUgogry1Ddi+FO4Bi8SrwQygFQxnJvcXVDkS4O1yHH71efxlR16qXD81PT4ChGhSlL92n9FHjGKQRFTY52IIIOyhavp9KTYk1lVgGPiUi6XuLEWPcRbS1iPQ1a4orTZL+nl8oKjRw1xflmNv7x13/CVGxDdzb9DY+sSR2OvWanwCiw+NZq6V0WU2E44am1UpDtk+Fg7NVTepCie2GWixeNM1FgI3xHjQBC2NqQBMTjCedAGH47hFaRiN7/AId4oAzXWIg6twbBmPaAZdXJ8xUO3EaN+BWT9HcNIxdLq17kxvfXxRr29LVFkGZp3KHi2JaOaRDqA0Y1Xf6sa+/xpJ7mmk1ZA0OG65VJsqiZ9LHLqISL92x99TwKKnvEvEXeQdUq5WRyS97rYt2jtsCBTrRXKNGyXi0chyToGzo2TQXsSoyttpsdbcxUQnn6QOnlViLhkn1wlka4JkzNlsqk5R2tLaleWxPKpnB5rImE0lqwOLBH9JDbfXqyjfMnW3LA+Vj76lW2e426zLYvcZxmWQdk5SCCtgSLixIvyNhz76wJy3Z0OaitEA4mR5UJkOVusO1tAyEDXQXyketbISzUpNdnzMjg41Yr82Nt0L7OGCc1Z733vmN/jUUr5dRa1s+hfR71YVjyakgC4lCkilHUMpNiDz0B+dGZxd0LZSRm5uieHvpnQb2DX/xA+POtlPFTtqUzoRDuMdHpJGWaONSBGiZWLDRBlUqw55QBrbbxIpqVdJWkLUpO90VWD4JKMRETA0aq+ZrlSoUG+hXS+n8cnqVoKm9SIUpzmnYlTi8cV4pS6tExsqp9oFtyxIO9+Qt33qIwnLVW1+RM5042Svpv39hWSY2KUllQrL1TiRr3DkqEuASSOYt3GrnFxVuFylSjJ+ALwuKNsueVYkv22ILHc7KFNza1gdN/GseLhXlVWR2R1cBVwsMO88by14eXcu46MNEZsT1YPVrHIyZtwNMt77EX561rbeWN97o5dkpSS2IF4NiQwTq2BJsLkWJ02N7Edoa0/ORSumJzTb1Q/DyYhXaPOQUWQkXuPq0Z2Gmn2bU6qtK62+5VLDQnKzWo6LpBIPaAP8eFWc91opeEjwCo+OqdwRTKrF8RHhmuBUdI+IlwEV8iaFjY3J3AFuWx8fnkxU3Lop2RswtGMHmauyeaZxhMKpsymOQqbnMQcROCWv7JurAC50UHmQOf/jU1dt+n3OlaeR2SX54A+JjbqYABe4kIW18vb303vvrWpSipSdjO4tpagKwM1gFJ8AO4X+QJ9D3UzmuJCg+B2KMhteV/kaM6DKz0Ho3A0cJXvck/2VH4VjrSvK5fTjoWBh1FIhpKxZRwi1Utako9GfE045C2I8aAImnosBE0lAEDtUAUfE17ZqQMtjYhnYHY3/OolsTDco5cMM2mhB3FQNocx2CLEk2e4Xffa1Qxkx3BwkQZcpW78vIcvSpWxXJ6hoiiJuuW9iNOybHcW56ipEdmVeiXCnLc8/DTceFqmMUthJpviC4xroV2vzUX1vcG3nTFNpLgALODPEV0KrY32sCVHzH8Cokot3T1NEJSVJq2jaH4aCNXjkkZiqhdApJLDXL3C5IrPSpZ33HRqYpU6WW2rGQYm+ZiLr1/sg7gKeySeVwBerqVOCUo8DHKtNOMuJtOjEueHMTZ2kkNx33vUrURrLoXkcjcxfxB/Oh6BHUkLn7p9bUR3CewoICWJbv25bClqbkUyDHLZhT09gnuW+C4iyqLrcUxA3GyiQggWtvVVTctpOyPO+IrmeTZgMTODcA2AZdO0NOe3fW2jJqPgjFXV5aa6nerjjiVlhAd1Ga+Yi1idLnQaA6W2qvn5yaTZZzUIptIr8OTkBXLbMUAdDcWAJ7aa27XcK1utHNZlEKcnHNEt+G9HJguIdowueEqihwxa9joQdL5Rv31XUxEG4pPiEKbV20BSdIUykMsnWjMAeyuQsLMcotYg37JG1herIUZWV2mTUrQzPKmuodw7FJO07CERlMHimJU+1eMi5Ft7sdb86mcXFJX4oinJSb04MqOGlSADJ1Yv2iFdj55UBvpprbbxrLjKFWpNNPQ6XJuKoUaTUleV/QIxiQNi4+oDCO8ftaMStszEHYm1/W/OtMLxovNwOdWalWvHS5bNwQEEJMRfk4B5W3H51jz9JMucOi11nONcDaOCIlgwjgAFtPakd72P+8NVS1ncupro5SsHZaK7KD1ZtmawBc+1e9iN/fz0q1p2dlxFik3q0rLzDHIW8mddlUC+uXYG5JGbKzDbYHTWhdQoGYsP1oYPmJLs1/Wx2t4+vrVjUraoVWb0NXwVS8CyFrghmv2tg7C1gCDonnqfCs9XSVi6ltcML3fKvLfzFtB32uLnxG99COxE9woOaLCXNo8tQWDDLQA0yVADS1ADSaAKziA7VSBm8fH2zSyHgVk2GoRDHiLRb91vcaNiVqDzwmx/a/A0NCN3I5MPbt89jfxqVsQd/RlIJsOVqiLfEiS6iB8GOQt5aU4twd4NeRPK419DSssWqKHiDSIBdAy2sBa5HruARVWWzZdmvFEGDlPVN94uMo7tGsNbbWq2CsnYrnK7WY1vRsOkQVjrcm/mb00Niue5qeHsxNt6JoiDLRYahDS1QRhMNqfP8BSyCGhXcaWzCmhsEh2HxZA1GlMKFwzBuVqWSuMnY8/4hKI4sXIdbYia3mzhasqSaj4IWlDPLxYLiOORyKilSmXL3EbWt8e6s0a3SRrqYWSi3wK3iMUpjiEIu/WStbTUKqcjvvtvWitJqbsYaK/xo0nR3pXiiSs8ERygXIYqRfLluBnFyGvy9k1ntqO4lnhOm/CcSMuJiKHb66LOPRkzW89KeNRx2YWi9zU9HeG8KZZRhepcSqUkCSZzlYarYsSo8NKsdacrXexMacVsjI8c6Cy4Zfqp0kjvZUlSxF7nVlvc356eVaY4mL95eRQ6LWzKLhvBZROrsioqg3KsDmNjsNxuN+6nqVouDSe4sKUlK7RozDWKxpud6dLbBPbfq4Ft5mMH8aal/sCaeQxcvCpZhGUXRY0Q3IHaUAH0uyi/eyjci9sMRGN+8qlRlKxDL0fnFswGpy6sN9dPDYjwII3FT7RHt9COZl2Dv5AmQMSBYaNqNNQNfUj3jkaOfhxTJ5qfBo3fBcfHFDErwSM0ar7HVsuxIc/Wdq+a4Onsi2xvlnLNJsvgnGKROOJxbrh5yTftdg5tFZstntqCh7PK3doJ2Bq4DP0hiVipjkBBsR2NCN9mtU5kLkZvM2poGOigBE0AcoAdQABjxrQQUGNHbNLMeBXy03Ah7jsvZHrSvYaO5GV09angK/eZGV0YVApFix2RTEIjX2TUkHGQXXShkrYhxMC7276rLWLD4ZCnsj2l+TU62Ee4VCoAFu+pgJMv+FDWpkLE0EIpSwKgUa+f4ClZKM/xX26ZCs7GNKYgcBQB55xg3hkB1Bxrg+IDObH1Apa6stDRhelPXu+hR8UP9L4ajw1A+RrKtzq10lRui3G8PgmKI8CEjsR41pq+8zgw91CwYuM3Np44z3FA2UKVGhsGOtr7dwqpjsqelqBZFygC6IdBbU3v5UMLalc6C8RtqefPcc6UhblkekOLj6tFxEhUs1w7GQaPlFusvbTupszQ0tj0PANmRSdSRV6FJStAHem39APFo7+guPiBVd9S39pjIcdIgsrWG+wPMHmNrqpt3qDuBQQJuIyHQsDYgi6qdVGUakagKALbUAdk4nK4IZhZtD2FBPaz7gX9ok+JoA4eIyd6m+bdEPt+1uOY08tKAHvxWZhrISDfTS3asWAGwByi4237zcAgklLHMxuT6bCw0GgFrUAf//Z",
  },
  {
    id: 8,
    title: "Real Estate Hoarding",
    category: "Hoardings",
    client: "Property Developer",
    description: "Large format UV printed hoardings for project launch.",
    services: ["UV Printing", "Structure"],
    image: "data:image/jpeg;base64,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",
  },
];

export function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-gradient-to-b from-background to-secondary/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-14">
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Our Work
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            Featured <span className="text-primary">Portfolio</span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground">
            Explore our recent projects and see the quality of our craftsmanship.
          </p>
        </AnimatedSection>



        {/* Portfolio Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          layout
        >
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer bg-card rounded-2xl overflow-hidden shadow-card border border-border/50 hover:border-primary/30"
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                {/* Project Image */}
                <div className="aspect-[4/3] overflow-hidden relative">
                  <motion.img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <motion.div 
                    className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ y: 10 }}
                    whileHover={{ y: 0 }}
                  >
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                      <ExternalLink className="w-3 h-3" />
                      View Details
                    </span>
                  </motion.div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {/* View More Button */}
        {projects.length > 4 && (
          <AnimatedSection className="text-center mt-12">
            <Button
              onClick={() => setShowAll(!showAll)}
              variant="outline"
              size="lg"
            >
              {showAll ? 'Show Less' : 'View More Projects'}
            </Button>
          </AnimatedSection>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-foreground/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-card rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <motion.button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
                  aria-label="Close modal"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-6 h-6 text-white" />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
