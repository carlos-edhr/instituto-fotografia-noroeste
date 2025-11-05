import type { Media as MediaType } from "@/payload-types";

// Tipo base para todos los bloques
type BaseBlock = {
  id?: string | null;
  blockName?: string | null;
  blockType: string;
};

export type ContentBlock = BaseBlock & {
  blockType: "content";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  richText: any;
  width?: "narrow" | "medium" | "wide" | "full" | null;
};

// export type HeroBlock = BaseBlock & {
//   blockType: "hero";
//   heading: string;
//   subheading?: string | null;
//   backgroundImage?: string | MediaType | null;
//   ctaText?: string | null;
//   ctaLink?: string | null;
//   alignment?: "left" | "center" | "right" | null;
// };

export type MediaBlock = BaseBlock & {
  blockType: "media";
  media: string | MediaType;
  caption?: string | null;
  alignment?: "left" | "center" | "right" | null;
  size?: "small" | "medium" | "large" | "full" | null;
};

export type HeroBlock = {
  blockType: "hero";
  id?: string | null;
  blockName?: string | null;
  title: string;
  titleSecondPart?: string | null;
  highlightedText?: string | null;
  subtitle?: string | null;
  backgroundImages: {
    image: string | MediaType;
    altText?: string | null;
    id?: string | null;
  }[];
  videoSection: {
    enableVideo?: boolean | null;
    videoFile?: string | MediaType | null;
    videoUrl?: string | null;
  };
  ctaButton: {
    enableCta?: boolean | null;
    text?: string | null;
    link?: string | null;
  };
  logoCarousel: {
    enableLogos?: boolean | null;
    logos: {
      logo: string | MediaType;
      altText?: string | null;
      link?: string | null;
      id?: string | null;
    }[];
  };
  styling: {
    textColor?: "white" | "black" | "gray" | null;
    overlayOpacity?: number | null;
    minHeight?: "screen" | "75" | "50" | null;
  };
};

// Agregar estos tipos al archivo existente

