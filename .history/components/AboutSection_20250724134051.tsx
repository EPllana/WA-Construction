
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="bg-black text-white py-24 sm:py-32 px-6 sm:px-8">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-sm tracking-wider text-white/70 mb-2">01.1 About US</p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Reliable Constructors</h2>
          <div className="space-y-4 text-white/80 font-light leading-relaxed">
            <p className="font-semibold text-white/90">
              WA CONTRACTOR: A Construction Company Built on Precision, Integrity, and Results
            </p>
            <p>
              At WA Contractor, we measure our success not just by completed structures, but by the lasting value we create for our clients and the communities we serve. Our reputation is built on a track record of delivering construction excellence across diverse project types and complexities assignment.
            </p>
            <p>
              Whether undertaking new construction or complex renovations, WA Contractor approaches each project with the same level of dedication and commitment to outstanding results. As a fully licensed and insured contractor, we bring both professional credentials and practical experience to every project.
            </p>
          </div>
        </div>
        <div className="w-full h-96">
            <img 
                src="https://images.unsplash.com/photo-1542359649-31e03cdde675?q=80&w=1974&auto=format&fit=crop" 
                alt="Abstract architectural detail"
                className="w-full h-full object-cover"
            />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
