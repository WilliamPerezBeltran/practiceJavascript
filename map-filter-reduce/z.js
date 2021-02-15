import React from "react";
import {
  CRow,
  CCardBody,
  CButton,
  CCardHeader,
  CCard,
  CCol,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CDataTable,
  CBadge,
  CFormGroup,
  CLabel,
} from "@coreui/react";
import * as FetchTag from "../../../service/FetchTag";
import { connect } from "react-redux";
import UploadCsv from "../../../reusable/UploadCsv";
import * as FetchInventory from "../../../service/FetchInventory";
import * as ValidateExistingTags from "./ValidateExistingTags";
import { CSVLink } from "react-csv";

import * as FetchInputItem from "../../../service/FetchInputItem";
import * as getInfoOfTagsConvertItToInputItem from "./getInfoOfTagsConvertItToInputItem";

import { showProduct, editProduct } from "../../../ActionCreator";
import { Link } from "react-router-dom";
import { modal_visibility } from "../../../ActionCreator";
import Modal from "../../../reusable/Modal";
import * as FetchOutputItem from "../../../service/FetchOutputItem";
const fields = [
  { label: "id", key: "id" },
  { label: "code id", key: "code_id" },
  { label: "Código", key: "codeName" },
  { label: "Entradas", key: "input" },
  { label: "Salidas", key: "output" },
  { label: "Balance", key: "balance" },
];

