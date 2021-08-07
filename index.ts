import SoundPlayer from './sound-player';

const soundConsumer = () => {
    const soundPlayer = new SoundPlayer();
    const coolSoundfile = "song.mp3"
    soundPlayer.playSoundFile(coolSoundfile);
}

export default  soundConsumer