const names = ["Halo", "Angel", "Nyoman", "Ketut", "Aisyah"];

// TODO: Fungsi utama
// Menerima 2 parameter: list nama dan callback sort
// Mengembalikan array of string dengan format:
// "1. Nama"
// "2. Nama"
// ...

const sort = (list, callback) => { 
  sortList = callback(list);
  const result = [];
  for (let i = 0; i < list.length; i++) {
    result.push(`${i + 1}. ${list[i]}`);
  }
  return result;
}

const sorter = sort;
// TODO: Fungsi untuk mengurutkan array of string secara ascending
// mengembalikan array yang sudah diurutkan
const ascending = (array) => {
  const arraySort = array.sort();
  return arraySort;
}

const sortAscending = ascending;

// TODO: Fungsi untuk mengurutkan array of string secara descending
// mengembalikan array yang sudah diurutkan
const descending = (array) => { 
  const arraySort = array.sort();
  return arraySort.reverse();
}
const sortDescending = descending;

// ! JANGAN DIMODIFIKASI
(function main() {
  console.log(sorter?.(names, sortAscending)?.join("\n"));
  console.log(sorter?.(names, sortDescending)?.join("\n"));
})();

module.exports = {
  sorter,
  sortAscending,
  sortDescending,
  names,
};