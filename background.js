'use strict';
const placeholder = "*";
const unknown = "Marker";
const emoji = ["😀", "😃", "😄", "😁", "😆", "😅", "🤣", "😂", "🙂", "🙃", "😉", "😊", "😇", "🥰", "😍", "🤩", "😘", "😗", "☺️", "☺", "😚", "😙", "🥲", "😋", "😛", "😜", "🤪", "😝", "🤑", "🤗", "🤭", "🤫", "🤔", "🤐", "🤨", "😐", "😑", "😶", "😶‍🌫️", "😶‍🌫", "😏", "😒", "🙄", "😬", "😮‍💨", "🤥", "😌", "😔", "😪", "🤤", "😴", "😷", "🤒", "🤕", "🤢", "🤮", "🤧", "🥵", "🥶", "🥴", "😵", "😵‍💫", "🤯", "🤠", "🥳", "🥸", "😎", "🤓", "🧐", "😕", "😟", "🙁", "☹️", "☹", "😮", "😯", "😲", "😳", "🥺", "😦", "😧", "😨", "😰", "😥", "😢", "😭", "😱", "😖", "😣", "😞", "😓", "😩", "😫", "🥱", "😤", "😡", "😠", "🤬", "😈", "👿", "💀", "☠️", "☠", "💩", "🤡", "👹", "👺", "👻", "👽", "👾", "🤖", "😺", "😸", "😹", "😻", "😼", "😽", "🙀", "😿", "😾", "🙈", "🙉", "🙊", "💋", "💌", "💘", "💝", "💖", "💗", "💓", "💞", "💕", "💟", "❣️", "❣", "💔", "❤️‍🔥", "❤‍🔥", "❤️‍🩹", "❤‍🩹", "❤️", "❤", "🧡", "💛", "💚", "💙", "💜", "🤎", "🖤", "🤍", "💯", "💢", "💥", "💫", "💦", "💨", "🕳️", "🕳", "💣", "💬", "👁️‍🗨️", "👁‍🗨️", "👁️‍🗨", "👁‍🗨", "🗨️", "🗨", "🗯️", "🗯", "💭", "💤", "👋", "👋🏻", "👋🏼", "👋🏽", "👋🏾", "👋🏿", "🤚", "🤚🏻", "🤚🏼", "🤚🏽", "🤚🏾", "🤚🏿", "🖐️", "🖐", "🖐🏻", "🖐🏼", "🖐🏽", "🖐🏾", "🖐🏿", "✋", "✋🏻", "✋🏼", "✋🏽", "✋🏾", "✋🏿", "🖖", "🖖🏻", "🖖🏼", "🖖🏽", "🖖🏾", "🖖🏿", "👌", "👌🏻", "👌🏼", "👌🏽", "👌🏾", "👌🏿", "🤌", "🤌🏻", "🤌🏼", "🤌🏽", "🤌🏾", "🤌🏿", "🤏", "🤏🏻", "🤏🏼", "🤏🏽", "🤏🏾", "🤏🏿", "✌️", "✌", "✌🏻", "✌🏼", "✌🏽", "✌🏾", "✌🏿", "🤞", "🤞🏻", "🤞🏼", "🤞🏽", "🤞🏾", "🤞🏿", "🤟", "🤟🏻", "🤟🏼", "🤟🏽", "🤟🏾", "🤟🏿", "🤘", "🤘🏻", "🤘🏼", "🤘🏽", "🤘🏾", "🤘🏿", "🤙", "🤙🏻", "🤙🏼", "🤙🏽", "🤙🏾", "🤙🏿", "👈", "👈🏻", "👈🏼", "👈🏽", "👈🏾", "👈🏿", "👉", "👉🏻", "👉🏼", "👉🏽", "👉🏾", "👉🏿", "👆", "👆🏻", "👆🏼", "👆🏽", "👆🏾", "👆🏿", "🖕", "🖕🏻", "🖕🏼", "🖕🏽", "🖕🏾", "🖕🏿", "👇", "👇🏻", "👇🏼", "👇🏽", "👇🏾", "👇🏿", "☝️", "☝", "☝🏻", "☝🏼", "☝🏽", "☝🏾", "☝🏿", "👍", "👍🏻", "👍🏼", "👍🏽", "👍🏾", "👍🏿", "👎", "👎🏻", "👎🏼", "👎🏽", "👎🏾", "👎🏿", "✊", "✊🏻", "✊🏼", "✊🏽", "✊🏾", "✊🏿", "👊", "👊🏻", "👊🏼", "👊🏽", "👊🏾", "👊🏿", "🤛", "🤛🏻", "🤛🏼", "🤛🏽", "🤛🏾", "🤛🏿", "🤜", "🤜🏻", "🤜🏼", "🤜🏽", "🤜🏾", "🤜🏿", "👏", "👏🏻", "👏🏼", "👏🏽", "👏🏾", "👏🏿", "🙌", "🙌🏻", "🙌🏼", "🙌🏽", "🙌🏾", "🙌🏿", "👐", "👐🏻", "👐🏼", "👐🏽", "👐🏾", "👐🏿", "🤲", "🤲🏻", "🤲🏼", "🤲🏽", "🤲🏾", "🤲🏿", "🤝", "🙏", "🙏🏻", "🙏🏼", "🙏🏽", "🙏🏾", "🙏🏿", "✍️", "✍", "✍🏻", "✍🏼", "✍🏽", "✍🏾", "✍🏿", "💅", "💅🏻", "💅🏼", "💅🏽", "💅🏾", "💅🏿", "🤳", "🤳🏻", "🤳🏼", "🤳🏽", "🤳🏾", "🤳🏿", "💪", "💪🏻", "💪🏼", "💪🏽", "💪🏾", "💪🏿", "🦾", "🦿", "🦵", "🦵🏻", "🦵🏼", "🦵🏽", "🦵🏾", "🦵🏿", "🦶", "🦶🏻", "🦶🏼", "🦶🏽", "🦶🏾", "🦶🏿", "👂", "👂🏻", "👂🏼", "👂🏽", "👂🏾", "👂🏿", "🦻", "🦻🏻", "🦻🏼", "🦻🏽", "🦻🏾", "🦻🏿", "👃", "👃🏻", "👃🏼", "👃🏽", "👃🏾", "👃🏿", "🧠", "🫀", "🫁", "🦷", "🦴", "👀", "👁️", "👁", "👅", "👄", "👶", "👶🏻", "👶🏼", "👶🏽", "👶🏾", "👶🏿", "🧒", "🧒🏻", "🧒🏼", "🧒🏽", "🧒🏾", "🧒🏿", "👦", "👦🏻", "👦🏼", "👦🏽", "👦🏾", "👦🏿", "👧", "👧🏻", "👧🏼", "👧🏽", "👧🏾", "👧🏿", "🧑", "🧑🏻", "🧑🏼", "🧑🏽", "🧑🏾", "🧑🏿", "👱", "👱🏻", "👱🏼", "👱🏽", "👱🏾", "👱🏿", "👨", "👨🏻", "👨🏼", "👨🏽", "👨🏾", "👨🏿", "🧔", "🧔🏻", "🧔🏼", "🧔🏽", "🧔🏾", "🧔🏿", "🧔‍♂️", "🧔‍♂", "🧔🏻‍♂️", "🧔🏻‍♂", "🧔🏼‍♂️", "🧔🏼‍♂", "🧔🏽‍♂️", "🧔🏽‍♂", "🧔🏾‍♂️", "🧔🏾‍♂", "🧔🏿‍♂️", "🧔🏿‍♂", "🧔‍♀️", "🧔‍♀", "🧔🏻‍♀️", "🧔🏻‍♀", "🧔🏼‍♀️", "🧔🏼‍♀", "🧔🏽‍♀️", "🧔🏽‍♀", "🧔🏾‍♀️", "🧔🏾‍♀", "🧔🏿‍♀️", "🧔🏿‍♀", "👨‍🦰", "👨🏻‍🦰", "👨🏼‍🦰", "👨🏽‍🦰", "👨🏾‍🦰", "👨🏿‍🦰", "👨‍🦱", "👨🏻‍🦱", "👨🏼‍🦱", "👨🏽‍🦱", "👨🏾‍🦱", "👨🏿‍🦱", "👨‍🦳", "👨🏻‍🦳", "👨🏼‍🦳", "👨🏽‍🦳", "👨🏾‍🦳", "👨🏿‍🦳", "👨‍🦲", "👨🏻‍🦲", "👨🏼‍🦲", "👨🏽‍🦲", "👨🏾‍🦲", "👨🏿‍🦲", "👩", "👩🏻", "👩🏼", "👩🏽", "👩🏾", "👩🏿", "👩‍🦰", "👩🏻‍🦰", "👩🏼‍🦰", "👩🏽‍🦰", "👩🏾‍🦰", "👩🏿‍🦰", "🧑‍🦰", "🧑🏻‍🦰", "🧑🏼‍🦰", "🧑🏽‍🦰", "🧑🏾‍🦰", "🧑🏿‍🦰", "👩‍🦱", "👩🏻‍🦱", "👩🏼‍🦱", "👩🏽‍🦱", "👩🏾‍🦱", "👩🏿‍🦱", "🧑‍🦱", "🧑🏻‍🦱", "🧑🏼‍🦱", "🧑🏽‍🦱", "🧑🏾‍🦱", "🧑🏿‍🦱", "👩‍🦳", "👩🏻‍🦳", "👩🏼‍🦳", "👩🏽‍🦳", "👩🏾‍🦳", "👩🏿‍🦳", "🧑‍🦳", "🧑🏻‍🦳", "🧑🏼‍🦳", "🧑🏽‍🦳", "🧑🏾‍🦳", "🧑🏿‍🦳", "👩‍🦲", "👩🏻‍🦲", "👩🏼‍🦲", "👩🏽‍🦲", "👩🏾‍🦲", "👩🏿‍🦲", "🧑‍🦲", "🧑🏻‍🦲", "🧑🏼‍🦲", "🧑🏽‍🦲", "🧑🏾‍🦲", "🧑🏿‍🦲", "👱‍♀️", "👱‍♀", "👱🏻‍♀️", "👱🏻‍♀", "👱🏼‍♀️", "👱🏼‍♀", "👱🏽‍♀️", "👱🏽‍♀", "👱🏾‍♀️", "👱🏾‍♀", "👱🏿‍♀️", "👱🏿‍♀", "👱‍♂️", "👱‍♂", "👱🏻‍♂️", "👱🏻‍♂", "👱🏼‍♂️", "👱🏼‍♂", "👱🏽‍♂️", "👱🏽‍♂", "👱🏾‍♂️", "👱🏾‍♂", "👱🏿‍♂️", "👱🏿‍♂", "🧓", "🧓🏻", "🧓🏼", "🧓🏽", "🧓🏾", "🧓🏿", "👴", "👴🏻", "👴🏼", "👴🏽", "👴🏾", "👴🏿", "👵", "👵🏻", "👵🏼", "👵🏽", "👵🏾", "👵🏿", "🙍", "🙍🏻", "🙍🏼", "🙍🏽", "🙍🏾", "🙍🏿", "🙍‍♂️", "🙍‍♂", "🙍🏻‍♂️", "🙍🏻‍♂", "🙍🏼‍♂️", "🙍🏼‍♂", "🙍🏽‍♂️", "🙍🏽‍♂", "🙍🏾‍♂️", "🙍🏾‍♂", "🙍🏿‍♂️", "🙍🏿‍♂", "🙍‍♀️", "🙍‍♀", "🙍🏻‍♀️", "🙍🏻‍♀", "🙍🏼‍♀️", "🙍🏼‍♀", "🙍🏽‍♀️", "🙍🏽‍♀", "🙍🏾‍♀️", "🙍🏾‍♀", "🙍🏿‍♀️", "🙍🏿‍♀", "🙎", "🙎🏻", "🙎🏼", "🙎🏽", "🙎🏾", "🙎🏿", "🙎‍♂️", "🙎‍♂", "🙎🏻‍♂️", "🙎🏻‍♂", "🙎🏼‍♂️", "🙎🏼‍♂", "🙎🏽‍♂️", "🙎🏽‍♂", "🙎🏾‍♂️", "🙎🏾‍♂", "🙎🏿‍♂️", "🙎🏿‍♂", "🙎‍♀️", "🙎‍♀", "🙎🏻‍♀️", "🙎🏻‍♀", "🙎🏼‍♀️", "🙎🏼‍♀", "🙎🏽‍♀️", "🙎🏽‍♀", "🙎🏾‍♀️", "🙎🏾‍♀", "🙎🏿‍♀️", "🙎🏿‍♀", "🙅", "🙅🏻", "🙅🏼", "🙅🏽", "🙅🏾", "🙅🏿", "🙅‍♂️", "🙅‍♂", "🙅🏻‍♂️", "🙅🏻‍♂", "🙅🏼‍♂️", "🙅🏼‍♂", "🙅🏽‍♂️", "🙅🏽‍♂", "🙅🏾‍♂️", "🙅🏾‍♂", "🙅🏿‍♂️", "🙅🏿‍♂", "🙅‍♀️", "🙅‍♀", "🙅🏻‍♀️", "🙅🏻‍♀", "🙅🏼‍♀️", "🙅🏼‍♀", "🙅🏽‍♀️", "🙅🏽‍♀", "🙅🏾‍♀️", "🙅🏾‍♀", "🙅🏿‍♀️", "🙅🏿‍♀", "🙆", "🙆🏻", "🙆🏼", "🙆🏽", "🙆🏾", "🙆🏿", "🙆‍♂️", "🙆‍♂", "🙆🏻‍♂️", "🙆🏻‍♂", "🙆🏼‍♂️", "🙆🏼‍♂", "🙆🏽‍♂️", "🙆🏽‍♂", "🙆🏾‍♂️", "🙆🏾‍♂", "🙆🏿‍♂️", "🙆🏿‍♂", "🙆‍♀️", "🙆‍♀", "🙆🏻‍♀️", "🙆🏻‍♀", "🙆🏼‍♀️", "🙆🏼‍♀", "🙆🏽‍♀️", "🙆🏽‍♀", "🙆🏾‍♀️", "🙆🏾‍♀", "🙆🏿‍♀️", "🙆🏿‍♀", "💁", "💁🏻", "💁🏼", "💁🏽", "💁🏾", "💁🏿", "💁‍♂️", "💁‍♂", "💁🏻‍♂️", "💁🏻‍♂", "💁🏼‍♂️", "💁🏼‍♂", "💁🏽‍♂️", "💁🏽‍♂", "💁🏾‍♂️", "💁🏾‍♂", "💁🏿‍♂️", "💁🏿‍♂", "💁‍♀️", "💁‍♀", "💁🏻‍♀️", "💁🏻‍♀", "💁🏼‍♀️", "💁🏼‍♀", "💁🏽‍♀️", "💁🏽‍♀", "💁🏾‍♀️", "💁🏾‍♀", "💁🏿‍♀️", "💁🏿‍♀", "🙋", "🙋🏻", "🙋🏼", "🙋🏽", "🙋🏾", "🙋🏿", "🙋‍♂️", "🙋‍♂", "🙋🏻‍♂️", "🙋🏻‍♂", "🙋🏼‍♂️", "🙋🏼‍♂", "🙋🏽‍♂️", "🙋🏽‍♂", "🙋🏾‍♂️", "🙋🏾‍♂", "🙋🏿‍♂️", "🙋🏿‍♂", "🙋‍♀️", "🙋‍♀", "🙋🏻‍♀️", "🙋🏻‍♀", "🙋🏼‍♀️", "🙋🏼‍♀", "🙋🏽‍♀️", "🙋🏽‍♀", "🙋🏾‍♀️", "🙋🏾‍♀", "🙋🏿‍♀️", "🙋🏿‍♀", "🧏", "🧏🏻", "🧏🏼", "🧏🏽", "🧏🏾", "🧏🏿", "🧏‍♂️", "🧏‍♂", "🧏🏻‍♂️", "🧏🏻‍♂", "🧏🏼‍♂️", "🧏🏼‍♂", "🧏🏽‍♂️", "🧏🏽‍♂", "🧏🏾‍♂️", "🧏🏾‍♂", "🧏🏿‍♂️", "🧏🏿‍♂", "🧏‍♀️", "🧏‍♀", "🧏🏻‍♀️", "🧏🏻‍♀", "🧏🏼‍♀️", "🧏🏼‍♀", "🧏🏽‍♀️", "🧏🏽‍♀", "🧏🏾‍♀️", "🧏🏾‍♀", "🧏🏿‍♀️", "🧏🏿‍♀", "🙇", "🙇🏻", "🙇🏼", "🙇🏽", "🙇🏾", "🙇🏿", "🙇‍♂️", "🙇‍♂", "🙇🏻‍♂️", "🙇🏻‍♂", "🙇🏼‍♂️", "🙇🏼‍♂", "🙇🏽‍♂️", "🙇🏽‍♂", "🙇🏾‍♂️", "🙇🏾‍♂", "🙇🏿‍♂️", "🙇🏿‍♂", "🙇‍♀️", "🙇‍♀", "🙇🏻‍♀️", "🙇🏻‍♀", "🙇🏼‍♀️", "🙇🏼‍♀", "🙇🏽‍♀️", "🙇🏽‍♀", "🙇🏾‍♀️", "🙇🏾‍♀", "🙇🏿‍♀️", "🙇🏿‍♀", "🤦", "🤦🏻", "🤦🏼", "🤦🏽", "🤦🏾", "🤦🏿", "🤦‍♂️", "🤦‍♂", "🤦🏻‍♂️", "🤦🏻‍♂", "🤦🏼‍♂️", "🤦🏼‍♂", "🤦🏽‍♂️", "🤦🏽‍♂", "🤦🏾‍♂️", "🤦🏾‍♂", "🤦🏿‍♂️", "🤦🏿‍♂", "🤦‍♀️", "🤦‍♀", "🤦🏻‍♀️", "🤦🏻‍♀", "🤦🏼‍♀️", "🤦🏼‍♀", "🤦🏽‍♀️", "🤦🏽‍♀", "🤦🏾‍♀️", "🤦🏾‍♀", "🤦🏿‍♀️", "🤦🏿‍♀", "🤷", "🤷🏻", "🤷🏼", "🤷🏽", "🤷🏾", "🤷🏿", "🤷‍♂️", "🤷‍♂", "🤷🏻‍♂️", "🤷🏻‍♂", "🤷🏼‍♂️", "🤷🏼‍♂", "🤷🏽‍♂️", "🤷🏽‍♂", "🤷🏾‍♂️", "🤷🏾‍♂", "🤷🏿‍♂️", "🤷🏿‍♂", "🤷‍♀️", "🤷‍♀", "🤷🏻‍♀️", "🤷🏻‍♀", "🤷🏼‍♀️", "🤷🏼‍♀", "🤷🏽‍♀️", "🤷🏽‍♀", "🤷🏾‍♀️", "🤷🏾‍♀", "🤷🏿‍♀️", "🤷🏿‍♀", "🧑‍⚕️", "🧑‍⚕", "🧑🏻‍⚕️", "🧑🏻‍⚕", "🧑🏼‍⚕️", "🧑🏼‍⚕", "🧑🏽‍⚕️", "🧑🏽‍⚕", "🧑🏾‍⚕️", "🧑🏾‍⚕", "🧑🏿‍⚕️", "🧑🏿‍⚕", "👨‍⚕️", "👨‍⚕", "👨🏻‍⚕️", "👨🏻‍⚕", "👨🏼‍⚕️", "👨🏼‍⚕", "👨🏽‍⚕️", "👨🏽‍⚕", "👨🏾‍⚕️", "👨🏾‍⚕", "👨🏿‍⚕️", "👨🏿‍⚕", "👩‍⚕️", "👩‍⚕", "👩🏻‍⚕️", "👩🏻‍⚕", "👩🏼‍⚕️", "👩🏼‍⚕", "👩🏽‍⚕️", "👩🏽‍⚕", "👩🏾‍⚕️", "👩🏾‍⚕", "👩🏿‍⚕️", "👩🏿‍⚕", "🧑‍🎓", "🧑🏻‍🎓", "🧑🏼‍🎓", "🧑🏽‍🎓", "🧑🏾‍🎓", "🧑🏿‍🎓", "👨‍🎓", "👨🏻‍🎓", "👨🏼‍🎓", "👨🏽‍🎓", "👨🏾‍🎓", "👨🏿‍🎓", "👩‍🎓", "👩🏻‍🎓", "👩🏼‍🎓", "👩🏽‍🎓", "👩🏾‍🎓", "👩🏿‍🎓", "🧑‍🏫", "🧑🏻‍🏫", "🧑🏼‍🏫", "🧑🏽‍🏫", "🧑🏾‍🏫", "🧑🏿‍🏫", "👨‍🏫", "👨🏻‍🏫", "👨🏼‍🏫", "👨🏽‍🏫", "👨🏾‍🏫", "👨🏿‍🏫", "👩‍🏫", "👩🏻‍🏫", "👩🏼‍🏫", "👩🏽‍🏫", "👩🏾‍🏫", "👩🏿‍🏫", "🧑‍⚖️", "🧑‍⚖", "🧑🏻‍⚖️", "🧑🏻‍⚖", "🧑🏼‍⚖️", "🧑🏼‍⚖", "🧑🏽‍⚖️", "🧑🏽‍⚖", "🧑🏾‍⚖️", "🧑🏾‍⚖", "🧑🏿‍⚖️", "🧑🏿‍⚖", "👨‍⚖️", "👨‍⚖", "👨🏻‍⚖️", "👨🏻‍⚖", "👨🏼‍⚖️", "👨🏼‍⚖", "👨🏽‍⚖️", "👨🏽‍⚖", "👨🏾‍⚖️", "👨🏾‍⚖", "👨🏿‍⚖️", "👨🏿‍⚖", "👩‍⚖️", "👩‍⚖", "👩🏻‍⚖️", "👩🏻‍⚖", "👩🏼‍⚖️", "👩🏼‍⚖", "👩🏽‍⚖️", "👩🏽‍⚖", "👩🏾‍⚖️", "👩🏾‍⚖", "👩🏿‍⚖️", "👩🏿‍⚖", "🧑‍🌾", "🧑🏻‍🌾", "🧑🏼‍🌾", "🧑🏽‍🌾", "🧑🏾‍🌾", "🧑🏿‍🌾", "👨‍🌾", "👨🏻‍🌾", "👨🏼‍🌾", "👨🏽‍🌾", "👨🏾‍🌾", "👨🏿‍🌾", "👩‍🌾", "👩🏻‍🌾", "👩🏼‍🌾", "👩🏽‍🌾", "👩🏾‍🌾", "👩🏿‍🌾", "🧑‍🍳", "🧑🏻‍🍳", "🧑🏼‍🍳", "🧑🏽‍🍳", "🧑🏾‍🍳", "🧑🏿‍🍳", "👨‍🍳", "👨🏻‍🍳", "👨🏼‍🍳", "👨🏽‍🍳", "👨🏾‍🍳", "👨🏿‍🍳", "👩‍🍳", "👩🏻‍🍳", "👩🏼‍🍳", "👩🏽‍🍳", "👩🏾‍🍳", "👩🏿‍🍳", "🧑‍🔧", "🧑🏻‍🔧", "🧑🏼‍🔧", "🧑🏽‍🔧", "🧑🏾‍🔧", "🧑🏿‍🔧", "👨‍🔧", "👨🏻‍🔧", "👨🏼‍🔧", "👨🏽‍🔧", "👨🏾‍🔧", "👨🏿‍🔧", "👩‍🔧", "👩🏻‍🔧", "👩🏼‍🔧", "👩🏽‍🔧", "👩🏾‍🔧", "👩🏿‍🔧", "🧑‍🏭", "🧑🏻‍🏭", "🧑🏼‍🏭", "🧑🏽‍🏭", "🧑🏾‍🏭", "🧑🏿‍🏭", "👨‍🏭", "👨🏻‍🏭", "👨🏼‍🏭", "👨🏽‍🏭", "👨🏾‍🏭", "👨🏿‍🏭", "👩‍🏭", "👩🏻‍🏭", "👩🏼‍🏭", "👩🏽‍🏭", "👩🏾‍🏭", "👩🏿‍🏭", "🧑‍💼", "🧑🏻‍💼", "🧑🏼‍💼", "🧑🏽‍💼", "🧑🏾‍💼", "🧑🏿‍💼", "👨‍💼", "👨🏻‍💼", "👨🏼‍💼", "👨🏽‍💼", "👨🏾‍💼", "👨🏿‍💼", "👩‍💼", "👩🏻‍💼", "👩🏼‍💼", "👩🏽‍💼", "👩🏾‍💼", "👩🏿‍💼", "🧑‍🔬", "🧑🏻‍🔬", "🧑🏼‍🔬", "🧑🏽‍🔬", "🧑🏾‍🔬", "🧑🏿‍🔬", "👨‍🔬", "👨🏻‍🔬", "👨🏼‍🔬", "👨🏽‍🔬", "👨🏾‍🔬", "👨🏿‍🔬", "👩‍🔬", "👩🏻‍🔬", "👩🏼‍🔬", "👩🏽‍🔬", "👩🏾‍🔬", "👩🏿‍🔬", "🧑‍💻", "🧑🏻‍💻", "🧑🏼‍💻", "🧑🏽‍💻", "🧑🏾‍💻", "🧑🏿‍💻", "👨‍💻", "👨🏻‍💻", "👨🏼‍💻", "👨🏽‍💻", "👨🏾‍💻", "👨🏿‍💻", "👩‍💻", "👩🏻‍💻", "👩🏼‍💻", "👩🏽‍💻", "👩🏾‍💻", "👩🏿‍💻", "🧑‍🎤", "🧑🏻‍🎤", "🧑🏼‍🎤", "🧑🏽‍🎤", "🧑🏾‍🎤", "🧑🏿‍🎤", "👨‍🎤", "👨🏻‍🎤", "👨🏼‍🎤", "👨🏽‍🎤", "👨🏾‍🎤", "👨🏿‍🎤", "👩‍🎤", "👩🏻‍🎤", "👩🏼‍🎤", "👩🏽‍🎤", "👩🏾‍🎤", "👩🏿‍🎤", "🧑‍🎨", "🧑🏻‍🎨", "🧑🏼‍🎨", "🧑🏽‍🎨", "🧑🏾‍🎨", "🧑🏿‍🎨", "👨‍🎨", "👨🏻‍🎨", "👨🏼‍🎨", "👨🏽‍🎨", "👨🏾‍🎨", "👨🏿‍🎨", "👩‍🎨", "👩🏻‍🎨", "👩🏼‍🎨", "👩🏽‍🎨", "👩🏾‍🎨", "👩🏿‍🎨", "🧑‍✈️", "🧑‍✈", "🧑🏻‍✈️", "🧑🏻‍✈", "🧑🏼‍✈️", "🧑🏼‍✈", "🧑🏽‍✈️", "🧑🏽‍✈", "🧑🏾‍✈️", "🧑🏾‍✈", "🧑🏿‍✈️", "🧑🏿‍✈", "👨‍✈️", "👨‍✈", "👨🏻‍✈️", "👨🏻‍✈", "👨🏼‍✈️", "👨🏼‍✈", "👨🏽‍✈️", "👨🏽‍✈", "👨🏾‍✈️", "👨🏾‍✈", "👨🏿‍✈️", "👨🏿‍✈", "👩‍✈️", "👩‍✈", "👩🏻‍✈️", "👩🏻‍✈", "👩🏼‍✈️", "👩🏼‍✈", "👩🏽‍✈️", "👩🏽‍✈", "👩🏾‍✈️", "👩🏾‍✈", "👩🏿‍✈️", "👩🏿‍✈", "🧑‍🚀", "🧑🏻‍🚀", "🧑🏼‍🚀", "🧑🏽‍🚀", "🧑🏾‍🚀", "🧑🏿‍🚀", "👨‍🚀", "👨🏻‍🚀", "👨🏼‍🚀", "👨🏽‍🚀", "👨🏾‍🚀", "👨🏿‍🚀", "👩‍🚀", "👩🏻‍🚀", "👩🏼‍🚀", "👩🏽‍🚀", "👩🏾‍🚀", "👩🏿‍🚀", "🧑‍🚒", "🧑🏻‍🚒", "🧑🏼‍🚒", "🧑🏽‍🚒", "🧑🏾‍🚒", "🧑🏿‍🚒", "👨‍🚒", "👨🏻‍🚒", "👨🏼‍🚒", "👨🏽‍🚒", "👨🏾‍🚒", "👨🏿‍🚒", "👩‍🚒", "👩🏻‍🚒", "👩🏼‍🚒", "👩🏽‍🚒", "👩🏾‍🚒", "👩🏿‍🚒", "👮", "👮🏻", "👮🏼", "👮🏽", "👮🏾", "👮🏿", "👮‍♂️", "👮‍♂", "👮🏻‍♂️", "👮🏻‍♂", "👮🏼‍♂️", "👮🏼‍♂", "👮🏽‍♂️", "👮🏽‍♂", "👮🏾‍♂️", "👮🏾‍♂", "👮🏿‍♂️", "👮🏿‍♂", "👮‍♀️", "👮‍♀", "👮🏻‍♀️", "👮🏻‍♀", "👮🏼‍♀️", "👮🏼‍♀", "👮🏽‍♀️", "👮🏽‍♀", "👮🏾‍♀️", "👮🏾‍♀", "👮🏿‍♀️", "👮🏿‍♀", "🕵️", "🕵", "🕵🏻", "🕵🏼", "🕵🏽", "🕵🏾", "🕵🏿", "🕵️‍♂️", "🕵‍♂️", "🕵️‍♂", "🕵‍♂", "🕵🏻‍♂️", "🕵🏻‍♂", "🕵🏼‍♂️", "🕵🏼‍♂", "🕵🏽‍♂️", "🕵🏽‍♂", "🕵🏾‍♂️", "🕵🏾‍♂", "🕵🏿‍♂️", "🕵🏿‍♂", "🕵️‍♀️", "🕵‍♀️", "🕵️‍♀", "🕵‍♀", "🕵🏻‍♀️", "🕵🏻‍♀", "🕵🏼‍♀️", "🕵🏼‍♀", "🕵🏽‍♀️", "🕵🏽‍♀", "🕵🏾‍♀️", "🕵🏾‍♀", "🕵🏿‍♀️", "🕵🏿‍♀", "💂", "💂🏻", "💂🏼", "💂🏽", "💂🏾", "💂🏿", "💂‍♂️", "💂‍♂", "💂🏻‍♂️", "💂🏻‍♂", "💂🏼‍♂️", "💂🏼‍♂", "💂🏽‍♂️", "💂🏽‍♂", "💂🏾‍♂️", "💂🏾‍♂", "💂🏿‍♂️", "💂🏿‍♂", "💂‍♀️", "💂‍♀", "💂🏻‍♀️", "💂🏻‍♀", "💂🏼‍♀️", "💂🏼‍♀", "💂🏽‍♀️", "💂🏽‍♀", "💂🏾‍♀️", "💂🏾‍♀", "💂🏿‍♀️", "💂🏿‍♀", "🥷", "🥷🏻", "🥷🏼", "🥷🏽", "🥷🏾", "🥷🏿", "👷", "👷🏻", "👷🏼", "👷🏽", "👷🏾", "👷🏿", "👷‍♂️", "👷‍♂", "👷🏻‍♂️", "👷🏻‍♂", "👷🏼‍♂️", "👷🏼‍♂", "👷🏽‍♂️", "👷🏽‍♂", "👷🏾‍♂️", "👷🏾‍♂", "👷🏿‍♂️", "👷🏿‍♂", "👷‍♀️", "👷‍♀", "👷🏻‍♀️", "👷🏻‍♀", "👷🏼‍♀️", "👷🏼‍♀", "👷🏽‍♀️", "👷🏽‍♀", "👷🏾‍♀️", "👷🏾‍♀", "👷🏿‍♀️", "👷🏿‍♀", "🤴", "🤴🏻", "🤴🏼", "🤴🏽", "🤴🏾", "🤴🏿", "👸", "👸🏻", "👸🏼", "👸🏽", "👸🏾", "👸🏿", "👳", "👳🏻", "👳🏼", "👳🏽", "👳🏾", "👳🏿", "👳‍♂️", "👳‍♂", "👳🏻‍♂️", "👳🏻‍♂", "👳🏼‍♂️", "👳🏼‍♂", "👳🏽‍♂️", "👳🏽‍♂", "👳🏾‍♂️", "👳🏾‍♂", "👳🏿‍♂️", "👳🏿‍♂", "👳‍♀️", "👳‍♀", "👳🏻‍♀️", "👳🏻‍♀", "👳🏼‍♀️", "👳🏼‍♀", "👳🏽‍♀️", "👳🏽‍♀", "👳🏾‍♀️", "👳🏾‍♀", "👳🏿‍♀️", "👳🏿‍♀", "👲", "👲🏻", "👲🏼", "👲🏽", "👲🏾", "👲🏿", "🧕", "🧕🏻", "🧕🏼", "🧕🏽", "🧕🏾", "🧕🏿", "🤵", "🤵🏻", "🤵🏼", "🤵🏽", "🤵🏾", "🤵🏿", "🤵‍♂️", "🤵‍♂", "🤵🏻‍♂️", "🤵🏻‍♂", "🤵🏼‍♂️", "🤵🏼‍♂", "🤵🏽‍♂️", "🤵🏽‍♂", "🤵🏾‍♂️", "🤵🏾‍♂", "🤵🏿‍♂️", "🤵🏿‍♂", "🤵‍♀️", "🤵‍♀", "🤵🏻‍♀️", "🤵🏻‍♀", "🤵🏼‍♀️", "🤵🏼‍♀", "🤵🏽‍♀️", "🤵🏽‍♀", "🤵🏾‍♀️", "🤵🏾‍♀", "🤵🏿‍♀️", "🤵🏿‍♀", "👰", "👰🏻", "👰🏼", "👰🏽", "👰🏾", "👰🏿", "👰‍♂️", "👰‍♂", "👰🏻‍♂️", "👰🏻‍♂", "👰🏼‍♂️", "👰🏼‍♂", "👰🏽‍♂️", "👰🏽‍♂", "👰🏾‍♂️", "👰🏾‍♂", "👰🏿‍♂️", "👰🏿‍♂", "👰‍♀️", "👰‍♀", "👰🏻‍♀️", "👰🏻‍♀", "👰🏼‍♀️", "👰🏼‍♀", "👰🏽‍♀️", "👰🏽‍♀", "👰🏾‍♀️", "👰🏾‍♀", "👰🏿‍♀️", "👰🏿‍♀", "🤰", "🤰🏻", "🤰🏼", "🤰🏽", "🤰🏾", "🤰🏿", "🤱", "🤱🏻", "🤱🏼", "🤱🏽", "🤱🏾", "🤱🏿", "👩‍🍼", "👩🏻‍🍼", "👩🏼‍🍼", "👩🏽‍🍼", "👩🏾‍🍼", "👩🏿‍🍼", "👨‍🍼", "👨🏻‍🍼", "👨🏼‍🍼", "👨🏽‍🍼", "👨🏾‍🍼", "👨🏿‍🍼", "🧑‍🍼", "🧑🏻‍🍼", "🧑🏼‍🍼", "🧑🏽‍🍼", "🧑🏾‍🍼", "🧑🏿‍🍼", "👼", "👼🏻", "👼🏼", "👼🏽", "👼🏾", "👼🏿", "🎅", "🎅🏻", "🎅🏼", "🎅🏽", "🎅🏾", "🎅🏿", "🤶", "🤶🏻", "🤶🏼", "🤶🏽", "🤶🏾", "🤶🏿", "🧑‍🎄", "🧑🏻‍🎄", "🧑🏼‍🎄", "🧑🏽‍🎄", "🧑🏾‍🎄", "🧑🏿‍🎄", "🦸", "🦸🏻", "🦸🏼", "🦸🏽", "🦸🏾", "🦸🏿", "🦸‍♂️", "🦸‍♂", "🦸🏻‍♂️", "🦸🏻‍♂", "🦸🏼‍♂️", "🦸🏼‍♂", "🦸🏽‍♂️", "🦸🏽‍♂", "🦸🏾‍♂️", "🦸🏾‍♂", "🦸🏿‍♂️", "🦸🏿‍♂", "🦸‍♀️", "🦸‍♀", "🦸🏻‍♀️", "🦸🏻‍♀", "🦸🏼‍♀️", "🦸🏼‍♀", "🦸🏽‍♀️", "🦸🏽‍♀", "🦸🏾‍♀️", "🦸🏾‍♀", "🦸🏿‍♀️", "🦸🏿‍♀", "🦹", "🦹🏻", "🦹🏼", "🦹🏽", "🦹🏾", "🦹🏿", "🦹‍♂️", "🦹‍♂", "🦹🏻‍♂️", "🦹🏻‍♂", "🦹🏼‍♂️", "🦹🏼‍♂", "🦹🏽‍♂️", "🦹🏽‍♂", "🦹🏾‍♂️", "🦹🏾‍♂", "🦹🏿‍♂️", "🦹🏿‍♂", "🦹‍♀️", "🦹‍♀", "🦹🏻‍♀️", "🦹🏻‍♀", "🦹🏼‍♀️", "🦹🏼‍♀", "🦹🏽‍♀️", "🦹🏽‍♀", "🦹🏾‍♀️", "🦹🏾‍♀", "🦹🏿‍♀️", "🦹🏿‍♀", "🧙", "🧙🏻", "🧙🏼", "🧙🏽", "🧙🏾", "🧙🏿", "🧙‍♂️", "🧙‍♂", "🧙🏻‍♂️", "🧙🏻‍♂", "🧙🏼‍♂️", "🧙🏼‍♂", "🧙🏽‍♂️", "🧙🏽‍♂", "🧙🏾‍♂️", "🧙🏾‍♂", "🧙🏿‍♂️", "🧙🏿‍♂", "🧙‍♀️", "🧙‍♀", "🧙🏻‍♀️", "🧙🏻‍♀", "🧙🏼‍♀️", "🧙🏼‍♀", "🧙🏽‍♀️", "🧙🏽‍♀", "🧙🏾‍♀️", "🧙🏾‍♀", "🧙🏿‍♀️", "🧙🏿‍♀", "🧚", "🧚🏻", "🧚🏼", "🧚🏽", "🧚🏾", "🧚🏿", "🧚‍♂️", "🧚‍♂", "🧚🏻‍♂️", "🧚🏻‍♂", "🧚🏼‍♂️", "🧚🏼‍♂", "🧚🏽‍♂️", "🧚🏽‍♂", "🧚🏾‍♂️", "🧚🏾‍♂", "🧚🏿‍♂️", "🧚🏿‍♂", "🧚‍♀️", "🧚‍♀", "🧚🏻‍♀️", "🧚🏻‍♀", "🧚🏼‍♀️", "🧚🏼‍♀", "🧚🏽‍♀️", "🧚🏽‍♀", "🧚🏾‍♀️", "🧚🏾‍♀", "🧚🏿‍♀️", "🧚🏿‍♀", "🧛", "🧛🏻", "🧛🏼", "🧛🏽", "🧛🏾", "🧛🏿", "🧛‍♂️", "🧛‍♂", "🧛🏻‍♂️", "🧛🏻‍♂", "🧛🏼‍♂️", "🧛🏼‍♂", "🧛🏽‍♂️", "🧛🏽‍♂", "🧛🏾‍♂️", "🧛🏾‍♂", "🧛🏿‍♂️", "🧛🏿‍♂", "🧛‍♀️", "🧛‍♀", "🧛🏻‍♀️", "🧛🏻‍♀", "🧛🏼‍♀️", "🧛🏼‍♀", "🧛🏽‍♀️", "🧛🏽‍♀", "🧛🏾‍♀️", "🧛🏾‍♀", "🧛🏿‍♀️", "🧛🏿‍♀", "🧜", "🧜🏻", "🧜🏼", "🧜🏽", "🧜🏾", "🧜🏿", "🧜‍♂️", "🧜‍♂", "🧜🏻‍♂️", "🧜🏻‍♂", "🧜🏼‍♂️", "🧜🏼‍♂", "🧜🏽‍♂️", "🧜🏽‍♂", "🧜🏾‍♂️", "🧜🏾‍♂", "🧜🏿‍♂️", "🧜🏿‍♂", "🧜‍♀️", "🧜‍♀", "🧜🏻‍♀️", "🧜🏻‍♀", "🧜🏼‍♀️", "🧜🏼‍♀", "🧜🏽‍♀️", "🧜🏽‍♀", "🧜🏾‍♀️", "🧜🏾‍♀", "🧜🏿‍♀️", "🧜🏿‍♀", "🧝", "🧝🏻", "🧝🏼", "🧝🏽", "🧝🏾", "🧝🏿", "🧝‍♂️", "🧝‍♂", "🧝🏻‍♂️", "🧝🏻‍♂", "🧝🏼‍♂️", "🧝🏼‍♂", "🧝🏽‍♂️", "🧝🏽‍♂", "🧝🏾‍♂️", "🧝🏾‍♂", "🧝🏿‍♂️", "🧝🏿‍♂", "🧝‍♀️", "🧝‍♀", "🧝🏻‍♀️", "🧝🏻‍♀", "🧝🏼‍♀️", "🧝🏼‍♀", "🧝🏽‍♀️", "🧝🏽‍♀", "🧝🏾‍♀️", "🧝🏾‍♀", "🧝🏿‍♀️", "🧝🏿‍♀", "🧞", "🧞‍♂️", "🧞‍♂", "🧞‍♀️", "🧞‍♀", "🧟", "🧟‍♂️", "🧟‍♂", "🧟‍♀️", "🧟‍♀", "💆", "💆🏻", "💆🏼", "💆🏽", "💆🏾", "💆🏿", "💆‍♂️", "💆‍♂", "💆🏻‍♂️", "💆🏻‍♂", "💆🏼‍♂️", "💆🏼‍♂", "💆🏽‍♂️", "💆🏽‍♂", "💆🏾‍♂️", "💆🏾‍♂", "💆🏿‍♂️", "💆🏿‍♂", "💆‍♀️", "💆‍♀", "💆🏻‍♀️", "💆🏻‍♀", "💆🏼‍♀️", "💆🏼‍♀", "💆🏽‍♀️", "💆🏽‍♀", "💆🏾‍♀️", "💆🏾‍♀", "💆🏿‍♀️", "💆🏿‍♀", "💇", "💇🏻", "💇🏼", "💇🏽", "💇🏾", "💇🏿", "💇‍♂️", "💇‍♂", "💇🏻‍♂️", "💇🏻‍♂", "💇🏼‍♂️", "💇🏼‍♂", "💇🏽‍♂️", "💇🏽‍♂", "💇🏾‍♂️", "💇🏾‍♂", "💇🏿‍♂️", "💇🏿‍♂", "💇‍♀️", "💇‍♀", "💇🏻‍♀️", "💇🏻‍♀", "💇🏼‍♀️", "💇🏼‍♀", "💇🏽‍♀️", "💇🏽‍♀", "💇🏾‍♀️", "💇🏾‍♀", "💇🏿‍♀️", "💇🏿‍♀", "🚶", "🚶🏻", "🚶🏼", "🚶🏽", "🚶🏾", "🚶🏿", "🚶‍♂️", "🚶‍♂", "🚶🏻‍♂️", "🚶🏻‍♂", "🚶🏼‍♂️", "🚶🏼‍♂", "🚶🏽‍♂️", "🚶🏽‍♂", "🚶🏾‍♂️", "🚶🏾‍♂", "🚶🏿‍♂️", "🚶🏿‍♂", "🚶‍♀️", "🚶‍♀", "🚶🏻‍♀️", "🚶🏻‍♀", "🚶🏼‍♀️", "🚶🏼‍♀", "🚶🏽‍♀️", "🚶🏽‍♀", "🚶🏾‍♀️", "🚶🏾‍♀", "🚶🏿‍♀️", "🚶🏿‍♀", "🧍", "🧍🏻", "🧍🏼", "🧍🏽", "🧍🏾", "🧍🏿", "🧍‍♂️", "🧍‍♂", "🧍🏻‍♂️", "🧍🏻‍♂", "🧍🏼‍♂️", "🧍🏼‍♂", "🧍🏽‍♂️", "🧍🏽‍♂", "🧍🏾‍♂️", "🧍🏾‍♂", "🧍🏿‍♂️", "🧍🏿‍♂", "🧍‍♀️", "🧍‍♀", "🧍🏻‍♀️", "🧍🏻‍♀", "🧍🏼‍♀️", "🧍🏼‍♀", "🧍🏽‍♀️", "🧍🏽‍♀", "🧍🏾‍♀️", "🧍🏾‍♀", "🧍🏿‍♀️", "🧍🏿‍♀", "🧎", "🧎🏻", "🧎🏼", "🧎🏽", "🧎🏾", "🧎🏿", "🧎‍♂️", "🧎‍♂", "🧎🏻‍♂️", "🧎🏻‍♂", "🧎🏼‍♂️", "🧎🏼‍♂", "🧎🏽‍♂️", "🧎🏽‍♂", "🧎🏾‍♂️", "🧎🏾‍♂", "🧎🏿‍♂️", "🧎🏿‍♂", "🧎‍♀️", "🧎‍♀", "🧎🏻‍♀️", "🧎🏻‍♀", "🧎🏼‍♀️", "🧎🏼‍♀", "🧎🏽‍♀️", "🧎🏽‍♀", "🧎🏾‍♀️", "🧎🏾‍♀", "🧎🏿‍♀️", "🧎🏿‍♀", "🧑‍🦯", "🧑🏻‍🦯", "🧑🏼‍🦯", "🧑🏽‍🦯", "🧑🏾‍🦯", "🧑🏿‍🦯", "👨‍🦯", "👨🏻‍🦯", "👨🏼‍🦯", "👨🏽‍🦯", "👨🏾‍🦯", "👨🏿‍🦯", "👩‍🦯", "👩🏻‍🦯", "👩🏼‍🦯", "👩🏽‍🦯", "👩🏾‍🦯", "👩🏿‍🦯", "🧑‍🦼", "🧑🏻‍🦼", "🧑🏼‍🦼", "🧑🏽‍🦼", "🧑🏾‍🦼", "🧑🏿‍🦼", "👨‍🦼", "👨🏻‍🦼", "👨🏼‍🦼", "👨🏽‍🦼", "👨🏾‍🦼", "👨🏿‍🦼", "👩‍🦼", "👩🏻‍🦼", "👩🏼‍🦼", "👩🏽‍🦼", "👩🏾‍🦼", "👩🏿‍🦼", "🧑‍🦽", "🧑🏻‍🦽", "🧑🏼‍🦽", "🧑🏽‍🦽", "🧑🏾‍🦽", "🧑🏿‍🦽", "👨‍🦽", "👨🏻‍🦽", "👨🏼‍🦽", "👨🏽‍🦽", "👨🏾‍🦽", "👨🏿‍🦽", "👩‍🦽", "👩🏻‍🦽", "👩🏼‍🦽", "👩🏽‍🦽", "👩🏾‍🦽", "👩🏿‍🦽", "🏃", "🏃🏻", "🏃🏼", "🏃🏽", "🏃🏾", "🏃🏿", "🏃‍♂️", "🏃‍♂", "🏃🏻‍♂️", "🏃🏻‍♂", "🏃🏼‍♂️", "🏃🏼‍♂", "🏃🏽‍♂️", "🏃🏽‍♂", "🏃🏾‍♂️", "🏃🏾‍♂", "🏃🏿‍♂️", "🏃🏿‍♂", "🏃‍♀️", "🏃‍♀", "🏃🏻‍♀️", "🏃🏻‍♀", "🏃🏼‍♀️", "🏃🏼‍♀", "🏃🏽‍♀️", "🏃🏽‍♀", "🏃🏾‍♀️", "🏃🏾‍♀", "🏃🏿‍♀️", "🏃🏿‍♀", "💃", "💃🏻", "💃🏼", "💃🏽", "💃🏾", "💃🏿", "🕺", "🕺🏻", "🕺🏼", "🕺🏽", "🕺🏾", "🕺🏿", "🕴️", "🕴", "🕴🏻", "🕴🏼", "🕴🏽", "🕴🏾", "🕴🏿", "👯", "👯‍♂️", "👯‍♂", "👯‍♀️", "👯‍♀", "🧖", "🧖🏻", "🧖🏼", "🧖🏽", "🧖🏾", "🧖🏿", "🧖‍♂️", "🧖‍♂", "🧖🏻‍♂️", "🧖🏻‍♂", "🧖🏼‍♂️", "🧖🏼‍♂", "🧖🏽‍♂️", "🧖🏽‍♂", "🧖🏾‍♂️", "🧖🏾‍♂", "🧖🏿‍♂️", "🧖🏿‍♂", "🧖‍♀️", "🧖‍♀", "🧖🏻‍♀️", "🧖🏻‍♀", "🧖🏼‍♀️", "🧖🏼‍♀", "🧖🏽‍♀️", "🧖🏽‍♀", "🧖🏾‍♀️", "🧖🏾‍♀", "🧖🏿‍♀️", "🧖🏿‍♀", "🧗", "🧗🏻", "🧗🏼", "🧗🏽", "🧗🏾", "🧗🏿", "🧗‍♂️", "🧗‍♂", "🧗🏻‍♂️", "🧗🏻‍♂", "🧗🏼‍♂️", "🧗🏼‍♂", "🧗🏽‍♂️", "🧗🏽‍♂", "🧗🏾‍♂️", "🧗🏾‍♂", "🧗🏿‍♂️", "🧗🏿‍♂", "🧗‍♀️", "🧗‍♀", "🧗🏻‍♀️", "🧗🏻‍♀", "🧗🏼‍♀️", "🧗🏼‍♀", "🧗🏽‍♀️", "🧗🏽‍♀", "🧗🏾‍♀️", "🧗🏾‍♀", "🧗🏿‍♀️", "🧗🏿‍♀", "🤺", "🏇", "🏇🏻", "🏇🏼", "🏇🏽", "🏇🏾", "🏇🏿", "⛷️", "⛷", "🏂", "🏂🏻", "🏂🏼", "🏂🏽", "🏂🏾", "🏂🏿", "🏌️", "🏌", "🏌🏻", "🏌🏼", "🏌🏽", "🏌🏾", "🏌🏿", "🏌️‍♂️", "🏌‍♂️", "🏌️‍♂", "🏌‍♂", "🏌🏻‍♂️", "🏌🏻‍♂", "🏌🏼‍♂️", "🏌🏼‍♂", "🏌🏽‍♂️", "🏌🏽‍♂", "🏌🏾‍♂️", "🏌🏾‍♂", "🏌🏿‍♂️", "🏌🏿‍♂", "🏌️‍♀️", "🏌‍♀️", "🏌️‍♀", "🏌‍♀", "🏌🏻‍♀️", "🏌🏻‍♀", "🏌🏼‍♀️", "🏌🏼‍♀", "🏌🏽‍♀️", "🏌🏽‍♀", "🏌🏾‍♀️", "🏌🏾‍♀", "🏌🏿‍♀️", "🏌🏿‍♀", "🏄", "🏄🏻", "🏄🏼", "🏄🏽", "🏄🏾", "🏄🏿", "🏄‍♂️", "🏄‍♂", "🏄🏻‍♂️", "🏄🏻‍♂", "🏄🏼‍♂️", "🏄🏼‍♂", "🏄🏽‍♂️", "🏄🏽‍♂", "🏄🏾‍♂️", "🏄🏾‍♂", "🏄🏿‍♂️", "🏄🏿‍♂", "🏄‍♀️", "🏄‍♀", "🏄🏻‍♀️", "🏄🏻‍♀", "🏄🏼‍♀️", "🏄🏼‍♀", "🏄🏽‍♀️", "🏄🏽‍♀", "🏄🏾‍♀️", "🏄🏾‍♀", "🏄🏿‍♀️", "🏄🏿‍♀", "🚣", "🚣🏻", "🚣🏼", "🚣🏽", "🚣🏾", "🚣🏿", "🚣‍♂️", "🚣‍♂", "🚣🏻‍♂️", "🚣🏻‍♂", "🚣🏼‍♂️", "🚣🏼‍♂", "🚣🏽‍♂️", "🚣🏽‍♂", "🚣🏾‍♂️", "🚣🏾‍♂", "🚣🏿‍♂️", "🚣🏿‍♂", "🚣‍♀️", "🚣‍♀", "🚣🏻‍♀️", "🚣🏻‍♀", "🚣🏼‍♀️", "🚣🏼‍♀", "🚣🏽‍♀️", "🚣🏽‍♀", "🚣🏾‍♀️", "🚣🏾‍♀", "🚣🏿‍♀️", "🚣🏿‍♀", "🏊", "🏊🏻", "🏊🏼", "🏊🏽", "🏊🏾", "🏊🏿", "🏊‍♂️", "🏊‍♂", "🏊🏻‍♂️", "🏊🏻‍♂", "🏊🏼‍♂️", "🏊🏼‍♂", "🏊🏽‍♂️", "🏊🏽‍♂", "🏊🏾‍♂️", "🏊🏾‍♂", "🏊🏿‍♂️", "🏊🏿‍♂", "🏊‍♀️", "🏊‍♀", "🏊🏻‍♀️", "🏊🏻‍♀", "🏊🏼‍♀️", "🏊🏼‍♀", "🏊🏽‍♀️", "🏊🏽‍♀", "🏊🏾‍♀️", "🏊🏾‍♀", "🏊🏿‍♀️", "🏊🏿‍♀", "⛹️", "⛹", "⛹🏻", "⛹🏼", "⛹🏽", "⛹🏾", "⛹🏿", "⛹️‍♂️", "⛹‍♂️", "⛹️‍♂", "⛹‍♂", "⛹🏻‍♂️", "⛹🏻‍♂", "⛹🏼‍♂️", "⛹🏼‍♂", "⛹🏽‍♂️", "⛹🏽‍♂", "⛹🏾‍♂️", "⛹🏾‍♂", "⛹🏿‍♂️", "⛹🏿‍♂", "⛹️‍♀️", "⛹‍♀️", "⛹️‍♀", "⛹‍♀", "⛹🏻‍♀️", "⛹🏻‍♀", "⛹🏼‍♀️", "⛹🏼‍♀", "⛹🏽‍♀️", "⛹🏽‍♀", "⛹🏾‍♀️", "⛹🏾‍♀", "⛹🏿‍♀️", "⛹🏿‍♀", "🏋️", "🏋", "🏋🏻", "🏋🏼", "🏋🏽", "🏋🏾", "🏋🏿", "🏋️‍♂️", "🏋‍♂️", "🏋️‍♂", "🏋‍♂", "🏋🏻‍♂️", "🏋🏻‍♂", "🏋🏼‍♂️", "🏋🏼‍♂", "🏋🏽‍♂️", "🏋🏽‍♂", "🏋🏾‍♂️", "🏋🏾‍♂", "🏋🏿‍♂️", "🏋🏿‍♂", "🏋️‍♀️", "🏋‍♀️", "🏋️‍♀", "🏋‍♀", "🏋🏻‍♀️", "🏋🏻‍♀", "🏋🏼‍♀️", "🏋🏼‍♀", "🏋🏽‍♀️", "🏋🏽‍♀", "🏋🏾‍♀️", "🏋🏾‍♀", "🏋🏿‍♀️", "🏋🏿‍♀", "🚴", "🚴🏻", "🚴🏼", "🚴🏽", "🚴🏾", "🚴🏿", "🚴‍♂️", "🚴‍♂", "🚴🏻‍♂️", "🚴🏻‍♂", "🚴🏼‍♂️", "🚴🏼‍♂", "🚴🏽‍♂️", "🚴🏽‍♂", "🚴🏾‍♂️", "🚴🏾‍♂", "🚴🏿‍♂️", "🚴🏿‍♂", "🚴‍♀️", "🚴‍♀", "🚴🏻‍♀️", "🚴🏻‍♀", "🚴🏼‍♀️", "🚴🏼‍♀", "🚴🏽‍♀️", "🚴🏽‍♀", "🚴🏾‍♀️", "🚴🏾‍♀", "🚴🏿‍♀️", "🚴🏿‍♀", "🚵", "🚵🏻", "🚵🏼", "🚵🏽", "🚵🏾", "🚵🏿", "🚵‍♂️", "🚵‍♂", "🚵🏻‍♂️", "🚵🏻‍♂", "🚵🏼‍♂️", "🚵🏼‍♂", "🚵🏽‍♂️", "🚵🏽‍♂", "🚵🏾‍♂️", "🚵🏾‍♂", "🚵🏿‍♂️", "🚵🏿‍♂", "🚵‍♀️", "🚵‍♀", "🚵🏻‍♀️", "🚵🏻‍♀", "🚵🏼‍♀️", "🚵🏼‍♀", "🚵🏽‍♀️", "🚵🏽‍♀", "🚵🏾‍♀️", "🚵🏾‍♀", "🚵🏿‍♀️", "🚵🏿‍♀", "🤸", "🤸🏻", "🤸🏼", "🤸🏽", "🤸🏾", "🤸🏿", "🤸‍♂️", "🤸‍♂", "🤸🏻‍♂️", "🤸🏻‍♂", "🤸🏼‍♂️", "🤸🏼‍♂", "🤸🏽‍♂️", "🤸🏽‍♂", "🤸🏾‍♂️", "🤸🏾‍♂", "🤸🏿‍♂️", "🤸🏿‍♂", "🤸‍♀️", "🤸‍♀", "🤸🏻‍♀️", "🤸🏻‍♀", "🤸🏼‍♀️", "🤸🏼‍♀", "🤸🏽‍♀️", "🤸🏽‍♀", "🤸🏾‍♀️", "🤸🏾‍♀", "🤸🏿‍♀️", "🤸🏿‍♀", "🤼", "🤼‍♂️", "🤼‍♂", "🤼‍♀️", "🤼‍♀", "🤽", "🤽🏻", "🤽🏼", "🤽🏽", "🤽🏾", "🤽🏿", "🤽‍♂️", "🤽‍♂", "🤽🏻‍♂️", "🤽🏻‍♂", "🤽🏼‍♂️", "🤽🏼‍♂", "🤽🏽‍♂️", "🤽🏽‍♂", "🤽🏾‍♂️", "🤽🏾‍♂", "🤽🏿‍♂️", "🤽🏿‍♂", "🤽‍♀️", "🤽‍♀", "🤽🏻‍♀️", "🤽🏻‍♀", "🤽🏼‍♀️", "🤽🏼‍♀", "🤽🏽‍♀️", "🤽🏽‍♀", "🤽🏾‍♀️", "🤽🏾‍♀", "🤽🏿‍♀️", "🤽🏿‍♀", "🤾", "🤾🏻", "🤾🏼", "🤾🏽", "🤾🏾", "🤾🏿", "🤾‍♂️", "🤾‍♂", "🤾🏻‍♂️", "🤾🏻‍♂", "🤾🏼‍♂️", "🤾🏼‍♂", "🤾🏽‍♂️", "🤾🏽‍♂", "🤾🏾‍♂️", "🤾🏾‍♂", "🤾🏿‍♂️", "🤾🏿‍♂", "🤾‍♀️", "🤾‍♀", "🤾🏻‍♀️", "🤾🏻‍♀", "🤾🏼‍♀️", "🤾🏼‍♀", "🤾🏽‍♀️", "🤾🏽‍♀", "🤾🏾‍♀️", "🤾🏾‍♀", "🤾🏿‍♀️", "🤾🏿‍♀", "🤹", "🤹🏻", "🤹🏼", "🤹🏽", "🤹🏾", "🤹🏿", "🤹‍♂️", "🤹‍♂", "🤹🏻‍♂️", "🤹🏻‍♂", "🤹🏼‍♂️", "🤹🏼‍♂", "🤹🏽‍♂️", "🤹🏽‍♂", "🤹🏾‍♂️", "🤹🏾‍♂", "🤹🏿‍♂️", "🤹🏿‍♂", "🤹‍♀️", "🤹‍♀", "🤹🏻‍♀️", "🤹🏻‍♀", "🤹🏼‍♀️", "🤹🏼‍♀", "🤹🏽‍♀️", "🤹🏽‍♀", "🤹🏾‍♀️", "🤹🏾‍♀", "🤹🏿‍♀️", "🤹🏿‍♀", "🧘", "🧘🏻", "🧘🏼", "🧘🏽", "🧘🏾", "🧘🏿", "🧘‍♂️", "🧘‍♂", "🧘🏻‍♂️", "🧘🏻‍♂", "🧘🏼‍♂️", "🧘🏼‍♂", "🧘🏽‍♂️", "🧘🏽‍♂", "🧘🏾‍♂️", "🧘🏾‍♂", "🧘🏿‍♂️", "🧘🏿‍♂", "🧘‍♀️", "🧘‍♀", "🧘🏻‍♀️", "🧘🏻‍♀", "🧘🏼‍♀️", "🧘🏼‍♀", "🧘🏽‍♀️", "🧘🏽‍♀", "🧘🏾‍♀️", "🧘🏾‍♀", "🧘🏿‍♀️", "🧘🏿‍♀", "🛀", "🛀🏻", "🛀🏼", "🛀🏽", "🛀🏾", "🛀🏿", "🛌", "🛌🏻", "🛌🏼", "🛌🏽", "🛌🏾", "🛌🏿", "🧑‍🤝‍🧑", "🧑🏻‍🤝‍🧑🏻", "🧑🏻‍🤝‍🧑🏼", "🧑🏻‍🤝‍🧑🏽", "🧑🏻‍🤝‍🧑🏾", "🧑🏻‍🤝‍🧑🏿", "🧑🏼‍🤝‍🧑🏻", "🧑🏼‍🤝‍🧑🏼", "🧑🏼‍🤝‍🧑🏽", "🧑🏼‍🤝‍🧑🏾", "🧑🏼‍🤝‍🧑🏿", "🧑🏽‍🤝‍🧑🏻", "🧑🏽‍🤝‍🧑🏼", "🧑🏽‍🤝‍🧑🏽", "🧑🏽‍🤝‍🧑🏾", "🧑🏽‍🤝‍🧑🏿", "🧑🏾‍🤝‍🧑🏻", "🧑🏾‍🤝‍🧑🏼", "🧑🏾‍🤝‍🧑🏽", "🧑🏾‍🤝‍🧑🏾", "🧑🏾‍🤝‍🧑🏿", "🧑🏿‍🤝‍🧑🏻", "🧑🏿‍🤝‍🧑🏼", "🧑🏿‍🤝‍🧑🏽", "🧑🏿‍🤝‍🧑🏾", "🧑🏿‍🤝‍🧑🏿", "👭", "👭🏻", "👩🏻‍🤝‍👩🏼", "👩🏻‍🤝‍👩🏽", "👩🏻‍🤝‍👩🏾", "👩🏻‍🤝‍👩🏿", "👩🏼‍🤝‍👩🏻", "👭🏼", "👩🏼‍🤝‍👩🏽", "👩🏼‍🤝‍👩🏾", "👩🏼‍🤝‍👩🏿", "👩🏽‍🤝‍👩🏻", "👩🏽‍🤝‍👩🏼", "👭🏽", "👩🏽‍🤝‍👩🏾", "👩🏽‍🤝‍👩🏿", "👩🏾‍🤝‍👩🏻", "👩🏾‍🤝‍👩🏼", "👩🏾‍🤝‍👩🏽", "👭🏾", "👩🏾‍🤝‍👩🏿", "👩🏿‍🤝‍👩🏻", "👩🏿‍🤝‍👩🏼", "👩🏿‍🤝‍👩🏽", "👩🏿‍🤝‍👩🏾", "👭🏿", "👫", "👫🏻", "👩🏻‍🤝‍👨🏼", "👩🏻‍🤝‍👨🏽", "👩🏻‍🤝‍👨🏾", "👩🏻‍🤝‍👨🏿", "👩🏼‍🤝‍👨🏻", "👫🏼", "👩🏼‍🤝‍👨🏽", "👩🏼‍🤝‍👨🏾", "👩🏼‍🤝‍👨🏿", "👩🏽‍🤝‍👨🏻", "👩🏽‍🤝‍👨🏼", "👫🏽", "👩🏽‍🤝‍👨🏾", "👩🏽‍🤝‍👨🏿", "👩🏾‍🤝‍👨🏻", "👩🏾‍🤝‍👨🏼", "👩🏾‍🤝‍👨🏽", "👫🏾", "👩🏾‍🤝‍👨🏿", "👩🏿‍🤝‍👨🏻", "👩🏿‍🤝‍👨🏼", "👩🏿‍🤝‍👨🏽", "👩🏿‍🤝‍👨🏾", "👫🏿", "👬", "👬🏻", "👨🏻‍🤝‍👨🏼", "👨🏻‍🤝‍👨🏽", "👨🏻‍🤝‍👨🏾", "👨🏻‍🤝‍👨🏿", "👨🏼‍🤝‍👨🏻", "👬🏼", "👨🏼‍🤝‍👨🏽", "👨🏼‍🤝‍👨🏾", "👨🏼‍🤝‍👨🏿", "👨🏽‍🤝‍👨🏻", "👨🏽‍🤝‍👨🏼", "👬🏽", "👨🏽‍🤝‍👨🏾", "👨🏽‍🤝‍👨🏿", "👨🏾‍🤝‍👨🏻", "👨🏾‍🤝‍👨🏼", "👨🏾‍🤝‍👨🏽", "👬🏾", "👨🏾‍🤝‍👨🏿", "👨🏿‍🤝‍👨🏻", "👨🏿‍🤝‍👨🏼", "👨🏿‍🤝‍👨🏽", "👨🏿‍🤝‍👨🏾", "👬🏿", "💏", "💏🏻", "💏🏼", "💏🏽", "💏🏾", "💏🏿", "🧑🏻‍❤️‍💋‍🧑🏼", "🧑🏻‍❤‍💋‍🧑🏼", "🧑🏻‍❤️‍💋‍🧑🏽", "🧑🏻‍❤‍💋‍🧑🏽", "🧑🏻‍❤️‍💋‍🧑🏾", "🧑🏻‍❤‍💋‍🧑🏾", "🧑🏻‍❤️‍💋‍🧑🏿", "🧑🏻‍❤‍💋‍🧑🏿", "🧑🏼‍❤️‍💋‍🧑🏻", "🧑🏼‍❤‍💋‍🧑🏻", "🧑🏼‍❤️‍💋‍🧑🏽", "🧑🏼‍❤‍💋‍🧑🏽", "🧑🏼‍❤️‍💋‍🧑🏾", "🧑🏼‍❤‍💋‍🧑🏾", "🧑🏼‍❤️‍💋‍🧑🏿", "🧑🏼‍❤‍💋‍🧑🏿", "🧑🏽‍❤️‍💋‍🧑🏻", "🧑🏽‍❤‍💋‍🧑🏻", "🧑🏽‍❤️‍💋‍🧑🏼", "🧑🏽‍❤‍💋‍🧑🏼", "🧑🏽‍❤️‍💋‍🧑🏾", "🧑🏽‍❤‍💋‍🧑🏾", "🧑🏽‍❤️‍💋‍🧑🏿", "🧑🏽‍❤‍💋‍🧑🏿", "🧑🏾‍❤️‍💋‍🧑🏻", "🧑🏾‍❤‍💋‍🧑🏻", "🧑🏾‍❤️‍💋‍🧑🏼", "🧑🏾‍❤‍💋‍🧑🏼", "🧑🏾‍❤️‍💋‍🧑🏽", "🧑🏾‍❤‍💋‍🧑🏽", "🧑🏾‍❤️‍💋‍🧑🏿", "🧑🏾‍❤‍💋‍🧑🏿", "🧑🏿‍❤️‍💋‍🧑🏻", "🧑🏿‍❤‍💋‍🧑🏻", "🧑🏿‍❤️‍💋‍🧑🏼", "🧑🏿‍❤‍💋‍🧑🏼", "🧑🏿‍❤️‍💋‍🧑🏽", "🧑🏿‍❤‍💋‍🧑🏽", "🧑🏿‍❤️‍💋‍🧑🏾", "🧑🏿‍❤‍💋‍🧑🏾", "👩‍❤️‍💋‍👨", "👩‍❤‍💋‍👨", "👩🏻‍❤️‍💋‍👨🏻", "👩🏻‍❤‍💋‍👨🏻", "👩🏻‍❤️‍💋‍👨🏼", "👩🏻‍❤‍💋‍👨🏼", "👩🏻‍❤️‍💋‍👨🏽", "👩🏻‍❤‍💋‍👨🏽", "👩🏻‍❤️‍💋‍👨🏾", "👩🏻‍❤‍💋‍👨🏾", "👩🏻‍❤️‍💋‍👨🏿", "👩🏻‍❤‍💋‍👨🏿", "👩🏼‍❤️‍💋‍👨🏻", "👩🏼‍❤‍💋‍👨🏻", "👩🏼‍❤️‍💋‍👨🏼", "👩🏼‍❤‍💋‍👨🏼", "👩🏼‍❤️‍💋‍👨🏽", "👩🏼‍❤‍💋‍👨🏽", "👩🏼‍❤️‍💋‍👨🏾", "👩🏼‍❤‍💋‍👨🏾", "👩🏼‍❤️‍💋‍👨🏿", "👩🏼‍❤‍💋‍👨🏿", "👩🏽‍❤️‍💋‍👨🏻", "👩🏽‍❤‍💋‍👨🏻", "👩🏽‍❤️‍💋‍👨🏼", "👩🏽‍❤‍💋‍👨🏼", "👩🏽‍❤️‍💋‍👨🏽", "👩🏽‍❤‍💋‍👨🏽", "👩🏽‍❤️‍💋‍👨🏾", "👩🏽‍❤‍💋‍👨🏾", "👩🏽‍❤️‍💋‍👨🏿", "👩🏽‍❤‍💋‍👨🏿", "👩🏾‍❤️‍💋‍👨🏻", "👩🏾‍❤‍💋‍👨🏻", "👩🏾‍❤️‍💋‍👨🏼", "👩🏾‍❤‍💋‍👨🏼", "👩🏾‍❤️‍💋‍👨🏽", "👩🏾‍❤‍💋‍👨🏽", "👩🏾‍❤️‍💋‍👨🏾", "👩🏾‍❤‍💋‍👨🏾", "👩🏾‍❤️‍💋‍👨🏿", "👩🏾‍❤‍💋‍👨🏿", "👩🏿‍❤️‍💋‍👨🏻", "👩🏿‍❤‍💋‍👨🏻", "👩🏿‍❤️‍💋‍👨🏼", "👩🏿‍❤‍💋‍👨🏼", "👩🏿‍❤️‍💋‍👨🏽", "👩🏿‍❤‍💋‍👨🏽", "👩🏿‍❤️‍💋‍👨🏾", "👩🏿‍❤‍💋‍👨🏾", "👩🏿‍❤️‍💋‍👨🏿", "👩🏿‍❤‍💋‍👨🏿", "👨‍❤️‍💋‍👨", "👨‍❤‍💋‍👨", "👨🏻‍❤️‍💋‍👨🏻", "👨🏻‍❤‍💋‍👨🏻", "👨🏻‍❤️‍💋‍👨🏼", "👨🏻‍❤‍💋‍👨🏼", "👨🏻‍❤️‍💋‍👨🏽", "👨🏻‍❤‍💋‍👨🏽", "👨🏻‍❤️‍💋‍👨🏾", "👨🏻‍❤‍💋‍👨🏾", "👨🏻‍❤️‍💋‍👨🏿", "👨🏻‍❤‍💋‍👨🏿", "👨🏼‍❤️‍💋‍👨🏻", "👨🏼‍❤‍💋‍👨🏻", "👨🏼‍❤️‍💋‍👨🏼", "👨🏼‍❤‍💋‍👨🏼", "👨🏼‍❤️‍💋‍👨🏽", "👨🏼‍❤‍💋‍👨🏽", "👨🏼‍❤️‍💋‍👨🏾", "👨🏼‍❤‍💋‍👨🏾", "👨🏼‍❤️‍💋‍👨🏿", "👨🏼‍❤‍💋‍👨🏿", "👨🏽‍❤️‍💋‍👨🏻", "👨🏽‍❤‍💋‍👨🏻", "👨🏽‍❤️‍💋‍👨🏼", "👨🏽‍❤‍💋‍👨🏼", "👨🏽‍❤️‍💋‍👨🏽", "👨🏽‍❤‍💋‍👨🏽", "👨🏽‍❤️‍💋‍👨🏾", "👨🏽‍❤‍💋‍👨🏾", "👨🏽‍❤️‍💋‍👨🏿", "👨🏽‍❤‍💋‍👨🏿", "👨🏾‍❤️‍💋‍👨🏻", "👨🏾‍❤‍💋‍👨🏻", "👨🏾‍❤️‍💋‍👨🏼", "👨🏾‍❤‍💋‍👨🏼", "👨🏾‍❤️‍💋‍👨🏽", "👨🏾‍❤‍💋‍👨🏽", "👨🏾‍❤️‍💋‍👨🏾", "👨🏾‍❤‍💋‍👨🏾", "👨🏾‍❤️‍💋‍👨🏿", "👨🏾‍❤‍💋‍👨🏿", "👨🏿‍❤️‍💋‍👨🏻", "👨🏿‍❤‍💋‍👨🏻", "👨🏿‍❤️‍💋‍👨🏼", "👨🏿‍❤‍💋‍👨🏼", "👨🏿‍❤️‍💋‍👨🏽", "👨🏿‍❤‍💋‍👨🏽", "👨🏿‍❤️‍💋‍👨🏾", "👨🏿‍❤‍💋‍👨🏾", "👨🏿‍❤️‍💋‍👨🏿", "👨🏿‍❤‍💋‍👨🏿", "👩‍❤️‍💋‍👩", "👩‍❤‍💋‍👩", "👩🏻‍❤️‍💋‍👩🏻", "👩🏻‍❤‍💋‍👩🏻", "👩🏻‍❤️‍💋‍👩🏼", "👩🏻‍❤‍💋‍👩🏼", "👩🏻‍❤️‍💋‍👩🏽", "👩🏻‍❤‍💋‍👩🏽", "👩🏻‍❤️‍💋‍👩🏾", "👩🏻‍❤‍💋‍👩🏾", "👩🏻‍❤️‍💋‍👩🏿", "👩🏻‍❤‍💋‍👩🏿", "👩🏼‍❤️‍💋‍👩🏻", "👩🏼‍❤‍💋‍👩🏻", "👩🏼‍❤️‍💋‍👩🏼", "👩🏼‍❤‍💋‍👩🏼", "👩🏼‍❤️‍💋‍👩🏽", "👩🏼‍❤‍💋‍👩🏽", "👩🏼‍❤️‍💋‍👩🏾", "👩🏼‍❤‍💋‍👩🏾", "👩🏼‍❤️‍💋‍👩🏿", "👩🏼‍❤‍💋‍👩🏿", "👩🏽‍❤️‍💋‍👩🏻", "👩🏽‍❤‍💋‍👩🏻", "👩🏽‍❤️‍💋‍👩🏼", "👩🏽‍❤‍💋‍👩🏼", "👩🏽‍❤️‍💋‍👩🏽", "👩🏽‍❤‍💋‍👩🏽", "👩🏽‍❤️‍💋‍👩🏾", "👩🏽‍❤‍💋‍👩🏾", "👩🏽‍❤️‍💋‍👩🏿", "👩🏽‍❤‍💋‍👩🏿", "👩🏾‍❤️‍💋‍👩🏻", "👩🏾‍❤‍💋‍👩🏻", "👩🏾‍❤️‍💋‍👩🏼", "👩🏾‍❤‍💋‍👩🏼", "👩🏾‍❤️‍💋‍👩🏽", "👩🏾‍❤‍💋‍👩🏽", "👩🏾‍❤️‍💋‍👩🏾", "👩🏾‍❤‍💋‍👩🏾", "👩🏾‍❤️‍💋‍👩🏿", "👩🏾‍❤‍💋‍👩🏿", "👩🏿‍❤️‍💋‍👩🏻", "👩🏿‍❤‍💋‍👩🏻", "👩🏿‍❤️‍💋‍👩🏼", "👩🏿‍❤‍💋‍👩🏼", "👩🏿‍❤️‍💋‍👩🏽", "👩🏿‍❤‍💋‍👩🏽", "👩🏿‍❤️‍💋‍👩🏾", "👩🏿‍❤‍💋‍👩🏾", "👩🏿‍❤️‍💋‍👩🏿", "👩🏿‍❤‍💋‍👩🏿", "💑", "💑🏻", "💑🏼", "💑🏽", "💑🏾", "💑🏿", "🧑🏻‍❤️‍🧑🏼", "🧑🏻‍❤‍🧑🏼", "🧑🏻‍❤️‍🧑🏽", "🧑🏻‍❤‍🧑🏽", "🧑🏻‍❤️‍🧑🏾", "🧑🏻‍❤‍🧑🏾", "🧑🏻‍❤️‍🧑🏿", "🧑🏻‍❤‍🧑🏿", "🧑🏼‍❤️‍🧑🏻", "🧑🏼‍❤‍🧑🏻", "🧑🏼‍❤️‍🧑🏽", "🧑🏼‍❤‍🧑🏽", "🧑🏼‍❤️‍🧑🏾", "🧑🏼‍❤‍🧑🏾", "🧑🏼‍❤️‍🧑🏿", "🧑🏼‍❤‍🧑🏿", "🧑🏽‍❤️‍🧑🏻", "🧑🏽‍❤‍🧑🏻", "🧑🏽‍❤️‍🧑🏼", "🧑🏽‍❤‍🧑🏼", "🧑🏽‍❤️‍🧑🏾", "🧑🏽‍❤‍🧑🏾", "🧑🏽‍❤️‍🧑🏿", "🧑🏽‍❤‍🧑🏿", "🧑🏾‍❤️‍🧑🏻", "🧑🏾‍❤‍🧑🏻", "🧑🏾‍❤️‍🧑🏼", "🧑🏾‍❤‍🧑🏼", "🧑🏾‍❤️‍🧑🏽", "🧑🏾‍❤‍🧑🏽", "🧑🏾‍❤️‍🧑🏿", "🧑🏾‍❤‍🧑🏿", "🧑🏿‍❤️‍🧑🏻", "🧑🏿‍❤‍🧑🏻", "🧑🏿‍❤️‍🧑🏼", "🧑🏿‍❤‍🧑🏼", "🧑🏿‍❤️‍🧑🏽", "🧑🏿‍❤‍🧑🏽", "🧑🏿‍❤️‍🧑🏾", "🧑🏿‍❤‍🧑🏾", "👩‍❤️‍👨", "👩‍❤‍👨", "👩🏻‍❤️‍👨🏻", "👩🏻‍❤‍👨🏻", "👩🏻‍❤️‍👨🏼", "👩🏻‍❤‍👨🏼", "👩🏻‍❤️‍👨🏽", "👩🏻‍❤‍👨🏽", "👩🏻‍❤️‍👨🏾", "👩🏻‍❤‍👨🏾", "👩🏻‍❤️‍👨🏿", "👩🏻‍❤‍👨🏿", "👩🏼‍❤️‍👨🏻", "👩🏼‍❤‍👨🏻", "👩🏼‍❤️‍👨🏼", "👩🏼‍❤‍👨🏼", "👩🏼‍❤️‍👨🏽", "👩🏼‍❤‍👨🏽", "👩🏼‍❤️‍👨🏾", "👩🏼‍❤‍👨🏾", "👩🏼‍❤️‍👨🏿", "👩🏼‍❤‍👨🏿", "👩🏽‍❤️‍👨🏻", "👩🏽‍❤‍👨🏻", "👩🏽‍❤️‍👨🏼", "👩🏽‍❤‍👨🏼", "👩🏽‍❤️‍👨🏽", "👩🏽‍❤‍👨🏽", "👩🏽‍❤️‍👨🏾", "👩🏽‍❤‍👨🏾", "👩🏽‍❤️‍👨🏿", "👩🏽‍❤‍👨🏿", "👩🏾‍❤️‍👨🏻", "👩🏾‍❤‍👨🏻", "👩🏾‍❤️‍👨🏼", "👩🏾‍❤‍👨🏼", "👩🏾‍❤️‍👨🏽", "👩🏾‍❤‍👨🏽", "👩🏾‍❤️‍👨🏾", "👩🏾‍❤‍👨🏾", "👩🏾‍❤️‍👨🏿", "👩🏾‍❤‍👨🏿", "👩🏿‍❤️‍👨🏻", "👩🏿‍❤‍👨🏻", "👩🏿‍❤️‍👨🏼", "👩🏿‍❤‍👨🏼", "👩🏿‍❤️‍👨🏽", "👩🏿‍❤‍👨🏽", "👩🏿‍❤️‍👨🏾", "👩🏿‍❤‍👨🏾", "👩🏿‍❤️‍👨🏿", "👩🏿‍❤‍👨🏿", "👨‍❤️‍👨", "👨‍❤‍👨", "👨🏻‍❤️‍👨🏻", "👨🏻‍❤‍👨🏻", "👨🏻‍❤️‍👨🏼", "👨🏻‍❤‍👨🏼", "👨🏻‍❤️‍👨🏽", "👨🏻‍❤‍👨🏽", "👨🏻‍❤️‍👨🏾", "👨🏻‍❤‍👨🏾", "👨🏻‍❤️‍👨🏿", "👨🏻‍❤‍👨🏿", "👨🏼‍❤️‍👨🏻", "👨🏼‍❤‍👨🏻", "👨🏼‍❤️‍👨🏼", "👨🏼‍❤‍👨🏼", "👨🏼‍❤️‍👨🏽", "👨🏼‍❤‍👨🏽", "👨🏼‍❤️‍👨🏾", "👨🏼‍❤‍👨🏾", "👨🏼‍❤️‍👨🏿", "👨🏼‍❤‍👨🏿", "👨🏽‍❤️‍👨🏻", "👨🏽‍❤‍👨🏻", "👨🏽‍❤️‍👨🏼", "👨🏽‍❤‍👨🏼", "👨🏽‍❤️‍👨🏽", "👨🏽‍❤‍👨🏽", "👨🏽‍❤️‍👨🏾", "👨🏽‍❤‍👨🏾", "👨🏽‍❤️‍👨🏿", "👨🏽‍❤‍👨🏿", "👨🏾‍❤️‍👨🏻", "👨🏾‍❤‍👨🏻", "👨🏾‍❤️‍👨🏼", "👨🏾‍❤‍👨🏼", "👨🏾‍❤️‍👨🏽", "👨🏾‍❤‍👨🏽", "👨🏾‍❤️‍👨🏾", "👨🏾‍❤‍👨🏾", "👨🏾‍❤️‍👨🏿", "👨🏾‍❤‍👨🏿", "👨🏿‍❤️‍👨🏻", "👨🏿‍❤‍👨🏻", "👨🏿‍❤️‍👨🏼", "👨🏿‍❤‍👨🏼", "👨🏿‍❤️‍👨🏽", "👨🏿‍❤‍👨🏽", "👨🏿‍❤️‍👨🏾", "👨🏿‍❤‍👨🏾", "👨🏿‍❤️‍👨🏿", "👨🏿‍❤‍👨🏿", "👩‍❤️‍👩", "👩‍❤‍👩", "👩🏻‍❤️‍👩🏻", "👩🏻‍❤‍👩🏻", "👩🏻‍❤️‍👩🏼", "👩🏻‍❤‍👩🏼", "👩🏻‍❤️‍👩🏽", "👩🏻‍❤‍👩🏽", "👩🏻‍❤️‍👩🏾", "👩🏻‍❤‍👩🏾", "👩🏻‍❤️‍👩🏿", "👩🏻‍❤‍👩🏿", "👩🏼‍❤️‍👩🏻", "👩🏼‍❤‍👩🏻", "👩🏼‍❤️‍👩🏼", "👩🏼‍❤‍👩🏼", "👩🏼‍❤️‍👩🏽", "👩🏼‍❤‍👩🏽", "👩🏼‍❤️‍👩🏾", "👩🏼‍❤‍👩🏾", "👩🏼‍❤️‍👩🏿", "👩🏼‍❤‍👩🏿", "👩🏽‍❤️‍👩🏻", "👩🏽‍❤‍👩🏻", "👩🏽‍❤️‍👩🏼", "👩🏽‍❤‍👩🏼", "👩🏽‍❤️‍👩🏽", "👩🏽‍❤‍👩🏽", "👩🏽‍❤️‍👩🏾", "👩🏽‍❤‍👩🏾", "👩🏽‍❤️‍👩🏿", "👩🏽‍❤‍👩🏿", "👩🏾‍❤️‍👩🏻", "👩🏾‍❤‍👩🏻", "👩🏾‍❤️‍👩🏼", "👩🏾‍❤‍👩🏼", "👩🏾‍❤️‍👩🏽", "👩🏾‍❤‍👩🏽", "👩🏾‍❤️‍👩🏾", "👩🏾‍❤‍👩🏾", "👩🏾‍❤️‍👩🏿", "👩🏾‍❤‍👩🏿", "👩🏿‍❤️‍👩🏻", "👩🏿‍❤‍👩🏻", "👩🏿‍❤️‍👩🏼", "👩🏿‍❤‍👩🏼", "👩🏿‍❤️‍👩🏽", "👩🏿‍❤‍👩🏽", "👩🏿‍❤️‍👩🏾", "👩🏿‍❤‍👩🏾", "👩🏿‍❤️‍👩🏿", "👩🏿‍❤‍👩🏿", "👪", "👨‍👩‍👦", "👨‍👩‍👧", "👨‍👩‍👧‍👦", "👨‍👩‍👦‍👦", "👨‍👩‍👧‍👧", "👨‍👨‍👦", "👨‍👨‍👧", "👨‍👨‍👧‍👦", "👨‍👨‍👦‍👦", "👨‍👨‍👧‍👧", "👩‍👩‍👦", "👩‍👩‍👧", "👩‍👩‍👧‍👦", "👩‍👩‍👦‍👦", "👩‍👩‍👧‍👧", "👨‍👦", "👨‍👦‍👦", "👨‍👧", "👨‍👧‍👦", "👨‍👧‍👧", "👩‍👦", "👩‍👦‍👦", "👩‍👧", "👩‍👧‍👦", "👩‍👧‍👧", "🗣️", "🗣", "👤", "👥", "🫂", "👣", "🏻", "🏼", "🏽", "🏾", "🏿", "🦰", "🦱", "🦳", "🦲", "🐵", "🐒", "🦍", "🦧", "🐶", "🐕", "🦮", "🐕‍🦺", "🐩", "🐺", "🦊", "🦝", "🐱", "🐈", "🐈‍⬛", "🦁", "🐯", "🐅", "🐆", "🐴", "🐎", "🦄", "🦓", "🦌", "🦬", "🐮", "🐂", "🐃", "🐄", "🐷", "🐖", "🐗", "🐽", "🐏", "🐑", "🐐", "🐪", "🐫", "🦙", "🦒", "🐘", "🦣", "🦏", "🦛", "🐭", "🐁", "🐀", "🐹", "🐰", "🐇", "🐿️", "🐿", "🦫", "🦔", "🦇", "🐻", "🐻‍❄️", "🐻‍❄", "🐨", "🐼", "🦥", "🦦", "🦨", "🦘", "🦡", "🐾", "🦃", "🐔", "🐓", "🐣", "🐤", "🐥", "🐦", "🐧", "🕊️", "🕊", "🦅", "🦆", "🦢", "🦉", "🦤", "🪶", "🦩", "🦚", "🦜", "🐸", "🐊", "🐢", "🦎", "🐍", "🐲", "🐉", "🦕", "🦖", "🐳", "🐋", "🐬", "🦭", "🐟", "🐠", "🐡", "🦈", "🐙", "🐚", "🐌", "🦋", "🐛", "🐜", "🐝", "🪲", "🐞", "🦗", "🪳", "🕷️", "🕷", "🕸️", "🕸", "🦂", "🦟", "🪰", "🪱", "🦠", "💐", "🌸", "💮", "🏵️", "🏵", "🌹", "🥀", "🌺", "🌻", "🌼", "🌷", "🌱", "🪴", "🌲", "🌳", "🌴", "🌵", "🌾", "🌿", "☘️", "☘", "🍀", "🍁", "🍂", "🍃", "🍇", "🍈", "🍉", "🍊", "🍋", "🍌", "🍍", "🥭", "🍎", "🍏", "🍐", "🍑", "🍒", "🍓", "🫐", "🥝", "🍅", "🫒", "🥥", "🥑", "🍆", "🥔", "🥕", "🌽", "🌶️", "🌶", "🫑", "🥒", "🥬", "🥦", "🧄", "🧅", "🍄", "🥜", "🌰", "🍞", "🥐", "🥖", "🫓", "🥨", "🥯", "🥞", "🧇", "🧀", "🍖", "🍗", "🥩", "🥓", "🍔", "🍟", "🍕", "🌭", "🥪", "🌮", "🌯", "🫔", "🥙", "🧆", "🥚", "🍳", "🥘", "🍲", "🫕", "🥣", "🥗", "🍿", "🧈", "🧂", "🥫", "🍱", "🍘", "🍙", "🍚", "🍛", "🍜", "🍝", "🍠", "🍢", "🍣", "🍤", "🍥", "🥮", "🍡", "🥟", "🥠", "🥡", "🦀", "🦞", "🦐", "🦑", "🦪", "🍦", "🍧", "🍨", "🍩", "🍪", "🎂", "🍰", "🧁", "🥧", "🍫", "🍬", "🍭", "🍮", "🍯", "🍼", "🥛", "☕", "🫖", "🍵", "🍶", "🍾", "🍷", "🍸", "🍹", "🍺", "🍻", "🥂", "🥃", "🥤", "🧋", "🧃", "🧉", "🧊", "🥢", "🍽️", "🍽", "🍴", "🥄", "🔪", "🏺", "🌍", "🌎", "🌏", "🌐", "🗺️", "🗺", "🗾", "🧭", "🏔️", "🏔", "⛰️", "⛰", "🌋", "🗻", "🏕️", "🏕", "🏖️", "🏖", "🏜️", "🏜", "🏝️", "🏝", "🏞️", "🏞", "🏟️", "🏟", "🏛️", "🏛", "🏗️", "🏗", "🧱", "🪨", "🪵", "🛖", "🏘️", "🏘", "🏚️", "🏚", "🏠", "🏡", "🏢", "🏣", "🏤", "🏥", "🏦", "🏨", "🏩", "🏪", "🏫", "🏬", "🏭", "🏯", "🏰", "💒", "🗼", "🗽", "⛪", "🕌", "🛕", "🕍", "⛩️", "⛩", "🕋", "⛲", "⛺", "🌁", "🌃", "🏙️", "🏙", "🌄", "🌅", "🌆", "🌇", "🌉", "♨️", "♨", "🎠", "🎡", "🎢", "💈", "🎪", "🚂", "🚃", "🚄", "🚅", "🚆", "🚇", "🚈", "🚉", "🚊", "🚝", "🚞", "🚋", "🚌", "🚍", "🚎", "🚐", "🚑", "🚒", "🚓", "🚔", "🚕", "🚖", "🚗", "🚘", "🚙", "🛻", "🚚", "🚛", "🚜", "🏎️", "🏎", "🏍️", "🏍", "🛵", "🦽", "🦼", "🛺", "🚲", "🛴", "🛹", "🛼", "🚏", "🛣️", "🛣", "🛤️", "🛤", "🛢️", "🛢", "⛽", "🚨", "🚥", "🚦", "🛑", "🚧", "⚓", "⛵", "🛶", "🚤", "🛳️", "🛳", "⛴️", "⛴", "🛥️", "🛥", "🚢", "✈️", "✈", "🛩️", "🛩", "🛫", "🛬", "🪂", "💺", "🚁", "🚟", "🚠", "🚡", "🛰️", "🛰", "🚀", "🛸", "🛎️", "🛎", "🧳", "⌛", "⏳", "⌚", "⏰", "⏱️", "⏱", "⏲️", "⏲", "🕰️", "🕰", "🕛", "🕧", "🕐", "🕜", "🕑", "🕝", "🕒", "🕞", "🕓", "🕟", "🕔", "🕠", "🕕", "🕡", "🕖", "🕢", "🕗", "🕣", "🕘", "🕤", "🕙", "🕥", "🕚", "🕦", "🌑", "🌒", "🌓", "🌔", "🌕", "🌖", "🌗", "🌘", "🌙", "🌚", "🌛", "🌜", "🌡️", "🌡", "☀️", "☀", "🌝", "🌞", "🪐", "⭐", "🌟", "🌠", "🌌", "☁️", "☁", "⛅", "⛈️", "⛈", "🌤️", "🌤", "🌥️", "🌥", "🌦️", "🌦", "🌧️", "🌧", "🌨️", "🌨", "🌩️", "🌩", "🌪️", "🌪", "🌫️", "🌫", "🌬️", "🌬", "🌀", "🌈", "🌂", "☂️", "☂", "☔", "⛱️", "⛱", "⚡", "❄️", "❄", "☃️", "☃", "⛄", "☄️", "☄", "🔥", "💧", "🌊", "🎃", "🎄", "🎆", "🎇", "🧨", "✨", "🎈", "🎉", "🎊", "🎋", "🎍", "🎎", "🎏", "🎐", "🎑", "🧧", "🎀", "🎁", "🎗️", "🎗", "🎟️", "🎟", "🎫", "🎖️", "🎖", "🏆", "🏅", "🥇", "🥈", "🥉", "⚽", "⚾", "🥎", "🏀", "🏐", "🏈", "🏉", "🎾", "🥏", "🎳", "🏏", "🏑", "🏒", "🥍", "🏓", "🏸", "🥊", "🥋", "🥅", "⛳", "⛸️", "⛸", "🎣", "🤿", "🎽", "🎿", "🛷", "🥌", "🎯", "🪀", "🪁", "🎱", "🔮", "🪄", "🧿", "🎮", "🕹️", "🕹", "🎰", "🎲", "🧩", "🧸", "🪅", "🪆", "♠️", "♠", "♥️", "♥", "♦️", "♦", "♣️", "♣", "♟️", "♟", "🃏", "🀄", "🎴", "🎭", "🖼️", "🖼", "🎨", "🧵", "🪡", "🧶", "🪢", "👓", "🕶️", "🕶", "🥽", "🥼", "🦺", "👔", "👕", "👖", "🧣", "🧤", "🧥", "🧦", "👗", "👘", "🥻", "🩱", "🩲", "🩳", "👙", "👚", "👛", "👜", "👝", "🛍️", "🛍", "🎒", "🩴", "👞", "👟", "🥾", "🥿", "👠", "👡", "🩰", "👢", "👑", "👒", "🎩", "🎓", "🧢", "🪖", "⛑️", "⛑", "📿", "💄", "💍", "💎", "🔇", "🔈", "🔉", "🔊", "📢", "📣", "📯", "🔔", "🔕", "🎼", "🎵", "🎶", "🎙️", "🎙", "🎚️", "🎚", "🎛️", "🎛", "🎤", "🎧", "📻", "🎷", "🪗", "🎸", "🎹", "🎺", "🎻", "🪕", "🥁", "🪘", "📱", "📲", "☎️", "☎", "📞", "📟", "📠", "🔋", "🔌", "💻", "🖥️", "🖥", "🖨️", "🖨", "⌨️", "⌨", "🖱️", "🖱", "🖲️", "🖲", "💽", "💾", "💿", "📀", "🧮", "🎥", "🎞️", "🎞", "📽️", "📽", "🎬", "📺", "📷", "📸", "📹", "📼", "🔍", "🔎", "🕯️", "🕯", "💡", "🔦", "🏮", "🪔", "📔", "📕", "📖", "📗", "📘", "📙", "📚", "📓", "📒", "📃", "📜", "📄", "📰", "🗞️", "🗞", "📑", "🔖", "🏷️", "🏷", "💰", "🪙", "💴", "💵", "💶", "💷", "💸", "💳", "🧾", "💹", "✉️", "✉", "📧", "📨", "📩", "📤", "📥", "📦", "📫", "📪", "📬", "📭", "📮", "🗳️", "🗳", "✏️", "✏", "✒️", "✒", "🖋️", "🖋", "🖊️", "🖊", "🖌️", "🖌", "🖍️", "🖍", "📝", "💼", "📁", "📂", "🗂️", "🗂", "📅", "📆", "🗒️", "🗒", "🗓️", "🗓", "📇", "📈", "📉", "📊", "📋", "📌", "📍", "📎", "🖇️", "🖇", "📏", "📐", "✂️", "✂", "🗃️", "🗃", "🗄️", "🗄", "🗑️", "🗑", "🔒", "🔓", "🔏", "🔐", "🔑", "🗝️", "🗝", "🔨", "🪓", "⛏️", "⛏", "⚒️", "⚒", "🛠️", "🛠", "🗡️", "🗡", "⚔️", "⚔", "🔫", "🪃", "🏹", "🛡️", "🛡", "🪚", "🔧", "🪛", "🔩", "⚙️", "⚙", "🗜️", "🗜", "⚖️", "⚖", "🦯", "🔗", "⛓️", "⛓", "🪝", "🧰", "🧲", "🪜", "⚗️", "⚗", "🧪", "🧫", "🧬", "🔬", "🔭", "📡", "💉", "🩸", "💊", "🩹", "🩺", "🚪", "🛗", "🪞", "🪟", "🛏️", "🛏", "🛋️", "🛋", "🪑", "🚽", "🪠", "🚿", "🛁", "🪤", "🪒", "🧴", "🧷", "🧹", "🧺", "🧻", "🪣", "🧼", "🪥", "🧽", "🧯", "🛒", "🚬", "⚰️", "⚰", "🪦", "⚱️", "⚱", "🗿", "🪧", "🏧", "🚮", "🚰", "♿", "🚹", "🚺", "🚻", "🚼", "🚾", "🛂", "🛃", "🛄", "🛅", "⚠️", "⚠", "🚸", "⛔", "🚫", "🚳", "🚭", "🚯", "🚱", "🚷", "📵", "🔞", "☢️", "☢", "☣️", "☣", "⬆️", "⬆", "↗️", "↗", "➡️", "➡", "↘️", "↘", "⬇️", "⬇", "↙️", "↙", "⬅️", "⬅", "↖️", "↖", "↕️", "↕", "↔️", "↔", "↩️", "↩", "↪️", "↪", "⤴️", "⤴", "⤵️", "⤵", "🔃", "🔄", "🔙", "🔚", "🔛", "🔜", "🔝", "🛐", "⚛️", "⚛", "🕉️", "🕉", "✡️", "✡", "☸️", "☸", "☯️", "☯", "✝️", "✝", "☦️", "☦", "☪️", "☪", "☮️", "☮", "🕎", "🔯", "♈", "♉", "♊", "♋", "♌", "♍", "♎", "♏", "♐", "♑", "♒", "♓", "⛎", "🔀", "🔁", "🔂", "▶️", "▶", "⏩", "⏭️", "⏭", "⏯️", "⏯", "◀️", "◀", "⏪", "⏮️", "⏮", "🔼", "⏫", "🔽", "⏬", "⏸️", "⏸", "⏹️", "⏹", "⏺️", "⏺", "⏏️", "⏏", "🎦", "🔅", "🔆", "📶", "📳", "📴", "♀️", "♀", "♂️", "♂", "⚧️", "⚧", "✖️", "✖", "➕", "➖", "➗", "♾️", "♾", "‼️", "‼", "⁉️", "⁉", "❓", "❔", "❕", "❗", "〰️", "〰", "💱", "💲", "⚕️", "⚕", "♻️", "♻", "⚜️", "⚜", "🔱", "📛", "🔰", "⭕", "✅", "☑️", "☑", "✔️", "✔", "❌", "❎", "➰", "➿", "〽️", "〽", "✳️", "✳", "✴️", "✴", "❇️", "❇", "©️", "©", "®️", "®", "™️", "™", "#️⃣", "#⃣", "*️⃣", "*⃣", "0️⃣", "0⃣", "1️⃣", "1⃣", "2️⃣", "2⃣", "3️⃣", "3⃣", "4️⃣", "4⃣", "5️⃣", "5⃣", "6️⃣", "6⃣", "7️⃣", "7⃣", "8️⃣", "8⃣", "9️⃣", "9⃣", "🔟", "🔠", "🔡", "🔢", "🔣", "🔤", "🅰️", "🅰", "🆎", "🅱️", "🅱", "🆑", "🆒", "🆓", "ℹ️", "ℹ", "🆔", "Ⓜ️", "Ⓜ", "🆕", "🆖", "🅾️", "🅾", "🆗", "🅿️", "🅿", "🆘", "🆙", "🆚", "🈁", "🈂️", "🈂", "🈷️", "🈷", "🈶", "🈯", "🉐", "🈹", "🈚", "🈲", "🉑", "🈸", "🈴", "🈳", "㊗️", "㊗", "㊙️", "㊙", "🈺", "🈵", "🔴", "🟠", "🟡", "🟢", "🔵", "🟣", "🟤", "⚫", "⚪", "🟥", "🟧", "🟨", "🟩", "🟦", "🟪", "🟫", "⬛", "⬜", "◼️", "◼", "◻️", "◻", "◾", "◽", "▪️", "▪", "▫️", "▫", "🔶", "🔷", "🔸", "🔹", "🔺", "🔻", "💠", "🔘", "🔳", "🔲", "🏁", "🚩", "🎌", "🏴", "🏳️", "🏳", "🏳️‍🌈", "🏳‍🌈", "🏳️‍⚧️", "🏳‍⚧️", "🏳️‍⚧", "🏳‍⚧", "🏴‍☠️", "🏴‍☠", "🇦🇨", "🇦🇩", "🇦🇪", "🇦🇫", "🇦🇬", "🇦🇮", "🇦🇱", "🇦🇲", "🇦🇴", "🇦🇶", "🇦🇷", "🇦🇸", "🇦🇹", "🇦🇺", "🇦🇼", "🇦🇽", "🇦🇿", "🇧🇦", "🇧🇧", "🇧🇩", "🇧🇪", "🇧🇫", "🇧🇬", "🇧🇭", "🇧🇮", "🇧🇯", "🇧🇱", "🇧🇲", "🇧🇳", "🇧🇴", "🇧🇶", "🇧🇷", "🇧🇸", "🇧🇹", "🇧🇻", "🇧🇼", "🇧🇾", "🇧🇿", "🇨🇦", "🇨🇨", "🇨🇩", "🇨🇫", "🇨🇬", "🇨🇭", "🇨🇮", "🇨🇰", "🇨🇱", "🇨🇲", "🇨🇳", "🇨🇴", "🇨🇵", "🇨🇷", "🇨🇺", "🇨🇻", "🇨🇼", "🇨🇽", "🇨🇾", "🇨🇿", "🇩🇪", "🇩🇬", "🇩🇯", "🇩🇰", "🇩🇲", "🇩🇴", "🇩🇿", "🇪🇦", "🇪🇨", "🇪🇪", "🇪🇬", "🇪🇭", "🇪🇷", "🇪🇸", "🇪🇹", "🇪🇺", "🇫🇮", "🇫🇯", "🇫🇰", "🇫🇲", "🇫🇴", "🇫🇷", "🇬🇦", "🇬🇧", "🇬🇩", "🇬🇪", "🇬🇫", "🇬🇬", "🇬🇭", "🇬🇮", "🇬🇱", "🇬🇲", "🇬🇳", "🇬🇵", "🇬🇶", "🇬🇷", "🇬🇸", "🇬🇹", "🇬🇺", "🇬🇼", "🇬🇾", "🇭🇰", "🇭🇲", "🇭🇳", "🇭🇷", "🇭🇹", "🇭🇺", "🇮🇨", "🇮🇩", "🇮🇪", "🇮🇱", "🇮🇲", "🇮🇳", "🇮🇴", "🇮🇶", "🇮🇷", "🇮🇸", "🇮🇹", "🇯🇪", "🇯🇲", "🇯🇴", "🇯🇵", "🇰🇪", "🇰🇬", "🇰🇭", "🇰🇮", "🇰🇲", "🇰🇳", "🇰🇵", "🇰🇷", "🇰🇼", "🇰🇾", "🇰🇿", "🇱🇦", "🇱🇧", "🇱🇨", "🇱🇮", "🇱🇰", "🇱🇷", "🇱🇸", "🇱🇹", "🇱🇺", "🇱🇻", "🇱🇾", "🇲🇦", "🇲🇨", "🇲🇩", "🇲🇪", "🇲🇫", "🇲🇬", "🇲🇭", "🇲🇰", "🇲🇱", "🇲🇲", "🇲🇳", "🇲🇴", "🇲🇵", "🇲🇶", "🇲🇷", "🇲🇸", "🇲🇹", "🇲🇺", "🇲🇻", "🇲🇼", "🇲🇽", "🇲🇾", "🇲🇿", "🇳🇦", "🇳🇨", "🇳🇪", "🇳🇫", "🇳🇬", "🇳🇮", "🇳🇱", "🇳🇴", "🇳🇵", "🇳🇷", "🇳🇺", "🇳🇿", "🇴🇲", "🇵🇦", "🇵🇪", "🇵🇫", "🇵🇬", "🇵🇭", "🇵🇰", "🇵🇱", "🇵🇲", "🇵🇳", "🇵🇷", "🇵🇸", "🇵🇹", "🇵🇼", "🇵🇾", "🇶🇦", "🇷🇪", "🇷🇴", "🇷🇸", "🇷🇺", "🇷🇼", "🇸🇦", "🇸🇧", "🇸🇨", "🇸🇩", "🇸🇪", "🇸🇬", "🇸🇭", "🇸🇮", "🇸🇯", "🇸🇰", "🇸🇱", "🇸🇲", "🇸🇳", "🇸🇴", "🇸🇷", "🇸🇸", "🇸🇹", "🇸🇻", "🇸🇽", "🇸🇾", "🇸🇿", "🇹🇦", "🇹🇨", "🇹🇩", "🇹🇫", "🇹🇬", "🇹🇭", "🇹🇯", "🇹🇰", "🇹🇱", "🇹🇲", "🇹🇳", "🇹🇴", "🇹🇷", "🇹🇹", "🇹🇻", "🇹🇼", "🇹🇿", "🇺🇦", "🇺🇬", "🇺🇲", "🇺🇳", "🇺🇸", "🇺🇾", "🇺🇿", "🇻🇦", "🇻🇨", "🇻🇪", "🇻🇬", "🇻🇮", "🇻🇳", "🇻🇺", "🇼🇫", "🇼🇸", "🇽🇰", "🇾🇪", "🇾🇹", "🇿🇦", "🇿🇲", "🇿🇼", "🏴󠁧󠁢󠁥󠁮󠁧󠁿", "🏴󠁧󠁢󠁳󠁣󠁴󠁿", "🏴󠁧󠁢󠁷󠁬󠁳󠁿"];
const source = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var encoding = base2base(source, emoji);
var focused = false;
var auto = true;
var active_origin;
var bookmark;
var charset;

