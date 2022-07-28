//FAQ javascript marie-sophie
function accordion () {

  const acc = document.getElementsByClassName("accueil-faq-tableau-accordion");
  console.log(acc)
  const panelAll = document.getElementsByClassName("accueil-faq-tableau-accordion-panel");
  const minus = ['-'];

  for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {


      acc[i].classList.toggle("active");
      let panel = panelAll[i];
      console.log(panel)
      if (panel.style.maxHeight) {
        console.log("fermé")
        panel.style.maxHeight = null;

      } else {
        console.log(minus[0])
        panel.style.maxHeight = panel.scrollHeight + "px";
        // acc[i].classList.toggle("activebis");

      } 
    });
  }

 
}

function faq () {
    accordion();
    let question = document.querySelectorAll('.accueil-faq-tableau-accordion');
   
    for (let i = 0; i < question.length; i++) { 
        question[i].addEventListener("click", function() {
            // console.log(question[i].getAttribute("data-question"));
           
           if (question[i].getAttribute("data-question") === "+") {
            question[i].setAttribute("data-question", "-");
           } else {
            question[i].setAttribute("data-question", "+");

           }
        });
    }
}
export default faq;

//récupérer dataattribut en get attribut en scss on veut récupérer la data attr()
//faire boucle for foreach sur tous les éléments boucle à faire en premier

//queryselectorall tous les éméents du tableau
//boucle pour vérifier tous les éléments
