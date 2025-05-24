import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

const MembershipPricing = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const [isAnnual, setIsAnnual] = useState(false);

  const tiers = [
  {
    name: 'Silver',
    description: 'Basic features for individuals just getting started',
    price: 'Free',
    annualPrice: 'Free',
    features: [
    'Access to basic JaluCourse content',
    'Limited JaluMentoring sessions (2/month)',
    'Basic JaluRequest access',
    'Community forum access',
    'Email support',
    'Public portfolio profile'],

    color: 'bg-gray-100',
    buttonVariant: 'outline',
    buttonText: 'Get Started'
  },
  {
    name: 'Gold',
    description: 'Advanced features for active creators',
    price: 'Rp 20,000',
    annualPrice: 'Rp 200,000',
    features: [
    'All Silver features',
    'Full access to JaluCourse library',
    'Priority JaluMentoring booking (5/month)',
    'Faster JaluRequest responses',
    'Discounted rates on paid courses (15% off)',
    'Priority email & chat support',
    'Featured profile placement'],

    color: 'bg-sijalu-primary/10',
    buttonVariant: 'default',
    buttonText: 'Upgrade Now',
    popular: true
  },
  {
    name: 'Diamond',
    description: 'Premium features for professionals',
    price: 'Rp 50,000',
    annualPrice: 'Rp 500,000',
    features: [
    'All Gold features',
    'Exclusive premium courses',
    'Unlimited mentoring sessions',
    'Priority matching with top partners',
    'Custom request handling',
    'Dedicated account manager',
    'Early access to new features',
    'White-label portfolio options',
    'Professional certification credits'],

    color: 'bg-sijalu-green/10',
    buttonVariant: 'default',
    buttonText: 'Get Premium',
    buttonStyle: 'bg-sijalu-green hover:bg-sijalu-green/90'
  }];


  const handleSelectTier = () => {
    if (!isAuthenticated) {
      navigate('/signup');
    } else {
      // In a real app, this would handle the subscription logic
      navigate('/dashboard');
    }
  };

  return (
    <section className="py-12 px-4" data-id="fg6v8wlut" data-path="src/components/MembershipPricing.tsx">
      <div className="text-center mb-10" data-id="bgttatquw" data-path="src/components/MembershipPricing.tsx">
        <h2 className="text-3xl font-bold mb-4" data-id="bwl6yn5ei" data-path="src/components/MembershipPricing.tsx">Choose Your <span className="text-sijalu-primary" data-id="i7a3cfhof" data-path="src/components/MembershipPricing.tsx">Membership</span> Plan</h2>
        <p className="text-gray-600 max-w-2xl mx-auto" data-id="e253l0rcm" data-path="src/components/MembershipPricing.tsx">
          Select the perfect membership tier that suits your creative needs and budget.
        </p>
        
        <div className="flex items-center justify-center mt-6" data-id="va7b90yls" data-path="src/components/MembershipPricing.tsx">
          <span className={`mr-3 ${isAnnual ? 'text-gray-500' : 'font-medium'}`} data-id="rz9f1ezwp" data-path="src/components/MembershipPricing.tsx">Monthly</span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="relative inline-flex h-6 w-11 items-center rounded-full bg-sijalu-primary" data-id="44ly8c7zs" data-path="src/components/MembershipPricing.tsx">

            <span className={`${isAnnual ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform rounded-full bg-white transition`} data-id="0rec0tfsm" data-path="src/components/MembershipPricing.tsx" />
          </button>
          <span className={`ml-3 ${isAnnual ? 'font-medium' : 'text-gray-500'}`} data-id="bs4dlyhoe" data-path="src/components/MembershipPricing.tsx">
            Annual <span className="text-xs text-sijalu-green" data-id="ld1jol35v" data-path="src/components/MembershipPricing.tsx">(Save 15%)</span>
          </span>
        </div>
      </div>
      
      <div className="flex flex-col space-y-8 md:grid md:grid-cols-3 md:gap-8 md:space-y-0 max-w-5xl mx-auto" data-id="y2oe410pb" data-path="src/components/MembershipPricing.tsx">
        {tiers.map((tier, index) =>
        <Card key={index} className={`border-2 ${tier.popular ? 'border-sijalu-primary' : 'border-gray-200'} ${tier.color} relative`}>
            {tier.popular &&
          <div className="absolute top-0 right-0" data-id="odz7bldtx" data-path="src/components/MembershipPricing.tsx">
                <div className="bg-sijalu-primary text-white text-xs px-3 py-1 rounded-bl-lg rounded-tr-md font-medium" data-id="ky1fcz1j3" data-path="src/components/MembershipPricing.tsx">
                  POPULAR
                </div>
              </div>
          }
            
            <CardHeader>
              <CardTitle className="text-xl font-bold">{tier.name}</CardTitle>
              <CardDescription>{tier.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6" data-id="9cvq4i3dt" data-path="src/components/MembershipPricing.tsx">
                <p className="text-3xl font-bold" data-id="o70bh2cty" data-path="src/components/MembershipPricing.tsx">
                  {isAnnual ? tier.annualPrice : tier.price}
                  {tier.name !== 'Silver' &&
                <span className="text-sm font-normal text-gray-600" data-id="8lz6o1wql" data-path="src/components/MembershipPricing.tsx">
                      /{isAnnual ? 'year' : 'month'}
                    </span>
                }
                </p>
              </div>
              
              <ul className="space-y-3" data-id="tn53ivhz8" data-path="src/components/MembershipPricing.tsx">
                {tier.features.map((feature, i) =>
              <li key={i} className="flex items-start" data-id="1dq69mcp0" data-path="src/components/MembershipPricing.tsx">
                    <svg className="h-5 w-5 text-sijalu-green mt-0.5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" data-id="blectx03j" data-path="src/components/MembershipPricing.tsx">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" data-id="cm3erj5cb" data-path="src/components/MembershipPricing.tsx" />
                    </svg>
                    <span className="text-gray-700" data-id="x0nxoilr2" data-path="src/components/MembershipPricing.tsx">{feature}</span>
                  </li>
              )}
              </ul>
            </CardContent>
            <CardFooter>
              <Button
              className={`w-full ${tier.buttonStyle || ''}`}
              variant={tier.buttonVariant as "outline" | "default"}
              onClick={handleSelectTier}>

                {tier.buttonText}
              </Button>
            </CardFooter>
          </Card>
        )}
      </div>
    </section>);

};

export default MembershipPricing;