const stars = document.querySelectorAll('.starIcon');
let selectedValutazione = null;

document.addEventListener('click', function(el) {
  const clickedStar = el.target;

  // Verifica se il clic è stato fatto su un'icona stellare
  if (clickedStar.classList.contains('starIcon')) {
    // Rimuovere la classe "attivo" da tutte le stelle
    stars.forEach(function(star) {
      star.classList.remove('attivo');
    });

     // Aggiunge la classe 'attivo' alla stella cliccata    
     clickedStar.classList.add('attivo');

    // Ottiene la valutazione della starIcon cliccata
    selectedValutazione = clickedStar.getAttribute('valutazione');

    //visualizzare la console per la valutazione
    console.log(`Valutazione selecionada: ${selectedValutazione}`);
  }
});
