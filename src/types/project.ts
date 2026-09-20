export interface IProject {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    businessImpact: string;
    techStack: string[];
    imagePath: string;
    reversed: boolean;
    status: "Live" | "Wdrożenie" | "Środowisko testowe";
    statusMessage?: string;
    story: {
        problem: string;
        solution: string;
        result: string;
    };
    highlights?: {
        title: string;
        description: string;
    }[];
    systemModules?: {
        name: string;
        features: string[];
    }[];
    customCta?: {
        title: string;
        description: string;
    };
    desktopGallery: string[];
    mobileGallery?: string[];
    liveUrl?: string;
    githubUrl?: string;
}