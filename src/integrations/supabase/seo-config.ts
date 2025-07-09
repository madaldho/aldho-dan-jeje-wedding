// SEO Configuration for Supabase Integration

/**
 * This file contains SEO-friendly configurations for Supabase integration.
 * It helps optimize data fetching and caching strategies for better performance.
 */

import { createClient } from '@supabase/supabase-js';

// Cache duration in seconds
export const CACHE_DURATIONS = {
  WISHES: 60 * 5, // 5 minutes for wishes data
  RSVP_COUNT: 60 * 15, // 15 minutes for RSVP count
  STATIC_DATA: 60 * 60 * 24, // 24 hours for static data
};

// Function to create a Supabase client with optimized settings
export const createOptimizedClient = () => {
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
  const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;
  
  return createClient(supabaseUrl, supabaseKey, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
    },
    global: {
      headers: {
        'x-application-name': 'wedding-aldho-jeje',
      },
    },
  });
};

// Optimized Supabase client instance
export const optimizedSupabase = createOptimizedClient();

// Function to fetch wishes with caching for SEO
export const fetchWishesWithCaching = async (limit = 10) => {
  try {
    const { data, error } = await optimizedSupabase
      .from('rsvp_responses')
      .select('id, name, message, created_at')
      .not('message', 'is', null)
      .not('message', 'eq', '')
      .order('created_at', { ascending: false })
      .limit(limit)
      .options({
        count: 'exact',
        head: false,
        cache: {
          ttl: CACHE_DURATIONS.WISHES,
        },
      });

    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error('Error fetching wishes with caching:', error);
    return { data: null, error };
  }
};

// Function to get RSVP count with caching for SEO
export const getRSVPCountWithCaching = async () => {
  try {
    const { count, error } = await optimizedSupabase
      .from('rsvp_responses')
      .select('*', { count: 'exact', head: true })
      .eq('attendance', 'hadir')
      .options({
        cache: {
          ttl: CACHE_DURATIONS.RSVP_COUNT,
        },
      });

    if (error) throw error;
    return { count, error: null };
  } catch (error) {
    console.error('Error fetching RSVP count with caching:', error);
    return { count: 0, error };
  }
};