https://www.amadousall.com/the-good-parts-of-bootstrap-4-you-are-missing-in-your-angular-material-projects/

The Best Parts of Bootstrap 4 You Are Missing in Angular Material
The Best Parts of Bootstrap 4 You Are Missing in Angular Material
Bootstrap is one of the most popular frameworks for building responsive, and mobile-first websites. It has been powering websites since August 2011. On January 18, 2018, the first stable v4 version of Bootstrap has been released. It introduced many features and architectural changes:

The CSS Flexbox module is now the default in Bootstrap. It is used for most of the components, and for the grid system for instance.
The codebase has been migrated from Less to Sass.
A brand new CSS reset has been introduced, Bootstrap Reboot.
On the other side, Angular Material is a set of high-quality UI components that implements Google's Material Design. It is built with, and for Angular. The library is great, and keeps getting better with time. But, in my humble opinion, it lacks some important features like a decent layout (grid) system, a CSS reset, and some CSS utilities that ease our life as developers.

In my attempt to fill those gaps, I asked myself a question: "why not use some of the best parts of Bootstrap 4 in my Angular Material Projects?" And I did.

In this article, we will see what parts of Bootstrap 4 are worth adding to our Angular Material projects, and how. Without further ado, let's get started!

Table of contents
Bootstrap Reboot
Bootstrap Grid
Bootstrap Utilities
Bootstrap Reboot
In Bootstrap 3, Normalize.css was used as CSS reset.

Normalize.css makes browsers render all elements more consistently and in line with modern standards. It precisely targets only the styles that need normalizing.

With v4, the Bootstrap team has forked Normalize.css, and made it better: this is called Bootstrap Reboot.

Reboot, a collection of element-specific CSS changes in a single file, kickstart Bootstrap to provide an elegant, consistent, and simple baseline to build upon.

I won't go over the details of what's included in Bootstrap Reboot. But here are some of the improvements it brought :

the use of box-sizing: border-box for all elements,
the use of rems instead of ems for some browser defaults,
the removal of elements' margin-top to prevent collapsing margins,
You can find more information about Reboot on the Bootstrap documentation.

Because Bootsrap 4 is modular, and built with Sass; we can add Reboot very easily to our Angular Material project without adding the whole Bootstrap library.

But first, let's add Bootstrap to our dependencies.

