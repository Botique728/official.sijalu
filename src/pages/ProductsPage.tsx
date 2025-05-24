import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

const ProductsPage = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('jalucourse');

  const handleRedirectToLogin = () => {
    toast({
      title: "Login Required",
      description: "Please log in or sign up to access this feature.",
      variant: "destructive"
    });
    navigate('/login');
  };

  const handleViewDetails = (productType: string) => {
    if (!isAuthenticated) {
      handleRedirectToLogin();
      return;
    }

    // If authenticated, navigate to the specific product dashboard
    navigate(`/dashboard/${productType}`);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-sijalu-primary/30 to-sijalu-green/20" data-id="61m2q2adv" data-path="src/pages/ProductsPage.tsx">
        <div className="container mx-auto text-center" data-id="qqqnycdqd" data-path="src/pages/ProductsPage.tsx">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" data-id="7zx7ecqab" data-path="src/pages/ProductsPage.tsx">Our Products</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-id="ogh2uj7bq" data-path="src/pages/ProductsPage.tsx">
            Discover the tools and services Si Jalu offers to help you connect with creative professionals and grow your skills.
          </p>
        </div>
      </section>

      {/* Product Tabs */}
      <section className="py-16 px-4" data-id="uqoi4mwtg" data-path="src/pages/ProductsPage.tsx">
        <div className="container mx-auto" data-id="nwlzybrbb" data-path="src/pages/ProductsPage.tsx">
          <Tabs
            defaultValue="jalucourse"
            className="w-full"
            value={activeTab}
            onValueChange={setActiveTab}>

            <div className="flex justify-center mb-10" data-id="4jtyxyzj3" data-path="src/pages/ProductsPage.tsx">
              <TabsList className="grid w-full max-w-md grid-cols-3">
                <TabsTrigger value="jalucourse">JaluCourse</TabsTrigger>
                <TabsTrigger value="jalumentoring">JaluMentoring</TabsTrigger>
                <TabsTrigger value="jalurequest">JaluRequest</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="jalucourse" className="mt-6">
              <div className="grid md:grid-cols-2 gap-12 items-center" data-id="w5ap50rcz" data-path="src/pages/ProductsPage.tsx">
                <div data-id="1fphrepck" data-path="src/pages/ProductsPage.tsx">
                  <h2 className="text-3xl font-bold mb-6 text-sijalu-primary" data-id="683ce6yc8" data-path="src/pages/ProductsPage.tsx">JaluCourse</h2>
                  <p className="text-lg text-gray-600 mb-6" data-id="xx0kd0iul" data-path="src/pages/ProductsPage.tsx">
                    Special learning sessions officially hosted by Si Jalu, offering hands-on training and certification on creative topics.
                  </p>
                  <div className="space-y-4" data-id="6aorcetx0" data-path="src/pages/ProductsPage.tsx">
                    <div className="flex items-start" data-id="3uddm7idl" data-path="src/pages/ProductsPage.tsx">
                      <svg className="h-6 w-6 text-sijalu-green mt-1 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-id="l4oxnhk7k" data-path="src/pages/ProductsPage.tsx">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" data-id="bjhf3k24j" data-path="src/pages/ProductsPage.tsx" />
                      </svg>
                      <p className="text-gray-700" data-id="airm5z366" data-path="src/pages/ProductsPage.tsx">
                        <span className="font-semibold" data-id="4sscewscy" data-path="src/pages/ProductsPage.tsx">Expert Instructors:</span> Learn from industry professionals with years of experience.
                      </p>
                    </div>
                    <div className="flex items-start" data-id="pi0rgy6b5" data-path="src/pages/ProductsPage.tsx">
                      <svg className="h-6 w-6 text-sijalu-green mt-1 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-id="su85vjhi1" data-path="src/pages/ProductsPage.tsx">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" data-id="abdrp5idm" data-path="src/pages/ProductsPage.tsx" />
                      </svg>
                      <p className="text-gray-700" data-id="nay2c6727" data-path="src/pages/ProductsPage.tsx">
                        <span className="font-semibold" data-id="l3tvk73p4" data-path="src/pages/ProductsPage.tsx">Practical Projects:</span> Apply what you learn with hands-on projects and assignments.
                      </p>
                    </div>
                    <div className="flex items-start" data-id="ygr804wai" data-path="src/pages/ProductsPage.tsx">
                      <svg className="h-6 w-6 text-sijalu-green mt-1 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-id="gjsnwrcka" data-path="src/pages/ProductsPage.tsx">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" data-id="1f9m8vz4o" data-path="src/pages/ProductsPage.tsx" />
                      </svg>
                      <p className="text-gray-700" data-id="rkus13xya" data-path="src/pages/ProductsPage.tsx">
                        <span className="font-semibold" data-id="5yzsn3l0q" data-path="src/pages/ProductsPage.tsx">Industry-Recognized Certification:</span> Earn certificates that enhance your professional profile.
                      </p>
                    </div>
                    <div className="flex items-start" data-id="dsdsabkyv" data-path="src/pages/ProductsPage.tsx">
                      <svg className="h-6 w-6 text-sijalu-green mt-1 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-id="7zuj1kjh5" data-path="src/pages/ProductsPage.tsx">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" data-id="545p36hai" data-path="src/pages/ProductsPage.tsx" />
                      </svg>
                      <p className="text-gray-700" data-id="xzok9y6mz" data-path="src/pages/ProductsPage.tsx">
                        <span className="font-semibold" data-id="hcfo3a39c" data-path="src/pages/ProductsPage.tsx">Community Learning:</span> Connect with peers and build your professional network.
                      </p>
                    </div>
                  </div>
                  <div className="mt-8" data-id="8x42iscjr" data-path="src/pages/ProductsPage.tsx">
                    <Button
                      size="lg"
                      onClick={() => handleViewDetails('jalucourse')}
                      className="bg-sijalu-primary hover:bg-sijalu-primary/90">

                      Browse Courses
                    </Button>
                  </div>
                </div>
                <div data-id="64049shxw" data-path="src/pages/ProductsPage.tsx">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                    alt="JaluCourse learning session"
                    className="rounded-lg shadow-lg" data-id="0uj4ucfvd" data-path="src/pages/ProductsPage.tsx" />

                  
                  <div className="mt-8 grid grid-cols-2 gap-4" data-id="bnk2z9612" data-path="src/pages/ProductsPage.tsx">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">1,200+</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-500" data-id="lskmldd2v" data-path="src/pages/ProductsPage.tsx">Students trained</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">50+</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-500" data-id="wpi7f305k" data-path="src/pages/ProductsPage.tsx">Courses available</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">92%</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-500" data-id="u32dvo1ka" data-path="src/pages/ProductsPage.tsx">Satisfaction rate</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">30+</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-500" data-id="l27hfbruv" data-path="src/pages/ProductsPage.tsx">Expert instructors</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="jalumentoring" className="mt-6">
              <div className="grid md:grid-cols-2 gap-12 items-center" data-id="f78tcvtl9" data-path="src/pages/ProductsPage.tsx">
                <div data-id="nsqodw4sw" data-path="src/pages/ProductsPage.tsx">
                  <img
                    src="https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    alt="JaluMentoring session"
                    className="rounded-lg shadow-lg" data-id="npegbrmwj" data-path="src/pages/ProductsPage.tsx" />

                  
                  <div className="mt-8 grid grid-cols-2 gap-4" data-id="oo6rfc201" data-path="src/pages/ProductsPage.tsx">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">200+</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-500" data-id="o1hl8svsc" data-path="src/pages/ProductsPage.tsx">Verified mentors</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">5,000+</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-500" data-id="xp05v6f84" data-path="src/pages/ProductsPage.tsx">Sessions completed</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">25+</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-500" data-id="gi1x6kcby" data-path="src/pages/ProductsPage.tsx">Creative specialties</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">95%</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-500" data-id="ra0y4kn7i" data-path="src/pages/ProductsPage.tsx">Client satisfaction</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                <div data-id="77l4cnf7t" data-path="src/pages/ProductsPage.tsx">
                  <h2 className="text-3xl font-bold mb-6 text-sijalu-primary" data-id="0aoi77kr5" data-path="src/pages/ProductsPage.tsx">JaluMentoring</h2>
                  <p className="text-lg text-gray-600 mb-6" data-id="q7qy0gfft" data-path="src/pages/ProductsPage.tsx">
                    A consultation-based feature where users can book sessions with experienced creative professionals for guidance, feedback, or skill development.
                  </p>
                  <div className="space-y-4" data-id="p5t6no47y" data-path="src/pages/ProductsPage.tsx">
                    <div className="flex items-start" data-id="sfyu44rz8" data-path="src/pages/ProductsPage.tsx">
                      <svg className="h-6 w-6 text-sijalu-green mt-1 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-id="dt9twd0om" data-path="src/pages/ProductsPage.tsx">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" data-id="jn69bnzyh" data-path="src/pages/ProductsPage.tsx" />
                      </svg>
                      <p className="text-gray-700" data-id="s1ph5kzot" data-path="src/pages/ProductsPage.tsx">
                        <span className="font-semibold" data-id="hgsar3ikd" data-path="src/pages/ProductsPage.tsx">Personalized Guidance:</span> One-on-one sessions tailored to your specific needs and goals.
                      </p>
                    </div>
                    <div className="flex items-start" data-id="9906yj0cq" data-path="src/pages/ProductsPage.tsx">
                      <svg className="h-6 w-6 text-sijalu-green mt-1 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-id="2fh5ausgp" data-path="src/pages/ProductsPage.tsx">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" data-id="xfeveslo8" data-path="src/pages/ProductsPage.tsx" />
                      </svg>
                      <p className="text-gray-700" data-id="qgla2vvb3" data-path="src/pages/ProductsPage.tsx">
                        <span className="font-semibold" data-id="qh40ry1if" data-path="src/pages/ProductsPage.tsx">Verified Experts:</span> All mentors are thoroughly vetted for their expertise and teaching ability.
                      </p>
                    </div>
                    <div className="flex items-start" data-id="sk2kpxkbv" data-path="src/pages/ProductsPage.tsx">
                      <svg className="h-6 w-6 text-sijalu-green mt-1 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-id="nkazjz6g2" data-path="src/pages/ProductsPage.tsx">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" data-id="v98c4ewpz" data-path="src/pages/ProductsPage.tsx" />
                      </svg>
                      <p className="text-gray-700" data-id="f9b05hgpo" data-path="src/pages/ProductsPage.tsx">
                        <span className="font-semibold" data-id="6u7w7h2fk" data-path="src/pages/ProductsPage.tsx">Flexible Scheduling:</span> Book sessions at times that work for you, from anywhere in the world.
                      </p>
                    </div>
                    <div className="flex items-start" data-id="i6b6zwy7f" data-path="src/pages/ProductsPage.tsx">
                      <svg className="h-6 w-6 text-sijalu-green mt-1 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-id="bt23hvlvj" data-path="src/pages/ProductsPage.tsx">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" data-id="u0prpvuxa" data-path="src/pages/ProductsPage.tsx" />
                      </svg>
                      <p className="text-gray-700" data-id="7hckgejqa" data-path="src/pages/ProductsPage.tsx">
                        <span className="font-semibold" data-id="wyqg3as2c" data-path="src/pages/ProductsPage.tsx">Project Feedback:</span> Get professional critique and advice on your creative work.
                      </p>
                    </div>
                  </div>
                  <div className="mt-8" data-id="cew36ewi6" data-path="src/pages/ProductsPage.tsx">
                    <Button
                      size="lg"
                      onClick={() => handleViewDetails('jalumentoring')}
                      className="bg-sijalu-primary hover:bg-sijalu-primary/90">

                      Find a Mentor
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="jalurequest" className="mt-6">
              <div className="grid md:grid-cols-2 gap-12 items-center" data-id="kwtdi5kw8" data-path="src/pages/ProductsPage.tsx">
                <div data-id="3qgx4jjrr" data-path="src/pages/ProductsPage.tsx">
                  <h2 className="text-3xl font-bold mb-6 text-sijalu-primary" data-id="jzl2mzf2t" data-path="src/pages/ProductsPage.tsx">JaluRequest</h2>
                  <p className="text-lg text-gray-600 mb-6" data-id="jsbfflss0" data-path="src/pages/ProductsPage.tsx">
                    A request feature that connects users with creative professionals for services like graphic design, web development, and hosting.
                  </p>
                  <div className="space-y-6" data-id="1f91bkyxp" data-path="src/pages/ProductsPage.tsx">
                    <div className="bg-orange-50 p-4 rounded-lg" data-id="4mubeoldq" data-path="src/pages/ProductsPage.tsx">
                      <h3 className="font-bold text-lg mb-2 flex items-center" data-id="79vp7ul3r" data-path="src/pages/ProductsPage.tsx">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-sijalu-primary mr-2" viewBox="0 0 20 20" fill="currentColor" data-id="titbwcm4x" data-path="src/pages/ProductsPage.tsx">
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" data-id="7arb1mufr" data-path="src/pages/ProductsPage.tsx" />
                          <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" data-id="5ofddhvks" data-path="src/pages/ProductsPage.tsx" />
                        </svg>
                        Open Request
                      </h3>
                      <p className="text-gray-700 mb-2" data-id="yl04uda2g" data-path="src/pages/ProductsPage.tsx">
                        Post a public job request that all relevant, verified partners can view and apply to.
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1 ml-6 list-disc" data-id="7xchvnw3t" data-path="src/pages/ProductsPage.tsx">
                        <li data-id="bocgk0dc6" data-path="src/pages/ProductsPage.tsx">Set your own budget</li>
                        <li data-id="sdla7rupp" data-path="src/pages/ProductsPage.tsx">Review multiple portfolios</li>
                        <li data-id="3u7aprzz2" data-path="src/pages/ProductsPage.tsx">Choose the best fit for your project</li>
                      </ul>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-lg" data-id="uu2u8oxb9" data-path="src/pages/ProductsPage.tsx">
                      <h3 className="font-bold text-lg mb-2 flex items-center" data-id="fmo67jsbe" data-path="src/pages/ProductsPage.tsx">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-sijalu-green mr-2" viewBox="0 0 20 20" fill="currentColor" data-id="lc0gnju29" data-path="src/pages/ProductsPage.tsx">
                          <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" data-id="oxy27linv" data-path="src/pages/ProductsPage.tsx" />
                          <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" data-id="8zwqvy6xx" data-path="src/pages/ProductsPage.tsx" />
                        </svg>
                        Direct Request
                      </h3>
                      <p className="text-gray-700 mb-2" data-id="6wdxf9g12" data-path="src/pages/ProductsPage.tsx">
                        Browse partner portfolios and send a private request with project details to a specific partner.
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1 ml-6 list-disc" data-id="f8ab4f5y5" data-path="src/pages/ProductsPage.tsx">
                        <li data-id="37izq8ptn" data-path="src/pages/ProductsPage.tsx">Choose based on past work</li>
                        <li data-id="oup9rowyu" data-path="src/pages/ProductsPage.tsx">Negotiate pricing directly</li>
                        <li data-id="d9qriwiri" data-path="src/pages/ProductsPage.tsx">Build long-term relationships</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-8 flex space-x-4" data-id="a1v72zscn" data-path="src/pages/ProductsPage.tsx">
                    <Button
                      size="lg"
                      onClick={() => handleViewDetails('jalurequest/open')}
                      className="bg-sijalu-primary hover:bg-sijalu-primary/90">

                      Open Request
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      onClick={() => handleViewDetails('jalurequest/direct')}
                      className="border-sijalu-green text-sijalu-green hover:bg-sijalu-green hover:text-white">

                      Direct Request
                    </Button>
                  </div>
                </div>
                <div data-id="lutmmfuow" data-path="src/pages/ProductsPage.tsx">
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    alt="Creative professionals collaborating"
                    className="rounded-lg shadow-lg" data-id="otqaoc5ba" data-path="src/pages/ProductsPage.tsx" />

                  
                  <div className="mt-8 grid grid-cols-2 gap-4" data-id="wyu0s2zcw" data-path="src/pages/ProductsPage.tsx">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">10,000+</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-500" data-id="pcyuwc06e" data-path="src/pages/ProductsPage.tsx">Projects completed</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">500+</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-500" data-id="180zf906g" data-path="src/pages/ProductsPage.tsx">Verified partners</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">20+</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-500" data-id="u0pusrics" data-path="src/pages/ProductsPage.tsx">Service categories</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">96%</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-500" data-id="7xrn3ecpa" data-path="src/pages/ProductsPage.tsx">On-time delivery</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-sijalu-green/10" data-id="va6ktaasu" data-path="src/pages/ProductsPage.tsx">
        <div className="container mx-auto text-center max-w-3xl" data-id="vjcvl7zbd" data-path="src/pages/ProductsPage.tsx">
          <h2 className="text-3xl font-bold mb-6" data-id="wfmmxbac2" data-path="src/pages/ProductsPage.tsx">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8" data-id="bjfwq9kp3" data-path="src/pages/ProductsPage.tsx">
            Sign up now to access all Si Jalu's features and connect with creative professionals.
          </p>
          <div className="flex flex-wrap justify-center gap-4" data-id="vv7ul6pc3" data-path="src/pages/ProductsPage.tsx">
            <Button
              size="lg"
              className="bg-sijalu-primary hover:bg-sijalu-primary/90"
              onClick={() => navigate('/signup')}>

              Sign Up Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-sijalu-green text-sijalu-green hover:bg-sijalu-green hover:text-white"
              onClick={() => navigate('/about')}>

              Learn More
            </Button>
          </div>
        </div>
      </section>
    </Layout>);

};

export default ProductsPage;