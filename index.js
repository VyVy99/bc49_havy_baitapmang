var arrNumber = [];
document.getElementById('btnThemSo').onclick = function
(){

 var soN =  document.getElementById('txtSoN').value *1;
 arrNumber.push(soN);
 document.getElementById('ketQuaSoN').innerHTML = arrNumber;
}
// câu 1 tổng số dương
var tongSoDuong = 0;
document.getElementById('btnSoDuong').onclick = function(){
  for(var i = 0; i< arrNumber.length; i++){
    if (arrNumber[i]> 0 ){
      tongSoDuong+= arrNumber[i];
    }
  }
  document.getElementById('ketQuaTongSoDuong').innerHTML = tongSoDuong
}

// câu 2 đếm số dương
var demSoDuong = 0;
document.getElementById('btnDemSoDuong').onclick = function(){
  for(var i = 0; i< arrNumber.length; i++){
    if (arrNumber[i]%2==0){
  demSoDuong +=1;
    }
  }
  document.getElementById('ketQuaDemSoDuong').innerHTML = demSoDuong
}
// câu 3 tìm số nhỏ nhất
var soNhoNhat = 0;
document.getElementById('btnSoNhoNhat').onclick = function(){
for (var i= 0; i< arrNumber.length ; i++){
  if (arr[i] < minNum) {
    soNhoNhat = arr[i];
  }
}
document.getElementById('timSoNhoNhat').innerHTML = soNhoNhat
}
// câu 4: tìm số dương nhỏ nhất
var soDuongNhoNhat = 0;
document.getElementById('btnSoDuongNhoNhat').onclick = function(){
  if (arr[i] > 0 && (soDuongNhoNhat === 0 || arr[i] < soDuongNhoNhat)) {
    soDuongNhoNhat = arr[i];

}
document.getElementById('timSoDuongNhoNhat').innerHTML = soDuongNhoNhat

}
// câu 5: tìm số chẵn cuối cùng
var soChanCuoiCung = 0;
document.getElementById('btnTimSoChanCuoiCung').onclick = function(){
  for (let i = arrNumber.length - 1; i >= 0; i--) {
    if (arrNumber[i] % 2 === 0) {
      soChanCuoiCung = arrNumber[i];
      break;
    }
  }
  document.getElementById('timSoChanCuoiCung').innerHTML = soChanCuoiCung
}
