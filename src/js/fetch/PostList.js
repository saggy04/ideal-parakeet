// This file is created just for the understandings of the developer 
// (Signed End-Point Security of the Binance Trade and User_Data APIs)

import React, { useState, useEffect } from 'react';
import axios from 'axios';
const CryptoJS = require("crypto-js");


const burl = "https://api.binance.com";
const endPoint = "/api/v3/account";
let dataQueryString = "recvWindow=20000&timestamp=" + Date.now();

const keys = {
    "akey": "Your API Key Here",
    "skey": "Your Secret Key Here"
}


const signature = CryptoJS.HmacSHA256(dataQueryString, keys['skey']).toString(CryptoJS.enc.Hex);

const urlCall = burl + endPoint + '?' + dataQueryString + '&signature=' + signature;



function PostList() {

	const [res, setRes] = useState([])

	const componentDidMount = async () => {
		const buyOrder = await axios.get(urlCall, {
			headers: {
				'X-MBX-APIKEY': keys['akey']
			}
		})
		.then((res) => {
		setRes(JSON.stringify(res))
		})
		.catch((error) => {
		alert(error)
		})
	}

	useEffect(function() {
		componentDidMount()

	}, [])


	return (
		<div className="Data">
			<p>{res}</p>
		</div>
	);
}	

export default PostList;
