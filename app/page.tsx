"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
    HomeIcon,
    CompassIcon,
    PlayIcon,
    UserIcon,
    LogOutIcon,
    TargetIcon,
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
import { useState } from "react";

export default function VideoApp() {
    const [currentLocation, setLocation] = useState("Katherine");

    return (
        <div className="flex h-screen flex-col">
            <header className="flex h-16 items-center justify-between border-b px-4 bg-lime-700">
                <div className="flex items-center space-x-4">
                    <a href="/" className="inline-flex text-2xl font-display text-white">
                        <Image
                            src="/images/croc-spot-circle.png"
                            width={32}
                            height={32}
                            alt="Crocodile Logo"
                        />
                        Croc-Spot
                    </a>
                    <nav className="hidden md:flex space-x-4">
                        <a href="/">
                            <Button variant="ghost" size="sm" className="text-muted-foreground text-white font-display">
                                <HomeIcon className="mr-2 h-4 w-4 " />
                                Home
                            </Button>
                        </a>
                        <a href="/map">
                            <Button variant="ghost" size="sm" className="text-muted-foreground text-white font-display">
                                <CompassIcon className="mr-2 h-4 w-4" />
                                Explore
                            </Button>
                        </a>
                    </nav>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <div className="text-sm font-medium text-white font-display">
                            Points: <span className="text-primary text-white">1250</span>
                        </div>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="ghost"
                                    className="relative h-8 w-8 rounded-full"
                                >
                                    <Avatar className="h-8 w-8">
                                        <AvatarImage
                                            src="/placeholder.svg?height=32&width=32"
                                            alt="@user"
                                        />
                                        <AvatarFallback>U</AvatarFallback>
                                    </Avatar>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56" align="end" forceMount>
                                <DropdownMenuLabel className="font-normal">
                                    <div className="flex flex-col space-y-1">
                                        <p className="text-sm font-medium leading-none">
                                            user@example.com
                                        </p>
                                        <p className="text-xs leading-none text-muted-foreground">
                                            User Account
                                        </p>
                                    </div>
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <Link href="/account">
                                    <DropdownMenuItem>
                                        <UserIcon className="mr-2 h-4 w-4" />
                                        <span>Profile</span>
                                    </DropdownMenuItem>
                                </Link>
                                <DropdownMenuItem>
                                    <LogOutIcon className="mr-2 h-4 w-4" />
                                    <span>Log out</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </header>
            <div className="flex flex-1 overflow-hidden">
                <ResizablePanelGroup direction="horizontal">
                    <ResizablePanel defaultSize={10}>
                        <ScrollArea className="h-full">
                            <div className="p-4 space-y-4">
                                <h2 className="text-lg font-semibold font-display">Live feeds</h2>
                                {["Katherine", "Darwin", "Nhulunbuy", "Borroloola"].map((_location, index) => (
                                    < Button
                                        key={index}
                                        variant="ghost"
                                        className="w-full justify-start"
                                        onClick={() => setLocation(_location)}
                                    >
                                        <PlayIcon className="mr-2 h-4 w-4" />
                                        {_location}
                                    </Button>
                                ))}
                            </div>
                        </ScrollArea>
                    </ResizablePanel>
                    <ResizableHandle />
                    <ResizablePanel defaultSize={65}>
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
                                <h1 className="text-2xl font-bold">{currentLocation} - River Cam</h1>
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
                                            <div className="grid grid-cols-2 items-left gap-4">
                                                <Label htmlFor="coord" className="text-left">
                                                    Recent Sightings
                                                </Label>
                                                <p></p>
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
                                Video description goes here. This is a placeholder for the
                                video's description.
                            </p>
                        </main>
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
        </div >
    );
}
