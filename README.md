# Remove Query Parameter

Links in emails often include tracking parameters, such as `https://example.com?utm_source=MI&utm_campaign=36e4&utm_medium=email&utm_term=0`. These tracking parameters give the web site's operator a clue about their marketing campaigns' efficacy. While that is a legitimate insight, not everyone feels the need to participate in someone else's market research study, particularly without providing prior consent.

This Thunderbird extension gives you the opportunity to open a link in your email and remove the entire query string--anything after the first question mark `?`. You right-click on a link in the email and select **Open without query string**.


To create the .xpi file from these source files, use the following command:

```
zip -r remove_query_parameters.xpi background.js manifest.json images/ -x images/icon_no_utm_64.xcf
```

For further reading:
* [A Beginners Guide to UTM Parameters (And How to Use Them)](https://www.monsterinsights.com/a-beginners-guide-to-utm-parameters/)
* [Installing an Add-on in Thunderbird](https://support.mozilla.org/en-US/kb/installing-addon-thunderbird)

