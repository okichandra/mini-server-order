import React, { Component } from 'react'
import ShowMenu from './ShowMenu'

export default class RightSide extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpened: false,
        }
    }

    setDisplay() {
        if (!this.state.isOpened) {
            this.setState({ isOpened: !this.state.isOpened })
        } else {
            this.setState({ isOpened: !this.state.isOpened })
        }
    }
    render() {
        const { kirimData } = this.props
        const findindex = arr => arr.filter((item, index) => {
            return arr.indexOf(item) === index
        })

        let filteredData = [...findindex(kirimData)]

        const wasOpened = { 
            // border: '1px solid black',
            width: this.state.isOpened ? '40%' : '',
            height: this.state.isOpened ? '100%' : '',
            transition: '.3s',
        }
        const pageContainer = {
            top: this.state.isOpened ? '5%' : '',
            transition: '.3s',
        }

        return (
            <div className='rightPage' style={pageContainer}>
                <div className="unvisible" onClick={() => this.setDisplay()}></div>
                <div className="notif" style={wasOpened} onClick={() => {
                    if (!this.state.isOpened) {
                        this.setState({ isOpened: !this.state.isOpened })
                    }
                }}>
                    <span className='notif_mess mb-2'>Lihat Makanan({filteredData.length})</span>
                    {this.state.isOpened ? <ShowMenu setDisplay={this.setDisplay} itemList={filteredData} /> : ''}
                </div>
            </div>
        )
    }
}   