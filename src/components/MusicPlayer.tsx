import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX, Play, Pause } from "lucide-react";

const YOUTUBE_VIDEO_ID = "8XzQML4y7cs";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(30);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [playerReady, setPlayerReady] = useState(false);
  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load YouTube IFrame API
    if (!(window as any).YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.head.appendChild(tag);
    }

    const initPlayer = () => {
      playerRef.current = new (window as any).YT.Player("yt-player", {
        videoId: YOUTUBE_VIDEO_ID,
        playerVars: {
          autoplay: 1,
          loop: 1,
          playlist: YOUTUBE_VIDEO_ID,
          controls: 0,
          disablekb: 1,
          fs: 0,
          modestbranding: 1,
          rel: 0,
        },
        events: {
          onReady: () => {
            playerRef.current.setVolume(volume);
            playerRef.current.playVideo();
            setPlayerReady(true);
          },
        },
      });
    };

    if ((window as any).YT && (window as any).YT.Player) {
      initPlayer();
    } else {
      (window as any).onYouTubeIframeAPIReady = initPlayer;
    }

    return () => {
      if (playerRef.current?.destroy) playerRef.current.destroy();
    };
  }, []);

  useEffect(() => {
    if (playerRef.current?.setVolume) {
      playerRef.current.setVolume(isMuted ? 0 : volume);
    }
  }, [volume, isMuted]);

  const togglePlay = () => {
    if (!playerRef.current || !playerReady) return;
    if (isPlaying) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => setIsMuted(!isMuted);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2">
      {/* Hidden YouTube player */}
      <div className="absolute w-0 h-0 overflow-hidden pointer-events-none">
        <div id="yt-player" />
      </div>

      <button
        onClick={togglePlay}
        disabled={!playerReady}
        className="bg-card/90 backdrop-blur-md rounded-full p-3 sm:px-4 sm:py-3 card-glow border border-border/50 flex items-center gap-2 hover:bg-card transition-all group active:scale-95 touch-manipulation"
      >
        {isPlaying ? (
          <Pause className="w-5 h-5 text-primary" />
        ) : (
          <Play className="w-5 h-5 text-primary ml-0.5" />
        )}
        <span className="hidden sm:inline text-sm text-muted-foreground font-body group-hover:text-foreground transition-colors">
          {isPlaying ? "Now playing..." : "Play soft music"}
        </span>
        {isPlaying && (
          <span className="flex gap-0.5">
            {[1, 2, 3].map((i) => (
              <span
                key={i}
                className="w-0.5 bg-primary rounded-full animate-soft-pulse"
                style={{
                  height: `${8 + i * 3}px`,
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            ))}
          </span>
        )}
      </button>
    </div>
  );
};

export default MusicPlayer;
