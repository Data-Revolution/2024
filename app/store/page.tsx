"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "@/components/header"

// Mock data for store items
const storeItems = [
  { id: 1, name: "Uluru Sunrise (Ayers Rock) and Kata Tjuta Half Day Trip", cost: 500, image: "https://cdn.ulurutoursaustralia.com.au/wp-content/uploads/2021/01/4-day-ayers-rock-and-surrounds-rock-to-rock.jpg" },
  { id: 2, name: "Kakadu National Park Scenic Flight, 30 Minutes - Cooinda, NT", cost: 1000, image: "https://www.northaustralianhelicopters.com.au/wp-content/uploads/2024/02/133340_19_lg.jpg" },
  { id: 3, name: "The Ghan - Discounted Experiences", cost: 700, image: "https://adelaideaz.com/sites/adelaideaz/media/images/categories/trains,-trams/tourismaustraliaghan2.jpg" },
  { id: 4, name: "Kuranda Wildlife Experience Deluxe Multi-attraction Pass", cost: 400, image: "https://www.pelago.com/img/products/AU-Australia/kuranda-wildlife-experience-deluxe-multi-attraction-pass/ebdd3a25-7e82-4b59-9b1a-0cd7d63f9b8a_kuranda-wildlife-experience-deluxe-multi-attraction-pass-large.webp" },
  { id: 5, name: "Corroboree Houseboats - 40% off", cost: 200, image: "https://assets.atdw-online.com.au/images/ebf7d88cb7c930dd9e84d824f5f54147.jpeg" },
  { id: 6, name: "Jumping Crocodile Cruise - Darwin", cost: 300, image: "https://www.aatkings.com/assets/banner/_resampled/SetWidth1200-adelaide-river-jumping-crocodile-d7-banner.jpg" },
  { id: 7, name: "Darwin History & Wartime Experience Tour", cost: 400, image: "https://www.pelago.com/img/products/AU-Australia/darwin-history-and-wartime-experience-tour/e2a80a44-9f79-4d59-924a-da1a2bdf2a37_darwin-history-and-wartime-experience-tour-large.webp" },
  { id: 8, name: "Cape Tribulation & Daintree Wilderness", cost: 500, image: "https://www.pelago.com/img/products/AU-Australia/cape-tribulation-daintree-wilderness-tct/4c1ef20e-dfd7-432d-85fc-5e59536db81e_cape-tribulation-daintree-wilderness-tct-large.webp" },

  
]

export default function RedeemStore() {
  const [Score, setScore] = useState(960)
  const [carouselIndex, setCarouselIndex] = useState(0)

  const featuredItems = storeItems.slice(0, 4) // First 4 items are featured
  const regularItems = storeItems.slice(4) // Rest are regular items

  const handleRedeem = (cost: number) => {
    if (Score >= cost) {
      setScore(Score - cost)
      alert("Item redeemed successfully! - Details have been sent to the account email address")
    } else {
      alert("Not enough points to redeem this item.")
    }
  }

  return (
    <div className="flex h-screen flex-col">
    <Header></Header>
    <div className="p-8">

      {/* Featured Items Carousel */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Featured Offers</h2>
        <div className="relative">
          <div className="flex overflow-hidden">
            {featuredItems.map((item, index) => (
              <div
                key={item.id}
                className="w-full flex-shrink-0 transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${carouselIndex * 100}%)` }}
              >
                <Card>
                  <CardHeader className="mx-2">
                    <CardTitle>{item.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <Image src={item.image} alt={item.name} width={200} height={200} className="w-full h-48 object-cover" />
                  </CardContent>
                  <CardFooter className="flex justify-between mx-2 pt-4">
                    <span className="text-lg font-semibold">{item.cost} points</span>
                    <Button onClick={() => handleRedeem(item.cost)} disabled={Score < item.cost}>{Score < item.cost ? `Missing Score` : 'Redeem'}</Button>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white border-white"
            onClick={() => setCarouselIndex((prev) => (prev > 0 ? prev - 1 : featuredItems.length - 1))}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white border-white"
            onClick={() => setCarouselIndex((prev) => (prev < featuredItems.length - 1 ? prev + 1 : 0))}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Regular Items Grid */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">All Offers</h2>
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
    </div>
  )
}