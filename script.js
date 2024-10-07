//function for menu bar
      function menu(){
        document.querySelector(".menu").style.display = "block";
        document.querySelector(".menu-main").classList.add("swipeleft");
      }

       //function for closing menu bar
       function closemenu(){
        document.querySelector(".menu").style.display = "none";
        document.querySelector(".menu-main").classList.remove("swipeleft");
      }


      //observer for hero section
      const hero = document.querySelector(".hero");

      const observer4 = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            let Element1 = document.querySelector(".hero-txt-rect");
            let Element2 = document.querySelector(".hero-txt");
            if (entry.isIntersecting) {
              Element1.classList.add("swipeFromRight");
              Element2.classList.add("rotateby90");
            } else {
              Element1.classList.remove("swipeFromRight");
              Element2.classList.remove("rotateby90");
            }
          });
        },
        {
          threshold: 0.2,
        }
      );

      observer4.observe(hero);



      //observer for container1
      const cont1 = document.querySelector(".container1");

      const observer3 = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            let Element1 = document.querySelector(".cont1-box-txt");
            let Element2 = document.querySelector(".cont1-box-txt2");
            let Element3 = document.querySelector(".cont1-box-img2");
            let Element4 = document.querySelector(".cont1-box-img1");
            if (entry.isIntersecting) {
              Element1.classList.add("aniSlideBottom");
              Element2.classList.add("aniSlideBottom");
              Element3.classList.add("aniRollBottom");
              Element4.classList.add("aniRollRight2");
            } else {
              Element1.classList.remove("aniSlideBottom");
              Element2.classList.remove("aniSlideBottom");
              Element3.classList.remove("aniRollBottom");
              Element4.classList.remove("aniRollRight2");
            }
          });
        },
        {
          threshold: 0.2,
        }
      );

      observer3.observe(cont1);

      // observer1 for container2
      const cont2Txt = document.querySelector(".cont2-txt2");

      const observer1 = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            let Element = document.querySelector(".cont2-txt1");
            if (entry.isIntersecting) {
              Element.classList.add("aniRollRight");
              cont2Txt.classList.add("swipeFromRight");
            } else {
              cont2Txt.classList.remove("swipeFromRight");
              Element.classList.remove("aniRollRight");
            }
          });
        },
        {
          threshold: 0.2,
        }
      );

      observer1.observe(cont2Txt);

      // observer1 for container6
      const cont6Txt = document.querySelector(".cont6-txt2");

      const observer6 = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            let Element = document.querySelector(".cont6-txt1");
            if (entry.isIntersecting) {
              Element.classList.add("zoom2");
              cont6Txt.classList.add("swipeFromleft");
            } else {
              cont6Txt.classList.remove("swipeFromleft");
              Element.classList.remove("zoom2");
            }
          });
        },
        {
          threshold: 0.2,
        }
      );

      observer6.observe(cont6Txt);

      //observer2 for container4
      const container4 = document.querySelector(".container4");

      const observer2 = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            let Element = document.querySelector(".cont4-txt");
            let img1 = document.querySelector(".cont4Img1");
            let img2 = document.querySelector(".cont4Img2");
            let img3 = document.querySelector(".cont4Img3");
            let img4 = document.querySelector(".cont4Img4");
            if (entry.isIntersecting) {
              Element.classList.add("zoom-out");
              img1.classList.add("aniSlideRight");
              img2.classList.add("aniSlideLeft");
              img3.classList.add("aniSlideRight");
              img4.classList.add("aniSlideLeft");
            } else {
              Element.classList.remove("zoom-out");
              img1.classList.remove("aniSlideRight");
              img2.classList.remove("aniSlideLeft");
              img3.classList.remove("aniSlideRight");
              img4.classList.remove("aniSlideLeft");
            }
          });
        },
        {
          threshold: 0.2,
        }
      );

      observer2.observe(container4);

      // observer1 for container5

      const cont5 = document.querySelector(".container5");

      const observer5 = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            let Element = document.querySelector(".cont5Content");
            if (entry.isIntersecting) {
              Element.classList.add("aniSlideTop");
              cont6Txt.classList.add("swipeFromleft");
            } else {
              cont6Txt.classList.remove("swipeFromleft");
              Element.classList.remove("aniSlideTop");
            }
          });
        },
        {
          threshold: 0.2,
        }
      );

      observer5.observe(cont5);
