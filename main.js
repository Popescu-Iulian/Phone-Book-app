const nume = document.querySelector('.nume');
const telefon = document.querySelector('.telefon');
const listaDate = document.querySelector('.lista-date');
const hiddenUl = document.querySelector('.hidden');

function adaugaInLista() {
	const newLi = `
  <li>
    <span>${nume.value}</span><span>${telefon.value}</span><button>edit</button
    ><button>delete</button>
  </li>
  `;

	hiddenUl.classList.remove('hidden');

	listaDate.insertAdjacentHTML('beforeend', newLi);

	nume.value = '';
	telefon.value = '';
}
