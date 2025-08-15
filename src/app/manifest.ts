import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Labs Spotify',
    short_name: 'Spotifylabs',
    start_url: '/',
    display: 'standalone',
    background_color: '#121212',
    theme_color: '#121212',
    icons: [
      {
        src: '/assets/spotify.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/assets/spotify.png',
        sizes: '192x192',
        type: 'image/png',
      },
    ],
  };
}
