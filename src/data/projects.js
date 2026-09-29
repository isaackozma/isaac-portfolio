export const projects = [
  {
    id: 'nfl-combine-analytics',
    title: 'NFL Combine Analytics Dashboard',
    blurb:
      'Solo-built Streamlit app that scores NFL Combine athletes out of 100 using a position-adjusted algorithm, ranks players within their position, and finds historically similar athletes from combine metrics.',
    tags: ['Python', 'Pandas', 'NumPy', 'Streamlit', 'Data Visualisation'],
    image: '/projects/nfl-combine.png',
    imageAlt:
      'Screenshot of the NFL Combine Analytics dashboard, showing a player leaderboard with athletic scores and a bar chart of the top ten scores.',
    featured: true,
    links: {
      demo: 'https://nfl-combine-analytics-bfpf5stst4sptnsw536ndy.streamlit.app',
      code: 'https://github.com/isaackozma/nfl-combine-analytics.git',
    },
  },
  {
    id: 'devops-deployment',
    title: 'DevOps Infrastructure Deployment',
    blurb:
      'Provisioned AWS infrastructure with Terraform and Ansible, including EC2 instances, load balancing and automated environment configuration. Containerised a full stack app and PostgreSQL database with Docker, and set up remote state with S3 and DynamoDB to support CI/CD.',
    tags: ['AWS', 'Terraform', 'Ansible', 'Docker', 'PostgreSQL'],
    featured: true,
    links: {
      code: 'https://github.com/rmit-sdo-2024-s2/S3791361-S3925811-assignment-2',
    },
  },
  {
    id: 'super-nice-website',
    title: 'Super Nice Clothing',
    blurb:
      'Web developer for a Melbourne clothing brand. Worked directly with the owner to align the site with business goals and brand identity, focusing on usability, mobile responsiveness and brand consistency. Now rebuilding it as a custom Shopify theme (in development).',
    tags: ['Shopify', 'Liquid', 'JavaScript', 'Responsive Design'],
    featured: true,
    note: 'Redevelopment in progress',
    links: {},
  },
  {
    id: 'burrito-king',
    title: 'Burrito King Ordering App',
    blurb:
      'Desktop GUI restaurant ordering system for Burrito King, handling menu navigation, ordering logic, item and price calculations, and receipt generation.',
    tags: ['Java', 'JavaFX', 'Databases', 'Problem Solving'],
    featured: false,
    links: {
      code: 'https://github.com/FurtherProgramming2410/burrito-king-restaurant-isaackozma',
    },
  },
  {
    id: 'team-ecommerce',
    title: 'Team E-Commerce Site',
    blurb:
      'Collaborative e-commerce website built from scratch with responsive design, product browsing, cart functionality and user accounts.',
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Team Collaboration'],
    featured: false,
    links: {
      code: 'https://github.com/isaackozma/Web-application-project',
    },
  },
  {
    id: 'food-in-space',
    title: 'Food in Space Capstone Project',
    blurb:
      'Led development within an RMIT innovation project improving food experiences for astronauts using VR and sensory technology. Worked with stakeholders and managed a team on UX and system design.',
    tags: ['Leadership', 'Stakeholder Communication', 'UX', 'Unity', 'C#', 'Team Collaboration'],
    featured: false,
    links: {
      learnMore: 'https://www.rmit.edu.au/news/all-news/2024/july/space-food-aroma',
    },
  },
];
