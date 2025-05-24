import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';

const StatsSection = () => {
  const { user } = useAuth();

  const interests = [
  'Graphic Design',
  'Web Development',
  'UI/UX',
  'Animation',
  'Branding',
  'Video Editing',
  'Photography',
  'Illustration',
  'Motion Graphics',
  'Copywriting',
  'Social Media'];


  const userInterests = user?.preferences || [];

  const toggleInterest = (interest: string) => {
    // In a real app, this would update the user's preferences in the backend
    console.log('Toggling interest:', interest);
  };

  return (
    <div className="space-y-6" data-id="c51xoi9kb" data-path="src/components/dashboard/StatsSection.tsx">
      <Card>
        <CardHeader>
          <CardTitle>Usage Statistics</CardTitle>
          <CardDescription>Your activity on Si Jalu</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-id="1u4hpj89b" data-path="src/components/dashboard/StatsSection.tsx">
            <div className="bg-sijalu-primary/10 p-4 rounded-lg" data-id="vtstldnkz" data-path="src/components/dashboard/StatsSection.tsx">
              <div className="flex justify-between items-start" data-id="j72x95efd" data-path="src/components/dashboard/StatsSection.tsx">
                <div data-id="ph82wosp6" data-path="src/components/dashboard/StatsSection.tsx">
                  <p className="text-sm text-gray-500" data-id="pzbjae4vt" data-path="src/components/dashboard/StatsSection.tsx">JaluCourse</p>
                  <p className="text-2xl font-bold" data-id="dgjnc6wyf" data-path="src/components/dashboard/StatsSection.tsx">{user?.usage?.JaluCourse || 0}</p>
                </div>
                <div className="bg-sijalu-primary text-white p-2 rounded-full" data-id="x2kaw2h40" data-path="src/components/dashboard/StatsSection.tsx">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" data-id="wkobebuyp" data-path="src/components/dashboard/StatsSection.tsx">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" data-id="iv6wavc0z" data-path="src/components/dashboard/StatsSection.tsx" />
                  </svg>
                </div>
              </div>
              <p className="text-sm mt-2" data-id="d73zj2vrt" data-path="src/components/dashboard/StatsSection.tsx">Courses completed</p>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg" data-id="2tn9jhy6h" data-path="src/components/dashboard/StatsSection.tsx">
              <div className="flex justify-between items-start" data-id="tgk1d51rv" data-path="src/components/dashboard/StatsSection.tsx">
                <div data-id="arbn2hsoq" data-path="src/components/dashboard/StatsSection.tsx">
                  <p className="text-sm text-gray-500" data-id="lo00crqzc" data-path="src/components/dashboard/StatsSection.tsx">JaluMentoring</p>
                  <p className="text-2xl font-bold" data-id="x24w3q3wg" data-path="src/components/dashboard/StatsSection.tsx">{user?.usage?.JaluMentoring || 0}</p>
                </div>
                <div className="bg-sijalu-green text-white p-2 rounded-full" data-id="6ra1ux6yh" data-path="src/components/dashboard/StatsSection.tsx">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" data-id="ierknjnty" data-path="src/components/dashboard/StatsSection.tsx">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" data-id="ay0zrduui" data-path="src/components/dashboard/StatsSection.tsx" />
                  </svg>
                </div>
              </div>
              <p className="text-sm mt-2" data-id="hbs3jdoff" data-path="src/components/dashboard/StatsSection.tsx">Mentoring sessions</p>
            </div>
            
            <div className="bg-orange-50 p-4 rounded-lg" data-id="7pp2ptcos" data-path="src/components/dashboard/StatsSection.tsx">
              <div className="flex justify-between items-start" data-id="a6sey85ww" data-path="src/components/dashboard/StatsSection.tsx">
                <div data-id="2yf01b7dy" data-path="src/components/dashboard/StatsSection.tsx">
                  <p className="text-sm text-gray-500" data-id="fhnmzdgp8" data-path="src/components/dashboard/StatsSection.tsx">JaluRequest</p>
                  <p className="text-2xl font-bold" data-id="6j84i3jz1" data-path="src/components/dashboard/StatsSection.tsx">{user?.usage?.JaluRequest || 0}</p>
                </div>
                <div className="bg-orange-500 text-white p-2 rounded-full" data-id="y4klku0r1" data-path="src/components/dashboard/StatsSection.tsx">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" data-id="z257qq15q" data-path="src/components/dashboard/StatsSection.tsx">
                    <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" data-id="wbqnghz4n" data-path="src/components/dashboard/StatsSection.tsx" />
                  </svg>
                </div>
              </div>
              <p className="text-sm mt-2" data-id="uzzltnhhr" data-path="src/components/dashboard/StatsSection.tsx">Requests completed</p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Transaction History</CardTitle>
          <CardDescription>Your recent transactions</CardDescription>
        </CardHeader>
        <CardContent>
          {user?.transactions && user.transactions.length > 0 ?
          <div className="space-y-4" data-id="x0ufj8asu" data-path="src/components/dashboard/StatsSection.tsx">
              {user.transactions.map((transaction, index) =>
            <div key={index} className="flex justify-between items-center p-3 border rounded-lg" data-id="992srg7qk" data-path="src/components/dashboard/StatsSection.tsx">
                  <div data-id="uuo56pzz7" data-path="src/components/dashboard/StatsSection.tsx">
                    <p className="font-medium" data-id="izb1fifeh" data-path="src/components/dashboard/StatsSection.tsx">{transaction.description}</p>
                    <p className="text-sm text-gray-500" data-id="816gzb4b0" data-path="src/components/dashboard/StatsSection.tsx">{transaction.date}</p>
                  </div>
                  <p className={`font-medium ${transaction.amount > 0 ? 'text-green-600' : 'text-red-600'}`} data-id="40bbvk1w3" data-path="src/components/dashboard/StatsSection.tsx">
                    {transaction.amount > 0 ? '+' : ''}{transaction.amount.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}
                  </p>
                </div>
            )}
            </div> :

          <div className="text-center py-8" data-id="8gxiqvi1x" data-path="src/components/dashboard/StatsSection.tsx">
              <p className="text-gray-500" data-id="hzdj5u8s6" data-path="src/components/dashboard/StatsSection.tsx">No transactions yet</p>
            </div>
          }
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Interests & Preferences</CardTitle>
          <CardDescription>Select your areas of interest</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2" data-id="hw80q5037" data-path="src/components/dashboard/StatsSection.tsx">
            {interests.map((interest) => {
              const isSelected = userInterests.includes(interest);
              return (
                <Badge
                  key={interest}
                  variant={isSelected ? "default" : "outline"}
                  className={`cursor-pointer ${isSelected ? 'bg-sijalu-primary hover:bg-sijalu-primary/90' : ''}`}
                  onClick={() => toggleInterest(interest)}>

                  {interest}
                </Badge>);

            })}
          </div>
          
          <div className="mt-6" data-id="xj4p305tj" data-path="src/components/dashboard/StatsSection.tsx">
            <Button
              className="w-full md:w-auto"
              onClick={() => {
                // In a real app, this would save the preferences to the backend
                console.log('Saving preferences');
              }}>

              Save Preferences
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>);

};

export default StatsSection;