document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("guessForm");
  const resultado = document.getElementById("resultado");

  // Aqui você pode colocar o nome real da pessoa.
  const nomeReal = "Bruno"; // Substitua pelo seu nome real!

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nomeGuess = document.getElementById("nome-guess").value.trim();

    if (nomeGuess.toLowerCase() === nomeReal.toLowerCase()) {
      resultado.textContent = "Parabéns! Você acertou!";
      resultado.style.color = "green";
    } else {
      resultado.textContent = "Tente novamente! Adivinhe o nome correto.";
      resultado.style.color = "red";
    }

    // Limpar o campo de texto
    document.getElementById("nome-guess").value = "";
  });
});
