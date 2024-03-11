/*

// if you use jQuery, you need to start your .js file with this.
// otherwise you can delete everything here.
$(document).ready(function() {

// functions go here
const projectCategories = document.querySelectorAll( '.PROJECTS ul a' );
const projectLinks = document.querySelectorAll( '.column1 .item' );

const filterProjects = event => {
    const categoryButton = event.currentTarget;
    let categoryName = categoryButton.dataset.type;

    projectCategories.forEach( categoryLink => {
        if ( categoryLink != categoryButton ) {
            categoryLink.classList.remove( 'active' );
        } else { 
            categoryLink.classList.toggle( 'active' );

            if ( !categoryLink.classList.contains( 'active' ) )
                categoryName = -1;
        }
    } );

// LOOP DOOR ALLE PROJECTEN
// EN VERGELIJK DE CATEGORYNAME MET HET TYPE IN DATA-TYPE VAN IEDER PROJECT
//    alert( categoryName );
    projectLinks.forEach( projectLink => {
        if ( categoryName == -1 || projectLink.dataset[ 'type' ] == categoryName ) {
            projectLink.classList.remove( 'hidden' );
        } else {
            projectLink.classList.add( 'hidden' );
        }
    } );
}

projectCategories.forEach( categoryLink => {
    categoryLink.addEventListener( 'click', filterProjects );
} );

});

*/


const nav_links = document.querySelectorAll( '.column1 ul a' );
const chapter_headings = document.querySelectorAll( '.column2 h2' );

const highLightNavigation = ( ) => {
    const scrollTop = window.pageYOffset + 32;

    let current_chapter_index = -1;
    chapter_headings.forEach( ( heading, index ) => {
        if ( scrollTop >= heading.offsetTop )
            current_chapter_index = index;
    } );

    console.log( current_chapter_index );

    nav_links.forEach( ( link, index ) => {
        const is_active = ( index == current_chapter_index );
        
        link.classList.toggle( 'active', is_active );
    } );
}

document.addEventListener( 'scroll', highLightNavigation );
console.log( nav_links );


/*

document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
      var currentChapter = getCurrentChapter();
      document.body.style.backgroundColor = currentChapter.backgroundColor;
    });
  
    function getCurrentChapter() {
      var chapters = document.querySelectorAll('.chapter');
      var currentScroll = window.scrollY;
  
      for (var i = 0; i < chapters.length; i++) {
        var chapter = chapters[i];
        var chapterTop = chapter.offsetTop;
        var chapterBottom = chapterTop + chapter.offsetHeight;
  
        if (currentScroll >= chapterTop && currentScroll < chapterBottom) {
          return {
            element: chapter,
            backgroundColor: window.getComputedStyle(chapter).backgroundColor
          };
        }
      }
    }
  });


*/

