import React from "react";
import { useState , useEffect } from "react";
import "./Addlocation.css";
import axios from "axios";

function Addlocation() {
  const [saveBtn, setSaveBtn] = useState("");
  const[Address, setAddress] = useState(false)
  const [loadProduct, setLoadProduct] = useState(true)
 const sendData = async () => {
    try {
      var userAddress = await axios.post(`http://localhost:5001/setAddress`, {
        address: saveBtn,
      });
      setLoadProduct(!loadProduct)
    } catch (error) {
      setLoadProduct(!loadProduct)
      console.log(error);
    }
  };

  useEffect(() => {
    const getAdress = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/getAddress`);
        console.log("response: ", response.data.data);
        setLoadProduct(!loadProduct)
        setAddress(response.data.data);
      } catch (error) {
        console.log("error in getting all products", error);
      }
    };
    return () => {
      getAdress()
    }
}, [loadProduct])
  return (
    <>
      <div className="maine">
      
        <div className="pagename">

          <h1>Add Loaction</h1>
        </div>

        <div>
          <div className="customershow">
{Address ? Address.map((eachProduct, i)=>(
              <div className="cardad" key={eachProduct._id} >
              <h2 className="adres">ADDRESS</h2>

              <div>     
                {" "}
                <i className="fa-solid fa-location-dot car"></i>
                <b>Location : </b>{eachProduct.address}
              </div>
            </div>
            )) : null }
          
            
          </div>
          <button
            type="button"
            className="submit addbtn"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            ADD LOCATION
          </button>
        </div>
      </div>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Modal title
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <input
                placeholder="ADD ADDRESS"
                className="address"
                onChange={(e) => {
                  setSaveBtn(e.target.value);
                }}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                data-bs-dismiss="modal"        
                className="btn btn-success"
                onClick={() => {
                  sendData();
                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Addlocation;
