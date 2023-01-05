import React, { Component } from 'react';
import Seat from './seat';
import StartCol from './startCol';
import StartRow from './startRow';

class Row extends Component {
    constructor(props) {
        super(props);
        
    }
    renderSeat = () => {
        const {seat, rowIndex} = this.props
        // console.log(seat["danhSachGhe"]);
        return Object.keys(seat["danhSachGhe"]).map((seatDetail,colIndex) => {
            return <Seat seatDetail = {seat["danhSachGhe"][seatDetail]} key={colIndex} colIndex = {colIndex} startCol={seat["hang"]} rowIndex={rowIndex}/> 
        })
    }
    render() {
        const {seat} = this.props
        return (
            <div className='d-flex'>
                <StartRow seatNumber = {seat["hang"]}/>
                {this.renderSeat()}
            </div>
        );
    }
}

export default Row;