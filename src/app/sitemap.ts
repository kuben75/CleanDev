import { MetadataRoute } from 'next';
import { seoCities } from '@/content/seo-cities';
import { projects } from '@/content/projects';

export default function sitemap(): MetadataRoute.Sitemap {

    const baseUrl = 'https://twojadomena.pl'; //TODO: Replace with your actual base URL

    const cityUrls = seoCities.map((city) => ({
        url: `${baseUrl}/tworzenie-stron/${city.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));


    const projectUrls = projects.map((project) => ({
        url: `${baseUrl}/realizacje/${project.id}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.9,
    }));

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/polityka-prywatnosci`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        ...cityUrls,
        ...projectUrls,
    ];
}