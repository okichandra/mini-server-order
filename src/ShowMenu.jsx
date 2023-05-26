import React, { Component } from 'react'
import down from './assets/image/down.svg'
import up from './assets/image/up.svg'
import data from './Data'

export default class ShowMenu extends Component {
    constructor(props) {
        super(props)

        this.state = {
            itemList: this.props.itemList,
        }
    }

    formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    }

    sesuaikanPorsi(params, tipe) {

        const edited = this.state.itemList.map(item => {
            if (item.nama !== params.nama) return item
            if (tipe === 'up') {
                return {
                    ...item,
                    porsi: item.porsi + 1,
                }
            } else {
                if(item.porsi <= 0) {
                    return {
                        ...item,
                        porsi: item.porsi = 0,
                    }
                }
                return {
                    ...item,
                    porsi: item.porsi - 1,
                }
            }
        })
        this.setState({
            itemList: edited
        })
        for (const element of data) {
            if (element.nama === params.nama) {
                if (tipe === 'up') element.porsi += 1
                else {
                    if(element.porsi <= 0) return
                    else element.porsi -= 1
                }
            }
        }
    }

    render() {
        const { itemList } = this.state;
        let maxPreview = 6
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
                                    <img src={down} alt="down" onClick={() => this.sesuaikanPorsi(item, "down")} />
                                    <span>{item.porsi}</span>
                                    <img src={up} alt="up" onClick={() => this.sesuaikanPorsi(item, "up")} />
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
                            this.formatNumber(
                                itemList.reduce((pratialSum, item) => pratialSum + (item.harga * item.porsi), 0)
                            )
                        }</span>
                    </div>
                    <button>Kirim Pesanan</button>
                </div>
            </div>
        )
    }
}