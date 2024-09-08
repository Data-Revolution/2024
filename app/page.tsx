"use client";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  PlayIcon,
  TargetIcon,
  RadioIcon,
} from "lucide-react";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable";
import Image from "next/image";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";
import Chat from "@/components/chat";
import Header from "@/components/header";
import { useState } from "react";

export default function VideoApp() {
  const [currentLocation, setLocation] = useState("Katherine");
  const [Score] = useState(960);

  return (
    <div className="flex h-screen flex-col">
      <Header></Header>
      <div className="flex flex-1 overflow-hidden">
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={10}>
            <ScrollArea className="h-full">
              <div className="p-4 space-y-4">
                <h2 className="text-lg font-semibold font-display">
                  Live
                </h2>
                {["Katherine"].map(
                  (_location, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      className="w-full justify-start"
                      onClick={() => setLocation(_location)}
                    >
                      <RadioIcon className="mr-2 h-4 w-4 text-red-600" />
                      {_location}
                    </Button>
                  )
                )}
                <h2 className="text-lg font-semibold font-display">
                  Offline
                </h2>
                {["Darwin", "Nhulunbuy", "Borroloola"].map(
                  (_location, index) => (
                    <Button
                      disabled
                      key={index}
                      variant="ghost"
                      className="w-full justify-start"
                      onClick={() => setLocation(_location)}
                    >
                      <PlayIcon className="mr-2 h-4 w-4" />
                      {_location}
                    </Button>
                  )
                )}
              </div>
            </ScrollArea>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={65}>
            <ScrollArea className="h-full">
              <main className="flex-1 p-4">
                <div className="aspect-video bg-muted">
                  <div className=" mt-4 flex items-center justify-between">
                    <h2 className="text-lg font-semibold ml-2 font-display">
                      Camera Controls
                    </h2>
                    <Button variant="outline" size="sm" className="mr-2">
                      <TargetIcon className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex h-full items-center justify-center">
                    <Image
                      src="https://www.awdcomp.net/bridge.jpg?full"
                      width={1200}
                      height={800}
                      alt="Video placeholder"
                      className="object-cover"
                    ></Image>
                    {/* <PlayIcon className="h-12 w-12 text-muted-foreground" /> */}
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <h1 className="text-2xl font-bold">
                    {currentLocation} - River Cam
                  </h1>
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="outline">Camera Details</Button>
                    </SheetTrigger>
                    <SheetContent className="bg-white">
                      <SheetHeader>
                        <SheetTitle>Camera Details</SheetTitle>
                        <SheetDescription>
                          Key details for this camera
                        </SheetDescription>
                      </SheetHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-2 items-left gap-1">
                          <Label htmlFor="location" className="text-left">
                            Location
                          </Label>
                          <p>{currentLocation}, NT</p>
                        </div>
                        <div className="grid grid-cols-2 items-left gap-4">
                          <Label htmlFor="postcode" className="text-left">
                            Postcode
                          </Label>
                          <p>0850</p>
                        </div>
                        <div className="grid grid-cols-2 items-left gap-4">
                          <Label htmlFor="coord" className="text-left">
                            Coordinates
                          </Label>
                          <p>-14.462242, 132.259308</p>
                        </div>
                      </div>
                      <SheetFooter>
                        <SheetClose asChild>
                          <Button type="submit">Close</Button>
                        </SheetClose>
                      </SheetFooter>
                    </SheetContent>
                  </Sheet>
                </div>
                <p className="mt-2 text-muted-foreground">
                  Live feed from Katherine. If you spot a croc, just click!
                  Croc-Spot rewards users for accurate reports with Croc Points.
                  You can use points to customise your profile with cool skins
                  or even redeem them for physical prizes like tourism activity
                  vouchers in the NT. Maybe you’ll unlock the elusive golden
                  croc—a true badge of honour!
                </p>
                <h3>Visit Katherine!</h3>
                <div className="grid gap-4 py-8">
                  <div className="grid grid-cols-2 items-left gap-1">
                    <div>
                      <h4 className="font-bold">General Service Providers</h4>
                      <ul className="list-disc pl-6">
                        <li>Nitmiluk Visitors Centre</li>
                        <li>Katherine Visitor Information Centre</li>
                      </ul>
                    </div>
                    <div className="grid items-left gap-1">
                    <div>
                      <h4 className="font-bold">Food & Drink Providers</h4>
                      <ul className="list-disc pl-6">
                        <li>Ibis Styles Katherine</li>
                        <li>Riverview Tourist Village</li>
                        <li>Nitmiluk Caravan Park</li>
                      </ul>
                    </div>
                  </div>
                  <div className="grid items-left gap-1">
                    <div>
                      <h4 className="font-bold">Rental Cars</h4>
                      <ul className="list-disc pl-6">
                        <li>Budget Rent a Car Katherine</li>
                        <li>Thrifty Car Rental - Katherine</li>
                      </ul>
                    </div>
                  </div>
                  <div className="grid items-left gap-1">
                    <div>
                      <h4 className="font-bold">Free Wi-Fi Locations</h4>
                      <ul className="list-disc pl-6">
                        <li>Knotts Crossing Resort</li>
                        <li>St Andrews Serviced Apartments</li>
                        <li>Shady Lane Tourist Park</li>
                      </ul>
                    </div>
                  </div>
                  </div>
                  <span className="flex"><p>Learn about Katherine </p><a href="https://territorystories.nt.gov.au/10070/965119" target="_blank" className="underline text-green-600 hover:text-green-800 visited:text-purple-600 pl-1"> here</a></span>
                  <span className="flex"><p>For more information about visiting the NT, visit: </p><a href="https://northernterritory.com" target="_blank" className="underline text-green-600 hover:text-green-800 visited:text-purple-600 pl-1"> northernterritory.com</a></span>
                </div>
              </main>
            </ScrollArea>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel>
            <div className="p-4 space-y-4">
              <h2 className="text-lg font-semibold font-display">Chat</h2>
              <Chat></Chat>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
}
