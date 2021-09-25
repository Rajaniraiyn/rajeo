/**!
 *
 * © 2021 Rajaniraiyn
 *
 * LICENCE: https://raw.githubusercontent.com/Rajaniraiyn/rajeo/main/LICENSE
 *
 */
"use strict";
((_) => {
  "use strict";
  let videoElements = [...document.getElementsByTagName("video")];

  /**
   *
   * HTML template to inject
   *
   * @param {string} src URL of the Video
   * @param {string} id Unique ID for scripts
   * @param {string} title for the top bar
   * @param {boolean | string} autoplay
   * @returns {string}
   */
  const template = (src, id, title, autoplay) => {
    if (!title) {
      title = src.split("/");
      title = title[title.length - 1].split(".")[0];
    }

    return `
    <div class="rajeo-player" id="${id}" >
    <link rel="stylesheet" href="./style.b.css">
        <div class="rajeo-overlay">
            <div class="rajeo-animation"></div>
        </div>
        <div class="rajeo-top">
            <img src="https://avatar.statically.workers.dev/avatar/${title.toUpperCase()}/?shape=circle&s=20" />
            <span class="rajeo-title" title=${title}>${title}</span>
        </div>
        <video src="${src}" autoplay=${autoplay} style="max-height: 90vh; width: 95vw;"></video>

        <div class="rajeo-bottom">
            <div class="rajeo-controls">
                <div class="rajeo-buttons-left">
                    <div class="rajeo-pause-play">
                        <img src="https://fonts.gstatic.com/s/i/materialiconsround/play_arrow/v15/24px.svg"
                            class="rajeo-play" title="play">
                        <img src="https://fonts.gstatic.com/s/i/materialiconsround/pause/v15/24px.svg" class="rajeo-pause"
                            style="display: none;" title="pause">
                    </div>
                    <img src="https://fonts.gstatic.com/s/i/materialiconsround/volume_up/v13/24px.svg" class="rajeo-sound">
                </div>
                <div class="rajeo-progress">
                    <div class="rajeo-load-progress"></div>
                    <input type="range" class="rajeo-progress-toggle" min="0" max="100" step="0.01" value="0">
                </div>
                <div class="rajeo-buttons-right">
                    <img src="https://fonts.gstatic.com/s/i/materialiconsround/picture_in_picture_alt/v12/24px.svg"
                        class="rajeo-pip" title="Toggle picture in picture">
                    <div class="rajeo-fullscreen">
                        <img src="https://fonts.gstatic.com/s/i/materialicons/fullscreen/v12/24px.svg" class="rajeo-full" title="Toggle fullscreen">
                    </div>
                    <img src="https://fonts.gstatic.com/s/i/materialiconsround/more_vert/v18/24px.svg" class="rajeo-more" title="More">
                </div>
            </div>
        </div>
    </div>
    `;
  };

  /**
   *
   * REVERSED FOR LOOP
   *
   * Most efficient loop method
   *
   * @param {array} array
   * @param {Function} callback
   */
  function forEach(array, callback) {
    for (var i = 0, len = array.length; i < len; i++) {
      callback(array[i], i);
    }
  }

  forEach(videoElements, (videoElem, id) => {
    injectPlayer(videoElem, id);
  });

  /**
   *
   * Injects Template to DOM and attaches scripts
   *
   * @param {HTMLVideoElement} videoElem
   * @param {string | number} id
   */
  function injectPlayer(videoElem, id) {
    var id = "rajeo-" + (id || Date.now());
    videoElem.insertAdjacentHTML(
      "beforebegin",
      template(videoElem.src, id, videoElem.title, videoElem.autoplay)
    );
    videoElem.remove();
    setTimeout((_) => {
      addFunctions(id);
    }, 0.1e3);
  }

  /**
   *
   * Attaches all necessary functions
   *
   * @param {string} id
   */
  function addFunctions(id) {
    const player = document.getElementById(id),
      video = player.getElementsByTagName("video")[0],
      overlay = player.getElementsByClassName("rajeo-overlay")[0],
      pause_play_div = player.getElementsByClassName("rajeo-pause-play")[0],
      pause_icon = player.getElementsByClassName("rajeo-pause")[0],
      play_icon = player.getElementsByClassName("rajeo-play")[0],
      slider = player.getElementsByClassName("rajeo-progress-toggle")[0],
      loadProgress = player.getElementsByClassName("rajeo-load-progress")[0],
      full = player.getElementsByClassName("rajeo-full")[0],
      pip = player.getElementsByClassName("rajeo-pip")[0];

    pause_play_div.onmousedown = pause_play;

    overlay.onmousedown = pause_play;

    /**
     * Toggles Pause and Play
     */
    function pause_play() {
      if (video.paused || video.ended) {
        play();
      } else {
        pause();
      }
    }

    /**
     * Play the video
     */
    function play() {
      play_icon.style.display = "none";
      pause_icon.style.display = "block";
      video.play();
    }

    /**
     * Pauses the Video
     */
    function pause() {
      play_icon.style.display = "block";
      pause_icon.style.display = "none";
      video.pause();
    }

    video.onplay = play;

    video.onpause = pause;

    /**
     *
     * Updates the slider to specific value
     *
     * @param {string | number} value in percentage without `%` i.e. less than 100
     *
     * @example updateSlider("50") or updateSlider(50)
     */
    function updateSlider(value) {
      slider.value = value;
      slider.style.setProperty(
        "--track-color",
        `linear-gradient(90deg, red ${value}%, transparent ${value}%)`
      );
    }

    video.ontimeupdate = (e) => {
      updateSlider(
        ((e.target.currentTime / e.target.duration) * 100).toString()
      );

      if (e.target.currentTime === e.target.duration) {
        pause();
      }
      loadProgress.style.width =
        (e.target.buffered.end(0) / e.target.duration) * 100 + "%";
    };

    slider.oninput = (e) => {
      updateSlider(e.target.value);

      video.currentTime = (parseInt(e.target.value) / 100) * video.duration;
    };

    /**
     *
     * Toggles fullscreen
     *
     * @param {HTMLElement} element
     */
    function toggleFullscreen(element) {
      const is_fullscreen = !(
        window.innerWidth == screen.width && window.innerHeight == screen.height
      );
      if (is_fullscreen) {
        const requestFullScreen =
          element.requestFullscreen ||
          element.webkitRequestFullScreen ||
          element.mozRequestFullScreen ||
          element.msRequestFullScreen;
        requestFullScreen.call(element);
        full.src = full.src.replace("fullscreen", "fullscreen_exit");
      } else {
        const cancelFullScreen =
          document.exitFullscreen ||
          document.mozCancelFullScreen ||
          document.webkitExitFullscreen ||
          document.msExitFullscreen;
        cancelFullScreen.call(document);
        full.src = full.src.replace("fullscreen_exit", "fullscreen");
      }
    }

    /**
     * Toggles Picture-in-Picture aka PiP
     */
    function togglePiP() {
      if (document.pictureInPictureEnabled && !video.disablePictureInPicture) {
        try {
          if (document.pictureInPictureElement) {
            document.exitPictureInPicture();
          } else video.requestPictureInPicture();
        } catch (err) {
          console.error(err);
        }
      } else video.remove();
    }

    /**
     *
     * @param {number} value
     */
    function updateVolume(value) {
      video.volume = value;
    }

    full.onmousedown = (_) => {
      toggleFullscreen(player);
    };

    pip.onmousedown = togglePiP;

    setTimeout((_) => {
      loadProgress.style.width =
        (video.buffered.end(0) / video.duration) * 100 + "%";
    }, 1e3);
  }
})();
