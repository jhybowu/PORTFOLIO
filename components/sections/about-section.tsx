import { AsciiArt } from "@/components/ascii-art"
import { AsciiPortraitComparison } from "@/components/ascii-portrait-comparison"

export function AboutSection() {
  return (
    <div className="space-y-4">
      <AsciiArt art="about" />

      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-2/5">
          <AsciiPortraitComparison />
          <div className="text-center text-xs text-muted-foreground mt-2">
            Saheed Jibowu
            <br />
            <span className="text-primary/60">Cybersecurity Intern | SOC Analyst</span>
          </div>
        </div>

        <div className="space-y-3 md:w-3/5">
          <p>
            Hello! I'm Saheed Jibowu, a cybersecurity intern and aspiring SOC Analyst with hands-on experience in 
            security monitoring, threat detection, and incident response. I focus on analyzing security events and 
            protecting systems from evolving cyber threats.
          </p>

          <p>
            I have practical experience working with SIEM tools such as Wazuh and the Elastic Stack (ELK), as well as 
            performing network traffic analysis using Wireshark. I am also familiar with cloud security fundamentals 
            across AWS and Google Cloud Platform, including logging and access control.
          </p>

          <div className="mt-2 p-3 border border-primary/20 rounded bg-primary/5">
            <h3 className="text-primary font-bold mb-2">Personal Bio:</h3>
            <div className="space-y-2 text-sm">
              <p>
                I am passionate about cybersecurity and continuously improving my skills in threat detection and 
                defensive security. I enjoy working on real-world labs and simulations that strengthen my analytical 
                thinking and problem-solving abilities.
              </p>

              <p>
                Currently based in Lagos, Nigeria, I am building my career in cybersecurity through hands-on projects, 
                continuous learning, and practical experience in SOC environments.
              </p>
            </div>
          </div>

          <p>
            My goal is to become a highly skilled SOC Analyst, contributing to securing digital infrastructures and 
            responding effectively to cyber incidents in real-world environments.
          </p>

          <div className="mt-2 p-3 border border-primary/20 rounded bg-primary/5">
            <h3 className="text-primary font-bold mb-2">Quick Facts:</h3>
            <ul className="space-y-1">
              <li>
                <span className="text-muted-foreground">Location:</span> Lagos, Nigeria
              </li>
              <li>
                <span className="text-muted-foreground">Education:</span> B.Tech in Metallurgical & Materials Engineering, FUTA
              </li>
              <li>
                <span className="text-muted-foreground">Specialty:</span> Security monitoring, SIEM analysis, network traffic analysis, and cloud security fundamentals.
              </li>
              <li>
                <span className="text-muted-foreground">Tools & Technologies:</span>
                <ul className="list-disc pl-5">
                  <li>Wazuh SIEM, Elastic Stack (ELK)</li>
                  <li>Wireshark, Cisco Packet Tracer</li>
                  <li>AWS & Google Cloud Platform</li>
                  <li>Python (Basic), Java, XML</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}