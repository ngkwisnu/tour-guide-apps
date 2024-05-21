import ImagePreview from '../ImagePreview';

export default function PackageLayout() {
  return (
    <>
      <main>
        <ImagePreview src="https://images.unsplash.com/photo-1714837003223-5144b6e082cb?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="h-96 " alt="Example Image" />

        <section className="mt-8 grid gap-2">
          <h1 className="text-2xl font-bold md:text-4xl">Tes</h1>
          <p className="text-sm text-gray-600 dark:text-gray-300">Written by Risal Amin</p>
        </section>
        <hr className="mt-4 dark:border-gray-600" />
        <section className="mt-4 grid gap-8 lg:grid-cols-[auto,1fr]">
          <article id="mdx-article" className="prose max-w-4xl dark:prose-invert">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum quam arcu, eu tempus tortor molestie at. Vestibulum pretium condimentum dignissim. Vestibulum ultrices vitae nisi sed imperdiet. Mauris quis erat
            consequat, commodo massa quis, feugiat sapien. Suspendisse placerat vulputate posuere. Curabitur neque tortor, mattis nec lacus non, placerat congue elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            condimentum quam arcu, eu tempus tortor molestie at. Vestibulum pretium condimentum dignissim. Vestibulum ultrices vitae nisi sed imperdiet. Mauris quis erat consequat, commodo massa quis, feugiat sapien. Suspendisse placerat
            vulputate posuere. Curabitur neque tortor, mattis nec lacus non, placerat congue elit.
          </article>
        </section>
      </main>
    </>
  );
}
