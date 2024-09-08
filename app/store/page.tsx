"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "@/components/header"

// Mock data for store items
const storeItems = [
  { id: 1, name: "Premium Skin", cost: 500, image: "/placeholder.svg?height=200&width=200" },
  { id: 2, name: "Rare Emote", cost: 300, image: "/placeholder.svg?height=200&width=200" },
  { id: 3, name: "Exclusive Avatar", cost: 1000, image: "/placeholder.svg?height=200&width=200" },
  { id: 4, name: "Weapon Charm", cost: 200, image: "/placeholder.svg?height=200&width=200" },
  { id: 5, name: "Character Outfit", cost: 800, image: "/placeholder.svg?height=200&width=200" },
  { id: 6, name: "Loading Screen", cost: 150, image: "/placeholder.svg?height=200&width=200" },
  { id: 7, name: "Music Pack", cost: 400, image: "/placeholder.svg?height=200&width=200" },
  { id: 8, name: "Weapon Skin", cost: 600, image: "/placeholder.svg?height=200&width=200" },
]

export default function RedeemStore() {
  const [score, setScore] = useState(1500) // Initial score
  const [carouselIndex, setCarouselIndex] = useState(0)

  const featuredItems = storeItems.slice(0, 4) // First 4 items are featured
  const regularItems = storeItems.slice(4) // Rest are regular items

  const handleRedeem = (cost: number) => {
    if (score >= cost) {
      setScore(score - cost)
      alert("Item redeemed successfully!")
    } else {
      alert("Not enough points to redeem this item.")
    }
  }

  return (
    <div className="flex h-screen flex-col">
    <Header></Header>

      {/* Featured Items Carousel */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Featured Items</h2>
        <div className="relative">
          <div className="flex overflow-hidden">
            {featuredItems.map((item, index) => (
              <div
                key={item.id}
                className="w-full flex-shrink-0 transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${carouselIndex * 100}%)` }}
              >
                <Card className="mx-2">
                  <CardHeader>
                    <CardTitle>{item.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Image src={item.image} alt={item.name} width={200} height={200} className="w-full h-48 object-cover" />
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <span className="text-lg font-semibold">{item.cost} points</span>
                    <Button onClick={() => handleRedeem(item.cost)}>Redeem</Button>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 left-2 transform -translate-y-1/2"
            onClick={() => setCarouselIndex((prev) => (prev > 0 ? prev - 1 : featuredItems.length - 1))}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 right-2 transform -translate-y-1/2"
            onClick={() => setCarouselIndex((prev) => (prev < featuredItems.length - 1 ? prev + 1 : 0))}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Regular Items Grid */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Regular Items</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {regularItems.map((item) => (
            <Card key={item.id}>
              <CardHeader>
                <CardTitle>{item.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <Image src={item.image} alt={item.name} width={200} height={200} className="w-full h-48 object-cover" />
              </CardContent>
              <CardFooter className="flex justify-between">
                <span className="text-lg font-semibold">{item.cost} points</span>
                <Button onClick={() => handleRedeem(item.cost)}>Redeem</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}