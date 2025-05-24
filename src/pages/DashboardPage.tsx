import { useState } from 'react';
import { Link, Outlet, useLocation, Navigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/contexts/AuthContext';
import Layout from '@/components/Layout';

const DashboardPage = () => {
  const { user, isAuthenticated } = useAuth();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('profile');

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  const isPersonalUser = user?.type === 'personal';

  return (
    <Layout>
      <div className="container mx-auto py-8 px-4" data-id="6eeymn3q4" data-path="src/pages/DashboardPage.tsx">
        <div className="flex flex-col md:grid md:grid-cols-4 gap-6" data-id="nytptjfgj" data-path="src/pages/DashboardPage.tsx">
          {/* Sidebar */}
          <div className="md:col-span-1" data-id="9ps08dkwq" data-path="src/pages/DashboardPage.tsx">
            <Card>
              <CardHeader className="pb-4">
                <CardTitle>Dashboard</CardTitle>
                <CardDescription>Manage your account</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <Tabs
                  value={activeTab}
                  onValueChange={setActiveTab}
                  orientation="vertical"
                  className="w-full">

                  <TabsList className="flex flex-col w-full h-auto bg-transparent space-y-1">
                    <TabsTrigger
                      value="profile"
                      className="justify-start w-full px-4"
                      asChild>

                      <Link to="/dashboard">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor" data-id="m2jchknum" data-path="src/pages/DashboardPage.tsx">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" data-id="v3y9gvx2i" data-path="src/pages/DashboardPage.tsx" />
                        </svg>
                        Profile
                      </Link>
                    </TabsTrigger>
                    <TabsTrigger
                      value="stats"
                      className="justify-start w-full px-4"
                      asChild>

                      <Link to="/dashboard/stats">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor" data-id="n2h2pgrea" data-path="src/pages/DashboardPage.tsx">
                          <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" data-id="ta37iv780" data-path="src/pages/DashboardPage.tsx" />
                        </svg>
                        Stats & Preferences
                      </Link>
                    </TabsTrigger>
                    <TabsTrigger
                      value="jalucourse"
                      className="justify-start w-full px-4"
                      asChild>

                      <Link to="/dashboard/jalucourse">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor" data-id="il3q8gwoj" data-path="src/pages/DashboardPage.tsx">
                          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" data-id="llpw6ao45" data-path="src/pages/DashboardPage.tsx" />
                        </svg>
                        JaluCourse
                      </Link>
                    </TabsTrigger>
                    <TabsTrigger
                      value="jalumentoring"
                      className="justify-start w-full px-4"
                      asChild>

                      <Link to="/dashboard/jalumentoring">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor" data-id="jtm3mfnmn" data-path="src/pages/DashboardPage.tsx">
                          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" data-id="y9ffx29vt" data-path="src/pages/DashboardPage.tsx" />
                        </svg>
                        JaluMentoring
                      </Link>
                    </TabsTrigger>
                    <TabsTrigger
                      value="jalurequest"
                      className="justify-start w-full px-4"
                      asChild>

                      <Link to="/dashboard/jalurequest">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor" data-id="dnu0y9a34" data-path="src/pages/DashboardPage.tsx">
                          <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" data-id="q92q2pmn6" data-path="src/pages/DashboardPage.tsx" />
                        </svg>
                        JaluRequest
                      </Link>
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </CardContent>
            </Card>
            
            {/* User Info Card */}
            <Card className="mt-6">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4" data-id="xucoj7sm0" data-path="src/pages/DashboardPage.tsx">
                  <div className="w-12 h-12 rounded-full bg-sijalu-primary/20 flex items-center justify-center" data-id="8hdo2ooyp" data-path="src/pages/DashboardPage.tsx">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-sijalu-primary" viewBox="0 0 20 20" fill="currentColor" data-id="4zyn8r6xa" data-path="src/pages/DashboardPage.tsx">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" data-id="qtaxxs3ky" data-path="src/pages/DashboardPage.tsx" />
                    </svg>
                  </div>
                  <div data-id="ze3m9onjx" data-path="src/pages/DashboardPage.tsx">
                    <CardTitle>{user?.name}</CardTitle>
                    <CardDescription>{user?.email}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4" data-id="72va8qaxj" data-path="src/pages/DashboardPage.tsx">
                  <div data-id="mcucxhpum" data-path="src/pages/DashboardPage.tsx">
                    <p className="text-sm text-gray-500" data-id="h02en366n" data-path="src/pages/DashboardPage.tsx">Account Type</p>
                    <p className="font-medium" data-id="607oekuhc" data-path="src/pages/DashboardPage.tsx">{isPersonalUser ? 'Personal' : 'Company'}</p>
                  </div>
                  
                  <div data-id="qypvwvwhn" data-path="src/pages/DashboardPage.tsx">
                    <p className="text-sm text-gray-500" data-id="tpmjraibj" data-path="src/pages/DashboardPage.tsx">Current Balance</p>
                    <p className="font-medium" data-id="ks2whn4iq" data-path="src/pages/DashboardPage.tsx">Rp {user?.cash?.toLocaleString() || '0'}</p>
                  </div>
                  
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => {
                      // In a real app, this would open a top-up modal
                      alert('Top-up feature coming soon!');
                    }}>

                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor" data-id="cc44lcpb7" data-path="src/pages/DashboardPage.tsx">
                      <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" data-id="mgazztfb7" data-path="src/pages/DashboardPage.tsx" />
                      <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" data-id="ceujomdxr" data-path="src/pages/DashboardPage.tsx" />
                    </svg>
                    Top Up Balance
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Main Content */}
          <div className="md:col-span-3" data-id="95gmotdvx" data-path="src/pages/DashboardPage.tsx">
            <Outlet />
          </div>
        </div>
      </div>
    </Layout>);

};

export default DashboardPage;