import { AsciiArt } from "@/components/ascii-art"

export function EducationSection() {
  return (
    <div className="space-y-4">
      <AsciiArt art="education" />
      <div className="space-y-6">
        {/* AltSchool */}
        <div className="p-3 border border-primary/20 rounded bg-primary/5">
          <h3 className="text-primary font-bold">AltSchool Africa</h3>
          <p className="text-sm">Diploma in Cybersecurity (SOC & Security Engineering)</p>
          <p className="text-xs text-muted-foreground">Completed: March 2026</p>
          <div className="mt-2">
            <h4 className="text-sm font-semibold">Key Areas:</h4>
            <ul className="text-xs mt-1 space-y-1 list-disc pl-4">
              <li>Security Operations Center (SOC) & SIEM</li>
              <li>Threat Detection & Incident Response</li>
              <li>API & Microservices Security</li>
              <li>Enterprise Security Architecture</li>
              <li>Threat Intelligence & Log Analysis</li>
            </ul>
          </div>
        </div>

        {/* FUTA */}
        <div className="p-3 border border-primary/20 rounded bg-primary/5">
          <h3 className="text-primary font-bold">Federal University of Technology, Akure</h3>
          <p className="text-sm">B.Tech – Metallurgical & Materials Engineering</p>
          <p className="text-xs text-muted-foreground">Graduated: 2024</p>
        </div>

        {/* Yabatech */}
        <div className="p-3 border border-primary/20 rounded bg-primary/5">
          <h3 className="text-primary font-bold">Yaba College of Technology, Lagos</h3>
          <p className="text-sm">National Diploma (OND) – Computer Engineering</p>
          <p className="text-xs text-muted-foreground">Graduated: 2018</p>
        </div>

        {/* Previous Education */}
        <div className="p-3 border border-primary/20 rounded bg-primary/5">
          <h3 className="text-primary font-bold">Nowa Secondary School</h3>
          <p className="text-sm">Senior Secondary School Certificate</p>
          <p className="text-xs text-muted-foreground">Completed: 2015</p>
          <div className="mt-2">
            <h4 className="text-sm font-semibold">Relevant Focus:</h4>
            <ul className="text-xs mt-1 space-y-1 list-disc pl-4">
              <li>Sciences & Mathematics</li>
              <li>Basic Computer Studies</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}