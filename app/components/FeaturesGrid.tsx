'use client';

const features = [
  { icon: '🎁', title: 'The Perfect Gift', description: 'A unique and thoughtful present that lights up any room and conversation.' },
  { icon: '💡', title: 'Ambient Lighting', description: 'Casts a warm, gentle light, creating a cozy atmosphere perfect for reading or relaxing.' },
  { icon: '🌲', title: 'Premium Materials', description: 'Crafted from high-quality, sustainable wood and durable, tear-resistant paper.' },
  { icon: '🔋', title: 'USB-Rechargeable', description: 'Enjoy up to 8 hours of light on a single charge with the included USB cable.' },
  { icon: '🎨', title: 'Versatile Design', description: 'Magnetic covers allow it to be used in countless configurations, from a table lamp to wall sconce.' },
  { icon: '🇮🇳', title: 'Made in India', description: 'Proudly designed and manufactured locally, supporting skilled craftsmanship.' },
];

const FeaturesGrid = () => (
  <section id="features" className="py-20 bg-black">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold mb-2">Why Choose LumiFold?</h2>
      {/* FIX: Changed it's to it&apos;s */}
      <p className="text-text-secondary mb-12">More than just a lamp, it&apos;s an experience.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(feature => (
          <div key={feature.title} className="bg-background p-6 rounded-lg border border-border-color">
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-text-secondary">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesGrid;