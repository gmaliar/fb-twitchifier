var readyStateCheckInterval = setInterval(function() {
  if (document.readyState === "complete") {
    document.querySelector('[data-testid="wns_control"]').click();
    document.querySelector('[alt="enter channel view from watch and scroll"]').click();
    clearInterval(readyStateCheckInterval);

    var commentsIntervalCheckInterval = setInterval(function() {
      var comments = document.querySelectorAll('form.commentable_item');
      var video = document.querySelector('video');
      var tray = document.querySelector('#fbVideoStreamingReactionsTray');
      var streamStory = document.querySelector('.uiStreamStory');
      var messenger = document.querySelector('.fbDockWrapper');

      if (comments && video && tray && streamStory && messenger) {
        for (var i = 0; i < comments.length; i++) {
          comments[i].parentElement.parentElement.parentElement.remove();
        }

        if (video) {
          video.parentElement.style.margin = 0;
          video.parentElement.style.width = "100%";
          video.parentElement.parentElement.style.width = "100%";
        }

        tray.remove();
        streamStory.remove();
        messenger.remove();
        clearInterval(commentsIntervalCheckInterval);
      }
    }, 3000);
  }
}, 100);
