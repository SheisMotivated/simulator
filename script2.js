const topics = [  
    "Immigration", "Technology", "Healthcare", "Housing", "Climate Change",   
  "Inclusion", "Censorship", "Equality", "Misinformation", "National Debt",   
  "Unemployment", "Education Reform", "Gun Control", "Mental Health Awareness",   
  "Social Media Influence", "Cybersecurity", "Renewable Energy", "Women's Rights",   
  "LGBTQ+ Rights", "Racial Profiling", "Police Reform", "Drug Legalization",   
  "Prison Reform", "Homelessness", "Income Inequality", "Universal Basic Income",   
  "AI Ethics", "Data Privacy", "Freedom of Speech", "Religious Freedom",   
  "Vaccination Mandates", "Abortion Rights", "Death Penalty", "Voting Rights",   
  "Gerrymandering", "Campaign Finance Reform", "Net Neutrality", "Media Bias",   
  "Fake News", "Climate Justice", "Environmental Conservation", "Deforestation",   
  "Ocean Pollution", "Endangered Species Protection", "Space Exploration Funding",   
  "Genetic Engineering", "Stem Cell Research", "Euthanasia", "Assisted Suicide",   
  "Animal Rights", "Factory Farming", "Organic Farming", "Food Security",   
  "Water Scarcity", "Urbanization", "Public Transportation", "Infrastructure Development",   
  "Space Tourism", "Cryptocurrency Regulation", "Gig Economy", "Workplace Automation",   
  "Telecommuting", "Work-Life Balance", "Minimum Wage Laws", "Labor Unions",   
  "Child Labor", "Human Trafficking", "Refugee Crisis", "Border Security",   
  "Sanctuary Cities", "Cultural Appropriation", "Cancel Culture", "Affirmative Action",   
  "Indigenous Rights", "Language Preservation", "Digital Divide", "E-Commerce",   
  "Consumer Protection", "Antitrust Laws", "Corporate Social Responsibility",   
  "Tax Reform", "Wealth Distribution", "Pension Reform", "Social Security",   
  "Elder Care", "Childcare Support", "Education Accessibility", "Student Debt Crisis",   
  "Standardized Testing", "School Choice", "Charter Schools", "Sex Education",   
  "Arts Funding", "Sports Ethics", "Doping in Sports", "Esports Recognition",   
  "Cultural Heritage Preservation", "Tourism Impact", "Globalization", "Trade Agreements",   
  "Intellectual Property Rights", "Patent Laws", "Open-Source Software",   
  "Telemedicine", "Pandemic Preparedness", "Healthcare Disparities",   
  "Mental Health Stigma", "Substance Abuse", "Obesity Epidemic",   
  // Additional 75 topics  
  "Agricultural Subsidies", "Air Pollution", "Animal Testing", "Artificial Wombs",   
  "Biometric Surveillance", "Child Abuse Prevention", "Citizenship Laws",   
  "Climate Migration", "Colonialism's Legacy", "Comic Book Censorship",   
  "Congressional Term Limits", "Corporate Espionage", "Dark Web Regulation",   
  "Deepfake Technology", "Diplomatic Immunity", "Disability Rights",   
  "Drone Warfare", "Education Equity", "Electronic Waste", "Energy Independence",   
  "Ethical Consumerism", "Extraterrestrial Life", "Fast Fashion",   
  "Financial Literacy", "Food Deserts", "Freedom of the Press",   
  "Gambling Addiction", "Gender Pay Gap", "Government Transparency",   
  "Green Buildings", "Hacking Ethics", "Healthcare Fraud", "Historic Preservation",   
  "Hobby Lobby Case", "Human Cloning", "Hydroponics", "Identity Theft",   
  "Illegal Fishing", "Immigration Detention", "Internet Censorship",   
  "Journalistic Integrity", "K-12 Curriculum", "Land Rights",   
  "Life on Mars", "Marine Conservation", "Mass Surveillance",   
  "Maternity Leave", "Military Spending", "Mining Regulations",   
  "Museums Funding", "National Parks", "Nuclear Proliferation",   
  "Offshore Drilling", "Online Harassment", "Overtourism",   
  "Paparazzi Laws", "Parental Leave", "Pharmaceutical Pricing",   
  "Plastic Ban", "Political Correctness", "Polygamy Laws",   
  "Population Control", "Preventive Healthcare", "Privacy vs. Security",   
  "Public Art", "Recycling Programs", "Reparations",   
  "Retirement Age", "School Safety", "Scientific Funding",   
  "Sexual Harassment", "Smart Cities", "Space Debris",   
  "Sustainable Fashion", "Tax Havens", "Teacher Salaries",   
  "Universal Healthcare", "Urban Farming", "Violence in Media",   
  "Voter ID Laws", "Wildfire Prevention", "Women in STEM",   
  "Workplace Diversity", "Youth Unemployment", "Zero Waste"
];

let isCooldown = false; // Prevents spam clicking

document.getElementById("generateBtn").addEventListener("click", function () {
    if (isCooldown) {
        document.getElementById("timerMessage").innerText = 
            "Even if you don't like this topic, practice anyways! You won't be able to switch up your topic on stage 😉";
        return;
    }

    let randomIndex = Math.floor(Math.random() * topics.length);
    document.getElementById("topicDisplay").innerText = "Topic: " + topics[randomIndex];

    isCooldown = true; // Start cooldown
    document.getElementById("generateBtn").disabled = true;

    let countdown = 30;
    let countdownTimer = setInterval(() => {
        countdown--;
        if (countdown <= 0) {
            clearInterval(countdownTimer);
            document.getElementById("generateBtn").disabled = false;
            isCooldown = false;
            document.getElementById("timerMessage").innerText = "";
        }
    }, 1000);
});
