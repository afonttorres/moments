export const printUtil = {
    print(elementId) {
        let printElement = document.getElementById(elementId);
        var printWindow = window.open('', 'PRINT');
        printWindow.document.write(document.documentElement.innerHTML);
        setTimeout(() => { // Needed for large documents
            printWindow.document.body.style.margin = '0 0';
            printWindow.document.body.style.height = window.innerHeight;
            printWindow.document.body.style.width = window.innerWidth;
            printWindow.document.body.innerHTML = printElement.outerHTML;
            printWindow.document.close(); // necessary for IE >= 10
            printWindow.focus(); // necessary for IE >= 10*/
            printWindow.print();
            printWindow.close();
        }, 1000)
    }
}