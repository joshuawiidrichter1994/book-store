import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { title, author, price } = req.body;

    try {
      const filePath = path.join(process.cwd(), 'public/data', 'books.json');
      const jsonData = fs.readFileSync(filePath, 'utf-8');
      const books = JSON.parse(jsonData);

      const newBook = { title, author, price: parseFloat(price) };
      books.push(newBook);

      fs.writeFileSync(filePath, JSON.stringify(books, null, 2));

      res.status(201).json({ message: 'Book added successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error adding book' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
