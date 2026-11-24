let mahasiswa = [
    {
        id: 1,
        nim: "20250040149",
        nama: "Fauzan Dzulqi Pratama Putra",
        prodi: "Teknik Informatika"
    },
    {
        id: 2,
        nim: "20250040150",
        nama: "Andi Saputra",
        prodi: "Sistem Informasi"
    }
];

const getAll = () => mahasiswa;

const getById = (id) => mahasiswa.find((m) => m.id === id);

const create = (data) => {
    const newId = mahasiswa.length > 0 ? mahasiswa[mahasiswa.length - 1].id + 1 : 1;
    const newMahasiswa = {
        id: newId,
        nim: data.nim,
        nama: data.nama,
        prodi: data.prodi
    };
    mahasiswa.push(newMahasiswa);
    return newMahasiswa;
};

const update = (id, data) => {
    const index = mahasiswa.findIndex((m) => m.id === id);
    if (index === -1) return null;

    mahasiswa[index] = {
        ...mahasiswa[index],
        nim: data.nim || mahasiswa[index].nim,
        nama: data.nama || mahasiswa[index].nama,
        prodi: data.prodi || mahasiswa[index].prodi
    };
    return mahasiswa[index];
};

const remove = (id) => {
    const index = mahasiswa.findIndex((m) => m.id === id);
    if (index === -1) return null;

    const deleted = mahasiswa.splice(index, 1);
    return deleted[0];
};

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
};