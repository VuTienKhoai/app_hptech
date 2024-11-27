export const formatPrice = (price: number | string): string => {
  // Chuyển đổi giá trị đầu vào thành số
  const numericPrice = +`${price}`.replace(/[^0-9.-]+/g, '');

  // Trả về 'N/A' nếu giá trị không hợp lệ
  if (isNaN(numericPrice)) return 'N/A';

  // Định dạng giá và thêm đơn vị "đ"
  return numericPrice.toLocaleString('vi-VN') + 'đ';
};
