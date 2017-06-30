var $document = $(document)

$document.on('page:change', function() {
  $document.foundation()
  tinymce.remove();

  $('select[multiple]').chosen()

  var initWysiwygs = function() {
    return tinymce.init({
      selector: 'textarea.wysiwyg',
      toolbar: 'formatselect styleselect | bold italic underline strikethrough superscript | bullist numlist blockquote | link unlink | image media table | undo redo | ltr rtl',
      plugins: 'link image table paste directionality media',
      browser_spellcheck: true,
      style_formats: [{
        title: 'Footnote',
        block: 'p',
        classes: 'ss-footnote'
      }],
      menubar: false,
      statusbar: false,
      paste_remove_styles: true,
      height: 250,
      content_css: $('meta[name="tinymce-content-css"]').attr('content')
    });
  };

  var initSummaryWysiwygs = function() {
    return tinymce.init({
      selector: 'textarea.wysiwyg-summary',
      toolbar: 'italic link unlink | bold italic underline strikethrough superscript | bullist numlist blockquote | image media | undo redo',
      plugins: 'link image media paste',
      browser_spellcheck: true,
      menubar: false,
      statusbar: false,
      paste_remove_styles: true,
      height: 150,
      content_css: $('meta[name="tinymce-content-css"]').attr('content')
    });
  };

  initWysiwygs();
  initSummaryWysiwygs();
})
