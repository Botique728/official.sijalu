import Layout from "@/components/Layout";

const TeamPage = () => {
  const teamMembers = [
  {
    name: "Adi Pratama",
    role: "Chief Executive Officer",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    bio: "With over 15 years of experience in technology and creative industries, Adi leads Si Jalu's vision and strategic direction.",
    contact: "adi@sijalu.com"
  },
  {
    name: "Dewi Anggraini",
    role: "Chief Financial Officer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
    bio: "Dewi brings her expertise in financial management and investment to ensure Si Jalu's sustainable growth and financial health.",
    contact: "dewi@sijalu.com"
  },
  {
    name: "Budi Setiawan",
    role: "Chief Technology Officer",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    bio: "A technology veteran with background in scaling platforms, Budi oversees Si Jalu's technology infrastructure and innovation.",
    contact: "budi@sijalu.com"
  },
  {
    name: "Maya Wijaya",
    role: "Chief Operations Officer",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80",
    bio: "Maya's background in operations and service design helps ensure smooth experiences for all Si Jalu users.",
    contact: "maya@sijalu.com"
  },
  {
    name: "Rizki Nugroho",
    role: "Chief Marketing Officer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    bio: "Rizki leads Si Jalu's marketing efforts, focusing on community building and strategic partnerships.",
    contact: "rizki@sijalu.com"
  },
  {
    name: "Putri Lestari",
    role: "Chief Content Officer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    bio: "Putri oversees Si Jalu's content strategy, ensuring high-quality educational content and creative resources.",
    contact: "putri@sijalu.com"
  }];


  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-sijalu-primary/20 to-sijalu-green/20" data-id="re16389x1" data-path="src/pages/TeamPage.tsx">
        <div className="container mx-auto text-center" data-id="uamasnd2o" data-path="src/pages/TeamPage.tsx">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" data-id="na3t7a738" data-path="src/pages/TeamPage.tsx">Meet Our Team</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-id="ud3lcdrhj" data-path="src/pages/TeamPage.tsx">
            The passionate people behind Si Jalu working to connect creative professionals with opportunities.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 px-4" data-id="2u6vnlki4" data-path="src/pages/TeamPage.tsx">
        <div className="container mx-auto" data-id="xb5nvnb5i" data-path="src/pages/TeamPage.tsx">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-id="kr5301tzj" data-path="src/pages/TeamPage.tsx">
            {teamMembers.map((member, index) =>
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100" data-id="2jzvyk2ev" data-path="src/pages/TeamPage.tsx">

                <div className="h-64 overflow-hidden" data-id="xd9r0lsk1" data-path="src/pages/TeamPage.tsx">
                  <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300" data-id="exm6d5ei6" data-path="src/pages/TeamPage.tsx" />

                </div>
                <div className="p-6" data-id="oo1ewiz65" data-path="src/pages/TeamPage.tsx">
                  <h3 className="text-xl font-bold mb-1" data-id="9r5qedpyh" data-path="src/pages/TeamPage.tsx">{member.name}</h3>
                  <p className="text-sijalu-primary font-medium mb-4" data-id="thyx5pism" data-path="src/pages/TeamPage.tsx">{member.role}</p>
                  <p className="text-gray-600 mb-4" data-id="0orq4bo68" data-path="src/pages/TeamPage.tsx">{member.bio}</p>
                  <div className="flex items-center text-sijalu-green" data-id="ucvi36x1t" data-path="src/pages/TeamPage.tsx">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor" data-id="c1qtbls6e" data-path="src/pages/TeamPage.tsx">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" data-id="svqb2dbfa" data-path="src/pages/TeamPage.tsx" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" data-id="5qwjz46ko" data-path="src/pages/TeamPage.tsx" />
                    </svg>
                    <span data-id="g5qx9x8u0" data-path="src/pages/TeamPage.tsx">{member.contact}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-16 px-4 bg-gray-50" data-id="t03jpck65" data-path="src/pages/TeamPage.tsx">
        <div className="container mx-auto" data-id="owfcqqpf7" data-path="src/pages/TeamPage.tsx">
          <div className="grid md:grid-cols-2 gap-12 items-center" data-id="o2dvl3cxs" data-path="src/pages/TeamPage.tsx">
            <div data-id="f39q79wal" data-path="src/pages/TeamPage.tsx">
              <h2 className="text-3xl font-bold mb-6 text-sijalu-green" data-id="equcha2r1" data-path="src/pages/TeamPage.tsx">Our Culture</h2>
              <p className="text-lg text-gray-600 mb-6" data-id="93m7c7p3u" data-path="src/pages/TeamPage.tsx">
                At Si Jalu, we believe that great products come from great teams. We foster a culture of innovation, collaboration, and continuous learning.
              </p>
              <p className="text-lg text-gray-600 mb-6" data-id="s2oij0su2" data-path="src/pages/TeamPage.tsx">
                We're passionate about connecting creative talent with opportunities, and this mission drives everything we do. Our team combines expertise in technology, design, business, and education to build a platform that serves both creative professionals and those who need their services.
              </p>
              <p className="text-lg text-gray-600" data-id="ib2oe3p4q" data-path="src/pages/TeamPage.tsx">
                We're committed to diversity and inclusion, believing that different perspectives lead to better solutions and a stronger community.
              </p>
            </div>
            
            <div data-id="fxm8iiukh" data-path="src/pages/TeamPage.tsx">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="Team collaboration"
                className="rounded-lg shadow-lg" data-id="knzvspeqj" data-path="src/pages/TeamPage.tsx" />

            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-16 px-4 bg-sijalu-primary/10" data-id="j4771fdqu" data-path="src/pages/TeamPage.tsx">
        <div className="container mx-auto text-center max-w-3xl" data-id="0uf1h6qyi" data-path="src/pages/TeamPage.tsx">
          <h2 className="text-3xl font-bold mb-6" data-id="f126o103s" data-path="src/pages/TeamPage.tsx">Join Our Team</h2>
          <p className="text-xl text-gray-600 mb-8" data-id="o94j0u3u2" data-path="src/pages/TeamPage.tsx">
            We're always looking for passionate, talented individuals to join our mission of transforming the creative economy.
          </p>
          <div className="p-8 bg-white rounded-lg shadow-md" data-id="jil2g542o" data-path="src/pages/TeamPage.tsx">
            <h3 className="text-2xl font-bold mb-4" data-id="ilsslc8wm" data-path="src/pages/TeamPage.tsx">Current Openings</h3>
            <ul className="space-y-4 text-left" data-id="1f6otn2tr" data-path="src/pages/TeamPage.tsx">
              <li className="flex items-start" data-id="cg3lyvhc0" data-path="src/pages/TeamPage.tsx">
                <svg className="h-6 w-6 text-sijalu-green mt-0.5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-id="xkwb0ypoc" data-path="src/pages/TeamPage.tsx">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" data-id="ba2gxwzeu" data-path="src/pages/TeamPage.tsx" />
                </svg>
                <div data-id="tvysur48i" data-path="src/pages/TeamPage.tsx">
                  <span className="font-bold" data-id="vx4fzi77a" data-path="src/pages/TeamPage.tsx">Senior Frontend Developer</span>
                  <p className="text-gray-600" data-id="jph90esov" data-path="src/pages/TeamPage.tsx">Help us build intuitive, accessible interfaces that connect creative professionals with opportunities.</p>
                </div>
              </li>
              <li className="flex items-start" data-id="xdquj1dil" data-path="src/pages/TeamPage.tsx">
                <svg className="h-6 w-6 text-sijalu-green mt-0.5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-id="npwwcitx4" data-path="src/pages/TeamPage.tsx">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" data-id="6xy61r83y" data-path="src/pages/TeamPage.tsx" />
                </svg>
                <div data-id="7w1piynz6" data-path="src/pages/TeamPage.tsx">
                  <span className="font-bold" data-id="kl356tqxg" data-path="src/pages/TeamPage.tsx">Content Marketing Specialist</span>
                  <p className="text-gray-600" data-id="hmrv19k9k" data-path="src/pages/TeamPage.tsx">Create engaging content that educates and inspires our community of creative professionals.</p>
                </div>
              </li>
              <li className="flex items-start" data-id="1wdcpsta4" data-path="src/pages/TeamPage.tsx">
                <svg className="h-6 w-6 text-sijalu-green mt-0.5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-id="ojtjvocj5" data-path="src/pages/TeamPage.tsx">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" data-id="kh68zj8h8" data-path="src/pages/TeamPage.tsx" />
                </svg>
                <div data-id="05z2kxa67" data-path="src/pages/TeamPage.tsx">
                  <span className="font-bold" data-id="umx485v4h" data-path="src/pages/TeamPage.tsx">UX Researcher</span>
                  <p className="text-gray-600" data-id="bwqz83a4h" data-path="src/pages/TeamPage.tsx">Help us understand our users better and create experiences that delight them.</p>
                </div>
              </li>
            </ul>
            <div className="mt-6" data-id="v6acxy43o" data-path="src/pages/TeamPage.tsx">
              <p className="text-gray-600" data-id="wgaytxl26" data-path="src/pages/TeamPage.tsx">
                Don't see a role that fits you? We're always interested in talking to talented people. Send your resume to 
                <span className="text-sijalu-green font-medium" data-id="wa0nj1nsp" data-path="src/pages/TeamPage.tsx"> careers@sijalu.com</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>);

};

export default TeamPage;