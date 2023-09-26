import React from "react";
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
  } from 'mdb-react-ui-kit';
  
const Footers = () => {
    return (
      <MDBFooter color="white" className="font-small bg-black">
        <MDBContainer className="text-center text-md-left">
          <MDBRow>
            <MDBCol >
              <h5 className="title mt-1">Contact us</h5>
              <p>Greater Vancouer Area</p>
            </MDBCol>
            <MDBCol >
              <h5 className="title mt-1">Phone Number</h5>
              <p>778 996 9182</p>
            </MDBCol>
            <MDBCol >
              <h5 className="title mt-1">Email</h5>
              
              <a href="mailto:pariantiles.david@gmail.com">pariantiles.david@gmail.com</a>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBFooter>
    );
  }
  
  export default Footers;