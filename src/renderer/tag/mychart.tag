mychart
  p mychart
  canvas(ref="myChart" id="myChart" width="400" height="400")

  script.
    import Chart from "chart.js";
    // Chart = require("chart.js").Chart;

    this.on("mount", () => {
      console.log("on");

      let ctx = this.refs.myChart;  // .getContext("2d");
      ctx.width = "400";
      ctx.height = "400";
      console.log(ctx);

      let myChart = new Chart(ctx, {
        type: "line",
        data:{
          labels: ["M", "T", "W", "T", "F", "S", "S"],
          datasets: [
            {
              label: 'apples',
              data: [12, 19, 3, 17, 6, 3, 7],
              backgroundColor: "rgba(153,255,51,0.4)"
            }, {
              label: 'oranges',
              data: [2, 29, 5, 5, 2, 3, 10],
              backgroundColor: "rgba(255,153,0,0.4)"
            }
          ]
        }
      });
      riot.update();
    });
