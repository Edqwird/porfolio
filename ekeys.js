const boxFBT = document.querySelectorAll('.front, .back, .tools');
const bar = document.querySelectorAll('.tSkill');
const boxBar = document.querySelector('.blockSkill');

bar.forEach((bart, index) => {
    bart.addEventListener('click', () => {
        bar.forEach(item => item.classList.remove('active'));

        boxFBT.forEach(fbt => fbt.style.display = 'none');
        
        bart.classList.add('active');

        if (index === 0) {
            boxFBT[0].style.display = 'flex';
            boxBar.style.borderRadius = '0 2rem 2rem 2rem';
        } else if (index === 1) {
            boxFBT[1].style.display = 'flex';
            boxBar.style.borderRadius = '2rem';
        } else if (index === 2) {
            boxFBT[2].style.display = 'flex';
            boxBar.style.borderRadius = '2rem 0 2rem 2rem';
        }
    })
}) 

document.addEventListener('DOMContentLoaded', function() {
    boxFBT.forEach(fbt => fbt.style.display = 'none');
    boxFBT[0].style.display = 'flex';
});