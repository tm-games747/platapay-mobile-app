import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const EWallet = () => {
  const balance = 10000; // Example balance in Philippine Peso
  
  const sampleTransactions = [
    { date: '2023-03-15', description: 'Top-up', amount: 5000 },
    { date: '2023-03-14', description: 'Payment for groceries', amount: -1500 },
    { date: '2023-03-13', description: 'Cash-out', amount: -2000 },
    { date: '2023-03-12', description: 'Top-up', amount: 3000 },
  ];

  const handleTopUp = () => {
    console.log('Top-up functionality to be implemented');
  };

  const handleCashOut = () => {
    console.log('Cash-out functionality to be implemented');
  };

  return (
    <div className="container mx-auto p-4 space-y-6">
      <Card className="bg-primary text-primary-foreground">
        <CardContent className="pt-6">
          <p className="text-lg">Current Balance</p>
          <h2 className="text-4xl font-bold">₱{balance.toLocaleString()}</h2>
        </CardContent>
      </Card>

      <div className="flex gap-4">
        <Button onClick={handleTopUp} className="flex-1">Top-Up</Button>
        <Button onClick={handleCashOut} variant="secondary" className="flex-1">Cash-Out</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Transaction History</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Description</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sampleTransactions.map((transaction, index) => (
                <TableRow key={index}>
                  <TableCell>{transaction.date}</TableCell>
                  <TableCell>{transaction.description}</TableCell>
                  <TableCell className={`text-right ${transaction.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
                    ₱{Math.abs(transaction.amount).toLocaleString()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default EWallet;