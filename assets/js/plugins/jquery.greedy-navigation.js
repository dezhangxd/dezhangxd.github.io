/*
* Greedy Navigation
*
* http://codepen.io/lukejacksonn/pen/PwmwWV
*
*/

var $nav = $('#site-nav');
var $btn = $('#site-nav button');
var $vlinks = $('#site-nav .visible-links');
var $hlinks = $('#site-nav .hidden-links');

var breaks = [];

// Helper function to check if an element is the language switch button
function isLangSwitchButton($element) {
  return $element.hasClass('masthead__menu-item--lang-switch') || $element.find('#lang-switch-btn').length > 0;
}

// Helper function to ensure language switch button is always in visible list at the beginning
function ensureLangSwitchVisible() {
  var $langSwitchInHidden = $hlinks.find('.masthead__menu-item--lang-switch');
  var $langSwitchInVisible = $vlinks.find('.masthead__menu-item--lang-switch');

  // If language switch is in hidden list, move it back to visible list at the beginning
  if ($langSwitchInHidden.length > 0) {
    $langSwitchInHidden.prependTo($vlinks);
  }

  // Ensure it's always at the beginning of visible list
  if ($langSwitchInVisible.length > 0 && $langSwitchInVisible.index() !== 0) {
    $langSwitchInVisible.prependTo($vlinks);
  }
}

// Use MutationObserver to watch for DOM changes and ensure language switch stays visible
function watchLangSwitchButton() {
  var observer = new MutationObserver(function (mutations) {
    ensureLangSwitchVisible();
  });

  // Observe changes to both visible and hidden links
  if ($vlinks.length > 0) {
    observer.observe($vlinks[0], { childList: true, subtree: true });
  }
  if ($hlinks.length > 0) {
    observer.observe($hlinks[0], { childList: true, subtree: true });
  }

  // Also ensure it's visible immediately
  ensureLangSwitchVisible();
}

function updateNav() {
  // Ensure language switch button is visible before calculating space
  ensureLangSwitchVisible();

  var availableSpace = $btn.hasClass('hidden') ? $nav.width() : $nav.width() - $btn.width() - 30;

  // Reserve space for language switch button (estimate ~80px)
  var $langSwitch = $vlinks.find('.masthead__menu-item--lang-switch');
  if ($langSwitch.length > 0) {
    var langSwitchWidth = $langSwitch.outerWidth(true) || 80;
    availableSpace -= langSwitchWidth;
  }

  // The visible list is overflowing the nav
  if ($vlinks.width() > availableSpace) {

    // Record the width of the list
    breaks.push($vlinks.width());

    // Find the last item that is NOT the language switch button
    var $children = $vlinks.children();
    var $itemToMove = null;

    // Start from the end and find the last non-language-switch item
    for (var i = $children.length - 1; i >= 0; i--) {
      var $child = $children.eq(i);
      if (!isLangSwitchButton($child)) {
        $itemToMove = $child;
        break;
      }
    }

    // Only move if we found a non-language-switch item
    if ($itemToMove && $itemToMove.length > 0) {
      $itemToMove.prependTo($hlinks);
    } else {
      // If only language switch button(s) remain, don't move anything
      breaks.pop();
      return;
    }

    // Show the dropdown btn
    if ($btn.hasClass('hidden')) {
      $btn.removeClass('hidden');
    }

    // The visible list is not overflowing
  } else {

    // There is space for another item in the nav
    if (breaks.length > 0 && availableSpace > breaks[breaks.length - 1]) {

      // Find the first item in hidden list that is NOT the language switch button
      var $hiddenChildren = $hlinks.children();
      var $itemToRestore = null;

      for (var j = 0; j < $hiddenChildren.length; j++) {
        var $hiddenChild = $hiddenChildren.eq(j);
        if (!isLangSwitchButton($hiddenChild)) {
          $itemToRestore = $hiddenChild;
          break;
        }
      }

      // Only restore non-language-switch items
      if ($itemToRestore && $itemToRestore.length > 0) {
        $itemToRestore.appendTo($vlinks);
        breaks.pop();
      } else {
        // If only language switch button(s) in hidden list, remove the break
        breaks.pop();
      }
    }

    // Hide the dropdown btn if hidden list is empty
    if (breaks.length < 1) {
      $btn.addClass('hidden');
      $hlinks.addClass('hidden');
    }
  }

  // Always ensure language switch button is in visible list (double check)
  ensureLangSwitchVisible();

  // Keep counter updated
  $btn.attr("count", breaks.length);

  // Recur if the visible list is still overflowing the nav
  // But exclude language switch button from width calculation
  var $visibleWithoutLangSwitch = $vlinks.children().not('.masthead__menu-item--lang-switch');
  var visibleWidth = 0;
  $visibleWithoutLangSwitch.each(function () {
    visibleWidth += $(this).outerWidth(true);
  });

  if (visibleWidth > availableSpace) {
    updateNav();
  } else {
    // Final check to ensure language switch is visible
    ensureLangSwitchVisible();
  }

}

// Window listeners

$(window).resize(function () {
  updateNav();
});

$btn.on('click', function () {
  $hlinks.toggleClass('hidden');
  $(this).toggleClass('close');
});

// Initialize navigation
updateNav();

// Watch for DOM changes to ensure language switch button stays visible
if (typeof MutationObserver !== 'undefined') {
  watchLangSwitchButton();
} else {
  // Fallback for older browsers: check periodically
  setInterval(ensureLangSwitchVisible, 100);
}