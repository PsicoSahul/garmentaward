document.addEventListener('DOMContentLoaded', function() {
    const certificateCard = document.querySelector('.certificate-card');
    
    // Add subtle tilt effect on mouse move
    if (certificateCard) {
        document.addEventListener('mousemove', (e) => {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
            certificateCard.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        });
        
        // Reset position when mouse leaves
        certificateCard.addEventListener('mouseleave', () => {
            certificateCard.style.transform = 'rotateY(0deg) rotateX(0deg)';
            certificateCard.style.transition = 'transform 0.5s ease';
            setTimeout(() => {
                certificateCard.style.transition = '';
            }, 500);
        });
    }
    
    // Add print functionality
    const printCertificate = () => {
        window.print();
    };
    
    // You can add a print button in the future
    // document.querySelector('.print-btn').addEventListener('click', printCertificate);
});