const NAME = document.querySelector('.name');
const PHONE = document.querySelector('.phone');
const BTN = document.querySelector('.btn');
const TABLE_HEAD = document.querySelector('.table-head');
const TABLE_BODY = document.querySelector('.table-body');

let editIdx;

const CONTACTS_LIST = [];

function draw() {
	let str = '';

	for (let i = 0; i < CONTACTS_LIST.length; i++) {
		str += `
			<li>
				<span>${CONTACTS_LIST[i].name}</span><span>${CONTACTS_LIST[i].phone}</span><button onclick="editContact(${i})"><i class="fas fa-user-edit"></i></button><button onclick="deleteContact(${i})"><i class="fas fa-user-times"></i></button>
			</li>
    `;
	}

	if (CONTACTS_LIST.length == 0) {
		TABLE_HEAD.classList.add('hidden');
	} else {
		TABLE_HEAD.classList.remove('hidden');
	}

	TABLE_BODY.innerHTML = str;

	BTN.innerHTML = 'Add';

	editIdx = undefined;
}

function deleteContact(idx) {
	if (confirm(`Do you want to delete contact ${CONTACTS_LIST[idx].name}?`)) {
		CONTACTS_LIST.splice(idx, 1);

		draw();
	}
}

function addContact(event) {
	event.preventDefault();

	const NEW_CONTACT = {
		name: NAME.value,
		phone: PHONE.value
	};

	if (NAME.value.length < 3) {
		alert('Name must have at least 3 letters!');
	} else {
		if (editIdx === undefined) {
			CONTACTS_LIST.push(NEW_CONTACT);
		}

		CONTACTS_LIST[editIdx] = NEW_CONTACT;

		NAME.value = '';
		PHONE.value = '';

		draw();
	}
}

function editContact(idx) {
	BTN.innerHTML = 'Save';

	NAME.value = CONTACTS_LIST[idx].name;

	PHONE.value = CONTACTS_LIST[idx].phone;

	editIdx = idx;
}
