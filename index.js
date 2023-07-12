// nhập vào số nguyên 
var arrNumber = [];
document.getElementById('btnThemSo').onclick = function
  () {

  var soN = document.getElementById('txtSoN').value * 1;
  arrNumber.push(soN);

  document.getElementById('ketQuaSoN').innerHTML = arrNumber;
}

// câu 1 tổng số dương
var tongSoDuong = 0;
document.getElementById('btnSoDuong').onclick = function () {
  for (var i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] > 0) {
      tongSoDuong += arrNumber[i];
    }
  }
  document.getElementById('ketQuaTongSoDuong').innerHTML = tongSoDuong
}

// câu 2 đếm số dương
var demSoDuong = 0;
document.getElementById('btnDemSoDuong').onclick = function () {
  for (var i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] % 2 == 0) {
      demSoDuong += 1;
    }
  }

  document.getElementById('ketQuaDemSoDuong').innerHTML = demSoDuong
}
// câu 3 tìm số nhỏ nhất

var soNhoNhat = arrNumber[0];
document.getElementById('btnSoNhoNhat').onclick = function () {
  for (var i = 1; i < arrNumber.length; i++) {
    if (arrNumber[i] < soNhoNhat) {
      soNhoNhat = arrNumber[i];
    }
  }
  console.log(soNhoNhat);

  document.getElementById('timSoNhoNhat').innerHTML = soNhoNhat;
}
// câu 4: tìm số dương nhỏ nhất
// Khởi tạo biến lưu số dương nhỏ nhất
let soDuongNhoNhat = Number.MAX_VALUE;

document.getElementById('btnSoDuongNhoNhat').onclick = function () {
  for (var i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] < soDuongNhoNhat) {
      soDuongNhoNhat = arrNumber[i]
    } else if (soDuongNhoNhat == Number.MAX_VALUE) {
      soDuongNhoNhat = arrNumber[i]
    }


  }
  document.getElementById('timSoDuongNhoNhat').innerHTML = soDuongNhoNhat

}
// câu 5: tìm số chẵn cuối cùng
document.getElementById('btnTimSoChanCuoiCung').onclick = function () {
  var soChanCuoiCung = null;
  var timThaySoChan = false;
  for (var i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] % 2 === 0) {
      soChanCuoiCung = arrNumber[i];
      timThaySoChan = true;
    }
  }
  if (timThaySoChan) {
    document.getElementById('timSoChanCuoiCung').innerHTML = "Số chẵn cuối cùng trong mảng là: " + soChanCuoiCung;
  } else {
    document.getElementById('timSoChanCuoiCung').innerHTML = "Không có số chẵn trong mảng";
  }
}

// câu 6: đổi chỗ

document.getElementById('btnDôiSo').onclick = function () {
  // Kiểm tra xem mảng arrNumber có ít nhất 2 phần tử hay không
  if (arrNumber.length >= 2) {
    // Tạo biến tạm và gán giá trị của phần tử ở vị trí thứ 1 vào biến tạm
    let temp = arrNumber[1];
    // Gán giá trị của phần tử ở vị trí thứ 2 vào vị trí thứ 1
    arrNumber[1] = arrNumber[0];
    // Gán giá trị biến tạm vào vị trí thứ 2
    arrNumber[0] = temp;

    // Hiển thị mảng đã được đổi chỗ lên trang web
    let doiChoDiv = document.getElementById('doiCho');
    doiChoDiv.innerHTML = `Mảng đã được đổi chỗ: ${arrNumber}`;
  } else {
    alert('Mảng cần ít nhất 2 phần tử để thực hiện đổi chỗ!');
  }
};
//  câu 7: săp xếp mảng theo thư tự tăng dần 
document.getElementById('btnSapXepTangDan').onclick = function () {
  arrNumber.sort(function (a, b) {
    return a - b;
  });
  document.getElementById('sapXepTangDan').innerHTML = arrNumber;
};
// câu 8: tìm số nguyên tố đầu tiên
var soNguyenToDauTien = 0;
document.getElementById('btnTimSoNguyenToDauTien').onclick = function () {
  for (var i = 0; i < arrNumber.length; i++) {
    if (isPrimeNumber(arrNumber[i])) {
      soNguyenToDauTien = arrNumber[i];
      break;
    }
  }
  var soNguyenToDiv = document.getElementById('soNguyenToDauTien');
  soNguyenToDiv.innerHTML = `Số nguyên tố đầu tiên trong mảng là: ${soNguyenToDauTien}`;
}

// Hàm kiểm tra số nguyên tố
function isPrimeNumber(n) {
  if (n < 2) {
    return false;
  }
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

// câu 9 : đếm số nguyên
var demSoNguyen = 0;
document.getElementById('btnDemSoNguyen').onclick = function () {
  for (var i = 0; i < arrNumber.length; i++) {
    if (Number.isInteger(arrNumber[i])) {
      demSoNguyen += 1;
    }
  }
  document.getElementById('demSoNguyen').innerHTML = demSoNguyen
}


