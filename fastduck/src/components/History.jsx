import React from 'react'
import axios from "axios";
import { useState, useEffect } from "react";
function History() {
    const [products, setProducts] = useState([]);
    const [loadProduct, setLoadProduct] = useState(false)
  
    
    
    useEffect(() => {
      const getAllProducts = async () => {
        try {
          const response = await axios.get(`http://localhost:5001/historyCustomer`);
          console.log("response: ", response.data);
          setLoadProduct(!loadProduct)
          setProducts(response.data.data.reverse());
        } catch (error) {
          console.log("error in getting all products", error);
        }
      };
      
      return () => {
        
        getAllProducts()
  
      }
  }, [loadProduct])
  
  return (
    <>
     <div className="maine">
        <div className="pagename">
          <h1>History</h1>
        </div>
        <div className="customershow">
        {products.map((eachProduct, i) => (   
          <div className="card"  key={eachProduct._id}>
            <div>
              {" "}
              <i className="fa-solid fa-id-card-clip car"></i> <b>ID :</b> { eachProduct.customerid}
            </div>
            <div>
              <i className="fa-solid fa-user car"></i>
              <b>NAME : </b> { eachProduct.customername}
            </div>
            <div>
              {" "}
              <i className="fa-solid fa-phone car"></i> <b>Phone :</b> {eachProduct.phone}
            </div>
            <div>
              {" "}
              <i className="fa-solid fa-envelope car"></i>
              <b>Email : </b>{ eachProduct.email}
            </div>
            <div>
              {" "}
              <i className="fa-solid fa-message car"></i> <b>Notes :</b>{ eachProduct.notes}{" "}
            </div>
          </div>
)) } 

        </div>
      </div>
    
    </>
  )
}

export default History