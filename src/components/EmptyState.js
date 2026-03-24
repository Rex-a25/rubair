import { Inbox } from 'lucide-react';

export default function EmptyState({ title, description }) {
  return (
    <div className="glass flex min-h-48 flex-col items-center justify-center rounded-2xl p-10 text-center">
      <Inbox className="mb-3 h-6 w-6 text-slate-400" />
      <h3 className="mb-2 font-medium">{title}</h3>
      <p className="max-w-md text-sm text-slate-400">{description}</p>
    </div>
  );
}
