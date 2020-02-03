let list = [
	{
		nume: 'ion',
		telefon: '123'
	}
];

var indexEdit;

function draw() {
	var str = '';

	for (var i = 0; i < list.length; i++) {
		str += `
    <li>
      <span>${list[i].nume}</span><span>${list[i].telefon}</span><button onclick="edit(${i})">edit</button><button onclick="del(${i})">delete</button>
    </li>
    `;
	}

	document.querySelector('.lista-date').innerHTML = str;

	document.querySelector('.btn').innerHTML = 'adauga';
}

function del(idx) {
	if (confirm(`Esti sigur ca vrei sa stergi ${list[idx].nume} ?`)) {
		list.splice(idx, 1);

		draw();
	}
}

function add(event) {
	event.preventDefault();

	var newContact = {
		nume: document.querySelector('.nume').value,
		telefon: document.querySelector('.telefon').value
	};

	if (indexEdit === undefined) {
		list.push(newContact);
	} else {
		list[indexEdit] = newContact;
	}

	document.querySelector('.nume').value = '';
	document.querySelector('.telefon').value = '';

	draw();
}

function edit(idx) {
	document.querySelector('.btn').innerHTML = 'salveaza';

	document.querySelector('.nume').value = list[idx].nume;

	document.querySelector('.telefon').value = list[idx].telefon;

	window.indexEdit = idx;
}
