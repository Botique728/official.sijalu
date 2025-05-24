import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Message {
  text: string;
  isUser: boolean;
}

const AIChat = () => {
  const [messages, setMessages] = useState<Message[]>([
  { text: 'Hi there! I\'m JaluBot. How can I help you today?', isUser: false }]
  );
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const faqAnswers: Record<string, string> = {
    'what is si jalu': 'Si Jalu is an innovative digital platform designed to connect individuals and small businesses with trusted creative professionals. We offer services like JaluCourse, JaluMentoring, and JaluRequest to help you with your creative needs.',
    'how does jalucourse work': 'JaluCourse offers special learning sessions officially hosted by Si Jalu, providing hands-on training and certification on creative topics. You can browse available courses, register, and attend sessions to enhance your skills.',
    'what is jalumentoring': 'JaluMentoring is a consultation-based feature where you can book sessions with experienced creative professionals for guidance, feedback, or skill development. You can choose mentors based on their expertise and schedule sessions at your convenience.',
    'how does jalurequest work': 'JaluRequest connects you with creative professionals for services like graphic design, web development, and hosting. You can choose between Open Request (posting a public job) or Direct Request (reaching out to specific partners).',
    'what are the membership tiers': 'We offer three membership tiers: Silver (Free), Gold (Rp 20,000/month), and Diamond (Rp 50,000/month). Each tier provides different benefits and access to our services.',
    'how do i sign up': 'You can sign up by clicking the "Sign Up" button in the top right corner of the website. Fill out the registration form, choose your account type (personal or company), and you\'re ready to go!',
    'what payment methods do you accept': 'We accept various payment methods including bank transfers, e-wallets, and credit/debit cards. You can top up your account balance and use it for transactions within the platform.',
    'how can i become a creative partner': 'To become a creative partner, you need to sign up, complete your profile with portfolio samples, and apply for partner verification. Once verified, you can offer your services through JaluMentoring and JaluRequest.',
    'is there a mobile app': 'Currently, we offer a responsive web application that works well on mobile devices. A dedicated mobile app is in our development roadmap and will be released soon.',
    'how do i contact support': 'You can reach our support team via email at support@sijalu.com or through the contact form on our website. We aim to respond to all inquiries within 24 hours.'
  };

  const suggestedQuestions = [
  'What is Si Jalu?',
  'How does JaluCourse work?',
  'What is JaluMentoring?',
  'How does JaluRequest work?',
  'What are the membership tiers?',
  'How do I sign up?',
  'What payment methods do you accept?',
  'How can I become a creative partner?',
  'Is there a mobile app?',
  'How do I contact support?'];


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    // Add user message
    const userMessage = { text: inputText, isUser: true };
    setMessages((prev) => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI processing time
    setTimeout(() => {
      const query = inputText.toLowerCase();
      let response = 'I\'m not sure about that. Can you ask something else about Si Jalu?';

      // Check if the query contains any of our FAQ keywords
      for (const [key, answer] of Object.entries(faqAnswers)) {
        if (query.includes(key)) {
          response = answer;
          break;
        }
      }

      setMessages((prev) => [...prev, { text: response, isUser: false }]);
      setIsTyping(false);
    }, 1000);
  };

  const handleSuggestedQuestion = (question: string) => {
    setInputText(question);
    handleSubmit({ preventDefault: () => {} } as React.FormEvent);
  };

  return (
    <Card className="w-full max-w-md mx-auto shadow-lg border-sijalu-primary border-2">
      <CardContent className="p-0">
        <div className="bg-sijalu-primary p-3 rounded-t-lg" data-id="49evx4djq" data-path="src/components/AIChat.tsx">
          <h3 className="text-white font-bold flex items-center" data-id="phh5y780s" data-path="src/components/AIChat.tsx">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor" data-id="n66vz1jya" data-path="src/components/AIChat.tsx">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" data-id="x3k5j6aur" data-path="src/components/AIChat.tsx" />
            </svg>
            JaluBot AI Assistant
          </h3>
        </div>
        
        <ScrollArea className="h-80 p-4">
          <div className="space-y-4" data-id="45g1wvw41" data-path="src/components/AIChat.tsx">
            {messages.map((message, index) =>
            <div
              key={index}
              className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`} data-id="raqpjjqr2" data-path="src/components/AIChat.tsx">

                <div
                className={`max-w-xs p-3 rounded-lg ${
                message.isUser ?
                'bg-sijalu-green text-white' :
                'bg-gray-100 text-gray-800'}`
                } data-id="31muewiih" data-path="src/components/AIChat.tsx">

                  {message.text}
                </div>
              </div>
            )}
            {isTyping &&
            <div className="flex justify-start" data-id="ztijybhc4" data-path="src/components/AIChat.tsx">
                <div className="bg-gray-100 p-3 rounded-lg" data-id="4d0xpx8zz" data-path="src/components/AIChat.tsx">
                  <div className="flex space-x-1" data-id="9stp28s5q" data-path="src/components/AIChat.tsx">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" data-id="u11ybi85l" data-path="src/components/AIChat.tsx"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} data-id="9wpx71276" data-path="src/components/AIChat.tsx"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} data-id="d2ezdrplw" data-path="src/components/AIChat.tsx"></div>
                  </div>
                </div>
              </div>
            }
          </div>
        </ScrollArea>
        
        <div className="p-3 border-t" data-id="3kagbtxd9" data-path="src/components/AIChat.tsx">
          <form onSubmit={handleSubmit} className="flex gap-2" data-id="0lwnh1s6k" data-path="src/components/AIChat.tsx">
            <Input
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Type your question..."
              className="flex-grow" />

            <Button
              type="submit"
              className="bg-sijalu-primary hover:bg-sijalu-primary/90">

              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" data-id="01vkrlrhz" data-path="src/components/AIChat.tsx">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" data-id="lp33nqnv1" data-path="src/components/AIChat.tsx" />
              </svg>
            </Button>
          </form>
        </div>
        
        <div className="p-3 bg-gray-50 rounded-b-lg" data-id="0f2gqu5z4" data-path="src/components/AIChat.tsx">
          <p className="text-xs text-gray-500 mb-2" data-id="5hnf4j0gb" data-path="src/components/AIChat.tsx">Suggested questions:</p>
          <div className="flex flex-wrap gap-2" data-id="gle891h2d" data-path="src/components/AIChat.tsx">
            {suggestedQuestions.map((question, index) =>
            <Button
              key={index}
              variant="outline"
              size="sm"
              className="text-xs py-1 h-auto"
              onClick={() => handleSuggestedQuestion(question)}>

                {question}
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>);

};

export default AIChat;