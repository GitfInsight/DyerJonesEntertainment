'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';

interface NewsletterSignup {
  id?: number;
  email: string;
  timestamp: string;
  ip_address?: string;
  created_at?: string;
}

export default function NewsletterAdmin() {
  const [signups, setSignups] = useState<NewsletterSignup[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const router = useRouter();

  const fetchSignups = useCallback(async () => {
    try {
      const response = await fetch('/api/admin/newsletter/data');
      if (response.status === 401) {
        router.push('/admin/login');
        return;
      }
      
      const data = await response.json();
      if (response.ok) {
        setSignups(data.signups || []);
      } else {
        setError(data.error || 'Failed to fetch signups');
      }
    } catch {
      setError('Network error');
    } finally {
      setLoading(false);
    }
  }, [router]);

  useEffect(() => {
    fetchSignups();
  }, [fetchSignups]);

  const handleLogout = async () => {
    try {
      await fetch('/api/admin/auth', { method: 'DELETE' });
      router.push('/admin/login');
    } catch {
      // Force redirect even if logout fails
      router.push('/admin/login');
    }
  };

  const handleExport = () => {
    window.open('/api/admin/newsletter/export', '_blank');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-gray-900 text-white px-4 py-2 rounded-md"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  // Sort signups by timestamp (newest first)
  const sortedSignups = [...signups].sort((a, b) => 
    new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  );

  const last7Days = signups.filter(s => 
    new Date(s.timestamp) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
  ).length;

  const last30Days = signups.filter(s => 
    new Date(s.timestamp) > new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
  ).length;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-2xl font-playfair font-bold text-gray-900">
                Newsletter Admin Dashboard
              </h1>
              <p className="text-gray-600">ConTempo Studios</p>
            </div>
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Total Subscribers</h3>
            <p className="text-3xl font-bold text-gray-900">{signups.length}</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Last 7 Days</h3>
            <p className="text-3xl font-bold text-gray-900">{last7Days}</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Last 30 Days</h3>
            <p className="text-3xl font-bold text-gray-900">{last30Days}</p>
          </div>
        </div>

        {/* Export Button */}
        <div className="mb-6">
          <button
            onClick={handleExport}
            className="bg-gray-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800 transition-colors"
          >
            Export as CSV
          </button>
        </div>

        {/* Signups List */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Recent Signups</h2>
          </div>
          
          {sortedSignups.length === 0 ? (
            <div className="p-6 text-center text-gray-500">
              No newsletter signups yet.
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {sortedSignups.map((signup, index) => (
                <div key={index} className="px-6 py-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold text-gray-900">{signup.email}</p>
                      <p className="text-sm text-gray-600">
                        {new Date(signup.timestamp).toLocaleString()}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500">IP: {signup.ip_address || 'unknown'}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 