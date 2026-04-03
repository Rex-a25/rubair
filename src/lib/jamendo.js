const JAMENDO_BASE_URL = 'https://api.jamendo.com/v3.0';

export async function searchJamendoTracks({ query = '', limit = 12, tags = [] } = {}) {
  const clientId = process.env.NEXT_PUBLIC_JAMENDO_CLIENT_ID;

  if (!clientId) {
    throw new Error('Missing NEXT_PUBLIC_JAMENDO_CLIENT_ID in .env.local');
  }

  const params = new URLSearchParams({
    client_id: clientId,
    format: 'json',
    limit: String(limit),
    include: 'musicinfo',
    audioformat: 'mp32',
    namesearch: query || '',
  });

  if (tags.length > 0) {
    params.set('tags', tags.join(','));
  }

  const response = await fetch(`${JAMENDO_BASE_URL}/tracks/?${params.toString()}`, {
    method: 'GET',
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error('Failed to fetch music from Jamendo');
  }

  const data = await response.json();

  return (data.results || []).map((track) => ({
    id: String(track.id),
    title: track.name,
    artist: track.artist_name,
    duration: formatDuration(track.duration),
    cover:
      track.album_image ||
      track.image ||
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=800&auto=format&fit=crop',
    audioUrl: track.audio,
    downloadUrl: track.audiodownload || track.audio,
    jamendoUrl: track.shareurl || track.shorturl || '',
  }));
}

function formatDuration(seconds) {
  const total = Number(seconds || 0);
  const mins = Math.floor(total / 60);
  const secs = total % 60;
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}