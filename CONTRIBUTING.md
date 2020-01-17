# Contribution Guidelines

## From Gatsby

*TODO: Expand on README here*

## From WordPress

There are two ways you can add content to the site. WordPress has the concept of "posts," and "pages." They both consist of a title and some content, but they are presented differently on the site.

You should use a post **if**:

* You are writing a column or article series
* You are writing about a point-in-time event or covering a new story
* Your content will not change significantly over time

You should use a page **if**:

* You are trying to end up with a specific URL (e.g. `/faq/then/another-path`)
* You expect the content to change significantly or even entirely over the life of the page

1. Log in to the WordPress site at [https://juicebook.net/wp-admin](https://juicebook.net/wp-admin)
2. Click on either "Pages" or "Posts"
3. Click "Add New"
4. Give your post/page a title and some content
5. To change the permalink (the URL that is reserved for this post/page) left click once in the title field
6. A tooltip labelled "Permalink" will appear
7. Click the "Edit" button to the right
8. Change the URL and click Save
9. Click "Publish..." in the upper right corner
10. Click "Publish" again to confirm and publish the document

### Advanced Topics

#### Nested URLs

To get a URL that looks like `/faq/sub-article`, do the following:

* Create a page called FAQ. Change its permalink to `/faq`
* Create a page called Sub-article. Change its permalink to '/sub-article'
* In the document properties on the right, look for a section called Page Attributes, and expand it
* Select "FAQ" as the parent page for Sub-article.
* Now the permalink for Sub-article is `/faq/sub-article`
