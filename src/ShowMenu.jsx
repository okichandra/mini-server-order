import React, { Component } from 'react'
import down from './assets/image/down.svg'
import up from './assets/image/up.svg'
export default class ShowMenu extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    }

    render() {
        const { itemList } = this.props
        return (
            <div className='prepare'>
                <span>list makanan anda</span>
                {
                    itemList.map((item) => (
                        <div className="listContainer">
                            <img src={item.gambar} alt="" />
                            <div className="listData">
                                <span className='item_nama'>{item.nama}</span>
                                <span className='item_harga'>Rp {this.formatNumber(item.harga)}</span>
                                <span className='item_waktu'>Waktu pembuatan {item.waktuMasak} menit</span>
                            </div>
                            <div className="adjust">
                                <img src={down} alt="" />
                                <span>1</span>
                                <img src={up} alt="" />
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}