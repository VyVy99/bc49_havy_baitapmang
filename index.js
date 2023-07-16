// @ts-nocheck
// nhập vào số nguyên 
var arrNumber = [];
document.getElementById('btnThemSo').onclick = function
  () {

  var soN = document.getElementById('txtSoN').value * 1;
  arrNumber.push(soN);

  document.getElementById('ketQuaSoN').innerHTML = arrNumber;
}

// câu 1 tổng số dương
document.getElementById('btnSoDuong').onclick = function () {
  var tongSoDuong = 0;

  for (var i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] > 0) {
      tongSoDuong += arrNumber[i];
    }
  }
  document.getElementById('ketQuaTongSoDuong').innerHTML = tongSoDuong
}

// câu 2 đếm số dương
document.getElementById('btnDemSoDuong').onclick = function () {
  var demSoDuong = 0;

  for (var i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] > 0) {
      demSoDuong += 1;
    }
  }

  document.getElementById('ketQuaDemSoDuong').innerHTML = demSoDuong
}
// câu 3 tìm số nhỏ nhất



document.getElementById('btnSoNhoNhat').onclick = function () {
  var soNhoNhat = arrNumber[0];

  for (var i = 1; i < arrNumber.length; i++) {
    if (arrNumber[i] < soNhoNhat) {
      soNhoNhat = arrNumber[i];

    }
  }

  document.getElementById('timSoNhoNhat').innerHTML = soNhoNhat;
}
// câu 4: tìm số dương nhỏ nhất
// Khởi tạo biến lưu số dương nhỏ nhất
let soDuongNhoNhat = Number.MAX_VALUE;

document.getElementById('btnSoDuongNhoNhat').onclick = function () {
  for (var i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] > 0 && arrNumber[i] < soDuongNhoNhat) {
      soDuongNhoNhat = arrNumber[i]
    }


  }
  if (soDuongNhoNhat === Number.MAX_VALUE) {
    soDuongNhoNhat = 'không có số dương'
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
  // Tạo biến tạm và gán giá trị của phần tử ở vị trí thứ 1 vào biến tạm
  var messages = ''
  var vitri1 = document.getElementById('soThuNhat').value * 1
  var vitri2 = document.getElementById('soThuHai').value * 1

  if (arrNumber[vitri1] && arrNumber[vitri2]) {
    var temp = arrNumber[vitri1]
    arrNumber[vitri1] = arrNumber[vitri2]
    arrNumber[vitri2] = temp

  } else {
    if (!arrNumber[vitri1]) {
      messages += vitri1 + ' '
    }
    if (!arrNumber[vitri2]) {
      messages += vitri2
    }
  }

  if (messages.length) {
    document.getElementById('doiCho').innerHTML = "Vi tri " + messages + " khong ton tai trong mang"
  } else {
    document.getElementById('doiCho').innerHTML = `Mảng đã được đổi chỗ: ${arrNumber}`;
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
document.getElementById('btnTimSoNguyenToDauTien').onclick = function () {
  var soNguyenToDauTien = 0;

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
document.getElementById('btnDemSoNguyen').onclick = function () {
  var demSoNguyen = 0;

  for (var i = 0; i < arrNumber.length; i++) {
    if (Number.isInteger(arrNumber[i])) {
      demSoNguyen += 1;
    }
  }
  document.getElementById('demSoNguyen').innerHTML = demSoNguyen
}


