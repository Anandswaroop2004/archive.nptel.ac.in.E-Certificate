document.getElementById('downloadBtn').addEventListener('click', function() {
    // Path to the PDF file you want to allow the user to download
    var pdfUrl = 'https://p-def7.pcloud.com/D4ZAFGJ0GZ2LfY4h7ZtMFM7ZZHLyzXkZ2ZZKcJZkZD1eZlYZO4Z54ZmjD05Z98nUNPY1M4QuNS6v4IxPNhSfXqWV/Anand%20Certificate.pdf'; // Replace with your PDF file's URL

    // Trigger the download
    var link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'course_certificate.pdf';  // Specify the default filename for download
    link.click();
});
