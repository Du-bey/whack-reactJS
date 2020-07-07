import * as React from "react";
import { matchPath } from "react-router";

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = { canvas: null, ctx: null };
  }
  componentDidMount() {
    // const canvasRef = React.useRef<HTMLCanvasElement>(null);
    // const [context, setContext] = React.useState<CanvasRenderingContext2D | null>(null);
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext("2d");
    ctx.strokeRect(5, 5, 100, 100);
    for (var k = 0; k < 3; k++) {
      var x = 400;
      var y = 290 * k + 60;
      var size = 100;
      var start_x = x;
      var start_y = y;
      for (var j = 0; j < 2; j++) {
        for (var i = 0; i < 4; i++) {
          var final_x = start_x + size;
          var final_y = start_y + size;
          ctx.strokeRect(start_x, start_y, size, size);
          start_x = start_x + size;
          console.log("new coordinates");
          console.log(start_y);
          console.log(start_x);
        }
        start_x = x;
        start_y = start_y + size;
      }
    }
    var x = 300;
    var y = 30;
    var n = 4;
    var length = 580;
    var gap = 280;
    for (var i = 0; i < n; i++) {
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + length, y);
      y = y + gap;
      ctx.strokeStyle = "#FF0000";
      ctx.stroke();
    }
    ctx.beginPath();
    ctx.moveTo(300, 30);
    ctx.lineTo(300, 30 + 280 * 3);
    ctx.strokeStyle = "#FF0000";
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(300 + 580, 30);
    ctx.lineTo(300 + 580, 30 + 280 * 3);
    ctx.strokeStyle = "#FF0000";
    ctx.stroke();
    ctx.strokeStyle = "#000000";
    //next set of paths
    for (var k = 0; k < 3; k++) {
      var x = 960;
      var y = 290 * k + 60;
      var size = 100;
      var start_x = x;
      var start_y = y;
      for (var j = 0; j < 2; j++) {
        for (var i = 0; i < 4; i++) {
          var final_x = start_x + size;
          var final_y = start_y + size;
          ctx.strokeRect(start_x, start_y, size, size);
          start_x = start_x + size;
          console.log("new coordinates");
          console.log(start_y);
          console.log(start_x);
        }
        start_x = x;
        start_y = start_y + size;
      }
    }
    var x = 880;
    var y = 30;
    var n = 4;
    var length = 580;
    var gap = 280;
    for (var i = 0; i < n; i++) {
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + length, y);
      y = y + gap;
      ctx.strokeStyle = "#FF0000";
      ctx.stroke();
    }
    ctx.beginPath();
    ctx.moveTo(880, 30);
    ctx.lineTo(880, 30 + 280 * 3);
    ctx.strokeStyle = "#FF0000";
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(888 + 580, 30);
    ctx.lineTo(880 + 580, 30 + 280 * 3);
    ctx.strokeStyle = "#FF0000";
    ctx.stroke();
    x = 0;
    y = 170;
    size = 100;
    for (var i = 0; i < 3; i++) {
      ctx.moveTo(x, y);
      ctx.strokeRect(x, y, size + 20, size);
      y = y + 200;
    }
    ctx.strokeStyle = "#000000";
    ctx.strokeRect(5, 750, 100, 100);
    //const img = this.refs.image
  }
  // componentDidUpdate(){
  //     ctx.fillRect(5, 5, 100, 100);
  // };
  render() {
    return (
      <div>
        <canvas
          ref="canvas"
          width={window.innerWidth}
          height={window.innerHeight + 150}
          style={{
            // border: '2px solid #000',
            // marginTop: 10,
            // marginBottom: 20,
            maxWidth: 1000,
            // maxHeight: 1000,
          }}
          onClick={(e) => {
            alert(e.clientX + "," + e.clientY);
          }}
        />
        {/* <img ref="image" src={matchPath.jpg} className="hidden" /> */}
      </div>
    );
  }
}

export default Map;