start();
async function start() {
    bookmark = await getData("bookmark");
    if (bookmark === undefined) {
        initBookmark();
    }
    chrome.tabs.onUpdated.addListener(onChange);
    chrome.tabs.onActivated.addListener(checkOrigin);
    chrome.windows.onFocusChanged.addListener(onfocusChanged);
    chrome.bookmarks.onChanged.addListener(onBookmarkChange);
    chrome.bookmarks.onRemoved.addListener(onBookmarkRemove);
}

function onfocusChanged(windowId) {
    if (windowId !== chrome.windows.WINDOW_ID_NONE) focused = windowId;
    checkOrigin();
}

async function initBookmark() {
    bookmark = undefined;
    await removeData("bookmark");
    bookmark = await onPlaceholder();
    await setData("bookmark", bookmark);
    onUnknown();
    checkOrigin();
}

function onPlaceholder() {
    return new Promise(resolve => {
        chrome.bookmarks.onCreated.addListener((id, e) => {
            if (e.title === placeholder) resolve(id);
        });
    });
}

function onUnknown() {
    chrome.bookmarks.update(bookmark, {
        title: unknown
    });
    active_origin = undefined;
}

async function changeOrigin(url) {
    try {
        var active = new URL(url).origin;
    } catch {
        return onUnknown();
    }
    if (active_origin === active) return
    active_origin = active;

    var marker = await getData("_" + active_origin);
    if (auto === true && marker === undefined) {
        marker = await encodeOrigin();
    } else {
        marker = unknown;
    }
    chrome.bookmarks.update(bookmark, {
        title: marker
    });
}

