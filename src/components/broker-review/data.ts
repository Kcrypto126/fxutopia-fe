export interface ReviewProps {
  title: string;
  website: string;
  category: string;
  user: {
    avatar: string;
    username: string;
    rating: number;
    review: number;
  };
  subtitle: string;
  description: string;
  tags: string[];
  comments: number;
  date: string;
}

export const REVIEWS = [
  {
    title: "MetaTrader Solutions",
    website: "metatradersolutions.com",
    category: "Hot",
    user: {
      avatar: "/assets/home/review-avatar1.jpg",
      username: "TraderPro_Mike",
      rating: 4.9,
      review: 160,
    },
    subtitle: "Warning: Withdrawal delays and poor customer service",
    description:
      "Tried to withdraw $2,500 for 3 weeks. Each time I contact support, they give different excuses.",
    tags: ["Withdrawal Issues", "Poor Support"],
    comments: 14,
    date: "2h ago",
  },
  {
    title: "GlobeForex Pro",
    website: "globeforexpro.net",
    category: "Top Rated",
    user: {
      avatar: "/assets/home/review-avatar2.jpg",
      username: "ForexQueen_Sarah",
      rating: 4.9,
      review: 96,
    },
    subtitle: "Warning: Withdrawal delays and poor customer service",
    description:
      "Tried to withdraw $2,500 for 3 weeks. Each time I contact support, they give different excuses.",
    tags: ["Withdrawal Issues", "Low Spreads"],
    comments: 22,
    date: "5h ago",
  },
  {
    title: "Quantum Trading Hub",
    website: "quantumtradinghub.io",
    category: "Newest",
    user: {
      avatar: "/assets/home/review-avatar3.jpg",
      username: "CryptoNinja_Alex",
      rating: 4.9,
      review: 120,
    },
    subtitle: "Warning: Withdrawal delays and poor customer service",
    description:
      "Tried to withdraw $2,500 for 3 weeks. Each time I contact support, they give different excuses.",
    tags: ["Platform Issues", "Wide Spreads"],
    comments: 18,
    date: "3h ago",
  },
  {
    title: "AlphaFX Elite",
    website: "alphafxelite.com",
    category: "Claimed",
    user: {
      avatar: "/assets/home/review-avatar4.jpg",
      username: "MarketMaven_Lisa",
      rating: 4.9,
      review: 130,
    },
    subtitle: "Outstanding broker for serious traders – Highly recommended!",
    description:
      "After trying 6 different brokers, this is the best. ECN model with transparent pricing, lightning-fast execution.",
    tags: ["ECN Trading", "Fast Withdrawals"],
    comments: 42,
    date: "2d ago",
  },
  {
    title: "TradeTech Innovations",
    website: "tradetechinnovations.org",
    category: "Deleted",
    user: {
      avatar: "/assets/home/review-avatar5.jpg",
      username: "MarketMaven_Lisa",
      rating: 4.9,
      review: 190,
    },
    subtitle: "Great for beginners but lacks advanced features",
    description:
      "Comprehensive education and unlimited demo. However, lacks depth for pro-level trading.",
    tags: ["Good for Beginners", "Limited Features"],
    comments: 21,
    date: "3d ago",
  },
  {
    title: "GlobeForex Pro",
    website: "globeforexpro.net",
    category: "Top Rated",
    user: {
      avatar: "/assets/home/review-avatar6.jpg",
      username: "ForexQueen_Sarah",
      rating: 4.9,
      review: 96,
    },
    subtitle: "Warning: Withdrawal delays and poor customer service",
    description:
      "Tried to withdraw $2,500 for 3 weeks. Each time I contact support, they give different excuses.",
    tags: ["Withdrawal Issues", "Low Spreads"],
    comments: 22,
    date: "5h ago",
  },
  {
    title: "Quantum Trading Hub",
    website: "quantumtradinghub.io",
    category: "Newest",
    user: {
      avatar: "/assets/home/review-avatar7.jpg",
      username: "CryptoNinja_Alex",
      rating: 4.9,
      review: 120,
    },
    subtitle: "Warning: Withdrawal delays and poor customer service",
    description:
      "Tried to withdraw $2,500 for 3 weeks. Each time I contact support, they give different excuses.",
    tags: ["Platform Issues", "Wide Spreads"],
    comments: 18,
    date: "3h ago",
  },
  {
    title: "AlphaFX Elite",
    website: "alphafxelite.com",
    category: "Claimed",
    user: {
      avatar: "/assets/home/review-avatar4.jpg",
      username: "MarketMaven_Lisa",
      rating: 4.9,
      review: 130,
    },
    subtitle: "Outstanding broker for serious traders – Highly recommended!",
    description:
      "After trying 6 different brokers, this is the best. ECN model with transparent pricing, lightning-fast execution.",
    tags: ["ECN Trading", "Fast Withdrawals"],
    comments: 42,
    date: "2d ago",
  },
  {
    title: "TradeTech Innovations",
    website: "tradetechinnovations.org",
    category: "Deleted",
    user: {
      avatar: "/assets/home/review-avatar3.jpg",
      username: "MarketMaven_Lisa",
      rating: 4.9,
      review: 190,
    },
    subtitle: "Great for beginners but lacks advanced features",
    description:
      "Comprehensive education and unlimited demo. However, lacks depth for pro-level trading.",
    tags: ["Good for Beginners", "Limited Features"],
    comments: 21,
    date: "3d ago",
  },
];
