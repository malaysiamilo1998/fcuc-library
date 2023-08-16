export type book = {
  id: number
  dueDate: string
  bookName: string
  bookDesc: string
  bookStatus:
    | 'Checked Out'
    | 'Due for Return'
    | 'Currently Borrowed'
    | 'on Shelf'
    | 'Returned'
  image: string
}
