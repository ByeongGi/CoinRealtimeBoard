$(document).ready(()=>{

    setInterval(apiCaller,3000);

});



function apiCaller() {

    var myHeaders = new Headers();
    
    var myInit = {
        method: 'GET',
        headers: myHeaders,
        mode: 'cors',
        cache: 'default'
    };

    var myRequest = new Request('https://api.coinone.co.kr/ticker/?currency=all%27&format=json', myInit);

    fetch(myRequest).then((response)=>{

        return response.json();
    }).then((json) => {

        initBtc(json);
        initEtc(json);
        initEth(json);
        initXrp(json);
       
        console.log("-----------------------------------------");
        console.log(json.timestamp);
        // console.log(json['btc']);
        console.log(json['btc']['currency']);
        console.log('현재 시간 : ' + json['timestamp']);
        console.log('최고가 : ' + json['btc']['high']);
        console.log('최저가 : ' + json['btc']['low']);
        console.log('마지막 거래 가격' + json['btc']['last']);
        console.log('첫 거래 가격 : ' + json['btc']['first']);
        console.log('거래량 : ' + json['btc']['volume']);
        console.log("-----------------------------------------");

    });
}


function initBtc(json){
    $('#btc-now').text(new Date().toLocaleString());
    $('#btc-timestamp').text(json['timestamp']);
    $('#btc-high').text(json['btc']['high']);
    $('#btc-low').text(json['btc']['low']);
    $('#btc-last').text(json['btc']['last']);
    $('#btc-first').text(json['btc']['first']);
    $('#btc-volume').text(json['btc']['volume']);
}


function initEtc(json){
    $('#etc-now').text(new Date().toLocaleString());
    $('#etc-timestamp').text(json['timestamp']);
    $('#etc-high').text(json['etc']['high']);
    $('#etc-low').text(json['etc']['low']);
    $('#etc-last').text(json['etc']['last']);
    $('#etc-first').text(json['etc']['first']);
    $('#etc-volume').text(json['etc']['volume']);
}

function initEth(json){
    $('#eth-now').text(new Date().toLocaleString());
    $('#eth-timestamp').text(json['timestamp']);
    $('#eth-high').text(json['eth']['high']);
    $('#eth-low').text(json['eth']['low']);
    $('#eth-last').text(json['eth']['last']);
    $('#eth-first').text(json['eth']['first']);
    $('#eth-volume').text(json['eth']['volume']);
}


function initXrp(json){
    $('#xrp-now').text(new Date().toLocaleString());
    $('#xrp-timestamp').text(json['timestamp']);
    $('#xrp-high').text(json['xrp']['high']);
    $('#xrp-low').text(json['xrp']['low']);
    $('#xrp-last').text(json['xrp']['last']);
    $('#xrp-first').text(json['xrp']['first']);
    $('#xrp-volume').text(json['xrp']['volume']);
}