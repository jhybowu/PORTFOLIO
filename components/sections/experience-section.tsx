import { AsciiArt } from "@/components/ascii-art"

export function ExperienceSection() {
  return (
    <div className="space-y-4">
      <AsciiArt art="experience" />

      <div className="space-y-6">
        {/* AltSchool Program */}
        <div className="relative pl-5 border-l border-primary/30">
          <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-1" />

          <div className="mb-1">
            <h3 className="text-primary font-bold">
              Cybersecurity Program Graduate (SOC & Security Engineering)
            </h3>
            <p className="text-xs text-muted-foreground">
              AltSchool Africa | February 2025 – March 2026
            </p>
          </div>

          <ul className="text-sm space-y-1 list-disc pl-4">
            <li>
              Designed and deployed a functional Security Operations Center (SOC)
              using Elastic SIEM for real-time monitoring and alerting
            </li>
            <li>
              Ingested, analyzed, and correlated logs from cloud and endpoint
              systems to detect suspicious activity
            </li>
            <li>
              Performed incident detection, triage, and response using structured
              SOC workflows and threat intelligence
            </li>
            <li>
              Applied security principles in API protection, microservices
              security, and enterprise security architecture
            </li>
          </ul>
        </div>

        {/* Hands-on Projects */}
        <div className="relative pl-5 border-l border-primary/30">
          <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-1" />

          <div className="mb-1">
            <h3 className="text-primary font-bold">
              Cybersecurity Projects & Practical Labs
            </h3>
            <p className="text-xs text-muted-foreground">
              Independent & Academic Work | 2025 – 2026
            </p>
          </div>

          <ul className="text-sm space-y-1 list-disc pl-4">
            <li>
              Investigated SSH brute-force attack scenarios and identified key
              Indicators of Compromise (IoCs)
            </li>
            <li>
              Conducted advanced threat detection and analysis using SIEM tools
              and log correlation techniques
            </li>
            <li>
              Designed secure microservices-based applications with threat
              modeling and security testing
            </li>
            <li>
              Developed incident response strategies and documented findings in
              structured security reports
            </li>
          </ul>
        </div>

        {/* Additional Technical Experience */}
        <div className="relative pl-5 border-l border-primary/30">
          <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-1" />

          <div className="mb-1">
            <h3 className="text-primary font-bold">
              Technical Skills Application & Development
            </h3>
            <p className="text-xs text-muted-foreground">
              Personal & Collaborative Projects
            </p>
          </div>

          <ul className="text-sm space-y-1 list-disc pl-4">
            <li>
              Applied programming and scripting skills (Python, Bash, PowerShell)
              to automate tasks and analyze security data
            </li>
            <li>
              Used Git and modern development tools in building and managing
              technical projects
            </li>
            <li>
              Combined cybersecurity knowledge with software and system-level
              understanding to solve real-world problems
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}