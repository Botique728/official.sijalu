import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import MembershipPricing from "@/components/MembershipPricing";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-white via-orange-50 to-green-50" data-id="c4r5rnbft" data-path="src/pages/HomePage.tsx">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center" data-id="dffle3fjr" data-path="src/pages/HomePage.tsx">
          <div className="max-w-xl" data-id="ryl84fh0q" data-path="src/pages/HomePage.tsx">
            <h1 className="text-4xl md:text-5xl font-bold mb-6" data-id="yta5fzasp" data-path="src/pages/HomePage.tsx">
              Connect with <span className="text-sijalu-primary" data-id="ay7apq3c3" data-path="src/pages/HomePage.tsx">Trusted Creative</span> Professionals
            </h1>
            <p className="text-xl text-gray-600 mb-8" data-id="31bkxp15m" data-path="src/pages/HomePage.tsx">
              Si Jalu is an innovative platform that helps individuals and small businesses access quality creative services and learning opportunities.
            </p>
            <div className="flex flex-wrap gap-4" data-id="j2kgr1z1x" data-path="src/pages/HomePage.tsx">
              <Button
                size="lg"
                className="bg-sijalu-primary hover:bg-sijalu-primary/90 text-white"
                asChild>

                <Link to="/signup">Get Started</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-sijalu-green text-sijalu-green hover:bg-sijalu-green hover:text-white"
                asChild>

                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="hidden md:block" data-id="67831io4e" data-path="src/pages/HomePage.tsx">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
              alt="Creative professionals collaborating"
              className="rounded-lg shadow-xl transform -rotate-2 hover:rotate-0 transition-transform duration-300" data-id="3d5zgjast" data-path="src/pages/HomePage.tsx" />

          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white" data-id="z866o9dk6" data-path="src/pages/HomePage.tsx">
        <div className="container mx-auto text-center" data-id="4m2mppuna" data-path="src/pages/HomePage.tsx">
          <h2 className="text-3xl font-bold mb-12" data-id="35bzmdna8" data-path="src/pages/HomePage.tsx">How Si Jalu <span className="text-sijalu-green" data-id="886rr7uca" data-path="src/pages/HomePage.tsx">Helps You</span></h2>
          
          <div className="flex flex-col space-y-6 md:grid md:grid-cols-3 md:gap-8 md:space-y-0" data-id="43hqmsomd" data-path="src/pages/HomePage.tsx">
            <div className="p-6 rounded-lg bg-orange-50 hover:shadow-lg transition-shadow" data-id="bhavmlj1y" data-path="src/pages/HomePage.tsx">
              <div className="w-16 h-16 mx-auto mb-4 bg-sijalu-primary rounded-full flex items-center justify-center" data-id="0r05bw556" data-path="src/pages/HomePage.tsx">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-id="rh2tvs310" data-path="src/pages/HomePage.tsx">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" data-id="02agpbldv" data-path="src/pages/HomePage.tsx" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2" data-id="mjl97ag4n" data-path="src/pages/HomePage.tsx">JaluCourse</h3>
              <p className="text-gray-600" data-id="tqzx75136" data-path="src/pages/HomePage.tsx">
                Access special learning sessions hosted by Si Jalu, with hands-on training and certification on creative topics.
              </p>
            </div>
            
            <div className="p-6 rounded-lg bg-orange-50 hover:shadow-lg transition-shadow" data-id="8zl11uyn6" data-path="src/pages/HomePage.tsx">
              <div className="w-16 h-16 mx-auto mb-4 bg-sijalu-primary rounded-full flex items-center justify-center" data-id="fqc7xqubl" data-path="src/pages/HomePage.tsx">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-id="rpuuifx2x" data-path="src/pages/HomePage.tsx">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" data-id="9xs1k69py" data-path="src/pages/HomePage.tsx" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2" data-id="2hibr2pdl" data-path="src/pages/HomePage.tsx">JaluMentoring</h3>
              <p className="text-gray-600" data-id="2h6s0ve1z" data-path="src/pages/HomePage.tsx">
                Book consultation sessions with experienced creative professionals for guidance, feedback, or skill development.
              </p>
            </div>
            
            <div className="p-6 rounded-lg bg-orange-50 hover:shadow-lg transition-shadow" data-id="k11nvuvp9" data-path="src/pages/HomePage.tsx">
              <div className="w-16 h-16 mx-auto mb-4 bg-sijalu-primary rounded-full flex items-center justify-center" data-id="ve74oyf8k" data-path="src/pages/HomePage.tsx">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-id="fx1jghuy2" data-path="src/pages/HomePage.tsx">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" data-id="wesylvrqx" data-path="src/pages/HomePage.tsx" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2" data-id="3q9n69gc6" data-path="src/pages/HomePage.tsx">JaluRequest</h3>
              <p className="text-gray-600" data-id="kb3i5f4y2" data-path="src/pages/HomePage.tsx">
                Connect with creative professionals for services like graphic design, web development, and hosting.
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* Membership Pricing */}
      <MembershipPricing />
      
      {/* CTA Section */}
      <section className="py-16 px-4 bg-sijalu-primary/10" data-id="qa9jf47h1" data-path="src/pages/HomePage.tsx">
        <div className="container mx-auto text-center max-w-3xl" data-id="y4j0xza0v" data-path="src/pages/HomePage.tsx">
          <h2 className="text-3xl font-bold mb-6" data-id="nsob03bw5" data-path="src/pages/HomePage.tsx">Ready to Boost Your Creative Journey?</h2>
          <p className="text-xl text-gray-600 mb-8" data-id="r8t9ehh86" data-path="src/pages/HomePage.tsx">
            Join thousands of users who have transformed their creative careers with Si Jalu.
          </p>
          <Button
            size="lg"
            className="bg-sijalu-green hover:bg-sijalu-green/90 text-white"
            asChild>

            <Link to="/signup">Sign Up Now - It's Free to Start</Link>
          </Button>
        </div>
      </section>
    </Layout>);

};

export default HomePage;