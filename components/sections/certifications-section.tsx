import { AsciiArt } from "@/components/ascii-art"
import { Award } from "lucide-react"

export function CertificationsSection() {
  return (
    <div className="space-y-4">
      <AsciiArt art="certifications" />

      <div className="space-y-6">
        <div>
          <h3 className="text-primary font-bold mb-2 flex items-center">
            <Award className="h-4 w-4 mr-2" />
            Certifications
          </h3>
          <ul className="space-y-2 pl-6">
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <div>
                <p className="font-medium">Cybersecurity & Software Engineering Expert – Job Simulation Certifications</p>
                <p className="text-xs text-muted-foreground">AIG, Goldman Sachs, Mastercard, Tata Group</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <div>
                <p className="font-medium">Certified Network Security Practitioner (CNSP)</p>
                <p className="text-xs text-muted-foreground">SecOps</p>
              </div>
            </li>
          </ul>
        </div>

      </div>
    </div>
  )
}
