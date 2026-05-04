const translations = {
    pt: {
        contact: "Contact_Me",
        back: "< Voltar",
        resume: "Currículo",
        projects: "Projetos",
        my_projects: "Meus Projetos",
        home_lab_title: "# Homelab",
        home_lab_desc: "Ecossistema de servidores domésticos focado em autonomia digital e DevOps.",
        portal_title: "# Portal do Estudante",
        portal_desc: "Sistema Full-Stack para centralização de informações acadêmicas e gestão de fluxo estudantil.",
        resume_title: "Currículo",
        summary_title: "# Resumo",
        summary_text: "Analista de Infraestrutura focado na cultura DevOps e práticas de SRE. Com base sólida em administração Linux e experiência em ambientes Cloud, atuo no gerenciamento de recursos de infraestrutura. Tenho experiência com a implementação de containers, suporte a fluxos de CI/CD e otimização de custos operacionais.",
        skills_title: "# Habilidades",
        skills_tech: "Técnicas:",
        skills_lang: "Idiomas:",
        lang_pt: "Português (Nativo)",
        lang_en: "Inglês (C1)",
        lang_it: "Italiano (B1)",
        exp_title: "# Experiência",
        exp_incentiv_role: "Analista de Infraestrutura (Remoto)",
        exp_sca_role: "Analista de Infraestrutura (Florianópolis, SC)",
        edu_title: "# Educação",
        edu_cloud: "CST em Computação em Nuvem (Concl: Dez. 2025)",
        edu_physics: "Bacharelado em Física (Concl: Ago. 2022)",
        cert_title: "# Certificações",
        download_pdf: "Download PDF"
    },
    en: {
        contact: "Contact_Me",
        back: "< Back",
        resume: "Resume",
        projects: "Projects",
        my_projects: "My Projects",
        home_lab_title: "# Homelab",
        home_lab_desc: "Home server ecosystem focused on digital autonomy and DevOps.",
        portal_title: "# Student Portal",
        portal_desc: "Full-Stack system for centralizing academic information and student flow management.",
        resume_title: "Resume",
        summary_title: "# Summary",
        summary_text: "Infrastructure Analyst focused on DevOps culture and SRE practices. With a solid background in Linux administration and experience in Cloud environments, I manage infrastructure resources. Experienced in container implementation, CI/CD workflow support, and operational cost optimization.",
        skills_title: "# Skills",
        skills_tech: "Technical:",
        skills_lang: "Languages:",
        lang_pt: "Portuguese (Native)",
        lang_en: "English (C1)",
        lang_it: "Italian (B1)",
        exp_title: "# Experience",
        exp_incentiv_role: "Infrastructure Analyst (Remote)",
        exp_sca_role: "Infrastructure Analyst (Florianópolis, SC)",
        edu_title: "# Education",
        edu_cloud: "Associate Degree in Cloud Computing (Grad: Dec 2025)",
        edu_physics: "Bachelor of Physics (Grad: Aug 2022)",
        cert_title: "# Certifications",
        download_pdf: "Download PDF"
    },
    it: {
        contact: "Contattami",
        back: "< Indietro",
        resume: "Curriculum",
        projects: "Progetti",
        my_projects: "I Miei Progetti",
        home_lab_title: "# Homelab",
        home_lab_desc: "Ecosistema di server domestici focalizzato sull'autonomia digitale e DevOps.",
        portal_title: "# Portale dello Studente",
        portal_desc: "Sistema Full-Stack per la centralizzazione delle informazioni accademiche e la gestione del flusso studentesco.",
        resume_title: "Curriculum",
        summary_title: "# Riassunto",
        summary_text: "Analista di Infrastruttura focalizzato sulla cultura DevOps e sulle pratiche SRE. Con una solida base nell'amministrazione Linux e esperienza in ambienti Cloud, mi occupo della gestione delle risorse infrastrutturali. Ho esperienza nell'implementazione di container, nel supporto ai flussi CI/CD e nell'ottimizzazione dei costi operativi.",
        skills_title: "# Competenze",
        skills_tech: "Tecniche:",
        skills_lang: "Lingue:",
        lang_pt: "Portoghese (Madrelingua)",
        lang_en: "Inglese (C1)",
        lang_it: "Italiano (B1)",
        exp_title: "# Esperienza",
        exp_incentiv_role: "Analista di Infrastruttura (Remoto)",
        exp_sca_role: "Analista di Infrastruttura (Florianópolis, SC)",
        edu_title: "# Istruzione",
        edu_cloud: "Corso Superiore di Tecnologia in Cloud Computing (Fine: Dic 2025)",
        edu_physics: "Laurea in Fisica (Fine: Ago 2022)",
        cert_title: "# Certificazioni",
        download_pdf: "Scarica PDF"
    }
};

function setLanguage(lang) {
    localStorage.setItem('selectedLanguage', lang);
    applyLanguage(lang);
}

function applyLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
    
    // Update active state of buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('text-white', 'underline');
        btn.classList.add('text-[#ff00ff]');
    });
    const activeBtn = document.getElementById(`lang-${lang}`);
    if (activeBtn) {
        activeBtn.classList.add('text-white', 'underline');
    }
}

// Apply on load
document.addEventListener('DOMContentLoaded', () => {
    let savedLang = localStorage.getItem('selectedLanguage');
    
    if (!savedLang) {
        const browserLang = navigator.language || navigator.userLanguage;
        const langCode = browserLang.toLowerCase();

        if (langCode.startsWith('pt')) {
            // Se for português, assumimos Brasil como padrão (ou apenas mantemos PT)
            savedLang = 'pt';
        } else if (langCode.startsWith('it')) {
            savedLang = 'it';
        } else {
            // Resto do mundo padrão para Inglês
            savedLang = 'en';
        }
    }
    
    applyLanguage(savedLang);
});
