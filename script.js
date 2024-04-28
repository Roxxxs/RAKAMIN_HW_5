let dataRegistrasi = [];

function tambahData() {
  var nama = document.getElementById("nama").value;
  var umur = parseInt(document.getElementById("umur").value);
  var uangSaku = parseInt(document.getElementById("uangSaku").value);

  if (nama.length < 10) {
    alert("Nama harus minimal 10 karakter.");
    return;
  }

  if (umur < 25) {
    alert("Umur harus minimal 25 tahun.");
    return;
  }

  if (uangSaku < 100000 || uangSaku > 1000000) {
    alert("Uang saku harus antara 100.000 hingga 1.000.000.");
    return;
  }

  dataRegistrasi.push({ nama, umur, uangSaku });
  updateTabel();
  document.getElementById("registrationForm").reset();
  $('.nav-tabs a[href="#profile"]').tab("show");
}

function updateTabel() {
  var dataTable = document
    .getElementById("dataTable")
    .getElementsByTagName("tbody")[0];
  dataTable.innerHTML = "";
  var totalUangSaku = 0;

  dataRegistrasi.forEach(function (item) {
    var newRow = dataTable.insertRow();
    newRow.innerHTML = `<td>${item.nama}</td><td>${item.umur}</td><td>${item.uangSaku}</td>`;
    totalUangSaku += parseInt(item.uangSaku);
  });

  var rataRataUangSaku = totalUangSaku / dataRegistrasi.length;
  document.getElementById("average").textContent =
    "Rata-rata Uang Saku: " + rataRataUangSaku.toFixed(2);
}
