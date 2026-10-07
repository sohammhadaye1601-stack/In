export interface GymConfig {
  brandName: string;
  subBrand: string;
  branchName: string;
  tagline: string;
  heroHeadline: string;
  heroSubtext: string;
  locationCity: string;
  addressFull: string;
  landmark: string;
  instagramHandle: string;
  instagramFollowers: string;
  instagramPosts: string;
  instagramFollowing: string;
  instagramUrl: string;
  facebookName: string;
  facebookUrl: string;
  whatsappNumber: string;
  contactPhone: string;
  emailContact: string;
  openingTargetDate: string; // ISO date string or formatted date
  
  // Image placeholders as requested:
  // heroImage, gymImage1, gymImage2, trainingImage1, trainingImage2, galleryImage1, galleryImage2, etc.
  images: {
    heroImage: string;
    gymImage1: string;
    gymImage2: string;
    trainingImage1: string;
    trainingImage2: string;
    trainingImage3: string;
    trainingImage4: string;
    trainingImage5: string;
    galleryImage1: string;
    galleryImage2: string;
    galleryImage3: string;
    galleryImage4: string;
    galleryImage5: string;
    galleryImage6: string;
    instagramImages: string[];
  };
}

export const DEFAULT_GYM_CONFIG: GymConfig = {
  brandName: "GOLD'S GYM",
  subBrand: "THE MECCA OF BODYBUILDING & FITNESS",
  branchName: "MIT-WPU KOTHRUD",
  tagline: "World's number #1 Fitness Destination is Arriving Soon in KOTHRUD",
  heroHeadline: "THE MECCA OF FITNESS IS ARRIVING IN KOTHRUD",
  heroSubtext: "World's #1 Fitness Destination is arriving soon in Kothrud.",
  locationCity: "Kothrud, Pune, Maharashtra",
  addressFull: "Near MIT World Peace University (MIT-WPU), Paud Road, Kothrud, Pune, Maharashtra 411038",
  landmark: "Adjacent to MIT-WPU Main Campus & Paud Road Metro Corridor",
  instagramHandle: "@golds_mit_wpu.kothrud",
  instagramFollowers: "508",
  instagramPosts: "45",
  instagramFollowing: "791",
  instagramUrl: "https://www.instagram.com/golds_mit_wpu.kothrud/",
  facebookName: "Gold's Gym MIT Kothrud",
  facebookUrl: "https://www.facebook.com/search/top?q=Gold%27s%20Gym%20MIT%20Kothrud",
  whatsappNumber: "+919876543210", // Configurable WhatsApp variable
  contactPhone: "+91 98765 43210", // Configurable Call variable
  emailContact: "kothrud@goldsgymindia.com",
  openingTargetDate: "2026-11-15T00:00:00", // Pre-sale countdown target
  
  images: {
    // Curated high-contrast, premium dark fitness imagery
    heroImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920&auto=format&fit=crop",
    gymImage1: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1200&auto=format&fit=crop",
    gymImage2: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1200&auto=format&fit=crop",
    trainingImage1: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop", // Strength
    trainingImage2: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=1200&auto=format&fit=crop", // Cardio
    trainingImage3: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=1200&auto=format&fit=crop", // Functional
    trainingImage4: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1200&auto=format&fit=crop", // Personal Training
    trainingImage5: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop", // Female Fitness
    galleryImage1: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1200&auto=format&fit=crop", // Weightlifting
    galleryImage2: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1200&auto=format&fit=crop", // Dumbbells
    galleryImage3: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1200&auto=format&fit=crop", // Conditioning
    galleryImage4: "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?q=80&w=1200&auto=format&fit=crop", // Male athlete lifting
    galleryImage5: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=1200&auto=format&fit=crop", // Female athlete power
    galleryImage6: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=1200&auto=format&fit=crop", // Functional turf
    instagramImages: [
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=600&auto=format&fit=crop",
    ]
  }
};

const STORAGE_KEY = "golds_gym_mit_kothrud_config_v1";

export function getStoredGymConfig(): GymConfig {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_GYM_CONFIG;
    const parsed = JSON.parse(raw);
    return {
      ...DEFAULT_GYM_CONFIG,
      ...parsed,
      images: {
        ...DEFAULT_GYM_CONFIG.images,
        ...(parsed.images || {})
      }
    };
  } catch {
    return DEFAULT_GYM_CONFIG;
  }
}

export function saveGymConfig(config: GymConfig): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
  } catch (err) {
    console.error("Failed to save gym config to localStorage", err);
  }
}

export function resetGymConfig(): GymConfig {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignore
  }
  return DEFAULT_GYM_CONFIG;
}
