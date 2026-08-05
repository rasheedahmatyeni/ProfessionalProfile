-- Contact messages for Rasheedah Matyeni's portfolio
CREATE TABLE contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- This is a public-facing contact form: allow anyone to INSERT,
-- but only allow SELECT/UPDATE/DELETE for authenticated owners.
CREATE POLICY "insert_contact_message"
  ON contact_messages FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "select_contact_messages"
  ON contact_messages FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "update_contact_messages"
  ON contact_messages FOR UPDATE
  TO authenticated
  USING (true) WITH CHECK (true);

CREATE POLICY "delete_contact_messages"
  ON contact_messages FOR DELETE
  TO authenticated
  USING (true);

-- Reasonable length guards (not data-destructive)
ALTER TABLE contact_messages
  ADD CONSTRAINT contact_messages_name_length CHECK (char_length(name) BETWEEN 1 AND 120),
  ADD CONSTRAINT contact_messages_email_length CHECK (char_length(email) BETWEEN 3 AND 160),
  ADD CONSTRAINT contact_messages_message_length CHECK (char_length(message) BETWEEN 1 AND 3000);

CREATE INDEX contact_messages_created_at_idx ON contact_messages (created_at DESC);
