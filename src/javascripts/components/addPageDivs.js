const app = document.querySelector('#app');

const loadPageDivs = () => {
  app.innerHTML = `<div class='jumbotron'></div>
  <div id='form-div' class='d-print-none d-flex flex-wrap justify-content-center'></div>
  <div id='cards' class='mt-4'></div>`;
};

export default loadPageDivs;