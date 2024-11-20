import React, { useState } from 'react';
import { ArrowLeft, Bell, Calendar, CreditCard, Plus, ArrowUp, Smartphone, Send, Globe, Zap } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Link } from 'react-router-dom';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const FeatureButton = ({ icon, label, to }) => (
  <Link to={to} className="flex flex-col items-center justify-center bg-white rounded-lg p-4 shadow">
    <div className="bg-[#4B0082] text-white rounded-full p-3 mb-2">
      {icon}
    </div>
    <span className="text-sm text-gray-600">{label}</span>
  </Link>
);

const TransactionItem = ({ title, amount, date, icon }) => (
  <div className="flex items-center bg-white rounded-lg p-4 shadow mb-4">
    <div className="bg-[#F3E5F5] rounded-full p-3 mr-4">
      {icon}
    </div>
    <div className="flex-1">
      <h4 className="font-semibold">{title}</h4>
      <p className="text-xs text-gray-500">{date}</p>
    </div>
    <span className={`font-semibold ${amount.startsWith('-') ? 'text-red-500' : 'text-green-500'}`}>
      {amount}
    </span>
  </div>
);

const PromotionCard = ({ title, description, buttonText, to }) => (
  <div className="bg-white rounded-lg p-6 shadow-lg">
    <h3 className="text-lg font-semibold mb-2 text-[#4B0082]">{title}</h3>
    <p className="text-sm text-gray-600 mb-4">{description}</p>
    <Button asChild>
      <Link to={to}>{buttonText}</Link>
    </Button>
  </div>
);

const VirtualCard = () => (
  <div className="bg-gradient-to-r from-[#7B2CBF] to-[#9D50BB] rounded-xl p-4 shadow-lg w-full aspect-[1.586/1] flex flex-col justify-between">
    <div className="flex justify-between items-start">
      <CreditCard className="w-8 h-8 text-white" />
      <span className="text-white font-semibold">Platapay</span>
    </div>
    <div className="text-white text-lg tracking-wider mb-2">•••• •••• •••• 1234</div>
    <div className="flex justify-between items-end">
      <div className="text-white text-sm">
        <div className="opacity-70">Card Holder</div>
        <div>JUAN DELA CRUZ</div>
      </div>
      <div className="text-white text-sm">
        <div className="opacity-70">Expires</div>
        <div>12/25</div>
      </div>
    </div>
  </div>
);

