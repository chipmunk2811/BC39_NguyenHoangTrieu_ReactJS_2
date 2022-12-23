import React, { Component } from 'react'
import data from './dataGlasses.json'

export default class BaitapReacJS2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listGlasses: data,
            detail: data[0],
        };
    }

    Click = (data) => {
        const detail = data.glasses;
        this.setState({ detail });
        document.getElementById("glassesInfo").style.display = 'block';
        document.getElementById("vglasses__img").style.display = 'block';
    }

    renderGlasses = () => {
        const { listGlasses } = this.state;
        return listGlasses.map((glasses) => {
            return (
                <img onClick={() => { this.Click({ glasses }) }} id={glasses.id} className="col-2 p-2" src={glasses.url} alt style={{ cursor: 'pointer' }} key={glasses.id} />
            );
        });
    };

    renderImgGlasses = () => {
        const { detail } = this.state;
        return (
            <img id={detail.id} src={detail.url} alt />
        );
    }
    renderInfoGlasses = () => {
        const { detail } = this.state;
        return (
            <>
                <h5 style={{ marginBottom: 5 }}>{detail.name}</h5>
                <button className="btn btn-danger">{detail.price}</button> <span style={{ color: 'green', marginLeft: 15 }}>Stocking</span>
                <p style={{ marginTop: 15 }}>{detail.desc} </p>
            </>
        );
    }

    render() {
        return (
            <div className='tryGlasses'>
                <div>
                    <h3>TRY GLASSES APP ONLINE</h3>
                </div>
                <div className="container">
                    <div className="row  justify-content-between container">
                        <div className="col-4 vglasses__left p-0">
                            <div className="vglasses__card">
                                <div className="vglasses__model" id="avatar">
                                    <div id="vglasses__img" style={{ display: 'none' }}>{this.renderImgGlasses()}</div>

                                </div>
                                <div id="glassesInfo" className="vglasses__info" style={{ display: 'none' }}>
                                    {this.renderInfoGlasses()}
                                </div>
                            </div>
                        </div>
                        <div className="col-4 vglasses__right p-0">
                            <div className="vglasses__card"><div className="vglasses__model" id="avatar"><img id={1} src="./glassesImage/v1.png" /></div><div id="glassesInfo" className="vglasses__info" style={{ display: 'block' }}><h5 style={{ marginBottom: 5 }}>GUCCI G8850U</h5><button className="btn btn-danger">30</button> <span style={{ color: 'green', marginLeft: 15 }}>Stocking</span><p style={{ marginTop: 15 }}>Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.</p></div></div>

                        </div>
                    </div>

                    <div>
                        <div className="virtualGlasse">
                            <div className="row">
                                <div className="col-12">
                                    <h5 className="mb-2 text-center">Virtual Glasses</h5>
                                </div>
                            </div>
                            <div className="row" id="vglassesList">
                                {this.renderGlasses()}
                                {/* <img id="G1" className="col-2" src="./glassesImage/g1.jpg" alt style={{ cursor: 'pointer' }} />
                                <img id="G2" className="col-2" src="./glassesImage/g2.jpg" alt style={{ cursor: 'pointer' }} />
                                <img id="G3" className="col-2" src="./glassesImage/g3.jpg" alt style={{ cursor: 'pointer' }} />
                                <img id="G4" className="col-2" src="./glassesImage/g4.jpg" alt style={{ cursor: 'pointer' }} />
                                <img id="G5" className="col-2" src="./glassesImage/g5.jpg" alt style={{ cursor: 'pointer' }} />
                                <img id="G6" className="col-2" src="./glassesImage/g6.jpg" alt style={{ cursor: 'pointer' }} />
                                <img id="G7" className="col-2" src="./glassesImage/g7.jpg" alt style={{ cursor: 'pointer' }} />
                                <img id="G8" className="col-2" src="./glassesImage/g8.jpg" alt style={{ cursor: 'pointer' }} />
                                <img id="G9" className="col-2" src="./glassesImage/g9.jpg" alt style={{ cursor: 'pointer' }} /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

