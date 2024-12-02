export interface TypeAppointmentCard {
  id: string; // Mã phiếu, ví dụ: "T231214U0RROZ"
  name: string; // Tên bệnh nhân, ví dụ: "TEST HA HA"
  clinic: {
    name: string; // Tên phòng khám, ví dụ: "PHÒNG KHÁM CHUYÊN KHOA TRỊ GIÃN TĨNH MẠCH AN VIÊN"
    location: string; // Địa điểm phòng khám, ví dụ: "HỒ CHÍ MINH"
  };
  service: string; // Dịch vụ, ví dụ: "Khám chuyên khoa Nội tim mạch"
  department: string; // Chuyên khoa, ví dụ: "Nội Tim mạch"
  appointmentDate?: string; // Ngày khám, ví dụ: "14/12/2023"
  appointmentTime?: string; // Giờ khám dự kiến, ví dụ: "08:00 (Buổi sáng)"
  status: string; // Trạng thái, ví dụ: "Đặt khám thành công"
}
