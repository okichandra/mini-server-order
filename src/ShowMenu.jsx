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

    // makeChange(type, item) {
    //     if(type === 'up') {
    //         console.log("Naik")
    //         item.porsi += 1
    //         console.log(item.porsi)
    //     }else{
    //         console.log("Turun")
    //     }
    // }

    render() {
        const { itemList } = this.props;
        let maxPreview = 4  
        let preview = [...itemList]
        if (preview.length > maxPreview) {
            let index = preview.length
            preview.splice(0, index - maxPreview)
        }
        console.log(this.state.makanan)
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
                                    <img src={down} alt="down" onClick={() => {
                                        item.porsi -= 1 
                                    }}/>
                                    <span>{item.porsi}</span>
                                    <img src={up} alt="up" onClick={() => {
                                        item.porsi += 1
                                    }} />
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
                        <span>Rp {
                            itemList.reduce((pratialSum, item) => pratialSum + (item.harga * item.porsi), 0)
                        }</span>
                    </div>
                    <button>Kirim Pesanan</button>
                </div>
            </div>
        )
    }
}
