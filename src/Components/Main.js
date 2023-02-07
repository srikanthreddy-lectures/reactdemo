//import BarChart from "./BarChart";
import CardInfo from "./CardInfo";
//import LineChart from "./LineChart";
import TableData from "./TableData";

function Main() {

 
  return (

    <main className="mt-5 pt-3">
      <div className="container-fluid">

        <div className="row">
          <div className="col-md-12">
            <h4>Dashboard</h4>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3 mb-3">
            <CardInfo c="bg-primary" t="text-white" title="Primary Card"/>
          </div>
          <div className="col-md-3 mb-3">
            <CardInfo c="bg-warning" t="text-dark" title="Warning Card"/>
          </div>
          <div className="col-md-3 mb-3">
            <CardInfo c="bg-success" t="text-white" title="Success Card"/>
          </div>
          <div className="col-md-3 mb-3">
            <CardInfo c="bg-danger" t="text-white" title="Danger Card"/>
          </div>
        </div>

       {/*  <div className="row">
          <div className="col-md-6 mb-3">
            <LineChart/>
          </div>
          <div className="col-md-6 mb-3">
            <BarChart/>
          </div>
          
        </div> */}
        <div className="row">
          <div className="col-md-12 mb-3">
            <TableData />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