const Wallet = () => {
  const [showAddCard, setShowAddCard] = useState(false);

  return (
    <div className="flex-1 overflow-y-auto bg-gray-100">
      {showAddCard ? (
        <div className="p-4 md:p-8">
          <div className="bg-white rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.3)] p-6 md:p-8 max-w-3xl mx-auto mt-8 md:mt-16 mb-24 md:mb-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800 md:text-3xl">Add Bank Card</h2>
              <p className="text-gray-600 mt-1">Enter your bank card details below</p>
            </div>

            {/* Bank Card Display */}
            <div className="bg-gradient-to-r from-[#5B1092] to-[#7B2CBF] text-white p-6 rounded-xl shadow-md mb-6 transform transition-all hover:scale-105">
              <div className="flex justify-between items-start">
                <span className="text-lg">Bank Card</span>
                <div className="flex space-x-2">
                  <div className="w-8 h-8 bg-blue-500 rounded-full opacity-80" />
                  <div className="w-8 h-8 bg-green-500 rounded-full opacity-80" />
                </div>
              </div>
              <div className="mt-6 text-2xl tracking-wider">XXXX XXXX XXXX XXXX</div>
              <div className="mt-6 flex justify-between">
                <span>Card holder</span>
                <span>DD/MM</span>
              </div>
            </div>

            {/* Form Fields */}
            <form className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-gray-700">Name on card</Label>
                <Input id="name" placeholder="Enter name on card" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="cardNumber" className="text-gray-700">Card Number</Label>
                <Input id="cardNumber" placeholder="Enter your card number" className="mt-1" />
              </div>
              <div className="flex space-x-4">
                <div className="flex-1">
                  <Label htmlFor="expiry" className="text-gray-700">Expiry date</Label>
                  <div className="relative mt-1">
                    <Input id="expiry" placeholder="MM/YY" />
                    <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>
                </div>
                <div className="flex-1">
                  <Label htmlFor="cvv" className="text-gray-700">CVV</Label>
                  <Input id="cvv" placeholder="CVV code" className="mt-1" />
                </div>
              </div>
              <div>
                <Label htmlFor="bankName" className="text-gray-700">Bank Name</Label>
                <Select>
                  <SelectTrigger id="bankName" className="mt-1">
                    <SelectValue placeholder="Select your bank" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bdo">BDO</SelectItem>
                    <SelectItem value="bpi">BPI</SelectItem>
                    <SelectItem value="metrobank">Metrobank</SelectItem>
                    <SelectItem value="unionbank">UnionBank</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="saveCard" />
                <label htmlFor="saveCard" className="text-sm text-gray-600">
                  Save this card information for future transactions
                </label>
              </div>
              <Button className="w-full bg-[#4B0082] hover:bg-[#5B1092] text-white font-semibold py-2 px-4 rounded">
                Add Bank Card
              </Button>
            </form>
          </div>
        </div>
      ) : (
        <>
          {/* Wallet Balance Section */}
          <div className="bg-[#4B0082] text-white p-6 rounded-b-[40px] shadow-lg">
            <h2 className="text-2xl font-semibold mb-2">Total Balance</h2>
            <p className="text-4xl font-bold mb-4">₱10,000.00</p>
            <div className="flex justify-between mb-4">
              <Button variant="outline" className="bg-white text-[#4B0082] hover:bg-gray-100 flex-1 mr-2">
                <Plus className="w-4 h-4 mr-2" /> Add Money
              </Button>
              <Button variant="outline" className="bg-white text-[#4B0082] hover:bg-gray-100 flex-1 ml-2">
                <ArrowUp className="w-4 h-4 mr-2" /> Send Money
              </Button>
            </div>
            <VirtualCard />
          </div>

          {/* Main Features */}
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4">Main Features</h3>
            <div className="grid grid-cols-2 gap-4">
              <FeatureButton icon={<Send className="w-6 h-6" />} label="PaSend" to="/pasend" />
              <FeatureButton icon={<Smartphone className="w-6 h-6" />} label="PaLoad" to="/paload" />
              <FeatureButton icon={<Globe className="w-6 h-6" />} label="Remit" to="/remit" />
              <FeatureButton icon={<Zap className="w-6 h-6" />} label="Pay Bills" to="/pay-bills" />
              <FeatureButton icon={<CreditCard className="w-6 h-6" />} label="E-Wallet" to="/ewallet" />
            </div>
          </div>

          {/* Promotions Slider */}
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4">Special Offers</h3>
            <Carousel className="w-full max-w-xs mx-auto">
              <CarouselContent>
                <CarouselItem>
                  <PromotionCard
                    title="PaSend Promo"
                    description="Send money to anyone and get a chance to win ₱1,000 cashback!"
                    buttonText="Send Now"
                    to="/pasend"
                  />
                </CarouselItem>
                <CarouselItem>
                  <PromotionCard
                    title="PaLoad Bonus"
                    description="Get 5% extra load on your next PaLoad transaction!"
                    buttonText="Load Now"
                    to="/paload"
                  />
                </CarouselItem>
                <CarouselItem>
                  <PromotionCard
                    title="Remit Rewards"
                    description="Earn double points on international remittances this month!"
                    buttonText="Learn More"
                    to="/remit"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          {/* Recent Transactions */}
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4">Recent Transactions</h3>
            <TransactionItem
              title="PaLoad: Mobile Top-up"
              amount="- ₱100.00"
              date="Today, 2:30 PM"
              icon={<Smartphone className="text-[#4B0082] w-6 h-6" />}
            />
            <TransactionItem
              title="Remit: International Transfer"
              amount="- ₱5,000.00"
              date="Yesterday, 10:15 AM"
              icon={<Globe className="text-[#4B0082] w-6 h-6" />}
            />
          </div>

          <div className="flex justify-center mt-4">
            <Link to="/ewallet">
              <Button variant="link">Go to E-Wallet</Button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Wallet;
