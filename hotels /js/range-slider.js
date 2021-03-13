const rangeSlider = document.getElementById("range_slider");

if (rangeSlider) {
  noUiSlider.create(rangeSlider, {
    start: [0, 5000],
    connect: true,
    step: 100,
    range: {
      min: [0],
      max: [5000],
    },
  });

  const input_1 = document.getElementById("inp__1");
  const input_2 = document.getElementById("inp__2");
  const inputs = [input_1, input_2];

  rangeSlider.noUiSlider.on("update", function (values, handle) {
    try {
      inputs[handle].value = Math.floor(values[handle]);
    } catch {
      console.log("NaN");
    }
  });

  const setNumSlider = function (x, value) {
    let arr = [null, null];
    arr[x] = value;
    rangeSlider.noUiSlider.set(arr);
  };
  inputs.forEach((item, index) => {
    item.addEventListener("change", (e) => {
      setNumSlider(index, e.currentTarget.value);
    });
  });
}
