interface BlogImage {
  url: string;
  alt: string;
}

export interface BlogEntry {
  id: number;
  image: BlogImage;
  news: string;
  heading: string;
  desc: string;
  authorImage: string;
  authorName: string;
  date: string;
}

interface BlogCategory {
  [categoryName: string]: BlogEntry[];
}

interface BlogData {
  data: BlogCategory;
}

const generateUniqueId = (() => {
  let id = 1;
  return () => id++;
})();

export const blogCardData: BlogData = {
  data: {
    Learn: [
      {
        id: generateUniqueId(),
        image: {
          url: "./images/card-img.svg",
          alt: "Learn image"
        },
        news: "Learning",
        heading: "How to Master JavaScript in 2024",
        desc: "A comprehensive guide to learning JavaScript from scratch.",
        authorImage: "./images/author1.svg",
        authorName: "Jane Doe",
        date: "10 Dec 2024"
      },
      {
        id: generateUniqueId(),
        image: {
          url: "./images/card-img.svg",
          alt: "Learn image"
        },
        news: "Learning",
        heading: "Advanced React Patterns",
        desc: "Learn about advanced patterns in React for building scalable apps.",
        authorImage: "./images/author2.svg",
        authorName: "John Doe",
        date: "15 Nov 2024"
      }
    ],
    Tools: [
      {
        id: generateUniqueId(),
        image: {
          url: "./images/card-img.svg",
          alt: "card image"
        },
        news: "Tools",
        heading: "Best productivity tools",
        desc: "Explore tools to increase your work efficiency.",
        authorImage: "./images/card-avtar.svg",
        authorName: "Sam Smith",
        date: "01 Jan 2025"
      },
      {
        id: generateUniqueId(),
        image: {
          url: "./images/card-img.svg",
          alt: "card image"
        },
        news: "Tools",
        heading: "Best productivity tools",
        desc: "Explore tools to increase your work efficiency.",
        authorImage: "./images/card-avtar.svg",
        authorName: "Sam Smith",
        date: "01 Jan 2025"
      },
      {
        id: generateUniqueId(),
        image: {
          url: "./images/card-img.svg",
          alt: "card image"
        },
        news: "Tools",
        heading: "Best productivity tools",
        desc: "Explore tools to increase your work efficiency.",
        authorImage: "./images/card-avtar.svg",
        authorName: "Sam Smith",
        date: "01 Jan 2025"
      },
      {
        id: generateUniqueId(),
        image: {
          url: "./images/card-img.svg",
          alt: "card image"
        },
        news: "Tools",
        heading: "Best productivity tools",
        desc: "Explore tools to increase your work efficiency.",
        authorImage: "./images/card-avtar.svg",
        authorName: "Sam Smith",
        date: "01 Jan 2025"
      }
    ],
    Tech: [
      {
        id: generateUniqueId(),
        image: {
          url: "./images/card-img.svg",
          alt: "card image"
        },
        news: "Tech",
        heading: "Emerging technologies of 2024",
        desc: "A deep dive into the most exciting technologies this year.",
        authorImage: "./images/card-avtar.svg",
        authorName: "Alex Johnson",
        date: "20 Oct 2024"
      }
    ],
    Jobs: [
      {
        id: generateUniqueId(),
        image: {
          url: "./images/card-img.svg",
          alt: "Job image"
        },
        news: "Jobs",
        heading: "React Developer Position",
        desc: "Join our team as a React Developer and work on cutting-edge projects.",
        authorImage: "./images/job-avtar.svg",
        authorName: "Hiring Manager",
        date: "05 Dec 2024"
      },
      {
        id: generateUniqueId(),
        image: {
          url: "./images/card-img.svg",
          alt: "Job image"
        },
        news: "Jobs",
        heading: "Backend Developer Role",
        desc: "We are looking for a skilled Backend Developer to join our team.",
        authorImage: "./images/job-avtar.svg",
        authorName: "Hiring Manager",
        date: "12 Nov 2024"
      }
    ],
    Inspiration: [
      {
        id: generateUniqueId(),
        image: {
          url: "./images/card-img.svg",
          alt: "Inspiration image"
        },
        news: "Inspiration",
        heading: "Overcoming Challenges in Tech",
        desc: "How to stay motivated and overcome the obstacles in the tech industry.",
        authorImage: "./images/inspiration-avtar.svg",
        authorName: "Michael Scott",
        date: "25 Oct 2024"
      },
      {
        id: generateUniqueId(),
        image: {
          url: "./images/card-img.svg",
          alt: "Inspiration image"
        },
        news: "Inspiration",
        heading: "The Power of Perseverance",
        desc: "Inspiration for developers to keep pushing forward through adversity.",
        authorImage: "./images/inspiration-avtar.svg",
        authorName: "Rachel Green",
        date: "30 Oct 2024"
      }
    ],
    News: [
      {
        id: generateUniqueId(),
        image: {
          url: "./images/card-img.svg",
          alt: "News image"
        },
        news: "News",
        heading: "Tech Industry News: Latest Updates",
        desc: "Stay up to date with the latest happenings in the tech world.",
        authorImage: "./images/news-avtar.svg",
        authorName: "Mark Zuckerberg",
        date: "01 Dec 2024"
      },
      {
        id: generateUniqueId(),
        image: {
          url: "./images/card-img.svg",
          alt: "News image"
        },
        news: "News",
        heading: "New Tech Regulation Changes",
        desc: "Understanding the new tech regulations and how they affect the industry.",
        authorImage: "./images/news-avtar.svg",
        authorName: "Sheryl Sandberg",
        date: "10 Nov 2024"
      }
    ]
  }
};
