'use client';

const CorporateGifting = () => (
  <section id="gifting" className="py-20">
    <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
      <div>
        {/* FIX: Changed They'll to They&apos;ll */}
        <h2 className="text-4xl font-bold">A Gift They&apos;ll Remember</h2>
        <p className="text-text-secondary mt-4 max-w-lg">Looking for a unique corporate gift for your clients or employees? The LumiFold lamp offers a premium, memorable experience. We offer bulk pricing and custom branding options.</p>
      </div>
      <form className="space-y-4 bg-gray-900 p-8 rounded-lg border border-border-color">
        <h3 className="text-2xl font-semibold mb-4">Enquire Now</h3>
        <input type="text" placeholder="Your Name" className="w-full p-3 bg-background border border-border-color rounded-md" />
        <input type="email" placeholder="Company Email" className="w-full p-3 bg-background border border-border-color rounded-md" />
        <input type="number" placeholder="Quantity" className="w-full p-3 bg-background border border-border-color rounded-md" />
        <button type="submit" className="w-full bg-accent text-black font-bold py-3 rounded-lg hover:bg-accent-hover transition-colors">Submit Inquiry</button>
      </form>
    </div>
  </section>
);

export default CorporateGifting;