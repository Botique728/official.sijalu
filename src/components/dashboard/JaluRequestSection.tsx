import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const JaluRequestSection = () => {
  return (
    <div className="space-y-6" data-id="cufbb6r52" data-path="src/components/dashboard/JaluRequestSection.tsx">
      <h2 className="text-2xl font-bold" data-id="9o3vgoph7" data-path="src/components/dashboard/JaluRequestSection.tsx">Request Creative Services</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-id="hsm9vwven" data-path="src/components/dashboard/JaluRequestSection.tsx">
        <Card className="border-2 border-gray-200 hover:border-sijalu-primary transition-colors">
          <CardHeader>
            <CardTitle>Open Request</CardTitle>
            <CardDescription>
              Post a public job request that our creative professionals can view and apply to.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4" data-id="y8msj5i7a" data-path="src/components/dashboard/JaluRequestSection.tsx">
              <p className="text-gray-700" data-id="3eiqlwxe7" data-path="src/components/dashboard/JaluRequestSection.tsx">
                With Open Requests, you can:
              </p>
              <ul className="space-y-2" data-id="udrcmb5pj" data-path="src/components/dashboard/JaluRequestSection.tsx">
                <li className="flex items-start" data-id="80nuc9er9" data-path="src/components/dashboard/JaluRequestSection.tsx">
                  <svg className="h-5 w-5 text-sijalu-green mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20" data-id="ypp2xornk" data-path="src/components/dashboard/JaluRequestSection.tsx">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" data-id="amg7ji5ve" data-path="src/components/dashboard/JaluRequestSection.tsx" />
                  </svg>
                  <span data-id="kr4yjrjhy" data-path="src/components/dashboard/JaluRequestSection.tsx">Post detailed job requirements</span>
                </li>
                <li className="flex items-start" data-id="ua3ln46ok" data-path="src/components/dashboard/JaluRequestSection.tsx">
                  <svg className="h-5 w-5 text-sijalu-green mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20" data-id="ysy40c7nt" data-path="src/components/dashboard/JaluRequestSection.tsx">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" data-id="hqv8bobvw" data-path="src/components/dashboard/JaluRequestSection.tsx" />
                  </svg>
                  <span data-id="67ezwj34e" data-path="src/components/dashboard/JaluRequestSection.tsx">Receive applications from verified partners</span>
                </li>
                <li className="flex items-start" data-id="3g7l7y40h" data-path="src/components/dashboard/JaluRequestSection.tsx">
                  <svg className="h-5 w-5 text-sijalu-green mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20" data-id="6elehi3he" data-path="src/components/dashboard/JaluRequestSection.tsx">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" data-id="yv02toniq" data-path="src/components/dashboard/JaluRequestSection.tsx" />
                  </svg>
                  <span data-id="cdlkg30o4" data-path="src/components/dashboard/JaluRequestSection.tsx">Review portfolios and select the best fit</span>
                </li>
                <li className="flex items-start" data-id="zz35q91ga" data-path="src/components/dashboard/JaluRequestSection.tsx">
                  <svg className="h-5 w-5 text-sijalu-green mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20" data-id="surzk29d7" data-path="src/components/dashboard/JaluRequestSection.tsx">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" data-id="ctvdspbog" data-path="src/components/dashboard/JaluRequestSection.tsx" />
                  </svg>
                  <span data-id="ni2jd3bzi" data-path="src/components/dashboard/JaluRequestSection.tsx">Set your own budget</span>
                </li>
              </ul>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              className="w-full bg-sijalu-primary hover:bg-sijalu-primary/90"
              asChild>
              <Link to="/jalu-request-open">Create Open Request</Link>
            </Button>
          </CardFooter>
        </Card>
        
        <Card className="border-2 border-gray-200 hover:border-sijalu-primary transition-colors">
          <CardHeader>
            <CardTitle>Direct Request</CardTitle>
            <CardDescription>
              Browse partner portfolios and send a request directly to a specific professional.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4" data-id="x5jx2hwm4" data-path="src/components/dashboard/JaluRequestSection.tsx">
              <p className="text-gray-700" data-id="ffelvmg48" data-path="src/components/dashboard/JaluRequestSection.tsx">
                With Direct Requests, you can:
              </p>
              <ul className="space-y-2" data-id="i230nff39" data-path="src/components/dashboard/JaluRequestSection.tsx">
                <li className="flex items-start" data-id="7fo88gam7" data-path="src/components/dashboard/JaluRequestSection.tsx">
                  <svg className="h-5 w-5 text-sijalu-green mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20" data-id="wzvyfxokn" data-path="src/components/dashboard/JaluRequestSection.tsx">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" data-id="03iwq67jz" data-path="src/components/dashboard/JaluRequestSection.tsx" />
                  </svg>
                  <span data-id="zbq6qekgz" data-path="src/components/dashboard/JaluRequestSection.tsx">Browse professional portfolios</span>
                </li>
                <li className="flex items-start" data-id="6o67u0ew2" data-path="src/components/dashboard/JaluRequestSection.tsx">
                  <svg className="h-5 w-5 text-sijalu-green mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20" data-id="ves4wjtqo" data-path="src/components/dashboard/JaluRequestSection.tsx">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" data-id="rfsx51pc6" data-path="src/components/dashboard/JaluRequestSection.tsx" />
                  </svg>
                  <span data-id="gw7s4ibl5" data-path="src/components/dashboard/JaluRequestSection.tsx">Contact specific partners directly</span>
                </li>
                <li className="flex items-start" data-id="aaqsx09ui" data-path="src/components/dashboard/JaluRequestSection.tsx">
                  <svg className="h-5 w-5 text-sijalu-green mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20" data-id="nrlsdq64h" data-path="src/components/dashboard/JaluRequestSection.tsx">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" data-id="fuzdxo3m2" data-path="src/components/dashboard/JaluRequestSection.tsx" />
                  </svg>
                  <span data-id="kez7lfhjf" data-path="src/components/dashboard/JaluRequestSection.tsx">Negotiate project details privately</span>
                </li>
                <li className="flex items-start" data-id="qvv98fycu" data-path="src/components/dashboard/JaluRequestSection.tsx">
                  <svg className="h-5 w-5 text-sijalu-green mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20" data-id="2p85rls63" data-path="src/components/dashboard/JaluRequestSection.tsx">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" data-id="j0o6myq0b" data-path="src/components/dashboard/JaluRequestSection.tsx" />
                  </svg>
                  <span data-id="to3dpvcnc" data-path="src/components/dashboard/JaluRequestSection.tsx">Work with professionals you prefer</span>
                </li>
              </ul>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              className="w-full bg-sijalu-green hover:bg-sijalu-green/90"
              asChild>
              <Link to="/jalu-request-direct">Browse Partners</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>);

};

export default JaluRequestSection;