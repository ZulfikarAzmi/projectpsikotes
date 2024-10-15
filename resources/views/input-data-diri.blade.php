<!-- resources/views/input-data-diri.blade.php -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Input Data Diri</title>
</head>
<body>
    <h1>Input Data Diri</h1>
    <form action="/pengguna/store" method="POST">
        @csrf
        <div>
            <label for="name">Nama Pengguna:</label>
            <input type="text" id="name" name="name" required maxlength="100">
        </div>
        <div>
            <label for="description">Keterangan:</label>
            <input type="text" id="description" name="description" required maxlength="255">
        </div>
        <div>
            <label for="institution">Institusi:</label>
            <input type="text" id="institution" name="institution" required maxlength="100">
        </div>
        <div>
            <label for="exam_date">Tanggal Ujian:</label>
            <input type="date" id="exam_date" name="exam_date" required>
        </div>
        <div>
            <label for="client_id">Client ID:</label>
            <input type="number" id="client_id" name="client_id" required>
        </div>
        <button type="submit">Submit</button>
    </form>
</body>
</html>
