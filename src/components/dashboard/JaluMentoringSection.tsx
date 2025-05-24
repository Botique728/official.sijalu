import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface Mentor {
  id: number;
  name: string;
  specialty: string;
  imageUrl: string;
  rating: number;
  hourlyRate: string;
  availability: string;
  tags: string[];
}

const JaluMentoringSection = () => {
  const { toast } = useToast();
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Mock data for mentors
  const mentors: Mentor[] = [
  {
    id: 1,
    name: "Ahmad Hasani",
    specialty: "Graphic Design Expert",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    rating: 4.9,
    hourlyRate: "Rp 350,000",
    availability: "Mon-Fri, 3PM-8PM",
    tags: ["Graphic Design", "Branding", "Logo Design"]
  },
  {
    id: 2,
    name: "Lina Wijaya",
    specialty: "UI/UX Designer",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    rating: 4.8,
    hourlyRate: "Rp 400,000",
    availability: "Weekends, 10AM-6PM",
    tags: ["UI/UX", "Product Design", "User Research"]
  },
  {
    id: 3,
    name: "Hendra Prakoso",
    specialty: "Web Developer",
    imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    rating: 4.7,
    hourlyRate: "Rp 375,000",
    availability: "Tue-Sat, 7PM-10PM",
    tags: ["Web Development", "React", "Frontend"]
  },
  {
    id: 4,
    name: "Dewi Sutanto",
    specialty: "Content Strategist",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
    rating: 4.9,
    hourlyRate: "Rp 325,000",
    availability: "Mon-Wed, 9AM-3PM",
    tags: ["Content Strategy", "Social Media", "Copywriting"]
  },
  {
    id: 5,
    name: "Rudi Hermawan",
    specialty: "3D Modeling Artist",
    imageUrl: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    rating: 4.6,
    hourlyRate: "Rp 420,000",
    availability: "Flexible",
    tags: ["3D Modeling", "Animation", "Game Design"]
  },
  {
    id: 6,
    name: "Anisa Putri",
    specialty: "Motion Graphics Designer",
    imageUrl: "https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    rating: 4.8,
    hourlyRate: "Rp 380,000",
    availability: "Mon-Thu, 1PM-9PM",
    tags: ["Motion Graphics", "After Effects", "Video Editing"]
  },
  {
    id: 7,
    name: "Budi Santoso",
    specialty: "Backend Developer",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    rating: 4.9,
    hourlyRate: "Rp 450,000",
    availability: "Tue-Sat, 6PM-11PM",
    tags: ["Backend", "Node.js", "Database Design"]
  },
  {
    id: 8,
    name: "Ratna Dewi",
    specialty: "Photographer",
    imageUrl: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=689&q=80",
    rating: 4.7,
    hourlyRate: "Rp 300,000",
    availability: "Weekends, 8AM-6PM",
    tags: ["Photography", "Portrait", "Product Photography"]
  },
  {
    id: 9,
    name: "Arief Nugroho",
    specialty: "Illustrator",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    rating: 5.0,
    hourlyRate: "Rp 350,000",
    availability: "Mon-Fri, 10AM-4PM",
    tags: ["Illustration", "Digital Art", "Character Design"]
  },
  {
    id: 10,
    name: "Siti Aisyah",
    specialty: "Digital Marketing Strategist",
    imageUrl: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    rating: 4.8,
    hourlyRate: "Rp 375,000",
    availability: "Mon-Fri, 9AM-5PM",
    tags: ["Digital Marketing", "SEO", "Social Media Strategy"]
  },
  {
    id: 11,
    name: "Doni Prasetyo",
    specialty: "Game Developer",
    imageUrl: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    rating: 4.6,
    hourlyRate: "Rp 425,000",
    availability: "Tue-Sat, 7PM-11PM",
    tags: ["Game Development", "Unity", "C#"]
  },
  {
    id: 12,
    name: "Rina Amelia",
    specialty: "UX Researcher",
    imageUrl: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    rating: 4.9,
    hourlyRate: "Rp 400,000",
    availability: "Mon-Thu, 10AM-6PM",
    tags: ["UX Research", "Usability Testing", "User Interviews"]
  },
  {
    id: 13,
    name: "Andi Wibowo",
    specialty: "Copywriter",
    imageUrl: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    rating: 4.7,
    hourlyRate: "Rp 300,000",
    availability: "Flexible",
    tags: ["Copywriting", "Content Writing", "Marketing Copy"]
  },
  {
    id: 14,
    name: "Puteri Indah",
    specialty: "Brand Strategist",
    imageUrl: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    rating: 4.8,
    hourlyRate: "Rp 425,000",
    availability: "Mon-Fri, 9AM-3PM",
    tags: ["Brand Strategy", "Marketing", "Market Research"]
  },
  {
    id: 15,
    name: "Rama Wijaya",
    specialty: "Sound Designer",
    imageUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    rating: 4.6,
    hourlyRate: "Rp 350,000",
    availability: "Wed-Sun, 4PM-10PM",
    tags: ["Sound Design", "Music Production", "Audio Editing"]
  },
  {
    id: 16,
    name: "Maya Anggraini",
    specialty: "VR/AR Developer",
    imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
    rating: 4.9,
    hourlyRate: "Rp 475,000",
    availability: "Mon-Fri, 1PM-9PM",
    tags: ["VR", "AR", "Unity Development"]
  },
  {
    id: 17,
    name: "Dimas Pramudya",
    specialty: "Video Editor",
    imageUrl: "https://images.unsplash.com/photo-1567515004624-219c11d31f2e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    rating: 4.7,
    hourlyRate: "Rp 325,000",
    availability: "Tue-Sat, 5PM-10PM",
    tags: ["Video Editing", "Color Grading", "Post Production"]
  },
  {
    id: 18,
    name: "Putri Handayani",
    specialty: "Print Designer",
    imageUrl: "https://images.unsplash.com/photo-1614644147798-f8c0fc9da7f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    rating: 4.5,
    hourlyRate: "Rp 300,000",
    availability: "Mon-Fri, 9AM-5PM",
    tags: ["Print Design", "Packaging", "Publication Design"]
  },
  {
    id: 19,
    name: "Rizky Maulana",
    specialty: "Mobile Developer",
    imageUrl: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    rating: 4.8,
    hourlyRate: "Rp 400,000",
    availability: "Mon-Thu, 7PM-11PM",
    tags: ["Mobile Development", "Android", "iOS"]
  },
  {
    id: 20,
    name: "Nina Safitri",
    specialty: "Data Visualization Expert",
    imageUrl: "https://images.unsplash.com/photo-1530785602389-07594beb8b73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    rating: 4.7,
    hourlyRate: "Rp 350,000",
    availability: "Tue-Fri, 10AM-6PM",
    tags: ["Data Visualization", "Infographics", "Dashboard Design"]
  },
  {
    id: 21,
    name: "Eko Prasetyo",
    specialty: "Architecture Visualizer",
    imageUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    rating: 4.9,
    hourlyRate: "Rp 425,000",
    availability: "Mon-Fri, 10AM-7PM",
    tags: ["Architectural Visualization", "3D Rendering", "Interior Design"]
  },
  {
    id: 22,
    name: "Sari Yulianti",
    specialty: "Social Media Manager",
    imageUrl: "https://images.unsplash.com/photo-1563306406-e66174fa3787?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    rating: 4.6,
    hourlyRate: "Rp 325,000",
    availability: "Mon-Sat, 10AM-4PM",
    tags: ["Social Media Management", "Community Management", "Content Planning"]
  },
  {
    id: 23,
    name: "Irwan Saputra",
    specialty: "E-commerce Specialist",
    imageUrl: "https://images.unsplash.com/photo-1584043720379-b56cd9199c94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    rating: 4.7,
    hourlyRate: "Rp 375,000",
    availability: "Tue-Sat, 9AM-5PM",
    tags: ["E-commerce", "Shopify", "Online Store Optimization"]
  },
  {
    id: 24,
    name: "Mega Kusumawardani",
    specialty: "Animation Director",
    imageUrl: "https://images.unsplash.com/photo-1620122303284-7cb0bcc9fac5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    rating: 5.0,
    hourlyRate: "Rp 500,000",
    availability: "Mon-Thu, 10AM-6PM",
    tags: ["Animation", "Storyboarding", "Character Animation"]
  },
  {
    id: 25,
    name: "Febrian Adi",
    specialty: "SEO Expert",
    imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    rating: 4.8,
    hourlyRate: "Rp 380,000",
    availability: "Mon-Fri, 9AM-5PM",
    tags: ["SEO", "Content Strategy", "Keyword Research"]
  }];


  // All unique tags from mentors
  const allTags = Array.from(new Set(mentors.flatMap((mentor) => mentor.tags)));

  // Filter mentors based on the active tag and search term
  const filteredMentors = mentors.
  filter((mentor) =>
  activeFilter === 'all' || mentor.tags.includes(activeFilter)
  ).
  filter((mentor) =>
  searchTerm === '' ||
  mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  mentor.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
  mentor.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleBookSession = (mentorId: number) => {
    toast({
      title: "Booking Coming Soon",
      description: "Mentoring session booking will be available in the next update.",
      variant: "default"
    });
  };

  return (
    <div className="space-y-6" data-id="l5s2j2ezf" data-path="src/components/dashboard/JaluMentoringSection.tsx">
      <div className="space-y-4" data-id="l2xgtw0gi" data-path="src/components/dashboard/JaluMentoringSection.tsx">
        <div className="flex justify-between items-center flex-wrap gap-4" data-id="f2gptfbin" data-path="src/components/dashboard/JaluMentoringSection.tsx">
          <h2 className="text-2xl font-bold" data-id="i1jtyrpet" data-path="src/components/dashboard/JaluMentoringSection.tsx">Available Mentors</h2>
          <div className="relative" data-id="rufmbkqzo" data-path="src/components/dashboard/JaluMentoringSection.tsx">
            <input
              type="text"
              placeholder="Search mentors..."
              className="border rounded-md px-3 py-2 w-full md:w-64"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} data-id="0miq64ixd" data-path="src/components/dashboard/JaluMentoringSection.tsx" />

          </div>
        </div>
        
        <div className="flex flex-wrap gap-2" data-id="dovula0nc" data-path="src/components/dashboard/JaluMentoringSection.tsx">
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-id="ztv5crd7w" data-path="src/components/dashboard/JaluMentoringSection.tsx">
        {filteredMentors.length > 0 ?
        filteredMentors.map((mentor) =>
        <Card key={mentor.id} className="border-2 border-gray-200 hover:border-sijalu-primary transition-colors">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-4" data-id="v4jslat59" data-path="src/components/dashboard/JaluMentoringSection.tsx">
                  <div className="w-16 h-16 rounded-full overflow-hidden" data-id="ba4sqw0ai" data-path="src/components/dashboard/JaluMentoringSection.tsx">
                    <img
                  src={mentor.imageUrl}
                  alt={mentor.name}
                  className="w-full h-full object-cover" data-id="vkcw4rat2" data-path="src/components/dashboard/JaluMentoringSection.tsx" />

                  </div>
                  <div data-id="cj9n0h6nf" data-path="src/components/dashboard/JaluMentoringSection.tsx">
                    <CardTitle className="text-lg">{mentor.name}</CardTitle>
                    <CardDescription>{mentor.specialty}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4" data-id="kpf8n0wq7" data-path="src/components/dashboard/JaluMentoringSection.tsx">
                  <div className="grid grid-cols-2 gap-4" data-id="y1kywuma0" data-path="src/components/dashboard/JaluMentoringSection.tsx">
                    <div data-id="00sc85kbi" data-path="src/components/dashboard/JaluMentoringSection.tsx">
                      <p className="text-sm text-gray-500" data-id="skkxjuim4" data-path="src/components/dashboard/JaluMentoringSection.tsx">Hourly Rate</p>
                      <p className="font-medium" data-id="6vplolhq4" data-path="src/components/dashboard/JaluMentoringSection.tsx">{mentor.hourlyRate}</p>
                    </div>
                    <div data-id="wzpuqggxh" data-path="src/components/dashboard/JaluMentoringSection.tsx">
                      <p className="text-sm text-gray-500" data-id="lbv8vib2n" data-path="src/components/dashboard/JaluMentoringSection.tsx">Rating</p>
                      <div className="flex items-center" data-id="h9w01ed8p" data-path="src/components/dashboard/JaluMentoringSection.tsx">
                        <span className="font-bold mr-1" data-id="roqulr17f" data-path="src/components/dashboard/JaluMentoringSection.tsx">{mentor.rating}</span>
                        <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" data-id="9uu42gnl3" data-path="src/components/dashboard/JaluMentoringSection.tsx">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" data-id="tnbtt1xzq" data-path="src/components/dashboard/JaluMentoringSection.tsx" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  <div data-id="rql7bv402" data-path="src/components/dashboard/JaluMentoringSection.tsx">
                    <p className="text-sm text-gray-500" data-id="rqz5sp8j1" data-path="src/components/dashboard/JaluMentoringSection.tsx">Availability</p>
                    <p className="font-medium" data-id="nuuu5bcnt" data-path="src/components/dashboard/JaluMentoringSection.tsx">{mentor.availability}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2" data-id="o1pll9kee" data-path="src/components/dashboard/JaluMentoringSection.tsx">
                    {mentor.tags.map((tag, index) =>
                <span
                  key={index}
                  className="text-xs bg-sijalu-primary/10 text-sijalu-primary px-2 py-1 rounded-full" data-id="ugrkqsno5" data-path="src/components/dashboard/JaluMentoringSection.tsx">
                        {tag}
                      </span>
                )}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button
              className="w-full bg-sijalu-green hover:bg-sijalu-green/90"
              onClick={() => handleBookSession(mentor.id)}>
                  Book a Session
                </Button>
              </CardFooter>
            </Card>
        ) :

        <div className="col-span-full text-center py-12" data-id="i6l3m7i0v" data-path="src/components/dashboard/JaluMentoringSection.tsx">
            <p className="text-gray-500" data-id="010r5uoob" data-path="src/components/dashboard/JaluMentoringSection.tsx">No mentors found matching your criteria.</p>
          </div>
        }
      </div>
    </div>);

};

export default JaluMentoringSection;