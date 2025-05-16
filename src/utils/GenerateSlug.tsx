export function generateSlug(text: string): string {
  return text
    .toLowerCase()                  // kecil semua
    .trim()                         // hapus spasi di awal/akhir
    .replace(/[^\w\s-]/g, '')       // hapus karakter selain huruf, angka, spasi, dan tanda -
    .replace(/\s+/g, '-')           // ganti spasi jadi -
    .replace(/--+/g, '-');          // ganti multiple dash jadi 1 dash
}
