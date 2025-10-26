import { useEffect, useState } from "react"

/**
 * useMobile()
 * Hook ini digunakan untuk mendeteksi apakah user sedang menggunakan device berlayar kecil (mobile)
 * Berdasarkan lebar window (window.innerWidth)
 */
export function useMobile() {
  // State untuk menyimpan status apakah layar termasuk mobile atau tidak
  const [isMobile, setIsMobile] = useState<boolean>(false)

  /**
   * handleResize()
   * Fungsi ini akan dijalankan setiap kali ukuran layar berubah (resize event)
   * Tujuannya untuk memperbarui state `isMobile` sesuai ukuran terbaru
   */
  const handleResize = () => {
    // Di sini kita bisa menentukan breakpoint (misalnya 768px)
    setIsMobile(window.innerWidth <= 640)
  }

  /**
   * useEffect()
   * - Akan dijalankan sekali saat komponen pertama kali di-mount
   * - Dan membersihkan event listener saat komponen di-unmount
   */
  useEffect(() => {
    // Jalankan sekali untuk menentukan nilai awal
    handleResize()

    // Tambahkan event listener agar handleResize dijalankan setiap kali layar berubah ukuran
    window.addEventListener("resize", handleResize)

    // Cleanup: hapus listener saat komponen di-unmount
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, []) // Dependency array kosong artinya hanya dijalankan sekali di awal

  // Return hasilnya agar bisa digunakan di komponen lain
  return { isMobile }
}
