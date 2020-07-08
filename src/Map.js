import * as React from "react";
import { matchPath } from "react-router";
import { db } from "./config";
import firestore from "firebase";
import "./Graph.js";
const list = [];
const dict1 = {};
const list2 = [];
var cnt = 49;
var mouseX = 0;
var mouseY = 0;
var tempX = 0;
var tempY = 0;
class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      canvas: null,
      ctx: null,
      list: [],
      dict: {},
      cnt: 0,
      todos: {},
      db: db,
    };
  }
  componentDidMount() {
    // console.log(graph);
    // console.log("hello");
    // db.ref('/users').on('value', querySnapShot => {
    //     let data = querySnapShot.val() ? querySnapShot.val() : {};
    //     let todoItems = data;
    //     //console.log(data);
    // });
    db.ref("/users").on("value", (querySnapShot) => {
      let data = querySnapShot.val() ? querySnapShot.val() : {};
      let todoItems = data;
      console.log(data.name);
      for (let key in data) {
        if (data.hasOwnProperty(key)) {
          let value = data[key];
          console.log(key, value.name);
        }
      }
    });
    //console.log(db.firestore().collection('users'))
    // db.ref("/users").on('value',function(querySnapshot) {
    //     querySnapshot.forEach(function(doc) {
    //         // doc.data() is never undefined for query doc snapshots
    //         console.log(doc.id, " => ", doc.data());
    //     });
    // });
    //console.log(this.todos)
    // console.log(this.refs)
    var canvas = this.refs.canvas;
    var ctx = canvas.getContext("2d");
    ctx.strokeRect(5, 5, 100, 100);
    for (var k = 0; k < 3; k++) {
      var x = 250;
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
        }
        start_x = x;
        start_y = start_y + size;
      }
    }
    var x = 150;
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
    ctx.moveTo(150, 30);
    ctx.lineTo(150, 30 + 280 * 3);
    ctx.strokeStyle = "#FF0000";
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(150 + 580, 30);
    ctx.lineTo(150 + 580, 30 + 280 * 3);
    ctx.strokeStyle = "#FF0000";
    ctx.stroke();
    ctx.strokeStyle = "#000000";
    //next set of paths
    for (var k = 0; k < 3; k++) {
      var x = 810;
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
        }
        start_x = x;
        start_y = start_y + size;
      }
    }
    var x = 730;
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
    ctx.moveTo(730, 30);
    ctx.lineTo(730, 30 + 280 * 3);
    ctx.strokeStyle = "#FF0000";
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(730 + 580, 30);
    ctx.lineTo(730 + 580, 30 + 280 * 3);
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

    this.setState({
      ctx: ctx,
    });
    var graph = {};
    graph[1] = [297, 322];
    graph[2] = [398, 322];
    graph[3] = [497, 321];
    graph[4] = [596, 322];
    graph[5] = [595, 42];
    graph[6] = [496, 41];
    graph[7] = [398, 41];
    graph[8] = [298, 41];
    graph[9] = [852, 321];
    graph[10] = [955, 322];
    graph[11] = [1058, 323];
    graph[12] = [1164, 323];
    graph[13] = [1152, 42];
    graph[14] = [1058, 41];
    graph[15] = [960, 42];
    graph[16] = [857, 42];
    graph[17] = [295, 602];
    graph[18] = [394, 601];
    graph[19] = [496, 601];
    graph[20] = [595, 603];
    graph[21] = [596, 322];
    graph[22] = [497, 321];
    graph[23] = [398, 322];
    graph[24] = [297, 323];
    graph[25] = [859, 601];
    graph[26] = [961, 601];
    graph[27] = [1061, 601];
    graph[28] = [1157, 602];
    graph[29] = [1164, 323];
    graph[30] = [1058, 323];
    graph[31] = [955, 322];
    graph[32] = [852, 321];
    graph[33] = [291, 882];
    graph[34] = [394, 881];
    graph[35] = [500, 883];
    graph[36] = [606, 880];
    graph[37] = [595, 603];
    graph[38] = [496, 601];
    graph[39] = [394, 601];
    graph[40] = [295, 602];
    graph[41] = [859, 882];
    graph[42] = [961, 883];
    graph[43] = [1057, 882];
    graph[44] = [1161, 881];
    graph[45] = [1157, 602];
    graph[46] = [1061, 601];
    graph[47] = [961, 601];
    graph[48] = [859, 601];
    graph[49] = [150, 881];
    graph[50] = [730, 881];
    graph[51] = [1310, 880];
    graph[52] = [1312, 602];
    graph[53] = [731, 601];
    graph[54] = [152, 602];
    graph[55] = [152, 321];
    graph[56] = [731, 321];
    graph[57] = [1312, 322];
    graph[58] = [1310, 41];
    graph[59] = [731, 42];
    graph[60] = [151, 42];
    mouseX = 398;
    mouseY = 322;
    for (let key in graph) {
      mouseX = graph[key][0];
      mouseY = graph[key][1];
      this.update(ctx, mouseX, mouseY);
    }
  }
  deleteArc() {
    this.state.ctx.beginPath();
    this.state.ctx.arc(tempX, tempY, 20, 0, 2 * Math.PI);
    this.state.ctx.stroke();
  }
  update(ctx, x, y) {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, 2 * Math.PI);
    ctx.stroke();
  }
  addToUsers() {
    db.ref("/users").push({
      name: "Dhruv",
    });
  }
  addToShelfs(x, y) {
    list2.push([x, y]);
    db.ref("/Shelfs").push({
      Shelf_num: cnt,
      connected_coordinates: list2,
      coordinates: [x, y],
    });
    // else{
    //     db.ref('/coordinates').push({
    //          connected_coordinates : list2
    //     })
    // }
    cnt += 1;
  }
  removeFromShelfs() {
    db.ref("/Shelfs").remove();
  }
  addToList(x, y) {
    list.push([x, y]);
    this.setState({
      list: list,
    });
    console.log(list);
  }
  addToDict(x, x1, y1) {
    dict1["Node" + x] = [x1, y1];
    this.setState({
      dict: dict1,
    });
    console.log(dict1);
    // const cnt1 = x + 1
    // this.setState({
    //     cnt : cnt1
    // })
    cnt += 1;
  }
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
