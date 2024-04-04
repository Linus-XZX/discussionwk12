// Challenge 1
const challenge1 = (target) => {
	document.querySelector('#emailDiv').style.display = target.checked ? 'block' : 'none';
}

// Challenge 2
if (document.querySelector('#sameAddress')) {
	document.querySelector('#sameAddress').addEventListener('change', () => {
		if (document.querySelector('#sameAddress').checked) {
			document.querySelector('#home').disabled = true;
			document.querySelector('#home').value = document.querySelector('#bill').value;
		}else{
			document.querySelector('#home').disabled = false;
			document.querySelector('#home').value = '';
		}
	})
}

// Challenge 3
const challenge3 = () => {} // Odd workaround for onSubmit in HTML.
if (document.querySelector('#ch3form')) {
	document.querySelector('#ch3form').addEventListener('submit', (e) => {
		e.preventDefault();
		if (document.querySelector('input[name="gradDate"]:checked') === null || document.querySelector('input[name="standing"]:checked') === null) {
			alert('Please select both standing and year of graduation');
		}else{
			e.submit();
		}
	})
}