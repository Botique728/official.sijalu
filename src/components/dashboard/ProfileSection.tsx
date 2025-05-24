import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

const ProfileSection = () => {
  const { user, updateProfile } = useAuth();
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [isTopUpOpen, setIsTopUpOpen] = useState(false);
  const [topUpAmount, setTopUpAmount] = useState('');
  const [formData, setFormData] = useState({
    name: user?.name || '',
    age: user?.age || '',
    job: user?.job || '',
    companyName: user?.companyName || '',
    startingDate: user?.startingDate || '',
    companyType: user?.companyType || ''
  });

  const isPersonalUser = user?.type === 'personal';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    updateProfile({
      name: formData.name,
      ...(isPersonalUser ?
      {
        age: Number(formData.age),
        job: formData.job
      } :
      {
        companyName: formData.companyName,
        startingDate: formData.startingDate,
        companyType: formData.companyType
      })

    });

    toast({
      title: "Profile updated",
      description: "Your profile information has been updated successfully."
    });

    setIsEditing(false);
  };

  const handleTopUp = (e: React.FormEvent) => {
    e.preventDefault();
    const amount = parseInt(topUpAmount);

    if (isNaN(amount) || amount <= 0) {
      toast({
        title: "Invalid amount",
        description: "Please enter a valid amount.",
        variant: "destructive"
      });
      return;
    }

    // Update the user's balance
    updateProfile({
      cash: (user?.cash || 0) + amount,
      transactions: [
      ...(user?.transactions || []),
      { date: new Date().toISOString().split('T')[0], description: 'Top Up', amount: amount }]

    });

    toast({
      title: "Top Up Successful",
      description: `Rp ${amount.toLocaleString()} has been added to your balance.`
    });

    setTopUpAmount('');
    setIsTopUpOpen(false);
  };

  return (
    <div className="space-y-8" data-id="evza1078y" data-path="src/components/dashboard/ProfileSection.tsx">
    <Card>
      <CardHeader>
        <CardTitle>My Profile</CardTitle>
        <CardDescription>Manage your personal information</CardDescription>
      </CardHeader>
      <CardContent>
        {isEditing ?
          <form onSubmit={handleSubmit} className="space-y-4" data-id="ko7suseln" data-path="src/components/dashboard/ProfileSection.tsx">
            <div className="space-y-2" data-id="zg58s7mj7" data-path="src/components/dashboard/ProfileSection.tsx">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required />

            </div>
            
            {isPersonalUser ?
            // Personal user fields
            <>
                <div className="space-y-2" data-id="1gi7ttzzt" data-path="src/components/dashboard/ProfileSection.tsx">
                  <Label htmlFor="age">Age</Label>
                  <Input
                  id="age"
                  name="age"
                  type="number"
                  value={formData.age}
                  onChange={handleInputChange} />

                </div>
                <div className="space-y-2" data-id="6kj1wsogh" data-path="src/components/dashboard/ProfileSection.tsx">
                  <Label htmlFor="job">Job/Profession</Label>
                  <Input
                  id="job"
                  name="job"
                  value={formData.job}
                  onChange={handleInputChange} />

                </div>
              </> :

            // Company user fields
            <>
                <div className="space-y-2" data-id="ueebb56zl" data-path="src/components/dashboard/ProfileSection.tsx">
                  <Label htmlFor="companyName">Company Name</Label>
                  <Input
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange} />

                </div>
                <div className="space-y-2" data-id="kx9bjbnz5" data-path="src/components/dashboard/ProfileSection.tsx">
                  <Label htmlFor="startingDate">Starting Date</Label>
                  <Input
                  id="startingDate"
                  name="startingDate"
                  type="date"
                  value={formData.startingDate}
                  onChange={handleInputChange} />

                </div>
                <div className="space-y-2" data-id="jtgfmo1hq" data-path="src/components/dashboard/ProfileSection.tsx">
                  <Label htmlFor="companyType">Company Type</Label>
                  <Input
                  id="companyType"
                  name="companyType"
                  value={formData.companyType}
                  onChange={handleInputChange} />

                </div>
              </>
            }
            
            <div className="flex justify-end space-x-2 pt-4" data-id="bfn7kiyle" data-path="src/components/dashboard/ProfileSection.tsx">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsEditing(false)}>

                Cancel
              </Button>
              <Button type="submit">Save Changes</Button>
            </div>
          </form> :

          <div className="space-y-6" data-id="kngjebi4q" data-path="src/components/dashboard/ProfileSection.tsx">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4" data-id="60ct1a1iw" data-path="src/components/dashboard/ProfileSection.tsx">
              <div data-id="hydnl4up3" data-path="src/components/dashboard/ProfileSection.tsx">
                <h3 className="text-sm font-medium text-gray-500" data-id="i1clc89jr" data-path="src/components/dashboard/ProfileSection.tsx">Name</h3>
                <p className="mt-1 text-sm font-medium" data-id="u45orz95z" data-path="src/components/dashboard/ProfileSection.tsx">{user?.name}</p>
              </div>
              <div data-id="e2sa0srwk" data-path="src/components/dashboard/ProfileSection.tsx">
                <h3 className="text-sm font-medium text-gray-500" data-id="xzc119fak" data-path="src/components/dashboard/ProfileSection.tsx">Email</h3>
                <p className="mt-1 text-sm font-medium" data-id="44987tw0m" data-path="src/components/dashboard/ProfileSection.tsx">{user?.email}</p>
              </div>
              
              {isPersonalUser ?
              // Personal user info
              <>
                  <div data-id="jsb0vg3ly" data-path="src/components/dashboard/ProfileSection.tsx">
                    <h3 className="text-sm font-medium text-gray-500" data-id="nhm8b0o22" data-path="src/components/dashboard/ProfileSection.tsx">Age</h3>
                    <p className="mt-1 text-sm font-medium" data-id="8nfqnjm6c" data-path="src/components/dashboard/ProfileSection.tsx">{user?.age || 'Not specified'}</p>
                  </div>
                  <div data-id="pnks1y3jn" data-path="src/components/dashboard/ProfileSection.tsx">
                    <h3 className="text-sm font-medium text-gray-500" data-id="7fl8ajkhn" data-path="src/components/dashboard/ProfileSection.tsx">Job/Profession</h3>
                    <p className="mt-1 text-sm font-medium" data-id="cg825h3cl" data-path="src/components/dashboard/ProfileSection.tsx">{user?.job || 'Not specified'}</p>
                  </div>
                </> :

              // Company user info
              <>
                  <div data-id="xjsgribf7" data-path="src/components/dashboard/ProfileSection.tsx">
                    <h3 className="text-sm font-medium text-gray-500" data-id="m3ryn5jkt" data-path="src/components/dashboard/ProfileSection.tsx">Company Name</h3>
                    <p className="mt-1 text-sm font-medium" data-id="qx64mga0e" data-path="src/components/dashboard/ProfileSection.tsx">{user?.companyName || 'Not specified'}</p>
                  </div>
                  <div data-id="ampl3nyy4" data-path="src/components/dashboard/ProfileSection.tsx">
                    <h3 className="text-sm font-medium text-gray-500" data-id="druepfxen" data-path="src/components/dashboard/ProfileSection.tsx">Starting Date</h3>
                    <p className="mt-1 text-sm font-medium" data-id="u0sam4t03" data-path="src/components/dashboard/ProfileSection.tsx">{user?.startingDate || 'Not specified'}</p>
                  </div>
                  <div data-id="omalccl1m" data-path="src/components/dashboard/ProfileSection.tsx">
                    <h3 className="text-sm font-medium text-gray-500" data-id="rwmg8f37q" data-path="src/components/dashboard/ProfileSection.tsx">Company Type</h3>
                    <p className="mt-1 text-sm font-medium" data-id="ob1cmdoak" data-path="src/components/dashboard/ProfileSection.tsx">{user?.companyType || 'Not specified'}</p>
                  </div>
                </>
              }
            </div>
            
            <div className="pt-4" data-id="8djctv7r2" data-path="src/components/dashboard/ProfileSection.tsx">
              <Button
                variant="outline"
                onClick={() => setIsEditing(true)}
                className="w-full md:w-auto">

                Edit Profile
              </Button>
            </div>
          </div>
          }
      </CardContent>
    </Card>

    {/* Balance Card */}
    <Card>
      <CardHeader>
        <CardTitle>My Balance</CardTitle>
        <CardDescription>Manage your Si Jalu wallet</CardDescription>
      </CardHeader>
      <CardContent>
        {isTopUpOpen ?
          <form onSubmit={handleTopUp} className="space-y-4" data-id="4gjsl543l" data-path="src/components/dashboard/ProfileSection.tsx">
            <div className="space-y-2" data-id="zlnp7ex04" data-path="src/components/dashboard/ProfileSection.tsx">
              <Label htmlFor="amount">Amount (Rp)</Label>
              <Input
                id="amount"
                name="amount"
                type="number"
                placeholder="Enter amount"
                value={topUpAmount}
                onChange={(e) => setTopUpAmount(e.target.value)}
                required />

            </div>
            <div className="grid grid-cols-2 gap-4" data-id="s1m5ev7zg" data-path="src/components/dashboard/ProfileSection.tsx">
              <div data-id="rx34ymomb" data-path="src/components/dashboard/ProfileSection.tsx">
                <Label htmlFor="paymentMethod">Payment Method</Label>
                <select
                  id="paymentMethod"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" data-id="nrci7u2vp" data-path="src/components/dashboard/ProfileSection.tsx">

                  <option value="bca" data-id="6am0p337e" data-path="src/components/dashboard/ProfileSection.tsx">BCA</option>
                  <option value="mandiri" data-id="fnuokza3u" data-path="src/components/dashboard/ProfileSection.tsx">Mandiri</option>
                  <option value="bni" data-id="f13uif1jw" data-path="src/components/dashboard/ProfileSection.tsx">BNI</option>
                  <option value="gopay" data-id="9ibe539w5" data-path="src/components/dashboard/ProfileSection.tsx">GoPay</option>
                  <option value="ovo" data-id="728xnve3h" data-path="src/components/dashboard/ProfileSection.tsx">OVO</option>
                </select>
              </div>
              <div data-id="sfd814vvl" data-path="src/components/dashboard/ProfileSection.tsx">
                <Label htmlFor="promoCode">Promo Code (Optional)</Label>
                <Input id="promoCode" placeholder="Enter promo code" />
              </div>
            </div>
            <div className="flex justify-end space-x-2 pt-4" data-id="6as3noo35" data-path="src/components/dashboard/ProfileSection.tsx">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsTopUpOpen(false)}>

                Cancel
              </Button>
              <Button type="submit" className="bg-sijalu-green hover:bg-sijalu-green/90">Top Up Now</Button>
            </div>
          </form> :

          <div className="space-y-6" data-id="251oejgcb" data-path="src/components/dashboard/ProfileSection.tsx">
            <div className="rounded-lg bg-gradient-to-r from-sijalu-primary to-sijalu-green p-6 text-white" data-id="wrikag1x6" data-path="src/components/dashboard/ProfileSection.tsx">
              <h3 className="text-sm font-medium text-white/80" data-id="ohd0ywakq" data-path="src/components/dashboard/ProfileSection.tsx">Current Balance</h3>
              <p className="mt-2 text-3xl font-bold" data-id="lejchnole" data-path="src/components/dashboard/ProfileSection.tsx">Rp {user?.cash?.toLocaleString() || '0'}</p>
            </div>
            
            <div className="space-y-4" data-id="ug3adh3oa" data-path="src/components/dashboard/ProfileSection.tsx">
              <h3 className="text-lg font-semibold" data-id="e5wnknoji" data-path="src/components/dashboard/ProfileSection.tsx">Recent Transactions</h3>
              {user?.transactions && user.transactions.length > 0 ?
              <div className="space-y-2" data-id="e7bte4yf9" data-path="src/components/dashboard/ProfileSection.tsx">
                  {user.transactions.slice(0, 5).map((transaction, index) =>
                <div key={index} className="flex justify-between items-center py-2 border-b" data-id="xx2vob3gk" data-path="src/components/dashboard/ProfileSection.tsx">
                      <div data-id="7ghre1uyu" data-path="src/components/dashboard/ProfileSection.tsx">
                        <p className="font-medium" data-id="cvxuoglb4" data-path="src/components/dashboard/ProfileSection.tsx">{transaction.description}</p>
                        <p className="text-sm text-gray-500" data-id="v51u0g791" data-path="src/components/dashboard/ProfileSection.tsx">{transaction.date}</p>
                      </div>
                      <p className={`font-bold ${transaction.amount > 0 ? 'text-sijalu-green' : 'text-red-500'}`} data-id="bmgznp7wj" data-path="src/components/dashboard/ProfileSection.tsx">
                        {transaction.amount > 0 ? '+' : ''}{transaction.amount.toLocaleString()}
                      </p>
                    </div>
                )}
                </div> :

              <p className="text-gray-500" data-id="fblt9x2t5" data-path="src/components/dashboard/ProfileSection.tsx">No transactions yet</p>
              }
            </div>
            
            <div className="pt-4" data-id="3hbe7ipgl" data-path="src/components/dashboard/ProfileSection.tsx">
              <Button
                onClick={() => setIsTopUpOpen(true)}
                className="w-full bg-sijalu-primary hover:bg-sijalu-primary/90">

                Top Up Balance
              </Button>
            </div>
          </div>
          }
      </CardContent>
    </Card>
    </div>);

};

export default ProfileSection;