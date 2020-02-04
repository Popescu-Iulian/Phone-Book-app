const contactsList = [];

var editIdx;

function draw() {
	const tableHead = document.querySelector('.table-head');
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

	document.querySelector('.table-body').innerHTML = str;

	document.querySelector('.btn').innerHTML = 'Add';
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
		name: document.querySelector('.name').value,
		phone: document.querySelector('.phone').value
	};

	if (editIdx === undefined) {
		contactsList.push(newContact);
	}

	contactsList[editIdx] = newContact;

	document.querySelector('.name').value = '';
	document.querySelector('.phone').value = '';

	draw();
}

function edit(idx) {
	document.querySelector('.btn').innerHTML = 'Save';

	document.querySelector('.name').value = contactsList[idx].name;

	document.querySelector('.phone').value = contactsList[idx].phone;

	window.editIdx = idx;
}
