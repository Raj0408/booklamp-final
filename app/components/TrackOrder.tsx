// in /app/components/TrackOrder.tsx
const TrackOrder = () => (
    <section id="track" className="py-20 bg-black">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <h2 className="text-4xl font-bold">Track Your Order</h2>
        <p className="text-text-secondary mt-4 mb-8">Enter the tracking ID sent to your email address to see the status of your shipment.</p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
          <input type="text" placeholder="Enter your Tracking ID" className="flex-grow p-3 bg-background border border-border-color rounded-md" />
          <button type="submit" className="bg-accent text-black font-bold py-3 px-8 rounded-lg hover:bg-yellow-500 transition-colors">Track</button>
        </div>
      </div>
    </section>
)

export default TrackOrder;