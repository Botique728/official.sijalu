import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface Course {
  id: number;
  title: string;
  description: string;
  date: string;
  price: string;
  certification: string;
  seats: number;
  tags: string[];
}

const JaluCourseSection = () => {
  const { toast } = useToast();
  const [activeFilter, setActiveFilter] = useState<string>('all');

  // Mock data for courses
  const courses: Course[] = [
  {
    id: 1,
    title: "Mastering Brand Design",
    description: "Learn essential principles of brand identity design with practical hands-on exercises",
    date: "June 15-17, 2023",
    price: "Rp 1,500,000",
    certification: "Si Jalu Brand Designer Certificate",
    seats: 20,
    tags: ["Branding", "Design", "Logo Design"]
  },
  {
    id: 2,
    title: "Web Design Fundamentals",
    description: "Build responsive, modern websites using the latest technologies and design best practices",
    date: "July 8-10, 2023",
    price: "Rp 2,000,000",
    certification: "Si Jalu Web Designer Certificate",
    seats: 15,
    tags: ["Web Design", "HTML/CSS", "UI/UX"]
  },
  {
    id: 3,
    title: "Content Creation for Social Media",
    description: "Master the art of creating engaging content for various social media platforms",
    date: "August 5-6, 2023",
    price: "Rp 950,000",
    certification: "Si Jalu Content Creator Certificate",
    seats: 25,
    tags: ["Social Media", "Content Creation", "Marketing"]
  },
  {
    id: 4,
    title: "Mobile App UI Design Workshop",
    description: "Learn to design beautiful and functional mobile app interfaces that users love",
    date: "August 19-21, 2023",
    price: "Rp 1,800,000",
    certification: "Si Jalu App Designer Certificate",
    seats: 12,
    tags: ["UI/UX", "Mobile Design", "App Development"]
  },
  {
    id: 5,
    title: "3D Modeling & Rendering Masterclass",
    description: "Create stunning 3D models and photorealistic renders for architectural visualization",
    date: "September 10-14, 2023",
    price: "Rp 2,500,000",
    certification: "Si Jalu 3D Specialist Certificate",
    seats: 10,
    tags: ["3D Modeling", "Architectural Visualization", "Rendering"]
  },
  {
    id: 6,
    title: "Video Production & Editing Intensive",
    description: "From pre to post-production: learn the complete workflow for creating professional videos",
    date: "September 22-24, 2023",
    price: "Rp 1,750,000",
    certification: "Si Jalu Video Producer Certificate",
    seats: 15,
    tags: ["Video Production", "Editing", "Cinematography"]
  },
  {
    id: 7,
    title: "Character Design for Animation",
    description: "Create memorable characters with personality for animation and illustration projects",
    date: "October 7-9, 2023",
    price: "Rp 1,350,000",
    certification: "Si Jalu Character Designer Certificate",
    seats: 12,
    tags: ["Character Design", "Illustration", "Animation"]
  },
  {
    id: 8,
    title: "Digital Marketing Strategy",
    description: "Develop comprehensive digital marketing strategies to promote your brand and products",
    date: "October 14-16, 2023",
    price: "Rp 1,900,000",
    certification: "Si Jalu Digital Marketer Certificate",
    seats: 20,
    tags: ["Digital Marketing", "SEO", "Content Strategy"]
  },
  {
    id: 9,
    title: "UX Research & User Testing",
    description: "Learn how to conduct effective user research and testing to create user-centered designs",
    date: "November 4-6, 2023",
    price: "Rp 1,800,000",
    certification: "Si Jalu UX Researcher Certificate",
    seats: 15,
    tags: ["UX Research", "User Testing", "UI/UX"]
  },
  {
    id: 10,
    title: "Photography Essentials",
    description: "Master the technical and creative aspects of photography for commercial and artistic work",
    date: "November 18-20, 2023",
    price: "Rp 1,600,000",
    certification: "Si Jalu Photographer Certificate",
    seats: 18,
    tags: ["Photography", "Lighting", "Photo Editing"]
  },
  {
    id: 11,
    title: "Motion Graphics & Animation",
    description: "Create compelling motion graphics and animations for digital marketing and explainer videos",
    date: "December 2-4, 2023",
    price: "Rp 1,850,000",
    certification: "Si Jalu Motion Designer Certificate",
    seats: 12,
    tags: ["Motion Graphics", "Animation", "After Effects"]
  },
  {
    id: 12,
    title: "Game Design Fundamentals",
    description: "Learn the principles of game design, mechanics, and level design for engaging player experiences",
    date: "December 16-18, 2023",
    price: "Rp 1,950,000",
    certification: "Si Jalu Game Designer Certificate",
    seats: 15,
    tags: ["Game Design", "Level Design", "Game Mechanics"]
  }];


  // All unique tags from courses
  const allTags = Array.from(new Set(courses.flatMap((course) => course.tags)));

  // Filtered courses based on active tag
  const filteredCourses = activeFilter === 'all' ?
  courses :
  courses.filter((course) => course.tags.includes(activeFilter));

  const handleRegister = (courseId: number) => {
    toast({
      title: "Registration Coming Soon",
      description: "Course registration will be available in the next update.",
      variant: "default"
    });
  };

  return (
    <div className="space-y-6" data-id="67zmcxvdj" data-path="src/components/dashboard/JaluCourseSection.tsx">
      <div className="flex justify-between items-center flex-wrap gap-4" data-id="48uu7ggti" data-path="src/components/dashboard/JaluCourseSection.tsx">
        <h2 className="text-2xl font-bold" data-id="kqe259n4j" data-path="src/components/dashboard/JaluCourseSection.tsx">Upcoming Courses</h2>
        <div className="flex flex-wrap gap-2" data-id="oahgop9y2" data-path="src/components/dashboard/JaluCourseSection.tsx">
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-id="hz42jxfa3" data-path="src/components/dashboard/JaluCourseSection.tsx">
        {filteredCourses.map((course) =>
        <Card key={course.id} className="border-2 border-gray-200 hover:border-sijalu-primary transition-colors">
            <CardHeader>
              <CardTitle>{course.title}</CardTitle>
              <CardDescription>{course.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4" data-id="ah9edg1ux" data-path="src/components/dashboard/JaluCourseSection.tsx">
                <div className="grid grid-cols-2 gap-4" data-id="crdv4vmyz" data-path="src/components/dashboard/JaluCourseSection.tsx">
                  <div data-id="rjsysbnld" data-path="src/components/dashboard/JaluCourseSection.tsx">
                    <p className="text-sm text-gray-500" data-id="zw38rj6oy" data-path="src/components/dashboard/JaluCourseSection.tsx">Date</p>
                    <p className="font-medium" data-id="iux7jnvqx" data-path="src/components/dashboard/JaluCourseSection.tsx">{course.date}</p>
                  </div>
                  <div data-id="vijwj040t" data-path="src/components/dashboard/JaluCourseSection.tsx">
                    <p className="text-sm text-gray-500" data-id="o1bi8061w" data-path="src/components/dashboard/JaluCourseSection.tsx">Registration Fee</p>
                    <p className="font-medium" data-id="scnbm1y0t" data-path="src/components/dashboard/JaluCourseSection.tsx">{course.price}</p>
                  </div>
                </div>
                
                <div data-id="1s3ylk32p" data-path="src/components/dashboard/JaluCourseSection.tsx">
                  <p className="text-sm text-gray-500" data-id="dw242x9d8" data-path="src/components/dashboard/JaluCourseSection.tsx">Certification</p>
                  <p className="font-medium" data-id="j5d81pssv" data-path="src/components/dashboard/JaluCourseSection.tsx">{course.certification}</p>
                </div>
                
                <div data-id="zcse325np" data-path="src/components/dashboard/JaluCourseSection.tsx">
                  <p className="text-sm text-gray-500" data-id="8dzd2mp9c" data-path="src/components/dashboard/JaluCourseSection.tsx">Available Seats</p>
                  <p className="font-medium" data-id="mjrt9ldas" data-path="src/components/dashboard/JaluCourseSection.tsx">{course.seats}</p>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-4" data-id="vloshkl7v" data-path="src/components/dashboard/JaluCourseSection.tsx">
                  {course.tags.map((tag, index) =>
                <span
                  key={index}
                  className="text-xs bg-sijalu-primary/10 text-sijalu-primary px-2 py-1 rounded-full" data-id="e4d348ub0" data-path="src/components/dashboard/JaluCourseSection.tsx">
                      {tag}
                    </span>
                )}
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button
              className="w-full bg-sijalu-green hover:bg-sijalu-green/90"
              onClick={() => handleRegister(course.id)}>
                Register Now
              </Button>
            </CardFooter>
          </Card>
        )}
      </div>
    </div>);

};

export default JaluCourseSection;