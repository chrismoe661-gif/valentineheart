import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX, Play, Pause } from "lucide-react";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Using a royalty-free lo-fi ambient track
    const audio = new Audio(
      "https://cdn.pixabay.com/audio/2024/11/01/audio_4956b4aedb.mp3"
    );
    audio.loop = true;
    audio.volume = volume;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const togglePlay = async () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      try {
        await audioRef.current.play();
      } catch {
        // Autoplay blocked
      }
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => setIsMuted(!isMuted);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {showControls && (
        <div className="bg-card/90 backdrop-blur-md rounded-2xl p-4 card-glow border border-border/50 animate-scale-in flex flex-col gap-3 min-w-[180px]">
          <div className="flex items-center gap-3">
            <button
              onClick={togglePlay}
              className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-colors"
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
            max="1"
            step="0.05"
            value={isMuted ? 0 : volume}
            onChange={(e) => {
              setVolume(parseFloat(e.target.value));
              setIsMuted(false);
            }}
            className="w-full h-1.5 rounded-full appearance-none bg-primary/20 accent-primary cursor-pointer"
          />
          <p className="text-xs text-muted-foreground font-body text-center">
            Volume: {isMuted ? 0 : Math.round(volume * 100)}%
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
