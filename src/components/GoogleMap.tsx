import { useState } from "react";
import { MapPin, ExternalLink } from "lucide-react";

interface GoogleMapProps {
  address?: string;
  className?: string;
}

export function GoogleMap({ 
  address = "Max Tin Poster, Gomtipur Rd, opp. R.K Estate, nr. Hathi Khai Road, Gomtipur, Ahmedabad, Gujarat 380021",
  className = ""
}: GoogleMapProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Encode the address for the embed URL
  const encodedAddress = encodeURIComponent(address);
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodedAddress}&zoom=15`;
  const directionsUrl = "https://maps.app.goo.gl/nutcu4JWrALbUtHa8?g_st=ipc";

  return (
    <div className={`relative rounded-2xl overflow-hidden shadow-card border border-border/50 ${className}`}>
      {/* Loading state */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-secondary to-muted flex items-center justify-center z-10">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin mx-auto mb-3" />
            <span className="text-sm text-muted-foreground">Loading map...</span>
          </div>
        </div>
      )}
      
      {/* Google Maps iframe */}
      <iframe
        src={mapUrl}
        width="100%"
        height="100%"
        style={{ border: 0, minHeight: "280px" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        onLoad={() => setIsLoaded(true)}
        title="Business Location"
        className="w-full h-full"
      />
      
      {/* Overlay with directions button */}
      <div className="absolute bottom-4 right-4">
        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg shadow-lg hover:bg-primary/90 transition-colors text-sm font-medium"
        >
          <MapPin className="w-4 h-4" />
          Get Directions
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}
