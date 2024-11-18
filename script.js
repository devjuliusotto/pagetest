function changeLanguage(lang) {
  const greeting = document.getElementById('greeting');
  const typingText = document.getElementById('typing-text');

  if (lang === 'en') {
    greeting.textContent = 'Hello There! I am Julius!';
    typingText.innerHTML = '<img src="https://readme-typing-svg.herokuapp.com?font=comfortaa&color=EC3E85&size=30&width=1000&lines=Welcome+to+my+GitHub+Profile!" alt="Typing Animation">';
    // Alterar outros textos para inglês
  } else if (lang === 'pt') {
    greeting.textContent = 'Olá! Eu sou Julius!';
    typingText.innerHTML = '<img src="https://readme-typing-svg.herokuapp.com?font=comfortaa&color=EC3E85&size=30&width=1000&lines=Bem-vindo+ao+meu+perfil+do+GitHub!" alt="Animação de Digitação">';
    // Alterar outros textos para português
  } else if (lang === 'de') {
    greeting.textContent = 'Hallo! Ich bin Julius!';
    typingText.innerHTML = '<img src="https://readme-typing-svg.herokuapp.com?font=comfortaa&color=EC3E85&size=30&width=1000&lines=Herzlich+willkommen+zu+meinem+GitHub-Profil!" alt="Schreibanimation">';
    // Alterar outros textos para alemão
  }
}
