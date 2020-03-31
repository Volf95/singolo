document.addEventListener('DOMContentLoaded', function (event) {
  const navLink = document.querySelectorAll('.menu_link');
  const allSections = document.querySelectorAll('section');
  const burgerBtn = document.querySelector('.burger_btn');
  const navbarContent = document.querySelector('.navbar_content');
  const navbarBlock = document.querySelector('.navbar');
  
  const verticalPhone = document.querySelector('.vertical_phone');
  const verticalPhoneDisplay = document.querySelector('.vertical_display');
  const horizontalPhone = document.querySelector('.horizontal_phone');
  const horizontalPhoneDisplay = document.querySelector('.horizontal_display');
  const centerPhone = document.querySelector('.center_phone');
  const centerPhoneDisplay = document.querySelector('.center_display');

  const portfolioTabs = document.querySelector('.button_group');
  const portflolioItems = document.querySelector('.portfolio_items');
  const allPortfolios = document.querySelectorAll('.portfolio_img');

  const requestForm = document.querySelector('.request_form');
  const sendRequestBtn = document.querySelector('.send_request');
  const modalWindowBlock = document.querySelector('.modal_window');


/* === NAVBAR ACTIVE === */
  const onScroll = () => {
    let scrollPosition = window.scrollY;
    allSections.forEach(element => {
      if (element.offsetTop - 95 <= scrollPosition && (element.offsetTop + element.offsetHeight - 95) > scrollPosition) {
        navLink.forEach(elem => {
          elem.classList.remove('active');
          if (element.firstElementChild.getAttribute('name') === elem.getAttribute('href').substring(1)) {
            elem.classList.add('active');
          }
        });
      }
    });
  }

  const scrollWindow = () => {
    document.addEventListener('scroll', onScroll);
  }
  scrollWindow();
/* === / NAVBAR ACTIVE === */


/* === PHONE MENU NAVBAR === */
  const navbarDispOpen = () => {
    let logotype = document.querySelector('.logotype');
    if (navbarContent.classList.contains('phone_navbar_opened')) {
      navbarBlock.classList.remove('hidden_menu');
      logotype.classList.add('navbar_logotype');
    } else {
      logotype.classList.remove('navbar_logotype');
      navbarBlock.classList.add('hidden_menu');
    }
  }

  const linkToPhoneSectionMenu = () => {
    navbarContent.addEventListener('click', (e) => {
      if(e.target.classList.contains('menu_link')){
        burgerBtn.classList.remove('rotated_burger_btn');
        navbarContent.classList.remove('phone_navbar_opened');
        navbarBlock.classList.add('hidden_menu');
      }
    });
  }
  
  const phoneMenuClickHandler = (clickedMenuBtn) => {
    if (clickedMenuBtn.classList.contains('burger_btn') || clickedMenuBtn.classList.contains('menu_btn_line')) {
      burgerBtn.classList.toggle('rotated_burger_btn');
      navbarContent.classList.toggle('phone_navbar_opened');
    }
    navbarDispOpen();
    linkToPhoneSectionMenu();
  }

  const phoneMenuActive = () => {
    burgerBtn.addEventListener('click', (e) => {
      let clickedMenuBtn = e.target;
      phoneMenuClickHandler(clickedMenuBtn);
      e.preventDefault();
    });
  }

  phoneMenuActive();
/* === / PHONE MENU NAVBAR === */


/* === ON and OFF PHONE DISPLAYS === */
  const verticalDispClickHandler = (clickedPhoneItem) => {
    if (clickedPhoneItem.classList.contains('vertical_home_btn')) {
      verticalPhoneDisplay.classList.toggle('disp_off');
    }
    if (clickedPhoneItem.classList.contains('vertical_display')) {
      verticalPhoneDisplay.classList.toggle('disp_off');
    }
  }

  const horizontalDispClickHandler = (clickedPhoneItem) => {
    if (clickedPhoneItem.classList.contains('horizontal_home_btn')) {
      horizontalPhoneDisplay.classList.toggle('disp_off');
    }
    if (clickedPhoneItem.classList.contains('horizontal_display')) {
      horizontalPhoneDisplay.classList.toggle('disp_off');
    }
  }

  const centerDispClickHandler = (clickedPhoneItem) => {
    if (clickedPhoneItem.classList.contains('center_home_btn')) {
      centerPhoneDisplay.classList.toggle('disp_off');
    }
    if (clickedPhoneItem.classList.contains('center_display')) {
      centerPhoneDisplay.classList.toggle('disp_off');
    }
  }

  const onclickPhoneTheme = () => {
    verticalPhone.addEventListener('click', (e) => {
      let clickedPhoneItem = e.target;
      verticalDispClickHandler(clickedPhoneItem);
    });
    horizontalPhone.addEventListener('click', (e) => {
      let clickedPhoneItem = e.target;
      horizontalDispClickHandler(clickedPhoneItem);
    });
    centerPhone.addEventListener('click', (e) => {
      let clickedPhoneItem = e.target;
      centerDispClickHandler(clickedPhoneItem);
    });
  }
  onclickPhoneTheme();
/* === / ON and OFF PHONE DISPLAYS === */


/* === BORDERED PORTFOLIO IMAGE === */
  const removeItemBorder = () => {
    let selectedItem = document.querySelectorAll('.portfolio_items .portfolio_img');
    selectedItem.forEach(item => {
      item.classList.remove('bordered');
    });
  }

  const addItemBorder = (clickedItem) => {
    clickedItem.parentElement.classList.add('bordered');
  }

  const activatePortfolioItem = () => {
    portflolioItems.addEventListener('click', (e) => {
      let clickedItem = e.target;
      if (clickedItem.classList.contains('project_image')) {
        removeItemBorder();
        addItemBorder(clickedItem);
      }
    });
  }
  activatePortfolioItem();
/* === / BORDERED PORTFOLIO IMAGE === */


/* === PORTFOLIO BUTTONS === */
  const removeActiveBtn = () => {
    let groupOfBtns = document.querySelectorAll('.button_group .btn');
    groupOfBtns.forEach(btn => {
      btn.classList.remove('btn_active');
    });
  }

  const addActiveBtn = (clickedTab) => {
    clickedTab.classList.add('btn_active');
  }

  const portfolioTabsClickHandler = () => {
    portfolioTabs.addEventListener('click', (e) => {
      let clickedTab = e.target;
      if(clickedTab.classList.contains('btn')){
        removeActiveBtn();
        addActiveBtn(clickedTab);
      }
    });
  }
  portfolioTabsClickHandler();
/* === / PORTFOLIO BUTTONS === */

/* === PORTFOLIO RANDOM SHUFFLE === */
  const randomlyShuffle = () => {
    portfolioTabs.addEventListener('click', (e) => {
      if (e.target.classList.contains('btn')) {
        /*portflolioItems.innerHTML = '';*/
        swapListCalc();
      }
    });
  }

  const swapListCalc = () => {
    let arr = [];
    let quantityOfPortfolio = allPortfolios.length;
    let i = quantityOfPortfolio - 1;
    while (i > 0) {
      let j = Math.floor(Math.random() * quantityOfPortfolio);
      if (arr.includes(j)) {
        i = i + 1;
      } else {
        arr.push(j);
      }
      i--;
    }
    if (arr.length === quantityOfPortfolio - 1) {
      for (let index = 0; index < arr.length; index++) {
        [allPortfolios[index], allPortfolios[arr[index]]] = [allPortfolios[arr[index]], allPortfolios[index]];
        portflolioItems.appendChild(allPortfolios[arr[index]], allPortfolios[index]);
      }
    }
  }
  
  randomlyShuffle();
/* === PORTFOLIO RANDOM SHUFFLE === */



/* === SEND REQUEST === */
  const sendRequest = (e) => {
    document.body.style.width = document.body.offsetWidth + 'px';
    let subject = document.querySelector('.subject').value;
    let description = document.querySelector('.description').value;
    if (requestForm.checkValidity()) {
      modalWindowBlock.style.display = 'block';
      if (!!subject && !!description) {
        modalWindowBlock.innerHTML = `
        <h3 class="modal_title">The letter was sent</h3>
        <p class="modal_theme">Subject: ${subject}</p>
        <p class="modal_description">Description: ${description}</p>
        <button type="button" class="close_modal">Ok</button>`;
      } else {
        modalWindowBlock.innerHTML = `
        <h3 class="modal_title">The letter was sent</h3>
        <p class="modal_theme">Without subject</p>
        <p class="modal_description">Without description</p>
        <button type="button" class="close_modal">Ok</button>`;
      }   
      e.preventDefault();
    }  
  }

  const closeModalWindow = () => {
    modalWindowBlock.addEventListener('click', (e) => {
      if (e.target.classList.contains('close_modal')) {
        modalWindowBlock.style.display = 'none';
        requestForm.reset();
      }
      if (e.target.classList.contains('modal_window')) {
        modalWindowBlock.style.display = 'none';
        requestForm.reset();
      }
    });
  }

  const requestFormClickHandler = () => {
    sendRequestBtn.addEventListener('click', sendRequest);
    closeModalWindow();
  }
  requestFormClickHandler();

/* ===  / SEND REQUEST === */



/* === SLIDER === */

  /* const prevSlideBtn = document.querySelector('.prev_arrow');
    const nextSlideBtn = document.querySelector('.next_arrow');
    const sliders = document.querySelector('.sliders');
    const sliderItemList = document.querySelectorAll('.slider_item');
    const previousSlide = () => {
      displaySlides(0);
    }

    const nextSlide = () => {
      displaySlides(2);  
    }

    function displaySlides(i) { 
      if (i >= sliderItemList.length) {
        slideIndex = 1;
      }  
      if (i < 1) {
        slideIndex = sliderItemList.length;
      }
      for (let x = 0; x < sliderItemList.length; x++) {
        sliderItemList[x].style.display = "none";
      }  
      sliderItemList[slideIndex - 1].style.display = "flex";
    }

    const changeSlides = () => {
         
      prevSlideBtn.addEventListener('click', previousSlide);
      nextSlideBtn.addEventListener('click', nextSlide);
    }
    changeSlides();*/
});


