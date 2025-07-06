import { z } from 'zod';

export const BookValidator = z.object({
  title: z.string({ message: 'A book title is required.' }).min(1),
  author: z.string({ message: "Author's name is required." }).min(1),
  genre: z.enum(
    ['FICTION', 'NON_FICTION', 'SCIENCE', 'HISTORY', 'BIOGRAPHY', 'FANTASY'],
    { message: 'Invalid genre.' }
  ),
  isbn: z.string({ message: 'ISBN is required.' }).min(1),
  description: z.string().optional(),
  copies: z.coerce
    .number({ message: 'Number of copies is required.' })
    .nonnegative('Number of copies must be a non-negative integer.'),
  available: z.boolean().optional().default(true),
});

export const UpdateBookValidator = BookValidator.partial();

export const BookResponseValidator = BookValidator.extend({
  _id: z.string(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
  _v: z.number(),
});

export const UpdateBookValidatorWithID = UpdateBookValidator.extend({
  _id: z.string(),
});

export type BookResponse = z.infer<typeof BookResponseValidator>;
