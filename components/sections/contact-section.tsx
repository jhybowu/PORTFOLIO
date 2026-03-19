import { AsciiArt } from "@/components/ascii-art"
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react"

export function ContactSection() {
  return (
    <div className="space-y-4">
      <AsciiArt art="contact" />

      <div className="space-y-6">
        <div className="flex flex-col gap-3">
          <a
            href="mailto:gjibowu@gmail.com"
            className="flex items-center text-sm hover:text-primary transition-colors"
          >
            <Mail className="h-4 w-4 mr-2 text-primary" />
            gjibowu@gmail.com
          </a>

          <a
            href="tel:+2349030470649"
            className="flex items-center text-sm hover:text-primary transition-colors"
          >
            <Phone className="h-4 w-4 mr-2 text-primary" />
            +234 903 047 0649
          </a>

          <div className="flex items-center text-sm">
            <MapPin className="h-4 w-4 mr-2 text-primary" />
            Lagos, Nigeria
          </div>

          <a
            href="https://www.linkedin.com/in/gbenga-jibowu-ab8804144"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm hover:text-primary transition-colors"
          >
            <Linkedin className="h-4 w-4 mr-2 text-primary" />
            linkedin.com/in/gbenga-jibowu-ab8804144
          </a>

          <a
            href="https://github.com/Jhybowu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm hover:text-primary transition-colors"
          >
            <Github className="h-4 w-4 mr-2 text-primary" />
            github.com/Jhybowu
          </a>
        </div>
      </div>
    </div>
  )
}