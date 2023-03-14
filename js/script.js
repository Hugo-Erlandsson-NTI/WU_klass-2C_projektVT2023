// ska bara funka när sidan är i desktopläge, då ska grid ändras också, inte helt säker på hur layouten i header blir bra då

// vid scroll toggla main_heading_invisible på main_heading_short och main_heading_full, och på något sätt ska det hänga ihop med @media-saker


const main_heading_short = document.getElementById('main_heading_short')
const main_heading_full = document.getElementById('main_heading_full')

function toggleMenuFull() {
    // if-sats som bara kör om full har invisible
        main_heading_full.class.toggle('main_heading_invisible') //classList?
        main_heading_short.class.toggle('main_heading_invisible') //classList? 
}
 
function toggleMenuShort() {
    // if-sats som bara kör om short har invisible på, behöver inte kolla båda för togglar alltid båda samtidigt
        main_heading_full.class.toggle('main_heading_invisible') //classList?
        main_heading_short.class.toggle('main_heading_invisible') //classList? 
}

.addEventListener('', toggleMenuFull)  // på hela sidan, scrollup
.addEventListener('', toggleMenuShort)  // scrolldown
// finns inget inbyggt sätt att se scrollriktning, blir jättekomplicerat och dumt
// https://developer.mozilla.org/en-US/docs/Web/API/Document/scroll_event

// ooptimiserat att checka varje scrollsteg? problem för komplettering

// vid scroll up toggla på båda om det är invisible på full, vid scroll ner toggla båda om invidible på short, gör inget om det redan är rätt