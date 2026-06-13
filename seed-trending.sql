-- ============================================================
--  Seed the six trending gallery wheels with stable slugs.
--  Safe to re-run: ON CONFLICT updates title + entries in place.
--  Run in Supabase SQL Editor after supabase-setup.sql.
-- ============================================================

INSERT INTO wheels (slug, title, entries) VALUES

  ('dinner-ideas', 'What''s for Dinner?', '[
    {"name":"Pizza",   "color":"#EF4444"},
    {"name":"Tacos",   "color":"#F97316"},
    {"name":"Sushi",   "color":"#EAB308"},
    {"name":"Pasta",   "color":"#22C55E"},
    {"name":"Burgers", "color":"#3B82F6"},
    {"name":"Curry",   "color":"#A855F7"}
  ]'::jsonb),

  ('movie-night', 'Movie Night Picker', '[
    {"name":"Horror",   "color":"#EF4444"},
    {"name":"Comedy",   "color":"#EAB308"},
    {"name":"Sci-Fi",   "color":"#3B82F6"},
    {"name":"Romance",  "color":"#EC4899"},
    {"name":"Action",   "color":"#F97316"},
    {"name":"Thriller", "color":"#6B7280"}
  ]'::jsonb),

  ('team-lunch', 'Team Lunch Spot', '[
    {"name":"Chipotle",    "color":"#EF4444"},
    {"name":"Subway",      "color":"#22C55E"},
    {"name":"Thai Palace", "color":"#F97316"},
    {"name":"Noodle Bar",  "color":"#EAB308"},
    {"name":"Pizza Hut",   "color":"#EC4899"}
  ]'::jsonb),

  ('weekend-activity', 'Weekend Activity', '[
    {"name":"Hike",         "color":"#22C55E"},
    {"name":"Movie",        "color":"#3B82F6"},
    {"name":"Game Night",   "color":"#A855F7"},
    {"name":"Beach Day",    "color":"#06B6D4"},
    {"name":"Cook at home", "color":"#F97316"},
    {"name":"Museum",       "color":"#A16207"}
  ]'::jsonb),

  ('chores', 'Chore Picker', '[
    {"name":"Dishes",    "color":"#06B6D4"},
    {"name":"Vacuuming", "color":"#A855F7"},
    {"name":"Laundry",   "color":"#EC4899"},
    {"name":"Trash",     "color":"#6B7280"},
    {"name":"Mopping",   "color":"#3B82F6"},
    {"name":"Dusting",   "color":"#EAB308"}
  ]'::jsonb),

  ('ice-cream', 'Ice Cream Flavours', '[
    {"name":"Vanilla",        "color":"#EAB308"},
    {"name":"Chocolate",      "color":"#A16207"},
    {"name":"Strawberry",     "color":"#EC4899"},
    {"name":"Mint Choc",      "color":"#22C55E"},
    {"name":"Cookie Dough",   "color":"#F97316"},
    {"name":"Salted Caramel", "color":"#EF4444"}
  ]'::jsonb)

ON CONFLICT (slug) DO UPDATE
  SET title   = EXCLUDED.title,
      entries = EXCLUDED.entries;
