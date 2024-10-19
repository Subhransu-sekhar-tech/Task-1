document.addEventListener('DOMContentLoaded', function() {
    const name = "John Doe";
    const designation = "Software Developer";
  
    document.querySelector('.name-container strong').textContent = name;
    document.querySelector('.name-container p:nth-child(2)').textContent = `(${designation})`;
  });
  