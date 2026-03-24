'use client';

import { useMemo, useState } from 'react';
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
  trendingMusic,
  trendingVideos,
  videoCategories
} from '@/data/mockData';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('videos');
  const [query, setQuery] = useState('');
  const [selectedChip, setSelectedChip] = useState('All');
  const [loading, setLoading] = useState(false);

  const chips = activeTab === 'videos' ? ['All', ...videoCategories] : ['All', ...musicGenres];
  const data = activeTab === 'videos' ? trendingVideos : trendingMusic;

  const filteredItems = useMemo(() => {
    return data.filter((item) => {
      const haystack = `${item.title} ${item.creator || ''} ${item.artist || ''}`.toLowerCase();
      const matchQuery = haystack.includes(query.toLowerCase());
      const matchChip = selectedChip === 'All' || haystack.includes(selectedChip.toLowerCase());
      return matchQuery && matchChip;
    });
  }, [data, query, selectedChip]);

  const isEmptySearch = query.trim().length === 0 && selectedChip === 'All';

  return (
    <main className="min-h-screen">
      <Navbar dashboard />
      <section className="section-wrap py-8 sm:py-12">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">Creator Workspace</p>
            <h1 className="text-3xl font-semibold">Find the perfect {activeTab === 'videos' ? 'visuals' : 'soundtrack'}.</h1>
          </div>
          <SectionTabs
            active={activeTab}
            setActive={(tab) => {
              setLoading(true);
              setTimeout(() => {
                setActiveTab(tab);
                setSelectedChip('All');
                setQuery('');
                setLoading(false);
              }, 250);
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
          <h2 className="mb-4 text-lg font-semibold">{activeTab === 'videos' ? 'Trending clips' : 'Trending free tracks'}</h2>
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeTab}-${query}-${selectedChip}-${loading}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
            >
              {loading ? (
                <LoadingSkeleton />
              ) : isEmptySearch ? (
                <EmptyState
                  title={`Start searching ${activeTab === 'videos' ? 'videos' : 'music'}`}
                  description={`Use the search bar or ${activeTab === 'videos' ? 'category chips' : 'genre filters'} to discover curated media quickly.`}
                />
              ) : filteredItems.length === 0 ? (
                <EmptyState
                  title="No results found"
                  description="Try another keyword, remove a filter, or switch tabs to explore a broader media selection."
                />
              ) : (
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                  {filteredItems.map((item) => (
                    <motion.div key={item.id} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}>
                      {activeTab === 'videos' ? <VideoCard item={item} /> : <MusicCard item={item} />}
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
