import { useState } from 'react';
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const JaluRequestOpenPage = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [newRequest, setNewRequest] = useState({
    title: '',
    description: '',
    budget: '',
    deadline: '',
    tags: ''
  });

  // Mock data for open requests
  const openRequests = [
  {
    id: 1,
    title: "Logo Design for Local Bakery",
    description: "Need a modern, memorable logo for our artisanal bakery in Jakarta.",
    budget: "Rp 500,000 - Rp 1,500,000",
    deadline: "7 days",
    applicants: 8,
    tags: ["Logo Design", "Branding", "Illustration"]
  },
  {
    id: 2,
    title: "Social Media Content for Fashion Brand",
    description: "Looking for a content creator to produce Instagram posts for our sustainable fashion line.",
    budget: "Rp 2,000,000 - Rp 3,000,000",
    deadline: "30 days",
    applicants: 12,
    tags: ["Social Media", "Content Creation", "Photography"]
  },
  {
    id: 3,
    title: "Website Development for Restaurant",
    description: "Need a responsive website with online ordering capability for our restaurant.",
    budget: "Rp 5,000,000 - Rp 8,000,000",
    deadline: "21 days",
    applicants: 5,
    tags: ["Web Development", "UI/UX", "E-commerce"]
  }];


  const handleViewApplicants = (requestId: number) => {
    // In a real app, this would navigate to a detailed view
    toast({
      title: "Feature in development",
      description: "This feature will be available soon.",
      variant: "default"
    });
  };

  const handleCreateRequest = () => {
    setShowForm(true);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewRequest((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmitRequest = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Request Created",
        description: "Your request has been published successfully!",
        variant: "default"
      });
      setNewRequest({
        title: '',
        description: '',
        budget: '',
        deadline: '',
        tags: ''
      });
      setShowForm(false);
    }, 1500);
  };

  const handleCancelForm = () => {
    setShowForm(false);
    setNewRequest({
      title: '',
      description: '',
      budget: '',
      deadline: '',
      tags: ''
    });
  };

  return (
    <Layout>
      <section className="py-12 px-4" data-id="pnsansrbp" data-path="src/pages/JaluRequestOpenPage.tsx">
        <div className="container mx-auto" data-id="w0mf8k676" data-path="src/pages/JaluRequestOpenPage.tsx">
          <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between" data-id="osq6pcrbb" data-path="src/pages/JaluRequestOpenPage.tsx">
            <div data-id="fqqza3qij" data-path="src/pages/JaluRequestOpenPage.tsx">
              <h1 className="text-3xl font-bold mb-2" data-id="xa2wb3csf" data-path="src/pages/JaluRequestOpenPage.tsx">Open Requests</h1>
              <p className="text-gray-600" data-id="ujp0q4xhp" data-path="src/pages/JaluRequestOpenPage.tsx">
                Post a public job request that creative professionals can view and apply to.
              </p>
            </div>
            {!showForm &&
            <Button
              className="mt-4 md:mt-0 bg-sijalu-primary hover:bg-sijalu-primary/90"
              onClick={handleCreateRequest}>
                Create New Request
              </Button>
            }
          </div>

          {showForm &&
          <Card className="mb-8 border-2 border-sijalu-primary">
              <CardHeader>
                <CardTitle>Create New Request</CardTitle>
                <CardDescription>Fill in the details to post your request to our creative community</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmitRequest} className="space-y-4" data-id="h3f1msoby" data-path="src/pages/JaluRequestOpenPage.tsx">
                  <div className="space-y-2" data-id="v4gqihv79" data-path="src/pages/JaluRequestOpenPage.tsx">
                    <Label htmlFor="title">Project Title</Label>
                    <Input
                    id="title"
                    name="title"
                    placeholder="e.g., Logo Design for My Bakery"
                    value={newRequest.title}
                    onChange={handleFormChange}
                    required />

                  </div>
                  
                  <div className="space-y-2" data-id="x0j1kfik3" data-path="src/pages/JaluRequestOpenPage.tsx">
                    <Label htmlFor="description">Project Description</Label>
                    <textarea
                    id="description"
                    name="description"
                    placeholder="Describe your project in detail..."
                    value={newRequest.description}
                    onChange={handleFormChange}
                    className="min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    required data-id="jdw22p7xl" data-path="src/pages/JaluRequestOpenPage.tsx" />

                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4" data-id="gud25jjs9" data-path="src/pages/JaluRequestOpenPage.tsx">
                    <div className="space-y-2" data-id="ohjyutmb7" data-path="src/pages/JaluRequestOpenPage.tsx">
                      <Label htmlFor="budget">Budget Range (Rp)</Label>
                      <Input
                      id="budget"
                      name="budget"
                      placeholder="e.g., 500,000 - 1,500,000"
                      value={newRequest.budget}
                      onChange={handleFormChange}
                      required />

                    </div>
                    <div className="space-y-2" data-id="c89t9quo8" data-path="src/pages/JaluRequestOpenPage.tsx">
                      <Label htmlFor="deadline">Deadline</Label>
                      <Input
                      id="deadline"
                      name="deadline"
                      type="date"
                      value={newRequest.deadline}
                      onChange={handleFormChange}
                      required />

                    </div>
                  </div>
                  
                  <div className="space-y-2" data-id="h489glumn" data-path="src/pages/JaluRequestOpenPage.tsx">
                    <Label htmlFor="tags">Tags (separated by commas)</Label>
                    <Input
                    id="tags"
                    name="tags"
                    placeholder="e.g., Logo Design, Branding, Illustration"
                    value={newRequest.tags}
                    onChange={handleFormChange}
                    required />

                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-md" data-id="gcu0dwag0" data-path="src/pages/JaluRequestOpenPage.tsx">
                    <h4 className="font-medium mb-2" data-id="nwaygjgvz" data-path="src/pages/JaluRequestOpenPage.tsx">Request Visibility</h4>
                    <p className="text-sm text-gray-600" data-id="8peea3xnq" data-path="src/pages/JaluRequestOpenPage.tsx">Your request will be visible to all Si Jalu partner professionals who can then submit applications.</p>
                  </div>
                  
                  <div className="flex justify-end gap-2 pt-4" data-id="cn4yg5cnp" data-path="src/pages/JaluRequestOpenPage.tsx">
                    <Button type="button" variant="outline" onClick={handleCancelForm}>Cancel</Button>
                    <Button type="submit" className="bg-sijalu-primary hover:bg-sijalu-primary/90" disabled={isLoading}>
                      {isLoading ? "Publishing..." : "Publish Request"}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          }


          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3" data-id="q2v752qyb" data-path="src/pages/JaluRequestOpenPage.tsx">
            {openRequests.map((request) =>
            <Card key={request.id} className="border-2 border-gray-200 hover:border-sijalu-primary transition-colors">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">{request.title}</CardTitle>
                  <CardDescription>{request.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4" data-id="vwk320bx9" data-path="src/pages/JaluRequestOpenPage.tsx">
                    <div className="grid grid-cols-2 gap-2 text-sm" data-id="qq2qxiffe" data-path="src/pages/JaluRequestOpenPage.tsx">
                      <div data-id="wby2x2c3h" data-path="src/pages/JaluRequestOpenPage.tsx">
                        <p className="text-gray-500" data-id="fw5iysnxv" data-path="src/pages/JaluRequestOpenPage.tsx">Budget</p>
                        <p className="font-medium" data-id="1srullz99" data-path="src/pages/JaluRequestOpenPage.tsx">{request.budget}</p>
                      </div>
                      <div data-id="id0ptx46h" data-path="src/pages/JaluRequestOpenPage.tsx">
                        <p className="text-gray-500" data-id="22pqpotgt" data-path="src/pages/JaluRequestOpenPage.tsx">Deadline</p>
                        <p className="font-medium" data-id="t5aug1ugt" data-path="src/pages/JaluRequestOpenPage.tsx">{request.deadline}</p>
                      </div>
                      <div data-id="npd7o83sa" data-path="src/pages/JaluRequestOpenPage.tsx">
                        <p className="text-gray-500" data-id="hkhb4wts0" data-path="src/pages/JaluRequestOpenPage.tsx">Applicants</p>
                        <p className="font-medium" data-id="i17y1t1eh" data-path="src/pages/JaluRequestOpenPage.tsx">{request.applicants}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2" data-id="613iaz3ao" data-path="src/pages/JaluRequestOpenPage.tsx">
                      {request.tags.map((tag, index) =>
                    <span key={index} className="text-xs bg-sijalu-primary/10 text-sijalu-primary px-2 py-1 rounded-full" data-id="qkdb64i8i" data-path="src/pages/JaluRequestOpenPage.tsx">
                          {tag}
                        </span>
                    )}
                    </div>
                    
                    <Button
                    className="w-full"
                    onClick={() => handleViewApplicants(request.id)}>

                      View Applicants
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>
    </Layout>);

};

export default JaluRequestOpenPage;