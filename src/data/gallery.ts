export interface GalleryWheel {
  id: string;
  name: string;
  creator: string;
  views: number;
  createdAt: Date;
  items: { name: string; color: string }[];
}

export const GALLERY_WHEELS: GalleryWheel[] = [
  {
    id: 'dinner-ideas',
    name: "What's for Dinner?",
    creator: 'Anonymous',
    views: 9821,
    createdAt: new Date('2025-05-10'),
    items: [
      { name: 'Pizza',   color: '#EF4444' },
      { name: 'Tacos',   color: '#F97316' },
      { name: 'Sushi',   color: '#EAB308' },
      { name: 'Pasta',   color: '#22C55E' },
      { name: 'Burgers', color: '#3B82F6' },
      { name: 'Curry',   color: '#A855F7' },
    ],
  },
  {
    id: 'movie-night',
    name: 'Movie Night Picker',
    creator: 'Anonymous',
    views: 7643,
    createdAt: new Date('2025-05-12'),
    items: [
      { name: 'Horror',   color: '#EF4444' },
      { name: 'Comedy',   color: '#EAB308' },
      { name: 'Sci-Fi',   color: '#3B82F6' },
      { name: 'Romance',  color: '#EC4899' },
      { name: 'Action',   color: '#F97316' },
      { name: 'Thriller', color: '#6B7280' },
    ],
  },
  {
    id: 'team-lunch',
    name: 'Team Lunch Spot',
    creator: 'Anonymous',
    views: 6190,
    createdAt: new Date('2025-05-08'),
    items: [
      { name: 'Chipotle',    color: '#EF4444' },
      { name: 'Subway',      color: '#22C55E' },
      { name: 'Thai Palace', color: '#F97316' },
      { name: 'Noodle Bar',  color: '#EAB308' },
      { name: 'Pizza Hut',   color: '#EC4899' },
    ],
  },
  {
    id: 'weekend-activity',
    name: 'Weekend Activity',
    creator: 'Anonymous',
    views: 5402,
    createdAt: new Date('2025-05-14'),
    items: [
      { name: 'Hike',        color: '#22C55E' },
      { name: 'Movie',       color: '#3B82F6' },
      { name: 'Game Night',  color: '#A855F7' },
      { name: 'Beach Day',   color: '#06B6D4' },
      { name: 'Cook at home',color: '#F97316' },
      { name: 'Museum',      color: '#A16207' },
    ],
  },
  {
    id: 'chores',
    name: 'Chore Picker',
    creator: 'Anonymous',
    views: 4889,
    createdAt: new Date('2025-05-03'),
    items: [
      { name: 'Dishes',    color: '#06B6D4' },
      { name: 'Vacuuming', color: '#A855F7' },
      { name: 'Laundry',   color: '#EC4899' },
      { name: 'Trash',     color: '#6B7280' },
      { name: 'Mopping',   color: '#3B82F6' },
      { name: 'Dusting',   color: '#EAB308' },
    ],
  },
  {
    id: 'ice-cream',
    name: 'Ice Cream Flavours',
    creator: 'Anonymous',
    views: 4211,
    createdAt: new Date('2025-05-15'),
    items: [
      { name: 'Vanilla',      color: '#EAB308' },
      { name: 'Chocolate',    color: '#A16207' },
      { name: 'Strawberry',   color: '#EC4899' },
      { name: 'Mint Choc',    color: '#22C55E' },
      { name: 'Cookie Dough', color: '#F97316' },
      { name: 'Salted Caramel',color: '#EF4444' },
    ],
  },
  {
    id: 'workout',
    name: 'Daily Workout',
    creator: 'Anonymous',
    views: 3987,
    createdAt: new Date('2025-05-06'),
    items: [
      { name: 'Run 5km',   color: '#EF4444' },
      { name: 'Yoga',      color: '#84CC16' },
      { name: 'Weights',   color: '#3B82F6' },
      { name: 'HIIT',      color: '#F97316' },
      { name: 'Swim',      color: '#06B6D4' },
      { name: 'Rest Day',  color: '#6B7280' },
    ],
  },
  {
    id: 'travel',
    name: 'Next Vacation',
    creator: 'Anonymous',
    views: 3756,
    createdAt: new Date('2025-05-13'),
    items: [
      { name: 'Bali',      color: '#22C55E' },
      { name: 'Paris',     color: '#EC4899' },
      { name: 'Tokyo',     color: '#EF4444' },
      { name: 'New York',  color: '#3B82F6' },
      { name: 'Sydney',    color: '#06B6D4' },
      { name: 'Maldives',  color: '#14B8A6' },
    ],
  },
  {
    id: 'truth-dare',
    name: 'Truth or Dare',
    creator: 'Anonymous',
    views: 3543,
    createdAt: new Date('2025-05-09'),
    items: [
      { name: 'Truth',       color: '#3B82F6' },
      { name: 'Dare',        color: '#EF4444' },
      { name: 'Double Dare', color: '#F97316' },
      { name: 'Pass',        color: '#6B7280' },
    ],
  },
  {
    id: 'coffee',
    name: 'Coffee Order',
    creator: 'Anonymous',
    views: 3201,
    createdAt: new Date('2025-05-11'),
    items: [
      { name: 'Latte',       color: '#A16207' },
      { name: 'Cappuccino',  color: '#F97316' },
      { name: 'Flat White',  color: '#EAB308' },
      { name: 'Oat Latte',   color: '#84CC16' },
      { name: 'Cold Brew',   color: '#3B82F6' },
    ],
  },
  {
    id: 'board-games',
    name: 'Board Game Night',
    creator: 'Anonymous',
    views: 2988,
    createdAt: new Date('2025-05-05'),
    items: [
      { name: 'Catan',      color: '#22C55E' },
      { name: 'Codenames',  color: '#3B82F6' },
      { name: 'Ticket Ride',color: '#EF4444' },
      { name: 'Pandemic',   color: '#A855F7' },
      { name: 'Carcassonne',color: '#F97316' },
    ],
  },
  {
    id: 'pizza-toppings',
    name: 'Pizza Toppings',
    creator: 'Anonymous',
    views: 2741,
    createdAt: new Date('2025-05-07'),
    items: [
      { name: 'Pepperoni',   color: '#EF4444' },
      { name: 'Mushroom',    color: '#A16207' },
      { name: 'Olives',      color: '#22C55E' },
      { name: 'Pineapple',   color: '#EAB308' },
      { name: 'Ham',         color: '#EC4899' },
      { name: 'BBQ Chicken', color: '#F97316' },
    ],
  },
  {
    id: 'study-break',
    name: 'Study Break Activity',
    creator: 'Anonymous',
    views: 2503,
    createdAt: new Date('2025-05-16'),
    items: [
      { name: 'Walk',         color: '#22C55E' },
      { name: 'Snack Break',  color: '#F97316' },
      { name: 'Stretch',      color: '#84CC16' },
      { name: 'Social Media', color: '#3B82F6' },
      { name: 'Nap',          color: '#A855F7' },
    ],
  },
  {
    id: 'music-genre',
    name: 'What to Listen To',
    creator: 'Anonymous',
    views: 2210,
    createdAt: new Date('2025-05-04'),
    items: [
      { name: 'Pop',       color: '#EC4899' },
      { name: 'Hip-Hop',   color: '#EF4444' },
      { name: 'Jazz',      color: '#3B82F6' },
      { name: 'Classical', color: '#A16207' },
      { name: 'Rock',      color: '#6B7280' },
      { name: 'Lo-Fi',     color: '#A855F7' },
    ],
  },
  {
    id: 'tv-show',
    name: 'TV Show Picker',
    creator: 'Anonymous',
    views: 1987,
    createdAt: new Date('2025-05-02'),
    items: [
      { name: 'Drama',       color: '#3B82F6' },
      { name: 'Comedy',      color: '#EAB308' },
      { name: 'Reality TV',  color: '#EC4899' },
      { name: 'Documentary', color: '#22C55E' },
      { name: 'Anime',       color: '#EF4444' },
    ],
  },
  {
    id: 'kindness',
    name: 'Random Act of Kindness',
    creator: 'Anonymous',
    views: 1734,
    createdAt: new Date('2025-05-17'),
    items: [
      { name: 'Buy coffee',   color: '#F97316' },
      { name: 'Write a note', color: '#EC4899' },
      { name: 'Donate',       color: '#22C55E' },
      { name: 'Compliment',   color: '#EAB308' },
      { name: 'Volunteer',    color: '#3B82F6' },
    ],
  },
  {
    id: 'date-night',
    name: 'Date Night Ideas',
    creator: 'Anonymous',
    views: 1521,
    createdAt: new Date('2025-05-18'),
    items: [
      { name: 'Dinner Out',   color: '#EF4444' },
      { name: 'Cooking',      color: '#F97316' },
      { name: 'Cinema',       color: '#3B82F6' },
      { name: 'Picnic',       color: '#22C55E' },
      { name: 'Bowling',      color: '#A855F7' },
      { name: 'Concert',      color: '#EC4899' },
    ],
  },
  {
    id: 'gift-ideas',
    name: 'Gift Ideas',
    creator: 'Anonymous',
    views: 1308,
    createdAt: new Date('2025-05-01'),
    items: [
      { name: 'Book',       color: '#A16207' },
      { name: 'Candle',     color: '#EAB308' },
      { name: 'Plant',      color: '#22C55E' },
      { name: 'Perfume',    color: '#EC4899' },
      { name: 'Wine',       color: '#EF4444' },
      { name: 'Experience', color: '#06B6D4' },
    ],
  },
  {
    id: 'conversation',
    name: 'Dinner Conversation',
    creator: 'Anonymous',
    views: 1102,
    createdAt: new Date('2025-05-19'),
    items: [
      { name: 'Childhood',   color: '#F97316' },
      { name: 'Dreams',      color: '#A855F7' },
      { name: 'Travel',      color: '#06B6D4' },
      { name: 'Funny Memory',color: '#EAB308' },
      { name: 'Hot Take',    color: '#EF4444' },
      { name: 'Future Plans',color: '#22C55E' },
    ],
  },
  {
    id: 'spin-colour',
    name: 'Spin a Colour',
    creator: 'Anonymous',
    views: 988,
    createdAt: new Date('2025-05-19'),
    items: [
      { name: 'Red',    color: '#EF4444' },
      { name: 'Orange', color: '#F97316' },
      { name: 'Yellow', color: '#EAB308' },
      { name: 'Green',  color: '#22C55E' },
      { name: 'Blue',   color: '#3B82F6' },
      { name: 'Purple', color: '#A855F7' },
      { name: 'Pink',   color: '#EC4899' },
      { name: 'Teal',   color: '#14B8A6' },
    ],
  },
];

/** Top N by view count. */
export function getTrending(limit = 6): GalleryWheel[] {
  return [...GALLERY_WHEELS].sort((a, b) => b.views - a.views).slice(0, limit);
}

/** Sorted by creation date, newest first. */
export function getNewest(): GalleryWheel[] {
  return [...GALLERY_WHEELS].sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
}

/** Format views with k suffix. */
export function formatViews(n: number): string {
  return n >= 1000 ? `${(n / 1000).toFixed(1)}k` : String(n);
}
