export interface PlagiarismReportDto {
  requesterId?: number
  academicPaperId?: number
  externalId?: number
  plagiarism?: number
  originality?: number
  pdfReport?: string
  sources?: any
  webhookJson?: any
}
