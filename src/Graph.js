import * as React from "react";
import { useState, useContext, Component } from "react";
import { matchPath } from "react-router";
import { db } from "./config";
// import GlobalState from "./contexts/GlobalState";
// const { graph, setthegraph } = useContext(GlobalState);
import {graph} from "./globvar.js" 
class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shelf_list1: {},
      graph1: {},
      nodes1: {},
      shelf_num_from_coord1: {},
    };
  }
  componentDidMount() {
    var shelf_list = {};
    // var graph = {};
    var nodes = {};
    shelf_list[1] = [297, 322];
    shelf_list[2] = [398, 322];
    shelf_list[3] = [497, 321];
    shelf_list[4] = [596, 322];
    shelf_list[5] = [595, 42];
    shelf_list[6] = [496, 41];
    shelf_list[7] = [398, 41];
    shelf_list[8] = [298, 41];
    shelf_list[9] = [852, 321];
    shelf_list[10] = [955, 322];
    shelf_list[11] = [1058, 323];
    shelf_list[12] = [1164, 323];
    shelf_list[13] = [1152, 42];
    shelf_list[14] = [1058, 41];
    shelf_list[15] = [960, 42];
    shelf_list[16] = [857, 42];
    shelf_list[17] = [295, 602];
    shelf_list[18] = [394, 601];
    shelf_list[19] = [496, 601];
    shelf_list[20] = [595, 603];
    shelf_list[21] = [596, 322];
    shelf_list[22] = [497, 321];
    shelf_list[23] = [398, 322];
    shelf_list[24] = [297, 323];
    shelf_list[25] = [859, 601];
    shelf_list[26] = [961, 601];
    shelf_list[27] = [1061, 601];
    shelf_list[28] = [1157, 602];
    shelf_list[29] = [1164, 323];
    shelf_list[30] = [1058, 323];
    shelf_list[31] = [955, 322];
    shelf_list[32] = [852, 321];
    shelf_list[33] = [291, 882];
    shelf_list[34] = [394, 881];
    shelf_list[35] = [500, 883];
    shelf_list[36] = [606, 880];
    shelf_list[37] = [595, 603];
    shelf_list[38] = [496, 601];
    shelf_list[39] = [394, 601];
    shelf_list[40] = [295, 602];
    shelf_list[41] = [859, 882];
    shelf_list[42] = [961, 883];
    shelf_list[43] = [1057, 882];
    shelf_list[44] = [1161, 881];
    shelf_list[45] = [1157, 602];
    shelf_list[46] = [1061, 601];
    shelf_list[47] = [961, 601];
    shelf_list[48] = [859, 601];
    nodes[49] = [859, 601];
    nodes[50] = [730, 881];
    nodes[51] = [1310, 880];
    nodes[52] = [1312, 602];
    nodes[53] = [731, 601];
    nodes[54] = [152, 602];
    nodes[55] = [152, 321];
    nodes[56] = [731, 321];
    nodes[57] = [1312, 322];
    nodes[58] = [1310, 41];
    nodes[59] = [731, 42];
    nodes[60] = [151, 42];
    graph[1] = [297, 323];
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
    this.setState({
      shelf_list1: shelf_list,
    });
    this.setState({
      nodes1: nodes,
    });
    this.setState({
      graph1: graph,
    });
    var shelf_num_from_coord = {};
    for (let key in shelf_list) {
      shelf_num_from_coord[shelf_list[key]] = key;
    }
    this.setState({
      shelf_num_from_coord1: shelf_num_from_coord,
    });
    console.log(shelf_num_from_coord);
    var dist_between_nodes = {};
    for (var i = 1; i <= 60; i++) {
      for (var j = 1; j <= 60; j++) {
        var list3 = [i, j];
        dist_between_nodes[list3] = this.dist_bet_nodes(graph[i], graph[j]);
      }
    }
    // for(var i=1;i<=60;i++){
    //     for(var j=i+1;j<=60;j++){
    //         var list3 = [i,j]
    //         dist_between_nodes[list3] = this.dist_bet_nodes(graph[i],graph[j])
    //     }
    // }
    console.log(dist_between_nodes);
    var final_graph = {};
    final_graph[1] = [2, 23, 24, 55];
    final_graph[2] = [1, 23, 3, 24, 22];
    final_graph[3] = [2, 23, 4, 21, 22];
    final_graph[4] = [3, 22, 21, 56];
    final_graph[5] = [6, 59];
    final_graph[6] = [5, 7];
    final_graph[7] = [6, 8];
    final_graph[8] = [7, 60];
    final_graph[9] = [56, 32, 10, 31];
    final_graph[10] = [9, 32, 11, 30, 31];
    final_graph[11] = [10, 31, 12, 29, 30];
    final_graph[12] = [11, 30, 29, 57];
    final_graph[13] = [14, 58];
    final_graph[14] = [13, 15];
    final_graph[15] = [14, 16];
    final_graph[16] = [59, 15];
    final_graph[17] = [18, 39, 40, 54];
    final_graph[18] = [17, 40, 19, 38, 39];
    final_graph[19] = [18, 39, 20, 37, 38];
    final_graph[20] = [19, 38, 37, 53];
    final_graph[21] = [3, 22, 56, 4];
    final_graph[22] = [2, 23, 4, 21, 3];
    final_graph[23] = [1, 24, 3, 22, 2];
    final_graph[24] = [2, 23, 1, 55];
    final_graph[25] = [26, 47, 48, 53];
    final_graph[26] = [25, 48, 27, 46, 47];
    final_graph[27] = [26, 47, 28, 45, 46];
    final_graph[28] = [27, 46, 45, 52];
    final_graph[29] = [11, 30, 12, 57];
    final_graph[30] = [10, 31, 12, 29, 11];
    final_graph[31] = [9, 32, 11, 30, 10];
    final_graph[32] = [10, 31, 9, 56];
    final_graph[33] = [49, 34];
    final_graph[34] = [33, 35];
    final_graph[35] = [34, 36];
    final_graph[36] = [35, 50];
    final_graph[37] = [19, 38, 20, 53];
    final_graph[38] = [18, 39, 20, 37, 19];
    final_graph[39] = [17, 40, 19, 38, 18];
    final_graph[40] = [17, 40, 19, 38, 18];
    final_graph[41] = [50, 42];
    final_graph[42] = [41, 43];
    final_graph[43] = [42, 44];
    final_graph[44] = [43, 51];
    final_graph[45] = [27, 46, 28, 52];
    final_graph[46] = [26, 47, 28, 45, 27];
    final_graph[47] = [25, 48, 27, 46, 26];
    final_graph[48] = [26, 47, 25, 53];
    final_graph[49] = [33, 54];
    final_graph[50] = [36, 41, 53];
    final_graph[51] = [44, 52];
    final_graph[52] = [51, 57, 28, 45];
    final_graph[53] = [20, 37, 25, 48, 56, 50];
    final_graph[54] = [49, 55, 17, 40];
    final_graph[55] = [54, 60, 1, 24];
    final_graph[56] = [4, 21, 9, 32, 59];
    final_graph[57] = [12, 29, 58, 52];
    final_graph[58] = [13, 57];
    final_graph[59] = [5, 16, 56];
    final_graph[60] = [8, 55];
    console.log(final_graph[1][0]);
    var e = [];
    var duplicates = {};
    duplicates[1] = 24;
    duplicates[24] = 1;
    duplicates[2] = 23;
    duplicates[23] = 2;
    duplicates[3] = 22;
    duplicates[22] = 3;
    duplicates[4] = 21;
    duplicates[21] = 4;
    duplicates[9] = 32;
    duplicates[32] = 9;
    duplicates[10] = 31;
    duplicates[31] = 10;
    duplicates[11] = 30;
    duplicates[30] = 11;
    duplicates[12] = 29;
    duplicates[29] = 12;
    duplicates[17] = 40;
    duplicates[40] = 17;
    duplicates[18] = 39;
    duplicates[39] = 18;
    duplicates[19] = 38;
    duplicates[38] = 19;
    duplicates[20] = 37;
    duplicates[37] = 20;
    duplicates[25] = 48;
    duplicates[48] = 25;
    duplicates[26] = 47;
    duplicates[47] = 26;
    duplicates[27] = 46;
    duplicates[46] = 27;
    duplicates[28] = 45;
    duplicates[45] = 28;

    for (var i = 1; i <= 60; i++) {
      var list1 = [];
      for (var k = 1; k <= 60; k++) {
        var flag = 0;
        for (var j = 0; j < final_graph[i].length; j++) {
          if (final_graph[i][j] == k) {
            flag = 1;
            break;
          }
        }
        if (flag == 1) {
          list1.push(dist_between_nodes[[i, k]]);
        } else {
          list1.push(Infinity);
        }
      }
      e.push(list1);
    }
    console.log(e);
    var shortestPathInfo = this.shortestPath(e, 60, 1);
    var path1to6 = this.constructPath(shortestPathInfo, 51);
    console.log(path1to6);
  }
  dist_bet_nodes(x, y) {
    // return Math.sqrt((((Math.abs(x[0]-y[0])*(Math.abs(x[1]-y[1])) + (Math.abs(x[1]-y[1])*(Math.abs(x[1]-y[1])))))));
    return Math.abs(x[0] - y[0]) + Math.abs(x[1] - y[1]);
  }
  shortestPath(edges, numVertices, startVertex) {
    var done = new Array(numVertices);
    done[startVertex] = true;
    var pathLengths = new Array(numVertices);
    var predecessors = new Array(numVertices);
    for (var i = 0; i < numVertices; i++) {
      pathLengths[i] = edges[startVertex][i];
      if (edges[startVertex][i] != Infinity) {
        predecessors[i] = startVertex;
      }
    }
    pathLengths[startVertex] = 0;
    for (var i = 0; i < numVertices - 1; i++) {
      var closest = -1;
      var closestDistance = Infinity;
      for (var j = 0; j < numVertices; j++) {
        if (!done[j] && pathLengths[j] < closestDistance) {
          closestDistance = pathLengths[j];
          closest = j;
        }
      }
      done[closest] = true;
      for (var j = 0; j < numVertices; j++) {
        if (!done[j]) {
          var possiblyCloserDistance = pathLengths[closest] + edges[closest][j];
          if (possiblyCloserDistance < pathLengths[j]) {
            pathLengths[j] = possiblyCloserDistance;
            predecessors[j] = closest;
          }
        }
      }
    }
    return {
      startVertex: startVertex,
      pathLengths: pathLengths,
      predecessors: predecessors,
    };
  }
  constructPath(shortestPathInfo, endVertex) {
    var path = [];
    while (endVertex != shortestPathInfo.startVertex) {
      path.unshift(endVertex);
      endVertex = shortestPathInfo.predecessors[endVertex];
    }
    return path;
  }
  render() {
    return <div></div>;
  }
}

export default Graph;
