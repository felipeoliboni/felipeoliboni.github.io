const translations = {
    pt: {
        contact: "Contact_Me",
        back: "< Voltar",
        resume: "Currículo",
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
        exp_incentiv_date: "Jun. 2022 - Presente",
        exp_incentiv_b1: "Monitoramento e manutenção da infraestrutura no Google Cloud Platform.",
        exp_incentiv_b2: "Administração de servidores Linux em produção, garantindo estabilidade.",
        exp_incentiv_b3: "Auditoria e ajuste de recursos no GCP, reduzindo custos em 75%.",
        exp_incentiv_b4: "Implementação de fluxos CI/CD no GitLab.",
        exp_sca_role: "Analista de Infraestrutura (Florianópolis, SC)",
        exp_sca_date: "Fev. 2022 - Jun. 2022",
        exp_sca_b1: "Reorganização de políticas de setor, diretórios e permissões.",
        exp_sca_b2: "Suporte técnico para infraestrutura local, rede e Active Directory.",
        exp_sca_b3: "Resolução de problemas com tempo médio inferior a 30 minutos.",
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
        exp_incentiv_date: "Jun. 2022 - Present",
        exp_incentiv_b1: "Infrastructure monitoring and maintenance on Google Cloud Platform.",
        exp_incentiv_b2: "Production Linux server administration, ensuring stability.",
        exp_incentiv_b3: "GCP resource auditing and tuning, reducing costs by 75%.",
        exp_incentiv_b4: "Implementation of CI/CD pipelines in GitLab.",
        exp_sca_role: "Infrastructure Analyst (Florianópolis, SC)",
        exp_sca_date: "Feb. 2022 - Jun. 2022",
        exp_sca_b1: "Reorganization of department policies, directories, and permissions.",
        exp_sca_b2: "Technical support for local infrastructure, network, and Active Directory.",
        exp_sca_b3: "Issue resolution with an average time under 30 minutes.",
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
        summary_title: "# Sommario",
        summary_text: "Analista di Infrastruttura focalizzato sulla cultura DevOps e sulle pratiche SRE. Con una solida base nell'amministrazione Linux e esperienza in ambienti Cloud, mi occupo della gestione delle risorse infrastrutturali. Ho esperienza nell'implementazione di container, nel supporto ai flussi CI/CD e nell'ottimizzazione dei costi operativi.",
        skills_title: "# Competenze",
        skills_tech: "Tecniche:",
        skills_lang: "Lingue:",
        lang_pt: "Portoghese (Madrelingua)",
        lang_en: "Inglese (C1)",
        lang_it: "Italiano (B1)",
        exp_title: "# Esperienza",
        exp_incentiv_role: "Analista di Infrastruttura (Remoto)",
        exp_incentiv_date: "Giu. 2022 - Presente",
        exp_incentiv_b1: "Monitoraggio e manutenzione dell'infrastruttura su Google Cloud Platform.",
        exp_incentiv_b2: "Amministrazione di server Linux in produzione, garantendo stabilità.",
        exp_incentiv_b3: "Audit e ottimizzazione delle risorse GCP, riducendo i costi del 75%.",
        exp_incentiv_b4: "Implementazione di pipeline CI/CD in GitLab.",
        exp_sca_role: "Analista di Infrastruttura (Florianópolis, SC)",
        exp_sca_date: "Feb. 2022 - Giu. 2022",
        exp_sca_b1: "Riorganizzazione delle policy di settore, directory e permessi.",
        exp_sca_b2: "Supporto tecnico per l'infrastruttura locale, la rete e Active Directory.",
        exp_sca_b3: "Risoluzione dei problemi con un tempo medio inferiore a 30 minuti.",
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
            savedLang = 'pt';
        } else if (langCode.startsWith('it')) {
            savedLang = 'it';
        } else {
            savedLang = 'en';
        }
    }
    
    applyLanguage(savedLang);
});
