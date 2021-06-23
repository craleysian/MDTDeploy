function redirect() {
    // Get the URL of the current page (the callback URL) and split at parameters
    let url = window.location.href.split('&');
    
    // Variables to pass back to the origination site (Metadata Tracker)
    let authCode = '';
    let origURL  = '';

    // Traverse the callback URL parameters
    url.forEach(element => {
        
        // Extract the authorization code
        if (element.startsWith('code=')) {
            authCode = decodeURIComponent(element.substring(5, element.length));
        }

        // Extract the origination URL from the state parameter
        if (element.startsWith('state=')) {
            origURL = decodeURIComponent(element.substring(6, element.length));
        }
    })

    let destination = origURL + '?c__code=' + authCode;

    document.getElementById('auth-code').innerHTML = authCode;
    document.getElementById('state').innerHTML = origURL;

    window.location.replace(destination);
}