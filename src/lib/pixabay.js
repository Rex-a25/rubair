const PIXABAY_VIDEO_BASE_URL = 'https://pixabay.com/api/videos/';

export async function searchPixabayVideos({
  query = '',
  category = '',
  perPage = 12,
  page = 1,
} = {}) {
  const apiKey = process.env.NEXT_PUBLIC_PIXABAY_API_KEY;

  if (!apiKey) {
    throw new Error('Missing NEXT_PUBLIC_PIXABAY_API_KEY in .env.local');
  }

  const params = new URLSearchParams({
    key: apiKey,
    q: query.trim() || 'trending',
    per_page: String(perPage),
    page: String(page),
    safesearch: 'true',
    order: 'popular',
  });

  if (category && category !== 'All') {
    params.set('category', normalizePixabayCategory(category));
  }

  const response = await fetch(`${PIXABAY_VIDEO_BASE_URL}?${params.toString()}`, {
    method: 'GET',
    next: { revalidate: 60 * 60 * 24 },
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(text || 'Failed to fetch videos from Pixabay');
  }

  const data = await response.json();

  return (data.hits || []).map((video) => {
    const bestVideo =
      video.videos?.medium?.url
        ? video.videos.medium
        : video.videos?.small?.url
        ? video.videos.small
        : video.videos?.tiny?.url
        ? video.videos.tiny
        : video.videos?.large?.url
        ? video.videos.large
        : null;

    const thumbnail =
      bestVideo?.thumbnail ||
      'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200&auto=format&fit=crop';

    return {
      id: String(video.id),
      title: buildVideoTitle(video.tags),
      creator: video.user || 'Pixabay Creator',
      duration: formatDuration(video.duration),
      quality: getQualityLabel(bestVideo),
      thumbnail,
      videoUrl: bestVideo?.url || '',
      downloadUrl: bestVideo?.url ? `${bestVideo.url}?download=1` : '',
      sourceUrl: video.pageURL || '',
      sourceName: 'Pixabay',
    };
  });
}

function normalizePixabayCategory(category) {
  const map = {
    Luxury: 'business',
    Cars: 'transportation',
    Travel: 'travel',
    Fashion: 'fashion',
    Aerial: 'places',
    Lifestyle: 'people',
    Startup: 'business',
  };

  return map[category] || category.toLowerCase();
}

function buildVideoTitle(tags) {
  if (!tags) return 'Pixabay Video';
  const first = tags
    .split(',')
    .map((tag) => tag.trim())
    .filter(Boolean)
    .slice(0, 3)
    .join(' • ');

  return first || 'Pixabay Video';
}

function formatDuration(seconds) {
  const total = Number(seconds || 0);
  const mins = Math.floor(total / 60);
  const secs = total % 60;
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function getQualityLabel(videoFile) {
  if (!videoFile?.width) return 'HD';
  if (videoFile.width >= 1920) return '1080p';
  if (videoFile.width >= 1280) return '720p';
  if (videoFile.width >= 960) return '540p';
  return '360p';
}