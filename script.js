document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const loginTime = new Date().toLocaleString();
    const linksList = document.getElementById('linksList');
    const welcomeMessage = document.getElementById('welcomeMessage');
    const content = document.getElementById('content');

    if (username === 'dev' && password === 'dev') {
        welcomeMessage.textContent = 'Welcome Developer!';
        welcomeMessage.textContent = 'Please find the list of feature planned for this Program Increment...';
        linksList.innerHTML = generateLinks('Feature Link');
    } else if (username === 'test' && password === 'test') {
        welcomeMessage.textContent = 'Welcome Tester!';
        welcomeMessage.textContent = 'Please find the list of test cases planned for this Program Increment...';
        linksList.innerHTML = generateLinks('Test Cases Link');
    } else {
        alert('Invalid credentials');
        return;
    }

    document.getElementById('loginTime').textContent = loginTime;
    document.querySelector('.container').classList.add('hidden');
    content.classList.remove('hidden');
});

function generateLinks(linkText) {
    let links = '';
    for (let i = 1; i <= 10; i++) {
        links += `<li><a href="#">${linkText} ${i}</a></li>`;
    }
    return links;
}
