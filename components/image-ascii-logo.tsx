"use client"

export function ImageAsciiLogo() {
  return (
    <div className="bg-black p-2 font-mono text-white">
      <pre className="text-white whitespace-pre overflow-x-auto text-xs sm:text-sm md:text-base">
        {`
$ echo "Saheed Jibowu"
Saheed Jibowu

$ whoami
Jibowu@cybersec

$ pwd
/home/Jibowu/portfolio

$ ls
about  education  skills  experience  projects  certifications  contact
`}
      </pre>
    </div>
  )
}
