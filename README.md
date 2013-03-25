glancemaker
===========

Glance maker is a javascript plugin that enables you to embed one or multiple web pages, with the possibility of resizing the content.

How to
===========
Once you've downloaded the zip just go to the following page /widget/frame.html.
It's all there.
Online demo coming soon.

API
===========
function saveFrame(id, url, leftValue, topValue, widthValue, heightValue, leftCanvas, topCanvas, innerWidthValue)
You could use this function to make your glance persistent (in your database for ex.)
It is located here js/frame_and_note.js

function makeFrame(id, url, left_value, top_value, width_value, height_value, left_cnv_value, top_cnv_value, inner_width_value)


This function is used to load existing frames
In the frame.html you'll see the following code:


jQuery(document).ready(function() {  
  makeFrame(frame_id, decodeURIComponent("http://www.australia.com"), -11, -562, 993, 261, 46, 31, 1024);
  makeFrameSet(frame_id);
  $("#inneriframe"+frame_id).attr("uid", "unique_identifier");
  $( "#dragger"+frame_id).draggable();
  $( "#resizer"+frame_id).draggable();

It'll load the frame that you get to see on the demo page.

More...
===========
If you click on the favicon of the frame the frame will become clickable.
Double click on the url to add or change the url.
Drag n drop is on the title bar.
Resizing is on the left bottom side of the frame.

To finish with
===========
This is a draft code, only to show what could be done with the framework.
Feel free to modify it and to give me your feedbacks.
