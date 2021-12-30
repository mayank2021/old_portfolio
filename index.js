const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change',() => {
  document.body.classList.toggle('dark');
  document.getElementById('label').classList.toggle('darkone');
  document.getElementById('title').classList.toggle('title-dark');
  document.getElementById('navbar').classList.toggle('navbar-dark');
  document.getElementById('bottom-container').classList.toggle('bottom-container-dark');
  document.getElementById('btn').classList.toggle('btn-dark');
  document.getElementById('dark-mode-h3-one').classList.toggle('dark-mode-h3');
  document.getElementById('dark-mode-h3-two').classList.toggle('dark-mode-h3');
  document.getElementById('dark-mode-h3-three').classList.toggle('dark-mode-h3');
  document.getElementById('dark-mode-h3-four').classList.toggle('dark-mode-h3');
  document.getElementById('dark-mode-h3-five').classList.toggle('dark-mode-h3');
  document.getElementById('dark-mode-h3-six').classList.toggle('dark-mode-h3');
  document.getElementById('nav-link-one').classList.toggle('nav-link-dark');
  document.getElementById('nav-link-two').classList.toggle('nav-link-dark');
  document.getElementById('nav-link-three').classList.toggle('nav-link-dark');
  document.getElementById('dark-mode-one').classList.toggle('dark');
  document.getElementById('dark-mode-two').classList.toggle('dark');
  document.getElementById('dark-mode-three').classList.toggle('dark');
  document.getElementById('dark-mode-four').classList.toggle('dark');
  document.getElementById('dark-mode-five').classList.toggle('dark');
  document.getElementById('dark-mode-six').classList.toggle('dark');
  document.getElementById('dark-mode-seven').classList.toggle('dark');
  document.getElementById('author-name-one').classList.toggle('author-name-dark');
  document.getElementById('author-name-two').classList.toggle('author-name-dark');
  document.getElementById('icon-div-dark-one').classList.toggle('icon-div-dark-mode');
  document.getElementById('icon-div-dark-two').classList.toggle('icon-div-dark-mode');
  document.getElementById('icon-div-dark-three').classList.toggle('icon-div-dark-mode');
  document.getElementById('icon-div-dark-four').classList.toggle('icon-div-dark-mode');
  document.getElementById('hello-dark-mode').classList.toggle('hello-dark-mode');
  
});