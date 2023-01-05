import React, { Component } from 'react';
import StartCol from './startCol';
import { connect } from 'react-redux'

const seatStyle = {
    width: "50px",
    height: "50px",
    margin: "1px",
    // border:"1px solid transparent",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",


}
class Seat extends Component {
    constructor(props) {
        super(props);

    }
    // TODO: render chỗ ngồi
    // * dùng hàm đệ quy render chỗ ngồi hoặc là số thứ tự
    renderSeat = () => {
        const { seatDetail, startCol, bookTicket, colIndex, rowIndex, customer } = this.props
        // console.log(customer);
        return startCol === "" ?
            <StartCol detail={seatDetail.soGhe} /> :
            <div
                style={
                    seatDetail["daDat"] ?
                        customer.seat.findIndex((seat) => {
                            return seatDetail["soGhe"] === seat["seatName"]
                        }) === -1 ?
                            { ...seatStyle, backgroundColor: "red" } :
                            { ...seatStyle, backgroundColor: "green" } :
                        { ...seatStyle, backgroundColor: "white" }}
                onClick={() => {
                    if (seatDetail["daDat"] && customer.seat.findIndex((seat) => {
                        return seatDetail["soGhe"] === seat["seatName"]
                    }) === -1) {
                        return


                    }
                    if (customer.seat.length + 1 <= customer.total && customer.total !== 0) {
                        bookTicket(colIndex, seatDetail.daDat ? false : true, rowIndex, seatDetail.soGhe, seatDetail.gia)
                        // console.log(customer.seat.length + 1);
                        // console.log(customer.total);
                    }
                    else if (seatDetail.daDat === true) {
                        bookTicket(colIndex, seatDetail.daDat ? false : true, rowIndex, seatDetail.soGhe, seatDetail.gia)
                        // console.log(customer.seat.length + 1);
                        // console.log(customer.total);
                    }

                }}
            >
                {seatDetail.soGhe}
            </div>
    }
    render() {


        return (
            <>
                {this.renderSeat()}
            </>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        customer: state.seatReducer.customer[0],
    }
}
const mapDipatchToProps = (dispatch) => {
    return {
        bookTicket: (colIndex, booked, rowIndex, seatName, price) => {

            const action = {
                type: "BOOK_TICKET",
                payload: {
                    colIndex: colIndex,
                    booked: booked,
                    rowIndex: rowIndex,
                    seatName: seatName,
                    price: price,
                }
            }
            dispatch(action)

        }
    }
}

export default connect(mapStateToProps, mapDipatchToProps)(Seat);    