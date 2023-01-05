import React, { Component, createRef, useRef } from 'react';
import { connect } from 'react-redux'
class Customer extends Component {
    constructor(props) {
        super(props);
        this.refFullName = React.createRef();
        this.refTotal = React.createRef();
    }
    render() {
        const { customer, handleFullName } = this.props
        return (
            <>

                <div>
                    <div className='d-flex'>

                        <div className="form-group">
                            <input
                                className='form-control'
                                ref={this.refFullName}
                                type="text"
                                placeholder='Enter your name'
                                defaultValue={customer.customerName}
                                onChange={(element) => {
                                }}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                className='form-control'
                                ref={this.refTotal}
                                type="number" placeholder='Seats want to book!' />
                        </div>

                    </div>
                    <button
                        className='btn btn-info'
                        onClick={() => {
                            if (Number.isInteger(this.refTotal.current.value * 1)) {
                                handleFullName(
                                    this.refFullName.current.value,
                                    this.refTotal.current.value * 1)
                            } else {
                                alert("Chỉ được số vào ô tổng số ghế")
                            }
                        }}
                    >Start Selecting</button>
                    {console.log(customer.customerName)}
                </div>
                <div className='d-flex mt-3'>
                    <div className='d-inline-block ml-2'>
                        <div className='d-inline-block' style={{ width: "20px", height: "20px", backgroundColor: "green" }}></div>
                        <p className='d-inline-block ml-2'>Selected Seat</p>
                    </div>
                    <div className='d-inline-block ml-2'>
                        <div className='d-inline-block' style={{ width: "20px", height: "20px", backgroundColor: "red" }}></div>
                        <p className='d-inline-block ml-2'>Reserved Seat</p>
                    </div>
                    <div className='d-inline-block ml-2'>
                        <div className='d-inline-block' style={{ width: "20px", height: "20px", backgroundColor: "white" }}></div>
                        <p className='d-inline-block ml-2'>Empty Seat</p>
                    </div>
                    
                   
                  

                </div>
            </>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        customer: state.seatReducer.customer[0],
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleFullName: (fullName, total) => {
            const action = {
                type: "ADD_NEW_NAME",
                payload: {
                    fullName,
                    total
                }
            }
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Customer);