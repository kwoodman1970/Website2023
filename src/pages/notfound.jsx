function NotFoundPage() {
  return (
    <main>
      <h2>404 &ndash; Page Not Found</h2>

      <p>
        Well, <em>this</em> is awkward.  The page that you&apos;re looking for doesn&apos;t
        exist.
      </p>

      <p>
        It might have been moved or deleted, or perhaps it never existed in the first place.
      </p>

      <p>
        Here are some options:
      </p>

      <ul>
        <li>Check the URL for typos</li>
        <li>Use the navigation menu to find what you&apos;re looking for</li>
        <li>
          Go directly to the <a href="/">home page</a> (do not pass Go; do not collect $200)
        </li>
        <li>
          If you&apos;re sure that this is a mistake then please{" "}
          <a href="/contact">contact me</a> and tell me &ndash; you can be sure that I&apos;ll
          be very embarrassed.
        </li>
      </ul>

    </main>
  );
}

export default NotFoundPage;