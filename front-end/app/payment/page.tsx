'use client';

import {CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import styled from "styled-components"
import Image from 'next/image';
import backgroundImage from '@/public/retro-living-room-interior-design.jpg'; 

export default function Component() {
  return (
    <Container>
      <ImageWrapper>
        <StyledImage src={backgroundImage} alt="Background Image" layout="fill" objectFit="cover" />
      </ImageWrapper>
      <Card className="card">
        <CardHeader>
          <CardTitle>Razorpay Payment</CardTitle>
          <CardDescription>Complete your payment securely with Razorpay.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="card-number">Card Number</Label>
            <Input id="card-number" placeholder="4111 1111 1111 1111" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="expiry">Expiry Date</Label>
              <Input id="expiry" placeholder="MM/YY" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cvv">CVV</Label>
              <Input id="cvv" placeholder="123" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="amount">Amount</Label>
            <Input id="amount" type="number" placeholder="100.00" />
          </div>
        </CardContent>
        <CardFooter>
          { <Button
            onClick={() => {
              const options = {
                key: "rzp_test_PAf5eWCL0oteif",
                amount: "1000",
                currency: "INR",
                name: "Odoo",
                description: "Test Transaction",
                image: "",
                order_id: "order_12345",
                handler: function (response) {
                  alert("Payment successful!")
                },
                prefill: {
                  name: "Furniture-Rent",
                  email: "vaibhavkumawat21318@gmail.com",
                  contact: "7016563416",
                },
                notes: {
                  address: "Razorpay Corporate Office",
                },
                theme: {
                  color: "#3399cc",
                },
              }
              const rzp1 = new window.Razorpay(options)
              rzp1.open()
            }}
            className="w-full"
          >
            Pay
          </Button>}
        </CardFooter>
      </Card>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
  background-color: transparent
`;

const ImageWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const Card = styled.div`
  background: transparent;
  border-radius: 30px;
  padding: 20px;
  z-index: 1;
  width: 100%;
  max-width: 400px;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.8rem;
  border: none;
  border-radius: 30px;
  background: white;
  color: #0070f3;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #282c34;
  }
`;