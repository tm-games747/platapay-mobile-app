import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useQuery } from '@tanstack/react-query';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from 'react-router-dom';

// Mock API function to fetch balance
const fetchBalance = async () => {
  // Simulating API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  return 10000; // Hardcoded balance for now
};

const EWallet = () => {
  const { data: balance, isLoading, error } = useQuery({
    queryKey: ['balance'],
    queryFn: fetchBalance
  });
  
  const [topUpAmount, setTopUpAmount] = useState('');
  const [paymentOption, setPaymentOption] = useState('');
  const [paymentAmount, setPaymentAmount] = useState('');

  const sampleTransactions = [
    { date: '2023-03-15', description: 'Top-up', amount: 5000 },
    { date: '2023-03-14', description: 'Payment for groceries', amount: -1500 },
    { date: '2023-03-13', description: 'Cash-out', amount: -2000 },
    { date: '2023-03-12', description: 'Top-up', amount: 3000 },
  ];

  const handleTopUp = () => {
    console.log('Top-up amount:', topUpAmount);
    // TODO: Implement actual top-up logic
  };

  const handlePayment = () => {
    console.log('Payment option:', paymentOption);
    console.log('Payment amount:', paymentAmount);
    // TODO: Implement actual payment logic
  };

  if (isLoading) return <div>Loading balance...</div>;
  if (error) return <div>Error fetching balance: {error.message}</div>;

  return (
    <div className="container mx-auto p-4 space-y-6">
      <Card className="bg-primary text-primary-foreground">
        <CardHeader>
          <CardTitle>Your Balance</CardTitle>
        </CardHeader>
        <CardContent>
          <h2 className="text-4xl font-bold">₱{balance.toLocaleString()}</h2>
        </CardContent>
      </Card>

      <div className="flex gap-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="flex-1">Top-Up</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Top-Up Your Wallet</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="amount" className="text-right">
                  Amount
                </Label>
                <Input
                  id="amount"
                  type="number"
                  className="col-span-3"
                  value={topUpAmount}
                  onChange={(e) => setTopUpAmount(e.target.value)}
                />
              </div>
            </div>
            <Button onClick={handleTopUp}>Confirm Top-Up</Button>
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="secondary" className="flex-1">Pay</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Make a Payment</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="paymentOption" className="text-right">
                  Payment Option
                </Label>
                <Select onValueChange={setPaymentOption} value={paymentOption}>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select payment option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bills">Pay Bills</SelectItem>
                    <SelectItem value="transfer">Transfer Money</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="paymentAmount" className="text-right">
                  Amount
                </Label>
                <Input
                  id="paymentAmount"
                  type="number"
                  className="col-span-3"
                  value={paymentAmount}
                  onChange={(e) => setPaymentAmount(e.target.value)}
                />
              </div>
            </div>
            <Button onClick={handlePayment}>Confirm Payment</Button>
          </DialogContent>
        </Dialog>
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

      <div className="flex justify-center mt-4">
        <Link to="/wallet">
          <Button variant="link">Go to Wallet</Button>
        </Link>
      </div>
    </div>
  );
};

export default EWallet;
