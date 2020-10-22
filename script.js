function chess() {
	let main = document.querySelector('main');
	let cell;
	let counter = true;
		for(let i = 1; i <= 8; i++) {
			for(let j = 0; j < 8; j++) {
				if (j == 0) {
					counter = !counter;
				}

				cell = document.createElement('div');

				if(counter) {
					cell.className = 'cell black';
					} else {
						cell.className = 'cell'
					}
				main.appendChild(cell);
				counter = !counter;
			}
		}
	}

chess();












