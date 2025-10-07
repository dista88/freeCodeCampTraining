let siswa = [
  { name: "andi", grade: 90 },
  { name: "yono", grade: 80 },
  { name: "budi", grade: 50 },
  { name: "kodok", grade: 100 },
];

function getSiswaData() {
  console.log("Nilai diatas 90:");
  for (let i = 0; i < siswa.length; i++) {
    let gradeSiswa = siswa[i].grade;
  }
}
if (gradeSiswa >= 90) {
  console.log(` ${gradeSiswa}`);
}

getSiswaData();
