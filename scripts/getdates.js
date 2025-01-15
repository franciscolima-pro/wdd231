let currentYear = new Date().getFullYear();
document.querySelector('#currentYear').textContent = `${currentYear} `;

let lastModified = document.lastModified;
document.querySelector('#lastModified').textContent = `Last Modification: ${lastModified}`;

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Seleciona todos os botões e elementos dos cursos
const allButton = document.getElementById('all');
const cseButton = document.getElementById('cse');
const wddButton = document.getElementById('wdd');
const coursesContainer = document.getElementById('subjects'); // Container onde os cursos serão exibidos

// Função para mostrar/ocultar os cursos
function filterCourses(subject) {
  // Limpar cursos exibidos
  coursesContainer.innerHTML = "";

  // Filtra os cursos com base no assunto selecionado
  const filteredCourses = courses.filter(course => subject === 'All' || course.subject === subject);

  // Adiciona os cursos filtrados ao DOM
  filteredCourses.forEach(course => {
    const courseElement = document.createElement('a');
    courseElement.href = "#";
    const isCompleted = completedCourses.includes(course.number);
    courseElement.className = isCompleted ? "subrown" : "sugray"; // Marca cursos concluídos com a classe 'completed'

    courseElement.textContent = `${course.subject} ${course.number}`;
    courseElement.setAttribute('data-subject', course.subject);
    coursesContainer.appendChild(courseElement);
  });

  // Atualiza os créditos totais após o filtro
  updateCredits(filteredCourses);
}

// Função para atualizar os créditos totais
function updateCredits(filteredCourses) {
    const totalCredits = calculateCredits(filteredCourses);
    document.getElementById("totalCredits").textContent = `Total Credits: ${totalCredits}`;
}

// Adiciona eventos de clique para os botões
allButton.addEventListener('click', (e) => {
  e.preventDefault(); // Evita o recarregamento da página
  filterCourses('All');
});

cseButton.addEventListener('click', (e) => {
  e.preventDefault();
  filterCourses('CSE');
});

wddButton.addEventListener('click', (e) => {
  e.preventDefault();
  filterCourses('WDD');
});

// Inicializa com todos os cursos
document.body.onload = () => {
    filterCourses("All");
};


