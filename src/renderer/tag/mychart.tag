mychart
  p mychart
  canvas(ref="myChart" id="myChart" width="400" height="400")

  style(scoped).
    :scope {
      display: inline-block;
      width: 100%;
    }

  script.
    this.on("mount", () => {
      drawChart();
    });

    this.on("loaded", (c) => {
      this.on("unmount", () => {
        c.destroy();
      });
    });


    function drawChart() {
      const ctx = this.root.document.querySelector("canvas").getContext("2d");

      const myChart = new Chart(ctx, {
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
    }
