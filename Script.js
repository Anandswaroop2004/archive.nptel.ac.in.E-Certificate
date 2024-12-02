document.getElementById('downloadBtn').addEventListener('click', function() {
    // Path to the PDF file you want to allow the user to download
    var pdfUrl = 'https://p-def6.pcloud.com/D4ZwH7H0GZ1rvh4h7ZtMFM7ZZQKIHXkZ2ZZeUHZkZw57pZBLZCYZa4ZdBD05Z929lL6lPJeycgxXNxeVhhzL9WdvX/AnansSw%20Certificate.PDF'; // Replace with your PDF file's URL

    // Trigger the download
    var link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'course_certificate.pdf';  // Specify the default filename for download
    link.click();
});