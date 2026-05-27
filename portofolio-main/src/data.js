const asset = (file) => encodeURI(`/New folder/${file}`);

const Image = {
  HeroImage: asset("majid.jpeg"),
};

export default Image;


export const listTools = [
  {
    id: 1,
    gambar: asset("c-.png"),
    nama: "C++",
    ket: "Programming Language",
    dad: "100",
  },
  {
    id: 2,
    gambar: asset("java.png"),
    nama: "Java",
    ket: "Programming Language",
    dad: "200",
  },
  {
    id: 3,
    gambar: asset("python.png"),
    nama: "Python",
    ket: "Programming Language",
    dad: "300",
  },
  {
    id: 4,
    gambar: asset("machine.png"),
    nama: "Assembly",
    ket: "Low-Level Programming",
    dad: "400",
  },
  {
    id: 5,
    gambar: asset("mysql.png"),
    nama: "MySQL",
    ket: "Database",
    dad: "500",
  },
  {
    id: 6,
    gambar: asset("rest.png"),
    nama: "RESTful APIs",
    ket: "Backend Integration",
    dad: "600",
  },
  {
    id: 8,
    gambar: asset("internet.png"),
    nama: "Networking",
    ket: "Computer Fundamentals",
    dad: "800",
  },
  {
    id: 9,
    gambar: asset("windows.png"),
    nama: "Operating Systems (Windows)",
    ket: "Computer Fundamentals",
    dad: "900",
  },
  {
    id: 11,
    gambar: asset("github.png"),
    nama: "GitHub",
    ket: "Version Control",
    dad: "1100",
  },
  {
    id: 12,
    gambar: asset("linux.png"),
    nama: "Linux Basics",
    ket: "Tools & Platforms",
    dad: "1200",
  },
  {
    id: 13,
    gambar: asset("machine-learning_7885143.png"),
    nama: "AI & Machine Learning",
    ket: "Special Interest",
    dad: "1300",
  },
  {
    id: 14,
    gambar: asset("security-system_18608063.png"),
    nama: "Cybersecurity",
    ket: "Special Interest",
    dad: "1400",
  },
  {
    id: 15,
    gambar: asset("hacker_9094790.png"),
    nama: "Ethical Hacking",
    ket: "Special Interest",
    dad: "1500",
  },
  {
    id: 16,
    gambar: asset("4202103logomicrosoftmsofficesocialsocialmedia-115585_115716.png"),
    nama: "Microsoft Office",
    ket: "Tools & Platforms",
    dad: "1600",
  },
];

const Proyek1 = asset("NLP with sentiment analysis.png");
const Proyek2 = asset("web scraper.png");
const Proyek3 = asset("airline management.webp");

export const listProyek = [
  {
    id: 1,
    image: Proyek1,
    title: "NLP with Sentiment Analysis",
    subtitle: "Chatbot that adapts responses using NLP and sentiment cues.",
    fullDescription:
      "Designed a chatbot that integrates Natural Language Processing with sentiment analysis to interpret user emotions and adapt responses dynamically. The project demonstrates conversational AI with context-aware behavior and emotion-sensitive feedback.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/MajidAli2/Natural-Language-Processing-NLP-Chatbot-with-Sentiment-Analysis.git",
    dad: "100",
  },
  {
    id: 2,
    image: Proyek2,
    title: "Web Scraper",
    subtitle: "Automation tool that extracts and processes source code from sites.",
    fullDescription:
      "Built a Java-based web scraper capable of extracting and processing source code from websites, showcasing skills in automation, parsing, and data handling.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/MajidAli2/Java_Web_Scrappper.git",
    dad: "200",
  },
  {
    id: 3,
    image: Proyek3,
    title: "Airline Management System",
    subtitle: "Desktop app with role-based workflows and MySQL backend.",
    fullDescription:
      "Developed a desktop application using Java (Swing/JavaFX) with a MySQL backend to manage airline operations, featuring role-based interfaces for administrators and customers.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/MajidAli2/Airline-Management-System-Java-MySQL.git",
    dad: "300",
  },
];
