import { AsciiArt } from "@/components/ascii-art"

export function ProjectsSection() {
  return (
    <div className="space-y-4">
      <AsciiArt art="projects" />

      <div className="space-y-6">
        <div className="p-3 border border-primary/20 rounded bg-primary/5">
          <h3 className="text-primary font-bold">SOC Monitoring Lab (Wazuh + ELK)</h3>
          <pre className="text-xs my-2 text-muted-foreground">
            {`
  +-------------+     +----------------+     +----------------+ 
  | Log Sources |---->| Log Collection |---->| Real-Time Alerts|
  | (Endpoints) |     | & Processing   |     | & Monitoring    |
  +-------------+     +----------------+     +----------------+ 
        |                    |                      |
        |                    v                      |
        |             +--------------+              |
        +------------>| SIEM System  |<-------------+
                      | (Wazuh + ELK)|
                      +--------------+
                             |
                             v
                      +---------------+
                      | Threat        |
                      | Detection     |
                      +---------------+
`}
          </pre>
          <p className="text-sm mb-2">
            Deployed and configured a Security Operations Center (SOC) environment using Wazuh SIEM and Elastic Stack for real-time log analysis and threat detection.
          </p>
          <p className="text-xs text-muted-foreground mb-2">
            Technologies: Wazuh, Elastic Stack (ELK), SIEM, Linux
          </p>
        </div>

        <div className="p-3 border border-primary/20 rounded bg-primary/5">
          <h3 className="text-primary font-bold">Network Traffic Analysis Lab</h3>
          <pre className="text-xs my-2 text-muted-foreground">
            {`
  +-------------+     +----------------+     +----------------+
  | Network     |---->| Packet Capture |---->| Traffic         |
  | Traffic     |     | (Wireshark)    |     | Analysis        |
  +-------------+     +----------------+     +----------------+
        |                    |                      |
        |                    v                      |
        |             +--------------+              |
        +------------>| Investigation |<-------------+
                      | & Detection   |
                      +--------------+
                             |
                             v
                      +---------------+
                      | Threat        |
                      | Identification|
                      +---------------+
`}
          </pre>
          <p className="text-sm mb-2">
            Captured and analyzed network traffic using Wireshark to detect suspicious activity, investigate anomalies, and identify potential security threats.
          </p>
          <p className="text-xs text-muted-foreground mb-2">
            Technologies: Wireshark, Networking, Packet Analysis
          </p>
        </div>

        <div className="p-3 border border-primary/20 rounded bg-primary/5">
          <h3 className="text-primary font-bold">Cloud Security Labs (AWS & GCP)</h3>
          <pre className="text-xs my-2 text-muted-foreground">
            {`
  +-------------+     +----------------+     +----------------+ 
  | Cloud       |---->| Logging &      |---->| Monitoring &    |
  | Resources   |     | Access Control |     | Alerts          |
  +-------------+     +----------------+     +----------------+ 
        |                    |                      |
        |                    v                      |
        |             +--------------+              |
        +------------>| Cloud SIEM   |<-------------+
                      | Integration  |
                      +--------------+
                             |
                             v
                      +---------------+
                      | Security      |
                      | Insights      |
                      +---------------+
`}
          </pre>
          <p className="text-sm mb-2">
            Worked with AWS and Google Cloud Platform focusing on logging, monitoring, and identity access management to improve cloud security posture.
          </p>
          <p className="text-xs text-muted-foreground mb-2">
            Technologies: AWS, Google Cloud Platform, Cloud Logging, IAM
          </p>
        </div>

        <div className="p-3 border border-primary/20 rounded bg-primary/5">
          <h3 className="text-primary font-bold">Secure Network Simulation (Packet Tracer)</h3>
          <pre className="text-xs my-2 text-muted-foreground">
            {`
  +-------------+     +----------------+     +----------------+ 
  | Network     |---->| Configuration  |---->| Routing &       |
  | Design      |     | & Simulation   |     | Switching       |
  +-------------+     +----------------+     +----------------+ 
        |                    |                      |
        |                    v                      |
        |             +--------------+              |
        +------------>| Testing      |<-------------+
                      | & Validation |
                      +--------------+
                             |
                             v
                      +---------------+
                      | Secure        |
                      | Network Setup |
                      +---------------+
`}
          </pre>
          <p className="text-sm mb-2">
            Designed and simulated secure network topologies using Cisco Packet Tracer to understand routing, switching, and network security configurations.
          </p>
          <p className="text-xs text-muted-foreground mb-2">
            Technologies: Cisco Packet Tracer, Networking Fundamentals
          </p>
        </div>

        <div className="p-3 border border-primary/20 rounded bg-primary/5">
          <h3 className="text-primary font-bold">Secure WAN Network Simulation (Ghana & Cape Verde)</h3>
          <pre className="text-xs my-2 text-muted-foreground">
            {`
  +-------------+     +------------+     +-------------+
  | Ghana LAN   |     |  WAN Link  |     | Cape Verde  |
  | 10.10.1.0/25|<--->|(Crossover) |<--->| 10.20.1.0/25|
  +-------------+     +------------+     +-------------+
        |                                       |
   +----------+                           +----------+
   | Router   |                           | Router   |
   | Switch   |                           | Switch   |
   | 4 PCs    |                           | 4 PCs    |
   | 1 Server |                           | 1 Server |
   +----------+                           +----------+
        |_______________ ACL __________________|
              HTTP (port 80) & ICMP only
`}
          </pre>
          <p className="text-sm mb-2">
            Designed and simulated a secure WAN connection between two branch offices (Ghana and Cape Verde) using Cisco Packet Tracer. Configured routers, switches, IP addressing with CIDR, and ACLs to restrict network access to HTTP and ICMP traffic only.
          </p>
          <div className="mt-2 space-y-1 text-xs">
            <p className="font-semibold text-primary">ACL Verification Results:</p>
            <ul className="list-disc pl-4 space-y-1 text-muted-foreground">
              <li><span className="text-green-500">ALLOWED</span> — ICMP (ping) between Ghana and Cape Verde LANs</li>
              <li><span className="text-green-500">ALLOWED</span> — HTTP (port 80) access to web servers across WAN</li>
              <li><span className="text-red-500">BLOCKED</span> — Telnet, FTP, and SSH to remote hosts (timed out)</li>
              <li>ACL 102 match counts confirmed: ICMP (4), HTTP (21), established (6), denied (33)</li>
            </ul>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Technologies: Cisco Packet Tracer, Routing, ACLs, CIDR, WAN, Network Security
          </p>
        </div>

        <div className="p-3 border border-primary/20 rounded bg-primary/5">
        <h3 className="text-primary font-bold">Android Baking Application</h3>
        <pre className="text-xs my-2 text-muted-foreground">
          {`
  +-------------+     +----------------+     +----------------+ 
  | User Input  |---->| App Logic      |---->| UI Display      |
  | Interface   |     | Processing     |     | & Interaction   |
  +-------------+     +----------------+     +----------------+ 
        |                    |                      |
        |                    v                      |
        |             +--------------+              |
        +------------>| Debugging    |<-------------+
                      | & Testing    |
                      +--------------+
                             |
                             v
                      +---------------+
                      | Functional    |
                      | Mobile App    |
                      +---------------+
`}
        </pre>
        <p className="text-sm mb-2">
          Developed a mobile application using Java and XML, focusing on user interface design, debugging, and functionality.
        </p>
        <p className="text-xs text-muted-foreground mb-2">
          Technologies: Java, XML, Android Studio
        </p>
        </div>
      </div>
    </div>
  )
}