import z from 'zod';

export const BorrowValidator = z.object({
  book: z.string(),
  quantity: z.coerce.number().positive('Quantity must be a positive integer.'),
  dueDate: z.string().datetime(),
});

export type BorrowResponse = z.infer<typeof BorrowValidator>

export interface BorrowSummaryResponse {
  totalQuantity: number;
  book: {
    title: string;
    isbn: string;
  }
}