function onChange(tabId, changeInfo, tab) {
    if (changeInfo.url === undefined || bookmark === undefined) return
    if (focused !== tab.windowId) return
    if (tab.active) changeOrigin(tab.url);
}

function checkOrigin() {
    if (bookmark === undefined) return
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, tab => {
        if (tab.length !== 1) return onUnknown();
        if (tab[0].active === false) return
        focused = tab[0].windowId;
        changeOrigin(tab[0].url);
    });
}

async function onBookmarkChange(id, e) {
    if (id !== bookmark || active_origin === undefined) return
    if (e.title === unknown) {
        await removeData("_" + active_origin);
    } else {
        await setData("_" + active_origin, e.title);
    }
}

function onBookmarkRemove(id) {
    if (id === bookmark) {
        initBookmark();
    }
}

function setData(key, value) {
    return new Promise(resolve => {
        chrome.storage.sync.set({
            [key]: value
        }, function(result) {
            resolve(result);
        });
    });
}

function getData(key) {
    return new Promise(resolve => {
        chrome.storage.sync.get(key, function(result) {
            resolve(result[key]);
        });
    });
}

function removeData(key) {
    return new Promise(resolve => {
        chrome.storage.sync.remove(key, function(result) {
            resolve(result);
        });
    });
}

async function encodeOrigin() {
    let hash = await sha256(active_origin);
    return encoding(hash.substr(0, 9));
}

