'use client';

import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import SearchBar from '@/components/SearchBar';
import SectionTabs from '@/components/SectionTabs';
import FilterChips from '@/components/FilterChips';
import FeaturedSection from '@/components/FeaturedSection';
import EmptyState from '@/components/EmptyState';
import LoadingSkeleton from '@/components/LoadingSkeleton';
import Footer from '@/components/Footer';
import VideoCard from '@/components/VideoCard';
import MusicCard from '@/components/MusicCard';
import {
  featuredMusic,
  featuredVideos,
  musicGenres,
  videoCategories
} from '@/data/mockData';
import { searchJamendoTracks } from '@/lib/jamendo';
import { searchPixabayVideos } from '@/lib/pixabay';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('videos');
  const [query, setQuery] = useState('');
  const [selectedChip, setSelectedChip] = useState('All');
  const [loading, setLoading] = useState(false);

  const [videoResults, setVideoResults] = useState([]);
  const [musicResults, setMusicResults] = useState([]);
  const [videoError, setVideoError] = useState('');
  const [musicError, setMusicError] = useState('');

  const chips = useMemo(() => {
    return activeTab === 'videos'
      ? ['All', ...videoCategories]
      : ['All', ...musicGenres];
  }, [activeTab]);

  useEffect(() => {
    if (activeTab !== 'videos') return;

    const loadVideos = async () => {
      setLoading(true);
      setVideoError('');

      try {
        const results = await searchPixabayVideos({
          query: query.trim(),
          category: selectedChip,
          perPage: 12,
        });

        setVideoResults(results);
      } catch (error) {
        console.error(error);
        setVideoError(error.message || 'Could not load videos right now.');
        setVideoResults([]);
      } finally {
        setLoading(false);
      }
    };

    const timeoutId = setTimeout(loadVideos, 350);
    return () => clearTimeout(timeoutId);
  }, [activeTab, query, selectedChip]);

  useEffect(() => {
    if (activeTab !== 'music') return;

    const loadTracks = async () => {
      setLoading(true);
      setMusicError('');

      try {
        const tags = selectedChip !== 'All' ? [selectedChip.toLowerCase()] : [];
        const results = await searchJamendoTracks({
          query,
          limit: 12,
          tags,
        });

        setMusicResults(results);
      } catch (error) {
        console.error(error);
        setMusicError('Could not load music right now.');
        setMusicResults([]);
      } finally {
        setLoading(false);
      }
    };

    const timeoutId = setTimeout(loadTracks, 350);
    return () => clearTimeout(timeoutId);
  }, [activeTab, query, selectedChip]);

  const currentItems = activeTab === 'videos' ? videoResults : musicResults;
  const currentError = activeTab === 'videos' ? videoError : musicError;

  return (
    <main className="min-h-screen">
      <Navbar dashboard />

      <section className="section-wrap py-8 sm:py-12">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">
              Creator Workspace
            </p>
            <h1 className="text-3xl font-semibold">
              Find the perfect {activeTab === 'videos' ? 'visuals' : 'soundtrack'}.
            </h1>
          </div>

          <SectionTabs
            active={activeTab}
            setActive={(tab) => {
              setActiveTab(tab);
              setSelectedChip('All');
              setQuery('');
              setVideoError('');
              setMusicError('');
            }}
          />
        </div>

        <div className="mb-4 grid gap-3 lg:grid-cols-[2fr_1fr]">
          <SearchBar
            value={query}
            onChange={setQuery}
            placeholder={
              activeTab === 'videos'
                ? 'Search for luxury, cars, travel, fashion...'
                : 'Search for cinematic, afrobeat, calm, hype...'
            }
          />

          <button className="glass rounded-2xl px-4 py-3 text-sm text-slate-300 hover:bg-white/10">
            Advanced Filters
          </button>
        </div>

        <FilterChips items={chips} activeItem={selectedChip} onSelect={setSelectedChip} />
      </section>

      <section className="section-wrap space-y-10 pb-16">
        <FeaturedSection
          title={activeTab === 'videos' ? 'Featured videos' : 'Featured music'}
          items={activeTab === 'videos' ? featuredVideos : featuredMusic}
          type={activeTab === 'videos' ? 'video' : 'music'}
        />

        <div>
          <div className="mb-4 flex items-center justify-between gap-3">
            <h2 className="text-lg font-semibold">
              {activeTab === 'videos' ? 'Trending clips' : 'Trending free tracks'}
            </h2>

            {activeTab === 'videos' && currentItems.length > 0 && (
              <p className="text-xs text-slate-400">
                Results powered by Pixabay
              </p>
            )}

            {activeTab === 'music' && currentItems.length > 0 && (
              <p className="text-xs text-slate-400">
                Results powered by Jamendo
              </p>
            )}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeTab}-${query}-${selectedChip}-${loading}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
            >
              {loading ? (
                <LoadingSkeleton />
              ) : currentError ? (
                <EmptyState
                  title={activeTab === 'videos' ? 'Videos could not load' : 'Music could not load'}
                  description={currentError}
                />
              ) : currentItems.length === 0 ? (
                <EmptyState
                  title="No results found"
                  description="Try another keyword, remove a filter, or switch tabs to explore a broader media selection."
                />
              ) : (
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                  {currentItems.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {activeTab === 'videos' ? (
                        <VideoCard video={item} />
                      ) : (
                        <MusicCard item={item} />
                      )}
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <Footer />
    </main>
  );
}