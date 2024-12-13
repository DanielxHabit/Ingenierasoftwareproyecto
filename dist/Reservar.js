document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('data-form');
    const submitButton = document.getElementById('submit-button');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();  
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
  
      const clientData = {
        name: name,
        email: email,
        phone: phone
      };
  

      const jsonData = JSON.stringify(clientData);
  
      localStorage.setItem('clientData', jsonData);
      
      downloadJSON(jsonData);
  
      alert('Datos enviados con éxito');
    });
  
    function downloadJSON(data) {
      const blob = new Blob([data], { type: 'application/json' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'clientData.json';
      link.click();
    }
  });
  