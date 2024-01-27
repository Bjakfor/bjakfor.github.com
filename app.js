const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allsections = document.querySelectorAll('.maincontent');

function PageTransitions() {
  // button click active class
  for (let i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener('click', function () {
      let currentBtn = document.querySelector('.active-btn');
      if (currentBtn) {
        currentBtn.classList.remove('active-btn');
      }
      this.classList.add('active-btn');
    });
  }

  // all sections active
  allsections.forEach((section) => {
    section.addEventListener('click', (e) => {
      const id = e.target.dataset.id;
      if (id) {
        // remove selected from the other btns
        sectBtns.forEach((btn) => {
          btn.classList.remove('active');
        });

        // find the parent button and add 'active' class
        const parentButton = e.target.closest('.control');
        if (parentButton) {
          parentButton.classList.add('active');
        }

        // hide other sections
        sections.forEach((section) => {
          section.classList.remove('active');
        });

        const element = document.getElementById(id);
        if (element) {
          element.classList.add('active');
        }
      }
    });
  });

  //toogle theme
  const themeBtn = document.querySelector('.theme-btn');
  themeBtn.addEventListener('click', ()=>{
    let element = document.body;
    element.classList.toggle('light-mode')
  });
}

PageTransitions();
