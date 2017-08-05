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

    fetch(myRequest).then(function (response) {

        return response.json();
    }).then((json) => {
        
        $('#now').text(new Date().toLocaleString());
        $('#timestamp').text(json['timestamp']);
        $('#high').text(json['btc']['high']);
        $('#low').text(json['btc']['low']);
        $('#last').text(json['btc']['last']);
        $('#first').text(json['btc']['first']);
        $('#volume').text(json['btc']['volume']);



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