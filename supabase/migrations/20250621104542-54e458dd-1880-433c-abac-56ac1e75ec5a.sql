
-- Create table for RSVP responses
CREATE TABLE public.rsvp_responses (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  attendance TEXT NOT NULL CHECK (attendance IN ('hadir', 'tidak-hadir')),
  guest_count INTEGER DEFAULT 1,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.rsvp_responses ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to read RSVP responses (for public wishes display)
CREATE POLICY "Anyone can view RSVP responses" 
  ON public.rsvp_responses 
  FOR SELECT 
  USING (true);

-- Create policy to allow anyone to insert RSVP responses
CREATE POLICY "Anyone can create RSVP responses" 
  ON public.rsvp_responses 
  FOR INSERT 
  WITH CHECK (true);