async function sha256(data) {
    const msgUint8 = new TextEncoder().encode(data);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
}

function base2base(srcAlphabet, dstAlphabet) {
    /* Code from github.com/jnvm/zany */
    /* modification of github.com/HarasimowiczKamil/any-base to:
     * support multibyte
     * enforce unique alphabets
     */
    var noDifference = srcAlphabet === dstAlphabet,
        srcAlphabet = Array.from(new Set((srcAlphabet))),
        dstAlphabet = Array.from(new Set((dstAlphabet))),
        fromBase = srcAlphabet.length,
        toBase = dstAlphabet.length

    return number => {
        if (noDifference) return number

        number = (number + '').match(/./gu)

        var i, divide, newlen, length = number.length,
            result = '',
            numberMap = {}

        for (i = 0; i < length; i++)
            numberMap[i] = srcAlphabet.indexOf(number[i])

        do {
            divide = 0
            newlen = 0
            for (i = 0; i < length; i++) {
                divide = divide * fromBase + numberMap[i]
                if (divide >= toBase) {
                    numberMap[newlen++] = parseInt(divide / toBase, 10)
                    divide = divide % toBase
                } else if (newlen)
                    numberMap[newlen++] = 0
            }
            length = newlen
            result = dstAlphabet[divide] + result
        } while (newlen != 0)

        return result
    }
}
