document.addEventListener('DOMContentLoaded', function() {
    // Fetch the JSON data
    fetch('data/classes.json')
      .then(response => response.json())
      .then(data => {
        // Log data to console for testing
        console.log(data);
  
        // Call function to display the classes
        displayClasses(data);
      })
      .catch(error => console.error('Error fetching JSON:', error));
  });
  
  function displayClasses(classes) {
    const classList = document.getElementById('class-list');
  
    // Clear any previous content
    classList.innerHTML = '';
  
    // Loop through the classes and display them
    classes.forEach(classData => {
      const classCard = `
        <div class="col-md-4">
          <div class="card mb-4">
            <img src="${classData.ImageUrl}" class="card-img-top" alt="${classData.Name}">
            <div class="card-body">
              <h5 class="card-title">${classData.Name}</h5>
              <p class="card-text">${classData.ShortDesc}</p>
            </div>
          </div>
        </div>
      `;
      classList.innerHTML += classCard;
    });
  }
  
  