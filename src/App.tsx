import '@fontsource-variable/dm-sans';
import { Layout } from './app/Layout';
import { CarouselHome } from './components/CarouselHome';

function App() {
  return (
    <Layout>
      <main className="max-w-screen-lg mx-auto lg:px-5">
        <CarouselHome />
      </main>
    </Layout>
  );
}

export default App;
