import React ,{useState,useEffect} from "react";
import JsonData from '../data/data.json'
import $ from 'jquery';

import axios from "axios";

function TableData() {

  const [data,setData]=useState([]);
  const getData=()=>{

    axios.get(`https://rawcdn.githack.com/srikanthreddy-lectures/jsondata/811621a589e2d9b2f5d71029a591789596b16a97/db.json`)
    .then(response => {
      const posts = response.data;
      setData (posts);
    })


    /* fetch('https://rawcdn.githack.com/srikanthreddy-lectures/jsondata/811621a589e2d9b2f5d71029a591789596b16a97/db.json',
    {
      headers : 
      { 
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
      }
    }).then(function(response)
      {
        console.log(response)
        //return response.json();
      }).then(function(myJson) 
        {
          //console.log(myJson);
          //setData(myJson)
      }); */
  }

  useEffect(()=>{
    getData()
  },[])
    return (
      
        <div>
         <div className="card">
              <div className="card-header">
                <span><i className="bi bi-table me-2"></i></span> Data Table
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table
                    id="example"
                    className="table table-striped data-table"
                    style={{width: "100%"}}
                  >
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Office</th>
                        <th>Age</th>
                        <th>Start date</th>
                        <th>Salary</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        data && data.map((d,key) => {
                          return (
                            <tr key={key}>
                              <td>{d.Name}</td>
                              <td>{d.Position}</td>
                              <td>{d.Office}</td>
                              <td>{d.Age}</td>
                              <td>{d.StartDate}</td>
                              <td>{d.Salary}</td>
                            </tr>
                          )
                        })
                      }
                    </tbody>
                   {/*  <tfoot>
                      <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Office</th>
                        <th>Age</th>
                        <th>Start date</th>
                        <th>Salary</th>
                      </tr>
                    </tfoot> */}
                  </table>
                {/*   {
                      $(".data-table").each(function (_, table) {
                        $(table).DataTable();
                      })
                  } */}
                </div>
              </div>
            </div>
        </div>
    )
}

export default TableData;