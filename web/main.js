import * as wasm from "@toriyama/han2zen";
import * as js from "./lib";

let input = document.getElementById("input");
let output = document.getElementById("output");
document.getElementById("convert").addEventListener("click", () => {
	let result;
	let performance_wasm = evaluatePerformance(() => {
		result = wasm.han2zen(input.value);
	});
	let performance_js = evaluatePerformance(() => {
		js.han2zen(input.value);
	})
	output.innerText = result;
	alert("WASM:" + performance_wasm[0].duration + "ms" + "\n" + "JS: " + performance_js[0].duration + "ms");
});

const evaluatePerformance = (func) => {
	performance.mark("start");
	func();
	performance.mark("end");
	performance.measure(
		"performance",
		"start",
		"end"
	);
	return performance.getEntriesByName("performance");
}