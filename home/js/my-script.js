$(document).ready(function($) {
    var engine1 = new Bloodhound({
        remote: {
            url: baseUrl + '/search/track?value=%QUERY%',
            wildcard: '%QUERY%'
        },
        datumTokenizer: Bloodhound.tokenizers.whitespace('value'),
        queryTokenizer: Bloodhound.tokenizers.whitespace
    });

    var engine2 = new Bloodhound({
        remote: {
            url: baseUrl + '/search/album?value=%QUERY%',
            wildcard: '%QUERY%'
        },
        datumTokenizer: Bloodhound.tokenizers.whitespace('value'),
        queryTokenizer: Bloodhound.tokenizers.whitespace
    });

    var engine3 = new Bloodhound({
        remote: {
            url: baseUrl + '/search/artist?value=%QUERY%',
            wildcard: '%QUERY%'
        },
        datumTokenizer: Bloodhound.tokenizers.whitespace('value'),
        queryTokenizer: Bloodhound.tokenizers.whitespace
    });

    $("#search-input").typeahead({
        hint: true,
        highlight: true,
        minLength: 1
    }, [
        {
            source: engine1.ttAdapter(),
            name: 'tracks-name',
            display: function(track) {
                return track.name;
            },
            templates: {
                empty: [
                    '<div class="header-title">Track Name</div><div class="list-group search-results-dropdown"><div class="list-group-item">Nothing found.</div></div>'
                ],
                header: [
                    '<div class="header-title">Track Name</div><div class="list-group search-results-dropdown"></div>'
                ],
                suggestion: function (track) {
                    return '<a href="' + baseUrl + '/track/' + track.id + '/' + track.slug + '.html" class="list-group-item">' + track.name + '</a>';
                }
            }
        },
        {
            source: engine2.ttAdapter(),
            name: 'albums-title',
            display: function(album) {
                return album.title;
            },
            templates: {
                empty: [
                    '<div class="header-title">Album title</div><div class="list-group search-results-dropdown"><div class="list-group-item">Nothing found.</div></div>'
                ],
                header: [
                    '<div class="header-title">Album title</div><div class="list-group search-results-dropdown"></div>'
                ],
                suggestion: function (album) {
                    return '<a href="' + baseUrl + '/album/' + album.id + '/' + album.slug + '.html" class="list-group-item">' + album.title + '</a>';
                }
            }
        },
        {
            source: engine3.ttAdapter(),
            name: 'artists-title',
            display: function(artist) {
                return artist.name;
            },
            templates: {
                empty: [
                    '<div class="header-title">Artist name</div><div class="list-group search-results-dropdown"><div class="list-group-item">Nothing found.</div></div>'
                ],
                header: [
                    '<div class="header-title">Artist name</div><div class="list-group search-results-dropdown"></div>'
                ],
                suggestion: function (artist) {
                    return '<a href="' + baseUrl + '/artist/' + artist.id + '/' + artist.slug + '.html" class="list-group-item">' + artist.name + '</a>';
                }
            }
        }
    ]);
});
