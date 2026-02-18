
-- Create plan_type enum
CREATE TYPE public.plan_type AS ENUM ('basic', 'business', 'premium');

-- Create entrepreneurs table
CREATE TABLE public.entrepreneurs (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id),
  business_name TEXT NOT NULL,
  category TEXT NOT NULL,
  description TEXT NOT NULL,
  phone TEXT,
  whatsapp TEXT,
  facebook TEXT,
  instagram TEXT,
  website TEXT,
  plan plan_type NOT NULL DEFAULT 'basic',
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Create entrepreneur photos table
CREATE TABLE public.emprendedor_fotos (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  entrepreneur_id UUID NOT NULL REFERENCES public.entrepreneurs(id) ON DELETE CASCADE,
  url TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.entrepreneurs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.emprendedor_fotos ENABLE ROW LEVEL SECURITY;

-- Public read for active entrepreneurs
CREATE POLICY "Anyone can view active entrepreneurs"
  ON public.entrepreneurs FOR SELECT
  USING (status = 'active');

-- Owners can manage their own
CREATE POLICY "Owners can insert their entrepreneur"
  ON public.entrepreneurs FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Owners can update their entrepreneur"
  ON public.entrepreneurs FOR UPDATE
  USING (auth.uid() = user_id);

-- Photos policies
CREATE POLICY "Anyone can view photos of active entrepreneurs"
  ON public.emprendedor_fotos FOR SELECT
  USING (EXISTS (
    SELECT 1 FROM public.entrepreneurs e
    WHERE e.id = entrepreneur_id AND e.status = 'active'
  ));

CREATE POLICY "Owners can manage their photos"
  ON public.emprendedor_fotos FOR INSERT
  WITH CHECK (EXISTS (
    SELECT 1 FROM public.entrepreneurs e
    WHERE e.id = entrepreneur_id AND auth.uid() = e.user_id
  ));

-- Updated_at trigger
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_entrepreneurs_updated_at
  BEFORE UPDATE ON public.entrepreneurs
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
