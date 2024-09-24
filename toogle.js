document.getElementById('show-history-btn').addEventListener('click', function () {
    document.getElementById('history-section').classList.remove('hidden');
    document.getElementById('show-history-btn').classList.remove('bg-lime-400');
    document.getElementById('donate-section').classList.add('hidden');
    document.getElementById('show-donate-btn').classList.add('bg-lime-400');
});
document.getElementById('show-donate-btn').addEventListener('click', function () {
    document.getElementById('donate-section').classList.remove('hidden');
    document.getElementById('show-donate-btn').classList.remove('bg-lime-400');
    document.getElementById('history-section').classList.add('hidden');
    document.getElementById('show-history-btn').classList.add('bg-lime-400');
});
