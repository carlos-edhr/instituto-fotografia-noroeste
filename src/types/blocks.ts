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
  paymentMethods?: {
    bankTransfer?: {
      bankName?: string | null;
      accountHolder?: string | null;
      accountNumber?: string | null;
      clabe?: string | null;
    };
    oxxo?: {
      cardNumber?: string | null;
    };
    paypal?: {
      link?: string | null;
    };
    zelle?: {
      email?: string | null;
      name?: string | null;
    };
  };
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
  paymentMethods?: {
    bankTransfer?: {
      bankName?: string | null;
      accountHolder?: string | null;
      accountNumber?: string | null;
      clabe?: string | null;
    };
    oxxo?: {
      cardNumber?: string | null;
    };
    paypal?: {
      link?: string | null;
    };
    zelle?: {
      email?: string | null;
      name?: string | null;
    };
  };
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
  paymentMethods?: {
    bankTransfer?: {
      bankName?: string | null;
      accountHolder?: string | null;
      accountNumber?: string | null;
      clabe?: string | null;
    };
    oxxo?: {
      cardNumber?: string | null;
    };
    paypal?: {
      link?: string | null;
    };
    zelle?: {
      email?: string | null;
      name?: string | null;
    };
  };
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
