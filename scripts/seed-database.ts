import { query } from '../lib/db';

// Seed data for the college website database
async function seedDatabase() {
  try {
    console.log('Starting database seeding...');

    // Seed departments
    const departments = [
      { name: 'Computer Science & Engineering', code: 'CSE', icon: 'Computer', students_count: '1200+', labs_count: 12 },
      { name: 'Information Science & Engineering', code: 'ISE', icon: 'Database', students_count: '800+', labs_count: 8 },
      { name: 'Electronics & Communication', code: 'ECE', icon: 'Circuit', students_count: '950+', labs_count: 10 },
      { name: 'Mechanical Engineering', code: 'ME', icon: 'Gear', students_count: '700+', labs_count: 15 },
      { name: 'Civil Engineering', code: 'CV', icon: 'Building', students_count: '500+', labs_count: 6 },
      { name: 'Electrical & Electronics', code: 'EEE', icon: 'Lightning', students_count: '600+', labs_count: 9 },
      { name: 'Artificial Intelligence & ML', code: 'AI&ML', icon: 'Robot', students_count: '400+', labs_count: 5 },
      { name: 'Data Science', code: 'DS', icon: 'Chart', students_count: '350+', labs_count: 4 }
    ];

    for (const dept of departments) {
      await query(`
        INSERT INTO departments (name, code, icon, students_count, labs_count) 
        VALUES ($1, $2, $3, $4, $5)
        ON CONFLICT (code) DO NOTHING
      `, [dept.name, dept.code, dept.icon, dept.students_count, dept.labs_count]);
    }

    // Seed programs
    const programs = [
      {
        title: 'Bachelor of Technology (B.E.)',
        subtitle: 'Undergraduate programs with industry-focused curricula.',
        type: 'undergraduate',
        icon: 'GraduationCap',
        color: 'blue'
      },
      {
        title: 'Master of Technology (M.Tech)',
        subtitle: 'Advanced postgraduate engineering specializations.',
        type: 'postgraduate',
        icon: 'Microscope',
        color: 'indigo'
      },
      {
        title: 'Management & Applications',
        subtitle: 'Professional postgraduate degree programs.',
        type: 'postgraduate',
        icon: 'Briefcase',
        color: 'cyan'
      },
      {
        title: 'PhD & MSc (Engg)',
        subtitle: 'Research programs for academic and professional growth.',
        type: 'research',
        icon: 'University',
        color: 'amber'
      }
    ];

    for (const program of programs) {
      await query(`
        INSERT INTO programs (title, subtitle, type, icon, color) 
        VALUES ($1, $2, $3, $4, $5)
        ON CONFLICT DO NOTHING
      `, [program.title, program.subtitle, program.type, program.icon, program.color]);
    }

    // Seed events
    const events = [
      {
        title: 'AURA 2026: Cultural Extravaganza',
        date: '25-27 May 2026',
        location: 'Main Auditorium',
        type: 'Cultural',
        image_url: 'https://images.unsplash.com/photo-1514525253344-991c0e37456d?auto=format&fit=crop&q=80&w=400'
      },
      {
        title: 'International AI Symposium',
        date: '12 May 2026',
        location: 'Conference Hall 1',
        type: 'Technical',
        image_url: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=400'
      },
      {
        title: 'Placement Boot Camp 2026',
        date: '05 May 2026',
        location: 'Training Block',
        type: 'Career',
        image_url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=400'
      },
      {
        title: 'Alumni Meet \'Homecoming\'',
        date: '20 April 2026',
        location: 'Campus Lawns',
        type: 'Alumni',
        image_url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=400'
      }
    ];

    for (const event of events) {
      await query(`
        INSERT INTO events (title, date, location, type, image_url) 
        VALUES ($1, $2, $3, $4, $5)
        ON CONFLICT DO NOTHING
      `, [event.title, event.date, event.location, event.type, event.image_url]);
    }

    // Seed news
    const news = [
      {
        title: 'Admissions Open for 2026 Academic Year',
        date: '18 April',
        category: 'Admissions',
        image_url: 'https://images.unsplash.com/photo-1523050853064-dbad350c746b?auto=format&fit=crop&q=80&w=400'
      },
      {
        title: 'HSOE Ranks #1 in Placement Excellence',
        date: '15 April',
        category: 'Achievements',
        image_url: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=400'
      },
      {
        title: 'New Robotics Center to be inaugurated by CM',
        date: '12 April',
        category: 'Campus',
        image_url: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=400'
      },
      {
        title: 'International Conference on AI begins with Global Leaders',
        date: '10 April',
        category: 'Events',
        image_url: 'https://images.unsplash.com/photo-1540575861501-7ad0582373f3?auto=format&fit=crop&q=80&w=400'
      },
      {
        title: 'HSOE Scholars bag 5 Patents for Sustainable Tech',
        date: '08 April',
        category: 'Research',
        image_url: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=400'
      },
      {
        title: 'Inter-College Sports Fest \'AURA 2026\' concludes',
        date: '05 April',
        category: 'Campus Life',
        image_url: 'https://images.unsplash.com/photo-1541252260730-0412e8e2108e?auto=format&fit=crop&q=80&w=400'
      }
    ];

    for (const newsItem of news) {
      await query(`
        INSERT INTO news (title, date, category, image_url) 
        VALUES ($1, $2, $3, $4)
        ON CONFLICT DO NOTHING
      `, [newsItem.title, newsItem.date, newsItem.category, newsItem.image_url]);
    }

    // Seed placement companies
    const companies = [
      { name: 'Google', logo_url: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg', is_top_tier: true },
      { name: 'Microsoft', logo_url: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg', is_top_tier: true },
      { name: 'Amazon', logo_url: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg', is_top_tier: true },
      { name: 'Adobe', logo_url: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Adobe_Systems_logo_and_wordmark.svg', is_top_tier: true },
      { name: 'Cisco', logo_url: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg', is_top_tier: false },
      { name: 'Intel', logo_url: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Intel-logo.svg', is_top_tier: true },
      { name: 'Dell', logo_url: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Dell_logo_2016.svg', is_top_tier: false },
      { name: 'Oracle', logo_url: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg', is_top_tier: true }
    ];

    for (const company of companies) {
      await query(`
        INSERT INTO placement_companies (name, logo_url, is_top_tier) 
        VALUES ($1, $2, $3)
        ON CONFLICT (name) DO NOTHING
      `, [company.name, company.logo_url, company.is_top_tier]);
    }

    // Seed placement stats
    await query(`
      INSERT INTO placement_stats (placement_percentage, highest_package, average_package, total_recruiters, academic_year) 
      VALUES (100.00, '50 LPA', '8.5 LPA', 450, '2024-25')
      ON CONFLICT (academic_year) DO NOTHING
    `);

    // Seed research areas
    const researchAreas = [
      {
        title: 'Artificial Intelligence & Machine Learning',
        description: 'Advanced research in AI algorithms, neural networks, and machine learning applications.',
        icon: 'Brain',
        is_featured: true
      },
      {
        title: 'Water Resources & Hydraulic Engineering',
        description: 'Innovative solutions for water management, flood control, and sustainable hydraulic systems.',
        icon: 'Water',
        is_featured: true
      },
      {
        title: 'Renewable Energy Systems',
        description: 'Research in solar, wind, and other renewable energy technologies.',
        icon: 'Energy',
        is_featured: false
      },
      {
        title: 'Structural Engineering',
        description: 'Advanced materials and structural analysis for resilient infrastructure.',
        icon: 'Structure',
        is_featured: false
      }
    ];

    for (const area of researchAreas) {
      await query(`
        INSERT INTO research_areas (title, description, icon, is_featured) 
        VALUES ($1, $2, $3, $4)
        ON CONFLICT (title) DO NOTHING
      `, [area.title, area.description, area.icon, area.is_featured]);
    }

    // Seed hero slides
    const heroSlides = [
      {
        title: 'Engineering Excellence with Global Impact',
        subtitle: 'Welcome to HSOE Hohai School of Engineering, a premier destination for innovation and leadership in technical education.',
        image_url: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1920',
        sort_order: 0
      },
      {
        title: 'Shape the Future of Innovation',
        subtitle: 'Join a community where research meets real-world application, fostering the next generation of global engineers.',
        image_url: 'https://images.unsplash.com/photo-1523050853064-dbad350c746b?auto=format&fit=crop&q=80&w=1920',
        sort_order: 1
      }
    ];

    for (const slide of heroSlides) {
      await query(`
        INSERT INTO hero_slides (title, subtitle, image_url, sort_order) 
        VALUES ($1, $2, $3, $4)
        ON CONFLICT DO NOTHING
      `, [slide.title, slide.subtitle, slide.image_url, slide.sort_order]);
    }

    console.log('Database seeding completed successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

// Run the seeding function
seedDatabase().then(() => {
  console.log('Seeding completed. Exiting...');
  process.exit(0);
});
