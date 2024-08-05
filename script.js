function copyKey() {
    const keyOutput = document.getElementById('keyOutput');
    const key = keyOutput.textContent;

    if (key) {
        navigator.clipboard.writeText(key)
            .then(() => {
                showToast('Key copied to clipboard!');
            })
            .catch((error) => {
                console.error('Failed to copy key:', error);
            });
    }
}

function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.style.display = 'block';

    setTimeout(() => {
        toast.style.display = 'none';
    }, 2000);
}

function displayKey(key) {
    const keyOutput = document.getElementById('keyOutput');
    keyOutput.textContent = key;
    // showCopyButton();
}

// function showCopyButton() {
//     const copyBtn = document.getElementById('copyBtn');
//     copyBtn.style.display = 'inline-block';
// }

document.getElementById('generateBtn').addEventListener('click', function () {
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.play();
    axios.get('https://warp-api-cwu2.onrender.com/random-key', {
        headers: {
            'VONEZ-TOKEN': 'TANGINAMO-BOBO-KABA-HA'
        }
    })
        .then(response => {
            const key = response.data.key;
            displayKey(key);
        })
        .catch(error => {
            console.error('Error fetching key:', error);
        });
});