npm install bootstrap --save
Then, we import the Reboot Sass file in our global stylesheet (src/styles.scss if you're using the Angular CLI. And I hope you do).

// Imports functions, variables, and mixins that are needed by other Bootstrap files
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/mixins";
// Import Bootstrap Reboot
@import "~bootstrap/scss/reboot";
Before/After

On the left, our example before adding Reboot; and on the right, after adding Reboot. As you can see, Reboot has removed the margins on the <html> element, which is great... Unfortunately it has introduced some styles that we do not want:

an outline when focus is set on buttons,
blue colored, and underlined button-links on hover,
blue links (blue is the primary color in Bootstrap)
To fix these issues, we create two Sass partials that we import in styles.scss:

src/\_variables.scss: we import it before any Bootstrap import.
src/\_reset.scss: we import it after all our Bootsrap imports
...
@import "variables";
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/mixins";
@import "~bootstrap/scss/reboot";
@import "reset";
...
\_variables.scss
The \_variables.scss Sass partial allows us to customize Bootstrap - more precisely, the parts of Bootstrap that we will be using. That's why we added it before any Bootstrap import. This makes Bootstrap use our values instead of its default values. Those defaults are defined in ~bootstrap/scss/variables . For instance, \$link-color: theme-color("primary") !default;.

Here is the content of the \_variables.scss partial:

$link-color: #3f51b5;
$link-hover-color: currentColor;
$link-hover-decoration: none;
$label-margin-bottom: 0;
We set our links color to our primary color (#3f51b5) (we could have used our secondary color, if we wanted) as per the Material Design specification. We also set text-decoration: none; for hovered links.

We set the \$label-margin-bottom to 0 to remove the margin-bottom from the <label> HTML element.

\_reset.scss
The \_reset.scss Sass partial allows us to override some of the Bootstrap styles we don't want. That's why we added it after all Bootstrap imports.

- {
  &:active,
  :focus {
  outline: none !important; // 1
  }
  }

a:not(.mat-button):not(.mat-raised-button):not(.mat-fab):not(.mat-mini-fab):not([mat-list-item]) {
color: #3f51b5; // 2
}
Remove the blue outline on links, and buttons when they are active; or the focus is set on them.
Use our primary color for all links that are not Angular Material elements. Those have one of the following classes: .mat-button, mat-raised-button, mat-fab-button, mat-list-item, etc.
Bootstrap Grid
Bootstrap’s grid system uses a series of containers, rows, and columns to layout and align content. It’s built with flexbox and is fully responsive.

Adding the Bootstrap grid system to our Angular Material application is a simple as adding a Sass import in our styles.scss file.

....
@import "variables";
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/mixins";
@import "~bootstrap/scss/reboot";
@import "~bootstrap/scss/grid"; // add the grid
@import "reset";
...
Now we can use the grid in our components:

<div class="container">
  <div class="row">
    <div class="col">
      One of three columns
    </div>
    <div class="col">
      One of three columns
    </div>
    <div class="col">
      One of three columns
    </div>
  </div>
</div>
Using the Bootstrap Grid System

The Boostrap grid is fully responsive. For example, if we want a column to take 4 units on large device, 8 units on medium, and 12 units or small devices, we add the following three classes to it:

.col-lg-4
.col-md-8
.col-sm-12
It is also fully customizable. We can change:

the number of grid tiers (\$grid-breakpoints),

the number of columns (\$grid-columns, default to 12),

the column gutter width (\$grid-gutter-width, default to 30px).

For instance, to use Material Design breakpoints, you can add this piece of code to \_variables.scss:

\$grid-breakpoints: (
xs: 0, // handset portrait (small, medium, large) | handset landscape (small)
sm: 600px, // handset landscape (medium, large) | tablet portrait(small, large)
md: 960px, // tablet landscape (small, large)
lg: 1280px, // laptops and desktops
xl: 1600px // large desktops
);

\$container-max-widths: (
sm: 600px,
md: 960px,
lg: 1280px,
xl: 1600px
);
If you want to know more about the Bootstrap grid system, check the documentation.

Bootstrap utilities
A utility class is typically a single, immutable property-value pairing expressed as a class (e.g., .d-block represents display: block;). Their primary appeal is speed of use while writing HTML and limiting the amount of custom CSS you have to write.

Bootstrap includes hundreds of CSS utility classes for dealing with spacing, positionning, sizing, alignment, font weight, flex containers, flex items, etc. The documentation is really neat, and covers all the great stuffs you can do. In this article I will just show you a gist of it.

Spacing utilities
To assign margin/padding to an element, we add a class respecting the following format:

{property}{sides}-{size} for xs, and {property}{sides}-{breakpoint}-{size} for sm, md, lg, and xl.

property is one of:

m - for classes that set margin,
p - for classes that set padding.
sides is one of:

t - top,
b - bottom,
l - left,
r - right,
x - left, and right,
y - top, and bottom,
blank - top, right, bottom, and left.
size is one of:

0 - $spacer * 0
1 - $spacer _ .25
2 - \$spacer _ .5
3 - $spacer * 1
4 - $spacer _ 1.5
5 - \$spacer _ 3
auto - auto
The default value of \$spacer is 1rem i.e. 16px in most browsers default settings. As you may have guessed, this can be customized to fit your need by setting the desired value in \_variables.scss.

Flexblox utilities
Bootstrap Flexbox utilities are a set of classes that help us change the properties of flex containers, and flex items.

display: to make an element a flex container
.d-flex to set display: flex;.
.d-inline-flex to set display: inline-flex;.
flex-direction: to specify the direction of the main axis
.flex-row to set flex-direction: row;.
.flex-row-reverse to set flex-direction: row-reverse;.
.flex-column to set flex-direction: column;.
.flex-column-reverse to set flex-direction: column-reverse;.
flex-wrap: to specify whether flex items will wrap or not to a new line.
flex-wrap to set flex-wrap: wrap;.
flex-nowrap to set flex-wrap: nowrap;.
justify-content: to control how items are positioned along the main axis.
.justify-content-start to set justify-content: flex-start;.
.justify-content-end to set justify-content: flex-end;.
.justify-content-center to set justify-content: center;.
.justify-content-space-between to set justify-content: space-between;.
.justify-content-space-around to set justify-content: space-around;.
align-items: to control how items are positioned along the cross axis.
.align-items-start to set align-items: flex-start;.
.align-items-end to set align-items: flex-end;.
.align-items-center to set align-items: center;.
.align-items-baseline to set align-items: baseline;.
.align-items-stretch to set align-items: stretch;.
etc.
All these classes have their responsive variations. For example:

.d-sm-flex.
.justify-content-lg-center.
.align-items-lg-baseline.
etc.
To be able to use these Bootstrap utilities, we must add the corresponding import to you main Sass file.

....
@import "variables";
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/mixins";
@import "~bootstrap/scss/reboot";
@import "~bootstrap/scss/grid";
@import "~bootstrap/scss/utilities"; // add css utilities
@import "reset";
...
Summary
Angular Material is a great UI component library. But it lacks some important features like a layout system, a CSS reset, and some CSS utilities. Fortunately we can very easily "steal" those features from Bootstrap 4; a modular, and well-designed front end library. This can be a very good starting point for building high-quality Angular applications.

If you enjoyed this article, follow @ahasall on Twitter for more content like this.
