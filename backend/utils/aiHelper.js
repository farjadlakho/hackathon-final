// AI Features: Auto categorization & Urgency detection
const analyzeRequestAI = (text) => {
    const content = text.toLowerCase();
    
    // 1. Urgency Detection
    let urgency = 'Medium';
    if (content.includes('urgent') || content.includes('immediately') || content.includes('stuck')) {
        urgency = 'High';
    }

    // 2. Auto Categorization (Keyword based)
    let category = 'General';
    if (content.includes('react') || content.includes('frontend')) category = 'Frontend';
    if (content.includes('node') || content.includes('api') || content.includes('mongodb')) category = 'Backend';

    return { urgency, category };
};

module.exports = { analyzeRequestAI };
