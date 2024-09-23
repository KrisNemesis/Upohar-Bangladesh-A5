document.getElementById('show-history-btn').addEventListener('click', function () {
    console.log('CLICKED')
    document.getElementById('history-section').classList.remove('hidden');
    document.getElementById('donate-section').classList.add('hidden');
});
document.getElementById('show-donate-btn').addEventListener('click', function () {
    console.log('CLICKED')
    document.getElementById('donate-section').classList.remove('hidden');
    document.getElementById('history-section').classList.add('hidden');
});
