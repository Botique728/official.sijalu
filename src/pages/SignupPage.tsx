import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const SignupPage = () => {
  const navigate = useNavigate();
  const { signup } = useAuth();
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userType, setUserType] = useState<'personal' | 'company'>('personal');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    if (password !== confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    try {
      await signup(email, password, userType);
      toast({
        title: "Account created",
        description: "Welcome to Si Jalu!"
      });
      navigate('/dashboard');
    } catch (error) {
      toast({
        title: "Sign up failed",
        description: "There was an error creating your account",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto py-16 px-4" data-id="rv7staw0x" data-path="src/pages/SignupPage.tsx">
        <div className="max-w-md mx-auto" data-id="g4ohkdce8" data-path="src/pages/SignupPage.tsx">
          <Card className="border-sijalu-primary/20">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold text-center">Create an account</CardTitle>
              <CardDescription className="text-center">
                Enter your details to create your Si Jalu account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4" data-id="7i6nfrsnm" data-path="src/pages/SignupPage.tsx">
                <div className="space-y-2" data-id="r1q20xd34" data-path="src/pages/SignupPage.tsx">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required />

                </div>
                <div className="space-y-2" data-id="mvn5t7mdd" data-path="src/pages/SignupPage.tsx">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required />

                </div>
                <div className="space-y-2" data-id="wl6usfrh1" data-path="src/pages/SignupPage.tsx">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="••••••••"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required />

                </div>
                
                <div className="space-y-2" data-id="20v3d65rk" data-path="src/pages/SignupPage.tsx">
                  <Label>Account Type</Label>
                  <RadioGroup
                    value={userType}
                    onValueChange={(value) => setUserType(value as 'personal' | 'company')}
                    className="flex space-x-4">

                    <div className="flex items-center space-x-2" data-id="xwn00k8kp" data-path="src/pages/SignupPage.tsx">
                      <RadioGroupItem value="personal" id="personal" />
                      <Label htmlFor="personal" className="cursor-pointer">Personal</Label>
                    </div>
                    <div className="flex items-center space-x-2" data-id="rssinj9di" data-path="src/pages/SignupPage.tsx">
                      <RadioGroupItem value="company" id="company" />
                      <Label htmlFor="company" className="cursor-pointer">Company</Label>
                    </div>
                  </RadioGroup>
                </div>
                
                <div className="flex items-center space-x-2" data-id="tkkravtn6" data-path="src/pages/SignupPage.tsx">
                  <input
                    type="checkbox"
                    id="terms"
                    className="h-4 w-4 rounded border-gray-300"
                    required data-id="r0viujqac" data-path="src/pages/SignupPage.tsx" />

                  <Label htmlFor="terms" className="text-sm">
                    I agree to the{" "}
                    <Link to="/terms" className="text-sijalu-primary hover:underline">
                      Terms of Service
                    </Link>
                    {" "}and{" "}
                    <Link to="/privacy" className="text-sijalu-primary hover:underline">
                      Privacy Policy
                    </Link>
                  </Label>
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-sijalu-green hover:bg-sijalu-green/90"
                  disabled={isLoading}>

                  {isLoading ? "Creating account..." : "Create account"}
                </Button>
              </form>
              
              <div className="relative my-6" data-id="3s1zvs3l7" data-path="src/pages/SignupPage.tsx">
                <div className="absolute inset-0 flex items-center" data-id="fio863bjx" data-path="src/pages/SignupPage.tsx">
                  <div className="w-full border-t border-gray-300" data-id="ware5jl0k" data-path="src/pages/SignupPage.tsx"></div>
                </div>
                <div className="relative flex justify-center text-sm" data-id="jajw1rvpy" data-path="src/pages/SignupPage.tsx">
                  <span className="px-2 bg-white text-gray-500" data-id="h00mti2xf" data-path="src/pages/SignupPage.tsx">Or continue with</span>
                </div>
              </div>
              
              <div className="flex flex-col space-y-3" data-id="r5hxoared" data-path="src/pages/SignupPage.tsx">
                <Button
                  type="button"
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    toast({
                      title: "Social signup",
                      description: "This feature is coming soon!"
                    });
                  }}>

                  <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" data-id="l4zsejj5c" data-path="src/pages/SignupPage.tsx">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4" data-id="o6qhdjuuy" data-path="src/pages/SignupPage.tsx" />

                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853" data-id="y2c4bzz1t" data-path="src/pages/SignupPage.tsx" />

                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05" data-id="ef82ewmak" data-path="src/pages/SignupPage.tsx" />

                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335" data-id="p0akewehn" data-path="src/pages/SignupPage.tsx" />

                  </svg>
                  Google
                </Button>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col">
              <div className="text-center text-sm mt-2" data-id="idygo2i80" data-path="src/pages/SignupPage.tsx">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-sijalu-primary hover:underline">

                  Log in
                </Link>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </Layout>);

};

export default SignupPage;