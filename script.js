function generate(){
    const len = parseInt(document.getElementById('length').value);
    const upper = document.getElementById('uppercase').checked;
    const nums = document.getElementById('numbers').checked;
    const special = document.getElementById('special-character').checked;

    const password = genPassword(len, upper, nums, special);
    document.getElementById('js-output').textContent = password;
}

function genPassword(len, upper, nums, special){
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numChars = '0123456789';
    const specialChars = "!@#$%^&*()-_=+[]{}|;:,.<>?";

    let chars = lower;
    if(upper) chars += upperChars;
    if(nums) chars += numChars;
    if(special) chars += specialChars;

    let password = "";
    for(let i = 1; i <= len; i++){
        const randIdx = Math.floor(Math.random() * chars.length);
        password += chars[randIdx];
    }
    return password;

}

function reset(){
    document.getElementById('length').value = 12;
    doucument.getElementById('uppercase').checked = true;
    document.getElementById('numbers').checked = true;
    doucument.getElementById('special-character').checked = true;
    doucument.getElementById('js-output').textContent = " Your Password will appear here."
}