// in /app/components/TrackOrderContent.tsx
'use client';

export default function TrackOrderContent() {
  return (
    <main className="flex items-center justify-center py-40">
      <div className="container mx-auto px-6 max-w-2xl text-center">
          <h1 className="text-4xl font-extrabold">Track Your Order</h1>
          <p className="text-text-secondary mt-4 mb-8">Enter the tracking ID sent to your email address to see the status of your shipment.</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input type="text" placeholder="Enter your Tracking ID" className="flex-grow p-4 bg-gray-900 border border-border-color rounded-md text-lg" />
              <button type="submit" className="bg-accent text-black font-bold py-4 px-8 rounded-md text-lg hover:bg-accent-hover transition-colors">Track</button>
          </form>
      </div>
    </main>
  );
}