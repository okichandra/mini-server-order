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
        const { itemList } = this.props;
        let maxPreview = 4
        let preview = [...itemList]
        if (preview.length > maxPreview) {
            let index = preview.length
            preview.splice(0, index - maxPreview)
        }
        return (
            <div className='prepare'>
                <div className="list_holder">
                    <span>list makanan anda</span>
                    {
                        preview.map((item) => (
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
                    <span>Lihat Semua</span>
                    <p>pesanan akan diantar dalam Nan Menit</p>
                </div>
                <div className="bottom_menu">
                    <div className="sumPrice">
                        <span>Total</span>
                        <span>Rp </span>
                    </div>
                    <button>Kirim Pesanan</button>
                </div>
            </div>
        )
    }
}
