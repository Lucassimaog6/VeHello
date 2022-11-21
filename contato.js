let inputTelefone = document.getElementById("telefone");

	function MascaraTelefone() {
		let tel = inputTelefone.value;

			if (tel[0] !== "(" && tel[0] !== undefined) {
				tel= "(" + rtelslice(0);
			}

			if (tel[3] !== ")" && tel[3] !== undefined) {
				tel = rtelslice(0, 3) + ") " + rtelslice(3);
			}

			if (tel[9] !== "-" && tel[9] !== undefined) {
				tel= resultado.slice(0, 9) + "-" + tel.slice(9);
			}

		inputTelefone.value = tel;
}