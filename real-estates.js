// Simulate the search functionality
document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const query = document.getElementById('searchQuery').value.toLowerCase();
  
    const properties = document.querySelectorAll('.property-card');
    properties.forEach(property => {
      const title = property.querySelector('h3').textContent.toLowerCase();
      if (title.includes(query)) {
        property.style.display = 'block'; // Show the property
      } else {
        property.style.display = 'none'; // Hide the property
      }
    });
  });
  
// select location script
function openWebsite(select) {
  const url = select.value;
    if (url) {
      window.open(url, '_blank'); // Opens in a new tab
    }
  }