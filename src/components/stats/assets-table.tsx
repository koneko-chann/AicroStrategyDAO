import Image from 'next/image'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

const data = [
  {
    token: 'FDREAM',
    image: '/aistr.jpeg',
    balance: '20000000.0000',
    price: '$0.01',
    totalValue: '$240400.00'
  },
  {
    token: 'INV002',
    image: '/aistr.jpeg',
    balance: 'Pending',
    price: '$150.00',
    totalValue: 'PayPal'
  },
  {
    token: 'INV003',
    image: '/aistr.jpeg',
    balance: 'Unpaid',
    price: '$350.00',
    totalValue: 'Bank Transfer'
  },
  {
    token: 'FDREAX',
    image: '/aistr.jpeg',
    balance: '20000000.0000',
    price: '$0.01',
    totalValue: '$240400.00'
  },
  {
    token: 'INV00Y',
    image: '/aistr.jpeg',
    balance: 'Pending',
    price: '$150.00',
    totalValue: 'PayPal'
  },
  {
    token: 'INV00Z',
    image: '/aistr.jpeg',
    balance: 'Unpaid',
    price: '$350.00',
    totalValue: 'Bank Transfer'
  }
]

export function AssetsTable() {
  return (
    <>
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-gray-800">Token Balances</h3>
        <h3 className="text-xl font-bold text-gray-800">Net Asset Value $0.00</h3>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Token</TableHead>
            <TableHead>Balance</TableHead>
            <TableHead>Price (USD) </TableHead>
            <TableHead>Total Value (USD)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((token) => (
            <TableRow key={token.token}>
              <TableCell className="font-medium">
                <div className="flex items-center gap-1">
                  <Image
                    src={token.image}
                    width={100}
                    height={100}
                    alt={token.token}
                    className="aspect-square w-6 rounded-full"
                  />
                  <p className="font-medium">{token.token}</p>
                </div>
              </TableCell>
              <TableCell>{token.balance}</TableCell>
              <TableCell>{token.totalValue}</TableCell>
              <TableCell>{token.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}
