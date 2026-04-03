// data.js - Central data management for CV system

// Initialize CV data storage
function initCVData() {
    if (!localStorage.getItem('cv_data')) {
        // Sample default CV data
        const defaultCV = [
            {
                id: 1700000000000,
                personal: {
                    fullName: "Emmanuel Okwuchukwu",
                    jobTitle: "AI Content Specialist & Graphic Designer",
                    birthDate: "28 NOVEMBER 2001",
                    nationality: "Nigerian",
                    maritalStatus: "Single"
                },
                contact: {
                    email: "okwuchukwuemmanuel29@gmail.com",
                    phone: "+234 906 836 6229",
                    address: "Gwagwalada",
                    city: "Abuja",
                    country: "Nigeria",
                    website: "https://chimdike.netlify.app",
                    linkedin: "https://linkedin.com/in/emmanuel-okwuchukwu",
                    github: "https://github.com/emaxchimdike"
                },
                profile: {
                    description: "Creative Graphic Designer and AI Content Specialist with over 5 years of experience in visual design, digital marketing, and emerging AI technologies. Skilled in Adobe Creative Suite, UX design, and AI prompt engineering. Passionate about leveraging AI tools to enhance content creation, streamline workflows, and deliver data-driven creative solutions."
                },
                skills: {
                    ai: ["AI CONTENT CREATION", "PROMPT ENGINEERING", "CHATGPT", "MIDJOURNEY", "DIGITAL MARKETING", "PYTHON NLP BASICS"],
                    design: ["GRAPHIC DESIGN", "UX DESIGN", "ADOBE ILLUSTRATOR", "FIGMA", "BRAND IDENTITY"],
                    soft: ["TIME MANAGEMENT", "COLLABORATION", "PROBLEM SOLVING", "ADAPTABILITY"]
                },
                languages: ["ENGLISH", "IGBO", "FRENCH"],
                experience: {
                    title: "Graphic Designer & AI Content Creator",
                    company: "Aesthetic Institute",
                    period: "JAN 2019 – JUL 2021",
                    responsibilities: [
                        "Designed branding materials, social media graphics, and web assets using Adobe Illustrator and Figma.",
                        "Established office procedures, design workflows, and deadline management systems.",
                        "Integrated AI tools (ChatGPT, Midjourney) to generate visual concepts and copywriting drafts.",
                        "Developed and tested AI prompts for automated content generation, reducing production time by 30%.",
                        "Collaborated with marketing teams to align visual content with campaign goals.",
                        "Trained junior staff on basic AI prompt engineering for creative tasks."
                    ]
                },
                education: {
                    degree: "B.Sc. Computer Science",
                    school: "UNIVERSITY OF ABUJA, NIGERIA",
                    period: "2021 - 2025",
                    details: "Expected graduation: 2025 · CGPA: 3.5/4.0"
                },
                references: [
                    {
                        name: "Divine Okwuchukwu",
                        title: "Information Analyst, Deloitte US",
                        email: "generalokwugod@gmail.com",
                        phone: "+1 214 742 9443"
                    },
                    {
                        name: "Brianda Washington",
                        title: "Medical Student, Ross Medical School",
                        email: "Briandawashington@yahoo.com",
                        phone: "+1 346 221 9627"
                    }
                ],
                createdAt: new Date().toISOString()
            }
        ];
        localStorage.setItem('cv_data', JSON.stringify(defaultCV));
    }
}

// Get all CVs
function getAllCVs() {
    initCVData();
    return JSON.parse(localStorage.getItem('cv_data') || '[]');
}

// Get CV by ID
function getCVById(id) {
    const allCVs = getAllCVs();
    return allCVs.find(cv => cv.id === parseInt(id));
}

// Delete CV by ID
function deleteCVById(id) {
    let allCVs = getAllCVs();
    allCVs = allCVs.filter(cv => cv.id !== parseInt(id));
    localStorage.setItem('cv_data', JSON.stringify(allCVs));
    return true;
}

// Update CV
function updateCV(id, updatedData) {
    let allCVs = getAllCVs();
    const index = allCVs.findIndex(cv => cv.id === parseInt(id));
    if (index !== -1) {
        allCVs[index] = { ...updatedData, id: parseInt(id) };
        localStorage.setItem('cv_data', JSON.stringify(allCVs));
        return true;
    }
    return false;
}

// Export functions for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { getAllCVs, getCVById, deleteCVById, updateCV, initCVData };
}