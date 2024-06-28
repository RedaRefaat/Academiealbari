document.getElementById('dataForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // جمع البيانات من النموذج
    const name = document.getElementById('gname').value;
    const mail = document.getElementById('gmail').value;
    const cname = document.getElementById('cname').value;
    const cage = document.getElementById('cage').value;
    const message = document.getElementById('gmail').value;
    


    // إعداد البيانات في مصفوفة
    const data = [
        ['Name', 'Email' ,'Nom' ,'Age' ,'Message' ],
        [name, mail,cname,cage,message]
    ];

    // إنشاء ورقة عمل
    const worksheet = XLSX.utils.aoa_to_sheet(data);

    // إنشاء مصنف
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

    // حفظ ملف Excel
    XLSX.writeFile(workbook, 'ACADÉMIE ALBARI.xlsx');
});