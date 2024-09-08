import { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

type Message = {
  id: number
  user: string
  avatar: string
  content: string
}

export default function Component() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, user: "John Doe", avatar: "/placeholder.svg?height=32&width=32", content: "Hello everyone!" },
    { id: 2, user: "Mr Sharmarma", avatar: "/placeholder.svg?height=32&width=32", content: "He's a slippery one" },
    { id: 3, user: "Jane Doe", avatar: "/placeholder.svg?height=32&width=32", content: "Can't wait for the next sighting!" },
  ])
  const [newMessage, setNewMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newMessage.trim()) {
      const newMsg: Message = {
        id: messages.length + 1,
        user: "You",
        avatar: "/placeholder.svg?height=32&width=32",
        content: newMessage.trim()
      }
      setMessages([...messages, newMsg])
      setNewMessage("")
    }
  }

  return (
    <div className="w-full max-w-sm mx-auto bg-background border rounded-lg shadow-lg flex flex-col">
      <ScrollArea className="flex-grow p-4 h-[500px]">
        <div className="space-y-4">
          {messages.map((message) => (
            <div key={message.id} className="flex items-start space-x-2">
              <Avatar className="w-8 h-8">
                <AvatarImage src={message.avatar} alt={message.user} />
                <AvatarFallback>{message.user[0]}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">{message.user}</p>
                <p className="text-sm text-muted-foreground">{message.content}</p>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
      <form onSubmit={handleSubmit} className="p-4 border-t">
        <div className="flex space-x-2">
          <Input
            type="text"
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="flex-grow"
          />
          <Button type="submit">Send</Button>
        </div>
      </form>
    </div>
  )
}