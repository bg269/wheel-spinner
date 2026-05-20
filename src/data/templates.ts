export interface Template {
  id: string;
  label: string;
  emoji: string;
  description: string;
  entries: string[];
}

export const TEMPLATES: Template[] = [
  {
    id: 'classroom',
    label: 'Classroom',
    emoji: '🎓',
    description: 'Pick a student',
    entries: [
      'Alice', 'Ben', 'Chloe', 'Daniel', 'Emma',
      'Finn', 'Grace', 'Henry', 'Isla', 'Jack',
      'Katie', 'Liam', 'Mia', 'Noah', 'Olivia',
      'Patrick', 'Quinn', 'Ruby', 'Sam', 'Tara',
      'Uma', 'Victor', 'Wendy', 'Xander', 'Yasmin',
      'Zoe', 'Aiden', 'Bella', 'Charlie', 'Daisy',
    ],
  },
  {
    id: 'dinner',
    label: 'Dinner Ideas',
    emoji: '🍕',
    description: "What's for dinner?",
    entries: [
      'Pizza', 'Burgers', 'Sushi', 'Tacos', 'Pasta',
      'Thai Curry', 'Indian Takeaway', 'Greek Salad',
      'Steak Night', 'Fish & Chips', 'Ramen', 'BBQ',
      'Kebabs', 'Dim Sum', 'Vegan Bowl', 'Fried Chicken',
      'Poke Bowl', 'Nachos', 'Noodle Stir Fry', 'Homemade Soup',
    ],
  },
  {
    id: 'movies',
    label: 'Movie Picker',
    emoji: '🎬',
    description: 'Choose a film',
    entries: [
      'Inception', 'Interstellar', 'The Dark Knight', 'Parasite',
      'Pulp Fiction', 'The Matrix', 'Forrest Gump', 'Avatar',
      'Titanic', 'The Avengers', 'Jurassic Park', 'The Lion King',
      'Toy Story', 'Finding Nemo', 'Gladiator', 'The Godfather',
      'Back to the Future', 'Star Wars', 'Harry Potter', 'Oppenheimer',
    ],
  },
  {
    id: 'games',
    label: 'Game Night',
    emoji: '🎲',
    description: 'Pick a game',
    entries: [
      'Charades', 'Truth or Dare', 'Pictionary', 'Uno',
      'Jenga', 'Codenames', 'Catan', 'Monopoly',
      'Werewolf', 'Trivial Pursuit',
    ],
  },
];
