import React from 'react';
import { Skull } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-3">
        <Skull className="w-8 h-8 text-red-600" />
        <h1 className="text-3xl font-bold text-gray-900">Werewolf Game Manager</h1>
      </div>
      <nav className="mt-4 flex gap-4">
        <Link
          to="/"
          className="text-blue-500 hover:underline font-medium"
        >
          Home
        </Link>
        <Link
          to="/playerview"
          className="text-blue-500 hover:underline font-medium"
        >
          Player View
        </Link>
      </nav>
    </div>
  );
}
