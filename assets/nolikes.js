$(document).ready(function() {
  var $machine = createContainer('machine')
  var $mixed = createContainer('mixed')
  var $human = createContainer('human')
  $human.hide()
  $mixed.hide()
  var machineShuffle= createShuffledArray(0, 63);
  var humanShuffle = createShuffledArray(0, 63);
  var mixedShuffle = createShuffledArray(0, 63);
  createMachineImages(machineShuffle)
  createHumanImages(humanShuffle)
  createMixedImages(mixedShuffle)

  var $window = $("#images");
  $('#loader_img').show();
  $window.imagesLoaded(function() {
    $('#images').show();
    $('#loader_img').hide();
  })

  $('#radio input').on('change', function() {
    if(this.value === 'Human') {
      emptyColumns('#human');
      var humanShuffle = createShuffledArray(0, 63)
      createHumanImages(humanShuffle)
      $('#machine').hide()
      $('#mixed').hide()
      $('#loader_img_2').show()
      setTimeout(function() {
        $('#images').show();
        $('#loader_img_2').hide();
        $('#human').show()
      }, 700)
    }
    if(this.value === 'Machine') {
      emptyColumns('#machine');
      var machineShuffle= createShuffledArray(0, 63)
      createMachineImages(machineShuffle)
      $('#human').hide()
      $('#mixed').hide()
      $('#loader_img_2').show()
      setTimeout(function() {
        $('#images').show();
        $('#loader_img_2').hide();
        $('#machine').show()
      }, 700)
    }
    if(this.value === 'Mixed') {
      emptyColumns('#mixed');
      var mixedShuffle = createShuffledArray(0, 63)
      createMixedImages(mixedShuffle)
      $('#human').hide()
      $('#machine').hide()
      $('#loader_img_2').show()
      setTimeout(function() {
        $('#images').show();
        $('#loader_img_2').hide();
        $('#mixed').show()
      }, 700)
    }
  });

});

function emptyColumns(id){
  $(id+' .col-1').empty()
  $(id+' .col-2').empty()
  $(id+' .col-3').empty()
  $(id+' .col-4').empty()
}

function createImageContainer(parent, name){
  var $container = $("<div>", {class: name}).css({display: 'inline-block'});
  parent.append($container)

  return $container
}

function createContainer(name){
  var $container = $("<div>", {id: name}).css({display: 'inline-block'});
  var $col1 = createImageContainer($container, 'col-1')
  var $col4 = createImageContainer($container, 'col-4')
  var $col3 = createImageContainer($container, 'col-3')
  var $col2 = createImageContainer($container, 'col-2')
  $('#images').append($container)
  return $container
}

function createMixedImages(shuffle) {
  for(i = 0; i < 16; i++) {
    createImage('#mixed .col-1', '/assets/nolikes/IMG-'+shuffle[i]+'.png')
    createImage('#mixed .col-1', '/assets/nolikes/'+shuffle[i]+'.jpg')
  }
  for(i = 16; i < 32; i++) {
    createImage('#mixed .col-2', '/assets/nolikes/'+shuffle[i]+'.jpg')
    createImage('#mixed .col-2', '/assets/nolikes/IMG-'+shuffle[i]+'.png')
  }
  for(i = 32; i < 48; i++) {
    createImage('#mixed .col-3', '/assets/nolikes/IMG-'+shuffle[i]+'.png')
    createImage('#mixed .col-3', '/assets/nolikes/'+shuffle[i]+'.jpg')
  }
  for(i = 48; i < 64; i++) {
    createImage('#mixed .col-4', '/assets/nolikes/'+shuffle[i]+'.jpg')
    createImage('#mixed .col-4', '/assets/nolikes/IMG-'+shuffle[i]+'.png')
  }
}

function createHumanImages(shuffle) {
  for(i = 0; i < 32; i++) {
    createImage('#human .col-1', '/assets/nolikes/'+shuffle[i]+'.jpg')
  }
  for(i = 0; i < 32; i++) {
    createImage('#human .col-2', '/assets/nolikes/sample_data_2/'+shuffle[i]+'.jpg')
  }
  for(i = 32; i < 64; i++) {
    createImage('#human .col-3', '/assets/nolikes/sample_data_2/'+shuffle[i]+'.jpg')
  }
  for(i = 32; i < 64; i++) {
    createImage('#human .col-4', '/assets/nolikes/'+shuffle[i]+'.jpg')
  }
}

function createMachineImages(shuffle) {
  for(i = 0; i < 32; i++) {
    createImage('#machine .col-1', '/assets/nolikes/IMG-'+shuffle[i]+'.png')
  }
  for(i = 0; i < 32; i++) {
    createImage('#machine .col-2', '/assets/nolikes/sample_data_2/IMG-'+shuffle[i]+'.png')
  }
  for(i = 32; i < 64; i++) {
    createImage('#machine .col-3', '/assets/nolikes/sample_data_2/IMG-'+shuffle[i]+'.png')
  }
  for(i = 32; i < 64; i++) {
    createImage('#machine .col-4', '/assets/nolikes/IMG-'+shuffle[i]+'.png')
  }
}

function createImage(parent, url){
    $(parent).append('<img alt="" style="width:200;padding:7;" src="'+url+'"/><br>');
}

function createShuffledArray(from, to) {
    var i = to - from + 1;
    var a = Array(i);
    while (i) {
        var j = Math.floor(Math.random() * i--);
        var temp = isNaN(a[i]) ? (i + from) : a[i];
        a[i] = isNaN(a[j]) ? (j + from) : a[j];
        a[j] = temp;
    }
    return a;
}
