import React, { Component } from 'react';
import Row from './row';
import { connect } from 'react-redux';
import StartCol from './startCol';

class Col extends Component {
    constructor(props) {
        super(props);

    }
    renderCol = () => {
        const { ironMan } = this.props

        return ironMan.map((seat, rowIndex) => {
            return <Row key={rowIndex} rowIndex={rowIndex} seat={seat} />
        })
    }
    render() {
        const { customer } = this.props;
        return (
            <div className='d-md-flex justify-content-center align-items-center flex-column'>
                {/* {console.log(customer)} */}
                {customer[0].total === 0 ?
                    <h5 style={{ backgroundColor: "orange" }}>Enter your name and the seat to book</h5> :
                    <h5 style={{ backgroundColor: "orange" }}>Please Select your Seats NOW!</h5>
                }

                <div>
                    {this.renderCol()}

                </div>

                <div id='screen' className='w-100' style={{ backgroundColor: "orange", display: "inline-block", textAlign: "center", padding: "30px", }}>SCREEN THIS WAY</div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {

    return {
        ironMan: state.seatReducer.ironMan,
        customer: state.seatReducer.customer,
    }
}
export default connect(mapStateToProps, null)(Col);