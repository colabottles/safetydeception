---
# try also 'default' to start simple
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://res.cloudinary.com/colabottles/image/upload/v1759002500/magnolia2025/faceman.jpg
# some information about your slides (markdown enabled)
title: Safety & Deception
info: |
  ## Slidev Starter Template
  The Impact on Accessibility.

  Learn more at [Sli.dev](https://sli.dev)
# apply UnoCSS classes to the current slide
class: text-center
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
---

# Safety & Deception

## The Impact on Accessibility

<!-- <div @click="$slidev.nav.next" class="mt-12 py-1" hover:bg="white op-10">
  Press Space for next page <carbon:arrow-right />
</div> -->

<div class="abs-br m-6 text-xl">
  <a href="https://github.com/colabottles" target="_blank" class="slidev-icon-btn">
    <carbon:logo-github />
  </a>
  <a href="https://bsky.app/profile/toddl.dev" target="_blank" class="slidev-icon-btn">
    <logos:bluesky />
  </a>
  <a href="https://twitch.tv/toddcodes" target="_blank" class="slidev-icon-btn">
    <logos:twitch />
  </a>
  <a href="www.linkedin.com/in/toddlibby" target="_blank" class="slidev-icon-btn">
    <logos:linkedin-icon />
  </a>
</div>

<style>
  h2 {
    color: #f5ea51ff;
  }
</style>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---
transition: fade-out
---

## Housekeeping

### Before we jump in... thank you to the following:

<style>
h2 {
  background-color: #b66a2bff;
  background-image: linear-gradient(45deg, #d48f4eff 10%, #8c4014ff 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  line-height: 2;
}
</style>

---
transition: fade-out
layout: image
image: https://res.cloudinary.com/colabottles/image/upload/v1759008543/magnolia2025/magnoliaconf.jpg
backgroundSize: cover
---

<br>

<!--
You can have `style` tag in markdown to override the style for the current page.
Learn more: https://sli.dev/features/slide-scope-style
-->

---
transition: fade-out
layout: image
image: https://res.cloudinary.com/colabottles/image/upload/v1759012519/magnolia2025/magnoliaconf2.jpg
backgroundSize: cover
---

<br>

---
transition: slide-up
level: 2
class: my-cool-content-on-the-right
---

## Who Is This Guy?

<img class="todd-headshot" src="https://res.cloudinary.com/colabottles/image/upload/v1759080925/magnolia2025/todd.jpg" alt="Todd">

<ul>
  <li>Founder - RouteReady</li>
  <li>W3C Invited Expert, WCAG</li>
  <li>Accessibility Guidelines Working Group</li>
  <li>Accessibility Conformance Testing Task Force and Rules Group</li>
</ul>

<style>
img.todd-headshot {
  height: 29vh;
  width: 15vw;
  aspect-ratio: 2 / 1;
  border: 10px solid #b66a2bff;
  float: left;
}
ul {
  float: right;
}
ul li::marker {
  content: "🦞 ";
}
</style>

---
transition: fade-out
layout: image
image: https://res.cloudinary.com/colabottles/image/upload/v1759081761/magnolia2025/nerando.jpg
backgroundSize: cover
---

<br>

---
transition: fade-out
layout: image
image: https://res.cloudinary.com/colabottles/image/upload/v1759082681/magnolia2025/w3c.jpg
backgroundSize: cover
---

<br>

---
layout: image-right
image: https://res.cloudinary.com/colabottles/image/upload/v1759086003/magnolia2025/wharf.jpg
---

## Web Content Accessibility Guidelines

Many aspects of W3C Accessibility Guidelines (WCAG) 3 are in an exploratory or developing phase and will change substantially.

```ts [filename-example.ts] {all|5|6-7|10|9|all} twoslash
// WCAG 3, similar a11y requirements as 2.x,
// WCAG 3 will have a different structure,
// WCAG 3 will have a different conformance model,
// WCAG 3 will have a broader scope.
type Guideline = {
  version: number; // 3.0
  year: number; // 2029-2030 est.

  // Still exploratory and in Editor's Draft
  recommendation: Recommendation[];
};
```

<arrow v-click="[4, 5]" x1="350" y1="310" x2="195" y2="402" color="rgba(180, 129, 18, 1)" width="2" arrowSize="1" />

<!-- Inline style -->
<style>
.footnotes-sep {
  @apply mt-5 opacity-10;
}
.footnotes {
  @apply text-sm opacity-75;
}
.footnote-backref {
  display: none;
}
</style>

---
transition: fade-out
---

## Anti-pattern v. Deceptive pattern

<p>In the Functional Needs subgroup, we came up with two terms for these patterns:</p>

<v-click>

### Anti-pattern

An unintentional <span v-mark.red="1">(without intent)</span> design or implementation that often leads to a general decline in usability.

</v-click>

<br>

<v-click>

### Deceptive pattern

A <span v-mark.circle.orange="2">deliberate</span> anti-pattern designed to confuse or deceive a user, used to aim or <span v-mark.green="3">force</span> a user down a particular path or to <span v-mark.circle.blue="4">trap</span> attention in a way that redirects or focuses on a goal that the user either doesn't want or need, or be harmful to them.

</v-click>

<style>
  h2 {
    color: rgba(180, 129, 18, 1);
  }
</style>

---
transition: fade-out
---

## Safety & Deception subgroup outcomes

<ul>
  <li>Information Privacy</li>
  <li>Algorithm Accessibility</li>
  <li>Clear Agreement & Risk Statements</li>
  <li>Obstruction</li>
  <li>Avoid Deception</li>
</ul>

<style>
  ul {
    margin: 0 2em;
  }

  ul li::marker {
    content: "🦞 ";
  }
</style>

---
transition: slide-up
---

## Guidelines

<ul>
  <li>Foundational Requirements</li>
  <li>Supplemental Requirements</li>
  <li>Assertions</li>
  <li>Best Practices</li>
</ul>

<style>
  ul {
    margin: 0 2em;
  }

  ul li::marker {
    content: "🦞 ";
  }
</style>

---
transition: fade-out
layout: image
image: https://res.cloudinary.com/colabottles/image/upload/v1759093258/magnolia2025/darkroad.jpg
backgroundSize: cover
---

<div v-click="[1, 2]" v-motion
  :initial="{ x: -50 }"
  :enter="{ x: 0 }"
  :leave="{ x: 50 }"
>
  <h2>Dark Patterns</h2>
</div>

<br>

<div v-click="[2, 3]" v-motion
  :initial="{ x: -80 }"
  :enter="{ x: 0 }"
  :leave="{ x: 80 }"
>
  <h2>Deceptive Patterns</h2>
</div>

---
transition: fade-out
---

<h2>It gets worse...</h2>

<div v-click="[1, 2]" v-motion
  :initial="{ x: -80 }"
  :enter="{ x: 0 }"
  :leave="{ x: 80 }"
>
  <img class="evilliveshere" src="https://res.cloudinary.com/colabottles/image/upload/v1759095302/magnolia2025/trump1.jpg" alt="Trump Deceptive Pattern 1">
</div>

<style>
.evilliveshere {
  margin: -4.25rem auto;
  max-width: 25%;
  max-height: 25%;
}
</style>

---
transition: slide-down
---

<h2>Really worse...</h2>

<div v-click="[1, 2]" v-motion
  :initial="{ x: -80 }"
  :enter="{ x: 0 }"
  :leave="{ x: 80 }"
>
  <img class="evilliveshere" src="https://res.cloudinary.com/colabottles/image/upload/v1759095306/magnolia2025/trump2.jpg" alt="Trump Deceptive Pattern 2">
</div>

<style>
.evilliveshere {
  margin: 2rem auto;
  max-width: 25%;
  max-height: 25%;
}
</style>

---
transition: slide-down
---

<h2>Much, much worse...</h2>

<br>
<br>

<div v-click="[1, 2]" v-motion
  :initial="{ x: -80 }"
  :enter="{ x: 0 }"
  :leave="{ x: 80 }"
>
  <img class="evilliveshere" src="https://res.cloudinary.com/colabottles/image/upload/v1759095305/magnolia2025/trump3.jpg" alt="Trump Deceptive Pattern 3">
</div>

<style>
.evilliveshere {
  margin: 0 auto;
  max-height: 75%;
  max-width: 75%;
}
</style>

---
transition: slide-down
---

<h2>Like, horribly worse...</h2>

<div v-click="[1, 2]" v-motion
  :initial="{ x: -80 }"
  :enter="{ x: 0 }"
  :leave="{ x: 80 }"
>
  <img class="evilliveshere" src="https://res.cloudinary.com/colabottles/image/upload/v1759095281/magnolia2025/oz.webp" alt="Oz Deceptive Pattern">
</div>

<style>
.evilliveshere {
  margin: 0 auto;
  max-width: 30%;
  max-height: 30%;
}
</style>

---
transition: slide-down
---

<h2>The <strong>Worst</strong></h2>

<img class="votingcard" src="https://res.cloudinary.com/colabottles/image/upload/v1759094071/magnolia2025/reichvotecard.jpg" alt="1938 Reichstag voting card for Adolf Hitler">

<style>
  img.votingcard {
    margin: 3% auto;
  }

  strong {
    color: #d6ec58ff;
    text-transform: uppercase;
  }
</style>

---
transition: face-out
---

## Types of Deceptive Patterns

<ul>
  <li>Comparison Prevention</li>
  <li>Confirmshaming</li>
  <li>Disguised Ads</li>
  <li>Fake Scarcity, Fake Social Proof, Fake Urgency</li>
  <li>Forced Action</li>
  <li>Hard to Cancel</li>
  <li>Hidden Costs/Subscriptions</li>
  <li>Nagging</li>
  <li>Obstruction</li>
  <li>Preselection</li>
  <li>Sneaking</li>
  <li>Trick wording</li>
  <li>Visual Interference</li>
</ul>

<style>
  ul {
    margin: 0 2em;
  }

  ul li::marker {
    content: "🦞 ";
  }
</style>

---
transition: fade-out
layout: image
image: https://res.cloudinary.com/colabottles/image/upload/v1759102743/magnolia2025/labyrinth.jpg
backgroundSize: cover
---

<br>

---
transition: slide-right
layout: image
image: https://res.cloudinary.com/colabottles/image/upload/v1759330170/magnolia2025/heroes.jpg
backgroundSize: cover
---

<br>

---
transition: fade-out
layout: image
image: https://res.cloudinary.com/colabottles/image/upload/v1759330170/magnolia2025/tiamat.jpg
backgroundSize: cover
---

<br>

---
transition: fade-out
layout: image
image: https://res.cloudinary.com/colabottles/image/upload/v1759331625/magnolia2025/venger.jpg
backgroundSize: cover
---

<br>

---
transition: slide-down
layout: image-left
image: https://res.cloudinary.com/colabottles/image/upload/v1759332681/magnolia2025/tiamat-black.png
class: content-right
---

### Comparison Prevention

<ul>
  <li>Cognitive & emotional burden</li>
  <li>Visual & navigation barriers</li>
  <li>Challenges for specific disability groups</li>
  <li>Broader societal impact</li>
</ul>

<style>
  ul {
    margin: 2em .5em;
  }

  ul li::marker {
    content: "⚔️ ";
  }
</style>

---
transition: slide-right
---

<img src="https://res.cloudinary.com/colabottles/image/upload/v1759334673/magnolia2025/t-mobile1.jpg" alt="T-Mobile's deceptive pattern of comparison prevention main screen showing all the highest priced tiers">

---
transition: slide-right
---

<img src="https://res.cloudinary.com/colabottles/image/upload/v1759334674/magnolia2025/t-mobile2.jpg" alt="t-Mobile's deceptive pattern of comparison prevention the lowest tiered plan three clicks deep">

---
transition: slide-down
layout: image-right
image: https://res.cloudinary.com/colabottles/image/upload/v1759332680/magnolia2025/tiamat-white.png
class: content-left
---

### Confirmshaming

<ul>
  <li>Cognitive & psychological impact</li>
  <li>Visual & navigation barriers</li>
  <li>Challenges for specific disability groups</li>
</ul>

<style>
  ul {
    margin: 2em .5em;
  }

  ul li::marker {
    content: "🗡️ ";
  }
</style>

---
transition: slide-right
---

<img src="https://res.cloudinary.com/colabottles/image/upload/v1759336191/magnolia2025/confirmshaming.jpg" alt="a bunch of unsubscribe shaming emails sent by various companies to guilt people into staying subscribed or re-subscribe">

---
transition: slide-down
layout: image-left
image: https://res.cloudinary.com/colabottles/image/upload/v1759332680/magnolia2025/tiamat-red.png
class: content-right
---

### Disguised Ads

<ul>
  <li>Confusion for screen reader users</li>
  <li>Cognitive & visual overload</li>
  <li>Challenges for users with motor skill impairments</li>
  <li>Broader impacts</li>
</ul>

<style>
  ul {
    margin: 2em .5em;
  }

  ul li::marker {
    content: "🎵 ";
  }
</style>

---
transition: slide-right
---

<img src="https://res.cloudinary.com/colabottles/image/upload/v1759336188/magnolia2025/disguisedads.jpg" alt="a couple of websites with components that are desined to look like part of the page but are disguised ads">

---
transition: slide-right
---

<img src="https://res.cloudinary.com/colabottles/image/upload/v1759336184/magnolia2025/disguisedads2.jpg" alt="an example of a disguised ad that pressures people to resubscribe and has a lot of fine print">

---
transition: slide-down
layout: image-right
image: https://res.cloudinary.com/colabottles/image/upload/v1759332679/magnolia2025/tiamat-blue.png
class: content-left
---

### Fake Scarcity, Urgency, & Societal Proof

<ul>
  <li>Increased cognitive load & impact</li>
  <li>Difficulty with timed actions</li>
  <li>Hindrance to assistive tech</li>
  <li>Forced errors</li>
  <li>Manipulated decision-making</li>
  <li>Unreliable information</li>
  <li>Exacerbated by other patterns</li>
  <li>Ethical & accessibility considerations</li>
</ul>

<style>
  ul {
    margin: 2em .5em;
  }

  ul li::marker {
    content: "🛡️ ";
  }
</style>

---
transition: slide-right
---

<img src="https://res.cloudinary.com/colabottles/image/upload/v1759336187/magnolia2025/fakes.jpg" alt="screenshots of fake timers and reviews along with a woman that has no makeup on comparing her with makeup on looking like an entirely different person">

---
transition: slide-down
layout: image-left
image: https://res.cloudinary.com/colabottles/image/upload/v1759332679/magnolia2025/tiamat-green.png
class: content-right
---

### Forced Action

<ul>
  <li>Cognitive & psychological barriers</li>
  <li>Barriers to assistive tech users</li>
  <li>Challenges to people with motor impairments</li>
  <li>Erosion of trust</li>
</ul>

<style>
  ul {
    margin: 2em .5em;
  }

  ul li::marker {
    content: "🏹 ";
  }
</style>

---
transition: slide-right
layout: image-right
image: https://res.cloudinary.com/colabottles/image/upload/v1759337257/magnolia2025/forcedaction.jpg
class: content-right
---

<br>

---
transition: slide-left
layout: image-right
image: https://res.cloudinary.com/colabottles/image/upload/v1759337257/magnolia2025/forcedaction.jpg
class: content-right
---

<img src="https://res.cloudinary.com/colabottles/image/upload/v1759337914/magnolia2025/areyousure.gif" alt="are you sure about that gif">

---
transition: fade-out
layout: image
image: https://res.cloudinary.com/colabottles/image/upload/v1759331625/magnolia2025/venger.jpg
backgroundSize: cover
---

<br>

---
transition: slide-down
layout: image-right
image: https://res.cloudinary.com/colabottles/image/upload/v1759338872/magnolia2025/infinitescroll.gif
class: content-left
---

### Infinite Scrolling

<ul>
  <li>Navigation & orientation difficulties</li>
  <li>Cognitive & physical strain</li>
  <li>Assistive technology compatibility issues</li>
  <li>Not a WCAG failure</li>
    <ul>
      <li>3.2.5: Change on Request</li>
      <li>2.2.2: Pause, Stop, Hide</li>
    </ul>
  <li>Loss of position, no clear endpoint</li>
  <li>Keyboard trap creation</li>
  <li>Interrupts reading flow for AT/SR users</li>
</ul>

<style>
  ul {
    margin: 2em .5em;
  }

  ul ul {
    margin: 0 0 0 2em;
  }

  ul li::marker {
    content: "🤮 ";
  }

  ul ul li::marker {
    content: "🤢 ";
  }
</style>

<br>

---
transition: slide-down
layout: image-right
image: https://res.cloudinary.com/colabottles/image/upload/v1759339628/magnolia2025/raskin.jpg
class: content-left
---

### Aza Raskin

<ul>
  <li>Inventor of infinite scrolling and arch-nemesis</li>
  <li>Co-founder of The Center for Humane Technology</li>
  <li>Father, Jef. Human-computer interface (HCI) expert known for Macintosh project at Apple</li>
  <li>Head of UX at Mozilla Labs</li>
  <li>Lead Designer, Firefox</li>
  <li>Bringer of Doom, Eater of UIs, Evil UX Overlord</li>
</ul>

<style>
  ul {
    margin: 2em .5em;
  }

  ul li::marker {
    content: "🤬 ";
  }
</style>

---
transition: slide-left
---

> I regret that I didn't think more about how this thing would be used, I know as a designer that by taking away the stopping cue, I can make you do what I want you to do... I contributed to this and I have been complicit... ...we are losing control of the tools we made.

<style>
blockquote {
    font-size: 1.6rem;
      p {
        --uno: text-teal-500 dark:text-teal-400;
        margin: 1em 0;
      }
}
</style>

<br>

---
transition: fade-out
layout: image
image: https://res.cloudinary.com/colabottles/image/upload/v1759336184/magnolia2025/betterchoices.jpg
backgroundSize: cover
---

<br>

---
transition: slide-left
layout: image
image: https://res.cloudinary.com/colabottles/image/upload/v1759361784/magnolia2025/Tiamat-defeated.jpg
backgroundSize: cover
---

<br>

---
transition: slide-down
layout: image-left
image: https://res.cloudinary.com/colabottles/image/upload/v1759362037/magnolia2025/heroes-leave.jpg
class: content-right
---

### Multiple Patterns

<ul>
  <li>Fake scarcity & urgency</li>
    <ul>
      <li>"5 rooms left at this low rate! You only have 3 hours remaining until these deals are gone!"</li>
      <li>FOMO</li>
    </ul>
  <li>Misdirection and confirmshaming</li>
    <ul>
      <li>"No, I don't want to save money. I'll pay full price!"</li>
      <li>"Click here to save money AND don't forget to upgrade!"</li>
    </ul>
  <li>Hidden costs & disguised ads</li>
    <ul>
      <li>Drip pricing, added fees (fulfillment fee, service fee, etc.), drop items in cart</li>
    </ul>
  <li>Forced action & hard to cancel</li>
    <ul>
      <li>"Sign up for a 30-day trial." while links to unsubscribe are difficult to find or non-existent.</li>
    </ul>
</ul>

<style>
  ul {
    margin: 2em .5em;
  }

  ul ul {
    margin: 0 0 0 2em;
  }

  ul li::marker {
    content: "❌ ";
  }

  ul ul li::marker {
    content: "👎🏽 ";
  }
</style>

---
transition: slide-left
layout: image
image: https://res.cloudinary.com/colabottles/image/upload/v1759459307/magnolia2025/deceptivepatterns1.jpg
backgroundSize: cover
---

<br>

---
transition: slide-left
layout: image
image: https://res.cloudinary.com/colabottles/image/upload/v1759459306/magnolia2025/deceptivepatterns2.jpg
backgroundSize: cover
---

<br>

---
transition: slide-down
layout: image
image: https://res.cloudinary.com/colabottles/image/upload/v1759459745/magnolia2025/final.jpg
backgroundSize: cover
---

<br>
