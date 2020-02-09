var meetingLink = new Vue({
    el: '#gen-link',
    data: {
      message: '',
      reqUrl: 'https://concallonline.azurewebsites.net/api/js-genMeetingLink?code=eAzp1A6lgDYhYRtRczs4sBhdpW6OgxP8cKA/RCZFytE5Lzha8Tuqiw==',
      reqBody: {"subject": "Concall Online Meeting"}
    },
    methods:{
      genLinkFunc: function(){
          this.message = "Loading meeting link";
          this.$http.post(this.reqUrl, this.reqBody).then((response) => {
            this.message = response.data.joinUrl;
          }, (response) => {
            this.message = "Error";
          });
      },
      doCopy: function() {
        let testingCodeToCopy = document.querySelector('#meet-link')
        testingCodeToCopy.setAttribute('type', 'text')
        testingCodeToCopy.select()

        try {
          var successful = document.execCommand('copy');
          var msg = successful ? 'successful' : 'unsuccessful';
          alert('Meeting link was copied ' + msg);
        } catch (err) {
          alert('Oops, unable to copy');
        }
      },
    }
  })