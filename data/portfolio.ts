export interface Project {
  id: string;
  number: string;
  title: string;
  date: string;
  category: 'web' | 'ml' | 'data';
  categoryLabel: string;
  description: string;
  results: string[];
  stack: string[];
  tags: string[];
  image: string;
  link: string;
  demo?: string;
  icon?: string;
  contribution: string;
  detailedResult: string;
  highlight: string;
}

export interface SkillCategory {
  title: string;
  category: string;
  icon?: string;
  tags?: string[];
  stat?: string;
  desc?: string;
  wide?: boolean;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  bullets: string[];
  link?: {
    text: string;
    url: string;
  };
}

export interface CertificationItem {
  icon: string;
  name: string;
  issuer: string;
  link: string;
}

export const portfolioData = {
  name: "MARGARETA VALENCIA",
  fullName: "Margareta Valencia Suci Handayani",
  role: "ML Engineer & Creative Developer",
  typingPhrases: [
    "Creative Web Developer",
    "Data Science Enthusiast",
    "Machine Learning Engineer"
  ],
  bioTag: "Available for Opportunities",
  summary:
    "Informatics graduate building intelligent systems at the intersection of Machine Learning and modern web development. Turning data into decisions, ideas into products.",
  aboutParagraphs: [
    "I'm an Informatics graduate passionate about Data Analytics and Web Development, with experience in developing data-driven applications, managing databases, and building responsive web platforms. My work includes machine learning projects, interactive systems, and full-stack web development using Python, PHP, SQL, and Laravel.",
    "With hands-on experience at Diskominfo and experience leading academic projects, I combine analytical thinking, technical skills, and a problem-solving mindset to create impactful digital solutions."
  ],
  stats: [
    { num: "94%", label: "ML Model Accuracy" },
    { num: "3+", label: "Shipped Projects" },
    { num: "4K+", label: "Training Images" },
    { num: "2+", label: "Published Research Papers" }
  ],
  terminalData: {
    name: "Margareta Valencia Suci Handayani",
    role: "Data Analyst & Web Developer",
    based_in: "Semarang, Indonesia",
    education: "S1 Informatika",
    focus: ["Web Development", "Data Scientist", "Data Analytics"],
    status: "Open to Work",
    available: true
  },
  contacts: {
    email: "margaretavalen16@gmail.com",
    linkedin: "https://www.linkedin.com/in/margareta-valencia-0ab1bb294/",
    github: "https://github.com/margaretavalen",
    resume: "/CV_en.pdf"
  },
  projects: [
    {
      id: "cleiv",
      number: "001",
      date: "OCT 2022",
      title: "CLEIV — Digital Laundry Platform",
      category: "web",
      categoryLabel: "Frontend · Creative",
      description:
        "A creative frontend project showcasing modern UI/UX design principles with clean layouts, smooth interactions, and responsive design patterns.",
      results: [
        "Developed a responsive laundry service website with modern user interface design",
        "Built interactive frontend features for service booking and customer navigation",
        "Improved user experience through mobile-friendly and responsive web layout"
      ],
      stack: ["HTML5", "Tailwind CSS", "JavaScript", "Responsive Design"],
      tags: ["Responsive UI", "Service Booking", "Mobile First"],
      image: "/assets/projects/cleiv.jpg",
      link: "https://github.com/margaretavalen/CLEIV",
      icon: "✨",
      contribution:
        "Designed and built the responsive frontend, service-booking interactions, navigation flow, and mobile-friendly interface.",
      detailedResult:
        "Delivered a modern laundry-service experience that works consistently across desktop and mobile screen sizes.",
      highlight: "Responsive booking experience across every device"
    },
    {
      id: "e-library",
      number: "002",
      date: "JUNE 2023",
      title: "E-Library — Digital Library Platform",
      category: "web",
      categoryLabel: "Full-Stack · Education",
      description:
        "Web-based digital library platform with book catalog, search, and borrowing management. Features user authentication and an intuitive reading interface.",
      results: [
        "Developed a web-based e-library system using PHP Laravel framework",
        "Implemented full CRUD functionality for book and library data management",
        "Improved digital book administration through centralized database system"
      ],
      stack: ["PHP", "Laravel", "MySQL", "Blade", "JavaScript"],
      tags: ["Book Catalog", "CRUD System", "Authentication"],
      image: "/assets/projects/e-library.jpg",
      link: "https://github.com/margaretavalen/E-Library",
      icon: "📚",
      contribution:
        "Developed the Laravel application, database structure, authentication, catalog search, and complete CRUD workflow for library data.",
      detailedResult:
        "Created a centralized digital book administration system with a clearer catalog and more efficient borrowing management.",
      highlight: "Centralized catalog, borrowing, and book administration"
    },
    {
      id: "drowsiness-detection",
      number: "003",
      date: "DEC 2024 - FEB 2025",
      title: "Drowsiness Detection System",
      category: "ml",
      categoryLabel: "Computer Vision · Deep Learning · Driver Safety",
      description:
        "A real-time computer vision system that monitors a person's alertness, classifies awake and drowsy conditions, and triggers an audible warning to help reduce fatigue-related driving risks.",
      results: [
        "Real-time camera monitoring for awake and drowsy condition detection",
        "Deep-learning image classification trained with the Driver Drowsiness Dataset",
        "Automatic audible alarm when signs of drowsiness are detected"
      ],
      stack: ["Python", "TensorFlow", "OpenCV", "MediaPipe", "Flask", "Pygame"],
      tags: ["Real-Time Detection", "Driver Safety", "Automatic Alarm"],
      image: "/assets/projects/drowsiness.jpg",
      link: "https://github.com/margaretavalen/DrowsinessDetection",
      icon: "🚗",
      contribution:
        "Prepared the driver-drowsiness dataset, developed the deep-learning classification workflow, integrated real-time camera processing, and built the Streamlit interface with an audible alert mechanism.",
      detailedResult:
        "Delivered a real-time monitoring system that distinguishes awake and drowsy conditions and automatically raises an alarm when fatigue indicators are detected.",
      highlight: "Real-time driver alertness monitoring with automatic warning alerts"
    },
    {
      id: "airscope",
      number: "004",
      date: "DEC 2024 - JAN 2025",
      title: "AirScope - Air Quality Index Prediction",
      category: "ml",
      categoryLabel: "Machine Learning · Environmental Data",
      description:
        "Machine learning project for predicting Air Quality Index values from environmental and air-pollutant data, supporting data-driven air quality monitoring.",
      results: [
        "Preprocessed environmental and pollutant data",
        "Built a predictive machine learning workflow",
        "Evaluated model performance for AQI prediction"
      ],
      stack: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
      tags: ["Environmental Analytics", "AQI Forecasting", "Data Pipeline"],
      image: "/assets/projects/aqi-prediction.jpg",
      link: "https://github.com/margaretavalen/AQI-Prediction",
      demo: "https://air-quality-index-predict.vercel.app/",
      icon: "🌿",
      contribution:
        "Prepared pollutant and environmental data, performed exploratory analysis, engineered the prediction workflow, and evaluated the machine learning model.",
      detailedResult:
        "Produced a reusable AQI prediction pipeline that turns environmental measurements into data-driven air-quality estimates.",
      highlight: "Environmental data transformed into actionable AQI predictions"
    },
    {
      id: "riceup",
      number: "005",
      date: "MAR - JUNE 2025",
      title: "RiceUp — Rice Quality Classification",
      category: "ml",
      categoryLabel: "CNN · Computer Vision · Flask",
      description:
        "Farmers and sellers struggle to classify rice quality consistently. Built a CNN-based web app using image recognition to solve this at scale.",
      results: [
        "Trained on 4,000+ labeled images",
        "Achieved 94% classification accuracy",
        "Real-time prediction via REST API"
      ],
      stack: ["TensorFlow", "Keras", "Flask", "Python", "CNN"],
      tags: ["Computer Vision", "Image Classification", "REST API"],
      image: "/assets/projects/riceup.jpg",
      link: "https://github.com/margaretavalen/RiceUp",
      icon: "🌾",
      contribution:
        "Built the end-to-end CNN pipeline, prepared the image dataset, trained and evaluated the model, then integrated inference into a Flask web application.",
      detailedResult:
        "Trained on 4,000+ labeled images, achieved 94% classification accuracy, and enabled real-time predictions through a REST API.",
      highlight: "94% accuracy across 4,000+ labeled rice images"
    },
    {
      id: "simanda",
      number: "006",
      date: "MAY - JUNE 2025",
      title: "SIMANDA — Intern Management System",
      category: "web",
      categoryLabel: "Admin System · Government",
      description:
        "Full-stack government admin platform for document and data management. Streamlines workflows across departments, reducing manual processing time significantly.",
      results: [
        "Managed 100+ internship participant records through centralized web-based management system",
        "Developed a Flask-based administrative platform",
        "Improved internship data processing efficiency through digitalized reporting and monitoring system"
      ],
      stack: ["Python", "Flask", "MySQL", "HTML", "CSS", "JavaScript"],
      tags: ["Admin Dashboard", "Data Management", "Reporting System"],
      image: "/assets/projects/simanda.jpg",
      link: "https://github.com/margaretavalen/SIMANDA",
      icon: "🏛️",
      contribution:
        "Designed and developed the Flask-based administration platform, database workflow, participant management, reporting, and monitoring features.",
      detailedResult:
        "Centralized more than 100 internship participant records and improved the efficiency of administrative reporting and monitoring.",
      highlight: "100+ internship records managed in one system"
    },
    {
      id: "hate-speech",
      number: "007",
      date: "OCT - DEC 2025",
      title: "Hate Speech Detection",
      category: "ml",
      categoryLabel: "Machine Learning · NLP",
      description:
        "Natural language processing model to detect and classify hate speech in Indonesian text. Combines text preprocessing, feature extraction, and classification pipeline.",
      results: [
        "91% precision hate speech detection",
        "Processes 1000+ data/sec",
        "Developed a Hybrid NLP Architecture"
      ],
      stack: ["Python", "Scikit-learn", "Pandas", "TF-IDF", "NLP"],
      tags: ["Natural Language Processing", "Text Classification", "Model Evaluation"],
      image: "/assets/projects/hate-speech.jpg",
      link: "https://github.com/margaretavalen/Hate-Speech-Detection",
      icon: "📊",
      contribution:
        "Developed the Indonesian text preprocessing, feature extraction, and classification workflow, then evaluated a hybrid NLP architecture.",
      detailedResult:
        "Reached 91% precision and built a pipeline capable of processing more than 1,000 text records per second.",
      highlight: "91% precision for Indonesian hate-speech detection"
    },
    {
      id: "diabetes",
      number: "008",
      date: "JAN 2026",
      title: "Diabetes Detection",
      category: "ml",
      categoryLabel: "Machine Learning · Healthcare",
      description:
        "Machine learning model for early diabetes risk prediction based on clinical features. Implements data balancing, feature selection, and model evaluation with medical accuracy benchmarks.",
      results: [
        "Achieved 85%+ prediction accuracy for early diabetes detection",
        "Processed and analyzed 700+ patient health records",
        "Built an interactive web-based prediction system with responsive user interface"
      ],
      stack: ["Python", "Scikit-learn", "Pandas", "NumPy", "Streamlit"],
      tags: ["Healthcare ML", "Risk Prediction", "Web Application"],
      image: "/assets/projects/diabetes.jpg",
      link: "https://github.com/margaretavalen/Diabetes-Detection",
      demo: "https://deteksi-risiko-diabetes.streamlit.app/",
      icon: "🩺",
      contribution:
        "Processed clinical data, handled class imbalance, selected relevant features, compared models, and built the responsive prediction interface.",
      detailedResult:
        "Analyzed 700+ patient records and achieved more than 85% prediction accuracy for early diabetes risk detection.",
      highlight: "85%+ accuracy from 700+ patient records"
    },
    {
      id: "coffee-shop",
      number: "009",
      date: "JUNE 2026",
      title: "Coffee Shop — Online Ordering Platform",
      category: "web",
      categoryLabel: "Full-Stack · E-Commerce · Food & Beverage",
      description:
        "A full-stack coffee shop platform that helps customers browse a real-time digital menu, manage a shopping cart, and place orders while giving administrators a centralized workflow for menu and order management.",
      results: [
        "Responsive menu catalog with search, category filters, and availability status",
        "Dynamic shopping cart with quantity controls and automatic total calculation",
        "Admin order management with role-based authentication and status updates"
      ],
      stack: ["PHP", "Laravel 9", "MySQL", "Blade", "Bootstrap 5", "JavaScript"],
      tags: ["Online Ordering", "Dynamic Cart", "Admin Dashboard"],
      image: "/assets/projects/coffee-shop.jpg",
      link: "https://github.com/margaretavalen/Coffee-Shop",
      icon: "☕",
      contribution:
        "Built the Laravel application using MVC architecture, created the customer menu and cart experience, structured the MySQL data workflow, and developed the administrative order-management features.",
      detailedResult:
        "Delivered a responsive end-to-end ordering platform that reduces menu and checkout friction while centralizing product availability and order status for administrators.",
      highlight: "Digital menu, shopping cart, and order management in one platform"
    },
    {
      id: "car-showroom",
      number: "010",
      date: "SEPT 2026",
      title: "Car Showroom Sales Dashboard",
      category: "data",
      categoryLabel: "Data Analysis · Power BI",
      description:
        "Interactive Power BI dashboard for analyzing car showroom sales performance, transaction trends, product performance, payment methods, and branch results.",
      results: [
        "Analyzed Rp2.77 trillion in total sales across 8,970 completed transactions",
        "Identified SUV as the leading category with Rp1.51 trillion in sales",
        "Highlighted Malang Branch as the top-performing branch with Rp291.61 billion in sales",
        "Tracked monthly sales, payment methods, transaction status, and completion rate"
      ],
      stack: ["Power BI", "Data Analysis", "Data Visualization", "Dashboard"],
      tags: ["Sales Analytics", "KPI Dashboard", "Business Insights"],
      image: "/assets/projects/showroom.png",
      link: "",
      icon: "📈",
      contribution:
        "Built an interactive Power BI dashboard to transform showroom transaction data into actionable sales insights. Structured KPI views, category and branch analysis, product performance, monthly trends, payment analysis, and transaction-status reporting.",
      detailedResult:
        "Analyzed Rp2.77 trillion in sales across 8,970 completed transactions, identified SUV as the main revenue driver, and highlighted Malang Branch as the highest-performing branch.",
      highlight: "Rp2.77T sales analyzed through an interactive Power BI dashboard"
    }
  ] as Project[],

  skills: [
    {
      title: "AI & Data Science",
      category: "Machine Learning",
      icon: "🧠",
      wide: true,
      tags: ["TensorFlow", "Keras", "Scikit-learn", "Computer Vision", "Pandas", "NumPy"]
    },
    {
      category: "Best Result",
      stat: "94%",
      desc: "CNN accuracy on RiceUp classification project"
    },
    {
      category: "Projects",
      stat: "3+",
      desc: "Shipped projects"
    },
    {
      title: "React & Web UI",
      category: "Frontend",
      icon: "⚛️",
      tags: ["HTML5", "CSS3", "Bootstrap", "React", "Tailwind", "JavaScript"]
    },
    {
      title: "Backend Development",
      category: "Backend",
      icon: "🐍",
      tags: ["Python", "Flask", "PHP", "Laravel"]
    },
    {
      title: "Data Storage",
      category: "Database",
      icon: "🗄️",
      tags: ["MySQL", "SQL"]
    },
    {
      title: "Dev Ecosystem",
      category: "Tools & Workflow",
      icon: "🛠️",
      tags: ["Git", "Figma", "VS Code", "Jupyter Notebook", "Vercel", "Postman"]
    }
  ] as SkillCategory[],

  experience: [
    {
      period: "May - June 2024",
      role: "Web Developer Intern",
      company: "Diskominfo — Dinas Komunikasi, Informatika, Statistik, Persandian Kota Semarang",
      bullets: [
        "Designed and developed a web-based internship management application using Python.",
        "Assisted database integration and admin workflows, reducing manual data entry by 40%.",
        "Improved page responsiveness and load performance."
      ]
    },
    {
      period: "Oct 2025 - Jan 2026",
      role: "Research Publication",
      company: "Sinta 3 Journal Publication",
      bullets: [
        "Published research paper in INFOTEKMESIN Journal focusing on Artificial Intelligence and Natural Language Processing.",
        "Achieved 91% classification accuracy through NLP preprocessing, feature extraction, and deep learning optimization.",
        "Conducted data preprocessing, model training, and evaluation to improve classification performance."
      ],
      link: {
        text: "View Journal ↗",
        url: "https://ejournal.pnc.ac.id/index.php/infotekmesin/article/view/3026"
      }
    },
    {
      period: "July 2026",
      role: "Research Publication",
      company: "Jurnal RESTI — Vol. 10 No. 4",
      bullets: [
        "Published “A Hybrid VADER–IndoBERT Framework for Robust Sentiment Analysis of Long and Ambiguous Indonesian Texts.”",
        "Analyzed 4,904 Indonesian Ruangguru reviews using a hybrid VADER labeling and IndoBERT classification pipeline.",
        "Achieved 90.9% accuracy with IndoBERT, outperforming the BiLSTM baseline at 86.4%."
      ],
      link: {
        text: "View Journal ↗",
        url: "https://jurnal.iaii.or.id/index.php/RESTI/article/view/7377"
      }
    }
  ] as ExperienceItem[],

  certifications: [
    {
      icon: "🏆",
      name: "4th Place Winner in Software Development",
      issuer: "National Information Technology Competition UNITY - 2024",
      link: "https://drive.google.com/file/d/1o3PJLz1gZ8ab939OLrsvfrqscplNvmjQ/view?usp=sharing"
    },
    {
      icon: "🧠",
      name: "Basic Deep Learning",
      issuer: "NVIDIA CLI - 2025",
      link: "https://learn.nvidia.com/certificates?id=ZEYzubmoT82T4Pxksw2NFw"
    },
    {
      icon: "🔬",
      name: "AI Literacy Workshop",
      issuer: "BASS Training Center & Consultant - 2025",
      link: "https://drive.google.com/file/d/1h3O689XYtCSkXrf0gz-JHzFlQDgfukSB/view?usp=sharing"
    },
    {
      icon: "📜",
      name: "English Proficiency Assessment",
      issuer: "CFLT Universitas Dian Nuswantoro - 2026",
      link: "https://drive.google.com/file/d/1Io5QbhE0rJ3sl9PUYtIH0T2DyFwm4iLx/view?usp=sharing"
    },
    {
      icon: "⭐",
      name: "Associate Data Scientist",
      issuer: "Badan Nasional Sertifikasi Profesi - 2026",
      link: "https://drive.google.com/file/d/1r9YBnv6iWxGB4iZQsQBg8W9A59Bb7xZO/view?usp=sharing"
    },
    {
      icon: "📊",
      name: "Bootcamp Data Analyst",
      issuer: "Karirnex by PT Ebiz Karisma Internasional - 2026",
      link: "https://drive.google.com/file/d/1VqeUZKfS_pZ7EClz0Ku5qiNpTCvtckJn/view?usp=sharing"
    }
  ] as CertificationItem[]
};

