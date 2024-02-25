document.addEventListener("DOMContentLoaded", function () 
{
    const video = document.getElementById("myVideo");
    const playButton = document.getElementById("playButton");
    const stopButton = document.getElementById("stopButton");
    const muteButton = document.getElementById("muteButton");
    const volumeSlider = document.getElementById("volumeSlider");
    const progressBar = document.getElementById("progressBar");
    const previousButton = document.getElementById("previousButton");
    const nextButton = document.getElementById("nextButton");
    const forwardButton = document.getElementById("forwardButton");
    const backwardButton = document.getElementById("backwardButton");

    // Define a playlist of video sources
    const videoSources = 
    [
        "big_buck_bunny.mp4",
        "frozen.mp4",
        // Add more video sources as needed
    ];

    // Index of the current video in the playlist
    let currentVideoIndex = 0; 

    // Play/pause button
    playButton.addEventListener("click", () => 
    {
        if (video.paused) 
        {
            video.play();
            playButton.textContent = "Pause";
        } 
        else 
        {
            video.pause();
            playButton.textContent = "Play";
        }
    });

    // Stop button
    stopButton.addEventListener("click", () => 
    {
        video.pause();
        video.currentTime = 0;
        playButton.textContent = "Play";
    });

    // Mute button
    muteButton.addEventListener("click", () => 
    {
        if (video.muted) 
        {
            video.muted = false;
            muteButton.textContent = "Mute";
        } 
        else 
        {
            video.muted = true;
            muteButton.textContent = "Unmute";
        }
    });

    // Volume slider
    volumeSlider.addEventListener("input", () => 
    {
        video.volume = volumeSlider.value;
    });

    // Update progress bar
    video.addEventListener("timeupdate", () => 
    {
        const progress = (video.currentTime / video.duration) * 100;
        progressBar.style.width = `${progress}%`;
    });

    // Previous button
    previousButton.addEventListener("click", () => 
    {
        if (currentVideoIndex > 0) 
        {
            currentVideoIndex--;
            loadCurrentVideo();
        } 
        else 
        {
            alert("No previous video available");
        }
    });

    // Next button
    nextButton.addEventListener("click", () => 
    {
        if (currentVideoIndex < videoSources.length - 1) 
        {
            currentVideoIndex++;
            loadCurrentVideo();
        } 
        else 
        {
            alert("No next video available");
        }
    });

    // Forward button
    forwardButton.addEventListener("click", () => 
    {
        video.currentTime += 5;
    });

    // Backward button
    backwardButton.addEventListener("click", () => {
        video.currentTime -= 5;
    });

    // Load the initial video
    loadCurrentVideo();

    
    // Function to load the current video from the playlist
    function loadCurrentVideo() 
    {
        video.src = videoSources[currentVideoIndex];
        video.play();
        playButton.textContent = "Pause";
    }
});