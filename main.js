const name = document.querySelector('.name');
const phone = document.querySelector('.phone');
const btn = document.querySelector('.btn');
const tableHead = document.querySelector('.table-head');
const tableBody = document.querySelector('.table-body');

var editIdx;

const contactsList = [];

function draw() {
	let str = '';

	for (let i = 0; i < contactsList.length; i++) {
		str += `
    <li>
      <span>${contactsList[i].name}</span><span>${contactsList[i].phone}</span><button onclick="edit(${i})">edit</button><button onclick="del(${i})">delete</button>
    </li>
    `;
	}

	if (contactsList.length == 0) {
		tableHead.classList.add('hidden');
	} else {
		tableHead.classList.remove('hidden');
	}

	tableBody.innerHTML = str;

	btn.innerHTML = 'Add';
}

function del(idx) {
	if (confirm(`Do you want to delete contact ${contactsList[idx].name}?`)) {
		contactsList.splice(idx, 1);

		draw();
	}
}

function add(event) {
	event.preventDefault();

	const newContact = {
		name: name.value,
		phone: phone.value
	};

	if (editIdx === undefined) {
		contactsList.push(newContact);
	}

	contactsList[editIdx] = newContact;

	name.value = '';
	phone.value = '';

	draw();
}

function edit(idx) {
	btn.innerHTML = 'Save';

	name.value = contactsList[idx].name;

	phone.value = contactsList[idx].phone;

	window.editIdx = idx;
}
