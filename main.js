const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }   
    }); 
});


const hiddenElements = document.querySelectorAll('.hide, .hide-2');
hiddenElements.forEach((el) => observer.observe(el));

// SKILL 
document.getElementById('web-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default behavior of the link
    showContent('web');
});

document.getElementById('programming-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default behavior of the link
    showContent('programming');
});

document.getElementById('android-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default behavior of the link
    showContent('android');
});

document.getElementById('database-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default behavior of the link
    showContent('database');
});

document.getElementById('tools-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default behavior of the link
    showContent('tools');
});

function showContent(type) {
    if (type === 'web') {
        document.getElementById('content_web').classList.remove('d-none');
        document.getElementById('content_programming1').classList.add('d-none');
        document.getElementById('content_programming2').classList.add('d-none');
        document.getElementById('content_android').classList.add('d-none');
        document.getElementById('content_database').classList.add('d-none');
        document.getElementById('content_tools1').classList.add('d-none');
        document.getElementById('content_tools2').classList.add('d-none');
    } else if (type === 'android') {
        document.getElementById('content_android').classList.remove('d-none');
        document.getElementById('content_programming1').classList.add('d-none');
        document.getElementById('content_programming2').classList.add('d-none');
        document.getElementById('content_web').classList.add('d-none');
        document.getElementById('content_database').classList.add('d-none');
        document.getElementById('content_tools1').classList.add('d-none');
        document.getElementById('content_tools2').classList.add('d-none');
    } else if (type === 'database') {
        document.getElementById('content_database').classList.remove('d-none');
        document.getElementById('content_programming1').classList.add('d-none');
        document.getElementById('content_programming2').classList.add('d-none');
        document.getElementById('content_web').classList.add('d-none');
        document.getElementById('content_android').classList.add('d-none');
        document.getElementById('content_tools1').classList.add('d-none');
        document.getElementById('content_tools2').classList.add('d-none');
    } else if (type === 'tools') {
        document.getElementById('content_tools1').classList.remove('d-none');
        document.getElementById('content_tools2').classList.remove('d-none');
        document.getElementById('content_programming1').classList.add('d-none');
        document.getElementById('content_programming2').classList.add('d-none');
        document.getElementById('content_web').classList.add('d-none');
        document.getElementById('content_android').classList.add('d-none');
        document.getElementById('content_database').classList.add('d-none');
    } else {
        document.getElementById('content_programming1').classList.remove('d-none');
        document.getElementById('content_programming2').classList.remove('d-none');
        document.getElementById('content_web').classList.add('d-none');
        document.getElementById('content_android').classList.add('d-none');
        document.getElementById('content_database').classList.add('d-none');
        document.getElementById('content_tools1').classList.add('d-none');
        document.getElementById('content_tools2').classList.add('d-none');
    }
}