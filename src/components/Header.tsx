import React from 'react';
import { Skull } from 'lucide-react';

export default function Header() {
  return (
    <div className="flex items-center gap-3 mb-6">
      <Skull className="w-8 h-8 text-red-600" />
      <h1 className="text-3xl font-bold text-gray-900">Werewolf Game Manager</h1>
    </div>
  );
}