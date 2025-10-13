// Template Switcher JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize template switcher
    const templateButtons = document.querySelectorAll('.template-btn');
    const templateViews = document.querySelectorAll('.template-view');
    
    // Set default active template (Glint)
    const defaultTemplate = 'glint';
    showTemplate(defaultTemplate);
    setActiveButton(defaultTemplate);
    
    // Add click event listeners to buttons
    templateButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const templateName = this.dataset.template;
            showTemplate(templateName);
            setActiveButton(templateName);
            
            // Save user preference
            localStorage.setItem('selectedTemplate', templateName);
        });
    });
    
    // Load user preference on page load
    const savedTemplate = localStorage.getItem('selectedTemplate');
    if (savedTemplate) {
        showTemplate(savedTemplate);
        setActiveButton(savedTemplate);
    }
    
    function showTemplate(templateName) {
        // Hide all templates
        templateViews.forEach(view => {
            view.classList.remove('active');
        });
        
        // Show selected template
        const selectedView = document.getElementById(templateName + '-view');
        if (selectedView) {
            selectedView.classList.add('active');
        }
        
        // Update page title
        updatePageTitle(templateName);
    }
    
    function setActiveButton(templateName) {
        // Remove active class from all buttons
        templateButtons.forEach(button => {
            button.classList.remove('active');
        });
        
        // Add active class to selected button
        const activeButton = document.querySelector(`[data-template="${templateName}"]`);
        if (activeButton) {
            activeButton.classList.add('active');
        }
    }
    
    function updatePageTitle(templateName) {
        const titles = {
            'glint': 'Hobiautode Hoiustamine - Glint Design',
            'carries': 'Hobiautode Hoiustamine - Carries Design', 
            'landed': 'Hobiautode Hoiustamine - Landed Design'
        };
        
        document.title = titles[templateName] || 'Hobiautode Hoiustamine';
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Template loading functions
function loadTemplate(templateName) {
    console.log(`Loading ${templateName} template...`);
    // This will be expanded when we add the actual template content
}