import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const HelpSupport = () => {
  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Help and Support</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>How do I create an account?</AccordionTrigger>
              <AccordionContent>
                To create an account, click on the "Register" button in the top right corner of the page. Fill out the required information and submit the form.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How can I reset my password?</AccordionTrigger>
              <AccordionContent>
                If you've forgotten your password, click on the "Login" button and then select "Forgot Password". Follow the instructions sent to your email to reset your password.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>How do I contact customer support?</AccordionTrigger>
              <AccordionContent>
                You can contact our customer support team by emailing support@platapay.com or by calling our toll-free number at 1-800-PLATA-PAY.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
};

export default HelpSupport;