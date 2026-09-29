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
    id: 'food-in-space',
    title: 'Food in Space Capstone Project',
    blurb:
      'Led a team of four developers to deliver an immersive VR training simulation from concept to final release. Owned sprint planning, task allocation and stakeholder communication with academic and industry reviewers. Presented the final product to university and industry panels, achieving top marks for innovation and execution.',
    tags: ['Leadership', 'Stakeholder Communication', 'UX', 'Unity', 'C#', 'Team Collaboration'],
    featured: false,
    links: {
      learnMore: 'https://www.rmit.edu.au/news/all-news/2024/july/space-food-aroma',
    },
  },
  {
    id: 'team-ecommerce',
    title: 'E-Commerce Clothing Store',
    blurb:
      'Built a full-featured e-commerce platform including authentication, an admin panel and shopping cart logic. Implemented secure authentication and improved database query performance for a smoother user experience. Developed forum functionality and user profiles to simulate real-world commerce systems.',
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Team Collaboration'],
    featured: false,
    links: {
      code: 'https://github.com/isaackozma/Web-application-project',
    },
  },
  {
    id: 'burrito-king',
    title: 'Burrito King Ordering System',
    blurb:
      'Built a modular JavaFX application for ordering with dynamic ingredient selection and pricing logic. Designed the OOP structure and validated inputs with a real-time pricing summary. Simulated a real-world ordering flow with modular functions for order summary and receipt logic.',
    tags: ['Java', 'JavaFX', 'Databases', 'Problem Solving'],
    featured: false,
    links: {
      code: 'https://github.com/FurtherProgramming2410/burrito-king-restaurant-isaackozma',
    },
  },
];
