const dropdown = document.getElementById('myDropdown');

dropdown.addEventListener('change', function() {
  const selectedOption = dropdown.value;
  // Do something with the selected option, e.g., display it
  if (selectedOption !== '') {
    console.log('Selected option: ' + selectedOption);
  } else {
    console.log('Please select an option');
  }
});

const openBtn = document.getElementById("openModal");
const modal = document.getElementById("modal");

openBtn.addEventListener("click", () => {
     modal.classList.add("open");
});

document.getElementById("closeModal").onclick = function () {
    location.href = "/index.html";
};