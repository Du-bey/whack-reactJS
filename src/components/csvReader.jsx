import React, { Component } from "react";
import { Table } from "@material-ui/core";
import Papa from "papaparse";
import ReactDOM from "react-dom";
import CSVReader from "react-csv-reader";

// const CsvReader = function () {
//   const [rows, setRows] = React.useState([]);
//   React.useEffect(() => {
//     async function getData() {
//       const response = await fetch("../../prods-db.csv");
//       const reader = response.body.getReader();
//       const result = await reader.read(); // raw array
//       const decoder = new TextDecoder("utf-8");
//       const csv = decoder.decode(result.value); // the csv text
//       const results = Papa.parse(csv, { header: true }); // object with { data, errors, meta }
//       const rows = results.data; // array of objects
//       setRows(rows);
//     }
//     getData();
//   }, []); // [] means just do this once, after initial render
//   return (
//     <div className="app">
//       <Table cols={tripColumns} rows={rows} />
//     </div>
//   );
// };

// const handleForce = (data, fileInfo) => console.log(data, fileInfo);

// const papaparseOptions = {
//   header: true,
//   dynamicTyping: true,
//   skipEmptyLines: true,
//   transformHeader: (header) => header.toLowerCase(), //.replace(/\W/g, "_"),
// };

// const CsvReader = (
//   <div className="container">
//     {/* <CSVReader
//       cssClass="react-csv-input"
//       label="Select CSV with secret Death Star statistics"
//       onFileLoaded={handleForce}
//       parserOptions={papaparseOptions}
//     /> */}
//     <CSVReader onFileLoaded={(data, fileInfo) => console.log(data, fileInfo)} />
//     <p>and then open the console</p>
//   </div>
// );

class CsvReader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      fileName: "../../prods-db.csv",
    };

    this.getData = this.getData.bind(this);
  }

  componentWillMount() {
    this.getCsvData();
  }

  fetchCsv() {
    return fetch(this.state.fileName).then(function (response) {
      let reader = response.body.getReader();
      let decoder = new TextDecoder("utf-8");

      return reader.read().then(function (result) {
        return decoder.decode(result.value);
      });
    });
  }

  getData(result) {
    this.setState({ data: result.data });
  }

  async getCsvData() {
    let csvData = await this.fetchCsv();

    Papa.parse(csvData, {
      complete: this.getData,
    });
  }
  render() {
    return <div></div>;
  }
}

export default CsvReader;
