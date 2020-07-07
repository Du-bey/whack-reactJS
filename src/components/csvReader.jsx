import React, { Component } from "react";
import ReactDOM from "react-dom";
import CSVReader from "react-csv-reader";

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
      jumanji: [],
      jumanjiName: "",
    };
  }
  render() {
    return (
      <div>
        <CSVReader
          onFileLoaded={(data, fileInfo) =>
            this.setState({
              jumanji: data,
              jumanjiName: fileInfo,
            })
          }
          //     console.log(data, fileInfo)
          //   }
        />
      </div>
    );
  }
}

export default CsvReader;
