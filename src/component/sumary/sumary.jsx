import React, { Component } from 'react';
import {connect} from 'react-redux'

class Sumary extends Component {
    constructor(props) {
        super(props);
        this.refName = React.createRef();
        this.refTotal = React.createRef();
        this.refDetail = React.createRef();
    }
    
    render() {
        const {customer}= this.props;
        return (
            <div>
                <button className='btn btn-info m-2' onClick={() => {
                  if(customer.total===customer.seat.length){
                    this.refName.current.innerHTML= customer.customerName;
                    this.refTotal.current.innerHTML= customer.total;
                    this.refDetail.current.innerHTML= customer.seat.map((detail) => {
                        return detail.seatName
                    });
                  }else {
                    alert("Your seats are not enought, please select countinuos !")
                  }
                   
                }}>Confirm Selection</button>
                <table className='table  bg-light rounded'>
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Number of Seats
                            </th>
                            <th>
                                Seats
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td ref={this.refName}></td>
                            <td ref={this.refTotal}></td>
                            <td ref={this.refDetail}></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        customer: state.seatReducer.customer[0],
    }
}
export default connect(mapStateToProps, null) (Sumary);