import React, { useState } from "react";
import DashLeft from './DashLeft';
import { AiFillPlusCircle } from 'react-icons/ai';
import { FaTimes } from "react-icons/fa";
// import ItemModal from '../modals/ItemModal';


const Sale = () => {

  const [modalState, setModalState] =  useState(false);

  const toggleModalState = ()=> {
    setModalState(!modalState)
  }
  
  return (
    <>
      <section className="admin_panel">
        <DashLeft/>
        <div className="dashboard_right">
          <div className="sales__section">

          {/* modal */}
          <div className={`modal__bg modalShowing-${modalState}`}>
            <div className="modal__wrapper">
                <div className="modal__head">
                    <h3>add items</h3>
                    <FaTimes className="modal__close" onClick={()=> setModalState(!modalState)}/>
                </div>
            </div>
          </div>

            <div className="sales__section--head">
              <h2>SALE INVOICE</h2>
            </div>

            <div className="sales_wrapper">

              <div className="row">
                <div className="col-md-4">

                  <form>
                    <div className="from_group">
                      <label for="invoice_num" >Invoice Number</label>
                      <input type="text" id="invoice_num" className="form-control"/>
                    </div>
                    <div className="from_group">
                      <label for="invoice_date" >Invoice Date</label>
                      <input type="date" id="invoice_date" className="form-control"/>
                    </div>
                    <div className="from_group">
                      <label for="staff_counter" >Staff Counter</label>
                      <input type="text" id="staff_counter" className="form-control"/>
                    </div>
                  </form>

                </div>

                <div className="col-md-8">
                  <div className="client_wrapper">

                    <div className="client_detail">
                      <div className="search_bill">
                        <span>Bill to</span>
                        <input type="text" className="form-control" placeholder="Search"/>
                      </div>
                      <div className="add_party_label">
                        <AiFillPlusCircle className="text-success" style={{fontSize: '20px', cursor:'pointer'}}/>
                        <p>Add New Party</p>
                      </div>
                    </div>

                    <div className="client_total_discription">
                      <div className="client_name"> 
                          <p>Ashique Rahman P <span>(Balance: 185.00 INR)</span></p>
                      </div>
                      <div className="client_address"> 
                          <p>Address:</p>
                          <p>Puthiyottil House, Elettil Post Koduvally Kozhikode</p>
                      </div>
                      <div className="client_address"> 
                          <p>Phone:</p>
                          <p>+91 7012224271</p>
                      </div>
                      <div className="gst_num"> 
                          <p>GSTIN:</p>
                          <p>32Yk98252558652</p>
                      </div>
                    </div>

                    <div className="state_supply">
                          <p>State of supply:</p>
                          <input type="text" className="form-control" />
                    </div>

                  </div>
                </div>
                
              </div>
              
            </div>

            {/* table */}
              <section className="adding_new_item_table">
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">SL NO</th>
                      <th scope="col">ITEM</th>
                      <th scope="col">CODE</th>
                      <th scope="col">MRP</th>
                      <th scope="col">RATE</th>
                      <th scope="col">QTY</th>
                      <th scope="col">DISCOUNT</th>
                      <th scope="col">TAX</th>
                      <th scope="col">TOTAL</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Laptop</td>
                      <td>35400</td>
                      <td>30500</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Samsung X67 Mobile</td>
                      <td>35400</td>
                      <td>30500</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                    </tr>
                  </tbody>
                </table>

                <div className="add_item_btn">
                  <button type="button" onClick={()=> toggleModalState()}>Add button <i className="fa fa-plus pl-2 d-inline-block"></i></button>
                </div>
            </section>
            
            <br /> <br /> <br />
            <section className="final_output_section">
              <small>Total Items: <span>2</span></small>
              <hr />
              <div className="final_output">
                <div className="row justify-content-between">
                  <div className="col-md-7">
                  <table class="table table-bordered">
                    <thead>
                      <tr>
                        <th scope="col">Tax %</th>
                        <th scope="col">Taxable Value</th>
                        <th scope="col">Tax Amount</th>
                        <th scope="col">CGST</th>
                        <th scope="col">SGST</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>18%</td>
                        <td>67000</td>
                        <td>35400</td>
                        <td>30500</td>
                        <td>Total</td>
                      </tr>
                      <tr>
                        <td>0%</td>
                        <td>0</td>
                        <td>35400</td>
                        <td>30500</td>
                        <td>35400</td>
                      </tr>
                      <tr>
                        <td>Total</td>
                        <td>67000</td>
                        <td>35400</td>
                        <td>30500</td>
                        <td>35400</td>
                      </tr>
                    </tbody>
                  </table>

                  <div className="add_info">
                    <p>Kerala Flood Cess (1%): 670 INR </p>
                    <p>Add Note +</p>
                    <p>Add Terms and Conditions+</p>
                    <p>Add Bank / UPI +</p>
                  </div>

                  </div>
                  <div className="col-md-4">
                    <div className="sub_total_table">
                    <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">Sub Total</th>
                        <th scope="col">67500</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Tax Mount</td>
                        <td>12063</td>
                      </tr>
                      <tr>
                        <td>Cess (1%)</td>
                        <td>50</td>
                      </tr>
                      <tr>
                        <td>Discount</td>
                        <td>105</td>
                      </tr>
                      <tr>
                        <td>GRAND TOTAL</td>
                        <td>79730 INR</td>
                      </tr>
                    </tbody>
                  </table>
                    </div>


                      <div className="cread_wrapper">
                        <div className="credit">
                          <div class="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault">
                              Fully Credit
                            </label>
                          </div>
                          <div class="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault">
                              Fully Credit
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="recieved__section">
                        <div>
                          <p>Recieved: </p>
                          <select class="form-select" aria-label="Default select example">
                            <option selected>500 NIR</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        
                          <select class="form-select" aria-label="Default select example">
                              <option selected>CASH</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                          </select>
                        </div>
                        <small className="paymode">Pay Mode</small>
                        <h5 className="balance">Balance: &nbsp;<span>26588 INR</span></h5>
                      </div>

                      <div className="submit_btn mt-2">
                          <button type="submit">Submit all</button>
                      </div>
                    </div>
                    
                </div>
              </div>
            </section>


          </div>
        </div>
      </section>


    </>
  );
};

export default Sale;
