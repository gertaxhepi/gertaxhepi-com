CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT,
  message TEXT NOT NULL,
  ip_hash TEXT,
  user_agent TEXT,
  status TEXT NOT NULL DEFAULT 'received',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT ALL ON public.contact_submissions TO service_role;

ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- No anon/authenticated policies: only service role (backend) may access.

CREATE INDEX idx_contact_submissions_ip_hash_created_at
  ON public.contact_submissions (ip_hash, created_at DESC);
CREATE INDEX idx_contact_submissions_created_at
  ON public.contact_submissions (created_at DESC);