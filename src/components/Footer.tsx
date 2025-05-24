import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t py-8 mt-auto bg-white" data-id="1rwazzytk" data-path="src/components/Footer.tsx">
      <div className="container mx-auto px-4" data-id="iy9fx3gfy" data-path="src/components/Footer.tsx">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8" data-id="l6i3e6w6i" data-path="src/components/Footer.tsx">
          <div data-id="en0lndefa" data-path="src/components/Footer.tsx">
            <div className="flex items-center space-x-2 mb-4" data-id="3rxf9oh1y" data-path="src/components/Footer.tsx">
              <div className="w-8 h-8 rounded-full bg-sijalu-primary flex items-center justify-center" data-id="1mm062d5p" data-path="src/components/Footer.tsx">
                <span className="text-white font-bold text-sm" data-id="kh219z6p2" data-path="src/components/Footer.tsx">SJ</span>
              </div>
              <h3 className="text-lg font-bold text-sijalu-green" data-id="7ydb4drhy" data-path="src/components/Footer.tsx">Si Jalu</h3>
            </div>
            <p className="text-sm text-gray-600" data-id="o6l3yo8na" data-path="src/components/Footer.tsx">
              Connecting individuals and small businesses with trusted creative professionals.
            </p>
          </div>
          
          <div data-id="un0nyzav9" data-path="src/components/Footer.tsx">
            <h4 className="font-bold mb-4 text-sijalu-green" data-id="2kh8urg47" data-path="src/components/Footer.tsx">Quick Links</h4>
            <ul className="space-y-2 text-sm" data-id="e7qp5w8gz" data-path="src/components/Footer.tsx">
              <li data-id="0bru3mgzq" data-path="src/components/Footer.tsx"><Link to="/" className="hover:text-sijalu-primary">Home</Link></li>
              <li data-id="hhs8zu1ap" data-path="src/components/Footer.tsx"><Link to="/about" className="hover:text-sijalu-primary">About Us</Link></li>
              <li data-id="kax1sfnux" data-path="src/components/Footer.tsx"><Link to="/products" className="hover:text-sijalu-primary">Products</Link></li>
              <li data-id="hhyqjtflw" data-path="src/components/Footer.tsx"><Link to="/team" className="hover:text-sijalu-primary">Our Team</Link></li>
            </ul>
          </div>
          
          <div data-id="m01ungtqk" data-path="src/components/Footer.tsx">
            <h4 className="font-bold mb-4 text-sijalu-green" data-id="sedc26lwk" data-path="src/components/Footer.tsx">Our Services</h4>
            <ul className="space-y-2 text-sm" data-id="y3oj2f46u" data-path="src/components/Footer.tsx">
              <li data-id="fyfm4gmaw" data-path="src/components/Footer.tsx"><Link to="/products#jalucourse" className="hover:text-sijalu-primary">JaluCourse</Link></li>
              <li data-id="70zfj75wb" data-path="src/components/Footer.tsx"><Link to="/products#jalumentoring" className="hover:text-sijalu-primary">JaluMentoring</Link></li>
              <li data-id="d8oper3vr" data-path="src/components/Footer.tsx"><Link to="/products#jalurequest" className="hover:text-sijalu-primary">JaluRequest</Link></li>
            </ul>
          </div>
          
          <div data-id="yocmo3ss1" data-path="src/components/Footer.tsx">
            <h4 className="font-bold mb-4 text-sijalu-green" data-id="3oic8d37a" data-path="src/components/Footer.tsx">Contact Us</h4>
            <ul className="space-y-2 text-sm" data-id="8ou78yx8e" data-path="src/components/Footer.tsx">
              <li data-id="poekcbcu5" data-path="src/components/Footer.tsx">Email: info@sijalu.com</li>
              <li data-id="h2ps4xydq" data-path="src/components/Footer.tsx">Phone: +62 123 456 7890</li>
              <li data-id="3zfgtje9a" data-path="src/components/Footer.tsx">Address: Jakarta, Indonesia</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t text-center text-sm text-gray-500" data-id="s1oe78t2b" data-path="src/components/Footer.tsx">
          <p data-id="m94yp76ct" data-path="src/components/Footer.tsx">© {new Date().getFullYear()} Si Jalu Creative Platform. All rights reserved.</p>
        </div>
      </div>
    </footer>);

};

export default Footer;