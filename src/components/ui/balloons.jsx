import * as React from "react"
import { cn } from "@/lib/utils"
import { balloons, textBalloons } from "balloons-js"

const Balloons = React.forwardRef(
  ({ 
    type = "default", 
    text, 
    fontSize = 120, 
    color = "#000000", 
    className, 
    onLaunch,
    count = 10, // Add count parameter with default of 10 balloons
    speed = 3   // Add speed parameter to control how fast balloons rise
  }, ref) => {
    const containerRef = React.useRef(null)
    
    const launchAnimation = React.useCallback(() => {
      if (type === "default") {
        // Pass configuration options to control number of balloons
        balloons({
          count: count,        // Number of balloons to create
          speed: speed,        // Speed factor for balloon animation
          gravity: 0.1,        // Lower gravity makes balloons rise slower
          dispersion: 0.8      // How spread out the balloons are
        })
      } else if (type === "text" && text) {
        textBalloons([
          {
            text,
            fontSize,
            color,
            count: count      // Number of text balloons
          },
        ])
      }
      
      if (onLaunch) {
        onLaunch()
      }
    }, [type, text, fontSize, color, onLaunch, count, speed])

    // Export animation launch method
    React.useImperativeHandle(ref, () => ({
      launchAnimation,
      ...(containerRef.current || {})
    }), [launchAnimation])

    return <div ref={containerRef} className={cn("balloons-container", className)} />;
  }
)
Balloons.displayName = "Balloons"

export { Balloons }