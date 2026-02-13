import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX, Play, Pause } from "lucide-react";

const YOUTUBE_VIDEO_ID = "8XzQML4y7cs";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
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
          autoplay: 0,
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
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {/* Hidden YouTube player */}
      <div className="absolute w-0 h-0 overflow-hidden pointer-events-none">
        <div id="yt-player" />
      </div>

      {showControls && (
        <div className="bg-card/90 backdrop-blur-md rounded-2xl p-4 card-glow border border-border/50 animate-scale-in flex flex-col gap-3 min-w-[180px]">
          <div className="flex items-center gap-3">
            <button
              onClick={togglePlay}
              className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-colors"
              disabled={!playerReady}
            >
              {isPlaying ? (
                <Pause className="w-4 h-4 text-primary" />
              ) : (
                <Play className="w-4 h-4 text-primary ml-0.5" />
              )}
            </button>
            <button
              onClick={toggleMute}
              className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4 text-muted-foreground" />
              ) : (
                <Volume2 className="w-4 h-4 text-muted-foreground" />
              )}
            </button>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            step="5"
            value={isMuted ? 0 : volume}
            onChange={(e) => {
              setVolume(parseInt(e.target.value));
              setIsMuted(false);
            }}
            className="w-full h-1.5 rounded-full appearance-none bg-primary/20 accent-primary cursor-pointer"
          />
          <p className="text-xs text-muted-foreground font-body text-center">
            Volume: {isMuted ? 0 : volume}%
          </p>
        </div>
      )}
      <button
        onClick={() => setShowControls(!showControls)}
        className="bg-card/90 backdrop-blur-md rounded-full px-4 py-3 card-glow border border-border/50 flex items-center gap-2 hover:bg-card transition-all group"
      >
        <span className="text-lg">🎧</span>
        <span className="text-sm text-muted-foreground font-body group-hover:text-foreground transition-colors">
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
