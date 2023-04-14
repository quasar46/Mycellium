var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjdXN0b20tc2VsZWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciB4LCBpLCBqLCBsLCBsbCwgc2VsRWxtbnQsIGEsIGIsIGM7XHJcbi8qIExvb2sgZm9yIGFueSBlbGVtZW50cyB3aXRoIHRoZSBjbGFzcyBcImN1c3RvbS1zZWxlY3RcIjogKi9cclxueCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjdXN0b20tc2VsZWN0XCIpO1xyXG5sID0geC5sZW5ndGg7XHJcbmZvciAoaSA9IDA7IGkgPCBsOyBpKyspIHtcclxuICBzZWxFbG1udCA9IHhbaV0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzZWxlY3RcIilbMF07XHJcbiAgbGwgPSBzZWxFbG1udC5sZW5ndGg7XHJcbiAgLyogRm9yIGVhY2ggZWxlbWVudCwgY3JlYXRlIGEgbmV3IERJViB0aGF0IHdpbGwgYWN0IGFzIHRoZSBzZWxlY3RlZCBpdGVtOiAqL1xyXG4gIGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiRElWXCIpO1xyXG4gIGEuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzZWxlY3Qtc2VsZWN0ZWRcIik7XHJcbiAgYS5pbm5lckhUTUwgPSBzZWxFbG1udC5vcHRpb25zW3NlbEVsbW50LnNlbGVjdGVkSW5kZXhdLmlubmVySFRNTDtcclxuICB4W2ldLmFwcGVuZENoaWxkKGEpO1xyXG4gIC8qIEZvciBlYWNoIGVsZW1lbnQsIGNyZWF0ZSBhIG5ldyBESVYgdGhhdCB3aWxsIGNvbnRhaW4gdGhlIG9wdGlvbiBsaXN0OiAqL1xyXG4gIGIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiRElWXCIpO1xyXG4gIGIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzZWxlY3QtaXRlbXMgc2VsZWN0LWhpZGVcIik7XHJcbiAgZm9yIChqID0gMTsgaiA8IGxsOyBqKyspIHtcclxuICAgIC8qIEZvciBlYWNoIG9wdGlvbiBpbiB0aGUgb3JpZ2luYWwgc2VsZWN0IGVsZW1lbnQsXHJcbiAgICBjcmVhdGUgYSBuZXcgRElWIHRoYXQgd2lsbCBhY3QgYXMgYW4gb3B0aW9uIGl0ZW06ICovXHJcbiAgICBjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkRJVlwiKTtcclxuICAgIGMuaW5uZXJIVE1MID0gc2VsRWxtbnQub3B0aW9uc1tqXS5pbm5lckhUTUw7XHJcbiAgICBjLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgLyogV2hlbiBhbiBpdGVtIGlzIGNsaWNrZWQsIHVwZGF0ZSB0aGUgb3JpZ2luYWwgc2VsZWN0IGJveCxcclxuICAgICAgICBhbmQgdGhlIHNlbGVjdGVkIGl0ZW06ICovXHJcbiAgICAgICAgdmFyIHksIGksIGssIHMsIGgsIHNsLCB5bDtcclxuICAgICAgICBzID0gdGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzZWxlY3RcIilbMF07XHJcbiAgICAgICAgc2wgPSBzLmxlbmd0aDtcclxuICAgICAgICBoID0gdGhpcy5wYXJlbnROb2RlLnByZXZpb3VzU2libGluZztcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc2w7IGkrKykge1xyXG4gICAgICAgICAgaWYgKHMub3B0aW9uc1tpXS5pbm5lckhUTUwgPT0gdGhpcy5pbm5lckhUTUwpIHtcclxuICAgICAgICAgICAgcy5zZWxlY3RlZEluZGV4ID0gaTtcclxuICAgICAgICAgICAgaC5pbm5lckhUTUwgPSB0aGlzLmlubmVySFRNTDtcclxuICAgICAgICAgICAgeSA9IHRoaXMucGFyZW50Tm9kZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic2FtZS1hcy1zZWxlY3RlZFwiKTtcclxuICAgICAgICAgICAgeWwgPSB5Lmxlbmd0aDtcclxuICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IHlsOyBrKyspIHtcclxuICAgICAgICAgICAgICB5W2tdLnJlbW92ZUF0dHJpYnV0ZShcImNsYXNzXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzYW1lLWFzLXNlbGVjdGVkXCIpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaC5jbGljaygpO1xyXG4gICAgfSk7XHJcbiAgICBiLmFwcGVuZENoaWxkKGMpO1xyXG4gIH1cclxuICB4W2ldLmFwcGVuZENoaWxkKGIpO1xyXG4gIGEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgIC8qIFdoZW4gdGhlIHNlbGVjdCBib3ggaXMgY2xpY2tlZCwgY2xvc2UgYW55IG90aGVyIHNlbGVjdCBib3hlcyxcclxuICAgIGFuZCBvcGVuL2Nsb3NlIHRoZSBjdXJyZW50IHNlbGVjdCBib3g6ICovXHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgY2xvc2VBbGxTZWxlY3QodGhpcyk7XHJcbiAgICB0aGlzLm5leHRTaWJsaW5nLmNsYXNzTGlzdC50b2dnbGUoXCJzZWxlY3QtaGlkZVwiKTtcclxuICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZShcInNlbGVjdC1hcnJvdy1hY3RpdmVcIik7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsb3NlQWxsU2VsZWN0KGVsbW50KSB7XHJcbiAgLyogQSBmdW5jdGlvbiB0aGF0IHdpbGwgY2xvc2UgYWxsIHNlbGVjdCBib3hlcyBpbiB0aGUgZG9jdW1lbnQsXHJcbiAgZXhjZXB0IHRoZSBjdXJyZW50IHNlbGVjdCBib3g6ICovXHJcbiAgdmFyIHgsIHksIGksIHhsLCB5bCwgYXJyTm8gPSBbXTtcclxuICB4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInNlbGVjdC1pdGVtc1wiKTtcclxuICB5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInNlbGVjdC1zZWxlY3RlZFwiKTtcclxuICB4bCA9IHgubGVuZ3RoO1xyXG4gIHlsID0geS5sZW5ndGg7XHJcbiAgZm9yIChpID0gMDsgaSA8IHlsOyBpKyspIHtcclxuICAgIGlmIChlbG1udCA9PSB5W2ldKSB7XHJcbiAgICAgIGFyck5vLnB1c2goaSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHlbaV0uY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdC1hcnJvdy1hY3RpdmVcIik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZvciAoaSA9IDA7IGkgPCB4bDsgaSsrKSB7XHJcbiAgICBpZiAoYXJyTm8uaW5kZXhPZihpKSkge1xyXG4gICAgICB4W2ldLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3QtaGlkZVwiKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qIElmIHRoZSB1c2VyIGNsaWNrcyBhbnl3aGVyZSBvdXRzaWRlIHRoZSBzZWxlY3QgYm94LFxyXG50aGVuIGNsb3NlIGFsbCBzZWxlY3QgYm94ZXM6ICovXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZUFsbFNlbGVjdCk7Il0sImZpbGUiOiJjdXN0b20tc2VsZWN0LmpzIn0=
