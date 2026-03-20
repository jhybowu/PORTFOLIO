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
                <p className="font-medium">Certified Network Security Practitioner (CNSP)</p>
                <p className="text-xs text-muted-foreground">SecOps</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <div>
                <p className="font-medium">Certified Cybersecurity Educator Professional (CCEP)</p>
                <p className="text-xs text-muted-foreground">Red Team Leaders · Issued November 2025</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <div>
                <p className="font-medium">Java Tutorial Course</p>
                <p className="text-xs text-muted-foreground">SoloLearn · Issued June 2017 · Certificate #1068-2422196</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <div>
                <p className="font-medium">Jobberman Soft-Skills Training</p>
                <p className="text-xs text-muted-foreground">Jobberman Nigeria · Mastercard Foundation / Young Africa Works · October 2022</p>
              </div>
            </li>
          </ul>
        </div>

      </div>
    </div>
  )
}