class IndexInventory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      csvFile: null,
      entriesInventory: null,
      inventoryAllData: null,
      tags: null,
      dataToCsv: null,
      // loadItemsInventory:null,
      inputItems: null,
      outPutItems: null,
    };
  }

  componentDidMount = async () => {
    this.fetchAllTags();
    this.fetchAllInventory();
    this.fetchAllInputItems();
  };

  fetchAllOutputItems = async () => {
    let data = await FetchOutputItem.allOutputItems();

    if (data) {
      this.setState({ outPutItems: data });
    }
  };

  fetchAllInputItems = async () => {
    let data = await FetchInputItem.allInputItems();

    if (data) {
      this.setState({ inputItems: data });
    }
  };

  fetchAllInventory = async () => {
    let data = await FetchInventory.selectAll();
    if (data) {
      this.setState({ inventoryAllData: data });
    } else {
      console.log("error algo paso en esta mierda ");
    }
  };

  fetchAllTags = async () => {
    let data = await FetchTag.allTags();
    console.log("all allTags-----");
    console.log(data);
    if (data) {
      this.setState({ tags: data });
    }
  };

  borrarTodo = async () => {
    let data = await FetchInventory.borrarTodo();
    console.log("se borro todo ");
    console.log(data);
  };

  dateTimeNow = () => {
    return new Date().toLocaleString().replace(",", "").replace(/:.. /, " ");
  };
  // calculateInventory = async () => {
  //   console.log("===========calculateInventory===========");

  //   try {
  //     let input = await FetchInputItem.allInputItems();
  //     let output = await FetchOutputItem.allOutputItems();
  //     console.log("input");
  //     console.log(input);
  //     console.log("output");
  //     console.log(output);

  //     console.log('---------------sum-inputs---------------')

  //     let unicodeInput = input
  //       .map((item) => item.code_id)
  //       .filter((currentValue, index, array) => array.indexOf(currentValue) === index);

  //     let sumDataInput = unicodeInput.map((code_id) => {
  //       let count = 0;
  //       for (var i = 0; i < input.length; i++) {
  //         // si el array es vacio no entra
  //         // console.log('-----!!input[i].length------')
  //         // console.log(!input[i].length)
  //         // if (!input[i].length) {
  //           if (input[i].code_id === code_id) {
  //             count += input[i].quantity;
  //           }
  //         // }
  //       }

  //       return {
  //         code_id: code_id,
  //         quantityInput: count,
  //       };
  //     });
  //     console.log('sumDataInput')
  //     console.log(sumDataInput)
  //     console.log('---------------end-sum-inputs---------------')

  //     console.log('---------------sum-outputs---------------')
  //     let outputInput = output
  //       .map((item) => item.code_id)
  //       .filter((currentValue, index, array) => array.indexOf(currentValue) === index);

  //     let sumDataOutput = outputInput.map((code_id) => {
  //       let count = 0;
  //       for (var i = 0; i < output.length; i++) {
  //         // si el array es vacio no entra
  //         // if (!!output[i].length) { //esto no estoy seguto que toca hacerlo revisarlo
  //           if (output[i].code_id === code_id) {
  //             count += output[i].quantity;
  //           }
  //         // }
  //       }

  //       return {
  //         code_id: code_id,
  //         quantityOutput: count,
  //       };
  //     });
  //     console.log('sumDataOutput')
  //     console.log(sumDataOutput)
  //     console.log('---------------end-sum-outputs---------------')
  //         let map = new Map
  //         let mergeSum = sumDataInput.concat(sumDataOutput).reduce(function (r, o) {
  //             var temp;
  //             if (map.has(o.code_id)) {
  //                 Object.assign(map.get(o.code_id), o);
  //             } else {
  //                 temp = Object.assign({}, o);
  //                 map.set(temp.code_id, temp);
  //                 r.push(temp);
  //             }
  //             return r;
  //         }, []);

  //         console.log(mergeSum);
  //     let result = null
  //     // let mergeSum = null

  //     if (sumDataInput.length > 0 && sumDataOutput.length > 0 ) {
  //       // code...

  //         result = mergeSum.map((item)=>{
  //           return {

  //             input :item.quantityInput,
  //             output :item.quantityOutput,
  //             balance :item.quantityInput-item.quantityOutput,
  //             code_id :  item.code_id,

  //           }

  //         })

  //     } else {
  //       result = mergeSum.map((item)=>{
  //           return {

  //             input :item.quantityInput,
  //             output :0,
  //             balance :item.quantityInput,
  //             code_id :  item.code_id,

  //           }

  //         })
  //     }

  //     let deleteAll = await FetchInventory.deleteAllInventory();

  //       if (deleteAll) {
  //         let response = await FetchInventory.createItemsInventory(result);
  //         if (response) {
  //           this.fetchAllInventory();
  //         } else {
  //           console.log("error algo paso en esta mierda FetchInventory");
  //         }
  //       }

  //   } catch (error) {
  //     throw error;
  //   }

  //   console.log("===========end-calculateInventory===========");
  // };

  saveInventory = async () => {
    let { itemsToProcess, notInDB } = await ValidateExistingTags.validateTags(
      this.props.dataUpload,
      this.state.tags
    );
    console.log("-------this.props.dataUpload--------");
    console.log(this.props.dataUpload);
    console.log("------this.state.tags------");
    console.log(this.state.tags);
    if (notInDB.length > 0) {
      console.log("notInDB");
      console.log(notInDB);

      let csvData = notInDB.map(function (item) {
        return [item.identifier];
      });
      csvData.splice(0, 0, ["tags que no estan en la base de datos"]);
      this.setState({
        dataToCsv: csvData,
      });
    }
    console.log("----itemsToProcess-----");
    console.log(itemsToProcess);

    if (this.state.inputItems.length === 0) {
      if (itemsToProcess.length > 0) {
        let convertData = await getInfoOfTagsConvertItToInputItem.getAndConvertData(
          itemsToProcess
        );
        console.log("convertData");
        console.log(convertData);

        let sumData = await getInfoOfTagsConvertItToInputItem.sumData(
          convertData
        );
        console.log("sumData");
        console.log(sumData);

        let input = await getInfoOfTagsConvertItToInputItem.convertToInputfirstTime(
          sumData
        );
        console.log("input");
        console.log(input);

        let inputIntemsCreated = await FetchInputItem.createInputItems(input);
        if (inputIntemsCreated) {
          this.calculateInventory();
        }
      }
    } else {
      console.log(
        "-------------------------------------else------------------------------------"
      );
      console.log(
        "-------------------------------------else------------------------------------"
      );
      console.log(
        "-------------------------------------else------------------------------------"
      );
      console.log(
        "-------------------------------------else------------------------------------"
      );
      console.log(
        "-------------------------------------else------------------------------------"
      );
      console.log(
        "-------------------------------------else------------------------------------"
      );
      console.log(
        "-------------------------------------else------------------------------------"
      );
      console.log(
        "-------------------------------------else------------------------------------"
      );
      console.log(
        "-------------------------------------else------------------------------------"
      );
      console.log(
        "-------------------------------------else------------------------------------"
      );
      console.log(
        "-------------------------------------else------------------------------------"
      );
      console.log("this.state.inputItems.length >>>>>> a 0 ");

      let convertData = await getInfoOfTagsConvertItToInputItem.getAndConvertData(
        itemsToProcess
      );
      console.log("convertData");
      console.log(convertData);

      let currentDataConverted = await getInfoOfTagsConvertItToInputItem.sumData(
        convertData
      );
      console.log("currentDataConverted");
      console.log(currentDataConverted);

      let lastInput = await FetchInputItem.lastInputItem();

      console.log("----lastInput----");
      console.log(lastInput);
      console.log(lastInput[0].dateTime);

      if (lastInput.length != 0) {
        console.log("---------------compare items ---------------");
        console.log("---------------compare items ---------------");
        console.log("---------------compare items ---------------");
        console.log("---------------compare items ---------------");
        console.log("---------------compare items ---------------");
        console.log("---------------compare items ---------------");
        console.log("---------------compare items ---------------");
        console.log("---------------compare items ---------------");
        console.log("---------------compare items ---------------");
        let beforeInputs = await FetchInputItem.lastInputItemDate(
          lastInput[0].dateTime
        );

        beforeInputs = beforeInputs.map((item) => {
          return {
            quantityBefore: item.quantity,
            code_id: item.code_id,
            tagsBefore: item.tags,
          };
        });

        let found = null;
        let arrayOfInputs = [];
        let arrayOfOutputs = [];

        for (var i = 0; i < beforeInputs.length; i++) {
          found = false;

          for (var j = 0; j < currentDataConverted.length; j++) {
            if (beforeInputs[i].code_id === currentDataConverted[j].code_id) {
              let codeId = beforeInputs[i].code_id;
              found = true;
              let before = beforeInputs[i].tagsBefore.split(",");
              let current = currentDataConverted[j].tags.split(",");

              let intersectionAB = before.filter((x) => current.includes(x));
              // differenceAB
              let outputArray = before.filter((x) => !current.includes(x)); //salidas
              // differenceBA
              let inputArray = current.filter((x) => !before.includes(x)); //entradas

              let inputObject = {
                quantity:
                  inputArray.length === 1 && inputArray[0] === ""
                    ? 0
                    : inputArray.length,
                code_id: codeId,
                dateTime: "la feccha ",
                movementType: this.dateTimeNow(),
                tags: inputArray.concat(intersectionAB).toString(),
              };

              let outputObject = {
                quantity: outputArray.length,
                code_id: codeId,
                dateTime: this.dateTimeNow(),
                movementType: "salida",
              };
              arrayOfInputs.push(inputObject);
              arrayOfOutputs.push(outputObject);
            }
          }

          if (found === false) {
            let outputObject = {
              quantity: beforeInputs[i].quantityBefore,
              code_id: beforeInputs[i].code_id,
              dateTime: this.dateTimeNow(),
              movementType: "salida",
            };
            arrayOfOutputs.push(outputObject);
          }
        }

        let outputstoDb = arrayOfOutputs.filter((item) => item.quantity > 0);
        let inputsToDb = arrayOfOutputs;
        console.log("----outputstoDb----");
        console.log(outputstoDb);

        console.log("----inputToDb----");
        console.log(inputsToDb);

        if (inputsToDb.length > 0 && outputstoDb.length > 0) {
          let inputIntemsCreated = await FetchInputItem.createInputItems(
            inputsToDb
          );

          let outputIntemsCreated = await FetchOutputItem.createOutputItems(
            inputsToDb
          );
          if (inputIntemsCreated && outputIntemsCreated) {
            this.calculateInventory();
          }
        } else if (inputsToDb.length > 0) {
          let inputIntemsCreated = await FetchInputItem.createInputItems(
            inputsToDb
          );
          if (inputIntemsCreated) {
            this.calculateInventory();
          }
        } else if (inputsToDb.length > 0) {
          let outputIntemsCreated = await FetchOutputItem.createOutputItems(
            inputsToDb
          );
          if (outputIntemsCreated) {
            this.calculateInventory();
          }
        }
      } else {
        console.log("aqui cuando entra si lastInput.length es igual a 0");
        console.log("quiere decir que todas son entradas ");
      }

      //   let inputIntemsCreated = await FetchInputItem.createInputItems([{
      //   quantity: 1,
      //   code_id: 3,
      //   dateTime: new Date()
      //     .toLocaleString()
      //     .replace(",", "")
      //     .replace(/:.. /, " "),
      //   movementType: "entrada",
      //   tags: "fsdfssf",
      // }]);

      // let convertData = await getInfoOfTagsConvertItToInputItem.getAndConvertData(
      //   itemsToProcess
      // );
      // console.log("convertData");
      // console.log(convertData);

      // let sumData = await getInfoOfTagsConvertItToInputItem.sumData(
      //   convertData
      // );
      // console.log("sumData");
      // console.log(sumData);
    }
  };

  render() {
    let rowExport = null;
    if (this.state.dataToCsv != null) {
      rowExport = (
        <CFormGroup row>
          <CLabel col md="3" htmlFor="file-input">
            Exportar
          </CLabel>
          <CCol xs="12" md="9">
            <CSVLink
              filename={`tags.csv`}
              data={this.state.dataToCsv}
              target="_blank"

              // headers={fields}
            >
              <CButton type="submit" color="primary">
                Exportar datos
              </CButton>
            </CSVLink>
          </CCol>
        </CFormGroup>
      );
    }

    return (
      <>
        <CRow>
          <CCol>
            <CCard>
              <CCardHeader>
                <h3>Inventario</h3>
              </CCardHeader>
              <CCardBody>
                <CRow>
                  <CCol xs="12" sm="12">
                    <CCardBody>
                      <UploadCsv moduleFrom="inventory" />
                    </CCardBody>
                  </CCol>
                </CRow>

                <br />
                {rowExport}
                <Modal />

                <CButton type="submit" color="danger" onClick={this.borrarTodo}>
                  BORRAR TODO INVENTARIO INPUT OUTPUT
                </CButton>
                <br />
                <br />
                <br />
                <br />
                <br />

                <div className="form-actions">
                  <CButton
                    type="submit"
                    color="primary"
                    onClick={this.saveInventory}
                  >
                    Procesar Inventario
                  </CButton>
                </div>
                <br />
                <CRow>
                  <CCol>
                    <CCard>
                      <CCardHeader>Productos</CCardHeader>
                      <CCardBody>
                        <CDataTable
                          items={this.state.inventoryAllData}
                          fields={fields}
                          hover
                          striped
                          // bordered
                          itemsPerPage={10}
                          pagination
                          // scopedSlots={}
                        />
                      </CCardBody>
                    </CCard>
                  </CCol>
                </CRow>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dataUpload: state.reducerInventory.dataUpload,
  };
};

const mapDispatchToProps = (dispatch) => {
  return { dispatch };
};

export default connect(mapStateToProps, mapDispatchToProps)(IndexInventory);
