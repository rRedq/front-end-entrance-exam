import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const downloadPdf = (elem: HTMLElement, name: string) => {
  html2canvas(elem).then((canvas) => {
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF();
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save(`${name}.pdf`);
  });
};
