/* models.js - Gestion des interactions spécifiques aux modèles et contenu dynamique des pages de détails */

const modelsData = [
    {
        id: "automatic-speech-recognition",
        title: "Automatic Speech Recognition",
        definition: "L'Automatic Speech Recognition (ASR), ou reconnaissance automatique de la parole, désigne les technologies qui convertissent automatiquement le langage parlé en texte lisible par une machine, à l'aide de modèles statistiques et d'algorithmes complexes.",
        function: [
            "Enregistrement de la parole : Le système capture le langage parlé via un microphone ou une autre source audio.",
            "Traitement de la parole : L'enregistrement vocal est nettoyé des bruits parasites, puis analysé pour identifier les caractéristiques phonétiques et phonémiques. Ces caractéristiques sont comparées à des modèles pré-entraînés pour identifier les mots.",
            "Génération de texte : Les sons reconnus sont convertis en texte."
        ],
        imageMain: "assets/images/Automatic-Speech-Recognition.png",
        imageSecondary: "assets/images/Automatic-Speech-Recognition.png"
    },
    {
        id: "content-generator",
        title: "Content Generator",
        definition: "Un Content Generator est un modèle d'intelligence artificielle conçu pour produire automatiquement du texte (articles, posts, descriptions, scripts, etc.) à partir de consignes ou de prompts donnés, en s'appuyant sur des techniques avancées de traitement du langage naturel (NLP).",
        function: [
            "Analyse du prompt : Le modèle comprend le sujet, le ton et l'objectif à partir du texte d'entrée.",
            "Génération du contenu : En s'appuyant sur une base d'apprentissage massive, le modèle produit un contenu fluide, cohérent et pertinent.",
            "Affinage contextuel : Il adapte le texte généré selon les paramètres spécifiques (longueur, style, format, etc.)."
        ],
        imageMain: "assets/images/Content-Generator.png",
        imageSecondary: "assets/images/Content-Generator.png"
    },
    {
        id: "auto-code-generator",
        title: "Auto Code Generator",
        definition: "Un Auto Code Generator est un modèle d'intelligence artificielle capable de transformer des instructions en langage naturel en code informatique dans un ou plusieurs langages de programmation, accélérant le développement logiciel.",
        function: [
            "Compréhension du besoin : Le modèle analyse le texte descriptif fourni pour identifier les tâches à coder.",
            "Traduction en code : À partir de sa base d'entraînement sur des millions de lignes de code, le modèle génère une ou plusieurs solutions sous forme de code source.",
            "Vérification syntaxique (optionnel) : Certains modèles vérifient que le code est exécutable ou conforme aux normes."
        ],
        imageMain: "assets/images/Auto-Code-Generator.png",
        imageSecondary: "assets/images/Auto-Code-Generator.png"
    },
    {
        id: "detection-anomalies",
        title: "Détection d’Anomalies",
        definition: "La Détection d'Anomalies est un modèle d'intelligence artificielle qui identifie automatiquement des éléments qui s'écartent d'un comportement ou d'un schéma normal dans un ensemble de données, utilisé dans la cybersécurité, la finance, l'industrie, etc.",
        function: [
            "Apprentissage des données normales : Le modèle s'entraîne à partir d'un jeu de données représentant des comportements standards.",
            "Analyse en temps réel ou différé : Il compare les nouvelles données à ce qui est considéré comme normal.",
            "Signalement des écarts : Dès qu'une variation anormale est détectée, elle est marquée pour inspection ou action."
        ],
        imageMain: "assets/images/Detection-Anomalies.png",
        imageSecondary: "assets/images/Detection-Anomalies.png"
    },
    {
        id: "doc-ai-ocr",
        title: "Doc-AI OCR",
        definition: "Doc-AI OCR (Optical Character Recognition) est un modèle d'intelligence artificielle conçu pour détecter et convertir automatiquement le texte présent dans des documents imprimés ou manuscrits (PDF, images, scans) en texte numérique exploitable.",
        function: [
            "Prétraitement de l'image : Nettoyage, redimensionnement ou correction de l'inclinaison pour améliorer la lecture.",
            "Reconnaissance des caractères : Le modèle analyse visuellement les lignes et caractères présents dans l'image.",
            "Conversion en texte structuré : Le texte reconnu est restitué sous forme numérique, souvent avec mise en forme."
        ],
        imageMain: "assets/images/Doc-AI-OCR.png",
        imageSecondary: "assets/images/Doc-AI-OCR.png"
    },
    {
        id: "faq-generator",
        title: "FAQ Generator",
        definition: "Un FAQ Generator est un modèle d'intelligence artificielle qui extrait ou génère automatiquement des questions fréquentes (FAQ) et leurs réponses à partir de textes existants, facilitant la création de supports d'assistance.",
        function: [
            "Analyse du contenu source : Le modèle lit et comprend le texte pour identifier les informations clés.",
            "Génération de questions pertinentes : Il formule des questions susceptibles d'être posées par les utilisateurs.",
            "Création des réponses : Pour chaque question, le modèle extrait ou rédige une réponse claire et concise."
        ],
        imageMain: "assets/images/FQ.png",
        imageSecondary: "assets/images/FQ.png"
    },
    {
        id: "knowledge-rag-agent",
        title: "Knowledge-RAG Agent",
        definition: "Un Knowledge-RAG Agent (Retrieval-Augmented Generation) combine la recherche d'informations et la génération de texte pour fournir des réponses précises à partir de bases de données ou documents non structurés.",
        function: [
            "Recherche d'information : À partir de la question posée, le modèle interroge une base documentaire pour extraire les passages pertinents.",
            "Génération augmentée : Il utilise les extraits récupérés pour formuler une réponse cohérente et fidèle."
        ],
        imageMain: "assets/images/Knowledge-RAG-agent.png",
        imageSecondary: "assets/images/Knowledge-RAG-agent.png"
    },
    {
        id: "llama",
        title: "LLaMA",
        definition: "LLaMA est une famille de modèles de langage développée par Meta, entraînée sur d'énormes volumes de texte pour comprendre, générer ou résumer du langage humain avec précision.",
        function: [
            "Pré-entraînement massif : Entraîné sur de grandes quantités de données textuelles pour apprendre la structure et les relations linguistiques.",
            "Compréhension et génération : Répond à des questions, rédige des textes, résume ou traduit.",
            "Adaptabilité : Peut être spécialisé pour des tâches spécifiques via fine-tuning."
        ],
        imageMain: "assets/images/Llama.png",
        imageSecondary: "assets/images/Llama.png"
    },
    {
        id: "medical-diagnosis",
        title: "Medical-Diagnosis",
        definition: "Le modèle Medical-Diagnosis analyse les symptômes et résultats médicaux pour suggérer des diagnostics possibles, aidant les professionnels de santé à poser des diagnostics précis.",
        function: [
            "Collecte des données médicales : Reçoit des informations sur les symptômes, antécédents et résultats d'examens.",
            "Analyse et comparaison : Compare ces données à des bases de données médicales et études de cas.",
            "Proposition de diagnostics : Suggère une ou plusieurs affections possibles."
        ],
        imageMain: "assets/images/Med-Diagnosis.png",
        imageSecondary: "assets/images/Med-Diagnosis.png"
    },
    {
        id: "medical-agent",
        title: "Medical Agent",
        definition: "Le Medical Agent fournit des conseils médicaux basés sur des symptômes, médicaments ou antécédents, orientant les utilisateurs vers des traitements appropriés.",
        function: [
            "Compréhension des symptômes : Analyse les symptômes ou questions médicales fournis.",
            "Accès à une base de données médicale : Consulte des informations sur traitements et recommandations.",
            "Fourniture de conseils : Génère des réponses ou oriente vers un professionnel."
        ],
        imageMain: "assets/images/Medical-Agent.png",
        imageSecondary: "assets/images/Medical-Agent.png"
    },
    {
        id: "multilingual-text-to-speech",
        title: "Multilingual-Text-To-Speech",
        definition: "Le modèle Multilingual-Text-To-Speech convertit du texte écrit en parole audio, prenant en charge plusieurs langues et accents, utilisé dans les assistants vocaux et traductions.",
        function: [
            "Analyse du texte : Traite le texte pour comprendre la prononciation, les intonations et les pauses.",
            "Synthèse vocale : Utilise des modèles phonétiques pour convertir le texte en audio.",
            "Adaptation linguistique : Change de langue tout en maintenant une qualité de voix naturelle."
        ],
        imageMain: "assets/images/TTS-Multilingue.png",
        imageSecondary: "assets/images/TTS-Multilingue.png"
    },
    {
        id: "neural-translation-pro",
        title: "Neural Translation Pro",
        definition: "Neural Translation Pro traduit des textes avec une grande précision grâce à des réseaux neuronaux profonds, préservant le sens et le contexte des phrases.",
        function: [
            "Prétraitement du texte : Analyse les structures grammaticales et syntaxiques du texte source.",
            "Traduction neuronale : Génère la traduction en tenant compte du contexte global.",
            "Post-traitement : Affine la traduction pour une syntaxe correcte et une fluidité naturelle."
        ],
        imageMain: "assets/images/Neural-Translation-Pro.png",
        imageSecondary: "assets/images/Neural-Translation-Pro.png"
    },
    {
        id: "prevision-analytics",
        title: "Prévision & Analytics",
        definition: "Le modèle Prévision & Analytics analyse des ensembles de données complexes pour prédire des tendances futures, utilisé dans la finance, le marketing, la santé, etc.",
        function: [
            "Collecte et préparation des données : Organise les données historiques nécessaires.",
            "Analyse statistique : Identifie les tendances ou anomalies dans les données.",
            "Prévision : Génère des prédictions sur des événements futurs avec indicateurs clés."
        ],
        imageMain: "assets/images/Prevision-Analytics.png",
        imageSecondary: "assets/images/Prevision-Analytics.png"
    },
    {
        id: "question-answering",
        title: "Question Answering",
        definition: "Le modèle Question Answering fournit des réponses précises à des questions posées en langage naturel, basé sur une base de connaissances ou des documents.",
        function: [
            "Compréhension de la question : Analyse la question pour extraire les éléments clés.",
            "Recherche dans la base de données : Interroge des documents pour trouver des informations pertinentes.",
            "Génération de la réponse : Formule une réponse concise et précise."
        ],
        imageMain: "assets/images/QR.png",
        imageSecondary: "assets/images/QR.png"
    },
    {
        id: "text-summarizer",
        title: "Text Summarizer",
        definition: "Le modèle Text Summarizer réduit un texte long à une version concise, tout en préservant l'essentiel de l'information, utilisé pour résumer articles ou rapports.",
        function: [
            "Analyse du texte : Identifie les informations clés du contenu.",
            "Extraction des points principaux : Sélectionne les segments les plus importants.",
            "Génération du résumé : Produit un résumé fluide et cohérent."
        ],
        imageMain: "assets/images/Text-Summarizer.png",
        imageSecondary: "assets/images/Text-Summarizer.png"
    },
    {
        id: "text-to-image",
        title: "Text to Image",
        definition: "Le modèle Text to Image crée des images visuelles à partir de descriptions textuelles, utilisé pour des illustrations, œuvres d'art ou visualisations.",
        function: [
            "Compréhension du texte : Analyse la description pour comprendre objets, scènes, couleurs, etc.",
            "Génération d'image : Utilise des réseaux génératifs (GANs/VAEs) pour créer une image cohérente.",
            "Affinage de l'image : Ajuste la qualité ou le style selon les paramètres souhaités."
        ],
        imageMain: "assets/images/Text-to-Image.png",
        imageSecondary: "assets/images/Text-to-Image.png"
    },
    {
        id: "tts-multilingue",
        title: "TTS Multilingue",
        definition: "Le modèle TTS Multilingue convertit du texte en parole dans plusieurs langues et accents, utilisé pour des assistants vocaux ou des systèmes de lecture.",
        function: [
            "Analyse du texte : Analyse la prononciation, les intonations et la syntaxe selon la langue.",
            "Synthèse vocale : Génère la parole avec des modèles phonétiques adaptés.",
            "Adaptation linguistique : Change de langue tout en conservant une voix naturelle."
        ],
        imageMain: "assets/images/TTS-Multilingue.png",
        imageSecondary: "assets/images/TTS-Multilingue.png"
    },
    {
        id: "chatbot-b2b",
        title: "Chatbot B2B",
        definition: "Un Chatbot B2B est un assistant virtuel conçu pour les interactions entre entreprises, automatisant la gestion des demandes et améliorant l'expérience client.",
        function: [
            "Compréhension des besoins : Analyse les demandes des partenaires ou clients.",
            "Interaction en temps réel : Répond aux questions fréquentes ou oriente vers les ressources adéquates.",
            "Intégration avec systèmes internes : Fournit des réponses personnalisées via bases de données."
        ],
        imageMain: "assets/images/ChatBot.png",
        imageSecondary: "assets/images/ChatBot.png"
    }
];

// Dynamically populate model detail page
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const modelId = urlParams.get('model');
    const model = modelsData.find(m => m.id === modelId);

    if (model) {
        // Update page title
        document.title = `${model.title} - Teranga AI`;

        // Update text content
        document.getElementById('model-title').textContent = model.title;
        document.getElementById('model-definition').textContent = model.definition;
        document.getElementById('model-function').innerHTML = model.function.map(item => `<li>${item}</li>`).join('');

        // Update images
        const mainImage = document.getElementById('model-image-main');
        const secondaryImage = document.getElementById('model-image-secondary');
        mainImage.src = model.imageMain;
        mainImage.alt = model.title;
    } else {
        // Handle invalid model ID
        document.getElementById('model-title').textContent = "Modèle non trouvé";
        document.getElementById('model-definition').textContent = "Le modèle spécifié n'existe pas.";
        document.getElementById('model-function').innerHTML = '';
        document.getElementById('model-image-main').style.display = 'none';
        document.getElementById('model-image-secondary').style.display = 'none';
    }
});