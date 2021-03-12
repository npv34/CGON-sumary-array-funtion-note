/*
Mảng:
 - index: 0 -> arr.length - 1;
 - truy xuat gia tri -> index: arr[3] -> 4
 - thay doi gia tri -> = : arr[3] = 10 -> [1 , 2, 3, 10]
 - mang da chieu -> thuong lam viec voi mang 2 chieu
 - Mang 2 chieu: là mảng 1 chiều, mà mỗi phần từ là mảng 1 chiều khác
 vd:
 let array = [
     [1, 3, 4, 5], -> index = 0
     [4, 5, 6, 9], -> index = 1
     [6, 6, 7, 5]
 ];

 - truy xuất giá trị thông qua 2 chỉ số:
 + chỉ số đầu tiên: thể hiện phần tử ở mảng ban đầu;
 + chỉ số thứ 2: chính chỉ số của nó trong mảng con;
 ví dụ: array[0][2] -> 4
 + thay doi -> = -> array[0][2] = null;
 + duyệt mảng 2 chiều ->  2 vòng lặp
    - vòng lặp 1: duyệt qua các phần tử trong mảng ban đầu
    - vòng lặp 2: duyệt các phần tử ở trong mảng con
Hàm:
   - code theo kiểu tuần tư: -> các dòng từ trên xuống dưới,
   chương trình chạy qua từng dòng 1
   -> khó khăn:
    + k muốn chạy -> code vẫn chạy
    + Không tái xử dụng được, bị lặp code nhiều
   -> Giải pháp: nhóm, tổ chức các đoạn code liên quan đến nhau vào 1 khối code.
   -> Sử dụng hàm.
   - Cú pháp:
   function nameFunction(tham_so) {
         // code
   }
   + nameFunction: Tên hàm, thể hiện nội dung, mục đích của hàm -> động từ
   + tham_so: được sử dụng giống như 1 biến trong toàn hàm, n sẽ nhận gía trị
   khi truyền vào lúc gọi hàm.
   + code: tập hợp các câu lệnh để giải quyết 1 vấn đề
   - Gọi hàm: nameFunction(gia_tri) p/s: gia_trị: giá trị thực
   - Giá trị trả về của hàm: return -> hàm sẽ dừng lại ngay, và có giá trị sau return
   - Lưu ý khi truyền giá trị lúc gọi hàm:
   + Đối với object, array thực chất mình sẽ truyền tham chiếu(ảnh hưởng đến biến mình truyền vào)
   + Còn lại thì truyền tham trị(giá trị)
 */

let data = [
    [1, 3, 5, 6, 7],
    [4, 5, 2, 10, 11],
    [5, 6, 7, 8]
];

function totalArray(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] % 2  !== 0) {
                total += arr[i][j];
            }
        }
    }
    return total;
}

document.write(totalArray(data))

