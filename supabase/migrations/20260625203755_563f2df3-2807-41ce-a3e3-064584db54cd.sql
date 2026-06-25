CREATE POLICY "Deny all access to anon and authenticated"
  ON public.contact_submissions
  AS RESTRICTIVE
  FOR ALL
  TO anon, authenticated
  USING (false)
  WITH CHECK (false);