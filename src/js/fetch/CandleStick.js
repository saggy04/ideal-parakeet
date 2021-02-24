// This file is created to fetch the Candlestick Data and 
// Render the Chandle Stick Chart by passing the rendered values.
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Klinechart from '../container/klinechart';


const burl = "https://api.binance.com";
let endPoint = "/api/v3/klines";
let dataQueryString = "symbol=BTCUSDT&interval=15m&limit=80";

const urlCall = burl + endPoint + '?' + dataQueryString;
const DataSet = [];

const CandleStick = () => {
    const [state, setState] = useState({ ArrData: [], isLoaded: false })
    const ArrData = state.ArrData;
    const isLoaded = state.isLoaded;
    

    const componentDidMount = async () => {
        axios.get(urlCall)
            .then((res) => {
                setState(() => {
                    return {
                        ArrData: res.data,
                        isLoaded: true
                    }
                })
            })
            .catch((error) => {
                alert(error.message)
            })
    }

    useEffect(() => {
        componentDidMount()

        return () => {
            const parent = document.querySelector("#root");
            const child = document.querySelector(".tv-lightweight-charts");
            parent.removeChild(child)
        }
    }, [])

    ArrData.forEach((ele) => {
        const EachObject = {
            "time": ele[0] / 1000,
            "open": ele[1],
            "high": ele[2],
            "low": ele[3],
            "close": ele[4]
        }
        DataSet.push(EachObject);
    });

        return (
                (!isLoaded) ? 
                <Klinechart 
                FetchedData = {DataSet}
                />
                 : null
        )

}

export default CandleStick;
