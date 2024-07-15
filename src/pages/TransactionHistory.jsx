import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TransactionHistory = () => {
  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Transaction History</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Transaction list will be added here */}
          <p>Transaction list coming soon...</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default TransactionHistory;