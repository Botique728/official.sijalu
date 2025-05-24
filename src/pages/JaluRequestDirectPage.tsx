import { useState } from 'react';
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface Partner {
  id: number;
  name: string;
  specialty: string;
  rating: number;
  projectsCompleted: number;
  imageUrl: string;
  tags: string[];
}

const JaluRequestDirectPage = () => {
  const { toast } = useToast();
  const [activeFilter, setActiveFilter] = useState<string>('all');

  // Mock data for partners
  const partners: Partner[] = [
  {
    id: 1,
    name: "Rina Kartika",
    specialty: "Graphic Designer",
    rating: 4.9,
    projectsCompleted: 87,
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    tags: ["Logo Design", "Brand Identity", "Illustration"]
  },
  {
    id: 2,
    name: "Budi Santoso",
    specialty: "Web Developer",
    rating: 4.7,
    projectsCompleted: 56,
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    tags: ["Frontend", "React", "Responsive Design"]
  },
  {
    id: 3,
    name: "Maya Wijaya",
    specialty: "UI/UX Designer",
    rating: 4.8,
    projectsCompleted: 72,
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80",
    tags: ["UI Design", "UX Research", "Prototyping"]
  },
  {
    id: 4,
    name: "Agus Purnomo",
    specialty: "Videographer",
    rating: 4.6,
    projectsCompleted: 43,
    imageUrl: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    tags: ["Video Editing", "Motion Graphics", "Cinematography"]
  },
  {
    id: 5,
    name: "Siti Rahayu",
    specialty: "Social Media Expert",
    rating: 4.9,
    projectsCompleted: 64,
    imageUrl: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    tags: ["Content Strategy", "Social Media Management", "Copywriting"]
  },
  {
    id: 6,
    name: "Doni Kusuma",
    specialty: "Illustrator",
    rating: 5.0,
    projectsCompleted: 39,
    imageUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    tags: ["Digital Illustration", "Character Design", "Concept Art"]
  }];


  // All unique tags from partners
  const allTags = Array.from(new Set(partners.flatMap((partner) => partner.tags)));

  // Filtered partners based on active tag
  const filteredPartners = activeFilter === 'all' ?
  partners :
  partners.filter((partner) => partner.tags.includes(activeFilter));

  const handleSendRequest = (partnerId: number) => {
    toast({
      title: "Direct Request",
      description: `Request form will be available in the next update.`,
      variant: "default"
    });
  };

  const handleViewPortfolio = (partnerId: number) => {
    toast({
      title: "Portfolio View",
      description: "Portfolio viewing will be available in the next update.",
      variant: "default"
    });
  };

  return (
    <Layout>
      <section className="py-12 px-4" data-id="rirdaf1lx" data-path="src/pages/JaluRequestDirectPage.tsx">
        <div className="container mx-auto" data-id="b9d1rlrtm" data-path="src/pages/JaluRequestDirectPage.tsx">
          <div className="mb-8" data-id="qf0mylr65" data-path="src/pages/JaluRequestDirectPage.tsx">
            <h1 className="text-3xl font-bold mb-2" data-id="09mt2borv" data-path="src/pages/JaluRequestDirectPage.tsx">Direct Request</h1>
            <p className="text-gray-600 mb-6" data-id="bdasva91s" data-path="src/pages/JaluRequestDirectPage.tsx">
              Browse partner portfolios and send a private request with project details to a specific partner.
            </p>
            
            {/* Tag filters */}
            <div className="flex flex-wrap gap-2 mb-8 mt-6" data-id="yi1w2l646" data-path="src/pages/JaluRequestDirectPage.tsx">
              <Button
                variant={activeFilter === 'all' ? "default" : "outline"}
                className={activeFilter === 'all' ? "bg-sijalu-primary hover:bg-sijalu-primary/90" : ""}
                onClick={() => setActiveFilter('all')}
                size="sm">

                All
              </Button>
              {allTags.map((tag) =>
              <Button
                key={tag}
                variant={activeFilter === tag ? "default" : "outline"}
                className={activeFilter === tag ? "bg-sijalu-primary hover:bg-sijalu-primary/90" : ""}
                onClick={() => setActiveFilter(tag)}
                size="sm">

                  {tag}
                </Button>
              )}
            </div>
          </div>

          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3" data-id="vjszhr7ld" data-path="src/pages/JaluRequestDirectPage.tsx">
            {filteredPartners.map((partner) =>
            <Card key={partner.id} className="border-2 border-gray-200 hover:border-sijalu-primary transition-colors">
                <CardHeader className="pb-0">
                  <div className="flex items-center gap-4" data-id="2l50r0ifw" data-path="src/pages/JaluRequestDirectPage.tsx">
                    <div className="w-16 h-16 rounded-full overflow-hidden" data-id="r3xi6oblc" data-path="src/pages/JaluRequestDirectPage.tsx">
                      <img
                      src={partner.imageUrl}
                      alt={partner.name}
                      className="w-full h-full object-cover" data-id="03s93h1z1" data-path="src/pages/JaluRequestDirectPage.tsx" />

                    </div>
                    <div data-id="22udd1viz" data-path="src/pages/JaluRequestDirectPage.tsx">
                      <CardTitle className="text-lg">{partner.name}</CardTitle>
                      <CardDescription>{partner.specialty}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="grid grid-cols-2 gap-4 mb-4" data-id="70xhkc3yb" data-path="src/pages/JaluRequestDirectPage.tsx">
                    <div data-id="rslglfuq4" data-path="src/pages/JaluRequestDirectPage.tsx">
                      <p className="text-sm text-gray-500" data-id="kh42je27m" data-path="src/pages/JaluRequestDirectPage.tsx">Rating</p>
                      <div className="flex items-center" data-id="1jmvzy00d" data-path="src/pages/JaluRequestDirectPage.tsx">
                        <span className="font-bold mr-1" data-id="r065irl0b" data-path="src/pages/JaluRequestDirectPage.tsx">{partner.rating}</span>
                        <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" data-id="gf4ufd4wz" data-path="src/pages/JaluRequestDirectPage.tsx">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" data-id="0qqat7qsd" data-path="src/pages/JaluRequestDirectPage.tsx" />
                        </svg>
                      </div>
                    </div>
                    <div data-id="rrh23mfx7" data-path="src/pages/JaluRequestDirectPage.tsx">
                      <p className="text-sm text-gray-500" data-id="16dlau6or" data-path="src/pages/JaluRequestDirectPage.tsx">Projects</p>
                      <p className="font-bold" data-id="pzdyz4955" data-path="src/pages/JaluRequestDirectPage.tsx">{partner.projectsCompleted}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4" data-id="f6vbcifz8" data-path="src/pages/JaluRequestDirectPage.tsx">
                    {partner.tags.map((tag, index) =>
                  <span key={index} className="text-xs bg-sijalu-green/10 text-sijalu-green px-2 py-1 rounded-full" data-id="q7l6k12c0" data-path="src/pages/JaluRequestDirectPage.tsx">
                        {tag}
                      </span>
                  )}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => handleViewPortfolio(partner.id)}>

                    View Portfolio
                  </Button>
                  <Button
                  className="flex-1 bg-sijalu-primary hover:bg-sijalu-primary/90"
                  onClick={() => handleSendRequest(partner.id)}>

                    Send Request
                  </Button>
                </CardFooter>
              </Card>
            )}
          </div>
        </div>
      </section>
    </Layout>);

};

export default JaluRequestDirectPage;