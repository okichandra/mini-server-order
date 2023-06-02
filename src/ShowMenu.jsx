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
                if (item.porsi <= 0) {
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
                    if (element.porsi <= 0) return
                    else element.porsi -= 1
                }
            }
        }
    }

    render() {
        const { itemList } = this.state;
        let cooking = []
        let timeCook = [...itemList].forEach(element => {
            let time = element.waktuMasak
            cooking.push(time)
        })
        // const findindex = arr => arr.filter((item, index) => {
        //     return arr.indexOf(item) === index
        // })
        // const duplicat = findindex(itemList)
        // let preview = [...duplicat]


        // {
        //     preview.filter(item => item.nama === item.nama).forEach(element => {
        //         double.push(element)
        //         console.log(double)
        //     })
        // }
        return (
            <div className='prepare'>
                <div className="list_holder">
                    <span>list menu anda</span>
                    {
                        itemList.map((item) => (
                            <div className="listContainer" style={{
                                filter: item.porsi == 0 ? 'brightness(.8)': '',
                                backgroundColor: item.porsi == 0 ? 'rgba(255, 255, 255,.2)' : '',
                            }}>
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
                    <p>pesanan akan diantar dalam {Math.max(...cooking)} Menit</p>
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