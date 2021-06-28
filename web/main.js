import init, { han2zen } from "../pkg/han2zen.js";
init().then(() => {
	document.getElementById("convert").addEventListener("click", () => {
		let input = document.getElementById("input");
		performance.mark("start");
		let result = han2zen(input.value);
		performance.mark("end");
		document.getElementById("output").innerText = result;
		performance.measure(
			"measure",
			"start",
			"end"
		);
		const performanceResult = performance.getEntriesByName("measure");
		alert(performanceResult[0].duration + "ms");
	});
});