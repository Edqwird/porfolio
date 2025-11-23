const boxFBT = document.querySelectorAll('.front', '.back', '.tools');
const bar = document.querySelectorAll('.tSkill');

bar.forEach(bart => {
    bart.addEventListener('click', () => {
        bar.forEach(item => {
            item.classList.remove('active');
            item.classList.remove('invisible');
        });
        
        // Затем добавляем классы только к clicked элементу
        bart.classList.add('active');
    })
})