export type CursoUnoBlock = {
  blockType: "curso-uno";
  id?: string | null;
  blockName?: string | null;
  header?: {
    badge?: string | null;
    title?: string | null;
    subtitle?: string | null;
    description?: string | null;
  };
  courseInfo?: {
    startDate?: string | null;
    schedule?: string | null;
    instructor?: {
      name?: string | null;
      link?: string | null;
    };
    price?: string | null;
    paymentDescription?: string | null;
  };
  syllabus?: {
    item: string;
    id?: string | null;
  }[];
  requirements?: {
    requirement: string;
    id?: string | null;
  }[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  richText?: any;
  location?: {
    mapEmbed?: string | null;
    address?: string | null;
  };
  additionalInfo?: {
    duration?: string | null;
    sessions?: string | null;
    includes?: string | null;
  };
  enrollmentLink?: string | null;
};

export type CursoDosBlock = {
  blockType: "curso-dos";
  id?: string | null;
  blockName?: string | null;
  header?: {
    badge?: string | null;
    title?: string | null;
    subtitle?: string | null;
    description?: string | null;
  };
  quickInfo?: {
    icon: string;
    title: string;
    description: string;
    link?: string | null;
    id?: string | null;
  }[];
  mainContent?: {
    duration?: string | null;
    durationDetails?: string | null;
    includes?: {
      item: string;
      id?: string | null;
    }[];
    price?: string | null;
    instructorName?: string | null;
    instructorLink?: string | null;
  };
  syllabus?: {
    item: string;
    id?: string | null;
  }[];
  requirements?: {
    requirement: string;
    id?: string | null;
  }[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  richText?: any;
  location?: {
    mapEmbed?: string | null;
    address?: string | null;
    venue?: string | null;
  };
  enrollmentLink?: string | null;
};

export type CursoTresBlock = {
  blockType: "curso-tres";
  id?: string | null;
  blockName?: string | null;
  header?: {
    badge?: string | null;
    title?: string | null;
    subtitle?: string | null;
    description?: string | null;
  };
  instructor?: {
    name?: string | null;
    link?: string | null;
  };
  courseInfo?: {
    startDate?: string | null;
    schedule?: string | null;
    price?: string | null;
    paymentDescription?: string | null;
    duration?: string | null;
    endDate?: string | null;
  };
  syllabus?: {
    item: string;
    id?: string | null;
  }[];
  learningPoints?: {
    point: string;
    id?: string | null;
  }[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  detalles?: any;
  location?: {
    mapEmbed?: string | null;
    address?: string | null;
    venue?: string | null;
  };
  enrollmentLink?: string | null;
};

export type GaleriaBlock = {
  blockType: "galeria";
  id?: string | null;
  blockName?: string | null;
  header?: {
    badge?: string | null;
    title?: string | null;
    subtitle?: string | null;
    description?: string | null;
  };
  galleryItems?: {
    id?: string | null;
    image: string | MediaType;
    title: string;
    description?: string | null;
    year?: number | null;
    courseName?: string | null;
  }[];
  pagination?: {
    itemsPerPageDesktop?: number | null;
    itemsPerPageMobile?: number | null;
  };
  footerText?: string | null;
};

export type HeaderType = {
  navItems?: {
    label: string;
    link: string;
    type?: "internal" | "external" | "section";
    id?: string;
  }[];
  socialLinks?: {
    platform:
      | "instagram"
      | "facebook"
      | "email"
      | "youtube"
      | "twitter"
      | "linkedin";
    url: string;
    enable?: boolean;
    id?: string;
  }[];
  ctaButtons?: {
    text: string;
    link: string;
    type?: "primary" | "secondary";
    enable?: boolean;
    id?: string;
  }[];
  logo: string | MediaType;
  id?: string;
  globalType?: "header";
};

export type CursosPrivadosBlockType = {
  blockType: "CursosPrivados";
  headerBadge: string;
  headerTitle: string;
  headerSubtitle: string;
  headerDescription: string;
  presencialDuration: string;
  presencialDescription: string;
  presencialPricing?: Array<{
    students: string;
    price: string;
  }>;
  presencialNote: string;
  virtualDuration: string;
  virtualDescription: string;
  virtualPricing?: Array<{
    students: string;
    price: string;
  }>;
  asesoriasTitle: string;
  asesoriasDescription: string;
  asesoriaPresencialTitle: string;
  asesoriaPresencialPrice: string;
  asesoriaPresencialDescription: string;
  asesoriaVirtualTitle: string;
  asesoriaVirtualPrice: string;
  asesoriaVirtualDescription: string;
  contactTitle: string;
  contactDescription: string;
  email: string;
  phone: string;
  emailButtonText: string;
  phoneButtonText: string;
  footerNote: string;
};

export type BannerBlockType = {
  blockType: "Banner";
  style?: "info" | "warning" | "success" | "error";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: any;
  enableCTA?: boolean;
  ctaText?: string;
  ctaLink?: string;
};

export type ArchiveBlockType = {
  blockType: "ArchiveBlock";
  header?: {
    badge?: string;
    title?: string;
    subtitle?: string;
    description?: string;
  };
  populateBy?: "collection" | "selection";
  relationTo?: "posts" | "projects";
  categories?: string[] | number[];
  limit?: number;
  selectedDocs?: string[] | number[];
  displayStyle?: "grid" | "list";
};

export type CallToActionBlockType = {
  blockType: "CallToAction";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  richText: any;
  buttons?: Array<{
    label: string;
    link: string;
    type: "primary" | "secondary" | "outline";
    icon?: "none" | "arrowRight" | "calendar" | "phone" | "mail";
  }>;
  style?: {
    background?: "gradient" | "solid" | "image";
    alignment?: "center" | "left";
  };
};

export type HighImpactHeroBlockType = {
  blockType: "HighImpactHero";
  id?: string | null;
  blockName?: string | null;
  header?: {
    badge?: string;
    title?: string;
    subtitle?: string;
    description?: string;
  };
  backgroundMedia?: {
    backgroundImage: string | MediaType;
    backgroundVideo?: string | MediaType | null;
    overlayOpacity?: number;
  };
  ctaButtons?: Array<{
    text: string;
    link: string;
    type: "primary" | "secondary";
    icon?: "arrow" | "calendar" | "phone";
  }>;
  stats?: Array<{
    number: string;
    label: string;
    suffix?: string;
  }>;
  styling?: {
    minHeight?: "screen" | "75" | "50";
    textAlignment?: "center" | "left";
  };
};

export type MediumImpactHeroBlockType = {
  blockType: "MediumImpactHero";
  id?: string | null;
  blockName?: string | null;
  header?: {
    badge?: string;
    title?: string;
    description?: string;
  };
  features?: Array<{
    icon: "clock" | "calendar" | "user" | "award";
    text: string;
  }>;
  ctaButton?: {
    text?: string;
    link?: string;
  };
  backgroundImage?: string | MediaType | null;
};

export type LowImpactHeroBlockType = {
  blockType: "LowImpactHero";
  id?: string | null;
  blockName?: string | null;
  header?: {
    title?: string;
    description?: string;
  };
  ctaButton?: {
    text?: string;
    link?: string;
  };
  styling?: {
    background?: "gradient" | "solid";
    textAlignment?: "center" | "left";
  };
};
