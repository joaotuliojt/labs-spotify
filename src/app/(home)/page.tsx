import { Button } from '@/components/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const oauthUrl = `${process.env.NEXT_PUBLIC_URL_API}/auth/login` || '';
  return (
    <main className="flex h-screen flex-col items-center justify-center gap-4">
      <Image
        src="/assets/spotify_logo.png"
        alt="Spotify"
        width={164}
        height={50}
      />
      <h2 className="text-sm font-bold">
        Entra com sua conta Spotify clicando no botão abaixo
      </h2>
      <Button asChild>
        <Link href={oauthUrl}>Entrar</Link>
      </Button>
    </main>
  );
}
