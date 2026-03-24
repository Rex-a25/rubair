'use client';

import { Search } from 'lucide-react';

export default function SearchBar({ value, onChange, placeholder }) {
  return (
    <label className="glass flex items-center gap-3 rounded-2xl px-4 py-3">
      <Search className="h-4 w-4 text-slate-400" />
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-transparent text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none"
      />
    </label>
  );
}
